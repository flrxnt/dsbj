<script lang="ts">
export interface BjTableProps {
  bordered?: boolean
  striped?: boolean
  fixedLayout?: boolean
  caption?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<BjTableProps>()

const classes = computed(() => [
  'bj-table',
  props.bordered && 'bj-table--bordered',
  props.striped && 'bj-table--striped',
  props.fixedLayout && 'bj-table--layout-fixed',
  !props.caption && 'bj-table--no-caption',
])
</script>

<template>
  <div class="bj-table-wrapper" v-bind="$attrs">
    <div v-if="$slots.header" class="bj-table__header">
      <slot name="header" />
    </div>
    <table :class="classes">
      <caption v-if="caption">{{ caption }}</caption>
      <slot />
    </table>
    <div v-if="$slots.footer" class="bj-table__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
