<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const consentBannerCode = `<div style="position: relative; background: var(--bj-bg-alt); padding: var(--bj-spacing-4v); border-radius: var(--bj-radius-sm);">
  <div class="bj-consent-banner" data-bj-consent-banner style="position: relative; display: block; box-shadow: var(--bj-shadow-lg); border-top: 2px solid var(--bj-action-high);">
    <div class="bj-consent-banner__body">
      <div class="bj-consent-banner__header">
        <div class="bj-consent-banner__icon"><i class="ri-shield-check-line"></i></div>
        <h2 class="bj-consent-banner__title">Gestion des cookies</h2>
      </div>
      <p class="bj-consent-banner__text">…</p>
      <div class="bj-consent-banner__actions">
        <button type="button" class="bj-btn" data-bj-consent-accept>Tout accepter</button>
        <button type="button" class="bj-btn bj-btn--secondary" data-bj-consent-refuse>Tout refuser</button>
        <button type="button" class="bj-btn bj-btn--tertiary" data-bj-consent-customize data-bj-modal-open="id-modale-consentement">Personnaliser</button>
      </div>
    </div>
  </div>
</div>`

const consentManagerCode = `<div class="bj-consent-manager" id="id-modale-consentement" role="dialog" aria-modal="true" aria-labelledby="consent-manager-title">
  <div class="bj-consent-manager__dialog">
    <div class="bj-consent-manager__header">
      <h2 class="bj-consent-manager__title" id="consent-manager-title">Personnaliser les cookies</h2>
      <button type="button" class="bj-btn bj-btn--tertiary bj-btn--sm" data-bj-modal-close aria-label="Fermer">
        <i class="ri-close-line" aria-hidden="true"></i>
      </button>
    </div>
    <div class="bj-consent-manager__body">
      <div class="bj-consent-service">
        <div class="bj-consent-service__info">
          <p class="bj-consent-service__name">Cookies essentiels</p>
          <p class="bj-consent-service__desc">Nécessaires au fonctionnement du site. Toujours actifs.</p>
        </div>
        <div class="bj-consent-service__toggle">
          <label class="bj-toggle">
            <input type="checkbox" class="bj-toggle__input" checked disabled>
            <span class="bj-toggle__slider"></span>
          </label>
        </div>
      </div>
      <!-- autres services -->
    </div>
    <div class="bj-consent-manager__footer">
      <button type="button" class="bj-btn bj-btn--secondary">Tout refuser</button>
      <button type="button" class="bj-btn">Confirmer mes choix</button>
    </div>
  </div>
</div>`

const classesRows = [
  { name: 'bj-consent-banner', description: 'Bannière fixée en bas de page' },
  { name: 'bj-consent-banner__body', description: 'Corps de la bannière' },
  {
    name: 'bj-consent-banner__header',
    description: 'En-tête avec icône et titre',
  },
  { name: 'bj-consent-banner__icon', description: 'Icône de la bannière' },
  { name: 'bj-consent-banner__title', description: 'Titre de la bannière' },
  { name: 'bj-consent-banner__text', description: 'Texte explicatif' },
  {
    name: 'bj-consent-banner__actions',
    description: "Conteneur des boutons d'action",
  },
  {
    name: 'bj-consent-manager',
    description: 'Modale de personnalisation (overlay)',
  },
  { name: 'bj-consent-manager__dialog', description: 'Boîte de dialogue' },
  { name: 'bj-consent-manager__header', description: 'En-tête de la modale' },
  { name: 'bj-consent-manager__body', description: 'Corps scrollable' },
  { name: 'bj-consent-manager__footer', description: 'Pied avec boutons' },
  { name: 'bj-consent-service', description: 'Ligne de service' },
  {
    name: 'bj-consent-service__info',
    description: 'Informations du service',
  },
  { name: 'bj-consent-service__name', description: 'Nom du service' },
  {
    name: 'bj-consent-service__desc',
    description: 'Description du service',
  },
  {
    name: 'bj-consent-service__toggle',
    description: 'Interrupteur du service',
  },
]

