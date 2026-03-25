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
      title: 'BjSearch',
      desc: 'Barre de recherche Vue : champ type search et bouton d’envoi, avec taille md ou lg.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'Texte saisi (v-model).',
      'prop-placeholder': 'Placeholder du champ.',
      'prop-size': 'Taille du bloc : md (défaut) ou lg.',
      'prop-buttonLabel': 'Libellé texte du bouton (l’icône reste dans le slot par défaut).',
    },
    en: {
      title: 'BjSearch',
      desc: 'Vue search bar: search input and submit button, with md or lg size.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Typed text (v-model).',
      'prop-placeholder': 'Input placeholder.',
      'prop-size': 'Block size: md (default) or lg.',
      'prop-buttonLabel': 'Button text label (icon stays in the default slot).',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjSearch } from '@flrxnt/dsbj/vue'

const q = ref('')
function onSubmit(value: string) {
  console.log(value)
}
<\/script>

<template>
  <BjSearch v-model="q" placeholder="Rechercher sur le site…" @submit="onSubmit" />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'size', description: t('prop-size') },
  { name: 'buttonLabel', description: t('prop-buttonLabel') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-search-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-search-preview" :title="t('section-preview')">
    <DocsPreview>
      <form class="bj-search" role="search" style="max-width: 28rem">
        <input
          class="bj-search__input"
          type="search"
          placeholder="Rechercher sur le site…"
          aria-label="Rechercher sur le site"
        />
        <button type="submit" class="bj-search__btn">
          <i class="ri-search-line" aria-hidden="true" />
          <span>Rechercher</span>
        </button>
      </form>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-search-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
