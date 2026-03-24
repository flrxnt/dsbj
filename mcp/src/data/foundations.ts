export interface FoundationData {
  name: string;
  slug: string;
  description: string;
  variables: string[];
  classes: string[];
  usage: string;
}

export const FOUNDATIONS: FoundationData[] = [
  {
    name: 'Couleurs - Palette',
    slug: 'couleurs-palette',
    description: 'Palette officielle du Bénin et tokens de couleur.',
    variables: ['--bj-color-vert-benin-main-491', '--bj-color-jaune-benin-main-491', '--bj-color-rouge-benin-main-491', '--bj-action-high', '--bj-text-default', '--bj-text-alt', '--bj-bg-default', '--bj-bg-alt', '--bj-border-default', '--bj-border-subtle', '--bj-success', '--bj-warning', '--bj-error', '--bj-info'],
    classes: [],
    usage: 'Les couleurs s\'adaptent automatiquement au thème (data-bj-theme="dark"). Utiliser les tokens sémantiques (--bj-action-high, --bj-text-default) plutôt que les valeurs brutes.',
  },
  {
    name: 'Couleurs - Utilisation',
    slug: 'couleurs-utilisation',
    description: 'Sémantique des couleurs : action, texte, fond, bordure.',
    variables: ['--bj-action-high', '--bj-action-low', '--bj-text-default', '--bj-text-alt', '--bj-text-inverted', '--bj-bg-default', '--bj-bg-alt', '--bj-bg-inverted', '--bj-border-default', '--bj-border-subtle'],
    classes: ['bj-text-action', 'bj-text-alt', 'bj-bg-alt'],
    usage: 'Les classes utilitaires bj-text-* et bj-bg-* appliquent les tokens de couleur sémantiques.',
  },
  {
    name: 'Typographie',
    slug: 'typographie',
    description: 'Open Sans (corps) + Spectral (titres éditoriaux), échelle typographique.',
    variables: ['--bj-fs-xs', '--bj-fs-sm', '--bj-fs-md', '--bj-fs-lg', '--bj-fs-xl', '--bj-fw-regular', '--bj-fw-medium', '--bj-fw-semibold', '--bj-fw-bold', '--bj-font-body', '--bj-font-display', '--bj-font-mono'],
    classes: ['bj-display-xs', 'bj-display-sm', 'bj-display-md', 'bj-display-lg', 'bj-display-xl', 'bj-h1', 'bj-h2', 'bj-h3', 'bj-h4', 'bj-h5', 'bj-h6', 'bj-text-xs', 'bj-text-sm', 'bj-text-md', 'bj-text-lg', 'bj-text-xl'],
    usage: 'Un seul <h1> par page. Hiérarchie stricte h1>h2>h3 sans sauter de niveaux.',
  },
  {
    name: 'Espacement',
    slug: 'espacement',
    description: 'Système de spacing basé sur des multiples de 0.25rem.',
    variables: ['--bj-spacing-1v', '--bj-spacing-2v', '--bj-spacing-3v', '--bj-spacing-4v', '--bj-spacing-5v', '--bj-spacing-6v', '--bj-spacing-8v', '--bj-spacing-10v', '--bj-spacing-12v', '--bj-spacing-16v'],
    classes: ['bj-m-{1v..16v}', 'bj-mt-*', 'bj-mb-*', 'bj-ml-*', 'bj-mr-*', 'bj-mx-*', 'bj-my-*', 'bj-p-{1v..16v}', 'bj-pt-*', 'bj-pb-*', 'bj-pl-*', 'bj-pr-*', 'bj-px-*', 'bj-py-*'],
    usage: 'Utiliser les variables --bj-spacing-* en CSS inline ou les classes utilitaires bj-m-*/bj-p-* pour des spacings cohérents.',
  },
  {
    name: 'Grille',
    slug: 'grille',
    description: 'Grille 12 colonnes responsive.',
    variables: [],
    classes: ['bj-container', 'bj-grid-row', 'bj-grid-row--gutters', 'bj-grid-row--middle', 'bj-grid-row--center', 'bj-col-{1-12}', 'bj-col-md-{1-12}', 'bj-col-lg-{1-12}'],
    usage: 'Toujours wrapper dans bj-container. Les colonnes s\'empilent sur mobile (bj-col-12) et se répartissent sur tablette (bj-col-md-*) et desktop (bj-col-lg-*).',
  },
  {
    name: 'Ombres et élévation',
    slug: 'ombres-elevation',
    description: 'Niveaux d\'ombre pour la profondeur visuelle.',
    variables: ['--bj-shadow-sm', '--bj-shadow-md', '--bj-shadow-lg', '--bj-shadow-xl'],
    classes: ['bj-shadow-sm', 'bj-shadow-md', 'bj-shadow-lg', 'bj-shadow-xl'],
    usage: 'Utiliser les ombres pour créer une hiérarchie visuelle. sm pour les cartes, md pour les dropdowns, lg pour les modales.',
  },
  {
    name: 'Icônes',
    slug: 'icones',
    description: 'Remix Icon 4.1 comme bibliothèque d\'icônes.',
    variables: [],
    classes: ['ri-*'],
    usage: 'Toujours ajouter aria-hidden="true" sur les icônes décoratives. Pour les boutons icône, ajouter aria-label sur le bouton parent. CDN : cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css',
  },
  {
    name: 'Médias',
    slug: 'medias',
    description: 'Ratios d\'images et vidéos responsive.',
    variables: [],
    classes: ['bj-ratio', 'bj-ratio--16x9', 'bj-ratio--4x3', 'bj-ratio--1x1'],
    usage: 'Wrapper les médias dans un conteneur avec la classe de ratio souhaitée. Toujours fournir width/height sur les images pour éviter le layout shift.',
  },
  {
    name: 'Classes utilitaires',
    slug: 'classes-utilitaires',
    description: 'Utilitaires CSS pour espacement, couleur, texte, flexbox et affichage.',
    variables: [],
    classes: ['bj-m-*', 'bj-p-*', 'bj-text-*', 'bj-bg-*', 'bj-d-none', 'bj-d-block', 'bj-d-flex', 'bj-d-grid', 'bj-flex-*', 'bj-sr-only', 'bj-sr-only-focusable'],
    usage: 'Les classes utilitaires complètent les composants. bj-sr-only masque visuellement un élément en le gardant accessible aux lecteurs d\'écran. bj-sr-only-focusable le rend visible au focus (skip links).',
  },
  {
    name: 'Principes',
    slug: 'principes',
    description: 'Principes de conception du DSBJ : accessibilité, cohérence, sobriété.',
    variables: [],
    classes: [],
    usage: 'Le DSBJ suit les principes de sobriété numérique, d\'accessibilité universelle (WCAG 2.1 AA) et de cohérence visuelle avec l\'identité de la République du Bénin.',
  },
];
