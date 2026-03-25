import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'path';

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
  plugins: [injectCssImport()],
});
