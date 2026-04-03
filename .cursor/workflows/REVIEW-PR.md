# Workflow : Revue de Pull Request DSBJ

> Ce document fournit une checklist pour la revue de code des Pull Requests sur le Design Système du Bénin.

---

## Checklist de revue

### Structure et conventions

```
[ ] Les fichiers sont au bon emplacement selon la structure du projet
[ ] Les noms de fichiers suivent les conventions (kebab-case SCSS, PascalCase Vue/React)
[ ] Les classes CSS utilisent le préfixe bj- et la convention BEM
[ ] Les tokens CSS --bj-* sont utilisés (pas de valeurs en dur)
[ ] Pas de styles globaux dans dsbj.scss (éléments nus)
[ ] Le commit suit les Conventional Commits
```

### Qualité CSS

```
[ ] Mobile-first : les breakpoints utilisent min-width
[ ] Thème sombre : les couleurs fonctionnent via les tokens --bj-*
[ ] Pas de z-index magiques (utiliser les tokens d'élévation si existants)
[ ] Transitions/animations utilisent les tokens --bj-duration-* et --bj-easing
[ ] Pas de !important sauf cas exceptionnels documentés
```

### Accessibilité

```
[ ] Contraste AA minimum (WCAG 2.1) pour les textes
[ ] Focus visible sur les éléments interactifs
[ ] Attributs ARIA corrects (role, aria-label, aria-expanded, etc.)
[ ] Navigation clavier fonctionnelle (Tab, Escape, Enter, flèches)
[ ] Les icônes décoratives ont aria-hidden="true"
[ ] Les images ont un attribut alt
```

### JavaScript / TypeScript

```
[ ] Logique vanilla dans src/js/ avec register() pour l'auto-init
[ ] queryNew() utilisé pour éviter la double initialisation
[ ] Événements nettoyés si nécessaire (pas de fuite mémoire)
[ ] Types TypeScript stricts (pas de any implicite)
[ ] Support clavier pour les composants interactifs
```

### Wrappers Vue

```
[ ] Props typées avec interface exportée
[ ] Événements typés avec defineEmits
[ ] Slots documentés
[ ] Classes CSS calculées avec computed
[ ] Nettoyage dans onBeforeUnmount si listeners globaux
```

### Wrappers React

```
[ ] Props typées avec interface exportée
[ ] displayName défini
[ ] Hooks pour la logique d'état
[ ] className composé avec filter(Boolean).join(' ')
[ ] Nettoyage dans le return de useEffect
```

### Documentation

```
[ ] Page composant créée dans docs/src/pages/composants/
[ ] Pages intégration Vue et React créées
[ ] Traductions FR et EN complètes (i18n inline)
[ ] Route ajoutée dans docs/src/router.ts
[ ] Navigation ajoutée dans docs/src/data/navigation.ts
[ ] Entrée dans docs/src/data/searchIndex.ts
[ ] Clés ajoutées dans docs/src/data/locales/fr.json et en.json
[ ] Carte ajoutée dans composants/IndexPage.vue
[ ] Données MCP ajoutées dans mcp/src/data/components.ts
```

### Tests

```
[ ] Tests Vitest pour le comportement JS vanilla
[ ] Tests couvrent les cas nominaux et les cas limites
[ ] Tests de régression si correction de bug
[ ] Tous les tests passent : bun run test
[ ] Build réussit : bun run build
```

### Performance

```
[ ] Pas de re-renders inutiles (Vue: computed vs method, React: useMemo/useCallback)
[ ] Pas d'écouteurs d'événements non nettoyés
[ ] Taille CSS raisonnable (pas de duplications)
```

---

## Processus de revue

1. **Lire la description** de la PR et comprendre le contexte.
2. **Vérifier la checklist** ci-dessus point par point.
3. **Tester localement** si possible : `git fetch origin && git checkout <branche>`.
4. **Commenter** les points d'amélioration avec des suggestions constructives.
5. **Approuver** ou **Demander des changements** selon le résultat.
