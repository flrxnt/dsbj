export const financesBjCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ministère des Finances - République du Bénin</title>
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
            <span class="bj-header__service-title">Ministère des Finances</span>
            <span class="bj-header__service-tagline">Direction générale des impôts</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="fin-header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="fin-header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/impots">Impôts</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/douanes">Douanes</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/stats">Statistiques</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <div class="bj-container" style="padding-top: var(--bj-spacing-6v); padding-bottom: var(--bj-spacing-12v);">
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane" style="margin-bottom: var(--bj-spacing-6v);">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/">Accueil</a></li>
          <li class="bj-breadcrumb__item" aria-current="page"><span class="bj-breadcrumb__link">Données fiscales</span></li>
        </ol>
      </nav>

      <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-2v);">Indicateurs et recettes</h1>
      <p class="bj-text-lg" style="max-width: 40rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-8v);">
        Tableau de bord synthétique des principaux agrégats budgétaires et fiscaux (données illustratives).
      </p>

      <div class="bj-cards" style="margin-bottom: var(--bj-spacing-10v);">
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Recettes nettes (YTD)</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">1 248 Mrd FCFA</h2>
            <p class="bj-card__desc">+4,2 % vs N-1</p>
          </div>
        </article>
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Dossiers actifs</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">18 402</h2>
            <p class="bj-card__desc">Guichets et e-services</p>
          </div>
        </article>
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Taux de recouvrement</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">92 %</h2>
            <p class="bj-card__desc">Objectif trimestriel atteint</p>
          </div>
        </article>
        <article class="bj-card">
          <div class="bj-card__body">
            <p class="bj-card__detail">Contribuables en ligne</p>
            <h2 class="bj-card__title" style="font-size: 1.75rem;">312 K</h2>
            <p class="bj-card__desc">Comptes vérifiés</p>
          </div>
        </article>
      </div>

      <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-4v);">Suivi des avis par région</h2>
      <div class="bj-table-wrapper" style="margin-bottom: var(--bj-spacing-10v);">
        <table class="bj-table bj-table--striped bj-table--bordered">
          <caption>Répartition des avis d’imposition traités — T1 2025</caption>
          <thead>
            <tr>
              <th scope="col">Région</th>
              <th scope="col">Avis émis</th>
              <th scope="col">Payés</th>
              <th scope="col">En recouvrement</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Littoral</td><td>42 100</td><td>38 200</td><td>3 900</td></tr>
            <tr><td>Atlantique</td><td>28 400</td><td>25 010</td><td>3 390</td></tr>
            <tr><td>Borgou</td><td>19 800</td><td>17 650</td><td>2 150</td></tr>
            <tr><td>Atacora</td><td>12 300</td><td>11 020</td><td>1 280</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-4v);">Demande de rectification</h2>
      <form class="bj-content" action="#" method="post" style="max-width: 36rem;">
        <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-4v);">
          <label class="bj-label" for="ifu">Numéro IFU</label>
          <input class="bj-input" type="text" id="ifu" name="ifu" autocomplete="off" placeholder="Ex. BJ-2024-XXXXX">
        </div>
        <div class="bj-select-group" style="margin-bottom: var(--bj-spacing-4v);">
          <label class="bj-label" for="motif">Motif</label>
          <select class="bj-select" id="motif" name="motif">
            <option value="">Choisir…</option>
            <option value="err">Erreur sur la base imposable</option>
            <option value="dbl">Double imposition</option>
            <option value="autre">Autre (préciser)</option>
          </select>
        </div>
        <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-4v);">
          <label class="bj-label" for="detail">Détail de la demande</label>
          <textarea class="bj-input" id="detail" name="detail" rows="4" placeholder="Décrivez les éléments contestés."></textarea>
        </div>
        <div class="bj-btn-group">
          <button type="submit" class="bj-btn">Envoyer la demande</button>
          <button type="reset" class="bj-btn bj-btn--secondary">Réinitialiser</button>
        </div>
      </form>
    </div>
  </main>

  <footer class="bj-footer" role="contentinfo">
    <div class="bj-container">
      <div class="bj-footer__bottom">
        <ul class="bj-footer__bottom-list">
          <li><a class="bj-footer__bottom-link" href="#">Mentions légales</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Données personnelles</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Accessibilité</a></li>
        </ul>
        <p class="bj-footer__copy">Ministère des Finances — République du Bénin</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
