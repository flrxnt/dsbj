<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjMarquee',
      desc: 'Bandeau défilant React : les enfants sont dupliqués dans la piste pour une boucle visuelle ; vitesse, sens, bordure et bouton pause sont configurables.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-speed': 'Vitesse d’animation : slow, default (défaut) ou fast.',
      'prop-reverse': 'Inverse le sens du défilement.',
      'prop-bordered': 'Ajoute des bordures haut et bas.',
      'prop-pausable': 'Affiche le bouton pause ou reprise (true par défaut).',
    },
    en: {
      title: 'BjMarquee',
      desc: 'React scrolling marquee: children are duplicated in the track for a seamless loop; speed, direction, borders, and pause control are configurable.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-speed': 'Animation speed: slow, default (default), or fast.',
      'prop-reverse': 'Reverses scroll direction.',
      'prop-bordered': 'Adds top and bottom borders.',
      'prop-pausable': 'Shows the pause or resume control (true by default).',
    },
  },
})

const codeUsage = `import { BjMarquee } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjMarquee speed="default" reverse={false} bordered={false} pausable>
      <span className="bj-marquee__item">Annonce importante — </span>
      <span className="bj-marquee__item">Nouveauté sur le portail — </span>
    </BjMarquee>
  )
}`

const propsRows = computed(() => [
  { name: 'speed', description: t('prop-speed') },
  { name: 'reverse', description: t('prop-reverse') },
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'pausable', description: t('prop-pausable') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-marquee-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--bordered" aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Annonce importante — </span>
          <span class="bj-marquee__item">Nouveauté sur le portail — </span>
          <span class="bj-marquee__item">Annonce importante — </span>
          <span class="bj-marquee__item">Nouveauté sur le portail — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Mettre en pause le défilement">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-marquee-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
