import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/notion-api': {
          target: 'https://api.notion.com/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/notion-api/, ""),
          headers: {
            'Notion-Version': '2022-06-28'
          }
        },
        '/notion-files': {
          target: 'https://files.notion.so',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/notion-files/, ""),
        },
        '/notion-secure': {
          target: 'https://prod-files-secure.s3.us-west-2.amazonaws.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/notion-secure/, ""),
        }
      }
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
