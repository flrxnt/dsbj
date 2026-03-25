export const servicePublicBjCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service public - Démarches en ligne</title>
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
            <span class="bj-header__service-title">Services publics en ligne</span>
            <span class="bj-header__service-tagline">Guichet unique des démarches</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="sp-header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="sp-header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/demarches">Démarches</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/suivi">Suivi de dossier</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/aide">Aide</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <div class="bj-container" style="padding-top: var(--bj-spacing-8v); padding-bottom: var(--bj-spacing-12v);">
      <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-2v);">Créer une entreprise</h1>
      <p class="bj-text-lg" style="max-width: 40rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-8v);">
        Formulaire illustratif en plusieurs étapes. Les champs sont des exemples DSBJ.
      </p>

      <div class="bj-stepper" style="margin-bottom: var(--bj-spacing-10v); max-width: 36rem;">
        <p class="bj-stepper__header">Étape 2 sur 4</p>
        <h2 class="bj-stepper__title">Identité du porteur de projet</h2>
        <div class="bj-stepper__steps" role="presentation">
          <span class="bj-stepper__step bj-stepper__step--done"></span>
          <span class="bj-stepper__step bj-stepper__step--current"></span>
          <span class="bj-stepper__step"></span>
          <span class="bj-stepper__step"></span>
        </div>
        <p class="bj-stepper__detail">Renseignez les informations du représentant légal.</p>
      </div>

      <form class="bj-content" action="#" method="post" style="max-width: 36rem; margin-bottom: var(--bj-spacing-12v);">
        <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-4v);">
          <label class="bj-label" for="nom">Nom</label>
          <input class="bj-input" type="text" id="nom" name="nom" autocomplete="family-name">
        </div>
        <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-4v);">
          <label class="bj-label" for="prenom">Prénom(s)</label>
          <input class="bj-input" type="text" id="prenom" name="prenom" autocomplete="given-name">
        </div>
        <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-4v);">
          <label class="bj-label" for="email">Courriel</label>
          <input class="bj-input" type="email" id="email" name="email" autocomplete="email">
        </div>
        <div class="bj-btn-group">
          <button type="button" class="bj-btn bj-btn--secondary">Retour</button>
          <button type="submit" class="bj-btn">Étape suivante</button>
        </div>
      </form>

      <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-4v);">Autres démarches fréquentes</h2>
      <div class="bj-tiles">
        <a href="#" class="bj-tile">
          <i class="ri-id-card-line bj-tile__icon" aria-hidden="true"></i>
          <span class="bj-tile__title">Carte d’identité</span>
          <span class="bj-tile__desc">Première demande ou renouvellement</span>
        </a>
        <a href="#" class="bj-tile">
          <i class="ri-home-4-line bj-tile__icon" aria-hidden="true"></i>
          <span class="bj-tile__title">Certificat de résidence</span>
          <span class="bj-tile__desc">Mairie ou représentation</span>
        </a>
        <a href="#" class="bj-tile">
          <i class="ri-car-line bj-tile__icon" aria-hidden="true"></i>
          <span class="bj-tile__title">Carte grise</span>
          <span class="bj-tile__desc">Immatriculation et mutation</span>
        </a>
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
        <p class="bj-footer__copy">République du Bénin — Service public numérique</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
