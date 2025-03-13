import { fileURLToPath, URL } from 'node:url';
import { defineConfig, Plugin } from 'vite';
import plugin from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    //plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '/assets': path.resolve(__dirname, 'src/assets'),
            'components': path.resolve(__dirname, 'src/components'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'store': path.resolve(__dirname, 'src/store'),
            'styles': path.resolve(__dirname, 'src/styles'),
            '/joint-light-theme': path.resolve(__dirname, 'joint-light-theme'),
        }
    },
    server: {
        proxy: {
           '/api': {
        target: 'https://localhost:7295',
        secure: false
      }
        },
        port: 5173,
    },
    assetsInclude: '**/*.svg',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const extension = assetInfo.name?.split('.').pop();
                    const path = extension === 'ttf' ? 'fonts/' : '';
                    return `assets/${path}[name].[ext]`;
                }
            },
        }
    }
})