const attrsRows = [
  { name: 'data-bj-consent-banner', description: "Sur l'élément bannière" },
  {
    name: 'data-bj-consent-accept',
    description: 'Sur le bouton « Tout accepter »',
  },
  {
    name: 'data-bj-consent-refuse',
    description: 'Sur le bouton « Tout refuser »',
  },
  {
    name: 'data-bj-consent-customize',
    description:
      'Sur le bouton « Personnaliser » (associer data-bj-modal-open="id" à l’identifiant de la modale)',
  },
  {
    name: 'data-bj-expanded',
    description:
      'Rend la bannière visible (utile pour forcer l’affichage en démo ou après rechargement)',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Bannière de consentement (Cookies)
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Composant réglementaire permettant de recueillir le consentement de
    l'utilisateur pour les cookies et traceurs, conformément à la réglementation
    en vigueur.
  </p>

  <DocsSection id="sec-banniere" title="Bannière de consentement">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 44rem;
      "
    >
      La bannière s’affiche en pied de page jusqu’à ce qu’un choix soit
      enregistré. Pour la documentation, l’aperçu ci-dessous utilise un
      positionnement relatif afin de rester visible dans le flux de la page.
    </p>
    <DocsPreview style="position: relative">
      <div
        style="
          position: relative;
          background: var(--bj-bg-alt);
          padding: var(--bj-spacing-4v);
          border-radius: var(--bj-radius-sm);
        "
      >
        <div
          class="bj-consent-banner"
          style="
            position: relative;
            display: block;
            box-shadow: var(--bj-shadow-lg);
            border-top: 2px solid var(--bj-action-high);
          "
        >
          <div class="bj-consent-banner__body">
            <div class="bj-consent-banner__header">
              <div class="bj-consent-banner__icon">
                <i class="ri-shield-check-line"></i>
              </div>
              <h2 class="bj-consent-banner__title">Gestion des cookies</h2>
            </div>
            <p class="bj-consent-banner__text">
              Ce site utilise des cookies pour améliorer votre expérience de
              navigation, mesurer l'audience du site et vous proposer des
              contenus adaptés. En cliquant sur « Tout accepter », vous acceptez
              l'utilisation de l'ensemble des cookies. Vous pouvez également
              personnaliser vos choix en cliquant sur « Personnaliser ».
            </p>
            <div class="bj-consent-banner__actions">
              <button class="bj-btn" data-bj-consent-accept>Tout accepter</button>
              <button class="bj-btn bj-btn--secondary" data-bj-consent-refuse>
                Tout refuser
              </button>
              <button
                class="bj-btn bj-btn--tertiary"
                data-bj-consent-customize
              >
                Personnaliser
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="consentBannerCode" />
  </DocsSection>

  <DocsSection id="sec-modale" title="Modale de personnalisation">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 44rem;
      "
    >
      La personnalisation repose sur la structure
      <code>bj-consent-manager</code> et des lignes
      <code>bj-consent-service</code>, chacune associée à un interrupteur
      <code>bj-toggle</code>. En production, le gestionnaire est généralement
      rendu dans un overlay plein écran ; ici il est centré pour l’aperçu.
    </p>
    <DocsPreview style="position: relative">
      <div
        style="
          position: relative;
          min-height: 28rem;
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--bj-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          class="bj-consent-manager__dialog"
          style="
            width: 100%;
            max-width: 40rem;
            background: var(--bj-bg-elevated);
            border-radius: var(--bj-radius-md);
            box-shadow: var(--bj-shadow-xl);
          "
        >
          <div class="bj-consent-manager__header">
            <h2 class="bj-consent-manager__title">
              Personnaliser les cookies
            </h2>
            <button class="bj-btn bj-btn--tertiary bj-btn--sm">
              <i class="ri-close-line"></i>
            </button>
          </div>
          <div class="bj-consent-manager__body">
            <div class="bj-consent-service">
              <div class="bj-consent-service__info">
                <p class="bj-consent-service__name">Cookies essentiels</p>
                <p class="bj-consent-service__desc">
                  Nécessaires au fonctionnement du site. Toujours actifs.
                </p>
              </div>
              <div class="bj-consent-service__toggle">
                <label class="bj-toggle"
                  ><input
                    type="checkbox"
                    class="bj-toggle__input"
                    checked
                    disabled /><span class="bj-toggle__slider"></span
                ></label>
              </div>
            </div>
            <div class="bj-consent-service">
              <div class="bj-consent-service__info">
                <p class="bj-consent-service__name">Mesure d'audience</p>
                <p class="bj-consent-service__desc">
                  Nous permettent de mesurer la fréquentation du site pour en
                  améliorer les performances.
                </p>
              </div>
              <div class="bj-consent-service__toggle">
                <label class="bj-toggle"
                  ><input type="checkbox" class="bj-toggle__input" /><span
                    class="bj-toggle__slider"
                  ></span
                ></label>
              </div>
            </div>
            <div class="bj-consent-service">
              <div class="bj-consent-service__info">
                <p class="bj-consent-service__name">Réseaux sociaux</p>
                <p class="bj-consent-service__desc">
                  Permettent le partage de contenus sur les réseaux sociaux et
                  l'affichage de publications.
                </p>
              </div>
              <div class="bj-consent-service__toggle">
                <label class="bj-toggle"
                  ><input type="checkbox" class="bj-toggle__input" /><span
                    class="bj-toggle__slider"
                  ></span
                ></label>
              </div>
            </div>
          </div>
          <div class="bj-consent-manager__footer">
            <button class="bj-btn bj-btn--secondary">Tout refuser</button>
            <button class="bj-btn">Confirmer mes choix</button>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="consentManagerCode" />
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="classesRows" />
  </DocsSection>

  <DocsSection id="sec-attributs-js" title="Attributs JavaScript">
    <DocsPropsTable
      :headers="['Attribut', 'Description']"
      :rows="attrsRows"
    />
  </DocsSection>

  <DocsSection id="sec-accessibilite" title="Accessibilité">
    <DocsA11yNote>
      La modale de personnalisation implémente un piège de focus : la tabulation
      reste à l’intérieur du dialogue tant qu’il est ouvert. La touche
      <kbd>Échap</kbd> ferme la modale lorsque le script DSBJ est actif. Les
      préférences par service utilisent des cases à cocher natives à l’intérieur
      d’un <code>label</code>, ce qui préserve une association explicite entre le
      libellé et le contrôle. Les choix de consentement sont persistés dans
      <code>localStorage</code> sous la clé <code>bj-consent</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
