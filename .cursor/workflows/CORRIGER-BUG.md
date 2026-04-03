# Workflow : Corriger un bug DSBJ

> Ce document décrit les étapes pour diagnostiquer et corriger un bug dans le Design Système du Bénin.

---

## Pré-requis

- Le **slug** du composant concerné (ex: `button`, `modal`, `draggable`)
- La **description** du bug (comportement attendu vs observé)
- Le **contexte** : navigateur, OS, thème (clair/sombre), breakpoint

---

## Checklist rapide

```
[ ] 1. Reproduire le bug
[ ] 2. Identifier le fichier source (SCSS, JS, Vue, React)
[ ] 3. Écrire un test qui échoue (regression test)
[ ] 4. Corriger le code source
[ ] 5. Vérifier le test passe
[ ] 6. Mettre à jour la documentation si nécessaire
[ ] 7. Vérifier le build
[ ] 8. Commit et PR
```

---

## Étape 1 — Reproduire le bug

1. Lancer le serveur de développement :
   ```bash
   bun run dev
   ```
2. Naviguer vers la page du composant concerné.
3. Reproduire le bug selon les étapes décrites.
4. Vérifier dans les deux thèmes (clair et sombre).
5. Vérifier aux breakpoints concernés (mobile, tablette, desktop).

---

## Étape 2 — Identifier le fichier source

| Couche | Chemin |
|--------|--------|
| Styles SCSS | `src/component/<slug>/style/_<slug>.scss` |
| Logique JS vanilla | `src/js/<slug>.ts` |
| Wrapper Vue | `src/vue/components/Bj<Nom>.vue` |
| Wrapper React | `src/react/components/Bj<Nom>.tsx` |
| Page documentation | `docs/src/pages/composants/<Nom>Page.vue` |

Utiliser les DevTools du navigateur pour identifier si le bug est :
- **CSS** : problème de styles, responsive, thème
- **JS** : problème de comportement, événements, état
- **HTML** : problème de structure, attributs ARIA

---

## Étape 3 — Écrire un test de régression

Ouvrir ou créer le fichier `tests/<slug>.test.ts` :

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { init<Nom> } from '../src/js/<slug>';

describe('<slug>: regression #<numéro-issue>', () => {
  beforeEach(() => {
    document.body.innerHTML = `<!-- Markup minimal reproduisant le bug -->`;
    init<Nom>();
  });

  it('should <comportement attendu>', () => {
    // Actions reproduisant le bug
    // Assertion du comportement corrigé
  });
});
```

Vérifier que le test **échoue** avant la correction :
```bash
bun run test -- --run tests/<slug>.test.ts
```

---

## Étape 4 — Corriger le code

- **Correction minimale** : ne corriger que le bug, ne pas refactorer.
- **Respecter les conventions** : BEM, tokens `--bj-*`, pas de valeurs en dur.
- **Vérifier l'accessibilité** : ne pas casser les attributs ARIA existants.
- **Thème sombre** : si la correction touche aux couleurs, vérifier les deux thèmes.

---

## Étape 5 — Vérifier

```bash
bun run test
bun run build
```

---

## Étape 6 — Documentation

Si le bug était lié à un usage incorrect documenté, mettre à jour :
- La page `docs/src/pages/composants/<Nom>Page.vue`
- Les pages intégration Vue/React si concernées

---

## Étape 7 — Commit

```bash
git add .
git commit -m "fix(<slug>): <description courte du fix>"
```

Format : `fix(<portée>): <description>` conformément aux Conventional Commits.
