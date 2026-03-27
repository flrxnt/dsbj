import { defineConfig, type Plugin } from 'vite';
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
  plugins: [injectCssImport()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/react/index.ts'),
      formats: ['es'],
      fileName: () => 'dsbj-react.mjs',
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
});
