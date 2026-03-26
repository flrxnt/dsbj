# Workflow : Créer un nouveau composant DSBJ

> Ce document décrit **toutes les étapes** pour ajouter un composant au Design Système du Bénin, du SCSS aux tests en passant par les wrappers Vue/React et la documentation complète.

---

## Pré-requis

- Le nom du composant en **kebab-case** (ex: `progress-bar`)
- Le nom PascalCase avec préfixe `Bj` (ex: `BjProgressBar`)
- La classe CSS BEM de base (ex: `.bj-progress-bar`)

> **Convention de nommage :**
> | Format | Exemple |
> |--------|---------|
> | Dossier SCSS | `src/component/progress-bar/style/` |
> | Fichier SCSS | `_progress-bar.scss` |
> | Classe CSS | `.bj-progress-bar` |
> | Composant Vue | `BjProgressBar.vue` |
> | Composant React | `BjProgressBar.tsx` |
> | Page doc | `ProgressBarPage.vue` |
> | Route | `/composants/progress-bar` |

---

## Checklist rapide

```
[ ] 1. SCSS — styles du composant
[ ] 2. SCSS — import dans dsbj.scss
[ ] 3. JS (optionnel) — module interactif
[ ] 4. Vue — wrapper composant
[ ] 5. Vue — export barrel
[ ] 6. React — wrapper composant
[ ] 7. React — export barrel
[ ] 8. Doc — page composants (HTML/CSS)
[ ] 9. Doc — page intégration Vue
[ ] 10. Doc — page intégration React
[ ] 11. Doc — route dans router.ts
[ ] 12. Doc — carte dans IndexPage composants
[ ] 13. Doc — carte dans IndexPage Vue
[ ] 14. Doc — carte dans IndexPage React
[ ] 15. Doc — sidebar dans navigation.ts
[ ] 16. Doc — entrée dans searchIndex.ts
[ ] 17. Doc — clés i18n dans fr.json et en.json
[ ] 18. MCP — données composant + fichiers llms
[ ] 19. Tests — tests Vitest
[ ] 20. Vérification — build + tests
```

---

## Étape 1 — Styles SCSS

**Fichier :** `src/component/<nom>/style/_<nom>.scss`

### Règles

- Préfixe `bj-` sur toutes les classes
- Convention BEM : `.bj-<nom>`, `.bj-<nom>__element`, `.bj-<nom>--modifier`
- Utiliser uniquement les tokens CSS : `var(--bj-spacing-*)`, `var(--bj-fs-*)`, `var(--bj-fw-*)`, `var(--bj-color-*)`, `var(--bj-radius-*)`, `var(--bj-duration-*)`, `var(--bj-easing)`
- Jamais de valeurs codées en dur pour couleurs, espacements, tailles de police
- Contraste AA minimum (WCAG 2.1)
- Focus visible obligatoire (`:focus-visible`)
- Mobile-first, breakpoints via `@media (min-width: …)`
- Les couleurs doivent fonctionner automatiquement en thème sombre grâce aux tokens `--bj-*`

### Template

```scss
.<nom-classe> {
  // Structure de base
  display: ...;
  padding: var(--bj-spacing-2v) var(--bj-spacing-4v);
  font-size: var(--bj-fs-md);
  font-weight: var(--bj-fw-medium);
  line-height: var(--bj-lh-normal);
  color: var(--bj-text-default);
  border-radius: var(--bj-radius-xs);
  transition: all var(--bj-duration-fast) var(--bj-easing);
}

// Variantes
.<nom-classe>--variant {
  background-color: var(--bj-action-high);
  color: #fff;
}

// Éléments internes
.<nom-classe>__element {
  // ...
}

// État désactivé
.<nom-classe>--disabled,
.<nom-classe>:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

// Responsive
@media (max-width: 36rem) {
  .<nom-classe> {
    // ajustements mobiles
  }
}
```

### Prompt IA

