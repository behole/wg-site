import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    try {
      // Handle API routes
      const url = new URL(request.url);
      if (url.pathname.startsWith('/api/')) {
        return handleApiRequest(request, env, ctx);
      }

      // Serve static assets
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_MANIFEST: assetManifest,
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
        }
      );
    } catch (e) {
      if (e instanceof Error) {
        return new Response(`Error: ${e.message}`, { status: 500 });
      }
      return new Response('Internal Error', { status: 500 });
    }
  },
};

async function handleApiRequest(request, env, ctx) {
  const url = new URL(request.url);
  
  // Add your API routes here
  switch (url.pathname) {
    case '/api/health':
      return new Response(JSON.stringify({ status: 'healthy' }), {
        headers: { 'Content-Type': 'application/json' },
      });
      
    default:
      return new Response('Not Found', { status: 404 });
  }
}