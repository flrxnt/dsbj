import { $ } from 'bun'

type BumpType = 'patch' | 'minor' | 'major'

const BUMP_TYPE = (Bun.argv[2] as BumpType) || 'minor'

if (!['patch', 'minor', 'major'].includes(BUMP_TYPE)) {
  console.error('Usage: bun scripts/preview.ts [patch|minor|major]')
  process.exit(1)
}

function nextPreviewVersion(version: string, type: BumpType): string {
  const previewMatch = version.match(/^(.+)-preview\.(\d+)$/)
  if (previewMatch) {
    return `${previewMatch[1]}-preview.${Number(previewMatch[2]) + 1}`
  }

  const [major, minor, patch] = version.replace(/-.*$/, '').split('.').map(Number)
  let base: string
  switch (type) {
    case 'major': base = `${major + 1}.0.0`; break
    case 'minor': base = `${major}.${minor + 1}.0`; break
    case 'patch': base = `${major}.${minor}.${patch + 1}`; break
  }
  return `${base}-preview.0`
}

async function run() {
  const pkg = await Bun.file('package.json').json()
  const currentVersion = pkg.version
  const previewVersion = nextPreviewVersion(currentVersion, BUMP_TYPE)

  console.log(`\n🔬 Preview : ${currentVersion} → ${previewVersion}\n`)

  pkg.version = previewVersion
  await Bun.write('package.json', JSON.stringify(pkg, null, 2) + '\n')
  console.log('✅ package.json mis à jour')

  console.log('\n📦 Build en cours...\n')
  await $`bun run build`
  console.log('\n✅ Build terminé')

  console.log(`\n🚀 Prêt ! Pour publier la preview :\n`)
  console.log(`   npm publish --tag preview --access public\n`)
  console.log(`   Puis dans un autre projet :\n`)
  console.log(`   bun add @flrxnt/dsbj@preview\n`)
  console.log(`💡 Pour annuler et revenir à la version stable :\n`)
  console.log(`   npm version ${currentVersion} --no-git-tag-version\n`)
}

run()
