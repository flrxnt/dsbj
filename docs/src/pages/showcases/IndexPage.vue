<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcases',
      desc: 'Redesigns de sites gouvernementaux béninois avec le Design Système du Bénin. Chaque showcase démontre comment les composants DSBJ peuvent transformer l\'expérience utilisateur d\'un site institutionnel.',
      'card-gouv-title': 'Portail gouvernemental',
      'card-gouv-desc': 'Redesign du portail officiel gouv.bj avec header institutionnel, cartes de services et navigation moderne.',
      'card-finances-title': 'Ministère des Finances',
      'card-finances-desc': 'Interface de consultation des données fiscales et formulaires administratifs.',
      'card-sante-title': 'Ministère de la Santé',
      'card-sante-desc': 'Plateforme d\'information sanitaire avec alertes, statistiques et annuaire des centres.',
      'card-education-title': 'Ministère de l\'Éducation',
      'card-education-desc': 'Portail éducatif avec résultats d\'examens, ressources pédagogiques et inscriptions.',
      'card-services-title': 'Services publics',
      'card-services-desc': 'Plateforme unifiée pour les démarches administratives en ligne.',
    },
    en: {
      title: 'Showcases',
      desc: 'Redesigns of Beninese government websites with the Design System of Benin. Each showcase demonstrates how DSBJ components can transform the user experience of an institutional site.',
      'card-gouv-title': 'Government portal',
      'card-gouv-desc': 'Redesign of the official gouv.bj portal with institutional header, service cards and modern navigation.',
      'card-finances-title': 'Ministry of Finance',
      'card-finances-desc': 'Tax data consultation interface and administrative forms.',
      'card-sante-title': 'Ministry of Health',
      'card-sante-desc': 'Health information platform with alerts, statistics and health center directory.',
      'card-education-title': 'Ministry of Education',
      'card-education-desc': 'Educational portal with exam results, teaching resources and enrollment.',
      'card-services-title': 'Public services',
      'card-services-desc': 'Unified platform for online administrative procedures.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>
  <div class="docs-cards" style="margin-top: var(--bj-spacing-6v)">
    <DocsCard to="/showcases/gouv-bj" icon="ri-government-line" :title="t('card-gouv-title')" :description="t('card-gouv-desc')" />
    <DocsCard to="/showcases/finances-bj" icon="ri-money-euro-circle-line" :title="t('card-finances-title')" :description="t('card-finances-desc')" />
    <DocsCard to="/showcases/sante-gouv-bj" icon="ri-heart-pulse-line" :title="t('card-sante-title')" :description="t('card-sante-desc')" />
    <DocsCard to="/showcases/education-gouv-bj" icon="ri-graduation-cap-line" :title="t('card-education-title')" :description="t('card-education-desc')" />
    <DocsCard to="/showcases/service-public-bj" icon="ri-service-line" :title="t('card-services-title')" :description="t('card-services-desc')" />
  </div>
</template>
