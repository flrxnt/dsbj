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
      desc: 'Modale React rendue via createPortal sur document.body (toujours en portail, pas de prop pour le désactiver). Fermeture : overlay, bouton croix, touche Escape ; classe bj-modal-open sur le body quand open est true.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-portal': 'Portail et cycle de vie',
      'section-onclose': 'onClose — patterns TypeScript',
      'section-size-default': 'size default',
      'section-size-sm': 'size sm',
      'section-size-lg': 'size lg',
      'section-size-full': 'size full',
      'section-no-title': 'Sans title (pas d’en-tête ni bouton intégré)',
      'section-footer': 'footer en ReactNode',
      'section-combo': 'Combinaison : title, footer, size',
      'section-onclose-preview': 'onClose — déclencheurs (aperçu structurel)',
      'onclose-preview-desc':
        'Le clic overlay, le bouton croix (si title) et la touche Escape appellent tous onClose ; gardez une seule fonction stable (useCallback) si vous la passez à des effets.',
      'prop-open': 'Contrôle la visibilité ; si false, le composant ne rend rien.',
      'prop-onClose': 'Callback sans argument, appelé à la fermeture (overlay, croix, Escape).',
      'prop-size': 'default | sm | lg | full — modifie les classes bj-modal--sm, --lg, --full.',
      'prop-title': 'Titre optionnel ; si absent, pas de header ni libellé aria-labelledby.',
      'prop-footer': 'ReactNode optionnel rendu dans le footer sous le corps.',
      'prop-children': 'Contenu du corps (.bj-modal__body).',
      'prop-className': 'Classe CSS additionnelle sur la racine .bj-modal.',
      'portal-desc':
        'Le nœud de la modale est toujours monté dans document.body. Prévoir un état open côté parent et synchroniser avec votre routeur ou votre store si besoin.',
    },
    en: {
      title: 'BjModal',
      desc: 'React modal rendered with createPortal into document.body (always portaled; no prop to disable). Close via overlay, header close button, or Escape; body gets bj-modal-open while open is true.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-portal': 'Portal and lifecycle',
      'section-onclose': 'onClose — TypeScript patterns',
      'section-size-default': 'size default',
      'section-size-sm': 'size sm',
      'section-size-lg': 'size lg',
      'section-size-full': 'size full',
      'section-no-title': 'Without title (no header or built-in close in header)',
      'section-footer': 'footer as ReactNode',
      'section-combo': 'Combination: title, footer, and size',
      'section-onclose-preview': 'onClose — triggers (structural preview)',
      'onclose-preview-desc':
        'Overlay click, header close icon (when title is set), and Escape all invoke onClose; prefer one stable handler (useCallback) when wiring effects.',
      'prop-open': 'Controls visibility; when false, renders null.',
      'prop-onClose': 'Zero-arg callback fired on close (overlay, close icon, Escape).',
      'prop-size': 'default | sm | lg | full — applies bj-modal--sm, --lg, --full classes.',
      'prop-title': 'Optional title; when omitted, no header block and no aria-labelledby title.',
      'prop-footer': 'Optional ReactNode rendered below the body in the footer slot.',
      'prop-children': 'Modal body content (.bj-modal__body).',
      'prop-className': 'Extra CSS class on the .bj-modal root.',
      'portal-desc':
        'The modal tree is always mounted on document.body. Keep open state in the parent and sync with your router or store as needed.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>Ouvrir</button>
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

const codeOnClose = `import { useCallback, useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export function ModalWithStableClose() {
  const [open, setOpen] = useState(false)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <BjModal open={open} onClose={handleClose} title="Exemple">
      <p>Fermer met à jour l’état parent.</p>
    </BjModal>
  )
}`

const codeSizeDefault = `<BjModal open={open} onClose={() => setOpen(false)} size="default" title="Taille par défaut">
  <p>Corps</p>
</BjModal>`

const codeSizeSm = `<BjModal open={open} onClose={() => setOpen(false)} size="sm" title="Petite">
  <p>Modale étroite</p>
</BjModal>`

const codeSizeLg = `<BjModal open={open} onClose={() => setOpen(false)} size="lg" title="Large">
  <p>Modale large</p>
</BjModal>`

const codeSizeFull = `<BjModal open={open} onClose={() => setOpen(false)} size="full" title="Plein écran">
  <p>Occupe la vue</p>
</BjModal>`

const codeNoTitle = `import { useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export function ModalSansTitre() {
  const [open, setOpen] = useState(false)
  return (
    <BjModal open={open} onClose={() => setOpen(false)}>
      <p>Pas de barre de titre : fermer via overlay ou Escape.</p>
    </BjModal>
  )
}`

const codeFooter = `import { useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export function ModalAvecFooter() {
  const [open, setOpen] = useState(false)
  return (
    <BjModal
      open={open}
      onClose={() => setOpen(false)}
      title="Confirmer"
      footer={
        <>
          <button type="button" className="bj-btn bj-btn--secondary" onClick={() => setOpen(false)}>
            Annuler
          </button>
          <button type="button" className="bj-btn" onClick={() => setOpen(false)}>
            Valider
          </button>
        </>
      }
    >
      <p>Contenu principal.</p>
    </BjModal>
  )
}`

const codeCombo = `import { useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export function ModalCombo() {
  const [open, setOpen] = useState(false)
  return (
    <BjModal
      open={open}
      onClose={() => setOpen(false)}
      size="lg"
      title="Réglages"
      className="my-modal"
      footer={<button type="button" className="bj-btn" onClick={() => setOpen(false)}>OK</button>}
    >
      <p>size lg + title + footer + className</p>
    </BjModal>
  )
}`

const propsRows = computed(() => [
  { name: 'open', description: t('prop-open') },
  { name: 'onClose', description: t('prop-onClose') },
  { name: 'size', description: t('prop-size') },
  { name: 'title', description: t('prop-title') },
  { name: 'children', description: t('prop-children') },
  { name: 'footer', description: t('prop-footer') },
  { name: 'className', description: t('prop-className') },
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

  <DocsSection id="react-modal-portal" :title="t('section-portal')">
    <p class="bj-text-sm" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('portal-desc') }}</p>
  </DocsSection>

  <DocsSection id="react-modal-onclose" :title="t('section-onclose')">
    <DocsCode :code="codeOnClose" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-onclose-preview" :title="t('section-onclose-preview')">
    <p class="bj-text-sm" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('onclose-preview-desc') }}
    </p>
    <DocsPreview>
      <div class="bj-modal" style="position: relative; display: flex; min-height: 220px">
        <div class="bj-modal__overlay" role="presentation" style="position: absolute; inset: 0; opacity: 0.35"></div>
        <div class="bj-modal__dialog" style="position: relative; margin: auto; z-index: 1">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">Titre</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">Croix · overlay · Escape → onClose</p></div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-modal-size-default" :title="t('section-size-default')">
    <DocsPreview>
      <div class="bj-modal" style="position: relative; display: flex; min-height: 200px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">bj-modal (default)</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">size="default" — pas de modificateur</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeDefault" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-size-sm" :title="t('section-size-sm')">
    <DocsPreview>
      <div class="bj-modal bj-modal--sm" style="position: relative; display: flex; min-height: 200px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">bj-modal--sm</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">size="sm"</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeSm" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-size-lg" :title="t('section-size-lg')">
    <DocsPreview>
      <div class="bj-modal bj-modal--lg" style="position: relative; display: flex; min-height: 200px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto; width: min(100%, 36rem)">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">bj-modal--lg</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">size="lg"</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeLg" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-size-full" :title="t('section-size-full')">
    <DocsPreview>
      <div class="bj-modal bj-modal--full" style="position: relative; display: flex; min-height: 240px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto; width: 95%">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">bj-modal--full</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">size="full"</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeFull" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-no-title" :title="t('section-no-title')">
    <DocsPreview>
      <div class="bj-modal" style="position: relative; display: flex; min-height: 160px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto">
          <div class="bj-modal__body">
            <p class="bj-text-sm">Pas de header : fermeture overlay / Escape uniquement.</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-footer" :title="t('section-footer')">
    <DocsPreview>
      <div class="bj-modal" style="position: relative; display: flex; min-height: 220px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">Confirmer</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">Contenu principal.</p></div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn bj-btn--secondary">Annuler</button>
            <button type="button" class="bj-btn">Valider</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeFooter" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-combo" :title="t('section-combo')">
    <DocsPreview>
      <div class="bj-modal bj-modal--lg my-modal" style="position: relative; display: flex; min-height: 220px">
        <div class="bj-modal__dialog" style="position: relative; margin: auto; width: min(100%, 36rem)">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title">Réglages</h2>
            <button type="button" class="bj-modal__close" aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body"><p class="bj-text-sm">className my-modal + size lg + footer</p></div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn">OK</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombo" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-modal-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
