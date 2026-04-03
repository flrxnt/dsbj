import { defineConfig, type Plugin } from 'vite';
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
    dts({
      include: ['src/react/**/*.ts', 'src/react/**/*.tsx', 'src/shared/**/*.ts'],
      outDir: 'dist',
    }),
    injectCssImport(),
  ],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/react/index.ts'),
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
