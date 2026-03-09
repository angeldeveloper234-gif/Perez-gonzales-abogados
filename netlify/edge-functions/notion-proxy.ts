// Netlify Function: notion-proxy
// Proxies all requests to the Notion API server-side to avoid CORS in production.
// URL pattern: /.netlify/functions/notion-proxy/<path>
// e.g.: /.netlify/functions/notion-proxy/databases/DB_ID/query

export default async (request: Request) => {
    const url = new URL(request.url);

    // Extract the Notion API path from the URL
    // e.g. /notion-proxy/databases/xxx/query  →  /databases/xxx/query
    const notionPath = url.pathname.replace('/.netlify/functions/notion-proxy', '');
    const notionUrl = `https://api.notion.com/v1${notionPath}${url.search}`;

    const token = process.env.VITE_NOTION_TOKEN || '';

    const headers: Record<string, string> = {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
    };

    // Clone body for passthrough
    const body = request.method !== 'GET' && request.method !== 'HEAD'
        ? await request.text()
        : undefined;

    const notionResponse = await fetch(notionUrl, {
        method: request.method,
        headers: headers,
        body: body,
    });

    const responseBody = await notionResponse.text();

    return new Response(responseBody, {
        status: notionResponse.status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
};

export const config = {
    path: '/notion-proxy/*',
};
