<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Modèles de pages',
      desc:
        'Les modèles ci-dessous proposent des structures types pour les sites et portails des administrations publiques de la République du Bénin. Ils s’appuient sur les composants du DSBJ afin d’assurer une présentation cohérente, accessible et conforme à l’identité de l’État : page d’accueil institutionnelle, page de contenu ou d’actualité, et page de démarche ou formulaire en ligne.',
      'card-home-title': 'Page d’accueil',
      'card-home-desc':
        'Bande tricolore, en-tête, hero, actualités en cartes, accès rapides, mise en avant et pied de page.',
      'card-article-title': 'Page article',
      'card-article-desc':
        'Fil d’Ariane, contenu éditorial structuré, sommaire et menu latéral des pages liées.',
      'card-form-title': 'Page formulaire',
      'card-form-desc':
        'Indicateur d’étapes, champs variés, pièces jointes et actions de validation pour les démarches.',
    },
    en: {
      title: 'Page templates',
      desc:
        'The templates below offer typical layouts for websites and portals of public administrations of the Republic of Benin. They build on DSBJ components to ensure a consistent, accessible presentation aligned with the State’s identity: institutional home page, content or news page, and online procedure or form page.',
      'card-home-title': 'Home page',
      'card-home-desc':
        'Tricolor band, header, hero, news cards, quick links, highlight block and footer.',
      'card-article-title': 'Article page',
      'card-article-desc':
        'Breadcrumb, structured editorial content, summary and side menu of related pages.',
      'card-form-title': 'Form page',
      'card-form-desc':
        'Step indicator, varied fields, attachments and validation actions for procedures.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 44rem"
  >
    {{ t('desc') }}
  </p>

  <div class="docs-cards">
    <DocsCard
      to="/modeles/page-accueil"
      icon="ri-home-4-line"
      :title="t('card-home-title')"
      :description="t('card-home-desc')"
    />
    <DocsCard
      to="/modeles/page-article"
      icon="ri-article-line"
      :title="t('card-article-title')"
      :description="t('card-article-desc')"
    />
    <DocsCard
      to="/modeles/page-formulaire"
      icon="ri-file-list-3-line"
      :title="t('card-form-title')"
      :description="t('card-form-desc')"
    />
  </div>
</template>
