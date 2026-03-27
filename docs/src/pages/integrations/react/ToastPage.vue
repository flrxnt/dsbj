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
      desc: 'BjToast est contrôlé de l’extérieur : props toasts (tableau ToastItem), onRemove(id), position optionnelle. Utilisez le hook useToast pour add / remove et passer toasts et remove au composant.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-toast-item': 'Forme de ToastItem',
      'section-use-toast': 'useToast : add et remove',
      'section-position-tr': 'position top-right (défaut)',
      'section-position-tl': 'position top-left',
      'section-position-br': 'position bottom-right',
      'section-position-bl': 'position bottom-left',
      'section-types': 'Types de notification (info, success, warning, error)',
      'section-duration': 'duration et title optionnels',
      'section-controlled': 'Flux entièrement contrôlé',
      'section-preview-positions': 'Aperçu HTML — classes de position',
      'section-onremove': 'Callback onRemove',
      'onremove-desc':
        'Chaque toast affiche un bouton fermer qui appelle onRemove(id). Avec useToast, remove marque removing puis retire l’item après l’animation.',
      'prop-position': 'top-right (défaut) | top-left | bottom-right | bottom-left — classe bj-toast-container--*.',
      'prop-toasts': 'ToastItem[] : id, text, type, duration, removing, title optionnel.',
      'prop-onRemove': '(id: string) => void — appelé au clic sur fermer ; useToast.remove gère l’animation.',
      'prop-className': 'Classe sur le conteneur .bj-toast-container.',
    },
    en: {
      title: 'BjToast',
      desc: 'BjToast is fully controlled: pass toasts (ToastItem[]), onRemove(id), and optional position. Use the useToast hook for add/remove and wire toasts and remove into the component.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-toast-item': 'ToastItem shape',
      'section-use-toast': 'useToast: add and remove',
      'section-position-tr': 'position top-right (default)',
      'section-position-tl': 'position top-left',
      'section-position-br': 'position bottom-right',
      'section-position-bl': 'position bottom-left',
      'section-types': 'Notification types (info, success, warning, error)',
      'section-duration': 'Optional duration and title',
      'section-controlled': 'Fully controlled flow',
      'section-preview-positions': 'HTML preview — position classes',
      'section-onremove': 'onRemove callback',
      'onremove-desc':
        'Each toast close button calls onRemove(id). With useToast, remove sets removing then drops the item after the animation.',
      'prop-position': 'top-right (default) | top-left | bottom-right | bottom-left — bj-toast-container--* class.',
      'prop-toasts': 'ToastItem[]: id, text, type, duration, removing, optional title.',
      'prop-onRemove': '(id: string) => void — close button; useToast.remove handles the exit animation.',
      'prop-className': 'Class on the .bj-toast-container root.',
    },
  },
})

const codeUsage = `import { BjToast, useToast } from '@flrxnt/dsbj/react'

export default function App() {
  const { toasts, add, remove } = useToast()

  return (
    <>
      <button
        type="button"
        onClick={() => add({ text: 'Opération réussie', type: 'success', title: 'Succès' })}
      >
        Afficher un toast
      </button>
      <BjToast toasts={toasts} onRemove={remove} />
    </>
  )
}`

const codeToastItem = `import type { ToastItem } from '@flrxnt/dsbj/react'

/** Champs attendus pour chaque entrée du tableau toasts */
const exemple: ToastItem = {
  id: 'abc',
  text: 'Message',
  type: 'info',
  duration: 5000,
  removing: false,
  title: 'Optionnel',
}`

const codeUseToast = `import { useCallback } from 'react'
import { BjToast, useToast } from '@flrxnt/dsbj/react'

export function ToastDemo() {
  const { toasts, add, remove } = useToast()

  const notify = useCallback(() => {
    add({
      text: 'Corps du message',
      type: 'warning',
      title: 'Titre',
      duration: 4000,
    })
  }, [add])

  return (
    <>
      <button type="button" onClick={notify}>Notifier</button>
      <BjToast toasts={toasts} onRemove={remove} />
    </>
  )
}`

const codePosTr = `<BjToast position="top-right" toasts={toasts} onRemove={remove} />`
const codePosTl = `<BjToast position="top-left" toasts={toasts} onRemove={remove} />`
const codePosBr = `<BjToast position="bottom-right" toasts={toasts} onRemove={remove} />`
const codePosBl = `<BjToast position="bottom-left" toasts={toasts} onRemove={remove} />`

const codeTypes = `import { BjToast, useToast } from '@flrxnt/dsbj/react'

export function AllTypes() {
  const { toasts, add, remove } = useToast()
  return (
    <>
      <button type="button" onClick={() => add({ text: 'Info', type: 'info' })}>info</button>
      <button type="button" onClick={() => add({ text: 'OK', type: 'success' })}>success</button>
      <button type="button" onClick={() => add({ text: 'Attention', type: 'warning' })}>warning</button>
      <button type="button" onClick={() => add({ text: 'Erreur', type: 'error' })}>error</button>
      <BjToast toasts={toasts} onRemove={remove} />
    </>
  )
}`

const codeDuration = `add({ text: 'Sans auto-fermeture', type: 'info', duration: 0 })
add({ text: '5 s par défaut dans useToast si omis', type: 'success' })`

