export const pageAccueilCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portail - République du Bénin</title>
  <link rel="stylesheet" href="dsbj.css">
</head>
<body>
  <div class="bj-skiplinks">
    <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
  </div>

  <!-- En-tête : bande tricolore via .bj-header::before -->
  <header class="bj-header" role="banner">
    <div class="bj-container">
      <div class="bj-header__body">
        <a href="/" class="bj-header__brand">
          <div class="bj-logo"><p>République<br>du Bénin</p></div>
          <div class="bj-header__service">
            <span class="bj-header__service-title">Nom du service</span>
            <span class="bj-header__service-tagline">Sous-titre institutionnel</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/actualites">Actualités</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/services">Services</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <!-- Hero -->
    <section class="bj-bg-contrast" style="padding: var(--bj-spacing-16v) 0;">
      <div class="bj-container bj-text-center">
        <h1 class="bj-display-xl bj-text-inverted">Bienvenue sur le portail</h1>
        <p class="bj-text-lg" style="color: var(--bj-color-gris-850); max-width: 42rem; margin: 1rem auto 2rem;">
          Vos services publics en ligne, informations officielles et démarches simplifiées.
        </p>
        <div class="bj-btn-group" style="justify-content: center;">
          <a href="/demarches" class="bj-btn" style="background-color: var(--bj-color-vert-benin-main-491);">Démarches</a>
          <a href="/contact" class="bj-btn bj-btn--secondary" style="color: #fff; border-color: #fff;">Contact</a>
        </div>
      </div>
    </section>

    <!-- Actualités (cartes) -->
    <section style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <h2 class="bj-h2">Actualités</h2>
        <div class="bj-cards" style="margin-top: var(--bj-spacing-6v);">
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Communiqué</p>
              <h3 class="bj-card__title">Publication d’un rapport annuel</h3>
              <p class="bj-card__desc">Synthèse des indicateurs et perspectives.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm bj-btn--secondary">Lire la suite</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Avis</p>
              <h3 class="bj-card__title">Consultation publique</h3>
              <p class="bj-card__desc">Participez avant la date limite indiquée.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm bj-btn--secondary">Participer</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Services (tuiles) -->
    <section class="bj-bg-alt" style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <h2 class="bj-h2">Services en ligne</h2>
        <div class="bj-tiles" style="margin-top: var(--bj-spacing-6v);">
          <a href="#" class="bj-tile">
            <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true"></i>
            <span class="bj-tile__title">Formulaires</span>
            <span class="bj-tile__desc">Téléchargements officiels</span>
          </a>
          <a href="#" class="bj-tile">
            <i class="ri-calendar-event-line bj-tile__icon" aria-hidden="true"></i>
            <span class="bj-tile__title">Rendez-vous</span>
            <span class="bj-tile__desc">Guichets et permanences</span>
          </a>
          <a href="#" class="bj-tile">
            <i class="ri-question-answer-line bj-tile__icon" aria-hidden="true"></i>
            <span class="bj-tile__title">FAQ</span>
            <span class="bj-tile__desc">Aide et questions fréquentes</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Mise en avant (callout) -->
    <section style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <div class="bj-callout bj-callout--green">
          <i class="ri-megaphone-line bj-callout__icon" aria-hidden="true"></i>
          <h2 class="bj-callout__title">Campagne nationale</h2>
          <p class="bj-callout__text">Informations officielles et modalités de participation.</p>
          <div class="bj-callout__btn">
            <a href="#" class="bj-btn">En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bj-footer" role="contentinfo">
    <div class="bj-container">
      <div class="bj-footer__bottom">
        <ul class="bj-footer__bottom-list">
          <li><a class="bj-footer__bottom-link" href="#">Mentions légales</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Données personnelles</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Accessibilité</a></li>
        </ul>
        <p class="bj-footer__copy">Projet communautaire indépendant - non affilié au gouvernement du Bénin</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
