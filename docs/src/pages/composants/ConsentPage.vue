<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bannière de consentement (Cookies)',
      desc:
        'Composant réglementaire permettant de recueillir le consentement de l’utilisateur pour les cookies et traceurs, conformément à la réglementation en vigueur.',
      'sec-banner': 'Bannière de consentement',
      'sec-banner-p-1':
        'La bannière s’affiche en pied de page jusqu’à ce qu’un choix soit enregistré. Pour la documentation, l’aperçu ci-dessous utilise un positionnement relatif afin de rester visible dans le flux de la page.',
      'sec-modal': 'Modale de personnalisation',
      'sec-modal-p-1':
        'La personnalisation repose sur la structure ',
      'sec-modal-p-2': ' et des lignes ',
      'sec-modal-p-3': ', chacune associée à un interrupteur ',
      'sec-modal-p-4':
        '. En production, le gestionnaire est généralement rendu dans un overlay plein écran ; ici il est centré pour l’aperçu.',
      'sec-classes-css': 'Classes CSS',
      'sec-attrs': 'Attributs JavaScript',
      'sec-a11y': 'Accessibilité',
      'th-attribute': 'Attribut',
      'th-class': 'Classe',
      'th-description': 'Description',
      'class-banner': 'Bannière fixée en bas de page',
      'class-body': 'Corps de la bannière',
      'class-header': 'En-tête avec icône et titre',
      'class-icon': 'Icône de la bannière',
      'class-title': 'Titre de la bannière',
      'class-text': 'Texte explicatif',
      'class-actions': 'Conteneur des boutons d’action',
      'class-manager': 'Modale de personnalisation (overlay)',
      'class-dialog': 'Boîte de dialogue',
      'class-m-header': 'En-tête de la modale',
      'class-m-body': 'Corps scrollable',
      'class-m-footer': 'Pied avec boutons',
      'class-service': 'Ligne de service',
      'class-s-info': 'Informations du service',
      'class-s-name': 'Nom du service',
      'class-s-desc': 'Description du service',
      'class-s-toggle': 'Interrupteur du service',
      'attr-banner': 'Sur l’élément bannière',
      'attr-accept': 'Sur le bouton « Tout accepter »',
      'attr-refuse': 'Sur le bouton « Tout refuser »',
      'attr-customize-1':
        'Sur le bouton « Personnaliser » : associer data-bj-modal-open à l’id du gestionnaire (bj-consent-manager) si ouverture via modale DSBJ.',
      'attr-expanded':
        'Rend la bannière visible (utile pour forcer l’affichage en démo ou après rechargement)',
      'a11y-1':
        'La modale de personnalisation implémente un piège de focus : la tabulation reste à l’intérieur du dialogue tant qu’il est ouvert. La touche ',
      'a11y-2':
        ' ferme la modale lorsque le script DSBJ est actif. Les préférences par service utilisent des cases à cocher natives à l’intérieur d’un ',
      'a11y-3':
        ', ce qui préserve une association explicite entre le libellé et le contrôle. Les choix de consentement sont persistés dans localStorage sous la clé ',
      'a11y-4': ' (clé utilisée par la bannière de démonstration du site docs).',
      'kbd-esc': 'Échap',
      'class-bj-toggle':
        'Interrupteur sur chaque ligne de service (voir composant Toggle).',
      'sec-services': 'Liste de services (exemple)',
      'sec-services-p-1':
        'En personnalisation, chaque traceur ou famille de cookies est une ligne',
      'sec-services-p-2':
        'avec nom, description courte et',
      'sec-services-p-3':
        '. Réutilisez le bloc suivant pour rester aligné avec le DSBJ.',
    },
    en: {
      title: 'Consent banner (cookies)',
      desc:
        'Regulatory component for collecting user consent for cookies and trackers, in line with applicable rules.',
      'sec-banner': 'Consent banner',
      'sec-banner-p-1':
        'The banner stays at the bottom of the page until a choice is saved. For documentation, the preview below uses relative positioning so it stays visible in the page flow.',
      'sec-modal': 'Customization modal',
      'sec-modal-p-1': 'Customization uses the ',
      'sec-modal-p-2': ' structure and ',
      'sec-modal-p-3': ' rows, each with a ',
      'sec-modal-p-4':
        ' switch. In production the manager is usually a full-screen overlay; here it is centered for the preview.',
      'sec-classes-css': 'CSS classes',
      'sec-attrs': 'JavaScript attributes',
      'sec-a11y': 'Accessibility',
      'th-attribute': 'Attribute',
      'th-class': 'Class',
      'th-description': 'Description',
      'class-banner': 'Banner fixed to the bottom of the page',
      'class-body': 'Banner body',
      'class-header': 'Header with icon and title',
      'class-icon': 'Banner icon',
      'class-title': 'Banner title',
      'class-text': 'Explanatory text',
      'class-actions': 'Action buttons container',
      'class-manager': 'Customization modal (overlay)',
      'class-dialog': 'Dialog box',
      'class-m-header': 'Modal header',
      'class-m-body': 'Scrollable body',
      'class-m-footer': 'Footer with buttons',
      'class-service': 'Service row',
      'class-s-info': 'Service information',
      'class-s-name': 'Service name',
      'class-s-desc': 'Service description',
      'class-s-toggle': 'Service toggle',
      'attr-banner': 'On the banner element',
      'attr-accept': 'On the “Accept all” button',
      'attr-refuse': 'On the “Reject all” button',
      'attr-customize-1':
        'On the “Customize” button: set data-bj-modal-open to the consent manager id when using the DSBJ modal opener.',
      'attr-expanded':
        'Shows the banner (useful to force display in demos or after reload)',
      'a11y-1':
        'The customization modal traps focus: Tab stays inside the dialog while it is open. The ',
      'a11y-2':
        ' key closes the modal when the DSBJ script is active. Per-service preferences use native checkboxes inside a ',
      'a11y-3':
        ', keeping an explicit label–control association. Consent choices are stored in localStorage under the key ',
      'a11y-4': ' (key used by the docs site demo banner).',
      'kbd-esc': 'Escape',
      'class-bj-toggle':
        'Per-service switch (see the Toggle component).',
      'sec-services': 'Service list (example)',
      'sec-services-p-1':
        'In the customization flow, each tracker or cookie family is one',
      'sec-services-p-2': 'row with a name, short description, and',
      'sec-services-p-3':
        '. Reuse the snippet below to stay aligned with DSBJ.',
    },
  },
})

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

