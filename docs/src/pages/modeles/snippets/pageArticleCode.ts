export const pageArticleCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page - République du Bénin</title>
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
            <span class="bj-header__service-title">Nom du service</span>
            <span class="bj-header__service-tagline">Ministère ou institution</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/publications">Publications</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <div class="bj-container" style="padding: var(--bj-spacing-8v) 0;">
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/">Accueil</a></li>
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/publications">Publications</a></li>
          <li class="bj-breadcrumb__item" aria-current="page">Titre du document</li>
        </ol>
      </nav>

      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-lg-8">
          <article>
            <header>
              <h1 class="bj-h1">Titre du document</h1>
              <p class="bj-text-sm" style="color: var(--bj-text-mention);">Publié le 12 mars 2025 - Direction générale</p>
            </header>
            <div class="bj-content">
              <h2 id="contexte">Contexte</h2>
              <p>Texte introductif…</p>
              <h2 id="dispositions">Dispositions</h2>
              <p>Corps du texte avec listes, tableaux ou citations selon le besoin.</p>
            </div>
          </article>
        </div>
        <div class="bj-col-12 bj-col-lg-4">
          <nav class="bj-summary" aria-label="Sommaire de la page">
            <p class="bj-summary__title">Sommaire</p>
            <div class="bj-summary__list">
              <a class="bj-summary__link" href="#contexte">Contexte</a>
              <a class="bj-summary__link" href="#dispositions">Dispositions</a>
            </div>
          </nav>
          <nav class="bj-sidemenu" aria-label="Dans cette rubrique">
            <p class="bj-sidemenu__title">Publications</p>
            <ul class="bj-sidemenu__list">
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link bj-sidemenu__link--active" href="#" aria-current="page">Document actuel</a>
              </li>
              <li class="bj-sidemenu__item"><a class="bj-sidemenu__link" href="#">Circulaires</a></li>
              <li class="bj-sidemenu__item"><a class="bj-sidemenu__link" href="#">Rapports</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>

  <footer class="bj-footer" role="contentinfo">
    <div class="bj-container">
      <div class="bj-footer__bottom">
        <ul class="bj-footer__bottom-list">
          <li><a class="bj-footer__bottom-link" href="#">Mentions légales</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Données personnelles</a></li>
        </ul>
        <p class="bj-footer__copy">République du Bénin</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
