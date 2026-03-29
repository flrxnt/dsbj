<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import BjDrawer from '@dsbj/vue/components/BjDrawer.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjDrawer — React',
      desc: 'Composant React pour le tiroir latéral DSBJ, rendu via portal avec gestion du focus et de la touche Escape.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le composant utilise <code>role="dialog"</code> et <code>aria-modal="true"</code>. Le focus est piégé dans le tiroir. La touche <code>Escape</code> ferme le tiroir.',
      'prop-open': 'Contrôle l\'ouverture du tiroir.',
      'prop-onClose': 'Callback appelé à la fermeture.',
      'prop-position': 'Position : "left" (défaut) ou "right".',
      'prop-size': 'Taille : "default", "sm", "lg" ou "full".',
      'prop-title': 'Titre affiché dans l\'en-tête.',
      'prop-footer': 'ReactNode affiché dans le pied du tiroir.',
    },
    en: {
      title: 'BjDrawer — React',
      desc: 'React component for the DSBJ drawer, rendered via portal with focus management and Escape key handling.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The component uses <code>role="dialog"</code> and <code>aria-modal="true"</code>. Focus is trapped inside the drawer. The <code>Escape</code> key closes the drawer.',
      'prop-open': 'Controls drawer visibility.',
      'prop-onClose': 'Callback fired on close.',
      'prop-position': 'Position: "left" (default) or "right".',
      'prop-size': 'Size: "default", "sm", "lg" or "full".',
      'prop-title': 'Title displayed in the header.',
      'prop-footer': 'ReactNode rendered in the drawer footer.',
    },
  },
})

const showDrawer = ref(false)

const codeUsage = `import { useState } from 'react'
import { BjDrawer } from '@flrxnt/dsbj/react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="bj-btn" onClick={() => setOpen(true)}>
        Ouvrir le tiroir
      </button>
      <BjDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Mon tiroir"
        footer={
          <>
            <button className="bj-btn bj-btn--tertiary" onClick={() => setOpen(false)}>
              Annuler
            </button>
            <button className="bj-btn">Valider</button>
          </>
        }
      >
        <p>Contenu du tiroir.</p>
      </BjDrawer>
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'open', description: t('prop-open') },
  { name: 'onClose', description: t('prop-onClose') },
  { name: 'position', description: t('prop-position') },
  { name: 'size', description: t('prop-size') },
  { name: 'title', description: t('prop-title') },
  { name: 'footer', description: t('prop-footer') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="usage-drawer" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="preview-drawer" :title="t('section-preview')">
    <DocsPreview>
      <button type="button" class="bj-btn" @click="showDrawer = true">Ouvrir le tiroir</button>
      <BjDrawer v-model="showDrawer" title="Tiroir React (preview)">
        <p>Contenu du tiroir.</p>
        <template #footer="{ close }">
          <button type="button" class="bj-btn bj-btn--tertiary" @click="close">Fermer</button>
        </template>
      </BjDrawer>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="props-drawer" :title="t('section-props')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-drawer" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
