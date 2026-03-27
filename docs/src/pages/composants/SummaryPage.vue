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
      desc:
        'Table des matières pour les contenus longs ; le composant <code>BjSummary</code> rend un <code>nav</code> avec titre, liste et liens d\u2019ancre.',
      'section-exemple': 'Exemple',
      'section-structure': 'Structure',
      'section-structure-p':
        'Les ancres <code>href="#id"</code> ciblent des <code>id</code> stables dans la page ; la numérotation visuelle repose sur les styles de <code>bj-summary__list</code> / <code>bj-summary__link</code>.',
      'section-classes-css': 'Classes CSS',
      'section-num': 'Numérotation',
      'section-accessibilite': 'Accessibilité',
      'variantes-p':
        'Numérotation CSS automatique sur <code>bj-summary__link</code> lorsque les styles du DS sont chargés.',
      'a11y-note':
        '<code>aria-labelledby</code> pointant vers l\u2019<code>id</code> du titre ; ancres <code>id</code> stables et uniques.',
      'prop-bj-summary': 'Conteneur <code>nav</code> (sommaire).',
      'prop-bj-summary-title': 'Titre du bloc (<code>p</code>), référencé par <code>aria-labelledby</code>.',
      'prop-bj-summary-list': 'Liste <code>ul</code> des entrées.',
      'prop-bj-summary-link': 'Lien vers une ancre dans la page.',
    },
    en: {
      title: 'Summary (table of contents)',
      desc:
        'Table of contents for long pages; <code>BjSummary</code> renders a <code>nav</code> with title, list, and anchor links.',
      'section-exemple': 'Example',
      'section-structure': 'Structure',
      'section-structure-p':
        'Anchors <code>href="#id"</code> target stable <code>id</code>s in the page; visual numbering comes from <code>bj-summary__list</code> / <code>bj-summary__link</code> styles.',
      'section-classes-css': 'CSS classes',
      'section-num': 'Numbering',
      'section-accessibilite': 'Accessibility',
      'variantes-p':
        'Automatic CSS numbering on <code>bj-summary__link</code> when DS styles are loaded.',
      'a11y-note':
        '<code>aria-labelledby</code> referencing the title <code>id</code>; stable, unique anchor <code>id</code>s.',
      'prop-bj-summary': '<code>nav</code> container.',
      'prop-bj-summary-title': 'Block title (<code>p</code>), referenced by <code>aria-labelledby</code>.',
      'prop-bj-summary-list': '<code>ul</code> list of entries.',
      'prop-bj-summary-link': 'Link to an in-page anchor.',
    },
  },
})

const codeExemple = `<nav class="bj-summary" aria-labelledby="sommaire-titre">
  <p class="bj-summary__title" id="sommaire-titre">Dans cette page</p>
  <ul class="bj-summary__list">
    <li><a class="bj-summary__link" href="#s1">Contexte</a></li>
    <li><a class="bj-summary__link" href="#s2">Procédure</a></li>
    <li><a class="bj-summary__link" href="#s3">Contacts</a></li>
  </ul>
</nav>`

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
    v-html="t('desc')"
  />

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
    <DocsPreview>
      <nav class="bj-summary" aria-labelledby="ex-sum-t">
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
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-structure" :title="t('section-structure')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-structure-p')"
    />
  </DocsSection>

  <DocsSection id="sec-num" :title="t('section-num')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-4v)"
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
