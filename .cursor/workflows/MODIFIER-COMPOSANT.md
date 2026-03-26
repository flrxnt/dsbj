# Workflow : Modifier un composant DSBJ existant

> Ce document décrit **toutes les étapes** pour modifier un composant existant du Design Système du Bénin : ajout de variante, nouvelle classe, correction de bug, ajout de fonctionnalité JS, etc.

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

Cocher uniquement les étapes concernées par la modification :

```
[ ] 1. SCSS — modifier les styles
[ ] 2. JS — modifier / ajouter le comportement interactif
[ ] 3. Vue — mettre à jour le wrapper (props, template, classes)
[ ] 4. React — mettre à jour le wrapper (props, template, classes)
[ ] 5. Doc composants — mettre à jour la page HTML/CSS
[ ] 6. Doc Vue — mettre à jour la page intégration Vue
[ ] 7. Doc React — mettre à jour la page intégration React
[ ] 8. MCP — mettre à jour les données du composant
[ ] 9. LLMs — mettre à jour llms.txt et llms-full.txt
[ ] 10. Tests — ajouter / modifier les tests
[ ] 11. Vérification — build + tests
```

---

## Étape 1 — Modifier les styles SCSS

**Fichier :** `src/component/<slug>/style/_<slug>.scss`

### Ajout d'une variante

Ajouter le modificateur BEM :

```scss
.bj-<slug>--<variante> {
  // Utiliser les tokens CSS var(--bj-*)
}
```

### Ajout d'un élément interne

```scss
.bj-<slug>__<element> {
  // ...
}
```

### Rappel des règles

- Convention BEM avec préfixe `bj-`
- Utiliser exclusivement les tokens `var(--bj-*)`
- Pas de couleurs / tailles en dur
- Contraste AA, `:focus-visible`, responsive mobile-first
- Vérifier que le thème sombre fonctionne (les tokens `--bj-*` gèrent ça automatiquement)

---

## Étape 2 — Modifier le JavaScript interactif

**Fichier :** `src/js/<slug>.ts` (si existant)

Si le composant a un comportement JS et que la modification l'impacte :

- Ajouter / modifier les event listeners
- Mettre à jour les hooks `data-bj-*` si de nouveaux attributs sont nécessaires
- S'assurer de la navigation clavier (flèches, Echap, Tab, Entrée)
- Mettre à jour les attributs ARIA dynamiques (`aria-expanded`, `aria-selected`, etc.)

---

## Étape 3 — Mettre à jour le composant Vue

**Fichier :** `src/vue/components/Bj<Nom>.vue`

Selon la modification :

| Modification | Action |
|-------------|--------|
| Nouvelle variante CSS | Ajouter la valeur au type union de la prop `variant` |
| Nouveau prop | Ajouter dans l'interface `Props` + `withDefaults` + template |
| Nouvel élément interne | Mettre à jour le template + ajouter slot si nécessaire |
| Nouvel attribut ARIA | Ajouter le binding dans le template |
| Nouveau hook JS | Ajouter le `data-bj-*` dans le template |

### Exemple : ajout d'une variante

```vue
// Avant
variant?: 'primary' | 'secondary'

// Après
variant?: 'primary' | 'secondary' | 'accent'
```

---

## Étape 4 — Mettre à jour le composant React

**Fichier :** `src/react/components/Bj<Nom>.tsx`

Même logique que Vue :

| Modification | Action |
|-------------|--------|
| Nouvelle variante CSS | Ajouter la valeur au type union de la prop `variant` |
| Nouveau prop | Ajouter dans le type `Props` + destructuring + JSX |
| Nouvel élément interne | Mettre à jour le JSX |
| Nouvel attribut ARIA | Ajouter l'attribut dans le JSX |
| Nouveau hook JS | Ajouter le `data-bj-*` dans le JSX |

---

## Étape 5 — Mettre à jour la page doc composants

**Fichier :** `docs/src/pages/composants/<Nom>Page.vue`

Selon la modification :

- **Nouvelle variante** : ajouter une section `DocsPreview` + `DocsCode` pour la variante
- **Nouvelle classe** : ajouter une ligne dans le `DocsPropsTable`
- **Nouvel état** : ajouter un exemple dans la section États
- **Nouveau comportement** : décrire dans la section appropriée
- **Nouvel attribut ARIA** : mettre à jour la note `DocsA11yNote`

Ne pas oublier les traductions i18n (fr + en) pour les nouvelles clés.

---

## Étape 6 — Mettre à jour la page doc Vue

**Fichier :** `docs/src/pages/integrations/vue/<Nom>Page.vue`

- Ajouter les nouveaux props dans le `DocsPropsTable`
- Ajouter des previews pour les nouvelles variantes
- Mettre à jour les exemples de code

---

## Étape 7 — Mettre à jour la page doc React

**Fichier :** `docs/src/pages/integrations/react/<Nom>Page.vue`

- Mettre à jour les exemples de code JSX/TSX
- Ajouter les nouveaux props dans le `DocsPropsTable`

---

## Étape 8 — Mettre à jour les données MCP

**Fichier :** `mcp/src/data/components.ts`

Trouver l'entrée du composant par son `slug` et mettre à jour les champs concernés :

| Modification | Champs à mettre à jour |
|-------------|----------------------|
| Nouvelle classe CSS | `classes` — ajouter dans le tableau |
| Nouvel attribut ARIA | `aria` — ajouter dans le tableau |
| Nouveau hook JS | `jsHooks` — ajouter dans le tableau |
| Nouveau markup | `markup` — mettre à jour l'exemple HTML |
| Nouvelle description | `description` — reformuler si nécessaire |

