<p align="center">
  <img src="./assets/images/readme-banner.png" alt="DSBJ - Design Système du Bénin" width="100%" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@flrxnt/dsbj"><img src="https://img.shields.io/npm/v/@flrxnt/dsbj?color=006A4E&label=version" alt="Version NPM" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/licence-MIT-006A4E" alt="Licence MIT" /></a>
  <img src="https://img.shields.io/badge/WCAG-2.1%20AA-006A4E" alt="Conformité WCAG 2.1 AA" />
</p>

# DSBJ - Design Système du Bénin

Le **Design Système du Bénin (DSBJ)** est l'outil destiné à produire les interfaces officielles des services publics numériques. Il regroupe un ensemble de règles et de composants réutilisables pour fournir des services numériques simples, accessibles et reconnaissables.

> Construit avec SCSS · TypeScript · Vite · Vitest

---

## Installation

```bash
bun add @flrxnt/dsbj
```

## Intégration dans un projet existant

Le DSBJ est conçu pour **coexister avec votre CSS existant** sans le modifier. Tous les styles sont scopés aux classes `.bj-*` : aucun reset global, aucun style sur `body`, `h1`, `p`, `a`, `table`, etc.

```js
import '@flrxnt/dsbj';
```

C'est tout. Le module importe automatiquement les styles CSS et initialise les composants JavaScript au chargement du DOM. Votre UI existante n'est pas affectée.

Utilisez ensuite les composants DSBJ avec les classes `.bj-*` dans votre HTML :

```html
<button class="bj-btn bj-btn--primary">Valider</button>
<div class="bj-alert bj-alert--success">Opération réussie</div>
```

### Polices

Le DSBJ utilise Montserrat. Ajoutez-la dans votre `<head>` si elle n'est pas déjà chargée :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Projet 100% DSBJ (site gouvernemental)

Si le DSBJ est le **framework principal** de votre projet (site institutionnel, portail public), vous pouvez activer le reset CSS global complet qui stylise `body`, `h1-h6`, `p`, `a`, `table`, etc. :

```js
import '@flrxnt/dsbj';
import '@flrxnt/dsbj/reset';
```

> **Attention** : le reset modifie les styles de tous les éléments HTML. Ne l'utilisez pas si vous intégrez le DSBJ dans une application existante avec son propre CSS.

## Autres méthodes d'import

### CSS seul (sans JavaScript)

```js
import '@flrxnt/dsbj/css';
```

Ou en HTML :

```html
<link rel="stylesheet" href="node_modules/@flrxnt/dsbj/dist/dsbj.css">
```

### SCSS (personnalisation avancée)

```scss
@use '@flrxnt/dsbj/scss' as *;
```

Pour le reset global en SCSS :

```scss
@use '@flrxnt/dsbj/scss/reset';
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@flrxnt/dsbj/dist/dsbj.css">
<script src="https://unpkg.com/@flrxnt/dsbj/dist/dsbj.umd.js"></script>
```

Pour inclure le reset global via CDN :

```html
<link rel="stylesheet" href="https://unpkg.com/@flrxnt/dsbj/dist/dsbj-reset.css">
```

## Composants Vue 3

Des wrappers Vue 3 réactifs sont disponibles pour les 44+ composants du design système :

```js
import { BjButton, BjCard, BjModal } from '@flrxnt/dsbj/vue'
```

```vue
<BjButton variant="secondary" size="lg">Valider</BjButton>

<BjModal v-model="show" title="Confirmation">
  <p>Confirmer l'action ?</p>
</BjModal>

<BjAccordion exclusive>
  <BjAccordionItem id="a1" title="Section 1">Contenu</BjAccordionItem>
</BjAccordion>
```

Les composants interactifs utilisent des composables Vue natifs (`useModal`, `useAccordion`, `useToast`) avec v-model, emits et slots.

## Composants React

Des composants React avec TypeScript, hooks et forwardRef :

```js
import { BjButton, BjCard, BjModal, useModal } from '@flrxnt/dsbj/react'
```

```jsx
<BjButton variant="accent" size="lg">Valider</BjButton>

<BjModal open={isOpen} onClose={close} title="Confirmation">
  <p>Confirmer l'action ?</p>
</BjModal>
```

Les hooks `useModal` et `useToast` fournissent la gestion d'état. React 18+ requis (peerDependency).

## Résumé des exports

| Import | Contenu | Usage |
|--------|---------|-------|
| `@flrxnt/dsbj` | CSS scopé + JS | Intégration dans un projet existant |
| `@flrxnt/dsbj/vue` | Composants Vue 3 | Projet Vue (44+ composants) |
| `@flrxnt/dsbj/react` | Composants React | Projet React (44+ composants) |
| `@flrxnt/dsbj/css` | CSS scopé seul | Sans JavaScript |
| `@flrxnt/dsbj/reset` | Reset CSS global | Projet 100% DSBJ uniquement |
| `@flrxnt/dsbj/scss` | Sources SCSS | Personnalisation avancée |
| `@flrxnt/dsbj/scss/reset` | Sources SCSS du reset | Personnalisation du reset |

## Développement

```bash
# Installer les dépendances
bun install

# Serveur de développement (documentation avec hot-reload)
bun run dev

# Build de la bibliothèque (dist/)
bun run build

# Tests
bun run test

# Tests en mode watch
bun run test:watch
```

## Structure du projet

```
dsbj/
├── src/
│   ├── index.ts              # Point d'entrée (import SCSS + export JS)
│   ├── dsbj.scss             # Point d'entrée SCSS (styles scopés .bj-*)
│   ├── dsbj-reset.scss       # Reset CSS global (opt-in)
│   ├── core/                 # Fondamentaux (reset scopé, couleurs, typographie, grille, espacement)
│   ├── component/            # 44 composants SCSS
│   ├── utility/              # Classes utilitaires
│   ├── js/                   # Modules TypeScript (accordion, modal, tab, header, etc.)
│   ├── vue/                  # Composants Vue 3 (44 SFC + composables)
│   └── react/                # Composants React (44 TSX + hooks)
├── tests/                    # Tests Vitest
├── docs/                     # Documentation complète (Vue 3 + vite-ssg)
├── dist/                     # Build (CSS + JS ES + JS UMD + reset)
├── vite.config.ts            # Build library
├── vite.docs.config.ts       # Serveur de dev documentation
├── vitest.config.ts          # Configuration des tests
├── tsconfig.json             # TypeScript
└── package.json
```

## Build output

| Fichier | Taille | Description |
|---------|--------|-------------|
| `dist/dsbj.css` | ~103 Ko | Styles scopés (safe pour intégration) |
| `dist/dsbj.es.js` | ~27 Ko | Module ES |
| `dist/dsbj.umd.js` | ~22 Ko | Module UMD |
| `dist/dsbj-reset.css` | ~2 Ko | Reset global (opt-in) |

## Préfixe CSS

Toutes les classes utilisent le préfixe `bj-` et les variables CSS `--bj-*`.

## Thème sombre

```html
<html data-bj-theme="dark">
```

Le thème sombre s'active automatiquement avec `prefers-color-scheme: dark` ou manuellement via l'attribut `data-bj-theme`.

## Accessibilité

- Conforme WCAG 2.1 niveau AA
- Navigation clavier complète
- Attributs ARIA sur tous les composants interactifs
- Focus visible avec `focus-visible`
- Skip links intégrés

## Licence

MIT - République du Bénin
