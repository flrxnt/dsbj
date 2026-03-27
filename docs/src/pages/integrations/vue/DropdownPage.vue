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
      title: 'BjDropdown',
      desc: 'Composant Vue pour le menu déroulant DSBJ. Slots trigger et menu, alignement, direction, taille, événements open/close et API exposée sur ref.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'section-combos': 'Combinaisons align × direction × size (12)',
      'section-slot-menu': 'Slot menu : items et séparateur',
      'section-no-vmodel': 'v-model',
      'section-select-note': 'Clic sur les items du menu',
      'prop-size': 'Taille : sm (bj-dropdown--sm), md (défaut, pas de modificateur), lg (bj-dropdown--lg).',
      'slot-menu-note':
        'Le slot par défaut rend une liste ; utilisez li.bj-dropdown__item et li.bj-dropdown__divider comme en HTML DSBJ.',
      'no-vmodel-desc': 'Pas de v-model : l’état ouvert/fermé est interne ; utilisez la ref (open, close, toggle, isOpen) ou les événements open / close.',
      'select-note':
        'Le composant n’émet pas de select : branchez un écouteur de clic sur chaque bouton menuitem pour votre logique métier.',
      'section-slots': 'Slots',
      'section-emits': 'Événements',
      'section-expose': 'Expose (ref)',
      'prop-align': 'Alignement du menu : left (défaut) ou right (bj-dropdown--right).',
      'prop-direction': 'Ouverture : down (défaut) ou up (bj-dropdown--up).',
      'slot-trigger': 'Élément cliquable qui ouvre le menu (obligatoire).',
      'slot-default': 'Contenu du menu (souvent des <li class="bj-dropdown__item">).',
      'emit-open': 'Émis à l’ouverture.',
      'emit-close': 'Émis à la fermeture (clic extérieur, Escape, ou toggle).',
      'expose-api': 'open(), close(), toggle(), isOpen (ref) pour contrôle programmatique.',
    },
    en: {
      title: 'BjDropdown',
      desc:
        'Vue component for the DSBJ dropdown. Trigger and menu slots, alignment, direction, size, open/close events, and ref expose API.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'section-combos': 'align × direction × size combinations (12)',
      'section-slot-menu': 'Menu slot: items and divider',
      'section-no-vmodel': 'v-model',
      'section-select-note': 'Menu item clicks',
      'prop-size': 'Size: sm (bj-dropdown--sm), md (default, no modifier), lg (bj-dropdown--lg).',
      'slot-menu-note':
        'Default slot renders the list; use li.bj-dropdown__item and li.bj-dropdown__divider like DSBJ HTML.',
      'no-vmodel-desc':
        'No v-model: open state is internal; use the template ref (open, close, toggle, isOpen) or open/close events.',
      'select-note':
        'No select emit is fired from the component: add a click listener on each menuitem button for app logic.',
      'section-slots': 'Slots',
      'section-emits': 'Events',
      'section-expose': 'Expose (template ref)',
      'prop-align': 'Menu alignment: left (default) or right (bj-dropdown--right).',
      'prop-direction': 'Open direction: down (default) or up (bj-dropdown--up).',
      'slot-trigger': 'Clickable element that opens the menu (required).',
      'slot-default': 'Menu content (often <li class="bj-dropdown__item">).',
      'emit-open': 'Emitted when the menu opens.',
      'emit-close': 'Emitted when the menu closes (outside click, Escape, or toggle).',
      'expose-api': 'open(), close(), toggle(), isOpen (ref) for programmatic control.',
    },
  },
})

const codeUsage = `<script setup>
import { BjButton, BjDropdown } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjDropdown align="left" direction="down" size="md">
    <template #trigger>
      <BjButton type="button">Options</BjButton>
    </template>
    <li class="bj-dropdown__item">
      <button type="button" role="menuitem">Modifier</button>
    </li>
    <li class="bj-dropdown__item">
      <button type="button" role="menuitem">Supprimer</button>
    </li>
  </BjDropdown>
</template>`

const codeCombos = `<!-- align × direction × size (sm | md | lg) — md = défaut -->
<BjDropdown align="left" direction="down" size="md">…</BjDropdown>
<BjDropdown align="left" direction="down" size="sm">…</BjDropdown>
<BjDropdown align="left" direction="down" size="lg">…</BjDropdown>
<BjDropdown align="left" direction="up" size="md">…</BjDropdown>
<BjDropdown align="left" direction="up" size="sm">…</BjDropdown>
<BjDropdown align="left" direction="up" size="lg">…</BjDropdown>
<BjDropdown align="right" direction="down" size="md">…</BjDropdown>
<BjDropdown align="right" direction="down" size="sm">…</BjDropdown>
<BjDropdown align="right" direction="down" size="lg">…</BjDropdown>
<BjDropdown align="right" direction="up" size="md">…</BjDropdown>
<BjDropdown align="right" direction="up" size="sm">…</BjDropdown>
<BjDropdown align="right" direction="up" size="lg">…</BjDropdown>`

