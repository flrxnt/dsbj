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
      title: 'BjToggle',
      desc: 'Interrupteur Vue (case à cocher stylée) avec libellé, bordure optionnelle et libellé à gauche.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'État activé (v-model), booléen.',
      'prop-label': 'Texte du libellé (contenu par défaut du slot).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive l’interrupteur.',
      'prop-border': 'Ajoute une bordure autour du contrôle.',
      'prop-labelLeft': 'Affiche le libellé à gauche du curseur.',
    },
    en: {
      title: 'BjToggle',
      desc: 'Vue switch (styled checkbox) with label, optional border, and label-on-left layout.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'On state (v-model), boolean.',
      'prop-label': 'Label text (default slot content).',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables the toggle.',
      'prop-border': 'Adds a border around the control.',
      'prop-labelLeft': 'Places the label to the left of the thumb.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjToggle } from '@flrxnt/dsbj/vue'

const notify = ref(true)
<\/script>

<template>
  <BjToggle v-model="notify" label="Notifications par e-mail" hint="Résumé quotidien" border />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'border', description: t('prop-border') },
  { name: 'labelLeft', description: t('prop-labelLeft') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-toggle-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-preview" :title="t('section-preview')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="vue-tog-prev">
        <input
          id="vue-tog-prev"
          type="checkbox"
          class="bj-toggle__input"
          role="switch"
          checked
          aria-checked="true"
        />
        <span class="bj-toggle__label">
          Notifications par e-mail
          <span class="bj-toggle__hint">Résumé quotidien</span>
        </span>
      </label>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-toggle-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