const consentServiceListCode = `<div class="bj-consent-manager__body">
  <div class="bj-consent-service">
    <div class="bj-consent-service__info">
      <p class="bj-consent-service__name">Strictly necessary</p>
      <p class="bj-consent-service__desc">Required for security and basic features. Always on.</p>
    </div>
    <div class="bj-consent-service__toggle">
      <label class="bj-toggle">
        <input type="checkbox" class="bj-toggle__input" checked disabled />
        <span class="bj-toggle__slider"></span>
      </label>
    </div>
  </div>
  <div class="bj-consent-service">
    <div class="bj-consent-service__info">
      <p class="bj-consent-service__name">Audience measurement</p>
      <p class="bj-consent-service__desc">Anonymous statistics to improve content.</p>
    </div>
    <div class="bj-consent-service__toggle">
      <label class="bj-toggle">
        <input type="checkbox" class="bj-toggle__input" />
        <span class="bj-toggle__slider"></span>
      </label>
    </div>
  </div>
  <div class="bj-consent-service">
    <div class="bj-consent-service__info">
      <p class="bj-consent-service__name">Personalization</p>
      <p class="bj-consent-service__desc">Remember preferences and contextual content.</p>
    </div>
    <div class="bj-consent-service__toggle">
      <label class="bj-toggle">
        <input type="checkbox" class="bj-toggle__input" />
        <span class="bj-toggle__slider"></span>
      </label>
    </div>
  </div>
  <div class="bj-consent-service">
    <div class="bj-consent-service__info">
      <p class="bj-consent-service__name">Social &amp; sharing</p>
      <p class="bj-consent-service__desc">Embeds and share buttons from third-party platforms.</p>
    </div>
    <div class="bj-consent-service__toggle">
      <label class="bj-toggle">
        <input type="checkbox" class="bj-toggle__input" />
        <span class="bj-toggle__slider"></span>
      </label>
    </div>
  </div>
</div>`

