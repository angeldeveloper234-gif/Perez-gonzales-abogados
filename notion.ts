// Notion service — browser-compatible, proxy-aware
// Does NOT use @notionhq/client (which breaks in browser with relative baseUrl)
// Fetches blocks manually and converts to Markdown strings.

const NOTION_TOKEN = import.meta.env.VITE_NOTION_TOKEN || '';
const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID || '';

const API = import.meta.env.DEV ? '/notion-api' : 'https://api.notion.com/v1';

// Rewrite Notion CDN URLs to go through local proxy (avoids CORS on uploaded files)
function proxyNotionImageUrl(url: string): string {
    if (!url || !import.meta.env.DEV) return url;
    if (url.includes('files.notion.so')) {
        return url.replace('https://files.notion.so', '/notion-files');
    }
    if (url.includes('prod-files-secure.s3.us-west-2.amazonaws.com')) {
        return url.replace('https://prod-files-secure.s3.us-west-2.amazonaws.com', '/notion-secure');
    }
    return url; // External URLs (unsplash, etc.) pass through as-is
}
const HEADERS: HeadersInit = {
    'Authorization': `Bearer ${NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
};

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content?: string;   // Markdown
    coverImage?: string;
    status?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function richText(arr: any[]): string {
    return (arr || []).map((t: any) => t.plain_text ?? '').join('');
}

function parsePost(page: any): Post {
    const props = page.properties;
    const rawCover = page.cover?.external?.url || page.cover?.file?.url || '';
    return {
        id: page.id,
        title: richText(props.Nombre?.title) || richText(props.Name?.title) || 'Sin título',
        slug: props.Slug?.formula?.string || props.Slug?.url || richText(props.Slug?.rich_text) || '',
        date: props.Fecha?.date?.start || props.Date?.date?.start || '',
        excerpt: richText(props.Excerpt?.rich_text) || richText(props.Extracto?.rich_text) || '',
        status: props['Estado de publicación']?.select?.name || '',
        coverImage: proxyNotionImageUrl(rawCover),
    };
}

// ─── Block → Markdown converter ──────────────────────────────────────────────

function blockToMarkdown(block: any): string {
    const type: string = block.type;
    const b: any = block[type] ?? {};

    const text = richText(b.rich_text ?? []);

    switch (type) {
        case 'heading_1': return `\n# ${text}\n`;
        case 'heading_2': return `\n## ${text}\n`;
        case 'heading_3': return `\n### ${text}\n`;
        case 'paragraph': return text ? `\n${text}\n` : '';
        case 'bulleted_list_item': return `- ${text}`;
        case 'numbered_list_item': return `1. ${text}`;
        case 'quote': return `\n> ${text}\n`;
        case 'divider': return `\n---\n`;
        case 'code': return `\n\`\`\`${b.language ?? ''}\n${text}\n\`\`\`\n`;
        case 'callout': return `\n> ${b.icon?.emoji ?? '💡'} ${text}\n`;
        case 'image': {
            const rawUrl = b.external?.url || b.file?.url || '';
            const url = proxyNotionImageUrl(rawUrl);
            const caption = richText(b.caption ?? []);
            return url ? `\n![${caption}](${url})\n` : '';
        }
        case 'to_do': return `- [${b.checked ? 'x' : ' '}] ${text}`;
        case 'toggle': return `\n**${text}**\n`;
        default: return text ? `\n${text}\n` : '';
    }
}

async function fetchBlockChildren(blockId: string): Promise<string> {
    let allBlocks: any[] = [];
    let cursor: string | undefined;

    do {
        const url = cursor
            ? `${API}/blocks/${blockId}/children?page_size=100&start_cursor=${cursor}`
            : `${API}/blocks/${blockId}/children?page_size=100`;

        const res = await fetch(url, { headers: HEADERS });
        if (!res.ok) { console.error('Block fetch error', res.status); break; }

        const data = await res.json();
        allBlocks = [...allBlocks, ...data.results];
        cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);

    const lines: string[] = [];
    for (const block of allBlocks) {
        lines.push(blockToMarkdown(block));

        // Recursively get children for toggles and lists
        if (block.has_children) {
            const childMd = await fetchBlockChildren(block.id);
            if (childMd) lines.push(childMd);
        }
    }
    return lines.join('\n');
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function fetchBlogPosts(): Promise<Post[]> {
    try {
        const res = await fetch(`${API}/databases/${DATABASE_ID}/query`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                filter: { property: 'Estado de publicación', select: { equals: 'Publicado' } },
                sorts: [{ property: 'Fecha', direction: 'descending' }],
            }),
        });

        if (!res.ok) { console.error('fetchBlogPosts error', res.status); return []; }

        const data: any = await res.json();
        return data.results
            .map(parsePost)
            .filter((p: Post) => p.slug);
    } catch (err) {
        console.error('fetchBlogPosts:', err);
        return [];
    }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
    try {
        console.log('[Notion] fetchPostBySlug:', slug);

        const body = {
            filter: {
                and: [
                    { property: 'Estado de publicación', select: { equals: 'Publicado' } },
                    { property: 'Slug', formula: { string: { equals: slug } } },
                ],
            },
        };

        console.log('[Notion] query body:', JSON.stringify(body));

        const res = await fetch(`${API}/databases/${DATABASE_ID}/query`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const txt = await res.text();
            console.error('[Notion] query error', res.status, txt);
            return null;
        }

        const data: any = await res.json();
        console.log('[Notion] results:', data.results?.length);

        if (!data.results?.length) {
            console.warn('[Notion] no post found for slug:', slug);
            return null;
        }

        const page = data.results[0];
        const post = parsePost(page);
        const content = await fetchBlockChildren(page.id);
        post.content = content;

        console.log('[Notion] markdown length:', content.length);
        return post;
    } catch (err) {
        console.error('[Notion] fetchPostBySlug:', err);
        return null;
    }
}
