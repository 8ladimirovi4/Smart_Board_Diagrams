import { fileURLToPath, URL } from 'node:url';
import { defineConfig} from 'vite';
import plugin from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [plugin()],
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
})