```
Crée le fichier SCSS pour le composant DSBJ "<NOM>".

Contexte :
- Fichier : src/component/<nom>/style/_<nom>.scss
- Classe de base : .bj-<nom>
- Convention BEM avec préfixe bj-
- Utiliser exclusivement les tokens CSS var(--bj-*)
- Pas de valeurs codées en dur
- Support thème sombre automatique via les tokens
- Focus visible, contraste AA, responsive mobile-first
- Variantes nécessaires : <LISTER LES VARIANTES>
- Éléments internes : <LISTER LES ÉLÉMENTS>

Fonctionnalité du composant : <DÉCRIRE LE COMPOSANT>
```

---

## Étape 2 — Enregistrer dans dsbj.scss

**Fichier :** `src/dsbj.scss`

Ajouter à la fin de la section `COMPOSANTS` :

```scss
@use 'component/<nom>/style/<nom>';
```

---

## Étape 3 — JavaScript interactif (optionnel)

**Uniquement si le composant a un comportement JS** (accordéon, modale, dropdown, etc.)

**Fichier :** `src/js/<nom>.ts`

- Créer une fonction `init<Nom>(el: HTMLElement)` qui initialise le comportement
- Exporter depuis `src/index.ts`
- Appeler `register('<nom>', init<Nom>)` dans l'index

---

## Étape 4 — Composant Vue

**Fichier :** `src/vue/components/Bj<Nom>.vue`

### Template

```vue
<script lang="ts">
export interface Bj<Nom>Props {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  // ... autres props
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<Bj<Nom>Props>(), {
  variant: 'primary',
})

const classes = computed(() => [
  'bj-<nom>',
  props.variant !== 'primary' && `bj-<nom>--${props.variant}`,
  props.disabled && 'bj-<nom>--disabled',
])
</script>

<template>
  <div
    :class="classes"
    :aria-disabled="disabled ? 'true' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
```

### Principes

- Interface `Props` exportée dans un `<script lang="ts">` séparé (pour auto-import)
- `withDefaults` pour les valeurs par défaut
- Classes calculées via `computed` qui retourne un tableau
- `v-bind="$attrs"` pour le pass-through
- Attributs ARIA appropriés
- Slot par défaut pour le contenu enfant

### Prompt IA

```
Crée le composant Vue 3 pour le composant DSBJ "<NOM>".

Contexte :
- Fichier : src/vue/components/Bj<Nom>.vue
- Interface Props exportée dans <script lang="ts"> séparé
- Utiliser script setup + withDefaults + computed pour les classes
- v-bind="$attrs" pour le pass-through
- Attributs ARIA appropriés
- Classe CSS de base : .bj-<nom>

Props nécessaires : <LISTER>
Fonctionnalité : <DÉCRIRE>
```

---

## Étape 5 — Export Vue

**Fichier :** `src/vue/index.ts`

Ajouter dans la catégorie appropriée :

```ts
export { default as Bj<Nom> } from './components/Bj<Nom>.vue'
```

> **Catégories existantes :** Base, Card, Feedback, Form, Interactive, Navigation, Content, Regulatory

---

## Étape 6 — Composant React

**Fichier :** `src/react/components/Bj<Nom>.tsx`

### Template

```tsx
import { type ComponentPropsWithoutRef } from 'react'

export type Bj<Nom>Props = {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  // ... autres props
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export function Bj<Nom>({
  variant = 'primary',
  disabled,
  className,
  children,
  ...rest
}: Bj<Nom>Props & { children?: React.ReactNode }) {
  const cls = [
    'bj-<nom>',
    variant !== 'primary' && `bj-<nom>--${variant}`,
    disabled && 'bj-<nom>--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={cls}
      aria-disabled={disabled ? 'true' : undefined}
      {...rest}
    >
      {children}
    </div>
  )
}

Bj<Nom>.displayName = 'Bj<Nom>'
```

### Principes

- Type `Props` exporté
- `className` fusionné avec les classes BEM
- `...rest` spread pour le pass-through
- `displayName` obligatoire
- Si besoin de ref : utiliser `forwardRef`
- Attributs ARIA appropriés

### Prompt IA

