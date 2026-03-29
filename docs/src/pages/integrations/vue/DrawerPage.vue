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
      title: 'BjDrawer — Vue',
      desc: 'Composant Vue 3 pour le tiroir latéral DSBJ, avec gestion du v-model, du focus et des slots.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-variantes': 'Positions',
      'section-tailles': 'Tailles',
      'section-disabled': 'Slots',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le composant utilise <code>role="dialog"</code> et <code>aria-modal="true"</code>. Le focus est piégé dans le tiroir. La touche <code>Escape</code> ferme le tiroir.',
      'prop-modelValue': 'Contrôle l\'ouverture du tiroir (v-model).',
      'prop-position': 'Position du tiroir : "left" (défaut) ou "right".',
      'prop-size': 'Taille du tiroir : "default", "sm", "lg" ou "full".',
      'prop-title': 'Titre affiché dans l\'en-tête du tiroir.',
      'prop-id': 'Id HTML personnalisé (généré automatiquement sinon).',
    },
    en: {
      title: 'BjDrawer — Vue',
      desc: 'Vue 3 component for the DSBJ drawer, with v-model, focus management and slots support.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-variantes': 'Positions',
      'section-tailles': 'Sizes',
      'section-disabled': 'Slots',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The component uses <code>role="dialog"</code> and <code>aria-modal="true"</code>. Focus is trapped inside the drawer. The <code>Escape</code> key closes the drawer.',
      'prop-modelValue': 'Controls drawer visibility (v-model).',
      'prop-position': 'Drawer position: "left" (default) or "right".',
      'prop-size': 'Drawer size: "default", "sm", "lg" or "full".',
      'prop-title': 'Title displayed in the drawer header.',
      'prop-id': 'Custom HTML id (auto-generated otherwise).',
    },
  },
})

const showDrawer = ref(false)
const showDrawerRight = ref(false)

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjDrawer } from '@flrxnt/dsbj/vue'

const open = ref(false)
<\/script>

<template>
  <button class="bj-btn" @click="open = true">Ouvrir</button>
  <BjDrawer v-model="open" title="Mon tiroir">
    <p>Contenu du tiroir.</p>
    <template #footer="{ close }">
      <button class="bj-btn bj-btn--tertiary" @click="close">Annuler</button>
      <button class="bj-btn">Valider</button>
    </template>
  </BjDrawer>
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'position', description: t('prop-position') },
  { name: 'size', description: t('prop-size') },
  { name: 'title', description: t('prop-title') },
  { name: 'id', description: t('prop-id') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="usage-drawer" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="preview-drawer" :title="t('section-preview')">
    <DocsPreview>
      <div style="display: flex; gap: var(--bj-spacing-2v); flex-wrap: wrap">
        <button type="button" class="bj-btn" @click="showDrawer = true">Gauche (défaut)</button>
        <button type="button" class="bj-btn bj-btn--secondary" @click="showDrawerRight = true">Droite</button>
      </div>
      <BjDrawer v-model="showDrawer" title="Tiroir gauche">
        <p>Contenu du tiroir gauche.</p>
        <template #footer="{ close }">
          <button type="button" class="bj-btn bj-btn--tertiary" @click="close">Fermer</button>
        </template>
      </BjDrawer>
      <BjDrawer v-model="showDrawerRight" position="right" title="Tiroir droit">
        <p>Contenu du tiroir droit.</p>
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
