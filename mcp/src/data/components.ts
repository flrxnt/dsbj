export interface ComponentData {
  name: string;
  slug: string;
  category: string;
  description: string;
  classes: string[];
  aria: string[];
  jsHooks: string[];
  markup: string;
}

export const CATEGORIES = [
  'Navigation',
  'Base',
  'Formulaires',
  'Contenu',
  'Interactifs',
  'Réglementaire',
] as const;

export const COMPONENTS: ComponentData[] = [
  {
    name: 'Header',
    slug: 'header',
    category: 'Navigation',
    description: 'En-tête institutionnel avec marque République du Bénin, service et navigation principale.',
    classes: ['bj-header', 'bj-header__body', 'bj-header__brand', 'bj-header__service', 'bj-header__service-title', 'bj-header__service-tagline', 'bj-header__tools', 'bj-header__tools-link', 'bj-header__menu-btn', 'bj-header__nav', 'bj-header__nav-list', 'bj-header__nav-item', 'bj-header__nav-link', 'bj-header__nav-link--active'],
    aria: ['role="banner"', 'role="navigation"', 'aria-label="Navigation principale"', 'aria-controls', 'aria-expanded', 'aria-current="page"'],
    jsHooks: ['data-bj-header-menu'],
    markup: `<header class="bj-header" role="banner">
  <div class="bj-container">
    <div class="bj-header__body">
      <a href="/" class="bj-header__brand">
        <div class="bj-logo"><p>République<br>du Bénin</p></div>
        <div class="bj-header__service">
          <span class="bj-header__service-title">Mon service</span>
          <span class="bj-header__service-tagline">Description</span>
        </div>
      </a>
      <button type="button" class="bj-header__menu-btn" data-bj-header-menu aria-controls="main-nav" aria-expanded="false">
        <i class="ri-menu-line" aria-hidden="true"></i> Menu
      </button>
    </div>
    <nav class="bj-header__nav" id="main-nav" role="navigation" aria-label="Navigation principale">
      <ul class="bj-header__nav-list">
        <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
      </ul>
    </nav>
  </div>
</header>`,
  },
  {
    name: 'Footer',
    slug: 'footer',
    category: 'Navigation',
    description: 'Pied de page avec liens légaux et mentions.',
    classes: ['bj-footer', 'bj-footer__top', 'bj-footer__top-row', 'bj-footer__col-title', 'bj-footer__list', 'bj-footer__link', 'bj-footer__bottom', 'bj-footer__bottom-list', 'bj-footer__bottom-link', 'bj-footer__copy'],
    aria: ['role="contentinfo"'],
    jsHooks: [],
    markup: `<footer class="bj-footer" role="contentinfo">
  <div class="bj-container">
    <div class="bj-footer__bottom">
      <ul class="bj-footer__bottom-list">
        <li><a class="bj-footer__bottom-link" href="/mentions">Mentions légales</a></li>
        <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité : partiellement conforme</a></li>
      </ul>
      <p class="bj-footer__copy">République du Bénin</p>
    </div>
  </div>
</footer>`,
  },
  {
    name: 'Navigation',
    slug: 'navigation',
    category: 'Navigation',
    description: 'Menus et listes de liens de navigation.',
    classes: ['bj-nav', 'bj-nav__list', 'bj-nav__item', 'bj-nav__link', 'bj-nav__btn'],
    aria: ['aria-label'],
    jsHooks: [],
    markup: `<nav class="bj-nav" aria-label="Navigation secondaire">
  <ul class="bj-nav__list">
    <li class="bj-nav__item"><a class="bj-nav__link" href="#">Lien</a></li>
  </ul>
</nav>`,
  },
  {
    name: 'Breadcrumb',
    slug: 'breadcrumb',
    category: 'Navigation',
    description: 'Fil d\'Ariane pour situer la page dans l\'arborescence.',
    classes: ['bj-breadcrumb', 'bj-breadcrumb__list', 'bj-breadcrumb__item', 'bj-breadcrumb__link'],
    aria: ['aria-label="Fil d\'Ariane"', 'aria-current="page"'],
    jsHooks: [],
    markup: `<nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
  <ol class="bj-breadcrumb__list">
    <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/">Accueil</a></li>
    <li class="bj-breadcrumb__item" aria-current="page">Page actuelle</li>
  </ol>
</nav>`,
  },
  {
    name: 'Sidemenu',
    slug: 'sidemenu',
    category: 'Navigation',
    description: 'Menu latéral pour sous-sections.',
    classes: ['bj-sidemenu', 'bj-sidemenu__title', 'bj-sidemenu__list', 'bj-sidemenu__item', 'bj-sidemenu__sublist', 'bj-sidemenu__btn'],
    aria: ['aria-label', 'aria-current="page"'],
    jsHooks: [],
    markup: `<nav class="bj-sidemenu" aria-label="Menu de section">
  <p class="bj-sidemenu__title">Section</p>
  <ul class="bj-sidemenu__list">
    <li class="bj-sidemenu__item"><a href="#" aria-current="page">Page active</a></li>
    <li class="bj-sidemenu__item"><a href="#">Autre page</a></li>
  </ul>
</nav>`,
  },
  {
    name: 'Skiplink',
    slug: 'skiplink',
    category: 'Navigation',
    description: 'Lien d\'évitement vers le contenu principal.',
    classes: ['bj-skiplinks', 'bj-skiplink'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-skiplinks">
  <a class="bj-skiplink" href="#main">Accéder au contenu</a>
  <a class="bj-skiplink" href="#nav">Accéder à la navigation</a>
</div>`,
  },
  {
    name: 'Pagination',
    slug: 'pagination',
    category: 'Navigation',
    description: 'Parcours de listes paginées.',
    classes: ['bj-pagination', 'bj-pagination__link', 'bj-pagination__link--active', 'bj-pagination__link--disabled', 'bj-pagination__ellipsis', 'bj-pagination__nav', 'bj-pagination__label'],
    aria: ['aria-label="Pagination"', 'aria-current="page"'],
    jsHooks: [],
    markup: `<nav class="bj-pagination" aria-label="Pagination">
  <a class="bj-pagination__nav" href="#" aria-label="Précédent">&laquo;</a>
  <a class="bj-pagination__link bj-pagination__link--active" href="#" aria-current="page">1</a>
  <a class="bj-pagination__link" href="#">2</a>
  <a class="bj-pagination__nav" href="#" aria-label="Suivant">&raquo;</a>
</nav>`,
  },
  {
    name: 'Sommaire',
    slug: 'summary',
    category: 'Navigation',
    description: 'Sommaire de page avec ancres.',
    classes: ['bj-summary', 'bj-summary__title', 'bj-summary__list', 'bj-summary__link'],
    aria: ['aria-label="Sommaire"'],
    jsHooks: [],
    markup: `<nav class="bj-summary" aria-label="Sommaire">
  <p class="bj-summary__title">Sommaire</p>
  <ul class="bj-summary__list">
    <li><a class="bj-summary__link" href="#s1">Section 1</a></li>
  </ul>
</nav>`,
  },
  {
    name: 'Logo',
    slug: 'logo',
    category: 'Base',
    description: 'Signature République du Bénin avec bande tricolore.',
    classes: ['bj-logo', 'bj-logo--lg', 'bj-logo--xl', 'bj-logo__motto', 'bj-logo__link', 'bj-logo__tagline'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-logo">
  <p>République<br>du Bénin</p>
  <span class="bj-logo__motto">Fraternité, Justice, Travail</span>
</div>`,
  },
  {
    name: 'Bouton',
    slug: 'button',
    category: 'Base',
    description: 'Actions primaires, secondaires et tertiaires.',
    classes: ['bj-btn', 'bj-btn--secondary', 'bj-btn--tertiary', 'bj-btn--accent', 'bj-btn--contrast', 'bj-btn--sm', 'bj-btn--lg', 'bj-btn--icon', 'bj-btn--full', 'bj-btn--disabled', 'bj-btn-group', 'bj-btn-group--vertical'],
    aria: ['aria-label (pour boutons icône)', 'aria-hidden="true" (sur icône décorative)'],
    jsHooks: [],
    markup: `<button type="button" class="bj-btn">Primaire</button>
<button type="button" class="bj-btn bj-btn--secondary">Secondaire</button>
<button type="button" class="bj-btn bj-btn--tertiary">Tertiaire</button>
<button type="button" class="bj-btn bj-btn--icon" aria-label="Rechercher">
  <i class="ri-search-line" aria-hidden="true"></i>
</button>`,
  },
  {
    name: 'Lien',
    slug: 'link',
    category: 'Base',
    description: 'Liens de texte avec variantes de taille et icône.',
    classes: ['bj-link', 'bj-link--sm', 'bj-link--lg', 'bj-link--icon-left', 'bj-link--icon-right', 'bj-link--reset'],
    aria: [],
    jsHooks: [],
    markup: `<a href="#" class="bj-link bj-link--icon-right">En savoir plus <i class="ri-arrow-right-line" aria-hidden="true"></i></a>`,
  },
  {
    name: 'Badge',
    slug: 'badge',
    category: 'Base',
    description: 'Pastilles de statut et d\'étiquette courte.',
    classes: ['bj-badge', 'bj-badge--info', 'bj-badge--success', 'bj-badge--warning', 'bj-badge--error', 'bj-badge--new', 'bj-badge--sm', 'bj-badge--no-icon'],
    aria: [],
    jsHooks: [],
    markup: `<span class="bj-badge bj-badge--success">Validé</span>
<span class="bj-badge bj-badge--error">Erreur</span>`,
  },
  {
    name: 'Tag',
    slug: 'tag',
    category: 'Base',
    description: 'Étiquettes cliquables et listes de tags.',
    classes: ['bj-tag', 'bj-tag--action', 'bj-tag--info', 'bj-tag--success', 'bj-tag--warning', 'bj-tag--error', 'bj-tag--sm', 'bj-tag--dismiss', 'bj-tag__close', 'bj-tags'],
    aria: ['aria-label="Supprimer" (sur bouton close)'],
    jsHooks: [],
    markup: `<div class="bj-tags">
  <span class="bj-tag bj-tag--action">Étiquette</span>
  <span class="bj-tag bj-tag--dismiss">Supprimable <button class="bj-tag__close" aria-label="Supprimer">&times;</button></span>
</div>`,
  },
  {
    name: 'Champ de saisie',
    slug: 'input',
    category: 'Formulaires',
    description: 'Champs texte, zones et états de validation.',
    classes: ['bj-input-group', 'bj-label', 'bj-hint', 'bj-input', 'bj-input--sm', 'bj-input-group--valid', 'bj-input-group--error', 'bj-message', 'bj-message--valid', 'bj-message--error', 'bj-message--info', 'bj-input-wrap', 'bj-input-wrap__icon'],
    aria: ['aria-describedby (erreur)', 'aria-invalid="true"'],
    jsHooks: [],
    markup: `<div class="bj-input-group">
  <label class="bj-label" for="email">E-mail</label>
  <p class="bj-hint">Format : nom@exemple.bj</p>
  <input class="bj-input" type="email" id="email" />
</div>`,
  },
  {
    name: 'Liste déroulante',
    slug: 'select',
    category: 'Formulaires',
    description: 'Sélecteur natif stylé.',
    classes: ['bj-select-group', 'bj-select', 'bj-select--error'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-select-group">
  <label class="bj-label" for="dept">Département</label>
  <select class="bj-select" id="dept">
    <option>Littoral</option>
    <option>Atlantique</option>
  </select>
</div>`,
  },
  {
    name: 'Case à cocher',
    slug: 'checkbox',
    category: 'Formulaires',
    description: 'Choix multiples et cases indéterminées.',
    classes: ['bj-checkbox-group', 'bj-checkbox-group__legend', 'bj-checkbox', 'bj-checkbox__label', 'bj-checkbox__hint'],
    aria: [],
    jsHooks: [],
    markup: `<fieldset class="bj-checkbox-group">
  <legend class="bj-checkbox-group__legend">Options</legend>
  <label class="bj-checkbox"><input type="checkbox" /><span class="bj-checkbox__label">Option 1</span></label>
</fieldset>`,
  },
  {
    name: 'Bouton radio',
    slug: 'radio',
    category: 'Formulaires',
    description: 'Choix exclusif dans un groupe.',
    classes: ['bj-radio-group', 'bj-radio-group--inline', 'bj-radio-group__legend', 'bj-radio', 'bj-radio__label', 'bj-radio__hint'],
    aria: [],
    jsHooks: [],
    markup: `<fieldset class="bj-radio-group">
  <legend class="bj-radio-group__legend">Civilité</legend>
  <label class="bj-radio"><input type="radio" name="civ" /><span class="bj-radio__label">Monsieur</span></label>
  <label class="bj-radio"><input type="radio" name="civ" /><span class="bj-radio__label">Madame</span></label>
</fieldset>`,
  },
  {
    name: 'Interrupteur',
    slug: 'toggle',
    category: 'Formulaires',
    description: 'Activation binaire on/off.',
    classes: ['bj-toggle', 'bj-toggle__input', 'bj-toggle__label', 'bj-toggle__hint'],
    aria: [],
    jsHooks: [],
    markup: `<label class="bj-toggle"><input type="checkbox" class="bj-toggle__input" /><span class="bj-toggle__label">Activer</span></label>`,
  },
  {
    name: 'Téléversement',
    slug: 'upload',
    category: 'Formulaires',
    description: 'Envoi de fichiers et pièces jointes.',
    classes: ['bj-upload-group', 'bj-upload-group--error', 'bj-upload', 'bj-upload--drag-over'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-upload-group">
  <label class="bj-label" for="file">Pièce jointe</label>
  <input class="bj-upload" type="file" id="file" />
</div>`,
  },
  {
    name: 'Recherche',
    slug: 'search',
    category: 'Formulaires',
    description: 'Champ et bouton de recherche.',
    classes: ['bj-search', 'bj-search__input', 'bj-search__btn', 'bj-search--lg'],
    aria: ['role="search"', 'aria-label="Rechercher"'],
    jsHooks: [],
    markup: `<div class="bj-search" role="search">
  <input class="bj-search__input" type="search" placeholder="Rechercher..." aria-label="Rechercher" />
  <button type="submit" class="bj-search__btn" aria-label="Lancer la recherche"><i class="ri-search-line" aria-hidden="true"></i></button>
</div>`,
  },
  {
    name: 'Sélecteur de date',
    slug: 'datepicker',
    category: 'Formulaires',
    description: 'Calendrier intégré au format jj/mm/aaaa.',
    classes: ['bj-datepicker', 'bj-datepicker__input', 'bj-datepicker__trigger', 'bj-datepicker__calendar', 'bj-datepicker__day--today', 'bj-datepicker__day--selected', 'bj-datepicker--sm'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-datepicker">
  <label class="bj-label" for="date">Date</label>
  <input class="bj-datepicker__input" type="text" id="date" placeholder="jj/mm/aaaa" />
</div>`,
  },
  {
    name: 'Alerte',
    slug: 'alert',
    category: 'Contenu',
    description: 'Messages contextuels info, succès, attention et erreur.',
    classes: ['bj-alert', 'bj-alert--info', 'bj-alert--success', 'bj-alert--warning', 'bj-alert--error', 'bj-alert--sm', 'bj-alert__body', 'bj-alert__title', 'bj-alert__text', 'bj-alert__close'],
    aria: ['role="alert" (dynamique)', 'aria-label="Fermer" (bouton close)'],
    jsHooks: [],
    markup: `<div class="bj-alert bj-alert--info" role="alert">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Information</p>
    <p class="bj-alert__text">Votre demande a été prise en compte.</p>
  </div>
</div>`,
  },
  {
    name: 'Bandeau',
    slug: 'notice',
    category: 'Contenu',
    description: 'Annonces en tête de page ou de section.',
    classes: ['bj-notice', 'bj-notice__icon', 'bj-notice__body', 'bj-notice__title', 'bj-notice__close', 'bj-notice--info', 'bj-notice--warning', 'bj-notice--alert'],
    aria: ['aria-label="Fermer"'],
    jsHooks: [],
    markup: `<div class="bj-notice bj-notice--info">
  <div class="bj-notice__body"><p class="bj-notice__title">Information importante</p></div>
  <button type="button" class="bj-notice__close" aria-label="Fermer">&times;</button>
</div>`,
  },
  {
    name: 'Mise en avant',
    slug: 'callout',
    category: 'Contenu',
    description: 'Bloc d\'information ou d\'appel à l\'action.',
    classes: ['bj-callout', 'bj-callout__icon', 'bj-callout__title', 'bj-callout__text', 'bj-callout__btn', 'bj-callout--green', 'bj-callout--yellow', 'bj-callout--red'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-callout bj-callout--green">
  <p class="bj-callout__title">Titre</p>
  <p class="bj-callout__text">Description.</p>
  <a href="#" class="bj-btn bj-callout__btn">Action</a>
</div>`,
  },
  {
    name: 'Mise en exergue',
    slug: 'highlight',
    category: 'Contenu',
    description: 'Paragraphe ou extrait mis en valeur.',
    classes: ['bj-highlight', 'bj-highlight--sm', 'bj-highlight--lg'],
    aria: [],
    jsHooks: [],
    markup: `<p class="bj-highlight">Texte important mis en exergue.</p>`,
  },
  {
    name: 'Citation',
    slug: 'quote',
    category: 'Contenu',
    description: 'Citation avec auteur et source.',
    classes: ['bj-quote', 'bj-quote__text', 'bj-quote__author', 'bj-quote__source', 'bj-quote--accent', 'bj-quote__image'],
    aria: [],
    jsHooks: [],
    markup: `<figure class="bj-quote">
  <blockquote class="bj-quote__text">Citation.</blockquote>
  <figcaption class="bj-quote__author">Auteur<span class="bj-quote__source">Source</span></figcaption>
</figure>`,
  },
  {
    name: 'Carte',
    slug: 'card',
    category: 'Contenu',
    description: 'Cartes média, liens et grilles de cartes.',
    classes: ['bj-card', 'bj-card__img', 'bj-card__body', 'bj-card__detail', 'bj-card__title', 'bj-card__desc', 'bj-card__footer', 'bj-card--horizontal', 'bj-card--flat', 'bj-card--highlight', 'bj-card--link', 'bj-cards'],
    aria: ['role="img" aria-label (sur image de fond)'],
    jsHooks: [],
    markup: `<article class="bj-card">
  <div class="bj-card__body">
    <h3 class="bj-card__title">Titre</h3>
    <p class="bj-card__desc">Description.</p>
  </div>
</article>`,
  },
  {
    name: 'Tuile',
    slug: 'tile',
    category: 'Contenu',
    description: 'Accès rapide avec icône ou image.',
    classes: ['bj-tile', 'bj-tile__icon', 'bj-tile__img', 'bj-tile__body', 'bj-tile__title', 'bj-tile__desc', 'bj-tile--horizontal', 'bj-tiles'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-tile">
  <div class="bj-tile__icon"><i class="ri-government-line" aria-hidden="true"></i></div>
  <div class="bj-tile__body">
    <h3 class="bj-tile__title">Service</h3>
    <p class="bj-tile__desc">Description</p>
  </div>
</div>`,
  },
  {
    name: 'Tableau',
    slug: 'table',
    category: 'Contenu',
    description: 'Tableaux de données accessibles.',
    classes: ['bj-table-wrapper', 'bj-table', 'bj-table--bordered', 'bj-table--striped', 'bj-table--layout-fixed', 'bj-table--no-caption'],
    aria: ['scope="col" sur les th'],
    jsHooks: [],
    markup: `<div class="bj-table-wrapper">
  <table class="bj-table bj-table--bordered">
    <caption>Titre</caption>
    <thead><tr><th scope="col">Nom</th><th scope="col">Valeur</th></tr></thead>
    <tbody><tr><td>Donnée</td><td>Valeur</td></tr></tbody>
  </table>
</div>`,
  },
  {
    name: 'Contenu éditorial',
    slug: 'content',
    category: 'Contenu',
    description: 'Typographie et blocs pour articles.',
    classes: ['bj-content'],
    aria: [],
    jsHooks: [],
    markup: `<div class="bj-content">
  <h1>Titre</h1>
  <p>Paragraphe avec typographie optimisée.</p>
</div>`,
  },
  {
    name: 'Accordéon',
    slug: 'accordion',
    category: 'Interactifs',
    description: 'Sections repliables avec contrôle clavier.',
    classes: ['bj-accordion', 'bj-accordion__btn', 'bj-accordion__body', 'bj-accordion--expanded'],
    aria: ['aria-expanded', 'aria-controls'],
    jsHooks: ['data-bj-accordion-group', 'data-bj-accordion-btn', 'data-bj-expanded'],
    markup: `<div data-bj-accordion-group>
  <div class="bj-accordion">
    <button type="button" class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="acc-1">Titre</button>
    <div id="acc-1" class="bj-accordion__body"><p>Contenu.</p></div>
  </div>
</div>`,
  },
  {
    name: 'Onglet',
    slug: 'tab',
    category: 'Interactifs',
    description: 'Panneaux accessibles par onglets.',
    classes: ['bj-tabs__list', 'bj-tabs__tab', 'bj-tabs__panel'],
    aria: ['role="tablist"', 'role="tab"', 'role="tabpanel"', 'aria-selected'],
    jsHooks: ['data-bj-tabs', 'data-bj-tab', 'data-bj-tab-panel', 'data-bj-expanded'],
    markup: `<div data-bj-tabs>
  <div class="bj-tabs__list" role="tablist">
    <button class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="true">Onglet 1</button>
    <button class="bj-tabs__tab" data-bj-tab role="tab">Onglet 2</button>
  </div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel" data-bj-expanded><p>Contenu 1.</p></div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel"><p>Contenu 2.</p></div>
</div>`,
  },
  {
    name: 'Modale',
    slug: 'modal',
    category: 'Interactifs',
    description: 'Fenêtres dialog avec focus piégé.',
    classes: ['bj-modal', 'bj-modal__overlay', 'bj-modal__dialog', 'bj-modal__header', 'bj-modal__title', 'bj-modal__close', 'bj-modal__body', 'bj-modal__footer', 'bj-modal--sm', 'bj-modal--lg', 'bj-modal--full'],
    aria: ['role="dialog"', 'aria-modal="true"', 'aria-labelledby', 'aria-label="Fermer"'],
    jsHooks: ['data-bj-modal-open', 'data-bj-modal-close'],
    markup: `<button type="button" class="bj-btn" data-bj-modal-open="my-modal">Ouvrir</button>
<div class="bj-modal" id="my-modal" role="dialog" aria-modal="true" aria-labelledby="my-modal-t">
  <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
  <div class="bj-modal__dialog">
    <header class="bj-modal__header">
      <h2 class="bj-modal__title" id="my-modal-t">Titre</h2>
      <button type="button" class="bj-modal__close" data-bj-modal-close aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
    </header>
    <div class="bj-modal__body"><p>Contenu.</p></div>
    <footer class="bj-modal__footer">
      <button type="button" class="bj-btn" data-bj-modal-close>Annuler</button>
      <button type="button" class="bj-btn bj-btn--secondary">Valider</button>
    </footer>
  </div>
</div>`,
  },
  {
    name: 'Infobulle',
    slug: 'tooltip',
    category: 'Interactifs',
    description: 'Aide contextuelle au survol ou au focus.',
    classes: ['bj-tooltip', 'bj-tooltip__content'],
    aria: [],
    jsHooks: [],
    markup: `<span class="bj-tooltip">Survolez<span class="bj-tooltip__content">Texte info</span></span>`,
  },
  {
    name: 'Indicateur d\'étapes',
    slug: 'stepper',
    category: 'Interactifs',
    description: 'Parcours multi-étapes et formulaires.',
    classes: ['bj-stepper', 'bj-stepper__header', 'bj-stepper__title', 'bj-stepper__detail', 'bj-stepper__steps', 'bj-stepper__step', 'bj-stepper--vertical'],
    aria: [],
    jsHooks: ['data-bj-stepper-complete', 'data-bj-stepper-current'],
    markup: `<div class="bj-stepper">
  <div class="bj-stepper__header"><h2 class="bj-stepper__title">Parcours</h2><p class="bj-stepper__detail">Étape 2/4</p></div>
  <div class="bj-stepper__steps">
    <div class="bj-stepper__step" data-bj-stepper-complete>Identité</div>
    <div class="bj-stepper__step" data-bj-stepper-current>Adresse</div>
    <div class="bj-stepper__step">Pièces</div>
  </div>
</div>`,
  },
  {
    name: 'Notification toast',
    slug: 'toast',
    category: 'Interactifs',
    description: 'Messages éphémères de confirmation ou d\'alerte.',
    classes: ['bj-toast-container', 'bj-toast', 'bj-toast--info', 'bj-toast--success', 'bj-toast--warning', 'bj-toast--error', 'bj-toast__progress', 'bj-toast-container--top-left', 'bj-toast-container--bottom-right'],
    aria: ['role="alert"'],
    jsHooks: [],
    markup: `<div class="bj-toast-container">
  <div class="bj-toast bj-toast--success" role="alert">Opération réussie<div class="bj-toast__progress"></div></div>
</div>`,
  },
  {
    name: 'Menu déroulant',
    slug: 'dropdown',
    category: 'Interactifs',
    description: 'Menu contextuel d\'actions.',
    classes: ['bj-dropdown', 'bj-dropdown__trigger', 'bj-dropdown__menu', 'bj-dropdown__item', 'bj-dropdown__divider', 'bj-dropdown__header', 'bj-dropdown--right', 'bj-dropdown--up', 'bj-dropdown--sm'],
    aria: ['aria-haspopup="true"', 'aria-expanded', 'role="menu"', 'role="menuitem"'],
    jsHooks: [],
    markup: `<div class="bj-dropdown">
  <button type="button" class="bj-btn bj-dropdown__trigger" aria-haspopup="true" aria-expanded="false">Actions <i class="ri-arrow-down-s-line" aria-hidden="true"></i></button>
  <div class="bj-dropdown__menu" role="menu">
    <a class="bj-dropdown__item" href="#" role="menuitem">Modifier</a>
    <div class="bj-dropdown__divider"></div>
    <a class="bj-dropdown__item" href="#" role="menuitem">Supprimer</a>
  </div>
</div>`,
  },
  {
    name: 'Bandeau défilant',
    slug: 'marquee',
    category: 'Interactifs',
    description: 'Annonces en défilement continu avec pause.',
    classes: ['bj-marquee', 'bj-marquee__track', 'bj-marquee__item', 'bj-marquee__pause', 'bj-marquee--reverse', 'bj-marquee--slow', 'bj-marquee--fast', 'bj-marquee--bordered'],
    aria: ['aria-live', 'aria-label (pause)'],
    jsHooks: [],
    markup: `<div class="bj-marquee" aria-live="off">
  <div class="bj-marquee__track">
    <span class="bj-marquee__item">Annonce</span>
  </div>
  <button type="button" class="bj-marquee__pause" aria-label="Pause">⏸</button>
</div>`,
  },
  {
    name: 'Galerie d\'images',
    slug: 'gallery',
    category: 'Interactifs',
    description: 'Grille d\'images avec visionneuse plein écran.',
    classes: ['bj-gallery', 'bj-gallery__item', 'bj-gallery__img', 'bj-gallery__caption', 'bj-gallery--cols-2', 'bj-gallery--cols-4'],
    aria: ['alt (sur images)'],
    jsHooks: [],
    markup: `<div class="bj-gallery bj-gallery--cols-2">
  <figure class="bj-gallery__item">
    <img class="bj-gallery__img" src="image.jpg" alt="Description" />
    <figcaption class="bj-gallery__caption">Légende</figcaption>
  </figure>
</div>`,
  },
  {
    name: 'Skeleton',
    slug: 'skeleton',
    category: 'Contenu',
    description: 'Placeholder animé indiquant le chargement d\'un contenu avec animation shimmer.',
    classes: ['bj-skeleton', 'bj-skeleton--text', 'bj-skeleton--heading', 'bj-skeleton--circle', 'bj-skeleton--rect', 'bj-skeleton--sm', 'bj-skeleton--lg', 'bj-skeleton-group'],
    aria: ['aria-busy="true" (sur le conteneur)', 'aria-hidden="true" (sur les skeletons)'],
    jsHooks: [],
    markup: `<div class="bj-skeleton-group" aria-busy="true" aria-hidden="true">
  <div class="bj-skeleton bj-skeleton--rect"></div>
  <div class="bj-skeleton bj-skeleton--heading"></div>
  <div class="bj-skeleton bj-skeleton--text"></div>
  <div class="bj-skeleton bj-skeleton--text" style="width: 80%"></div>
</div>`,
  },
  {
    name: 'Avatar',
    slug: 'avatar',
    category: 'Base',
    description: 'Représentation visuelle d\'un utilisateur : photo, initiales ou icône, avec statut et regroupement.',
    classes: ['bj-avatar', 'bj-avatar--sm', 'bj-avatar--lg', 'bj-avatar--xl', 'bj-avatar--square', 'bj-avatar__img', 'bj-avatar__initials', 'bj-avatar__icon', 'bj-avatar__status', 'bj-avatar__status--online', 'bj-avatar__status--away', 'bj-avatar__status--busy', 'bj-avatar__status--offline', 'bj-avatar-group'],
    aria: ['alt (sur img)', 'aria-hidden="true" (avatar décoratif)'],
    jsHooks: [],
    markup: `<div class="bj-avatar">
  <img class="bj-avatar__img" src="photo.jpg" alt="Nom de la personne" />
  <span class="bj-avatar__status bj-avatar__status--online"></span>
</div>`,
  },
  {
    name: 'Arborescence',
    slug: 'treeview',
    category: 'Interactifs',
    description: 'Structure hiérarchique dépliable avec nœuds, branches et feuilles. Supporte les cases à cocher avec propagation tri-état.',
    classes: ['bj-tree', 'bj-tree__item', 'bj-tree__item-content', 'bj-tree__branch', 'bj-tree__toggle', 'bj-tree__toggle-spacer', 'bj-tree__label', 'bj-tree__icon', 'bj-tree__checkbox', 'bj-tree--checkbox', 'bj-tree--compact'],
    aria: ['role="tree"', 'role="treeitem"', 'role="group"', 'aria-expanded'],
    jsHooks: ['data-bj-tree-toggle'],
    markup: `<ul class="bj-tree" role="tree">
  <li class="bj-tree__item" role="treeitem">
    <div class="bj-tree__item-content">
      <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
        <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
      </button>
      <span class="bj-tree__label">Dossier</span>
    </div>
    <ul class="bj-tree__branch" role="group">
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <span class="bj-tree__label">Fichier</span>
        </div>
      </li>
    </ul>
  </li>
</ul>`,
  },
  {
    name: 'Bannière',
    slug: 'banner',
    category: 'Contenu',
    description: 'Section héro avec image de fond, overlay, titre, texte et actions. Variantes de taille, alignement et teinte.',
    classes: ['bj-banner', 'bj-banner__img', 'bj-banner__overlay', 'bj-banner__body', 'bj-banner__title', 'bj-banner__text', 'bj-banner__actions', 'bj-banner--sm', 'bj-banner--lg', 'bj-banner--center', 'bj-banner--right', 'bj-banner--light', 'bj-banner--dark', 'bj-banner--plain', 'bj-banner--green', 'bj-banner--yellow', 'bj-banner--red'],
    aria: ['role="img" aria-hidden="true" (image de fond décorative)'],
    jsHooks: [],
    markup: `<div class="bj-banner bj-banner--dark">
  <img class="bj-banner__img" src="hero.jpg" alt="" />
  <div class="bj-banner__overlay"></div>
  <div class="bj-banner__body">
    <h1 class="bj-banner__title">Bienvenue sur le portail</h1>
    <p class="bj-banner__text">Accédez à vos démarches en ligne.</p>
    <div class="bj-banner__actions">
      <a href="#" class="bj-btn">Commencer</a>
      <a href="#" class="bj-btn bj-btn--secondary">En savoir plus</a>
    </div>
  </div>
</div>`,
  },
  {
    name: 'Combobox',
    slug: 'combobox',
    category: 'Formulaires',
    description: 'Champ de saisie avec autocomplétion et liste déroulante filtrable. Variante select custom avec recherche.',
    classes: ['bj-combobox', 'bj-combobox__input-wrap', 'bj-combobox__input', 'bj-combobox__icon', 'bj-combobox__listbox', 'bj-combobox__option', 'bj-combobox__option--active', 'bj-combobox__no-results', 'bj-combobox--open', 'bj-combobox--error', 'bj-select-custom', 'bj-select-custom__trigger', 'bj-select-custom__panel', 'bj-select-custom__search', 'bj-select-custom__listbox', 'bj-select-custom__option', 'bj-select-custom__no-results', 'bj-select-custom--open'],
    aria: ['role="combobox"', 'aria-expanded', 'aria-autocomplete="list"', 'aria-haspopup="listbox"', 'aria-controls', 'aria-activedescendant', 'aria-invalid', 'aria-describedby', 'role="listbox"', 'role="option"', 'aria-selected', 'aria-disabled'],
    jsHooks: [],
    markup: `<div class="bj-combobox">
  <label class="bj-label" for="ville">Ville</label>
  <p class="bj-hint">Tapez pour filtrer</p>
  <div class="bj-combobox__input-wrap">
    <input class="bj-combobox__input" type="text" id="ville" role="combobox" autocomplete="off" aria-expanded="false" aria-autocomplete="list" aria-haspopup="listbox" aria-controls="ville-list" />
    <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true"></i>
  </div>
  <ul id="ville-list" class="bj-combobox__listbox" role="listbox">
    <li class="bj-combobox__option" role="option">Cotonou</li>
    <li class="bj-combobox__option" role="option">Porto-Novo</li>
    <li class="bj-combobox__option" role="option">Parakou</li>
  </ul>
</div>`,
  },
  {
    name: 'Éditeur riche',
    slug: 'rich-editor',
    category: 'Formulaires',
    description: 'Éditeur de texte riche WYSIWYG avec barre d\'outils configurable : formatage, listes, liens, images, tableaux, code.',
    classes: ['bj-rich-editor', 'bj-rich-editor--disabled', 'bj-rich-editor__toolbar', 'bj-rich-editor__toolbar-group', 'bj-rich-editor__toolbar-separator', 'bj-rich-editor__toolbar-btn', 'bj-rich-editor__toolbar-btn--active', 'bj-rich-editor__toolbar-select', 'bj-rich-editor__color-picker', 'bj-rich-editor__content'],
    aria: ['role="toolbar" aria-label="Éditeur de texte riche" (barre d\'outils)', 'role="textbox" aria-multiline="true" (zone de contenu)', 'aria-label (sur chaque bouton d\'outil)'],
    jsHooks: [],
    markup: `<div class="bj-rich-editor">
  <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur de texte riche">
    <div class="bj-rich-editor__toolbar-group">
      <select class="bj-rich-editor__toolbar-select" aria-label="Style de bloc">
        <option value="p">Paragraphe</option>
        <option value="h1">Titre 1</option>
        <option value="h2">Titre 2</option>
        <option value="h3">Titre 3</option>
      </select>
    </div>
    <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
    <div class="bj-rich-editor__toolbar-group">
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Gras"><i class="ri-bold" aria-hidden="true"></i></button>
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Italique"><i class="ri-italic" aria-hidden="true"></i></button>
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Souligné"><i class="ri-underline" aria-hidden="true"></i></button>
    </div>
    <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
    <div class="bj-rich-editor__toolbar-group">
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Liste à puces"><i class="ri-list-unordered" aria-hidden="true"></i></button>
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Liste numérotée"><i class="ri-list-ordered" aria-hidden="true"></i></button>
    </div>
  </div>
  <div class="bj-rich-editor__content" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Éditeur de texte riche" data-placeholder="Saisissez votre contenu..."></div>
</div>`,
  },
  {
    name: 'Consentement',
    slug: 'consent',
    category: 'Réglementaire',
    description: 'Bandeau cookies et gestionnaire de consentement RGPD.',
    classes: ['bj-consent-banner', 'bj-consent-banner__body', 'bj-consent-banner__header', 'bj-consent-banner__title', 'bj-consent-banner__text', 'bj-consent-banner__actions', 'bj-consent-manager', 'bj-consent-manager__dialog', 'bj-consent-service', 'bj-consent-service__name', 'bj-consent-service__toggle'],
    aria: ['role="dialog"', 'aria-modal="true"', 'aria-labelledby'],
    jsHooks: ['data-bj-consent-accept', 'data-bj-consent-refuse', 'data-bj-consent-customize'],
    markup: `<div class="bj-consent-banner">
  <div class="bj-consent-banner__body">
    <p class="bj-consent-banner__title">Gestion des cookies</p>
    <p class="bj-consent-banner__text">Ce site utilise des cookies.</p>
    <div class="bj-consent-banner__actions">
      <button type="button" class="bj-btn" data-bj-consent-accept>Tout accepter</button>
      <button type="button" class="bj-btn bj-btn--secondary" data-bj-consent-refuse>Tout refuser</button>
      <button type="button" class="bj-btn bj-btn--tertiary" data-bj-consent-customize>Personnaliser</button>
    </div>
  </div>
</div>`,
  },
  {
    name: 'Dashboard Sidebar',
    slug: 'dashboard-sidebar',
    category: 'Navigation',
    description: 'Barre latérale de navigation pour tableaux de bord avec sections, liens dépliables et mode compact.',
    classes: ['bj-dashboard-sidebar', 'bj-dashboard-sidebar--compact', 'bj-dashboard-sidebar__brand', 'bj-dashboard-sidebar__brand-img', 'bj-dashboard-sidebar__brand-text', 'bj-dashboard-sidebar__nav', 'bj-dashboard-sidebar__section', 'bj-dashboard-sidebar__section-title', 'bj-dashboard-sidebar__list', 'bj-dashboard-sidebar__item', 'bj-dashboard-sidebar__link', 'bj-dashboard-sidebar__link--active', 'bj-dashboard-sidebar__link-icon', 'bj-dashboard-sidebar__link-label', 'bj-dashboard-sidebar__btn', 'bj-dashboard-sidebar__sublist', 'bj-dashboard-sidebar__footer'],
    aria: ['aria-label="Navigation du tableau de bord"', 'aria-current="page"', 'aria-expanded', 'aria-controls'],
    jsHooks: [],
    markup: `<aside class="bj-dashboard-sidebar" aria-label="Navigation du tableau de bord">
  <a href="/" class="bj-dashboard-sidebar__brand">
    <img class="bj-dashboard-sidebar__brand-img" src="/logo.svg" alt="">
    <span class="bj-dashboard-sidebar__brand-text">Mon App</span>
  </a>
  <nav class="bj-dashboard-sidebar__nav">
    <div class="bj-dashboard-sidebar__section">
      <p class="bj-dashboard-sidebar__section-title">Général</p>
      <ul class="bj-dashboard-sidebar__list">
        <li class="bj-dashboard-sidebar__item">
          <a href="#" class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" aria-current="page">
            <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon" aria-hidden="true"></i>
            <span class="bj-dashboard-sidebar__link-label">Tableau de bord</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</aside>`,
  },
  {
    name: 'Chart Bar',
    slug: 'chart-bar',
    category: 'Contenu',
    description: 'Graphique en barres verticales ou horizontales en SVG natif.',
    classes: ['bj-chart', 'bj-chart__header', 'bj-chart__title', 'bj-chart__subtitle', 'bj-chart__body', 'bj-chart__legend', 'bj-chart__legend-item', 'bj-chart__legend-dot', 'bj-chart-bar', 'bj-chart-bar--horizontal', 'bj-chart-bar__col', 'bj-chart-bar__bar-area', 'bj-chart-bar__bar', 'bj-chart-bar__label', 'bj-chart-bar__value', 'bj-chart-bar__row', 'bj-chart-bar__track', 'bj-chart-bar__fill'],
    aria: ['role="img"', 'aria-label'],
    jsHooks: [],
    markup: `<div class="bj-chart">
  <div class="bj-chart__header">
    <h3 class="bj-chart__title">Ventes mensuelles</h3>
  </div>
  <div class="bj-chart__body">
    <div class="bj-chart-bar" role="img" aria-label="Graphique barres des ventes">
      <div class="bj-chart-bar__col">
        <div class="bj-chart-bar__value">120</div>
        <div class="bj-chart-bar__bar-area">
          <div class="bj-chart-bar__bar" style="height: 60%"></div>
        </div>
        <div class="bj-chart-bar__label">Jan</div>
      </div>
      <div class="bj-chart-bar__col">
        <div class="bj-chart-bar__value">200</div>
        <div class="bj-chart-bar__bar-area">
          <div class="bj-chart-bar__bar" style="height: 100%"></div>
        </div>
        <div class="bj-chart-bar__label">Fév</div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    name: 'Chart Line',
    slug: 'chart-line',
    category: 'Contenu',
    description: 'Graphique en lignes avec points et aire optionnelle en SVG natif.',
    classes: ['bj-chart', 'bj-chart-line', 'bj-chart-line__path', 'bj-chart-line__area', 'bj-chart-line__dot', 'bj-chart-line__grid', 'bj-chart-line__axis'],
    aria: ['role="img"', 'aria-label'],
    jsHooks: [],
    markup: `<div class="bj-chart">
  <div class="bj-chart__header">
    <h3 class="bj-chart__title">Évolution</h3>
  </div>
  <div class="bj-chart__body">
    <div class="bj-chart-line" role="img" aria-label="Graphique ligne évolution">
      <svg viewBox="0 0 300 150">
        <polyline class="bj-chart-line__path" points="0,120 75,80 150,100 225,40 300,60" />
      </svg>
    </div>
  </div>
</div>`,
  },
  {
    name: 'Chart Pie',
    slug: 'chart-pie',
    category: 'Contenu',
    description: 'Graphique camembert ou donut en SVG natif.',
    classes: ['bj-chart', 'bj-chart-pie', 'bj-chart-pie--donut', 'bj-chart-pie__slice', 'bj-chart-pie__label', 'bj-chart-pie__center', 'bj-chart-pie__center-text'],
    aria: ['role="img"', 'aria-label'],
    jsHooks: [],
    markup: `<div class="bj-chart">
  <div class="bj-chart__header">
    <h3 class="bj-chart__title">Répartition</h3>
  </div>
  <div class="bj-chart__body">
    <div class="bj-chart-pie" role="img" aria-label="Graphique camembert répartition">
      <svg viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--bj-action-high)" stroke-width="40" stroke-dasharray="251 503" transform="rotate(-90 100 100)" />
      </svg>
    </div>
  </div>
</div>`,
  },
];
