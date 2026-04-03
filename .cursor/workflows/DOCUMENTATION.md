# Workflow : Ajouter ou modifier la documentation DSBJ

> Ce document décrit les étapes pour créer ou mettre à jour les pages de documentation du Design Système du Bénin.

---

## Architecture de la documentation

Le site de documentation est une application Vue 3 + vite-ssg avec i18n FR/EN.

| Élément | Chemin |
|---------|--------|
| Pages | `docs/src/pages/` |
| Composants UI docs | `docs/src/components/` |
| Router | `docs/src/router.ts` |
| Navigation sidebar | `docs/src/data/navigation.ts` |
| Index de recherche | `docs/src/data/searchIndex.ts` |
| Traductions | `docs/src/data/locales/fr.json`, `en.json` |
| Styles docs | `docs/src/styles/docs.css` |
| Entry point | `docs/src/main.ts` |

---

## Checklist pour une nouvelle page

```
[ ] 1. Créer le fichier .vue de la page
[ ] 2. Ajouter la route dans router.ts
[ ] 3. Ajouter dans navigation.ts (sidebar)
[ ] 4. Ajouter dans searchIndex.ts
[ ] 5. Ajouter les clés i18n dans fr.json et en.json
[ ] 6. Vérifier l'affichage en FR et EN
[ ] 7. Vérifier le thème sombre
```

---

## Étape 1 — Créer la page

Les pages utilisent les composants de documentation suivants :

| Composant | Usage |
|-----------|-------|
| `DocsSection` | Section avec titre `h2` et slot contenu |
| `DocsCode` | Bloc de code avec coloration syntaxique et copie |
| `DocsPreview` | Conteneur de prévisualisation du composant |
| `DocsPropsTable` | Tableau de propriétés / classes CSS |
| `DocsA11yNote` | Note d'accessibilité |
| `DocsCard` | Carte de navigation pour les index |

Structure type d'une page composant :

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Nom du composant',
      desc: 'Description courte.',
      // ... clés de section et de contenu
    },
    en: {
      title: 'Component name',
      desc: 'Short description.',
      // ... section and content keys
    },
  },
})
</script>

<template>
  <div class="docs-content">
    <h1>{{ t('title') }}</h1>
    <p class="docs-intro">{{ t('desc') }}</p>

    <DocsSection :title="t('section-exemples')">
      <DocsPreview>
        <!-- Aperçu HTML -->
      </DocsPreview>
      <DocsCode :code="codeExemple" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-classes-css')">
      <DocsPropsTable :rows="cssRows" />
    </DocsSection>

    <DocsSection :title="t('section-accessibilite')">
      <DocsA11yNote :note="t('a11y-note')" />
    </DocsSection>
  </div>
</template>
```

---

## Étape 2 — Ajouter la route

Dans `docs/src/router.ts`, ajouter un objet route :

```typescript
{
  path: '/composants/<slug>',
  component: () => import('./pages/composants/<Nom>Page.vue'),
  meta: {
    layout: 'docs',
    section: 'composants',
    titleKey: 'route.<slug>',
    breadcrumb: [
      { labelKey: 'breadcrumb.components', to: '/composants' },
      { labelKey: 'breadcrumb.<slug>' },
    ],
  },
},
```

---

## Étape 3 — Navigation

Dans `docs/src/data/navigation.ts`, ajouter un lien dans le groupe approprié :

```typescript
{ label: 'Nom', to: '/composants/<slug>', i18nKey: 'link.<slug>' },
```

---

## Étape 4 — Index de recherche

Dans `docs/src/data/searchIndex.ts` :

```typescript
{ label: 'Nom', path: '/composants/<slug>', section: 'Composants', keywords: ['mot-clé1', 'mot-clé2', 'bj-<slug>'] },
```

---

## Étape 5 — Traductions

Ajouter dans **`fr.json`** et **`en.json`** les clés suivantes :

```json
{
  "route": {
    "<slug>": "Nom - DSBJ"
  },
  "breadcrumb": {
    "<slug>": "Nom"
  },
  "link": {
    "<slug>": "Nom"
  }
}
```

Pour les pages intégration Vue/React, ajouter aussi :
```json
{
  "route": {
    "vue-<slug>": "Bj<Nom> Vue - DSBJ",
    "react-<slug>": "Bj<Nom> React - DSBJ"
  }
}
```

---

## Étape 6 — Vérification

```bash
bun run dev
```

Vérifier :
- [ ] La page s'affiche correctement en FR et EN
- [ ] Le breadcrumb est correct
- [ ] Le composant apparaît dans la sidebar
- [ ] La recherche trouve le composant
- [ ] Le thème sombre fonctionne
- [ ] Les exemples de code sont corrects et copiables

---

## Modifier une page existante

1. Localiser la page dans `docs/src/pages/`.
2. Modifier le contenu (texte, exemples, tableaux).
3. Mettre à jour les traductions FR et EN (i18n inline dans le `<script>`).
4. Si les mots-clés changent, mettre à jour `searchIndex.ts`.
5. Vérifier en FR, EN, thème clair et sombre.
