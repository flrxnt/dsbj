import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

function injectCssImport(): Plugin {
  return {
    name: 'inject-css-import',
    generateBundle(_, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk' && chunk.fileName.endsWith('.es.js')) {
          chunk.code = `import './dsbj.css';\n${chunk.code}`;
        }
      }
    },
  };
}

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/auto-init.ts'),
      name: 'DSBJ',
      formats: ['es', 'umd'],
      fileName: (format) => `dsbj.${format}.js`,
    },
    cssFileName: 'dsbj',
    cssMinify: true,
    outDir: 'dist',
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      exclude: ['src/vue/**', 'src/react/**', 'tests/**'],
    }),
    injectCssImport(),
  ],
});
