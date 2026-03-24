import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'site'),
  },
  preview: {
    port: 4173,
    open: '/',
    host: true,
  },
})
