# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.2.4] - 2026-03-25

### Ajouté

- Refactor SCSS files to utilize CSS layers for better organization; enhance typography styles with additional heading definitions and improved body styles.

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
