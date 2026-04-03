# Contribuer au DSBJ

Merci de l'intérêt que vous portez au Design Système du Bénin. Ce guide décrit les conventions et les étapes à suivre pour contribuer au projet.

## Prérequis

- [Bun](https://bun.sh/) v1.x
- Node.js 18+
- Git

## Installation locale

```bash
git clone https://github.com/flrxnt/dsbj.git
cd dsbj
bun install
```

### Commandes utiles

| Commande | Description |
|----------|-------------|
| `bun run dev` | Serveur de développement (documentation avec hot-reload) |
| `bun run build` | Build de la bibliothèque (`dist/`) |
| `bun run build:docs` | Build du site de documentation (`site/`) |
| `bun run test` | Lancer les tests Vitest |
| `bun run test:watch` | Tests en mode watch |

## Structure du projet

```
src/
├── core/              # Fondamentaux (reset scopé, couleurs, typographie, grille…)
├── component/         # Composants SCSS (un dossier par composant)
├── utility/           # Classes utilitaires
├── js/                # Modules TypeScript interactifs (vanilla)
├── vue/               # Wrappers Vue 3
│   ├── components/    # Composants Vue (BjButton.vue, BjModal.vue…)
│   ├── composables/   # Composables Vue (useModal, useToast…)
│   ├── icons/         # Icônes SVG en composants Vue
│   └── index.ts       # Point d'entrée Vue
├── react/             # Wrappers React
│   ├── components/    # Composants React (BjButton.tsx, BjModal.tsx…)
│   ├── hooks/         # Hooks React (useModal, useToast…)
│   ├── icons/         # Icônes SVG en composants React
│   └── index.ts       # Point d'entrée React
├── dsbj.scss          # Point d'entrée SCSS (styles scopés .bj-*)
├── dsbj-reset.scss    # Reset CSS global (opt-in, pour projets 100% DSBJ)
└── index.ts           # Point d'entrée JS

docs/                  # Site de documentation (Vue 3 + vite-ssg)
├── src/
│   ├── pages/         # Pages du site (composants/, integrations/, fondamentaux/…)
│   ├── components/    # Composants UI de la documentation
│   ├── data/          # Navigation, index de recherche, locales
│   │   ├── navigation.ts
│   │   ├── searchIndex.ts
│   │   └── locales/   # fr.json, en.json
│   └── router.ts      # Routes du site

mcp/                   # Serveur MCP (@flrxnt/dsbj-mcp)
├── src/data/
│   └── components.ts  # Catalogue des composants pour l'IA

tests/                 # Tests Vitest
scripts/               # Scripts de build, release, SEO, PWA
```

## Ajouter un composant

1. **SCSS** : créer `src/component/<nom>/style/_<nom>.scss` avec les styles BEM (`bj-<nom>`, `bj-<nom>__element`, `bj-<nom>--modificateur`).
2. **Enregistrer le SCSS** dans `src/dsbj.scss` : `@use 'component/<nom>/style/<nom>';`.
3. **JavaScript** (si interactif) : créer `src/js/<nom>.ts`, l'exporter depuis `src/index.ts` et appeler `register('<nom>', init<Nom>)`.
4. **Vue** : créer `src/vue/components/Bj<Nom>.vue` et l'exporter depuis `src/vue/index.ts`.
5. **React** : créer `src/react/components/Bj<Nom>.tsx` et l'exporter depuis `src/react/index.ts`.
6. **Page doc composant** : créer `docs/src/pages/composants/<Nom>Page.vue` (HTML/CSS pur).
7. **Page doc Vue** : créer `docs/src/pages/integrations/vue/<Nom>Page.vue`.
8. **Page doc React** : créer `docs/src/pages/integrations/react/<Nom>Page.vue`.
9. **Router** : ajouter les 3 routes dans `docs/src/router.ts`.
10. **Navigation** : ajouter les liens dans `docs/src/data/navigation.ts` (sidebar composants + integrations-vue + integrations-react).
11. **Index de recherche** : ajouter les entrées dans `docs/src/data/searchIndex.ts`.
12. **Traductions** : ajouter les clés dans `docs/src/data/locales/fr.json` et `en.json` (sections `route`, `breadcrumb`, `link`).
13. **Carte index** : ajouter une `DocsCard` dans `docs/src/pages/composants/IndexPage.vue`.
14. **MCP** : ajouter les données dans `mcp/src/data/components.ts`.
15. **Tests** : créer `tests/<nom>.test.ts`.
16. **Vérifier** : `bun run test` et `bun run build`.

## Conventions CSS

- **Préfixe** : toutes les classes utilisent `bj-`.
- **BEM** : bloc `bj-<nom>`, élément `bj-<nom>__élément`, modificateur `bj-<nom>--variante`.
- **Variables** : utiliser les custom properties `--bj-*` (jamais de valeurs codées en dur pour couleurs, espacements, tailles de police).
- **Responsive** : mobile-first, breakpoints via `@media (min-width: …)`.
- **Thème sombre** : les couleurs doivent fonctionner automatiquement grâce aux tokens `--bj-*` qui s'adaptent au thème.
- **Accessibilité** : contraste AA minimum (WCAG 2.1), focus visible, attributs ARIA.
- **Pas de styles globaux** : ne jamais cibler d'éléments HTML nus (`body`, `h1`, `p`, `a`, `table`, etc.) dans `dsbj.scss`. Les styles sur éléments nus vont uniquement dans `dsbj-reset.scss`. Les composants doivent être autonomes via leurs classes `.bj-*`.

## Convention de commits

Le projet suit [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>(<portée>): <description>

[corps optionnel]
```

Types courants :

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité ou composant |
| `fix` | Correction de bug |
| `docs` | Documentation uniquement |
| `style` | Formatage, pas de changement de logique |
| `refactor` | Refactorisation sans changement fonctionnel |
| `test` | Ajout ou modification de tests |
| `chore` | Maintenance, dépendances, CI |

## Processus de Pull Request

1. Forkez le dépôt et créez une branche depuis `main` : `git checkout -b feat/mon-composant`.
2. Faites vos modifications en respectant les conventions ci-dessus.
3. Vérifiez que les tests passent : `bun run test`.
4. Vérifiez que le build fonctionne : `bun run build`.
5. Commitez avec un message conforme aux Conventional Commits.
6. Poussez votre branche et ouvrez une Pull Request.
7. Décrivez clairement les changements et ajoutez des captures d'écran si pertinent.

## Signaler un bug

Ouvrez une issue en décrivant :
- Le comportement attendu vs. le comportement observé.
- Les étapes pour reproduire le problème.
- Le navigateur et l'OS concernés.
- Une capture d'écran ou un lien de reproduction si possible.

## Licence

En contribuant, vous acceptez que vos contributions soient publiées sous la licence [MIT](LICENSE).