const codeSlotMenu = `<BjDropdown>
  <template #trigger>
    <BjButton type="button">Actions</BjButton>
  </template>
  <li class="bj-dropdown__item">
    <button type="button" role="menuitem" @click="onEdit">Modifier</button>
  </li>
  <li class="bj-dropdown__divider" role="separator"></li>
  <li class="bj-dropdown__item">
    <button type="button" role="menuitem" @click="onDelete">Supprimer</button>
  </li>
</BjDropdown>`

const codeEmits = `<script setup>
import { BjButton, BjDropdown } from '@flrxnt/dsbj/vue'

function onOpen() { console.log('ouvert') }
function onClose() { console.log('fermé') }
<\/script>

<template>
  <BjDropdown @open="onOpen" @close="onClose">
    <template #trigger>
      <BjButton type="button">Menu</BjButton>
    </template>
    <li class="bj-dropdown__item"><button type="button" role="menuitem">Action</button></li>
  </BjDropdown>
</template>`

const codeExpose = `<script setup>
import { ref } from 'vue'
import { BjButton, BjDropdown } from '@flrxnt/dsbj/vue'

const dd = ref<InstanceType<typeof BjDropdown> | null>(null)
<\/script>

<template>
  <BjButton @click="dd?.toggle()">Toggle</BjButton>
  <BjButton @click="dd?.open()">Ouvrir</BjButton>
  <BjButton @click="dd?.close()">Fermer</BjButton>
  <BjDropdown ref="dd" align="right" direction="up" size="sm">
    <template #trigger><BjButton type="button">▼</BjButton></template>
    <li class="bj-dropdown__item"><button type="button" role="menuitem">Item</button></li>
  </BjDropdown>
</template>`

const propsRows = computed(() => [
  { name: 'align', description: t('prop-align') },
  { name: 'direction', description: t('prop-direction') },
  { name: 'size', description: t('prop-size') },
])

const slotRows = computed(() => [
  { name: 'trigger', description: t('slot-trigger') },
  { name: 'default', description: t('slot-default') },
])

const emitRows = computed(() => [
  { name: 'open', description: t('emit-open') },
  { name: 'close', description: t('emit-close') },
])

const exposeRows = computed(() => [{ name: 'open, close, toggle, isOpen', description: t('expose-api') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-dropdown-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dropdown-preview" :title="t('section-preview')">
    <DocsPreview style="min-height: 14rem">
      <div class="bj-dropdown">
        <div class="bj-dropdown__trigger" aria-haspopup="true" aria-expanded="true">
          <button type="button" class="bj-btn">
            Options <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
          </button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Modifier</button>
          </li>
          <li class="bj-dropdown__divider" role="separator"></li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Supprimer</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-dropdown-combos" :title="t('section-combos')">
    <DocsCode :code="codeCombos" lang="html" />
    <DocsPreview style="min-height: 12rem; margin-top: var(--bj-spacing-3v)">
      <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-2v)">align=right, direction=up, size=lg (classes HTML)</p>
      <div class="bj-dropdown bj-dropdown--right bj-dropdown--up bj-dropdown--lg">
        <div class="bj-dropdown__trigger" aria-haspopup="true" aria-expanded="true">
          <button type="button" class="bj-btn">Menu</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Action</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-dropdown-slot-menu" :title="t('section-slot-menu')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('slot-menu-note') }}</p>
    <DocsCode :code="codeSlotMenu" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dropdown-select-note" :title="t('section-select-note')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('select-note') }}</p>
  </DocsSection>

  <DocsSection id="vue-dropdown-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-dropdown-slots" :title="t('section-slots')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
  </DocsSection>

  <DocsSection id="vue-dropdown-emits" :title="t('section-emits')">
    <DocsPropsTable :headers="['Événement', 'Description']" :rows="emitRows" />
    <DocsCode :code="codeEmits" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dropdown-expose" :title="t('section-expose')">
    <DocsPropsTable :headers="['Membre', 'Description']" :rows="exposeRows" />
    <DocsCode :code="codeExpose" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dropdown-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
