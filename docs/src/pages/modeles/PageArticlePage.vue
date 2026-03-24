<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { pageArticleCode } from './snippets/pageArticleCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Modèle de page article',
      intro:
        'Les pages de contenu (textes réglementaires, communiqués, fiches explicatives) privilégient la lisibilité et la hiérarchie de l’information. Le fil d’Ariane situe l’usager dans le site ; le corps de page utilise la zone de prose ',
      'intro-after':
        ' ; la colonne latérale regroupe le sommaire des titres et les liens vers des pages connexes du même service.',
      'section-structure': 'Structure des sections',
      'struct-li-header-strong': 'En-tête',
      'struct-li-header-same': 'Identique aux autres pages :',
      'struct-li-header-nav': 'avec navigation principale.',
      'struct-li-breadcrumb-strong': 'Fil d’Ariane',
      'struct-li-breadcrumb-after':
        ' depuis l’accueil jusqu’au titre courant.',
      'struct-li-article-strong': 'Article',
      'struct-li-article-before':
        'Titre, méta-informations (date, service), puis ',
      'struct-li-article-after':
        ' pour le texte riche (titres, listes, tableaux).',
      'struct-li-summary-strong': 'Sommaire',
      'struct-li-summary-after':
        ' avec ancres vers les intertitres de l’article.',
      'struct-li-related-strong': 'Pages liées',
      'struct-li-related-after':
        ' pour la navigation contextuelle (rubrique, dossier thématique).',
      'struct-li-footer-strong': 'Pied de page',
      'struct-li-footer-after': 'institutionnel.',
      'section-preview': 'Aperçu du gabarit',
    },
    en: {
      title: 'Article page template',
      intro:
        'Content pages (regulatory texts, press releases, fact sheets) prioritize readability and information hierarchy. The breadcrumb orients the user within the site; the main column uses the prose area ',
      'intro-after':
        '; the side column groups the heading summary and links to related pages from the same service.',
      'section-structure': 'Section structure',
      'struct-li-header-strong': 'Header',
      'struct-li-header-same': 'Same as other pages:',
      'struct-li-header-nav': 'with main navigation.',
      'struct-li-breadcrumb-strong': 'Breadcrumb',
      'struct-li-breadcrumb-after': ' from home to the current title.',
      'struct-li-article-strong': 'Article',
      'struct-li-article-before':
        'Title, meta (date, department), then ',
      'struct-li-article-after':
        ' for rich text (headings, lists, tables).',
      'struct-li-summary-strong': 'Summary',
      'struct-li-summary-after': ' with anchors to article subheadings.',
      'struct-li-related-strong': 'Related pages',
      'struct-li-related-after':
        ' for contextual navigation (section, thematic dossier).',
      'struct-li-footer-strong': 'Footer',
      'struct-li-footer-after': 'institutional.',
      'section-preview': 'Template preview',
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
    {{ t('intro') }}<code>bj-content</code>{{ t('intro-after') }}
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
      {{ t('struct-li-header-same') }}
      <code>bj-header</code> {{ t('struct-li-header-nav') }}
    </li>
    <li>
      <strong>{{ t('struct-li-breadcrumb-strong') }}</strong> -
      <code>bj-breadcrumb</code>{{ t('struct-li-breadcrumb-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-article-strong') }}</strong> -
      {{ t('struct-li-article-before') }}<code>bj-content</code
      >{{ t('struct-li-article-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-summary-strong') }}</strong> -
      <code>bj-summary</code>{{ t('struct-li-summary-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-related-strong') }}</strong> -
      <code>bj-sidemenu</code>{{ t('struct-li-related-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-footer-strong') }}</strong> -
      <code>bj-footer</code> {{ t('struct-li-footer-after') }}
    </li>
  </ul>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('section-preview') }}
  </h2>
  <DocsPreview style="padding: var(--bj-spacing-4v)">
    <nav
      class="bj-breadcrumb"
      aria-label="Exemple fil d'Ariane"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <ol class="bj-breadcrumb__list">
        <li class="bj-breadcrumb__item">
          <a class="bj-breadcrumb__link" href="#">Accueil</a>
        </li>
        <li class="bj-breadcrumb__item">
          <a class="bj-breadcrumb__link" href="#">Publications</a>
        </li>
        <li class="bj-breadcrumb__item" aria-current="page">
          Note de service
        </li>
      </ol>
    </nav>
    <div class="bj-grid-row bj-grid-row--gutters">
      <div class="bj-col-12 bj-col-lg-8">
        <article>
          <header style="margin-bottom: var(--bj-spacing-4v)">
            <h2
              class="bj-h2"
              style="margin-bottom: var(--bj-spacing-2v)"
            >
              Note de service n° 2025-04
            </h2>
            <p class="bj-text-sm" style="color: var(--bj-text-mention)">
              Publié le 12 mars 2025 - Direction générale
            </p>
          </header>
          <div class="bj-content">
            <h3 id="demo-contexte">Contexte</h3>
            <p>
              Le présent document fixe les modalités de mise en œuvre
              applicables aux services déconcentrés.
            </p>
            <h3 id="demo-dispositions">Dispositions</h3>
            <p>
              Les agents concernés doivent respecter le calendrier officiel et
              conserver les traces des décisions.
            </p>
          </div>
        </article>
      </div>
      <div class="bj-col-12 bj-col-lg-4">
        <nav
          class="bj-summary"
          aria-label="Sommaire"
          style="margin-bottom: var(--bj-spacing-4v)"
        >
          <p class="bj-summary__title">Sommaire</p>
          <div class="bj-summary__list">
            <a class="bj-summary__link" href="#demo-contexte"
              >Contexte</a
            >
            <a class="bj-summary__link" href="#demo-dispositions"
              >Dispositions</a
            >
          </div>
        </nav>
        <nav class="bj-sidemenu" aria-label="Dans cette rubrique">
          <p class="bj-sidemenu__title">Publications</p>
          <ul class="bj-sidemenu__list">
            <li class="bj-sidemenu__item">
              <a
                class="bj-sidemenu__link bj-sidemenu__link--active"
                href="#"
                aria-current="page"
                >Note de service</a
              >
            </li>
            <li class="bj-sidemenu__item">
              <a class="bj-sidemenu__link" href="#">Circulaires</a>
            </li>
            <li class="bj-sidemenu__item">
              <a class="bj-sidemenu__link" href="#">Rapports annuels</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </DocsPreview>

  <DocsCode :code="pageArticleCode" />
</template>
