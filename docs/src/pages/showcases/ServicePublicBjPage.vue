<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { servicePublicBjCode } from './snippets/servicePublicBjCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcase — Services publics',
      intro:
        'Parcours de démarche en ligne : indicateur d’étapes, formulaire d’identité et tuiles vers d’autres procédures courantes.',
      'section-structure': 'Structure des blocs',
      'struct-1': 'En-tête « guichet unique » avec liens démarches, suivi et aide.',
      'struct-2': 'Titre de procédure et stepper (étape courante sur quatre).',
      'struct-3': 'Formulaire avec champs nom, prénom, courriel et navigation Retour / Suivant.',
      'struct-4': 'Grille de tuiles pour des démarches fréquentes (identité, résidence, carte grise).',
      'struct-5': 'Pied de page.',
      'section-preview': 'Aperçu condensé',
      'preview-intro': 'Stepper, deux champs du formulaire et trois tuiles.',
      'section-components': 'Composants utilisés',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-stepper, bj-stepper__header, bj-stepper__title, bj-stepper__steps, bj-stepper__step, bj-stepper__step--done, bj-stepper__step--current, bj-stepper__detail',
      'comp-li-3': 'bj-input-group, bj-label, bj-input',
      'comp-li-4': 'bj-btn-group, bj-btn, bj-btn--secondary',
      'comp-li-5': 'bj-tiles, bj-tile, bj-tile__icon, bj-tile__title, bj-tile__desc',
      'comp-li-6': 'bj-h1, bj-h3, bj-h4, bj-text-lg, bj-content, bj-container',
    },
    en: {
      title: 'Showcase — Public services',
      intro:
        'Online procedure flow: step indicator, identity form and tiles linking to other common services.',
      'section-structure': 'Block structure',
      'struct-1': 'One-stop-shop header with links to procedures, tracking and help.',
      'struct-2': 'Procedure title and stepper (current step of four).',
      'struct-3': 'Form with name, first name, email and Back / Next actions.',
      'struct-4': 'Tile grid for frequent procedures (ID, residence, vehicle registration).',
      'struct-5': 'Footer.',
      'section-preview': 'Condensed preview',
      'preview-intro': 'Stepper, two form fields and three tiles.',
      'section-components': 'Components used',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-stepper, bj-stepper__header, bj-stepper__title, bj-stepper__steps, bj-stepper__step, bj-stepper__step--done, bj-stepper__step--current, bj-stepper__detail',
      'comp-li-3': 'bj-input-group, bj-label, bj-input',
      'comp-li-4': 'bj-btn-group, bj-btn, bj-btn--secondary',
      'comp-li-5': 'bj-tiles, bj-tile, bj-tile__icon, bj-tile__title, bj-tile__desc',
      'comp-li-6': 'bj-h1, bj-h3, bj-h4, bj-text-lg, bj-content, bj-container',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    {{ t('intro') }}
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('section-structure') }}
  </h2>
  <ul
    class="bj-content"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 44rem"
  >
    <li>{{ t('struct-1') }}</li>
    <li>{{ t('struct-2') }}</li>
    <li>{{ t('struct-3') }}</li>
    <li>{{ t('struct-4') }}</li>
    <li>{{ t('struct-5') }}</li>
  </ul>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('section-preview') }}
  </h2>
  <p
    class="bj-text-md"
    style="margin-bottom: var(--bj-spacing-4v); max-width: 40rem"
  >
    {{ t('preview-intro') }}
  </p>

  <DocsPreview style="padding: var(--bj-spacing-4v)">
    <div class="bj-stepper" style="margin-bottom: var(--bj-spacing-6v); max-width: 28rem">
      <p class="bj-stepper__header">Étape 2 sur 4</p>
      <h2 class="bj-stepper__title" style="font-size: 1rem">Identité du porteur de projet</h2>
      <div class="bj-stepper__steps" role="presentation">
        <span class="bj-stepper__step bj-stepper__step--done"></span>
        <span class="bj-stepper__step bj-stepper__step--current"></span>
        <span class="bj-stepper__step"></span>
        <span class="bj-stepper__step"></span>
      </div>
      <p class="bj-stepper__detail">Champs obligatoires avant la suite.</p>
    </div>
    <div style="max-width: 22rem; margin-bottom: var(--bj-spacing-6v)">
      <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-3v)">
        <label class="bj-label" for="sp-demo-nom">Nom</label>
        <input class="bj-input" type="text" id="sp-demo-nom" name="nom" />
      </div>
      <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-3v)">
        <label class="bj-label" for="sp-demo-prenom">Prénom(s)</label>
        <input class="bj-input" type="text" id="sp-demo-prenom" name="prenom" />
      </div>
    </div>
    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">Autres démarches</h3>
    <div class="bj-tiles">
      <a href="#" class="bj-tile">
        <i class="ri-id-card-line bj-tile__icon" aria-hidden="true"></i>
        <span class="bj-tile__title">Carte d’identité</span>
        <span class="bj-tile__desc">Première demande</span>
      </a>
      <a href="#" class="bj-tile">
        <i class="ri-home-4-line bj-tile__icon" aria-hidden="true"></i>
        <span class="bj-tile__title">Certificat de résidence</span>
        <span class="bj-tile__desc">Mairie</span>
      </a>
      <a href="#" class="bj-tile">
        <i class="ri-car-line bj-tile__icon" aria-hidden="true"></i>
        <span class="bj-tile__title">Carte grise</span>
        <span class="bj-tile__desc">Mutation</span>
      </a>
    </div>
  </DocsPreview>

  <DocsCode :code="servicePublicBjCode" />

  <h2 class="bj-h3" style="margin: var(--bj-spacing-8v) 0 var(--bj-spacing-3v)">
    {{ t('section-components') }}
  </h2>
  <ul class="bj-content" style="max-width: 44rem">
    <li><code>{{ t('comp-li-1') }}</code></li>
    <li><code>{{ t('comp-li-2') }}</code></li>
    <li><code>{{ t('comp-li-3') }}</code></li>
    <li><code>{{ t('comp-li-4') }}</code></li>
    <li><code>{{ t('comp-li-5') }}</code></li>
    <li><code>{{ t('comp-li-6') }}</code></li>
  </ul>
</template>
