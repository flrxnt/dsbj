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
      title: 'Case à cocher',
      desc: 'Choix multiples ou consentement explicite, avec libellé et texte d’aide optionnel.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-checkbox__hint</code> pour préciser contraintes ou formats.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-checkbox-group': 'Conteneur.',
      'prop-checkbox-legend': 'Titre de groupe.',
      'prop-checkbox': 'Label englobant.',
      'prop-checkbox-label': 'Texte.',
      'prop-checkbox-hint': 'Aide.',
      'a11y-note':
        'Pour plusieurs cases liées, préférez <code>fieldset</code> et <code>legend</code>.',
    },
    en: {
      title: 'Checkbox',
      desc: 'Multiple choices or explicit consent, with label and optional hint text.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-checkbox__hint</code> to specify constraints or formats.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-checkbox-group': 'Wrapper.',
      'prop-checkbox-legend': 'Group title.',
      'prop-checkbox': 'Wrapping label.',
      'prop-checkbox-label': 'Text.',
      'prop-checkbox-hint': 'Hint.',
      'a11y-note':
        'For related checkboxes, prefer <code>fieldset</code> and <code>legend</code>.',
    },
  },
})

const codeExample = `<fieldset class="bj-checkbox-group">
  <legend class="bj-checkbox-group__legend">…</legend>
  <label class="bj-checkbox">…</label>
</fieldset>`

const propsRows = computed(() => [
  { name: 'bj-checkbox-group', description: t('prop-checkbox-group') },
  {
    name: 'bj-checkbox-group__legend',
    description: t('prop-checkbox-legend'),
  },
  { name: 'bj-checkbox', description: t('prop-checkbox') },
  { name: 'bj-checkbox__label', description: t('prop-checkbox-label') },
  { name: 'bj-checkbox__hint', description: t('prop-checkbox-hint') },
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
      <div class="bj-checkbox-group">
        <label class="bj-checkbox">
          <input type="checkbox" name="xc1" checked />
          <span class="bj-checkbox__label"
            >Notifications par courriel</span
          >
        </label>
      </div>
      <fieldset class="bj-checkbox-group">
        <legend class="bj-checkbox-group__legend">
          Pièces fournies
        </legend>
        <label class="bj-checkbox">
          <input type="checkbox" name="xc2" value="id" />
          <span class="bj-checkbox__label">Pièce d’identité</span>
        </label>
        <label class="bj-checkbox">
          <input type="checkbox" name="xc2" value="dom" />
          <span class="bj-checkbox__label"
            >Justificatif de domicile</span
          >
          <span class="bj-checkbox__hint"
            >PDF ou image, 5&nbsp;Mo max.</span
          >
        </label>
        <label class="bj-checkbox">
          <input type="checkbox" name="xc2" value="x" disabled />
          <span class="bj-checkbox__label">Option indisponible</span>
        </label>
      </fieldset>
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
