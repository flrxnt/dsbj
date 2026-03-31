# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.4.4] - 2026-03-31

### Ajouté

- Add functionality to copy 404.html from index.html if it doesn't exist
- Update URLs to reflect new domain

### Modifié

- Update Remix Icon dependency and enhance documentation
- Update footer copyright and licensing information in French localization

### Corrigé

- fix base path

## [1.4.3] - 2026-03-29

### Ajouté

- Add Drawer component and update documentation

### Modifié

- Update dependency versions in bun.lock and package.json
- Update dependencies to latest versions in package.json and bun.lock

## [1.4.2] - 2026-03-29

### Ajouté

- Add Chat Bubble component and update documentation
- Enhance documentation with new Vue integration routes and localization updates

## [1.4.1] - 2026-03-27

### Ajouté

- Enhance documentation with new Dashboard components and charts

### Modifié

- Update vitest and related dependencies to version 4.1.2 in package.json and bun.lock

## [1.4.0] - 2026-03-27

### Ajouté

- add 404 page to the docs

### Modifié

- Update package.json for improved build process and module imports
- Prompts pour maj/modification des composants
- Initialisation du serveur mcp

### Corrigé

- fix docs errors
- fix mcp build errors

## [1.3.5] - 2026-03-26

### Modifié

- Refactor DocsCard and HomePage components, update styles and color tokens
- Update dependencies and package configurations
- Update GitHub Actions workflows to improve dependency installation and audit processes
- Update GitHub Actions workflows for improved security audits and dependency management
- Enhance security and functionality of Rich Editor components
- Update .gitignore to include workflows directory

## [1.3.4] - 2026-03-26

### Ajouté

- Add Rich Editor component and update documentation

## [1.3.3] - 2026-03-25

### Ajouté

- Add Combobox component and enhance documentation for Vue and React

## [1.3.2] - 2026-03-25

### Modifié

- Refactor Vue component scripts to separate interface definitions from setup scripts
- Enhance App.vue to manage client-side rendering

## [1.3.1] - 2026-03-25

### Ajouté

- Enhance Datepicker components for React and Vue with new selection modes
- Update useShiki to include additional languages for syntax highlighting
- Enhance React integration documentation and add new components
- Add new Vue integration components and enhance documentation

### Modifié

- Merge pull request #1 from flrxnt/integration
- Enhance DocsSidebar and useSidebar for mobile support
- Update typography to use Montserrat as the primary font across documentation and components
- Update LegalLayout and SectionLayout to set minimum height for main content area
- Update dependencies and enhance documentation for Vue and PWA integration
- Enhance documentation and integration support for Vue and React components
- Clean up CHANGELOG by removing duplicate entries
- Update readme-banner.png image for improved visual presentation.

## [1.3.0] - 2026-03-25

### Modifié (BREAKING)

- **Reset CSS scopé** : le reset global (`*`, `body`, `html`, `h1-h6`, `p`, `a`, `table`, `img`, etc.) est supprimé du build principal. Tous les styles sont désormais scopés aux classes `.bj-*` et ne modifient plus les éléments HTML existants.
- **Typographie scopée** : les styles `font-family`, `font-size`, `line-height` sur `body` sont remplacés par un ciblage sur `[class^="bj-"]`. Les sélecteurs nus `h1-h6`, `p`, `small` sont remplacés par les classes `.bj-h1` à `.bj-h6`.

### Ajouté

- **Reset opt-in** : nouveau fichier `dsbj-reset.css` contenant le reset CSS global complet, à importer séparément via `import "@flrxnt/dsbj/reset"` pour les projets 100% DSBJ.
- **Exports** : ajout des points d'entrée `@flrxnt/dsbj/reset` (CSS) et `@flrxnt/dsbj/scss/reset` (SCSS).
- **Documentation** : guide d'intégration dans un projet existant dans le README.

### Migration depuis 1.2.x

- **Projets existants intégrant le DSBJ** : aucune action requise. Le DSBJ ne modifie plus votre CSS.
- **Projets 100% DSBJ** (site institutionnel) : ajoutez `import "@flrxnt/dsbj/reset"` après `import "@flrxnt/dsbj"` pour retrouver le reset global.
- Si vous utilisiez les sélecteurs nus `h1`, `h2`, etc. avec les styles DSBJ, remplacez-les par les classes `.bj-h1`, `.bj-h2`, etc.

## [1.2.4] - 2026-03-25

### Ajouté

- Injection automatique de l'import CSS dans le bundle ES pour que `import "@flrxnt/dsbj"` charge les styles sans import supplémentaire.

## [1.2.3] - 2026-03-25

### Ajouté

- Ajout carte Utiliser avec l'IA dans Premiers pas, masquage du texte Menu sur mobile

