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
      title: 'Infobulle',
      desc:
        'Texte court au survol ou au focus ; positions haut, bas, gauche, droite.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'variants-p-1': 'Sur le contenu pour affichage programmatique.',
      'prop-container': 'Conteneur.',
      'prop-content': 'Texte.',
      'prop-position': 'Position.',
      'a11y-note':
        'Ne pas réserver une information critique au seul survol.',
    },
    en: {
      title: 'Tooltip',
      desc:
        'Short text on hover or focus; top, bottom, left, and right positions.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'variants-p-1': 'on the content for programmatic display.',
      'prop-container': 'Wrapper.',
      'prop-content': 'Text.',
      'prop-position': 'Position.',
      'a11y-note': 'Do not rely on hover alone for critical information.',
    },
  },
})

const codeTooltip = `<span class="bj-tooltip">…
  <span class="bj-tooltip__content" role="tooltip">…</span>
</span>`

const propsRows = computed(() => [
  { name: 'bj-tooltip', description: t('prop-container') },
  { name: 'bj-tooltip__content', description: t('prop-content') },
  {
    name: 'bj-tooltip--bottom / bj-tooltip--left / bj-tooltip--right',
    description: t('prop-position'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-6v);
        align-items: center;
      "
    >
      <span class="bj-tooltip">
        Haut
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--bottom">
        Bas
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--left">
        Gauche
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--right">
        Droite
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeTooltip" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>data-bj-expanded</code>
      {{ t('variants-p-1') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-note') }}
    </DocsA11yNote>
  </DocsSection>
</template>
