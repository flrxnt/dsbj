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
      desc: 'Composant Vue pour la fenêtre modale DSBJ. Contrôle d’ouverture avec v-model, titre, taille et slot footer avec fonction close.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-modelValue': 'Affiche ou masque la modale (v-model).',
      'prop-title': 'Titre affiché dans l’en-tête.',
      'prop-size': 'Taille du dialogue : default, sm, lg, full.',
      'prop-id': 'Identifiant du nœud dialog (généré si absent).',
    },
    en: {
      title: 'BjModal',
      desc: 'Vue component for the DSBJ modal. Open state via v-model, title, size, and footer slot exposing close.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-modelValue': 'Shows or hides the modal (v-model).',
      'prop-title': 'Title shown in the header.',
      'prop-size': 'Dialog size: default, sm, lg, full.',
      'prop-id': 'Dialog node id (auto-generated if omitted).',
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

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'title', description: t('prop-title') },
  { name: 'size', description: t('prop-size') },
  { name: 'id', description: t('prop-id') },
])
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

  <DocsSection id="vue-modal-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
