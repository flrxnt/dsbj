<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { financesBjCode } from './snippets/financesBjCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcase — Ministère des Finances',
      intro:
        'Interface type pour la consultation d’indicateurs budgétaires et fiscaux : fil d’Ariane, cartes de synthèse, tableau régional et formulaire de demande administrative.',
      'section-structure': 'Structure des blocs',
      'struct-1': 'Liens d’évitement et en-tête ministériel avec navigation thématique.',
      'struct-2': 'Fil d’Ariane pour situer la page « Données fiscales ».',
      'struct-3': 'Quatre cartes chiffrées (KPI) pour un tableau de bord lisible.',
      'struct-4': 'Tableau bordé et rayé avec légende, dans un wrapper à défilement horizontal.',
      'struct-5': 'Formulaire avec champs étiquetés, liste déroulante et actions primaire / secondaire.',
      'struct-6': 'Pied de page institutionnel.',
      'section-preview': 'Aperçu condensé',
      'preview-intro': 'Fil d’Ariane, cartes indicateurs et extrait du tableau (deux lignes).',
      'section-components': 'Composants utilisés',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-breadcrumb, bj-breadcrumb__list, bj-breadcrumb__item, bj-breadcrumb__link',
      'comp-li-3': 'bj-cards, bj-card, bj-card__body, bj-card__detail, bj-card__title, bj-card__desc',
      'comp-li-4': 'bj-table-wrapper, bj-table, bj-table--striped, bj-table--bordered, caption',
      'comp-li-5': 'bj-input-group, bj-label, bj-input, textarea',
      'comp-li-6': 'bj-select-group, bj-select',
      'comp-li-7': 'bj-btn-group, bj-btn, bj-btn--secondary',
      'comp-li-8': 'Typographie : bj-h1, bj-h3, bj-text-lg, bj-content',
    },
    en: {
      title: 'Showcase — Ministry of Finance',
      intro:
        'Typical interface for budget and tax indicators: breadcrumb, summary cards, regional table and an administrative request form.',
      'section-structure': 'Block structure',
      'struct-1': 'Skip links and ministry header with thematic navigation.',
      'struct-2': 'Breadcrumb for the “Tax data” page.',
      'struct-3': 'Four numeric cards (KPIs) for a readable dashboard.',
      'struct-4': 'Bordered striped table with caption inside a horizontal-scroll wrapper.',
      'struct-5': 'Form with labels, select and primary / secondary actions.',
      'struct-6': 'Institutional footer.',
      'section-preview': 'Condensed preview',
      'preview-intro': 'Breadcrumb, KPI cards and a two-row table excerpt.',
      'section-components': 'Components used',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-breadcrumb, bj-breadcrumb__list, bj-breadcrumb__item, bj-breadcrumb__link',
      'comp-li-3': 'bj-cards, bj-card, bj-card__body, bj-card__detail, bj-card__title, bj-card__desc',
      'comp-li-4': 'bj-table-wrapper, bj-table, bj-table--striped, bj-table--bordered, caption',
      'comp-li-5': 'bj-input-group, bj-label, bj-input, textarea',
      'comp-li-6': 'bj-select-group, bj-select',
      'comp-li-7': 'bj-btn-group, bj-btn, bj-btn--secondary',
      'comp-li-8': 'Typography: bj-h1, bj-h3, bj-text-lg, bj-content',
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
    <li>{{ t('struct-6') }}</li>
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
    <nav class="bj-breadcrumb" aria-label="Fil d'Ariane" style="margin-bottom: var(--bj-spacing-4v)">
      <ol class="bj-breadcrumb__list">
        <li class="bj-breadcrumb__item">
          <a class="bj-breadcrumb__link" href="#">Accueil</a>
        </li>
        <li class="bj-breadcrumb__item" aria-current="page">
          <span class="bj-breadcrumb__link">Données fiscales</span>
        </li>
      </ol>
    </nav>
    <div class="bj-cards" style="margin-bottom: var(--bj-spacing-4v)">
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Recettes YTD</p>
          <h3 class="bj-card__title" style="font-size: 1.35rem">1 248 Mrd</h3>
          <p class="bj-card__desc">FCFA</p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Dossiers actifs</p>
          <h3 class="bj-card__title" style="font-size: 1.35rem">18 402</h3>
          <p class="bj-card__desc">Guichets</p>
        </div>
      </article>
    </div>
    <div class="bj-table-wrapper">
      <table class="bj-table bj-table--striped bj-table--bordered">
        <caption>Avis par région (aperçu)</caption>
        <thead>
          <tr>
            <th scope="col">Région</th>
            <th scope="col">Payés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Littoral</td>
            <td>38 200</td>
          </tr>
          <tr>
            <td>Borgou</td>
            <td>17 650</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DocsPreview>

  <DocsCode :code="financesBjCode" />

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
    <li><code>{{ t('comp-li-7') }}</code></li>
    <li>{{ t('comp-li-8') }}</li>
  </ul>
</template>
