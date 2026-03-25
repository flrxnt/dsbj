<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Showcases',
      desc: 'Sites et portails gouvernementaux béninois qui pourraient bénéficier du Design Système du Bénin. Découvrez ces plateformes institutionnelles et imaginez leur transformation avec les composants DSBJ.',
      'card-gouv-title': 'Portail gouvernemental',
      'card-gouv-desc': 'Le portail officiel du gouvernement du Bénin — gouv.bj.',
      'card-finances-title': 'Ministère des Finances',
      'card-finances-desc': 'Le site du Ministère de l\'Économie et des Finances.',
      'card-sante-title': 'Ministère de la Santé',
      'card-sante-desc': 'Le site du Ministère de la Santé du Bénin.',
      'card-education-title': 'Ministère de l\'Éducation',
      'card-education-desc': 'Le site du Ministère de l\'Enseignement du Bénin.',
      'card-services-title': 'Services publics',
      'card-services-desc': 'Le portail national des services publics en ligne.',
      'card-anip-title': 'ANIP',
      'card-anip-desc': 'Agence Nationale d\'Identification des Personnes.',
      'card-asn-title': 'ASN Bénin',
      'card-asn-desc': 'Autorité de Sûreté Nucléaire du Bénin.',
    },
    en: {
      title: 'Showcases',
      desc: 'Beninese government websites and portals that could benefit from the Design System of Benin. Explore these institutional platforms and envision their transformation with DSBJ components.',
      'card-gouv-title': 'Government portal',
      'card-gouv-desc': 'The official government portal of Benin — gouv.bj.',
      'card-finances-title': 'Ministry of Finance',
      'card-finances-desc': 'The Ministry of Economy and Finance website.',
      'card-sante-title': 'Ministry of Health',
      'card-sante-desc': 'The Ministry of Health of Benin website.',
      'card-education-title': 'Ministry of Education',
      'card-education-desc': 'The Ministry of Education of Benin website.',
      'card-services-title': 'Public services',
      'card-services-desc': 'The national portal for online public services.',
      'card-anip-title': 'ANIP',
      'card-anip-desc': 'National Agency for Personal Identification.',
      'card-asn-title': 'ASN Benin',
      'card-asn-desc': 'Nuclear Safety Authority of Benin.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>
  <div class="docs-cards" style="margin-top: var(--bj-spacing-6v)">
    <DocsCard to="https://www.gouv.bj" icon="ri-government-line" :title="t('card-gouv-title')" :description="t('card-gouv-desc')" />
    <DocsCard to="https://finances.bj" icon="ri-money-euro-circle-line" :title="t('card-finances-title')" :description="t('card-finances-desc')" />
    <DocsCard to="https://sante.gouv.bj" icon="ri-heart-pulse-line" :title="t('card-sante-title')" :description="t('card-sante-desc')" />
    <DocsCard to="https://education.gouv.bj" icon="ri-graduation-cap-line" :title="t('card-education-title')" :description="t('card-education-desc')" />
    <DocsCard to="https://service-public.bj" icon="ri-service-line" :title="t('card-services-title')" :description="t('card-services-desc')" />
    <DocsCard to="https://anip.bj" icon="ri-fingerprint-line" :title="t('card-anip-title')" :description="t('card-anip-desc')" />
    <DocsCard to="https://asn.bj" icon="ri-shield-check-line" :title="t('card-asn-title')" :description="t('card-asn-desc')" />
  </div>
</template>