```
Crée le composant React 18+ pour le composant DSBJ "<NOM>".

Contexte :
- Fichier : src/react/components/Bj<Nom>.tsx
- Type Props exporté, étend ComponentPropsWithoutRef<'div'>
- className fusionné avec les classes BEM
- displayName obligatoire
- Attributs ARIA appropriés
- Classe CSS de base : .bj-<nom>

Props nécessaires : <LISTER>
Fonctionnalité : <DÉCRIRE>
```

---

## Étape 7 — Export React

**Fichier :** `src/react/index.ts`

Ajouter dans la catégorie appropriée :

```ts
export { Bj<Nom> } from './components/Bj<Nom>'
```

> **Note :** pas d'extension `.tsx` dans le chemin d'import.

---

## Étape 8 — Page doc composants (HTML/CSS)

**Fichier :** `docs/src/pages/composants/<Nom>Page.vue`

Cette page documente l'utilisation **pure HTML/CSS** du composant (sans framework).

### Structure attendue

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: '<Titre FR>',
      desc: '<Description FR>',
      'section-exemples': 'Exemples',
      'section-variantes': 'Variantes',
      'section-etats': 'États',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': '<Note accessibilité FR avec balises <code>>',
      // ... clés pour les descriptions des classes
    },
    en: {
      // ... mêmes clés en anglais
    },
  },
})

const codeExemple = `<HTML d'exemple>`

const propsRows = computed(() => [
  { name: 'bj-<nom>', description: t('cls-base') },
  { name: 'bj-<nom>--variant', description: t('cls-variant') },
  // ...
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="exemples-<nom>" :title="t('section-exemples')">
    <DocsPreview>
      <!-- Preview HTML réelle -->
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <!-- Autres sections : variantes, états, etc. -->

  <DocsSection id="classes-<nom>" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-<nom>" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
```

### Sections obligatoires

1. **Exemples** — preview + code HTML
2. **Variantes** — chaque variante visuelle avec preview + code
3. **États** — normal, hover, disabled, etc.
4. **Classes CSS** — tableau avec `DocsPropsTable`
5. **Accessibilité** — note avec `DocsA11yNote`

### Prompt IA

```
Crée la page de documentation HTML/CSS pour le composant DSBJ "<NOM>".

Contexte :
- Fichier : docs/src/pages/composants/<Nom>Page.vue
- Utiliser useI18n avec messages inline fr/en
- Composants docs : DocsCode, DocsPreview, DocsSection, DocsA11yNote, DocsPropsTable
- Sections obligatoires : exemples, variantes, états, classes CSS, accessibilité
- Classe CSS de base : .bj-<nom>

Le composant fait : <DÉCRIRE>
Variantes : <LISTER>
Classes CSS : <LISTER>
Notes accessibilité : <DÉCRIRE>
```

---

## Étape 9 — Page doc intégration Vue

**Fichier :** `docs/src/pages/integrations/vue/<Nom>Page.vue`

### Structure attendue

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import Bj<Nom> from '@dsbj/vue/components/Bj<Nom>.vue'

const { t } = useI18n({ messages: { fr: { ... }, en: { ... } } })

const codeUsage = `<script setup>
import { Bj<Nom> } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <Bj<Nom> />
</template>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  // ...
])
</script>

<template>
  <h1>...</h1>
  <DocsSection :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>
  <DocsSection :title="t('section-preview')">
    <DocsPreview>
      <Bj<Nom> />  <!-- Composant interactif réel -->
    </DocsPreview>
  </DocsSection>
  <!-- Sections : variantes, disabled, props, accessibilité -->