const consentManagerCode = `<div class="bj-consent-manager" id="id-modale-consentement" role="dialog" aria-modal="true" aria-labelledby="consent-manager-title" style="display: flex">
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

const tableHeadersAttr = computed((): [string, string] => [
  t('th-attribute'),
  t('th-description'),
])

const tableHeadersClass = computed((): [string, string] => [
  t('th-class'),
  t('th-description'),
])

const classesRows = computed(() => [
  { name: 'bj-consent-banner', description: t('class-banner') },
  { name: 'bj-consent-banner__body', description: t('class-body') },
  {
    name: 'bj-consent-banner__header',
    description: t('class-header'),
  },
  { name: 'bj-consent-banner__icon', description: t('class-icon') },
  { name: 'bj-consent-banner__title', description: t('class-title') },
  { name: 'bj-consent-banner__text', description: t('class-text') },
  {
    name: 'bj-consent-banner__actions',
    description: t('class-actions'),
  },
  {
    name: 'bj-consent-manager',
    description: t('class-manager'),
  },
  { name: 'bj-consent-manager__dialog', description: t('class-dialog') },
  { name: 'bj-consent-manager__header', description: t('class-m-header') },
  { name: 'bj-consent-manager__body', description: t('class-m-body') },
  { name: 'bj-consent-manager__footer', description: t('class-m-footer') },
  { name: 'bj-consent-service', description: t('class-service') },
  {
    name: 'bj-consent-service__info',
    description: t('class-s-info'),
  },
  { name: 'bj-consent-service__name', description: t('class-s-name') },
  {
    name: 'bj-consent-service__desc',
    description: t('class-s-desc'),
  },
  {
    name: 'bj-consent-service__toggle',
    description: t('class-s-toggle'),
  },
  {
    name: 'bj-toggle / bj-toggle__input',
    description: t('class-bj-toggle'),
  },
])

const attrsRows = computed(() => [
  { name: 'data-bj-consent-banner', description: t('attr-banner') },
  {
    name: 'data-bj-consent-accept',
    description: t('attr-accept'),
  },
  {
    name: 'data-bj-consent-refuse',
    description: t('attr-refuse'),
  },
  {
    name: 'data-bj-consent-customize',
    description: t('attr-customize-1'),
  },
  {
    name: 'data-bj-expanded',
    description: t('attr-expanded'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-banniere" :title="t('sec-banner')">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 44rem;
      "
    >
      {{ t('sec-banner-p-1') }}
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
          data-bj-consent-banner
          data-bj-expanded
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
              navigation, mesurer l’audience du site et vous proposer des
              contenus adaptés. En cliquant sur « Tout accepter », vous acceptez
              l’utilisation de l’ensemble des cookies. Vous pouvez également
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

  <DocsSection id="sec-modale" :title="t('sec-modal')">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 44rem;
      "
    >
      {{ t('sec-modal-p-1') }}<code>bj-consent-manager</code
      >{{ t('sec-modal-p-2') }}<code>bj-consent-service</code
      >{{ t('sec-modal-p-3') }}<code>bj-toggle</code>{{ t('sec-modal-p-4') }}
    </p>
    <DocsPreview style="position: relative">
      <div
        class="bj-consent-manager"
        style="
          position: relative;
          min-height: 28rem;
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--bj-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--bj-spacing-4v);
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
                  l’affichage de publications.
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

  <DocsSection id="sec-services-liste" :title="t('sec-services')">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 44rem;
      "
    >
      {{ t('sec-services-p-1') }}
      <code>bj-consent-service</code>
      {{ t('sec-services-p-2') }}
      <code>bj-toggle</code>
      {{ t('sec-services-p-3') }}
    </p>
    <DocsPreview style="position: relative">
      <div
        style="
          max-width: 40rem;
          margin: 0 auto;
          background: var(--bj-bg-elevated);
          border-radius: var(--bj-radius-md);
          box-shadow: var(--bj-shadow-lg);
          border: 1px solid var(--bj-border-subtle);
        "
      >
        <div class="bj-consent-manager__body" style="max-height: none">
          <div class="bj-consent-service">
            <div class="bj-consent-service__info">
              <p class="bj-consent-service__name">Cookies strictement nécessaires</p>
              <p class="bj-consent-service__desc">
                Sécurité, session et préférences légales. Toujours actifs.
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
              <p class="bj-consent-service__name">Mesure d’audience</p>
              <p class="bj-consent-service__desc">
                Statistiques anonymisées pour améliorer les contenus publics.
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
              <p class="bj-consent-service__name">Personnalisation</p>
              <p class="bj-consent-service__desc">
                Mémorise la langue, le thème ou le contexte d’affichage.
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
              <p class="bj-consent-service__name">Réseaux sociaux &amp; partage</p>
              <p class="bj-consent-service__desc">
                Lecteurs intégrés et boutons de partage fournis par des tiers.
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
      </div>
    </DocsPreview>
    <DocsCode :code="consentServiceListCode" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('sec-classes-css')">
    <DocsPropsTable :rows="classesRows" />
  </DocsSection>

  <DocsSection id="sec-attributs-js" :title="t('sec-attrs')">
    <DocsPropsTable
      :headers="tableHeadersAttr"
      :rows="attrsRows"
    />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('sec-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <kbd>{{ t('kbd-esc') }}</kbd>
      {{ t('a11y-2') }}
      <code>label</code>
      {{ t('a11y-3') }}
      <code>bj-consent</code>
      {{ t('a11y-4') }}
    </DocsA11yNote>
  </DocsSection>
</template>
