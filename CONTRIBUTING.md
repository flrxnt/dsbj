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
| `bun run test` | Lancer les tests Vitest |
| `bun run test:watch` | Tests en mode watch |

## Structure du projet

```
src/
├── core/           # Fondamentaux (reset, couleurs, typographie, grille…)
├── component/      # Composants SCSS (un dossier par composant)
├── utility/        # Classes utilitaires
├── js/             # Modules TypeScript interactifs
├── dsbj.scss       # Point d'entrée SCSS
└── index.ts        # Point d'entrée JS

docs/               # Site de documentation (Vue 3 + vite-ssg)
tests/              # Tests Vitest
```

## Ajouter un composant

1. Créer le dossier `src/component/<nom>/style/_<nom>.scss`.
2. Écrire les styles en suivant la convention BEM avec le préfixe `bj-` (ex. `.bj-<nom>`, `.bj-<nom>__element`, `.bj-<nom>--modificateur`).
3. Utiliser les tokens CSS du design system : `var(--bj-spacing-*)`, `var(--bj-fs-*)`, `var(--bj-fw-*)`, `var(--bj-color-*)`, etc.
4. Enregistrer le composant dans `src/dsbj.scss` : `@use 'component/<nom>/style/<nom>';`.
5. Si le composant nécessite du JavaScript, créer `src/js/<nom>.ts`, l'exporter depuis `src/index.ts` et appeler `register('<nom>', init<Nom>)`.
6. Créer la page de documentation `docs/src/pages/composants/<Nom>Page.vue` en suivant le pattern des pages existantes.
7. Ajouter la route dans `docs/src/router.ts`.
8. Ajouter la carte dans `docs/src/pages/composants/IndexPage.vue`.

## Conventions CSS

- **Préfixe** : toutes les classes utilisent `bj-`.
- **BEM** : bloc `bj-<nom>`, élément `bj-<nom>__élément`, modificateur `bj-<nom>--variante`.
- **Variables** : utiliser les custom properties `--bj-*` (jamais de valeurs codées en dur pour couleurs, espacements, tailles de police).
- **Responsive** : mobile-first, breakpoints via `@media (min-width: …)`.
- **Thème sombre** : les couleurs doivent fonctionner automatiquement grâce aux tokens `--bj-*` qui s'adaptent au thème.
- **Accessibilité** : contraste AA minimum (WCAG 2.1), focus visible, attributs ARIA.

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
