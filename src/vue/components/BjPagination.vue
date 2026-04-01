<script lang="ts">
export interface BjPaginationProps {
  modelValue: number
  total: number
  perPage?: number
  maxVisible?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjPaginationProps>(), {
  perPage: 10,
  maxVisible: 5,
})

const emit = defineEmits<{
  'update:modelValue': [page: number]
}>()

const totalPages = computed(() => Math.ceil(props.total / props.perPage))

const pages = computed(() => {
  const result: (number | '...')[] = []
  const total = totalPages.value
  const current = props.modelValue
  const half = Math.floor(props.maxVisible / 2)

  let start = Math.max(1, current - half)
  let end = Math.min(total, start + props.maxVisible - 1)

  if (end - start + 1 < props.maxVisible) {
    start = Math.max(1, end - props.maxVisible + 1)
  }

  if (start > 1) {
    result.push(1)
    if (start > 2) result.push('...')
  }

  for (let i = start; i <= end; i++) result.push(i)

  if (end < total) {
    if (end < total - 1) result.push('...')
    result.push(total)
  }

  return result
})

function go(page: number) {
  if (page >= 1 && page <= totalPages.value && page !== props.modelValue) {
    emit('update:modelValue', page)
  }
}
</script>

<template>
  <nav class="bj-pagination" aria-label="Pagination" v-bind="$attrs">
    <button
      type="button"
      class="bj-pagination__nav"
      :class="{ 'bj-pagination__nav--disabled': modelValue <= 1 }"
      :disabled="modelValue <= 1"
      aria-label="Page précédente"
      @click="go(modelValue - 1)"
    >
      <BjSvgIcon name="arrowLeftSLine" />
    </button>
    <template v-for="(p, i) in pages" :key="i">
      <span v-if="p === '...'" class="bj-pagination__ellipsis">...</span>
      <button
        v-else
        type="button"
        class="bj-pagination__link"
        :class="{ 'bj-pagination__link--active': p === modelValue }"
        :aria-current="p === modelValue ? 'page' : undefined"
        @click="go(p as number)"
      >
        {{ p }}
      </button>
    </template>
    <button
      type="button"
      class="bj-pagination__nav"
      :class="{ 'bj-pagination__nav--disabled': modelValue >= totalPages }"
      :disabled="modelValue >= totalPages"
      aria-label="Page suivante"
      @click="go(modelValue + 1)"
    >
      <BjSvgIcon name="arrowRightSLine" />
    </button>
  </nav>
</template>
