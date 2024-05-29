import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, 'contacto.html'),
                about: resolve(__dirname, 'about.html'),
                servicios: resolve(__dirname, 'servicios.html'),
                menu: resolve(__dirname, 'menu.html'),
                bebidas: resolve(__dirname, 'bebidas.html'),
                cervezas: resolve(__dirname, 'cervezas.html'),
                cocteles: resolve(__dirname, 'cocteles.html'),
                piqueos: resolve(__dirname, 'piqueos.html'),
                
            }
        }
    },
});