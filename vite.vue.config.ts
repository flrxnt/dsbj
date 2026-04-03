import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

function injectCssImport(): Plugin {
  return {
    name: 'inject-css-import',
    generateBundle(_, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk' && chunk.isEntry) {
          chunk.code = `import '../dsbj.css';\n${chunk.code}`;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/vue/**/*.ts', 'src/vue/**/*.vue', 'src/shared/**/*.ts'],
      outDir: 'dist',
    }),
    injectCssImport(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vue/index.ts'),
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
