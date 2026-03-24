# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

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
