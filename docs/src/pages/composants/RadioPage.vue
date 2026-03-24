<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bouton radio',
      desc:
        'Choix unique parmi plusieurs options mutuellement exclusives.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-desc':
        '<code>bj-radio-group--inline</code> pour aligner les options sur une ligne lorsque les libellés sont courts.',
      'prop-bj-radio-group': 'Groupe vertical.',
      'prop-bj-radio-group--inline': 'Groupe horizontal.',
      'prop-bj-radio-group__legend': 'Question posée.',
      'prop-bj-radio': 'Label englobant.',
      'prop-bj-radio__label': 'Texte du choix.',
      'prop-bj-radio__hint': 'Aide.',
      'a11y-note':
        'Même attribut <code>name</code> pour toutes les options d’un ensemble.',
    },
    en: {
      title: 'Radio button',
      desc: 'Single choice among mutually exclusive options.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-desc':
        '<code>bj-radio-group--inline</code> to align options on one line when labels are short.',
      'prop-bj-radio-group': 'Vertical group.',
      'prop-bj-radio-group--inline': 'Horizontal group.',
      'prop-bj-radio-group__legend': 'Question asked.',
      'prop-bj-radio': 'Wrapping label.',
      'prop-bj-radio__label': 'Choice text.',
      'prop-bj-radio__hint': 'Help text.',
      'a11y-note':
        'Same <code>name</code> attribute for every option in a set.',
    },
  },
})

const codeExample =
  '<fieldset class="bj-radio-group">…</fieldset>'

const propsRows = computed(() => [
  { name: 'bj-radio-group', description: t('prop-bj-radio-group') },
  {
    name: 'bj-radio-group--inline',
    description: t('prop-bj-radio-group--inline'),
  },
  {
    name: 'bj-radio-group__legend',
    description: t('prop-bj-radio-group__legend'),
  },
  { name: 'bj-radio', description: t('prop-bj-radio') },
  { name: 'bj-radio__label', description: t('prop-bj-radio__label') },
  { name: 'bj-radio__hint', description: t('prop-bj-radio__hint') },
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
      <fieldset class="bj-radio-group">
        <legend class="bj-radio-group__legend">
          Type de demande
        </legend>
        <label class="bj-radio">
          <input type="radio" name="xr1" value="n" checked />
          <span class="bj-radio__label">Nouvelle demande</span>
        </label>
        <label class="bj-radio">
          <input type="radio" name="xr1" value="r" />
          <span class="bj-radio__label">Renouvellement</span>
        </label>
      </fieldset>
      <fieldset class="bj-radio-group bj-radio-group--inline">
        <legend class="bj-radio-group__legend">Civilité</legend>
        <label class="bj-radio"
          ><input type="radio" name="xr2" value="m" /><span
            class="bj-radio__label"
            >M.</span
          ></label
        >
        <label class="bj-radio"
          ><input type="radio" name="xr2" value="f" /><span
            class="bj-radio__label"
            >Mme</span
          ></label
        >
      </fieldset>
      <fieldset class="bj-radio-group">
        <legend class="bj-radio-group__legend">Tarif</legend>
        <label class="bj-radio">
          <input type="radio" name="xr3" value="1" />
          <span class="bj-radio__label">Réduit</span>
          <span class="bj-radio__hint">Sur justificatif.</span>
        </label>
        <label class="bj-radio">
          <input type="radio" name="xr3" value="2" disabled />
          <span class="bj-radio__label">Spécial (indisponible)</span>
        </label>
      </fieldset>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('variantes-desc')"
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
