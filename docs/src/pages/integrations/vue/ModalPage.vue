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
      desc: 'Composant Vue pour la fenêtre modale DSBJ. Contrôle d’ouverture avec v-model, titre, taille, slots header / corps / footer et méthodes exposées open / close.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'section-sizes': 'size : toutes les valeurs',
      'section-slots': 'Slots',
      'section-expose': 'Expose (ref)',
      'section-vmodel': 'v-model et id',
      'section-emit': 'Émission update:modelValue',
      'section-combos': 'Combinaisons size × en-tête',
      'section-sizes-preview': 'Aperçu HTML des tailles',
      'section-behavior': 'Fermeture et clavier',
      'emit-update':
        'update:modelValue(boolean) : true à l’ouverture (open(), clic bouton, etc.), false à la fermeture (overlay, Échap, close).',
      'combos-intro':
        'Chaque taille peut combiner title seul, slot #header seul, ou les deux (le slot remplace le rendu titre par défaut si fourni).',
      'behavior-desc':
        'Clic sur l’overlay, bouton fermer, Échap et close() du slot footer ferment la modale et émettent update:modelValue(false).',
      'prop-modelValue': 'Affiche ou masque la modale (v-model).',
      'prop-title': 'Titre affiché dans l’en-tête (slot header par défaut).',
      'prop-size':
        'Taille du dialogue : default (défaut), sm, lg, full. Classes : bj-modal--sm, bj-modal--lg, bj-modal--full.',
      'prop-id': 'Identifiant du nœud dialog (généré aléatoirement si absent).',
      'slot-header': 'Remplace le titre par défaut ; l’en-tête s’affiche si title ou #header est fourni.',
      'slot-default': 'Corps de la modale (bj-modal__body).',
      'slot-footer': 'Pied de page ; le slot reçoit la fonction close pour fermer depuis les actions.',
      'expose-open-close': 'open() et close() : même effet que v-model true/false (focus restauré à la fermeture).',
    },
    en: {
      title: 'BjModal',
      desc:
        'Vue component for the DSBJ modal. Open state via v-model, title, header / body / footer slots, and exposed open / close methods.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'section-sizes': 'size: all values',
      'section-slots': 'Slots',
      'section-expose': 'Expose (template ref)',
      'section-vmodel': 'v-model and id',
      'section-emit': 'update:modelValue emit',
      'section-combos': 'size × header combinations',
      'section-sizes-preview': 'HTML preview: sizes',
      'section-behavior': 'Dismissal and keyboard',
      'emit-update':
        'update:modelValue(boolean): true when opening (open(), button, etc.), false when closing (overlay, Escape, close).',
      'combos-intro':
        'Each size can pair with title only, #header only, or both (the slot replaces the default title markup when used).',
      'behavior-desc':
        'Overlay click, close button, Escape, and footer close() all dismiss the modal and emit update:modelValue(false).',
      'prop-modelValue': 'Shows or hides the modal (v-model).',
      'prop-title': 'Title in the header (default header slot content).',
      'prop-size':
        'Dialog size: default (default), sm, lg, full. Classes: bj-modal--sm, bj-modal--lg, bj-modal--full.',
      'prop-id': 'Dialog node id (random if omitted).',
      'slot-header': 'Replaces the default title; header renders if title or #header is set.',
      'slot-default': 'Modal body (bj-modal__body).',
      'slot-footer': 'Footer; slot scope provides close to dismiss from actions.',
      'expose-open-close': 'open() and close() match v-model true/false (focus restored on close).',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjButton, BjModal } from '@flrxnt/dsbj/vue'

const show = ref(false)
<\/script>

<template>
  <BjButton @click="show = true">Ouvrir</BjButton>
  <BjModal v-model="show" title="Confirmation">
    <p>Contenu de la modale.</p>
    <template #footer="{ close }">
      <BjButton @click="close">Fermer</BjButton>
    </template>
  </BjModal>
</template>`

const codeSizes = `<!-- default : pas de modificateur de taille -->
<BjModal v-model="a" title="Default" />

<BjModal v-model="b" size="sm" title="Small" />
<BjModal v-model="c" size="lg" title="Large" />
<BjModal v-model="d" size="full" title="Plein écran" />`

const codeSlots = `<BjModal v-model="open" id="my-dialog">
  <template #header>
    <h2 class="bj-modal__title">Titre personnalisé</h2>
  </template>
  <p>Corps (slot par défaut).</p>
  <template #footer="{ close }">
    <BjButton type="button" variant="secondary" @click="close">Annuler</BjButton>
    <BjButton type="button" @click="close">OK</BjButton>
  </template>
