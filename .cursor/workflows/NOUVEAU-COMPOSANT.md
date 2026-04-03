# Workflow : Créer un nouveau composant DSBJ

> Ce document décrit toutes les étapes pour ajouter un composant au Design Système du Bénin.

---

## Pré-requis

- Le nom du composant en **kebab-case** (ex: `progress-bar`)
- Le nom PascalCase avec préfixe `Bj` (ex: `BjProgressBar`)
- La classe CSS BEM de base (ex: `.bj-progress-bar`)

| Format | Exemple |
|--------|---------|
| Dossier SCSS | `src/component/progress-bar/style/` |
| Fichier SCSS | `_progress-bar.scss` |
| Classe CSS | `.bj-progress-bar` |
| Composant Vue | `BjProgressBar.vue` |
| Composant React | `BjProgressBar.tsx` |
| Page doc | `ProgressBarPage.vue` |
| Route | `/composants/progress-bar` |

---

## Checklist rapide

```
[ ] 1. SCSS — styles du composant
[ ] 2. SCSS — import dans dsbj.scss
[ ] 3. JS (optionnel) — module interactif + export index.ts
[ ] 4. Vue — wrapper composant + export vue/index.ts
[ ] 5. React — wrapper composant + export react/index.ts
[ ] 6. Doc — page composants (HTML/CSS)
[ ] 7. Doc — page intégration Vue
[ ] 8. Doc — page intégration React
[ ] 9. Doc — 3 routes dans router.ts
[ ] 10. Doc — navigation sidebar (navigation.ts)
[ ] 11. Doc — index de recherche (searchIndex.ts)
[ ] 12. Doc — traductions (fr.json + en.json)
[ ] 13. Doc — carte dans IndexPage composants
[ ] 14. MCP — données dans mcp/src/data/components.ts
[ ] 15. Tests — tests Vitest
[ ] 16. Vérification — build + tests
```

---

## Étape 1 — SCSS

Créer le fichier `src/component/<slug>/style/_<slug>.scss` :

```scss
.bj-<slug> {
  // Conteneur principal
}

.bj-<slug>__element {
  // Élément interne (BEM)
}

.bj-<slug>--variante {
  // Modificateur (BEM)
}
```

Règles :
- Utiliser les tokens `var(--bj-*)` pour couleurs, espacements, tailles
- Couleur primaire interactive : `var(--bj-action-high)`
- Bordures : `var(--bj-border-subtle)` pour l'état par défaut
- Focus : `outline: 2px solid var(--bj-action-high)`
- Transitions : `var(--bj-duration-fast) var(--bj-easing)`
- Mobile-first, responsive avec `@media (min-width: ...)`

---

## Étape 2 — Import SCSS

Ajouter dans `src/dsbj.scss` :

```scss
@use 'component/<slug>/style/<slug>';
```

---

## Étape 3 — JavaScript (si interactif)

Créer `src/js/<slug>.ts` :

```typescript
import { register, queryNew } from './core';

export function init<Nom>(): void {
  const elements = queryNew<HTMLElement>('[data-bj-<slug>]');
  elements.forEach((el) => {
    // Logique d'initialisation
  });
}

register('<slug>', init<Nom>);
```

Ajouter dans `src/index.ts` :
- L'import `import { init<Nom> } from './js/<slug>';`
- L'export dans le bloc `export { ... }`
- L'appel dans `initDSBJ()`

---

## Étape 4 — Wrapper Vue

Créer `src/vue/components/Bj<Nom>.vue` :

```vue
<script lang="ts">
export interface Bj<Nom>Props {
  // Typer les props
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Bj<Nom>Props>(), {
  // Valeurs par défaut
})
</script>

<template>
  <div class="bj-<slug>">
    <slot />
  </div>
</template>
```

Ajouter l'export dans `src/vue/index.ts` :

```typescript
export { default as Bj<Nom> } from './components/Bj<Nom>.vue'
```

---

## Étape 5 — Wrapper React

Créer `src/react/components/Bj<Nom>.tsx` :

```tsx
import type { ReactNode } from 'react'

export interface Bj<Nom>Props {
  children?: ReactNode
  className?: string
}

export function Bj<Nom>({ children, className }: Bj<Nom>Props) {
  return (
    <div className={['bj-<slug>', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

Bj<Nom>.displayName = 'Bj<Nom>'
```

Ajouter l'export dans `src/react/index.ts` :

```typescript
export { Bj<Nom> } from './components/Bj<Nom>'
```

---

## Étape 6 — Page doc composant (HTML/CSS)

Créer `docs/src/pages/composants/<Nom>Page.vue` avec :
- `useI18n` inline FR + EN
- Sections : exemples, variantes, classes CSS, attributs data, accessibilité
- Utiliser `DocsPreview`, `DocsCode`, `DocsSection`, `DocsPropsTable`
- Section accessibilité avec slot :