</template>
```

### Sections obligatoires

1. **Utilisation** — code d'import et usage
2. **Aperçu interactif** — preview avec le vrai composant Vue
3. **Variantes** — chaque variante avec preview
4. **État désactivé** — preview disabled
5. **Props** — tableau avec `DocsPropsTable`
6. **Accessibilité** — note avec `DocsA11yNote`

---

## Étape 10 — Page doc intégration React

**Fichier :** `docs/src/pages/integrations/react/<Nom>Page.vue`

Même structure que la page Vue, mais :
- Les exemples de code montrent du JSX/TSX
- L'import vient de `@flrxnt/dsbj/react`
- La preview utilise le composant **Vue** (car le site de doc est en Vue), importé depuis `@dsbj/vue/components/Bj<Nom>.vue`

---

## Étape 11 — Route dans router.ts

**Fichier :** `docs/src/router.ts`

Ajouter **3 routes** :

```ts
// Dans la section "Composants"
{
  path: '/composants/<nom>',
  component: () => import('./pages/composants/<Nom>Page.vue'),
  meta: {
    layout: 'docs',
    section: 'composants',
    titleKey: 'route.<nom>',
    breadcrumb: [
      { labelKey: 'breadcrumb.components', to: '/composants' },
      { labelKey: 'breadcrumb.<nom>' },
    ],
  },
},

