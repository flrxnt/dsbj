<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { santeBjCode } from './snippets/santeBjCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcase — Ministère de la Santé',
      intro:
        'Page d’information sanitaire combinant alertes contextualisées, indicateurs en cartes et annuaire tabulaire des établissements.',
      'section-structure': 'Structure des blocs',
      'struct-1': 'En-tête ministériel et navigation vers alertes, centres et vaccination.',
      'struct-2': 'Alerte principale (avertissement) pour un risque ou une consigne urgente.',
      'struct-3': 'Alerte compacte informative pour une campagne ou un rappel.',
      'struct-4': 'Trois cartes statistiques (couverture vaccinale, centres, consultations).',
      'struct-5': 'Tableau annuaire des CHD avec colonnes établissement, département, urgences.',
      'struct-6': 'Pied de page.',
      'section-preview': 'Aperçu condensé',
      'preview-intro': 'Deux alertes, trois cartes chiffrées et deux lignes d’annuaire.',
      'section-components': 'Composants utilisés',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-alert, bj-alert--warning, bj-alert--info, bj-alert--sm, bj-alert__body, bj-alert__title, bj-alert__text',
      'comp-li-3': 'bj-cards, bj-card, bj-card__body, bj-card__detail, bj-card__title, bj-card__desc',
      'comp-li-4': 'bj-table-wrapper, bj-table, bj-table--bordered',
      'comp-li-5': 'bj-h1, bj-h3, bj-container',
    },
    en: {
      title: 'Showcase — Ministry of Health',
      intro:
        'Health information page combining contextual alerts, stat cards and a tabular facility directory.',
      'section-structure': 'Block structure',
      'struct-1': 'Ministry header and navigation to alerts, facilities and vaccination.',
      'struct-2': 'Primary warning alert for risk or urgent guidance.',
      'struct-3': 'Compact info alert for campaigns or reminders.',
      'struct-4': 'Three statistic cards (vaccination coverage, facilities, consultations).',
      'struct-5': 'Directory table of regional hospitals with department and emergency columns.',
      'struct-6': 'Footer.',
      'section-preview': 'Condensed preview',
      'preview-intro': 'Two alerts, three stat cards and two directory rows.',
      'section-components': 'Components used',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-alert, bj-alert--warning, bj-alert--info, bj-alert--sm, bj-alert__body, bj-alert__title, bj-alert__text',
      'comp-li-3': 'bj-cards, bj-card, bj-card__body, bj-card__detail, bj-card__title, bj-card__desc',
      'comp-li-4': 'bj-table-wrapper, bj-table, bj-table--bordered',
      'comp-li-5': 'bj-h1, bj-h3, bj-container',
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
    <div
      class="bj-alert bj-alert--warning"
      role="region"
      aria-labelledby="sante-preview-a1"
      style="margin-bottom: var(--bj-spacing-3v)"
    >
      <div class="bj-alert__body">
        <p class="bj-alert__title" id="sante-preview-a1">Pic de saison des pluies</p>
        <p class="bj-alert__text">Renforcez l’hygiène et consultez en cas de fièvre prolongée.</p>
      </div>
    </div>
    <div
      class="bj-alert bj-alert--info bj-alert--sm"
      role="status"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <div class="bj-alert__body">
        <p class="bj-alert__title">Campagne de dépistage</p>
        <p class="bj-alert__text">Du 12 au 18 dans les CSCom.</p>
      </div>
    </div>
    <div class="bj-cards" style="margin-bottom: var(--bj-spacing-4v)">
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Vaccination</p>
          <h3 class="bj-card__title" style="font-size: 1.35rem">87 %</h3>
          <p class="bj-card__desc">0-11 mois</p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Centres</p>
          <h3 class="bj-card__title" style="font-size: 1.35rem">1 842</h3>
          <p class="bj-card__desc">Publics</p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Consultations</p>
          <h3 class="bj-card__title" style="font-size: 1.35rem">520 K</h3>
          <p class="bj-card__desc">/ mois</p>
        </div>
      </article>
    </div>
    <div class="bj-table-wrapper">
      <table class="bj-table bj-table--bordered">
        <caption>CHD (aperçu)</caption>
        <thead>
          <tr>
            <th scope="col">Établissement</th>
            <th scope="col">Urgences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CHD Cotonou</td>
            <td>Oui</td>
          </tr>
          <tr>
            <td>CHD Parakou</td>
            <td>Oui</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DocsPreview>

  <DocsCode :code="santeBjCode" />

  <h2 class="bj-h3" style="margin: var(--bj-spacing-8v) 0 var(--bj-spacing-3v)">
    {{ t('section-components') }}
  </h2>
  <ul class="bj-content" style="max-width: 44rem">
    <li><code>{{ t('comp-li-1') }}</code></li>
    <li><code>{{ t('comp-li-2') }}</code></li>
    <li><code>{{ t('comp-li-3') }}</code></li>
    <li><code>{{ t('comp-li-4') }}</code></li>
    <li><code>{{ t('comp-li-5') }}</code></li>
  </ul>
</template>
