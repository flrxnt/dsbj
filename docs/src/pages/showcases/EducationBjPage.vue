<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { educationBjCode } from './snippets/educationBjCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcase — Ministère de l’Éducation',
      intro:
        'Portail éducatif : recherche centrale, accès rapides en cartes (examens, inscriptions, ressources) et FAQ en accordéons groupés.',
      'section-structure': 'Structure des blocs',
      'struct-1': 'En-tête et navigation vers examens, inscriptions et ressources.',
      'struct-2': 'Bandeau d’introduction avec titre, texte et barre de recherche large.',
      'struct-3': 'Trois cartes pour les parcours les plus demandés.',
      'struct-4':
        'Section FAQ avec groupe d’accordéons (data-bj-accordion-group) pour un seul panneau ouvert à la fois.',
      'struct-5': 'Pied de page.',
      'section-preview': 'Aperçu condensé',
      'preview-intro': 'Recherche, deux cartes d’accès rapide et un accordéon (aperçu statique).',
      'section-components': 'Composants utilisés',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-search, bj-search--lg, bj-search__input, bj-search__btn, bj-sr-only',
      'comp-li-3': 'bj-cards, bj-card, bj-card__footer, bj-btn, bj-btn--sm',
      'comp-li-4': 'bj-accordion, bj-accordion__btn, bj-accordion__body, data-bj-accordion-btn, data-bj-accordion-group',
      'comp-li-5': 'bj-bg-alt, bj-container, bj-text-center, bj-h1, bj-h2, bj-h4, bj-text-lg, bj-text-sm',
    },
    en: {
      title: 'Showcase — Ministry of Education',
      intro:
        'Education portal: central search, quick-access cards (exams, enrollment, resources) and FAQ accordions in a group.',
      'section-structure': 'Block structure',
      'struct-1': 'Header and navigation to exams, enrollment and resources.',
      'struct-2': 'Intro band with title, copy and large search field.',
      'struct-3': 'Three cards for the most common journeys.',
      'struct-4':
        'FAQ section with accordion group (data-bj-accordion-group) for single-open behaviour.',
      'struct-5': 'Footer.',
      'section-preview': 'Condensed preview',
      'preview-intro': 'Search, two quick-access cards and one accordion (static preview).',
      'section-components': 'Components used',
      'comp-li-1': 'bj-skiplinks, bj-header, bj-logo, bj-footer',
      'comp-li-2': 'bj-search, bj-search--lg, bj-search__input, bj-search__btn, bj-sr-only',
      'comp-li-3': 'bj-cards, bj-card, bj-card__footer, bj-btn, bj-btn--sm',
      'comp-li-4': 'bj-accordion, bj-accordion__btn, bj-accordion__body, data-bj-accordion-btn, data-bj-accordion-group',
      'comp-li-5': 'bj-bg-alt, bj-container, bj-text-center, bj-h1, bj-h2, bj-h4, bj-text-lg, bj-text-sm',
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
    <form
      class="bj-search bj-search--lg"
      role="search"
      action="#"
      method="get"
      style="margin-bottom: var(--bj-spacing-6v); max-width: 28rem"
    >
      <input
        class="bj-search__input"
        type="search"
        name="q"
        placeholder="Rechercher une circulaire…"
        aria-label="Recherche éducation"
      />
      <button type="submit" class="bj-search__btn">
        <span class="bj-sr-only">Rechercher</span>
        <i class="ri-search-line" aria-hidden="true"></i>
      </button>
    </form>
    <div class="bj-cards" style="margin-bottom: var(--bj-spacing-6v)">
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Examens</p>
          <h3 class="bj-card__title">Résultats BEPC / BAC</h3>
          <p class="bj-card__desc">Par numéro de table.</p>
        </div>
        <div class="bj-card__footer">
          <a href="#" class="bj-btn bj-btn--sm">Consulter</a>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Inscriptions</p>
          <h3 class="bj-card__title">Préinscription</h3>
          <p class="bj-card__desc">Calendrier et pièces.</p>
        </div>
        <div class="bj-card__footer">
          <a href="#" class="bj-btn bj-btn--sm">Commencer</a>
        </div>
      </article>
    </div>
    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">FAQ (aperçu)</h3>
    <div class="bj-accordion">
      <button
        type="button"
        class="bj-accordion__btn"
        data-bj-accordion-btn
        aria-expanded="true"
        aria-controls="edu-preview-acc"
      >
        Comment obtenir un duplicata de diplôme ?
      </button>
      <div id="edu-preview-acc" class="bj-accordion__body" data-bj-expanded>
        <p class="bj-text-sm">
          Déposez une demande au service des examens avec pièce d’identité et frais de timbre.
        </p>
      </div>
    </div>
  </DocsPreview>

  <DocsCode :code="educationBjCode" />

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
