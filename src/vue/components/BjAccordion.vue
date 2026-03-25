<script lang="ts">
export interface BjAccordionProps {
  exclusive?: boolean
}
</script>

<script setup lang="ts">
import { provide } from 'vue'
import { useAccordion, AccordionKey } from '../composables/useAccordion'

const props = withDefaults(defineProps<BjAccordionProps>(), {
  exclusive: false,
})

const { context } = useAccordion(props.exclusive)
provide(AccordionKey, context)
</script>

<template>
  <div class="bj-accordions" v-bind="$attrs">
    <slot />
  </div>
</template>
