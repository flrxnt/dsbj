<script lang="ts">
import { type InjectionKey, type Ref } from 'vue'

export interface TabContext {
  activeIndex: Ref<number>
  activate: (index: number) => void
  register: () => number
  tabsId: string
}

export const TabKey: InjectionKey<TabContext> = Symbol('BjTab')

export interface BjTabProps {
  modelValue?: number
  tabs: string[]
  id?: string
}
</script>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'

let uid = 0

const props = withDefaults(defineProps<BjTabProps>(), {
  modelValue: 0,
})

const emit = defineEmits<{
  'update:modelValue': [index: number]
}>()

const tabsId = props.id || `bj-tabs-${++uid}`
const activeIndex = ref(props.modelValue)
let panelCount = 0

watch(() => props.modelValue, (val) => {
  activeIndex.value = val
})

function activate(index: number) {
  activeIndex.value = index
  emit('update:modelValue', index)
}

function registerPanel() {
  return panelCount++
}

provide(TabKey, { activeIndex, activate, register: registerPanel, tabsId })

function onKeydown(e: KeyboardEvent, index: number) {
  let next = index
  if (e.key === 'ArrowRight') next = (index + 1) % props.tabs.length
  else if (e.key === 'ArrowLeft') next = (index - 1 + props.tabs.length) % props.tabs.length
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = props.tabs.length - 1
  else return
  e.preventDefault()
  activate(next)
  const btn = (e.currentTarget as HTMLElement).parentElement?.children[next] as HTMLElement
  btn?.focus()
}
</script>

<template>
  <div class="bj-tabs" v-bind="$attrs">
    <div class="bj-tabs__list" role="tablist">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        :id="`${tabsId}-tab-${i}`"
        type="button"
        role="tab"
        class="bj-tabs__tab"
        :aria-selected="activeIndex === i"
        :aria-controls="`${tabsId}-panel-${i}`"
        :tabindex="activeIndex === i ? 0 : -1"
        @click="activate(i)"
        @keydown="onKeydown($event, i)"
      >
        {{ tab }}
      </button>
    </div>
    <slot />
  </div>
</template>
