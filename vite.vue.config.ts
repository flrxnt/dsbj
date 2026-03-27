import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function injectCssImport(): Plugin {
  return {
    name: 'inject-css-import',
    generateBundle(_, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk' && chunk.fileName.endsWith('.mjs')) {
          chunk.code = `import './dsbj.css';\n${chunk.code}`;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [vue(), injectCssImport()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vue/index.ts'),
      formats: ['es'],
      fileName: () => 'dsbj-vue.mjs',
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
});