### Exemple : ajout d'une variante au bouton

```ts
// Avant
classes: ['bj-btn', 'bj-btn--secondary', 'bj-btn--tertiary'],

// Après
classes: ['bj-btn', 'bj-btn--secondary', 'bj-btn--tertiary', 'bj-btn--accent'],
```

### Prompt IA

```
Mets à jour l'entrée MCP du composant "<SLUG>" dans mcp/src/data/components.ts.

Modification : <DÉCRIRE CE QUI CHANGE>
Nouvelles classes : <LISTER ou "aucune">
Nouveaux attributs ARIA : <LISTER ou "aucun">
Nouveaux hooks JS : <LISTER ou "aucun">
Markup mis à jour : <OUI/NON — si oui, fournir le nouveau HTML>
```

---

## Étape 9 — Mettre à jour les fichiers LLMs

### 9a. llms.txt

**Fichier :** `docs/public/llms.txt`

Si de nouvelles classes ou attributs importants ont été ajoutés, mettre à jour la ligne du composant :

```
- [<Nom>](https://design.gouv.example/docs/composants/<slug>.html): bj-<slug>, <classes principales>, <attributs ARIA clés>
```

### 9b. llms-full.txt

**Fichier :** `docs/public/llms-full.txt`

Mettre à jour la section du composant :
- Ajouter les nouvelles classes dans la liste `Classes :`
- Ajouter les nouveaux attributs ARIA dans la liste `ARIA :`
- Mettre à jour le markup HTML si nécessaire

---

## Étape 10 — Ajouter / modifier les tests

**Fichier :** `tests/<slug>.test.ts`

Selon la modification :

| Modification | Tests à ajouter |
|-------------|----------------|
| Nouvelle variante | Test de la classe `bj-<slug>--<variante>` |
| Nouvel élément | Test de présence du sélecteur `.bj-<slug>__<element>` |
| Nouvel attribut ARIA | Test de la valeur de l'attribut |
| Nouveau comportement JS | Tests d'interaction (click, keydown, toggle) |
| Bug fix | Test de régression reproduisant le bug |

### Exemple : test d'une nouvelle variante

```ts
describe('<slug>: nouvelle variante', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="bj-<slug> bj-<slug>--accent">Contenu</div>`;
  });

  it('should have the accent variant class', () => {
    const el = document.querySelector('.bj-<slug>');
    expect(el!.classList.contains('bj-<slug>--accent')).toBe(true);
  });
});
```

---

## Étape 11 — Vérification finale

```bash
bun run build
bun run test
bun run dev
```

### Vérifier

- [ ] Le build passe sans erreur
- [ ] Tous les tests passent (anciens + nouveaux)
- [ ] La page doc composants reflète les changements
- [ ] La page doc Vue reflète les changements
- [ ] La page doc React reflète les changements
- [ ] Le MCP renvoie les données à jour (tester via `get-component`)
- [ ] Le thème sombre fonctionne avec les modifications
- [ ] L'accessibilité est préservée (navigation clavier, lecteur d'écran)
- [ ] Pas de régression visuelle sur les variantes existantes

---

## Prompt global (tout-en-un)

```
Modifie le composant DSBJ existant "<SLUG>" (classe: .bj-<slug>, composant: Bj<Nom>).

Modification demandée : <DÉCRIRE PRÉCISÉMENT CE QUI DOIT CHANGER>

Le composant doit suivre le workflow de modification du DSBJ :

1. SCSS : modifier src/component/<slug>/style/_<slug>.scss
2. JS (si concerné) : modifier src/js/<slug>.ts
3. Vue : mettre à jour src/vue/components/Bj<Nom>.vue (props, template, classes)
4. React : mettre à jour src/react/components/Bj<Nom>.tsx (props, JSX, classes)
5. Doc composants : mettre à jour docs/src/pages/composants/<Nom>Page.vue
6. Doc Vue : mettre à jour docs/src/pages/integrations/vue/<Nom>Page.vue
7. Doc React : mettre à jour docs/src/pages/integrations/react/<Nom>Page.vue
8. MCP : mettre à jour l'entrée dans mcp/src/data/components.ts (classes, aria, jsHooks, markup)
9. LLMs : mettre à jour docs/public/llms.txt et docs/public/llms-full.txt
10. Tests : ajouter/modifier tests/<slug>.test.ts
11. Vérifier build + tests : bun run build && bun run test
```

---

## Arborescence des fichiers modifiés

```
src/
├── component/<slug>/style/_<slug>.scss        ← Styles
├── js/<slug>.ts                               ← JS interactif (si concerné)
├── vue/components/Bj<Nom>.vue                 ← Wrapper Vue
└── react/components/Bj<Nom>.tsx               ← Wrapper React

docs/
├── src/pages/
│   ├── composants/<Nom>Page.vue               ← Doc HTML/CSS
│   ├── integrations/vue/<Nom>Page.vue         ← Doc Vue
│   └── integrations/react/<Nom>Page.vue       ← Doc React
└── public/
    ├── llms.txt                               ← Résumé LLM
    └── llms-full.txt                          ← Doc complète LLM

mcp/src/data/
└── components.ts                              ← Données MCP

tests/
└── <slug>.test.ts                             ← Tests
```
