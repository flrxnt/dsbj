<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { gouvBjCode } from './snippets/gouvBjCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcase — Portail gouv.bj',
      intro:
        'Proposition de refonte du portail gouvernemental : identité de l’État, recherche centrale, services structurés en cartes, actualités et annonce nationale en mise en avant.',
      'section-structure': 'Structure des blocs',
      'struct-1': 'Liens d’évitement vers le contenu principal.',
      'struct-2': 'En-tête institutionnel avec bande tricolore, logo République, titre de service et navigation principale responsive.',
      'struct-3': 'Bannière hero sombre avec titre institutionnel, accroche et barre de recherche large.',
      'struct-4': 'Grille de quatre cartes pour les services en ligne (État civil, Impôts, Urbanisme, Emploi).',
      'struct-5': 'Trois cartes actualités sur fond alterné.',
      'struct-6': 'Bloc d’annonce gouvernementale (consultation citoyenne).',
      'struct-7': 'Pied de page avec liens obligatoires et mention de licence.',
      'section-preview': 'Aperçu condensé',
      'preview-intro': 'Extrait visuel : bannière avec recherche et grille « Services en ligne » uniquement.',
      'section-components': 'Composants utilisés',
      'comp-li-1': 'bj-skiplinks, bj-skiplinks__link',
      'comp-li-2': 'bj-header, bj-logo, bj-header__nav, bj-header__nav-link',
      'comp-li-3': 'bj-banner, bj-banner--dark, bj-banner--center, bj-banner__img, bj-banner__overlay, bj-banner__body, bj-banner__title, bj-banner__text, bj-banner__actions',
      'comp-li-4': 'bj-search, bj-search--lg, bj-search__input, bj-search__btn, bj-sr-only',
      'comp-li-5': 'bj-cards, bj-card, bj-card__body, bj-card__detail, bj-card__title, bj-card__desc, bj-card__footer, bj-btn',
      'comp-li-6': 'bj-callout, bj-callout--green, bj-callout__icon, bj-callout__title, bj-callout__text, bj-callout__btn',
      'comp-li-7': 'bj-footer, bj-footer__bottom, bj-footer__bottom-list, bj-footer__bottom-link, bj-footer__copy',
      'comp-li-8': 'Utilitaires : bj-container, bj-h1 / bj-h2, bj-text-lg, bj-bg-alt',
    },
    en: {
      title: 'Showcase — gouv.bj portal',
      intro:
        'Proposed redesign of the government portal: State identity, central search, card-based services, news and a national announcement callout.',
      'section-structure': 'Block structure',
      'struct-1': 'Skip links to main content.',
      'struct-2': 'Institutional header with tricolor band, Republic logo, service title and responsive main navigation.',
      'struct-3': 'Dark hero banner with institutional title, tagline and large search field.',
      'struct-4': 'Four-card grid for online services (civil registry, taxes, planning, employment).',
      'struct-5': 'Three news cards on an alternate background.',
      'struct-6': 'Government announcement block (public consultation).',
      'struct-7': 'Footer with mandatory links and licence notice.',
      'section-preview': 'Condensed preview',
      'preview-intro': 'Visual excerpt: banner with search and “Online services” grid only.',
      'section-components': 'Components used',
      'comp-li-1': 'bj-skiplinks, bj-skiplinks__link',
      'comp-li-2': 'bj-header, bj-logo, bj-header__nav, bj-header__nav-link',
      'comp-li-3': 'bj-banner, bj-banner--dark, bj-banner--center, bj-banner__img, bj-banner__overlay, bj-banner__body, bj-banner__title, bj-banner__text, bj-banner__actions',
      'comp-li-4': 'bj-search, bj-search--lg, bj-search__input, bj-search__btn, bj-sr-only',
      'comp-li-5': 'bj-cards, bj-card, bj-card__body, bj-card__detail, bj-card__title, bj-card__desc, bj-card__footer, bj-btn',
      'comp-li-6': 'bj-callout, bj-callout--green, bj-callout__icon, bj-callout__title, bj-callout__text, bj-callout__btn',
      'comp-li-7': 'bj-footer, bj-footer__bottom, bj-footer__bottom-list, bj-footer__bottom-link, bj-footer__copy',
      'comp-li-8': 'Utilities: bj-container, bj-h1 / bj-h2, bj-text-lg, bj-bg-alt',
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
    <li>{{ t('struct-7') }}</li>
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
      class="bj-banner bj-banner--dark bj-banner--center bj-banner--sm"
      aria-label="Aperçu hero"
    >
      <img
        class="bj-banner__img"
        src="https://picsum.photos/1200/400"
        alt=""
      />
      <div class="bj-banner__overlay"></div>
      <div class="bj-banner__body">
        <h2 class="bj-banner__title" style="font-size: clamp(1.1rem, 3vw, 1.5rem)">
          Portail officiel du Gouvernement de la République du Bénin
        </h2>
        <p class="bj-banner__text">Services publics et information officielle.</p>
        <div class="bj-banner__actions">
          <form class="bj-search" role="search" action="#" method="get">
            <input
              class="bj-search__input"
              type="search"
              name="q"
              placeholder="Rechercher sur gouv.bj…"
              aria-label="Rechercher"
            />
            <button type="submit" class="bj-search__btn">
              <span class="bj-sr-only">Rechercher</span>
              <i class="ri-search-line" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <h3 class="bj-h4" style="margin: var(--bj-spacing-6v) 0 var(--bj-spacing-3v)">
      Services en ligne
    </h3>
    <div class="bj-cards">
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Démarche</p>
          <h3 class="bj-card__title">État civil</h3>
          <p class="bj-card__desc">Actes et copies sécurisées.</p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Fiscalité</p>
          <h3 class="bj-card__title">Impôts</h3>
          <p class="bj-card__desc">Déclarations et paiement.</p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Territoire</p>
          <h3 class="bj-card__title">Urbanisme</h3>
          <p class="bj-card__desc">Permis et règlements.</p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Emploi</p>
          <h3 class="bj-card__title">Emploi public</h3>
          <p class="bj-card__desc">Offres et concours.</p>
        </div>
      </article>
    </div>
  </DocsPreview>

  <DocsCode :code="gouvBjCode" />

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
