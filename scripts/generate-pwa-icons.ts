/**
 * Génère les icônes PWA (192×192, 512×512) depuis le favicon SVG.
 *
 * Usage : bun scripts/generate-pwa-icons.ts
 */

import sharp from 'sharp'
import { resolve } from 'node:path'

const root = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const publicDir = resolve(root, 'docs/public')
const faviconPath = resolve(publicDir, 'favicon.svg')

const sizes = [192, 512] as const

for (const size of sizes) {
  const output = resolve(publicDir, `pwa-${size}x${size}.png`)
  await sharp(faviconPath)
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(output)

  console.log(`✅  pwa-${size}x${size}.png`)
}

console.log('\n📦  Icônes PWA générées dans docs/public/')
