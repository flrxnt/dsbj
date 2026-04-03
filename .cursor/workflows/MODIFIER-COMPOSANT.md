# Workflow : Modifier un composant DSBJ existant

> Ce document décrit les étapes pour modifier un composant existant du Design Système du Bénin.

---

## Pré-requis

- Le **slug** du composant (ex: `button`, `card`, `combobox`)
- La nature de la modification :
  - Ajout de variante / modificateur CSS
  - Ajout d'élément interne (BEM `__element`)
  - Ajout / modification de comportement JS
  - Ajout d'attributs ARIA
  - Correction de bug
  - Refactoring

---

## Checklist rapide

Cocher uniquement les étapes concernées :

```
[ ] 1. SCSS — modifier les styles
[ ] 2. JS — modifier le comportement interactif
[ ] 3. Vue — mettre à jour le wrapper
[ ] 4. React — mettre à jour le wrapper
[ ] 5. Doc composants — mettre à jour la page HTML/CSS
[ ] 6. Doc Vue — mettre à jour la page intégration Vue
[ ] 7. Doc React — mettre à jour la page intégration React
[ ] 8. MCP — mettre à jour les données dans components.ts
[ ] 9. Tests — ajouter / mettre à jour les tests
[ ] 10. Vérification — build + tests
```

---

## Étape 1 — SCSS

Fichier : `src/component/<slug>/style/_<slug>.scss`

- Ajouter les nouvelles classes BEM (`.bj-<slug>__nouvel-element`, `.bj-<slug>--nouvelle-variante`)
- Utiliser les tokens `var(--bj-*)` pour toutes les valeurs
- Couleur primaire : `var(--bj-action-high)`
- Vérifier le thème sombre (les tokens s'adaptent automatiquement)
- Vérifier le responsive (mobile-first)

---

## Étape 2 — JavaScript

Fichier : `src/js/<slug>.ts`

- Utiliser `queryNew()` pour les nouveaux éléments (évite la double init)
- Émettre des `CustomEvent` pour les actions (ex: `bj:reorder`, `bj:close`)
- Support clavier si interactif (Tab, Escape, flèches)
- Nettoyer les écouteurs si nécessaire

---

## Étape 3 — Vue

Fichier : `src/vue/components/Bj<Nom>.vue`

- Ajouter les nouvelles props avec types dans l'interface exportée
- Mettre à jour `defineEmits` si nouveaux événements
- Classes CSS via `computed`
- Nettoyage dans `onBeforeUnmount` si écouteurs globaux

---

## Étape 4 — React

Fichier : `src/react/components/Bj<Nom>.tsx`

- Ajouter les nouvelles props dans l'interface exportée
- Classes via `filter(Boolean).join(' ')`
- Nettoyage dans le `return` de `useEffect`

---

## Étape 5 à 7 — Documentation

Mettre à jour les 3 pages selon les changements :

| Page | Chemin |
|------|--------|
| HTML/CSS | `docs/src/pages/composants/<Nom>Page.vue` |
| Vue | `docs/src/pages/integrations/vue/<Nom>Page.vue` |
| React | `docs/src/pages/integrations/react/<Nom>Page.vue` |

Pour chaque page :
- Ajouter les nouvelles sections/exemples
- Mettre à jour les tableaux de classes/props
- Mettre à jour les traductions i18n inline (FR + EN)
- Section accessibilité avec slot :

```vue
<DocsA11yNote>
  <span v-html="t('a11y-note')" />
</DocsA11yNote>
```

---

## Étape 8 — MCP

Fichier : `mcp/src/data/components.ts`

Mettre à jour l'entrée du composant :
- Ajouter les nouvelles classes dans `classes[]`
- Ajouter les nouveaux attributs ARIA dans `aria[]`
- Ajouter les nouveaux hooks JS dans `jsHooks[]`
- Mettre à jour le `markup` si la structure change

---

## Étape 9 — Tests

Fichier : `tests/<slug>.test.ts`

- Ajouter des tests pour les nouveaux comportements
- Si correction de bug : écrire un test de régression
- Vérifier les cas limites

---

## Étape 10 — Vérification

```bash
bun run test
bun run build
bun run dev  # Vérifier visuellement, FR/EN, thème clair/sombre
```

---

## Commit

```bash
git add -A
git commit -m "<type>(<slug>): <description>"
```

Types : `feat` (nouvelle variante/fonctionnalité), `fix` (bug), `refactor`, `style`.
