/**
 * Build le site de documentation Vue SSG.
 *
 * 1. Build la librairie DSBJ (dist/)
 * 2. Build le site Vue SSG (site/)
 *
 * Usage : bun run build:docs
 */

import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const pkg: { version: string } = JSON.parse(
  readFileSync(resolve(root, 'package.json'), 'utf-8'),
)

console.log(`\n📦  DSBJ Docs - build v${pkg.version}\n`)

console.log('▶  Build de la librairie (dist/)…')
execSync('bun run build', { cwd: root, stdio: 'inherit' })

console.log('\n▶  Build du site Vue SSG (site/)…')
execSync('npx vite-ssg build --config vite.docs.config.ts', {
  cwd: root,
  stdio: 'inherit',
})

console.log(`\n✅  Site construit dans site/  (v${pkg.version})`)
console.log('   Pour prévisualiser : bun run preview')
console.log('   Pour déployer      : uploader le dossier site/ sur votre hébergeur\n')