### Modifié

- Enhance package.json to include CSS file in sideEffects and update vite.config.ts to inject CSS import into ES module bundles.
- Refactor imports in index.ts for better organization and clarity; update package.json to include TypeScript files in sideEffects.
- Update package.json to include the entire src directory instead of just SCSS files in the files array
- Exclure les fichiers TypeScript source du paquet npm, ne garder que dist + SCSS

## [1.2.2] - 2026-03-25

### Ajouté

- Ajout du script de préparation de release automatisé
- Ajout du workflow CI/CD de publication npm sur push de tag

## [1.2.1] - 2026-03-25

### Modifié

- Composant **Logo** (`bj-logo`) : ajout du sigle officiel (armoiries) en image SVG (`bj-logo__img`) remplaçant la bande tricolore CSS.
  - Nouveau sous-élément `bj-logo__img` avec dimensionnement adapté aux variantes `--lg` et `--xl`.
  - Masquage automatique du pseudo-élément tricolore lorsque l'image est présente (`:has(.bj-logo__img)`).
- Favicon du site de documentation remplacé par le sigle officiel.

### Ajouté

- Asset SVG du sigle (`assets/images/sigle.svg`, `docs/public/sigle.svg`).
- Liens GitHub et feuille de route dans le footer de la documentation.

### Corrigé

- Masquage de l'indicateur de version sur petits écrans (`< 768px`).
- Ajustements de styles pour le mode sombre (coloration syntaxique, recherche).

## [1.2.0] - 2026-03-24

### Ajouté

- Composant **Skeleton** (`bj-skeleton`) : placeholder animé avec shimmer pour indiquer le chargement d'un contenu.
  - Variantes de forme : `--text`, `--heading`, `--circle`, `--rect`.
  - Variantes de taille : `--sm`, `--lg`.
  - Conteneur de groupe : `bj-skeleton-group`.
- Composant **Avatar** (`bj-avatar`) : représentation visuelle d'un utilisateur (photo, initiales ou icône).
  - Tailles : `--sm`, `--lg`, `--xl`.
  - Variante carrée : `--square`.
  - Éléments : `__img`, `__initials`, `__icon`.
  - Indicateur de statut : `__status` avec `--online`, `--away`, `--busy`, `--offline`.
  - Groupe d'avatars superposés : `bj-avatar-group`.
- Composant **Arborescence** (`bj-tree`) : structure hiérarchique dépliable avec nœuds, branches et feuilles.
  - Bouton expand/collapse avec `data-bj-tree-toggle` et `aria-expanded`.
  - Variante avec cases à cocher : `bj-tree--checkbox` avec propagation tri-état (checked / indeterminate / unchecked).
  - Variante compacte : `--compact`.
  - Module TypeScript `initTreeview` avec enregistrement automatique.
- Pages de documentation pour les composants Skeleton, Avatar et Arborescence.

## [1.1.0] - 2026-03-24

### Ajouté

- Composant **Bannière** (`bj-banner`) : section hero pleine largeur avec image de fond, overlay, titre, texte et boutons CTA.
  - Modificateurs de taille : `--sm`, `--lg`.
  - Modificateurs d'alignement : `--center`, `--right`.
  - Modificateurs d'overlay : `--dark`, `--light`.
  - Variante sans image : `--plain`.
  - Couleurs nationales : `--green`, `--yellow`, `--red`.
  - Responsive intégré.
- Page de documentation pour le composant Bannière.
- Fichier `CONTRIBUTING.md` avec les instructions de contribution.
- Fichier `CHANGELOG.md`.

## [1.0.0] - 2025-01-01

### Ajouté

- 41 composants HTML/CSS avec préfixe `bj-` : logo, lien, bouton, badge, tag, champs de formulaire, alerte, bandeau, mise en avant, mise en exergue, citation, carte, tuile, tableau, contenu éditorial, accordéon, onglet, modale, infobulle, indicateur d'étapes, toast, menu déroulant, bandeau défilant, galerie d'images, consentement, header, footer, navigation, breadcrumb, sidemenu, skiplink, pagination, sommaire.
- Fondamentaux : reset, couleurs, typographie, espacement, grille, élévation, icônes, médias.
- Classes utilitaires.
- Modules TypeScript interactifs : accordion, modal, tab, header, navigation, consent, toggle, datepicker, table, toast, dropdown, marquee, gallery.
- Thème sombre automatique (`prefers-color-scheme`) et manuel (`data-bj-theme="dark"`).
- Conformité WCAG 2.1 niveau AA.
- Site de documentation complet (Vue 3 + vite-ssg).
- Build Vite en mode library (ES + UMD + CSS).