```vue
<DocsSection id="a11y-<slug>" :title="t('section-accessibilite')">
  <DocsA11yNote>
    <span v-html="t('a11y-note')" />
  </DocsA11yNote>
</DocsSection>
```

---

## Étape 7 — Page doc Vue

Créer `docs/src/pages/integrations/vue/<Nom>Page.vue` avec :
- Import du composant Vue depuis `@dsbj/vue/components/Bj<Nom>.vue`
- Sections : utilisation, aperçu interactif, props, événements, slots, accessibilité
- Même pattern `DocsA11yNote` avec slot et `v-html`

---

## Étape 8 — Page doc React

Créer `docs/src/pages/integrations/react/<Nom>Page.vue` avec :
- Aperçu via le composant Vue (la doc est en Vue)
- Sections : utilisation, aperçu interactif, props, accessibilité

---

## Étape 9 — Routes

Ajouter 3 routes dans `docs/src/router.ts` :

```typescript
// Composants
{
  path: '/composants/<slug>',
  component: () => import('./pages/composants/<Nom>Page.vue'),
  meta: { layout: 'docs', section: 'composants', titleKey: 'route.<slug>',
    breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.<slug>' }] },
},

// Intégration Vue
{
  path: '/integrations/vue/<slug>',
  component: () => import('./pages/integrations/vue/<Nom>Page.vue'),
  meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-<slug>',
    breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.<slug>' }] },
},

// Intégration React
{
  path: '/integrations/react/<slug>',
  component: () => import('./pages/integrations/react/<Nom>Page.vue'),
  meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-<slug>',
    breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.<slug>' }] },
},
```

---

## Étape 10 — Navigation

Dans `docs/src/data/navigation.ts`, ajouter dans le groupe approprié des 3 sidebars :

- `composants` : `{ label: 'Nom FR', to: '/composants/<slug>', i18nKey: 'link.<slug>' }`
- `integrations-vue` : `{ label: 'Bj<Nom>', to: '/integrations/vue/<slug>', i18nKey: 'link.<slug>' }`
- `integrations-react` : `{ label: 'Bj<Nom>', to: '/integrations/react/<slug>', i18nKey: 'link.<slug>' }`

---

## Étape 11 — Index de recherche

Dans `docs/src/data/searchIndex.ts` :

```typescript
{ label: 'Nom', path: '/composants/<slug>', section: 'Composants', keywords: ['mot-clé1', 'bj-<slug>'] },
{ label: 'Bj<Nom>', path: '/integrations/vue/<slug>', section: 'Vue', keywords: ['<slug>', 'vue', 'Bj<Nom>'] },
{ label: 'Bj<Nom>', path: '/integrations/react/<slug>', section: 'React', keywords: ['<slug>', 'react', 'Bj<Nom>'] },
```

---

## Étape 12 — Traductions

Dans `docs/src/data/locales/fr.json` et `en.json`, ajouter dans les sections :

```json
"route": { "<slug>": "Nom - DSBJ", "vue-<slug>": "Bj<Nom> Vue - DSBJ", "react-<slug>": "Bj<Nom> React - DSBJ" },
"breadcrumb": { "<slug>": "Nom" },
"link": { "<slug>": "Nom" }
```

---

## Étape 13 — Carte IndexPage

Ajouter dans `docs/src/pages/composants/IndexPage.vue` :

- Les clés i18n `card-<slug>-title` et `card-<slug>-desc` (FR + EN)
- Le composant `DocsCard` dans le template :

```vue
<DocsCard
  to="/composants/<slug>"
  icon="ri-<icon>-line"
  :title="t('card-<slug>-title')"
  :description="t('card-<slug>-desc')"
/>
```

---

## Étape 14 — MCP

Ajouter dans `mcp/src/data/components.ts` :

```typescript
{
  name: 'Nom',
  slug: '<slug>',
  category: 'Interactifs',
  description: 'Description courte.',
  classes: ['bj-<slug>', 'bj-<slug>__element'],
  aria: ['role="..."', 'aria-label'],
  jsHooks: ['data-bj-<slug>'],
  markup: `<div class="bj-<slug>" data-bj-<slug>>...</div>`,
},
```

---

## Étape 15 — Tests

Créer `tests/<slug>.test.ts` :

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { init<Nom> } from '../src/js/<slug>';

describe('<slug>', () => {
  beforeEach(() => {
    document.body.innerHTML = `<!-- Markup du composant -->`;
    init<Nom>();
  });

  it('should initialize correctly', () => {
    // Assertions
  });
});
```

---

## Étape 16 — Vérification

```bash
bun run test
bun run build
bun run dev  # Vérifier visuellement les 3 pages, FR/EN, thème clair/sombre
```
