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
      'section-name-value':
        'Attributs <code>name</code>, <code>value</code> et état coché',
      'section-name-value-body':
        'Utilisez <code>name</code> pour regrouper les envois ; <code>value</code> identifie la case dans le groupe. L’état visuel coché est l’attribut HTML <code>checked</code>.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-checkbox-group': 'Conteneur.',
      'prop-checkbox-legend': 'Titre de groupe.',
      'prop-checkbox': 'Label englobant.',
      'prop-checkbox-label': 'Texte.',
      'prop-checkbox-hint': 'Aide.',
      'prop-checkbox-input':
        'Case\u00a0: <code>type="checkbox"</code>, <code>name</code>, <code>value</code>, <code>checked</code>, <code>disabled</code>.',
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
      'prop-checkbox-input':
        'Box: <code>type="checkbox"</code>, <code>name</code>, <code>value</code>, <code>checked</code>, <code>disabled</code>.',
      'a11y-note':
        'For related checkboxes, prefer <code>fieldset</code> and <code>legend</code>.',
    },
  },
})

const codeExample = `<fieldset class="bj-checkbox-group">
  <legend class="bj-checkbox-group__legend">Pièces fournies</legend>
  <label class="bj-checkbox">
    <input type="checkbox" name="docs" value="id" />
    <span class="bj-checkbox__label">Pièce d’identité</span>
  </label>
  <label class="bj-checkbox">
    <input type="checkbox" name="docs" value="dom" checked />
    <span class="bj-checkbox__label">Justificatif</span>
    <span class="bj-checkbox__hint">PDF ou image, 5 Mo max.</span>
  </label>
</fieldset>`

const codeNameValue = `<!-- Case seule avec nom / valeur -->
<label class="bj-checkbox">
  <input type="checkbox" name="accept_cgu" value="1" checked />
  <span class="bj-checkbox__label">J’accepte les conditions</span>
</label>`

const propsRows = computed(() => [
  { name: 'bj-checkbox-group', description: t('prop-checkbox-group') },
  {
    name: 'bj-checkbox-group__legend',
    description: t('prop-checkbox-legend'),
  },
  { name: 'bj-checkbox', description: t('prop-checkbox') },
  { name: 'bj-checkbox__label', description: t('prop-checkbox-label') },
  { name: 'bj-checkbox__hint', description: t('prop-checkbox-hint') },
  { name: '(input checkbox)', description: t('prop-checkbox-input') },
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

  <DocsSection id="sec-name-value" :title="t('section-name-value')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-name-value-body')"
    />
    <DocsPreview>
      <label class="bj-checkbox">
        <input type="checkbox" name="demo_cgu" value="1" checked />
        <span class="bj-checkbox__label"
          >J’accepte les conditions d’utilisation</span
        >
      </label>
      <label class="bj-checkbox">
        <input type="checkbox" name="demo_news" value="yes" />
        <span class="bj-checkbox__label">Newsletter (facultatif)</span>
        <span class="bj-checkbox__hint"
          >Vous pouvez vous désabonner à tout moment.</span
        >
      </label>
    </DocsPreview>
    <DocsCode :code="codeNameValue" />
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
