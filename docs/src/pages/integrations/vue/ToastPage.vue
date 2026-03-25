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
      title: 'BjToast',
      desc: 'Conteneur de toasts Vue. Expose add() et remove() via une ref de template pour afficher des messages programmatiquement.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (déclaratif)',
      'section-props': 'Props',
      'prop-position': 'Position du conteneur : top-right, top-left, bottom-right, bottom-left.',
      'prop-add': 'Méthode exposée : add() avec options text, type, title et duration.',
    },
    en: {
      title: 'BjToast',
      desc: 'Vue toast container. Exposes add() and remove() via a template ref for programmatic messages.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (declarative)',
      'section-props': 'Props',
      'prop-position': 'Container position: top-right, top-left, bottom-right, bottom-left.',
      'prop-add': 'Exposed method: add() with text, type, title, and duration options.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjButton, BjToast } from '@flrxnt/dsbj/vue'

const toastRef = ref<InstanceType<typeof BjToast> | null>(null)

function notify() {
  toastRef.value?.add({
    title: 'Succès',
    text: 'Le document a été validé.',
    type: 'success',
    duration: 5000,
  })
}
<\/script>

<template>
  <BjButton @click="notify">Notifier</BjButton>
  <BjToast ref="toastRef" />
</template>`

const propsRows = computed(() => [
  { name: 'position', description: t('prop-position') },
  { name: 'add (expose)', description: t('prop-add') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-toast-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toast-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-2v); flex-wrap: wrap">
      <button
        class="bj-btn bj-btn--sm"
        type="button"
        data-bj-toast-trigger
        data-bj-toast-type="success"
        data-bj-toast-title="Succès"
        data-bj-toast-text="Le document a été validé avec succès."
      >
        Succès
      </button>
      <button
        class="bj-btn bj-btn--sm"
        type="button"
        data-bj-toast-trigger
        data-bj-toast-type="info"
        data-bj-toast-title="Information"
        data-bj-toast-text="Votre dossier a été enregistré."
      >
        Info
      </button>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-toast-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
