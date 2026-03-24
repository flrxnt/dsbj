export const pageFormulaireCode = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Démarche en ligne - République du Bénin</title>
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
            <span class="bj-header__service-tagline">Démarches en ligne</span>
          </div>
        </a>
        <button class="bj-header__menu-btn" data-bj-header-menu aria-controls="header-nav" aria-expanded="false">
          <i class="ri-menu-line"></i> Menu
        </button>
      </div>
      <nav class="bj-header__nav" id="header-nav" role="navigation" aria-label="Navigation principale">
        <ul class="bj-header__nav-list">
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/">Accueil</a></li>
          <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="/demarches">Démarches</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main">
    <div class="bj-container" style="padding: var(--bj-spacing-8v) 0; max-width: 40rem;">
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/">Accueil</a></li>
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/demarches">Démarches</a></li>
          <li class="bj-breadcrumb__item" aria-current="page">Titre de la démarche</li>
        </ol>
      </nav>

      <div class="bj-stepper">
        <p class="bj-stepper__header">Étape 2 sur 3</p>
        <h1 class="bj-stepper__title">Votre situation</h1>
        <div class="bj-stepper__steps" role="presentation">
          <span class="bj-stepper__step bj-stepper__step--done"></span>
          <span class="bj-stepper__step bj-stepper__step--current"></span>
          <span class="bj-stepper__step"></span>
        </div>
        <p class="bj-stepper__detail">Complétez les champs obligatoires avant de passer à l’étape suivante.</p>
      </div>

      <p class="bj-text-md" style="margin: var(--bj-spacing-6v) 0;">
        Indiquez les informations demandées. Les champs suivis d’un astérisque sont obligatoires.
      </p>

      <form action="/soumission" method="post" novalidate>
        <div class="bj-input-group">
          <label class="bj-label" for="nom">Nom complet <span aria-hidden="true">*</span></label>
          <input class="bj-input" type="text" id="nom" name="nom" required autocomplete="name">
        </div>

        <div class="bj-select-group">
          <label class="bj-label" for="commune">Commune</label>
          <select class="bj-select" id="commune" name="commune">
            <option value="">Sélectionner…</option>
            <option value="cotonou">Cotonou</option>
            <option value="porto">Porto-Novo</option>
          </select>
        </div>

        <fieldset class="bj-checkbox-group">
          <legend class="bj-checkbox-group__legend">Documents fournis</legend>
          <label class="bj-checkbox">
            <input type="checkbox" name="piece_id" value="1">
            <span class="bj-checkbox__label">Copie de la pièce d’identité</span>
          </label>
        </fieldset>

        <fieldset class="bj-radio-group">
          <legend class="bj-radio-group__legend">Type de demande</legend>
          <label class="bj-radio">
            <input type="radio" name="type" value="nouvelle">
            <span class="bj-radio__label">Nouvelle demande</span>
          </label>
          <label class="bj-radio">
            <input type="radio" name="type" value="renouvellement">
            <span class="bj-radio__label">Renouvellement</span>
          </label>
        </fieldset>

        <div class="bj-upload-group">
          <span class="bj-label" id="upload-lbl">Justificatif de domicile</span>
          <label class="bj-upload" style="position: relative;" aria-labelledby="upload-lbl">
            <input type="file" name="justificatif" accept=".pdf,.jpg,.jpeg,.png" aria-labelledby="upload-lbl">
            <i class="ri-upload-cloud-2-line bj-upload__icon" aria-hidden="true"></i>
            <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
            <span class="bj-upload__hint">PDF ou image - 5 Mo maximum</span>
          </label>
        </div>

        <div class="bj-btn-group" style="margin-top: var(--bj-spacing-6v);">
          <button type="submit" class="bj-btn">Continuer</button>
          <button type="button" class="bj-btn bj-btn--secondary">Enregistrer le brouillon</button>
        </div>
      </form>
    </div>
  </main>

  <footer class="bj-footer" role="contentinfo">
    <div class="bj-container">
      <div class="bj-footer__bottom">
        <ul class="bj-footer__bottom-list">
          <li><a class="bj-footer__bottom-link" href="#">Aide</a></li>
          <li><a class="bj-footer__bottom-link" href="#">Mentions légales</a></li>
        </ul>
        <p class="bj-footer__copy">République du Bénin</p>
      </div>
    </div>
  </footer>

  <script src="dsbj.es.js" type="module"></script>
</body>
</html>`
