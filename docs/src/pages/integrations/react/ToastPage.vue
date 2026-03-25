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
      desc: 'Notifications toast React avec le hook useToast pour gerer l ajout et la suppression.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-position': 'Position du conteneur : top-right, top-left, bottom-right, bottom-left.',
      'prop-toasts': 'Tableau des notifications actives.',
      'prop-onRemove': 'Callback appele avec l identifiant du toast a supprimer.',
    },
    en: {
      title: 'BjToast',
      desc: 'React toast notifications with the useToast hook for adding and removing.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-position': 'Container position: top-right, top-left, bottom-right, bottom-left.',
      'prop-toasts': 'Array of active notifications.',
      'prop-onRemove': 'Callback called with the toast id to remove.',
    },
  },
})

const codeUsage = `import { BjToast, useToast } from '@flrxnt/dsbj/react'

export default function App() {
  const toast = useToast()

  return (
    <>
      <button onClick={() => toast.add('Operation reussie', 'success')}>
        Afficher toast
      </button>
      <BjToast
        toasts={toast.toasts}
        onRemove={toast.remove}
      />
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'position', description: t('prop-position') },
  { name: 'toasts', description: t('prop-toasts') },
  { name: 'onRemove', description: t('prop-onRemove') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-toast-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-toast-container" style="position: relative;" aria-live="polite" role="status">
        <div class="bj-toast bj-toast--success" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-check-line"></i></span>
          <div class="bj-toast__body">
            <p class="bj-toast__title">Succès</p>
            <p class="bj-toast__text">Opération réussie.</p>
          </div>
          <button type="button" class="bj-toast__close" aria-label="Fermer">
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>
        </div>
        <div class="bj-toast bj-toast--error" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-close-circle-line"></i></span>
          <div class="bj-toast__body">
            <p class="bj-toast__title">Erreur</p>
            <p class="bj-toast__text">Une erreur est survenue.</p>
          </div>
          <button type="button" class="bj-toast__close" aria-label="Fermer">
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-toast-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
