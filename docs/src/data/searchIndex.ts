export interface SearchEntry {
  label: string
  path: string
  section: string
  keywords: string[]
}

export const searchIndex: SearchEntry[] = [
  // Premiers pas
  { label: 'Présentation', path: '/premiers-pas', section: 'Premiers pas', keywords: ['introduction', 'commencer', 'démarrer'] },
  { label: 'Installation', path: '/premiers-pas/installation', section: 'Premiers pas', keywords: ['npm', 'cdn', 'installer', 'setup', 'bun'] },
  { label: 'Utilisation', path: '/premiers-pas/utilisation', section: 'Premiers pas', keywords: ['import', 'scss', 'css', 'html', 'thème'] },
  { label: 'Utiliser avec l\'IA', path: '/premiers-pas/ia', section: 'Premiers pas', keywords: ['ia', 'intelligence artificielle', 'mcp', 'copilot'] },

  // Fondamentaux
  { label: 'Principes', path: '/fondamentaux/principes', section: 'Fondamentaux', keywords: ['design', 'accessibilité', 'cohérence'] },
  { label: 'Couleurs - Palette', path: '/fondamentaux/couleurs-palette', section: 'Fondamentaux', keywords: ['couleur', 'palette', 'vert', 'jaune', 'rouge', 'bénin'] },
  { label: 'Couleurs - Utilisation', path: '/fondamentaux/couleurs-utilisation', section: 'Fondamentaux', keywords: ['couleur', 'token', 'sémantique', 'thème sombre'] },
  { label: 'Typographie', path: '/fondamentaux/typographie', section: 'Fondamentaux', keywords: ['police', 'font', 'taille', 'titre', 'texte'] },
  { label: 'Espacement', path: '/fondamentaux/espacement', section: 'Fondamentaux', keywords: ['spacing', 'marge', 'padding', 'gap'] },
  { label: 'Grille', path: '/fondamentaux/grille', section: 'Fondamentaux', keywords: ['grid', 'colonnes', 'container', 'responsive', 'layout'] },
  { label: 'Ombres et élévation', path: '/fondamentaux/ombres-elevation', section: 'Fondamentaux', keywords: ['shadow', 'ombre', 'élévation', 'profondeur'] },
  { label: 'Icônes', path: '/fondamentaux/icones', section: 'Fondamentaux', keywords: ['icône', 'icon', 'remix', 'remixicon'] },
  { label: 'Médias', path: '/fondamentaux/medias', section: 'Fondamentaux', keywords: ['image', 'vidéo', 'ratio', 'responsive'] },
  { label: 'Classes utilitaires', path: '/fondamentaux/classes-utilitaires', section: 'Fondamentaux', keywords: ['utilitaire', 'utility', 'display', 'flex', 'text'] },

  // Composants - Navigation
  { label: 'Header', path: '/composants/header', section: 'Composants', keywords: ['en-tête', 'entête', 'navigation', 'menu', 'bj-header'] },
  { label: 'Footer', path: '/composants/footer', section: 'Composants', keywords: ['pied de page', 'mentions légales', 'bj-footer'] },
  { label: 'Navigation', path: '/composants/navigation', section: 'Composants', keywords: ['menu', 'nav', 'liens', 'bj-nav'] },
  { label: 'Breadcrumb', path: '/composants/breadcrumb', section: 'Composants', keywords: ['fil d\'ariane', 'arborescence', 'bj-breadcrumb'] },
  { label: 'Sidemenu', path: '/composants/sidemenu', section: 'Composants', keywords: ['menu latéral', 'sidebar', 'bj-sidemenu'] },
  { label: 'Skiplink', path: '/composants/skiplink', section: 'Composants', keywords: ['lien d\'évitement', 'accessibilité', 'bj-skiplink'] },
  { label: 'Pagination', path: '/composants/pagination', section: 'Composants', keywords: ['page', 'suivant', 'précédent', 'bj-pagination'] },
  { label: 'Sommaire', path: '/composants/summary', section: 'Composants', keywords: ['table des matières', 'ancres', 'bj-summary'] },

  // Composants - Base
  { label: 'Logo', path: '/composants/logo', section: 'Composants', keywords: ['marque', 'république', 'bénin', 'bj-logo'] },
  { label: 'Bouton', path: '/composants/button', section: 'Composants', keywords: ['button', 'action', 'cta', 'bj-btn'] },
  { label: 'Lien', path: '/composants/link', section: 'Composants', keywords: ['link', 'ancre', 'href', 'bj-link'] },
  { label: 'Badge', path: '/composants/badge', section: 'Composants', keywords: ['pastille', 'statut', 'étiquette', 'bj-badge'] },
  { label: 'Tag', path: '/composants/tag', section: 'Composants', keywords: ['étiquette', 'filtre', 'bj-tag'] },

  // Composants - Formulaires
  { label: 'Champ de saisie', path: '/composants/input', section: 'Composants', keywords: ['input', 'texte', 'formulaire', 'bj-input'] },
  { label: 'Liste déroulante', path: '/composants/select', section: 'Composants', keywords: ['select', 'dropdown', 'option', 'bj-select'] },
  { label: 'Case à cocher', path: '/composants/checkbox', section: 'Composants', keywords: ['checkbox', 'cocher', 'formulaire', 'bj-checkbox'] },
  { label: 'Bouton radio', path: '/composants/radio', section: 'Composants', keywords: ['radio', 'choix exclusif', 'formulaire', 'bj-radio'] },
  { label: 'Interrupteur', path: '/composants/toggle', section: 'Composants', keywords: ['toggle', 'switch', 'on off', 'bj-toggle'] },
  { label: 'Sélecteur de date', path: '/composants/datepicker', section: 'Composants', keywords: ['date', 'calendrier', 'picker', 'bj-datepicker'] },
  { label: 'Téléversement', path: '/composants/upload', section: 'Composants', keywords: ['upload', 'fichier', 'pièce jointe', 'bj-upload'] },
  { label: 'Recherche', path: '/composants/search', section: 'Composants', keywords: ['search', 'chercher', 'bj-search'] },

  // Composants - Contenu
  { label: 'Alerte', path: '/composants/alert', section: 'Composants', keywords: ['alert', 'message', 'info', 'erreur', 'succès', 'bj-alert'] },
  { label: 'Bandeau', path: '/composants/notice', section: 'Composants', keywords: ['notice', 'annonce', 'notification', 'bj-notice'] },
  { label: 'Mise en avant', path: '/composants/callout', section: 'Composants', keywords: ['callout', 'highlight', 'information', 'bj-callout'] },
  { label: 'Mise en exergue', path: '/composants/highlight', section: 'Composants', keywords: ['highlight', 'emphase', 'bj-highlight'] },
  { label: 'Citation', path: '/composants/quote', section: 'Composants', keywords: ['quote', 'blockquote', 'auteur', 'bj-quote'] },
  { label: 'Carte', path: '/composants/card', section: 'Composants', keywords: ['card', 'média', 'vignette', 'bj-card'] },
  { label: 'Tuile', path: '/composants/tile', section: 'Composants', keywords: ['tile', 'accès rapide', 'raccourci', 'bj-tile'] },
  { label: 'Tableau', path: '/composants/table', section: 'Composants', keywords: ['table', 'données', 'lignes', 'colonnes', 'bj-table'] },
  { label: 'Contenu éditorial', path: '/composants/content', section: 'Composants', keywords: ['content', 'article', 'prose', 'bj-content'] },
  { label: 'Bannière', path: '/composants/banner', section: 'Composants', keywords: ['banner', 'hero', 'image de fond', 'cta', 'bj-banner'] },

  // Composants - Interactifs
  { label: 'Accordéon', path: '/composants/accordion', section: 'Composants', keywords: ['accordion', 'collapse', 'déplier', 'bj-accordion'] },
  { label: 'Onglet', path: '/composants/tab', section: 'Composants', keywords: ['tab', 'onglet', 'panneau', 'bj-tab'] },
  { label: 'Modale', path: '/composants/modal', section: 'Composants', keywords: ['modal', 'dialog', 'fenêtre', 'popup', 'bj-modal'] },
  { label: 'Infobulle', path: '/composants/tooltip', section: 'Composants', keywords: ['tooltip', 'aide', 'survol', 'bj-tooltip'] },
  { label: 'Indicateur d\'étapes', path: '/composants/stepper', section: 'Composants', keywords: ['stepper', 'étapes', 'wizard', 'bj-stepper'] },
  { label: 'Notification toast', path: '/composants/toast', section: 'Composants', keywords: ['toast', 'notification', 'éphémère', 'bj-toast'] },
  { label: 'Menu déroulant', path: '/composants/dropdown', section: 'Composants', keywords: ['dropdown', 'menu contextuel', 'bj-dropdown'] },
  { label: 'Bandeau défilant', path: '/composants/marquee', section: 'Composants', keywords: ['marquee', 'défilement', 'annonce', 'bj-marquee'] },
  { label: 'Galerie d\'images', path: '/composants/gallery', section: 'Composants', keywords: ['gallery', 'images', 'lightbox', 'bj-gallery'] },

  // Composants - Réglementaire
  { label: 'Consentement', path: '/composants/consent', section: 'Composants', keywords: ['consent', 'cookies', 'rgpd', 'bj-consent'] },

  // Modèles
  { label: 'Page d\'accueil', path: '/modeles/page-accueil', section: 'Modèles', keywords: ['template', 'modèle', 'accueil', 'home'] },
  { label: 'Page article', path: '/modeles/page-article', section: 'Modèles', keywords: ['template', 'modèle', 'article', 'blog'] },
  { label: 'Page formulaire', path: '/modeles/page-formulaire', section: 'Modèles', keywords: ['template', 'modèle', 'formulaire', 'form'] },
]
