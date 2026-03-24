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
      title: 'Liste déroulante',
      desc: 'Choix d’une option dans une liste fermée, avec styles homogènes aux autres champs.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-select--error</code> pour l’état d’erreur. Désactivation native <code>disabled</code>.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-select-group': 'Groupe label + select.',
      'prop-select': 'Liste déroulante.',
      'prop-select-error': 'Bordure d’erreur.',
      'a11y-note':
        'Liez le <code>label</code> au <code>select</code>. En erreur&nbsp;: <code>aria-invalid</code> et message relié par <code>aria-describedby</code>.',
    },
    en: {
      title: 'Select (dropdown)',
      desc: 'Pick one option from a closed list, with styling consistent with other fields.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-select--error</code> for the error state. Native disable with <code>disabled</code>.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-select-group': 'Label + select group.',
      'prop-select': 'Dropdown list.',
      'prop-select-error': 'Error border.',
      'a11y-note':
        'Link the <code>label</code> to the <code>select</code>. On error: <code>aria-invalid</code> and message linked via <code>aria-describedby</code>.',
    },
  },
})

const codeExample = `<div class="bj-select-group">
  <select class="bj-select">…</select>
</div>`

const propsRows = computed(() => [
  { name: 'bj-select-group', description: t('prop-select-group') },
  { name: 'bj-select', description: t('prop-select') },
  { name: 'bj-select--error', description: t('prop-select-error') },
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
    <DocsPreview>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s1">Commune</label>
        <select id="ex-s1" class="bj-select">
          <option value="">Sélectionner…</option>
          <option value="cotonou">Cotonou</option>
          <option value="porto">Porto-Novo</option>
        </select>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s2">Statut (erreur)</label>
        <select
          id="ex-s2"
          class="bj-select bj-select--error"
          aria-invalid="true"
          aria-describedby="ex-s2-e"
        >
          <option value="">Choisir…</option>
        </select>
        <p id="ex-s2-e" class="bj-message bj-message--error" role="alert">
          Champ obligatoire.
        </p>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s3">Désactivé</label>
        <select id="ex-s3" class="bj-select" disabled>
          <option>Non modifiable</option>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-variants-body')"
    />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
