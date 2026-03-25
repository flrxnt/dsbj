import { $ } from 'bun'

type BumpType = 'patch' | 'minor' | 'major'

const BUMP_TYPE = (Bun.argv[2] as BumpType) || 'patch'

if (!['patch', 'minor', 'major'].includes(BUMP_TYPE)) {
  console.error('Usage: bun scripts/release.ts [patch|minor|major]')
  process.exit(1)
}

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  'Ajouté': ['add', 'ajout', 'new', 'nouveau', 'create', 'créer', 'introduce', 'implement', 'feat'],
  'Modifié': ['update', 'change', 'modif', 'enhance', 'refactor', 'improve', 'rename', 'move', 'replace', 'upgrade'],
  'Corrigé': ['fix', 'corrig', 'bug', 'patch', 'repair', 'resolve', 'hotfix'],
  'Supprimé': ['remove', 'delete', 'supprim', 'drop', 'deprecat'],
}

function bumpVersion(version: string, type: BumpType): string {
  const [major, minor, patch] = version.split('.').map(Number)
  switch (type) {
    case 'major': return `${major + 1}.0.0`
    case 'minor': return `${major}.${minor + 1}.0`
    case 'patch': return `${major}.${minor}.${patch + 1}`
  }
}

function categorize(message: string): string {
  const lower = message.toLowerCase()
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) return category
  }
  return 'Modifié'
}

function formatDate(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

async function run() {
  const status = await $`git status --porcelain`.text()
  if (status.trim()) {
    console.error("⛔ L'arbre de travail n'est pas propre. Committez ou stashez vos changements.")
    process.exit(1)
  }

  const pkg = await Bun.file('package.json').json()
  const currentVersion = pkg.version
  const newVersion = bumpVersion(currentVersion, BUMP_TYPE)

  console.log(`\n📦 ${currentVersion} → ${newVersion} (${BUMP_TYPE})\n`)

  const lastTag = (await $`git describe --tags --abbrev=0 2>/dev/null || echo ""`.text()).trim()
  const range = lastTag ? `${lastTag}..HEAD` : 'HEAD'
  const logOutput = (await $`git log ${range} --pretty=format:%s`.text()).trim()

  if (!logOutput) {
    console.error('⛔ Aucun commit depuis le dernier tag.')
    process.exit(1)
  }

  const commits = logOutput.split('\n').filter(Boolean)
  const grouped: Record<string, string[]> = {}

  for (const msg of commits) {
    const cat = categorize(msg)
    ;(grouped[cat] ??= []).push(msg)
  }

  const order = ['Ajouté', 'Modifié', 'Corrigé', 'Supprimé']
  let entry = `## [${newVersion}] - ${formatDate()}\n`

  for (const cat of order) {
    const items = grouped[cat]
    if (!items?.length) continue
    entry += `\n### ${cat}\n\n`
    for (const item of items) {
      entry += `- ${item}\n`
    }
  }

  console.log('📝 Changelog généré :\n')
  console.log(entry)

  const changelog = await Bun.file('CHANGELOG.md').text()
  const marker = '## ['
  const insertPos = changelog.indexOf(marker)
  if (insertPos === -1) {
    console.error("⛔ Impossible de trouver un point d'insertion dans CHANGELOG.md")
    process.exit(1)
  }

  const updatedChangelog = changelog.slice(0, insertPos) + entry + '\n' + changelog.slice(insertPos)
  await Bun.write('CHANGELOG.md', updatedChangelog)
  console.log('✅ CHANGELOG.md mis à jour')

  pkg.version = newVersion
  await Bun.write('package.json', JSON.stringify(pkg, null, 2) + '\n')
  console.log('✅ package.json mis à jour')

  await $`git add CHANGELOG.md package.json`
  await $`git commit -m ${'v' + newVersion}`
  console.log('✅ Commit créé')

  await $`git tag ${'v' + newVersion}`
  console.log(`✅ Tag v${newVersion} créé`)

  console.log(`\n🚀 Prêt ! Lancez « bun run release » pour publier.\n`)
}

run()
