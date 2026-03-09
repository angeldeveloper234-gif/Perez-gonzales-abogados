// Netlify Edge Function: notion-proxy
// Runs on Deno (NOT Node.js) — use Deno.env.get() for env vars.
// Proxies all Notion API requests server-side to avoid browser CORS.

export default async (request: Request) => {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }

    try {
        const url = new URL(request.url);

        // Strip the function path prefix to get the Notion API path
        // e.g. /notion-proxy/databases/xxx/query  →  /databases/xxx/query
        const notionPath = url.pathname.replace('/notion-proxy', '');
        const notionUrl = `https://api.notion.com/v1${notionPath}${url.search}`;

        // Deno environment variable access (Edge Functions run on Deno, NOT Node.js)
        const token = Deno.env.get('VITE_NOTION_TOKEN') ?? '';

        if (!token) {
            return new Response(JSON.stringify({ error: 'Notion token not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const body = (request.method !== 'GET' && request.method !== 'HEAD')
            ? await request.text()
            : undefined;

        const notionResponse = await fetch(notionUrl, {
            method: request.method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
            },
            body,
        });

        const responseText = await notionResponse.text();

        return new Response(responseText, {
            status: notionResponse.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    } catch (err) {
        console.error('notion-proxy error:', err);
        return new Response(JSON.stringify({ error: String(err) }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

export const config = {
    path: '/notion-proxy/*',
};
