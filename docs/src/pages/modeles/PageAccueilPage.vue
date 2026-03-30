<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { pageAccueilCode } from './snippets/pageAccueilCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Modèle de page d’accueil',
      intro:
        'La page d’accueil d’un site gouvernemental oriente les usagers vers les informations et services essentiels. Elle combine identité de l’État (bande tricolore et en-tête), message d’accueil clair, actualités ou annonces, accès rapides par thématiques, et un bloc de mise en avant pour une démarche ou une campagne prioritaire.',
      'section-structure': 'Structure des sections',
      'struct-li-header-strong': 'En-tête (Header)',
      'struct-li-header-before': 'Composant ',
      'struct-li-header-after':
        ' avec bande tricolore automatique, marque « République du Bénin », titre du service ou du ministère, et navigation principale.',
      'struct-li-hero-strong': 'Hero',
      'struct-li-hero':
        'Zone d’introduction pleine largeur : titre d’accueil, court texte institutionnel et appels à l’action principaux.',
      'struct-li-news-strong': 'Actualités',
      'struct-li-news-before': 'Grille ',
      'struct-li-news-mid': ' de cartes ',
      'struct-li-news-after':
        ' pour communiqués, nouvelles ou avis aux citoyens.',
      'struct-li-services-strong': 'Services',
      'struct-li-services-before': 'Grille ',
      'struct-li-services-after':
        ' pour les liens vers démarches en ligne, annuaires et outils fréquents.',
      'struct-li-callout-strong': 'Mise en avant',
      'struct-li-callout-before': 'Bloc ',
      'struct-li-callout-after':
        ' pour une information urgente, une consultation publique ou une campagne nationale.',
      'struct-li-footer-strong': 'Pied de page (Footer)',
      'struct-li-footer-before': 'Composant ',
      'struct-li-footer-after':
        ' avec liens légaux et mention d\'indépendance vis-à-vis de l\'État.',
      'section-preview': 'Aperçu du gabarit',
      'preview-intro':
        'Exemple visuel condensé des blocs centraux (sans dupliquer tout le code d’en-tête) :',
    },
    en: {
      title: 'Home page template',
      intro:
        'A government site’s home page directs users to essential information and services. It combines State identity (tricolor band and header), a clear welcome message, news or announcements, quick thematic access, and a highlight block for a priority procedure or campaign.',
      'section-structure': 'Section structure',
      'struct-li-header-strong': 'Header',
      'struct-li-header-before': 'The ',
      'struct-li-header-after':
        ' component with automatic tricolor band, “Republic of Benin” branding, ministry or service title, and main navigation.',
      'struct-li-hero-strong': 'Hero',
      'struct-li-hero':
        'Full-width introduction: welcome title, short institutional text and primary calls to action.',
      'struct-li-news-strong': 'News',
      'struct-li-news-before': 'A ',
      'struct-li-news-mid': ' grid of ',
      'struct-li-news-after':
        ' cards for press releases, news or citizen notices.',
      'struct-li-services-strong': 'Services',
      'struct-li-services-before': 'A ',
      'struct-li-services-after':
        ' grid for links to online procedures, directories and common tools.',
      'struct-li-callout-strong': 'Highlight',
      'struct-li-callout-before': 'An ',
      'struct-li-callout-after':
        ' block for urgent information, public consultation or national campaign.',
      'struct-li-footer-strong': 'Footer',
      'struct-li-footer-before': 'The ',
      'struct-li-footer-after':
        ' component with legal links and State licence notice.',
      'section-preview': 'Template preview',
      'preview-intro':
        'Condensed visual example of the main blocks (without duplicating the full header code):',
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
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    <li>
      <strong>{{ t('struct-li-header-strong') }}</strong> -
      {{ t('struct-li-header-before') }}<code>bj-header</code
      >{{ t('struct-li-header-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-hero-strong') }}</strong> -
      {{ t('struct-li-hero') }}
    </li>
    <li>
      <strong>{{ t('struct-li-news-strong') }}</strong> -
      {{ t('struct-li-news-before') }}<code>bj-cards</code
      >{{ t('struct-li-news-mid') }}<code>bj-card</code
      >{{ t('struct-li-news-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-services-strong') }}</strong> -
      {{ t('struct-li-services-before') }}<code>bj-tiles</code
      >{{ t('struct-li-services-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-callout-strong') }}</strong> -
      {{ t('struct-li-callout-before') }}<code>bj-callout</code
      >{{ t('struct-li-callout-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-footer-strong') }}</strong> -
      {{ t('struct-li-footer-before') }}<code>bj-footer</code
      >{{ t('struct-li-footer-after') }}
    </li>
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
      class="bj-bg-contrast"
      style="
        padding: var(--bj-spacing-8v) var(--bj-spacing-4v);
        border-radius: var(--bj-radius-sm);
        margin-bottom: var(--bj-spacing-4v);
      "
    >
      <div class="bj-text-center">
        <h2
          class="bj-display-md bj-text-inverted"
          style="margin-bottom: var(--bj-spacing-2v)"
        >
          Bienvenue sur le portail
        </h2>
        <p
          class="bj-text-md"
          style="
            color: var(--bj-color-gris-850);
            max-width: 32rem;
            margin: 0 auto var(--bj-spacing-4v);
          "
        >
          Vos services publics en ligne, informations officielles et démarches
          simplifiées.
        </p>
        <div class="bj-btn-group" style="justify-content: center">
          <a
            href="#"
            class="bj-btn"
            style="
              background-color: var(--bj-color-vert-benin-main-491);
            "
            >Démarches</a
          >
          <a
            href="#"
            class="bj-btn bj-btn--secondary"
            style="color: #fff; border-color: #fff"
            >Contact</a
          >
        </div>
      </div>
    </div>
    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">
      Actualités
    </h3>
    <div class="bj-cards" style="margin-bottom: var(--bj-spacing-6v)">
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Communiqué</p>
          <h3 class="bj-card__title">
            Publication d’un rapport annuel
          </h3>
          <p class="bj-card__desc">
            Synthèse des indicateurs et perspectives pour l’année à venir.
          </p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Avis</p>
          <h3 class="bj-card__title">Consultation publique ouverte</h3>
          <p class="bj-card__desc">
            Participez avant le 30 du mois via le formulaire en ligne.
          </p>
        </div>
      </article>
    </div>
    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">
      Accès rapides
    </h3>
    <div class="bj-tiles" style="margin-bottom: var(--bj-spacing-6v)">
      <a href="#" class="bj-tile">
        <i
          class="ri-file-list-3-line bj-tile__icon"
          aria-hidden="true"
        ></i>
        <span class="bj-tile__title">Télécharger un formulaire</span>
        <span class="bj-tile__desc">Modèles et notices</span>
      </a>
      <a href="#" class="bj-tile">
        <i
          class="ri-calendar-event-line bj-tile__icon"
          aria-hidden="true"
        ></i>
        <span class="bj-tile__title">Prendre rendez-vous</span>
        <span class="bj-tile__desc">Guichets et services</span>
      </a>
      <a href="#" class="bj-tile">
        <i
          class="ri-question-answer-line bj-tile__icon"
          aria-hidden="true"
        ></i>
        <span class="bj-tile__title">Foire aux questions</span>
        <span class="bj-tile__desc"
          >Réponses aux questions fréquentes</span
        >
      </a>
    </div>
    <div class="bj-callout bj-callout--green">
      <i
        class="ri-megaphone-line bj-callout__icon"
        aria-hidden="true"
      ></i>
      <h3 class="bj-callout__title">Campagne nationale</h3>
      <p class="bj-callout__text">
        Informations officielles et modalités de participation sont disponibles
        sur la page dédiée.
      </p>
      <div class="bj-callout__btn">
        <a href="#" class="bj-btn">En savoir plus</a>
      </div>
    </div>
  </DocsPreview>

  <DocsCode :code="pageAccueilCode" />
</template>
