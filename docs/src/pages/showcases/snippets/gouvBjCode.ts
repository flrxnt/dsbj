export const gouvBjCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portail officiel - République du Bénin</title>
  <link rel="stylesheet" href="dsbj.css">
</head>
<body>
  <div class="bj-skiplinks">
    <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
  </div>

  <header class="bj-header" role="banner">
    <div class="bj-container">
      <div class="bj-header__body">
        <a href="/" class="bj-header__brand">
          <div class="bj-logo"><p>République<br>du Bénin</p></div>
          <div class="bj-header__service">
            <span class="bj-header__service-title">Gouvernement</span>
            <span class="bj-header__service-tagline">Portail institutionnel</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="gouv-header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="gouv-header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/institutions">Institutions</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/services">Services</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/actualites">Actualités</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <section class="bj-banner bj-banner--dark bj-banner--center bj-banner--lg" aria-label="Accueil portail">
      <img class="bj-banner__img" src="https://picsum.photos/1600/600" alt="">
      <div class="bj-banner__overlay"></div>
      <div class="bj-banner__body">
        <h1 class="bj-banner__title">Portail officiel du Gouvernement de la République du Bénin</h1>
        <p class="bj-banner__text">Une entrée unique vers les services publics, les textes officiels et l’information citoyenne.</p>
        <div class="bj-banner__actions">
          <form class="bj-search bj-search--lg" role="search" action="#" method="get">
            <input class="bj-search__input" type="search" name="q" placeholder="Rechercher sur gouv.bj…" aria-label="Rechercher sur le portail">
            <button type="submit" class="bj-search__btn">
              <span class="bj-sr-only">Lancer la recherche</span>
              <i class="ri-search-line" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <h2 class="bj-h2">Services en ligne</h2>
        <div class="bj-cards" style="margin-top: var(--bj-spacing-6v);">
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Démarche</p>
              <h3 class="bj-card__title">État civil</h3>
              <p class="bj-card__desc">Actes de naissance, mariage, décès et copies sécurisées.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Accéder</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Fiscalité</p>
              <h3 class="bj-card__title">Impôts</h3>
              <p class="bj-card__desc">Déclarations, paiement et suivi des avis d’imposition.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Accéder</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Territoire</p>
              <h3 class="bj-card__title">Urbanisme</h3>
              <p class="bj-card__desc">Permis de construire, règlements et consultations.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Accéder</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Emploi</p>
              <h3 class="bj-card__title">Emploi public</h3>
              <p class="bj-card__desc">Offres, concours et candidatures en ligne.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Accéder</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bj-bg-alt" style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <h2 class="bj-h2">Actualités</h2>
        <div class="bj-cards" style="margin-top: var(--bj-spacing-6v);">
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Communiqué</p>
              <h3 class="bj-card__title">Conseil des ministres du mercredi</h3>
              <p class="bj-card__desc">Synthèse des décisions et orientations prioritaires.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm bj-btn--secondary">Lire la suite</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Appel à projets</p>
              <h3 class="bj-card__title">Innovation numérique dans les administrations</h3>
              <p class="bj-card__desc">Calendrier, critères et modalités de candidature.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm bj-btn--secondary">Lire la suite</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Avis aux usagers</p>
              <h3 class="bj-card__title">Horaires exceptionnels des guichets</h3>
              <p class="bj-card__desc">Mise à jour des permanences pendant les jours fériés.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm bj-btn--secondary">Lire la suite</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <div class="bj-callout bj-callout--green">
          <i class="ri-megaphone-line bj-callout__icon" aria-hidden="true"></i>
          <h2 class="bj-callout__title">Consultation citoyenne ouverte</h2>
          <p class="bj-callout__text">Le Gouvernement sollicite vos contributions sur le projet de réforme des services en ligne. Répondez avant le 15 du mois.</p>
          <div class="bj-callout__btn">
            <a href="#" class="bj-btn">Participer</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bj-footer" role="contentinfo">
    <div class="bj-container">
      <div class="bj-footer__bottom">
        <ul class="bj-footer__bottom-list">
          <li><a class="bj-footer__bottom-link" href="#">Plan du site</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Mentions légales</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Données personnelles</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Accessibilité</a></li>
        </ul>
        <p class="bj-footer__copy">République du Bénin — contenus sous licence étatique</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