// Dans la section "Intégrations Vue"
{
  path: '/integrations/vue/<nom>',
  component: () => import('./pages/integrations/vue/<Nom>Page.vue'),
  meta: {
    layout: 'docs',
    section: 'integrations-vue',
    titleKey: 'route.vue-<nom>',
    breadcrumb: [
      { labelKey: 'breadcrumb.integrations', to: '/integrations' },
      { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' },
      { labelKey: 'breadcrumb.<nom>' },
    ],
  },
},

// Dans la section "Intégrations React"
{
  path: '/integrations/react/<nom>',
  component: () => import('./pages/integrations/react/<Nom>Page.vue'),
  meta: {
    layout: 'docs',
    section: 'integrations-react',
    titleKey: 'route.react-<nom>',
    breadcrumb: [
      { labelKey: 'breadcrumb.integrations', to: '/integrations' },
      { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' },
      { labelKey: 'breadcrumb.<nom>' },
    ],
  },
},
```

---

## Étape 12 — Carte dans IndexPage composants

**Fichier :** `docs/src/pages/composants/IndexPage.vue`

1. Ajouter les clés i18n `card-<nom>-title` et `card-<nom>-desc` (fr + en)
2. Ajouter le `<DocsCard>` dans la section appropriée du template :

```vue
<DocsCard
  :title="t('card-<nom>-title')"
  :description="t('card-<nom>-desc')"
  to="/composants/<nom>"
/>
```

---

## Étape 13 & 14 — Cartes dans IndexPage Vue et React

**Fichiers :**
- `docs/src/pages/integrations/vue/IndexPage.vue`
- `docs/src/pages/integrations/react/IndexPage.vue`

Ajouter un `<DocsCard>` avec le label `Bj<Nom>` et le lien vers la page.

---

## Étape 15 — Sidebar navigation

**Fichier :** `docs/src/data/navigation.ts`

Ajouter le lien dans **3 endroits** :

```ts
// 1. Sidebar composants — dans le groupe approprié
{ label: '<Label FR>', to: '/composants/<nom>', i18nKey: 'link.<nom>' },

// 2. Sidebar integrations-vue
{ label: 'Bj<Nom>', to: '/integrations/vue/<nom>', i18nKey: 'link.<nom>' },

// 3. Sidebar integrations-react
{ label: 'Bj<Nom>', to: '/integrations/react/<nom>', i18nKey: 'link.<nom>' },
```

> **Groupes sidebar composants :**
> | Groupe | i18nKey | Exemples |
> |--------|---------|----------|
> | Navigation | `sidebar.navigation` | Header, Footer, Breadcrumb, Pagination |
> | Base | `sidebar.base` | Logo, Bouton, Lien, Badge, Tag, Avatar |
> | Formulaires | `sidebar.forms` | Input, Select, Checkbox, Radio, Toggle, Upload |
> | Contenu | `sidebar.content` | Alert, Card, Table, Skeleton, Banner |
> | Interactifs | `sidebar.interactive` | Accordion, Modal, Tooltip, Dropdown, Gallery |
> | Réglementaire | `sidebar.regulatory` | Consent |

---

## Étape 16 — Index de recherche

**Fichier :** `docs/src/data/searchIndex.ts`

Ajouter **3 entrées** :

```ts
// Composant HTML/CSS
{
  label: '<Label FR>',
  path: '/composants/<nom>',
  section: 'Composants',
  keywords: ['<nom>', '<mot-clé-1>', '<mot-clé-2>', 'bj-<nom>'],
},

// Vue
{
  label: 'Bj<Nom>',
  path: '/integrations/vue/<nom>',
  section: 'Vue',
  keywords: ['<nom>', 'vue', 'Bj<Nom>'],
},

// React
{
  label: 'Bj<Nom>',
  path: '/integrations/react/<nom>',
  section: 'React',
  keywords: ['<nom>', 'react', 'Bj<Nom>'],
},
```

---

## Étape 17 — Clés i18n

**Fichiers :** `docs/src/data/locales/fr.json` et `docs/src/data/locales/en.json`

Ajouter dans **4 sections** de chaque fichier :

```jsonc
// section "route"
"route.<nom>": "<Titre> - DSBJ",
"route.vue-<nom>": "Bj<Nom> Vue - DSBJ",
"route.react-<nom>": "Bj<Nom> React - DSBJ",

// section "breadcrumb"
"breadcrumb.<nom>": "<Label>",

// section "link"
"link.<nom>": "<Label>",
```

---

## Étape 18 — Mettre à jour le MCP et les fichiers llms

Le serveur MCP expose les données des composants aux assistants IA. Chaque nouveau composant doit y être ajouté.

### 18a. Ajouter le composant dans les données MCP

**Fichier :** `mcp/src/data/components.ts`

Ajouter une entrée `ComponentData` dans le tableau `COMPONENTS`, **dans la bonne catégorie** (Navigation, Base, Formulaires, Contenu, Interactifs, Réglementaire) :

```ts
{
  name: '<Nom affiché>',
  slug: '<nom>',
  category: '<Catégorie>',
  description: '<Description courte du composant.>',
  classes: ['bj-<nom>', 'bj-<nom>__element', 'bj-<nom>--variant', ...],
  aria: ['role="..."', 'aria-label', 'aria-expanded', ...],
  jsHooks: ['data-bj-<nom>'],  // [] si aucun
  markup: `<HTML d'exemple complet et accessible>`,
},
```

> **Interface :**
> | Champ | Description |
> |-------|-------------|
> | `name` | Nom affiché en français (ex: `Bannière`, `Éditeur riche`) |
> | `slug` | Identifiant kebab-case, doit correspondre au dossier `src/component/<slug>/` |
> | `category` | Une des 6 catégories de `CATEGORIES` |
> | `classes` | Toutes les classes CSS BEM du composant |
> | `aria` | Attributs ARIA nécessaires |
> | `jsHooks` | Attributs `data-bj-*` pour le JS interactif |
> | `markup` | Exemple HTML complet et accessible (avec ARIA, labels, etc.) |

### 18b. Mettre à jour llms.txt

**Fichier :** `docs/public/llms.txt`

1. Mettre à jour le **compteur de composants** dans le résumé en haut du fichier
2. Ajouter une ligne dans la **section de catégorie** correspondante :

```
- [<Nom>](https://design.gouv.example/docs/composants/<nom>.html): bj-<nom>, bj-<nom>__element, <attributs clés>
```

### 18c. Mettre à jour llms-full.txt

**Fichier :** `docs/public/llms-full.txt`

1. Mettre à jour le **compteur de composants** dans le résumé en haut du fichier
2. Ajouter une section complète avec les classes, ARIA et markup :

```markdown
### <Nom affiché> (<Nom anglais>)

Classes : `bj-<nom>`, `bj-<nom>__element`, `bj-<nom>--variant`
ARIA : `role="..."`, `aria-label`, ...
JS : `data-bj-<nom>` (si applicable)

\```html
<HTML d'exemple complet>
\```
```

### 18d. Mettre à jour le compteur partout

Rechercher l'ancien compteur (ex: `46 composants`) et le remplacer par le nouveau dans :

- `docs/public/llms.txt` — résumé
- `docs/public/llms-full.txt` — résumé
- `mcp/src/index.ts` — description de l'outil `list-components`
- `mcp/README.md` — tableau des outils + arborescence
- `docs/src/pages/premiers-pas/IaPage.vue` — description de l'outil
- `scripts/inject-seo.ts` — meta descriptions SEO

### Prompt IA

```
Mets à jour le serveur MCP et les fichiers llms pour le nouveau composant DSBJ "<NOM>".

Composant :
- Slug : <nom>
- Catégorie : <catégorie>
- Description : <description>
- Classes CSS : <lister>
- Attributs ARIA : <lister>
- Hooks JS : <lister ou "aucun">
- Markup HTML : <fournir>

Fichiers à modifier :
1. mcp/src/data/components.ts — ajouter l'entrée ComponentData
2. docs/public/llms.txt — ajouter la ligne dans la bonne section + compteur
3. docs/public/llms-full.txt — ajouter la section complète + compteur
4. Mettre à jour le compteur de composants partout (chercher "<ancien nombre> composants")
```

---

## Étape 19 — Tests Vitest

**Fichier :** `tests/<nom>.test.ts`

### Structure

```ts
import { describe, it, expect, beforeEach } from 'vitest';

function makeComponent(opts: { disabled?: boolean } = {}): string {
  const disabledCls = opts.disabled ? ' bj-<nom>--disabled' : '';
  return `<div class="bj-<nom>${disabledCls}">
    <!-- HTML du composant -->
  </div>`;
}

describe('<nom>: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makeComponent();
  });

  it('should render the component container', () => {
    expect(document.querySelector('.bj-<nom>')).toBeTruthy();
  });

  // ... tests de structure (éléments, attributs ARIA, classes)
});

describe('<nom>: disabled state', () => {
  beforeEach(() => {
    document.body.innerHTML = makeComponent({ disabled: true });
  });

  it('should have the disabled class', () => {
    const el = document.querySelector('.bj-<nom>');
    expect(el!.classList.contains('bj-<nom>--disabled')).toBe(true);
  });
});

// Si le composant a du JS interactif :
// import { init<Nom> } from '../src/js/<nom>';
// Tester le comportement (click, toggle, etc.)
```

### Ce qu'il faut tester

- Rendu de la structure HTML (conteneur, éléments internes)
- Présence des attributs ARIA (`role`, `aria-label`, `aria-expanded`, etc.)
- Classes de variantes
- État désactivé
- Comportement JS interactif (si applicable)
- Accessibilité (focus, keyboard navigation)

### Prompt IA

```
Crée les tests Vitest pour le composant DSBJ "<NOM>".

Contexte :
- Fichier : tests/<nom>.test.ts
- Pattern : fonction makeComponent() qui génère le HTML, beforeEach qui l'injecte dans le DOM
- Tester : structure, attributs ARIA, classes, variantes, état disabled
- Si JS interactif : importer depuis ../src/js/<nom> et tester le comportement
- Classe de base : .bj-<nom>

Structure du composant : <DÉCRIRE LE HTML>
Variantes : <LISTER>
Comportement JS : <DÉCRIRE ou "aucun">
```

---

## Étape 20 — Vérification finale

```bash
# Build de la bibliothèque
bun run build

# Tests
bun run test

# Dev server pour vérification visuelle
bun run dev
```

### Vérifier

- [ ] Le build passe sans erreur
- [ ] Tous les tests passent
- [ ] La page composants apparaît dans le sidebar
- [ ] La page Vue apparaît dans le sidebar
- [ ] La page React apparaît dans le sidebar
- [ ] Le composant est trouvable via la barre de recherche (Ctrl+K)
- [ ] Le breadcrumb fonctionne sur chaque page
- [ ] Le thème sombre fonctionne
- [ ] L'accessibilité est correcte (lecteur d'écran, navigation clavier)

---

## Prompt global (tout-en-un)

Ce prompt peut être utilisé pour demander à l'IA de créer un composant complet :

```
Crée un nouveau composant DSBJ complet nommé "<NOM>" (kebab-case: <nom>, classe: .bj-<nom>, composant: Bj<Nom>).

Description : <DÉCRIRE LE COMPOSANT ET SON USAGE>

Variantes : <LISTER LES VARIANTES>

Props :
- <prop1> : <type> — <description>
- <prop2> : <type> — <description>

Le composant doit suivre le workflow complet du DSBJ :

1. SCSS dans src/component/<nom>/style/_<nom>.scss (BEM, tokens CSS var(--bj-*), responsive, thème sombre)
2. Import dans src/dsbj.scss
3. Composant Vue dans src/vue/components/Bj<Nom>.vue (script setup, computed classes, ARIA)
4. Export dans src/vue/index.ts
5. Composant React dans src/react/components/Bj<Nom>.tsx (TypeScript, className merge, displayName)
6. Export dans src/react/index.ts
7. Page doc composants dans docs/src/pages/composants/<Nom>Page.vue (i18n fr/en, sections: exemples, variantes, états, classes CSS, accessibilité)
8. Page doc Vue dans docs/src/pages/integrations/vue/<Nom>Page.vue (usage, preview interactive, props, disabled, accessibilité)
9. Page doc React dans docs/src/pages/integrations/react/<Nom>Page.vue (même structure)
10. 3 routes dans docs/src/router.ts
11. Carte dans docs/src/pages/composants/IndexPage.vue (i18n fr/en)
12. Carte dans IndexPage Vue et React
13. Liens sidebar dans docs/src/data/navigation.ts (composants + vue + react)
14. 3 entrées dans docs/src/data/searchIndex.ts
15. Clés i18n dans docs/src/data/locales/fr.json et en.json (route, breadcrumb, link)
16. Entrée MCP dans mcp/src/data/components.ts (name, slug, category, description, classes, aria, jsHooks, markup)
17. Ligne dans docs/public/llms.txt (section + compteur)
18. Section complète dans docs/public/llms-full.txt (classes, ARIA, markup + compteur)
19. Mettre à jour le compteur de composants partout (llms, mcp/src/index.ts, mcp/README.md, IaPage.vue, inject-seo.ts)
20. Tests dans tests/<nom>.test.ts (structure, ARIA, variantes, disabled)
21. Vérifier build + tests : bun run build && bun run test
```

---

## Arborescence des fichiers créés

```
src/
├── component/<nom>/style/_<nom>.scss          ← SCSS
├── vue/components/Bj<Nom>.vue                 ← Wrapper Vue
├── vue/index.ts                               ← Export (modifier)
├── react/components/Bj<Nom>.tsx               ← Wrapper React
├── react/index.ts                             ← Export (modifier)
├── dsbj.scss                                  ← Import (modifier)
└── js/<nom>.ts                                ← JS interactif (optionnel)

docs/src/
├── pages/
│   ├── composants/<Nom>Page.vue               ← Doc HTML/CSS
│   ├── composants/IndexPage.vue               ← Carte (modifier)
│   ├── integrations/vue/<Nom>Page.vue         ← Doc Vue
│   ├── integrations/vue/IndexPage.vue         ← Carte (modifier)
│   ├── integrations/react/<Nom>Page.vue       ← Doc React
│   └── integrations/react/IndexPage.vue       ← Carte (modifier)
├── router.ts                                  ← 3 routes (modifier)
└── data/
    ├── navigation.ts                          ← 3 liens sidebar (modifier)
    ├── searchIndex.ts                         ← 3 entrées (modifier)
    └── locales/
        ├── fr.json                            ← Clés i18n (modifier)
        └── en.json                            ← Clés i18n (modifier)

mcp/src/data/
└── components.ts                              ← Entrée MCP (modifier)

docs/public/
├── llms.txt                                   ← Résumé LLM (modifier)
└── llms-full.txt                              ← Doc complète LLM (modifier)

tests/
└── <nom>.test.ts                              ← Tests Vitest
```

> **Total : 6 fichiers créés + 13 fichiers modifiés**
