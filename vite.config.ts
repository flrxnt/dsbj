import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DSBJ',
      formats: ['es', 'umd'],
      fileName: (format) => `dsbj.${format}.js`,
    },
    cssFileName: 'dsbj',
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
});
