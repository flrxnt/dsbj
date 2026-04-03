<script lang="ts">
export interface BjAccordionItemProps {
  id: string
  title: string
}
</script>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { AccordionKey } from '../composables/useAccordion'

const props = defineProps<BjAccordionItemProps>()

const ctx = inject(AccordionKey)!

const isOpen = computed(() => ctx.openItems.value.has(props.id))
const panelId = computed(() => `accordion-panel-${props.id}`)
const btnId = computed(() => `accordion-btn-${props.id}`)

function toggle() {
  ctx.toggle(props.id)
}
</script>

<template>
  <div class="bj-accordion" :class="{ 'bj-accordion--expanded': isOpen }">
    <button
      :id="btnId"
      type="button"
      class="bj-accordion__btn"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="toggle"
    >
      {{ title }}
    </button>
    <div
      :id="panelId"
      class="bj-accordion__body"
      :data-bj-expanded="isOpen ? '' : undefined"
      role="region"
      :aria-labelledby="btnId"
    >
      <slot />
    </div>
  </div>
</template>
