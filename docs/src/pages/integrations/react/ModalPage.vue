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
      title: 'BjModal',
      desc: 'Modale React rendue dans un portail. Gere la fermeture via Escape et le verrouillage du scroll.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-open': 'Controle la visibilite de la modale.',
      'prop-onClose': 'Callback appele a la fermeture.',
      'prop-size': 'Taille : default, sm, lg ou full.',
      'prop-title': 'Titre affiche dans le header.',
      'prop-footer': 'ReactNode rendu dans le footer.',
    },
    en: {
      title: 'BjModal',
      desc: 'React modal rendered through a portal. Handles Escape closure and scroll locking.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-open': 'Controls modal visibility.',
      'prop-onClose': 'Callback fired on close.',
      'prop-size': 'Size: default, sm, lg, or full.',
      'prop-title': 'Title displayed in header.',
      'prop-footer': 'ReactNode rendered in the footer.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Ouvrir</button>
      <BjModal
        open={open}
        onClose={() => setOpen(false)}
        title="Titre de la modale"
      >
        <p>Contenu de la modale.</p>
      </BjModal>
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'open', description: t('prop-open') },
  { name: 'onClose', description: t('prop-onClose') },
  { name: 'size', description: t('prop-size') },
  { name: 'title', description: t('prop-title') },
  { name: 'footer', description: t('prop-footer') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-modal-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-modal" style="position: relative; display: flex; min-height: 300px;">
        <div class="bj-modal__dialog" style="position: relative; margin: auto;">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">Titre de la modale</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p>Contenu de la modale.</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn bj-btn--secondary">Annuler</button>
            <button type="button" class="bj-btn">Confirmer</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-modal-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