</BjModal>`

const codeExpose = `<script setup>
import { ref } from 'vue'
import { BjButton, BjModal } from '@flrxnt/dsbj/vue'

const modalRef = ref<InstanceType<typeof BjModal> | null>(null)
<\/script>

<template>
  <BjButton @click="modalRef?.open()">Ouvrir (expose)</BjButton>
  <BjModal ref="modalRef" title="Expose">
    <p>Contenu</p>
    <template #footer="{ close }">
      <BjButton @click="modalRef?.close()">close()</BjButton>
      <BjButton @click="close">close du slot</BjButton>
    </template>
  </BjModal>
</template>`

const codeVModel = `<BjModal v-model="visible" id="accessible-dialog" title="Id fixe" />`

const codeEmit = `<script setup>
import { ref, watch } from 'vue'
import { BjModal } from '@flrxnt/dsbj/vue'

const open = ref(false)

watch(open, (v) => console.log('Modale', v ? 'ouverte' : 'fermée'))
<\/script>

<template>
  <BjModal v-model="open" title="Suivi" @update:modelValue="(v) => console.log('modelValue', v)">
    <p>Corps</p>
  </BjModal>
</template>`

const codeCombos = `<!-- default + titre -->
<BjModal v-model="a" title="Moyen" />

<!-- sm + header personnalisé -->
<BjModal v-model="b" size="sm">
  <template #header>
    <h2 class="bj-modal__title">Petit dialogue</h2>
  </template>
  <p>Contenu</p>
</BjModal>

<!-- lg + footer -->
<BjModal v-model="c" size="lg" title="Grand formulaire">
  <template #footer="{ close }">
    <button type="button" class="bj-btn" @click="close">OK</button>
  </template>
</BjModal>

<!-- full + id stable -->
<BjModal v-model="d" size="full" id="wizard" title="Assistant" />`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'title', description: t('prop-title') },
  { name: 'size', description: t('prop-size') },
  { name: 'id', description: t('prop-id') },
])

const slotRows = computed(() => [
  { name: 'header', description: t('slot-header') },
  { name: 'default', description: t('slot-default') },
  { name: 'footer', description: t('slot-footer') },
])

const exposeRows = computed(() => [{ name: 'open, close', description: t('expose-open-close') }])

const emitRows = computed(() => [{ name: 'update:modelValue', description: t('emit-update') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-modal-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-preview" :title="t('section-preview')">
    <DocsPreview>
      <button type="button" class="bj-btn" data-bj-modal-open="int-vue-modal">Ouvrir</button>
      <div
        class="bj-modal"
        id="int-vue-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="int-vue-modal-t"
      >
        <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
        <div class="bj-modal__dialog">
          <header class="bj-modal__header">
            <h2 id="int-vue-modal-t" class="bj-modal__title">Confirmation</h2>
            <button type="button" class="bj-modal__close" data-bj-modal-close aria-label="Fermer">
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p class="bj-text-sm">Contenu de la modale.</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>Fermer</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-modal-sizes" :title="t('section-sizes')">
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-slots" :title="t('section-slots')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
    <DocsCode :code="codeSlots" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-expose" :title="t('section-expose')">
    <DocsPropsTable :headers="['Méthode', 'Description']" :rows="exposeRows" />
    <DocsCode :code="codeExpose" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-vmodel" :title="t('section-vmodel')">
    <DocsCode :code="codeVModel" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-emit" :title="t('section-emit')">
    <DocsPropsTable :headers="['Événement', 'Description']" :rows="emitRows" />
    <DocsCode :code="codeEmit" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-combos" :title="t('section-combos')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('combos-intro') }}</p>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-modal-sizes-preview" :title="t('section-sizes-preview')">
    <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-2v)">Classes sur le conteneur .bj-modal</p>
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-modal bj-modal--sm" style="position: relative; display: flex !important; min-height: 6rem">
        <div class="bj-modal__dialog" style="margin: auto">
          <div class="bj-modal__body"><p class="bj-text-sm">bj-modal--sm</p></div>
        </div>
      </div>
      <div class="bj-modal bj-modal--lg" style="position: relative; display: flex !important; min-height: 6rem">
        <div class="bj-modal__dialog" style="margin: auto">
          <div class="bj-modal__body"><p class="bj-text-sm">bj-modal--lg</p></div>
        </div>
      </div>
      <div class="bj-modal bj-modal--full" style="position: relative; display: flex !important; min-height: 8rem">
        <div class="bj-modal__dialog" style="margin: auto">
          <div class="bj-modal__body"><p class="bj-text-sm">bj-modal--full</p></div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-modal-behavior" :title="t('section-behavior')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('behavior-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-modal-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
