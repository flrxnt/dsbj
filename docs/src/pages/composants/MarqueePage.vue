<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bandeau défilant',
      'desc-before':
        'Bandeau horizontal à défilement continu pour annonces, actualités ou alertes. Bouton de pause obligatoire pour l’accessibilité (WCAG 2.2.2). Respecte ',
      'desc-after': '.',
      'section-example': 'Exemple',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-root': 'Conteneur principal.',
      'prop-track': 'Piste animée.',
      'prop-item': 'Élément individuel.',
      'prop-pause': 'Bouton pause/reprise (obligatoire).',
      'prop-reverse': 'Défilement en sens inverse.',
      'prop-slow': 'Vitesse lente (35s).',
      'prop-fast': 'Vitesse rapide (10s).',
      'prop-bordered': 'Bordures haut/bas.',
      'a11y-1': 'Le bouton de pause est',
      'a11y-mandatory': 'obligatoire',
      'a11y-2': '(WCAG 2.2.2). Le conteneur bascule entre',
      'a11y-3': '(en mouvement) et',
      'a11y-4': '(en pause). L’animation s’arrête automatiquement si',
      'a11y-5': 'est actif.',
    },
    en: {
      title: 'Marquee',
      'desc-before':
        'Horizontally scrolling strip for announcements, news, or alerts. A pause control is required for accessibility (WCAG 2.2.2). Honors ',
      'desc-after': '.',
      'section-example': 'Example',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-root': 'Main container.',
      'prop-track': 'Animated track.',
      'prop-item': 'Single item.',
      'prop-pause': 'Pause/resume button (required).',
      'prop-reverse': 'Reverse scroll direction.',
      'prop-slow': 'Slow speed (35s).',
      'prop-fast': 'Fast speed (10s).',
      'prop-bordered': 'Top and bottom borders.',
      'a11y-1': 'The pause button is',
      'a11y-mandatory': 'required',
      'a11y-2': '(WCAG 2.2.2). The container switches between',
      'a11y-3': '(while moving) and',
      'a11y-4': '(when paused). Animation stops automatically when',
      'a11y-5': 'is set.',
    },
  },
})

const codeMarquee = `<div class="bj-marquee bj-marquee--bordered" data-bj-marquee>
  <div class="bj-marquee__track">
    <span class="bj-marquee__item">Annonce 1</span>
    <span class="bj-marquee__item">Annonce 2</span>
  </div>
  <button class="bj-marquee__pause" type="button">
    <i class="ri-pause-line"></i>
  </button>
</div>`

const propsRows = computed(() => [
  { name: 'bj-marquee', description: t('prop-root') },
  { name: 'bj-marquee__track', description: t('prop-track') },
  { name: 'bj-marquee__item', description: t('prop-item') },
  {
    name: 'bj-marquee__pause',
    description: t('prop-pause'),
  },
  { name: 'bj-marquee--reverse', description: t('prop-reverse') },
  { name: 'bj-marquee--slow', description: t('prop-slow') },
  { name: 'bj-marquee--fast', description: t('prop-fast') },
  { name: 'bj-marquee--bordered', description: t('prop-bordered') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t('desc-before') }}<code>prefers-reduced-motion</code>{{ t('desc-after') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--bordered" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item"
            ><i class="ri-megaphone-line" aria-hidden="true"></i> Ouverture du
            guichet unique le 1er avril 2025</span
          >
          <span class="bj-marquee__item"
            ><i class="ri-calendar-event-line" aria-hidden="true"></i> Journée
            nationale de l'administration : 15 avril</span
          >
          <span class="bj-marquee__item"
            ><i class="ri-information-line" aria-hidden="true"></i> Nouveau
            portail e-services disponible</span
          >
        </div>
        <button class="bj-marquee__pause" type="button">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarquee" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <strong>{{ t('a11y-mandatory') }}</strong>
      {{ t('a11y-2') }}
      <code>aria-live="off"</code>
      {{ t('a11y-3') }}
      <code>aria-live="polite"</code>
      {{ t('a11y-4') }}
      <code>prefers-reduced-motion: reduce</code>
      {{ t('a11y-5') }}
    </DocsA11yNote>
  </DocsSection>
</template>