const codeOnRemove = `import { useCallback } from 'react'
import { BjToast, useToast } from '@flrxnt/dsbj/react'

export function ToastRemoveDemo() {
  const { toasts, add, remove } = useToast()

  const logRemove = useCallback(
    (id: string) => {
      console.log('dismiss', id)
      remove(id)
    },
    [remove],
  )

  return (
    <>
      <button type="button" onClick={() => add({ text: 'Fermez-moi', type: 'info' })}>Toast</button>
      <BjToast toasts={toasts} onRemove={logRemove} />
    </>
  )
}`

const codeControlled = `import { useCallback, useState } from 'react'
import type { ToastItem } from '@flrxnt/dsbj/react'
import { BjToast } from '@flrxnt/dsbj/react'

/** Contrôle manuel sans useToast (vous gérez removing / durée vous-même) */
export function ManualToasts() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const onRemove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <BjToast
      className="my-toasts"
      position="bottom-right"
      toasts={toasts}
      onRemove={onRemove}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'position', description: t('prop-position') },
  { name: 'toasts', description: t('prop-toasts') },
  { name: 'onRemove', description: t('prop-onRemove') },
  { name: 'className', description: t('prop-className') },
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

  <DocsSection id="react-toast-item" :title="t('section-toast-item')">
    <DocsCode :code="codeToastItem" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-use-toast" :title="t('section-use-toast')">
    <DocsCode :code="codeUseToast" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-preview-positions" :title="t('section-preview-positions')">
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--bj-spacing-4v); max-width: 48rem; margin-bottom: var(--bj-spacing-4v)">
      <DocsPreview>
        <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">top-right (défaut)</p>
        <div class="bj-toast-container" style="position: relative" aria-live="polite" role="status">
          <div class="bj-toast bj-toast--info" role="alert">
            <span class="bj-toast__icon" aria-hidden="true"><i class="ri-information-line"></i></span>
            <div class="bj-toast__body"><p class="bj-toast__text">Info</p></div>
            <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
          </div>
        </div>
      </DocsPreview>
      <DocsPreview>
        <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">top-left</p>
        <div class="bj-toast-container bj-toast-container--top-left" style="position: relative" aria-live="polite" role="status">
          <div class="bj-toast bj-toast--success" role="alert">
            <span class="bj-toast__icon" aria-hidden="true"><i class="ri-check-line"></i></span>
            <div class="bj-toast__body"><p class="bj-toast__text">OK</p></div>
            <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
          </div>
        </div>
      </DocsPreview>
      <DocsPreview>
        <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bottom-right</p>
        <div class="bj-toast-container bj-toast-container--bottom-right" style="position: relative" aria-live="polite" role="status">
          <div class="bj-toast bj-toast--warning" role="alert">
            <span class="bj-toast__icon" aria-hidden="true"><i class="ri-alert-line"></i></span>
            <div class="bj-toast__body"><p class="bj-toast__text">Attention</p></div>
            <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
          </div>
        </div>
      </DocsPreview>
      <DocsPreview>
        <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bottom-left</p>
        <div class="bj-toast-container bj-toast-container--bottom-left" style="position: relative" aria-live="polite" role="status">
          <div class="bj-toast bj-toast--error" role="alert">
            <span class="bj-toast__icon" aria-hidden="true"><i class="ri-close-circle-line"></i></span>
            <div class="bj-toast__body"><p class="bj-toast__text">Erreur</p></div>
            <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
          </div>
        </div>
      </DocsPreview>
    </div>
  </DocsSection>

  <DocsSection id="react-toast-position-tr" :title="t('section-position-tr')">
    <DocsCode :code="codePosTr" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-position-tl" :title="t('section-position-tl')">
    <DocsCode :code="codePosTl" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-position-br" :title="t('section-position-br')">
    <DocsCode :code="codePosBr" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-position-bl" :title="t('section-position-bl')">
    <DocsCode :code="codePosBl" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-onremove" :title="t('section-onremove')">
    <p class="bj-text-sm" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('onremove-desc') }}
    </p>
    <DocsPreview>
      <div class="bj-toast-container" style="position: relative" aria-live="polite" role="status">
        <div class="bj-toast bj-toast--info" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-information-line"></i></span>
          <div class="bj-toast__body"><p class="bj-toast__text">Clic sur × → onRemove(id)</p></div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeOnRemove" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-types" :title="t('section-types')">
    <DocsPreview>
      <div class="bj-toast-container" style="position: relative; flex-direction: column; gap: var(--bj-spacing-2v)" aria-live="polite" role="status">
        <div class="bj-toast bj-toast--info" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-information-line"></i></span>
          <div class="bj-toast__body"><p class="bj-toast__text">type info</p></div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
        <div class="bj-toast bj-toast--success" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-check-line"></i></span>
          <div class="bj-toast__body"><p class="bj-toast__text">type success</p></div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
        <div class="bj-toast bj-toast--warning" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-alert-line"></i></span>
          <div class="bj-toast__body"><p class="bj-toast__text">type warning</p></div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
        <div class="bj-toast bj-toast--error" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-close-circle-line"></i></span>
          <div class="bj-toast__body"><p class="bj-toast__text">type error</p></div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTypes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-duration" :title="t('section-duration')">
    <DocsCode :code="codeDuration" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-controlled" :title="t('section-controlled')">
    <DocsCode :code="codeControlled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toast-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
