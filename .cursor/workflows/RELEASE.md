# Workflow : Publier une release DSBJ

> Ce document décrit les étapes pour publier une nouvelle version du Design Système du Bénin.

---

## Pré-requis

- Branche `main` à jour et tous les tests passent
- Droits de publication npm (`@flrxnt/dsbj`)
- Token npm configuré dans les secrets GitHub (`NPM_TOKEN`)
- CHANGELOG.md à jour

---

## Checklist rapide

```
[ ] 1. Vérifier l'état du projet
[ ] 2. Mettre à jour le CHANGELOG
[ ] 3. Bumper la version
[ ] 4. Build et tests finaux
[ ] 5. Créer le tag Git
[ ] 6. Pousser et déclencher la CI
[ ] 7. Vérifier la publication
```

---

## Étape 1 — Vérifier l'état du projet

```bash
git checkout main
git pull origin main
bun run test
bun run build
bun run build:docs
```

Vérifier qu'il n'y a pas d'erreurs de lint, de tests qui échouent ou de problèmes de build.

---

## Étape 2 — Mettre à jour le CHANGELOG

Éditer `CHANGELOG.md` pour documenter les changements depuis la dernière release :

```markdown
## [x.y.z] — YYYY-MM-DD

### Ajouté
- feat(composant): description

### Corrigé
- fix(composant): description

### Modifié
- refactor(composant): description
```

---

## Étape 3 — Bumper la version

Mettre à jour la version dans les fichiers suivants :

| Fichier | Champ |
|---------|-------|
| `package.json` | `"version"` |
| `src/dsbj.scss` | Commentaire d'en-tête `/*! DSBJ vX.Y.Z ...*/` |
| `mcp/package.json` | `"version"` (si changement MCP) |

Règles de versioning (semver) :
- **Patch** (`x.y.Z`) : corrections de bugs CSS/JS, typos doc
- **Minor** (`x.Y.0`) : nouveau composant, nouvelle variante, nouvelle fonctionnalité rétro-compatible
- **Major** (`X.0.0`) : breaking changes (renommage de classes, suppression de composant, changement d'API)

---

## Étape 4 — Build et tests finaux

```bash
bun run test
bun run build
```

---

## Étape 5 — Créer le tag Git

```bash
git add -A
git commit -m "chore: release vX.Y.Z"
git tag vX.Y.Z
```

---

## Étape 6 — Pousser

```bash
git push origin main
git push origin vX.Y.Z
```

Le tag déclenche le workflow GitHub Actions `release.yml` qui :
1. Vérifie les tests
2. Build la bibliothèque
3. Publie sur npm avec provenance
4. Crée une GitHub Release avec le changelog

Le push sur `main` déclenche `deploy-docs.yml` qui déploie le site de documentation.

---

## Étape 7 — Vérifier la publication

- [ ] Package visible sur [npmjs.com/@flrxnt/dsbj](https://www.npmjs.com/package/@flrxnt/dsbj)
- [ ] GitHub Release créée avec le bon changelog
- [ ] Site de documentation déployé et accessible
- [ ] Nouvelle version installable : `bun add @flrxnt/dsbj@X.Y.Z`
