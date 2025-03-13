import { fileURLToPath, URL } from 'node:url';

import { defineConfig, Plugin } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ''
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = "webscadamt.smartboard.host.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    if (0 !== child_process.spawnSync('dotnet', [
        'dev-certs',
        'https',
        '--export-path',
        certFilePath,
        '--format',
        'Pem',
        '--no-password',
    ], { stdio: 'inherit', }).status) {
        throw new Error("Could not create certificate.");
    }
}

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7295';

    function copyAndDeleteThemeAssets(): Plugin {
        const srcDir = 'joint-light-theme/assets';
        const destDir = 'src/assets';
    
        const pathsToDeleteAfterCopy: string[] = [];
    
        function copyAssets(srcDir: string, destDir: string) {
            const files = fs.readdirSync(srcDir);
    
            for (const file of files) {
                const srcPath = path.join(srcDir, file);
                const destPath = path.join(destDir, file);
    
                if (fs.statSync(srcPath).isDirectory()) {
                    fs.mkdirSync(destPath, { recursive: true });
                    copyAssets(srcPath, destPath);
                } else {
                    fs.copyFileSync(srcPath, destPath);
                    pathsToDeleteAfterCopy.push(destPath);
                }
            }
        }
    
        return {
            name: 'copy-and-delete-assets',
            async buildStart() {
                copyAssets(srcDir, destDir);
            },
            async buildEnd() {
                for (const pathToDelete of pathsToDeleteAfterCopy) {
                    fs.unlinkSync(pathToDelete);
                }
            },
        };
    }
    
    function copyStaticAssets(): Plugin {
        const assetsToCopy = [
            'src/assets',
            'src/assets/navigator',
        ];
    
        return {
            name: 'copy-static-assets',
            apply: 'build',
            async buildEnd() {
                for (const asset of assetsToCopy) {
                    const files = fs.readdirSync(asset);
    
                    const folderPath = path.join('dist', asset.split('/').slice(1).join('/'));
                    fs.mkdirSync(folderPath, { recursive: true });
    
                    for (const file of files) {
                        const srcPath = path.join(asset, file);
                        const destPath = path.join(folderPath, file);
    
                        if (fs.statSync(srcPath).isDirectory()) {
                            continue;
                        }
    
                        fs.copyFileSync(srcPath, destPath);
                    }
                }
            },
        };
    }

// https://vitejs.dev/config/
export default defineConfig({
    //plugins: [plugin(), copyAndDeleteThemeAssets(), copyStaticAssets()],
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
    // server: {
    //       //host: '192.168.90.188', // remote access to host
    //     proxy: {
    //        '/api': {
    //     target: 'https://localhost:7295',
    //     secure: false
    //   }
    //     },
    //     port: 5173, //default 5173
    //     https:  {
    //         key: fs.readFileSync(keyFilePath),
    //         cert: fs.readFileSync(certFilePath),
    //     }
    // },
    //assetsInclude: '**/*.svg',
    // build: {
    //     emptyOutDir: false,
    //     rollupOptions: {
    //         output: {
    //             assetFileNames: (assetInfo) => {
    //                 const extension = assetInfo.name?.split('.').pop();
    //                 const path = extension === 'ttf' ? 'fonts/' : '';
    //                 return `assets/${path}[name].[ext]`;
    //             }
    //         },
    //     }
    // }
})
