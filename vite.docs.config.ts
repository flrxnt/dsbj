import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))

export default defineConfig({
  root: 'docs',
  plugins: [vue()],
  define: {
    __DSBJ_VERSION__: JSON.stringify(pkg.version),
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  resolve: {
    alias: {
      '@dsbj': resolve(__dirname, 'src'),
      '@docs': resolve(__dirname, 'docs/src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: resolve(__dirname, 'site'),
    emptyOutDir: true,
  },
  ssgOptions: {
    script: 'async',
  },
})
