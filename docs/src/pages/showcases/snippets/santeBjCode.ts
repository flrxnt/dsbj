export const santeBjCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ministère de la Santé - République du Bénin</title>
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
            <span class="bj-header__service-title">Ministère de la Santé</span>
            <span class="bj-header__service-tagline">Santé publique et prévention</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="sante-header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="sante-header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/alertes">Alertes</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/centres">Centres de santé</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/vaccination">Vaccination</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <div class="bj-container" style="padding-top: var(--bj-spacing-6v); padding-bottom: var(--bj-spacing-12v);">
      <div class="bj-alert bj-alert--warning" role="region" aria-labelledby="alert-sante-title" style="margin-bottom: var(--bj-spacing-6v);">
        <div class="bj-alert__body">
          <p class="bj-alert__title" id="alert-sante-title">Pic de saison des pluies</p>
          <p class="bj-alert__text">Renforcez les mesures d’hygiène et consultez en cas de fièvre prolongée. Numéro vert : 13X.</p>
        </div>
      </div>

      <div class="bj-alert bj-alert--info bj-alert--sm" role="status" style="margin-bottom: var(--bj-spacing-8v);">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Campagne de dépistage</p>
          <p class="bj-alert__text">Semaine nationale du 12 au 18 du mois dans les CSCom.</p>
        </div>
      </div>

      <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-8v);">Santé en chiffres</h1>

      <div class="bj-cards" style="margin-bottom: var(--bj-spacing-10v);">
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Couverture vaccinale cible</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">87 %</h2>
            <p class="bj-card__desc">Enfants 0-11 mois</p>
          </div>
        </article>
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Centres fonctionnels</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">1 842</h2>
            <p class="bj-card__desc">Publics et conventionnés</p>
          </div>
        </article>
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Consultations / mois</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">520 K</h2>
            <p class="bj-card__desc">Estimation nationale</p>
          </div>
        </article>
      </div>

      <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-4v);">Annuaire des centres hospitaliers départementaux</h2>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--bordered">
          <caption>Coordonnées des CHD — sélection</caption>
          <thead>
            <tr>
              <th scope="col">Établissement</th>
              <th scope="col">Département</th>
              <th scope="col">Urgences 24h/24</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>CHD Cotonou</td><td>Littoral</td><td>Oui</td></tr>
            <tr><td>CHD Parakou</td><td>Borgou</td><td>Oui</td></tr>
            <tr><td>CHD Natitingou</td><td>Atacora</td><td>Oui</td></tr>
            <tr><td>CHD Abomey</td><td>Zou</td><td>Non</td></tr>
          </tbody>
        </table>
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
        <p class="bj-footer__copy">Ministère de la Santé — République du Bénin</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
