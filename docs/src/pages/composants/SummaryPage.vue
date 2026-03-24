<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Sommaire',
      desc: 'Table des matières numérotée pour les contenus longs.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-p':
        'Numérotation CSS automatique sur <code>bj-summary__link</code>.',
      'a11y-note':
        '<code>aria-labelledby</code> ; ancres <code>id</code> stables.',
      'prop-bj-summary': 'Encadré.',
      'prop-bj-summary-title': 'Titre.',
      'prop-bj-summary-list': 'Liste.',
      'prop-bj-summary-link': 'Lien ancré.',
    },
    en: {
      title: 'Summary (table of contents)',
      desc: 'Numbered table of contents for long content.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-p':
        'Automatic CSS numbering on <code>bj-summary__link</code>.',
      'a11y-note':
        '<code>aria-labelledby</code>; stable anchor <code>id</code>s.',
      'prop-bj-summary': 'Framed block.',
      'prop-bj-summary-title': 'Title.',
      'prop-bj-summary-list': 'List.',
      'prop-bj-summary-link': 'Anchor link.',
    },
  },
})

const codeExemple = `<aside class="bj-summary">…</aside>`

const propsRows = computed(() => [
  { name: 'bj-summary', description: t('prop-bj-summary') },
  { name: 'bj-summary__title', description: t('prop-bj-summary-title') },
  { name: 'bj-summary__list', description: t('prop-bj-summary-list') },
  { name: 'bj-summary__link', description: t('prop-bj-summary-link') },
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

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
    <DocsPreview>
      <aside class="bj-summary" aria-labelledby="ex-sum-t">
        <p class="bj-summary__title" id="ex-sum-t">Dans cette page</p>
        <ul
          class="bj-summary__list"
          style="list-style: none; margin: 0; padding: 0"
        >
          <li><a class="bj-summary__link" href="#s1">Contexte</a></li>
          <li>
            <a class="bj-summary__link" href="#s2">Procédure</a>
          </li>
          <li><a class="bj-summary__link" href="#s3">Contacts</a></li>
        </ul>
      </aside>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('variantes-p')"
    />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
