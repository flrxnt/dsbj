export const educationBjCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ministère de l’Éducation - République du Bénin</title>
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
            <span class="bj-header__service-title">Ministère de l’Éducation</span>
            <span class="bj-header__service-tagline">Enseignement maternel, primaire et secondaire</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="edu-header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="edu-header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/examens">Examens</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/inscriptions">Inscriptions</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/ressources">Ressources</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <section class="bj-bg-alt" style="padding: var(--bj-spacing-10v) 0;">
      <div class="bj-container bj-text-center">
        <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v);">Portail éducatif national</h1>
        <p class="bj-text-lg" style="max-width: 36rem; margin: 0 auto var(--bj-spacing-6v); color: var(--bj-text-alt);">
          Résultats, ressources pédagogiques et informations sur les inscriptions.
        </p>
        <form class="bj-search bj-search--lg" role="search" action="#" method="get" style="max-width: 32rem; margin: 0 auto;">
          <input class="bj-search__input" type="search" name="q" placeholder="Rechercher un arrêté, une circulaire…" aria-label="Recherche sur le portail éducation">
          <button type="submit" class="bj-search__btn">
            <span class="bj-sr-only">Rechercher</span>
            <i class="ri-search-line" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </section>

    <section style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <h2 class="bj-h2">Accès rapides</h2>
        <div class="bj-cards" style="margin-top: var(--bj-spacing-6v);">
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Examens</p>
              <h3 class="bj-card__title">Résultats BEPC / BAC</h3>
              <p class="bj-card__desc">Consultation par numéro de table ou anonymat.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Consulter</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Inscriptions</p>
              <h3 class="bj-card__title">Préinscription en ligne</h3>
              <p class="bj-card__desc">Calendrier et pièces à fournir par niveau.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Commencer</a>
            </div>
          </article>
          <article class="bj-card">
            <div class="bj-card__body">
              <p class="bj-card__detail">Enseignants</p>
              <h3 class="bj-card__title">Banque de ressources</h3>
              <p class="bj-card__desc">Fiches, séquences et outils numériques.</p>
            </div>
            <div class="bj-card__footer">
              <a href="#" class="bj-btn bj-btn--sm">Parcourir</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bj-bg-alt" style="padding: var(--bj-spacing-12v) 0;">
      <div class="bj-container">
        <h2 class="bj-h2">Questions fréquentes</h2>
        <div data-bj-accordion-group style="margin-top: var(--bj-spacing-6v); max-width: 42rem;">
          <div class="bj-accordion">
            <button type="button" class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="edu-faq-1">Comment obtenir un duplicata de diplôme ?</button>
            <div id="edu-faq-1" class="bj-accordion__body">
              <p class="bj-text-sm">Déposez une demande auprès du service des examens avec une copie légalisée de pièce d’identité et les frais affichés au guichet.</p>
            </div>
          </div>
          <div class="bj-accordion">
            <button type="button" class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="edu-faq-2">Quels sont les critères de bourse ?</button>
            <div id="edu-faq-2" class="bj-accordion__body">
              <p class="bj-text-sm">Les critères sociaux et de mérite sont publiés chaque rentrée sur la page « Bourses » du portail.</p>
            </div>
          </div>
          <div class="bj-accordion">
            <button type="button" class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="edu-faq-3">Comment signaler une école non déclarée ?</button>
            <div id="edu-faq-3" class="bj-accordion__body">
              <p class="bj-text-sm">Utilisez le formulaire « Signalement » ou contactez l’inspection académique de votre département.</p>
            </div>
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
          <li><a class="bj-footer__bottom-link" href="#">Accessibilité</a></li>
        </ul>
        <p class="bj-footer__copy">Ministère de l’Éducation — République du Bénin</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
