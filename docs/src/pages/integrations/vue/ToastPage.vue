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
      desc: 'Conteneur de toasts Vue. La prop position fixe le coin d’affichage ; la ref du composant expose add, remove et toasts. Le composable useToast() expose la même API pour une logique sans conteneur DSBJ.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (déclaratif)',
      'section-props': 'Props',
      'section-position': 'position : les quatre valeurs',
      'section-expose': 'Expose (ref)',
      'section-usetoast': 'Composable useToast()',
      'section-add-options': 'Options de add()',
      'section-cross': 'Combinaisons position × type de toast',
      'section-preview-html': 'Aperçu HTML (conteneur + types)',
      'section-no-vmodel': 'v-model',
      'section-slots': 'Slots',
      'cross-intro':
        'Montez un BjToast par coin si besoin ; dans chaque instance, add() choisit le type (couleur + icône) indépendamment de position.',
      'preview-html-intro':
        'Équivalent statique : conteneur + classes bj-toast--info | success | warning | error.',
      'no-vmodel-desc': 'Pas de v-model : la pile est gérée par add() / remove() sur la ref.',
      'no-slots-desc': 'Pas de slots : le rendu est entièrement piloté par la liste interne toasts.',
      'prop-position':
        'Position du conteneur : top-right (défaut), top-left, bottom-right, bottom-left (classe bj-toast-container--…).',
      'expose-add':
        'add(options) : ajoute un toast ; options avec text obligatoire, type, title et duration optionnels ; retourne l’id.',
      'expose-remove': 'remove(id) : retire un toast (animation de sortie puis suppression).',
      'expose-toasts': 'toasts : ref réactive sur la liste affichée par ce BjToast.',
      'usetoast-desc':
        "Import depuis {'@'}flrxnt/dsbj/vue. Instance distincte de celle interne à chaque BjToast : utilisez soit la ref du BjToast pour afficher dans le DSBJ, soit useToast() seul pour brancher votre propre rendu.",
      'add-opt-text': 'text (requis), type : info | success | warning | error, title et duration (ms, 0 = pas d’auto-fermeture).',
    },
    en: {
      title: 'BjToast',
      desc:
        'Vue toast container. The position prop sets the corner; the component ref exposes add, remove, and toasts. The useToast() composable exposes the same API for logic without the DSBJ container.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (declarative)',
      'section-props': 'Props',
      'section-position': 'position: all four values',
      'section-expose': 'Expose (template ref)',
      'section-usetoast': 'useToast() composable',
      'section-add-options': 'add() options',
      'section-cross': 'position × toast type combinations',
      'section-preview-html': 'HTML preview (container + types)',
      'section-no-vmodel': 'v-model',
      'section-slots': 'Slots',
      'cross-intro':
        'Mount one BjToast per corner if needed; add() picks the type (color + icon) independently of position.',
      'preview-html-intro':
        'Static equivalent: container plus bj-toast--info | success | warning | error classes.',
      'no-vmodel-desc': 'No v-model: the stack is driven by add() / remove() on the ref.',
      'no-slots-desc': 'No slots: rendering is fully driven by the internal toasts list.',
      'prop-position':
        'Container position: top-right (default), top-left, bottom-right, bottom-left (bj-toast-container--… class).',
      'expose-add':
        'add(options): enqueue a toast; options require text, optional type, title, duration; returns id.',
      'expose-remove': 'remove(id): dismiss a toast (exit animation then remove).',
      'expose-toasts': 'toasts: reactive ref for this BjToast instance’s list.',
      'usetoast-desc':
        "Import from {'@'}flrxnt/dsbj/vue. Separate instance from each BjToast’s internal store: use the BjToast ref to show in DSBJ, or useToast() alone to wire your own UI.",
      'add-opt-text': 'text (required), type: info | success | warning | error, optional title and duration (ms, 0 = no auto-dismiss).',
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

const codePositions = `<!-- Valeurs possibles (une par instance montée typiquement) -->
<BjToast position="top-right" />
<BjToast position="top-left" />
<BjToast position="bottom-right" />
<BjToast position="bottom-left" />`

const codeExpose = `<script setup>
import { ref, watch } from 'vue'
import { BjToast } from '@flrxnt/dsbj/vue'

const tref = ref<InstanceType<typeof BjToast> | null>(null)

watch(
  () => tref.value?.toasts,
  (list) => console.log('Nombre de toasts', list?.length),
  { deep: true }
)
<\/script>

<template>
  <BjToast ref="tref" />
</template>`

const codeUseToast = `<script setup>
import { BjButton, useToast } from '@flrxnt/dsbj/vue'

const { add, remove, toasts } = useToast()

function ping() {
  const id = add({ text: 'Sans BjToast', type: 'info', duration: 3000 })
  setTimeout(() => remove(id), 1000)
}
<\/script>

<template>
  <BjButton @click="ping">Tester useToast</BjButton>
  <!-- À vous de rendre toasts.value si vous n’utilisez pas BjToast -->
</template>`

const codeAddTypes = `toastRef.value?.add({ text: 'Info', type: 'info' })
toastRef.value?.add({ text: 'OK', type: 'success', title: 'Titre' })
toastRef.value?.add({ text: 'Attention', type: 'warning' })
toastRef.value?.add({ text: 'Erreur', type: 'error', duration: 0 })`

const codeCross = `<!-- Coin bas-gauche + succès -->
<BjToast ref="toastBL" position="bottom-left" />
<!-- puis toastBL.add({ text: '…', type: 'success' }) -->

<!-- Coin haut-droit + erreur persistante -->
<BjToast ref="toastTR" position="top-right" />
<!-- toastTR.add({ text: '…', type: 'error', duration: 0 }) -->`

const propsRows = computed(() => [{ name: 'position', description: t('prop-position') }])

const exposeRows = computed(() => [
  { name: 'add', description: t('expose-add') },
  { name: 'remove', description: t('expose-remove') },
  { name: 'toasts', description: t('expose-toasts') },
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

  <DocsSection id="vue-toast-position" :title="t('section-position')">
    <DocsCode :code="codePositions" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toast-add-options" :title="t('section-add-options')">
    <DocsCode :code="codeAddTypes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toast-cross" :title="t('section-cross')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('cross-intro') }}</p>
    <DocsCode :code="codeCross" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toast-preview-html" :title="t('section-preview-html')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('preview-html-intro') }}</p>
    <DocsPreview>
      <div class="bj-toast-container bj-toast-container--bottom-left" aria-live="polite" role="status" style="position: relative; inset: auto; transform: none">
        <div class="bj-toast bj-toast--success" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-check-line"></i></span>
          <div class="bj-toast__body">
            <p class="bj-toast__title">Succès</p>
            <p class="bj-toast__text">Message validé.</p>
          </div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
        <div class="bj-toast bj-toast--warning" role="alert">
          <span class="bj-toast__icon" aria-hidden="true"><i class="ri-alert-line"></i></span>
          <div class="bj-toast__body">
            <p class="bj-toast__text">Avertissement sans titre.</p>
          </div>
          <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-toast-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-toast-slots" :title="t('section-slots')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-slots-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-toast-expose" :title="t('section-expose')">
    <DocsPropsTable :headers="['Membre', 'Description']" :rows="exposeRows" />
    <DocsCode :code="codeExpose" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toast-usetoast" :title="t('section-usetoast')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('usetoast-desc') }}</p>
    <DocsCode :code="codeUseToast" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toast-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
