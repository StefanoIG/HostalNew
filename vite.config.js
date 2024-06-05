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
                servicios: resolve(__dirname, 'Servicios.html'),
                menu: resolve(__dirname, 'Menu.html'),
                bebidas: resolve(__dirname, 'bebida.html'),
                cervezas: resolve(__dirname, 'Cervezas.html'),
                cocteles: resolve(__dirname, 'Cocteles.html'),
                piqueos: resolve(__dirname, 'Piqueos.html'),
                
            }
        }
    },
});