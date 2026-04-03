<script setup lang="ts">
import { inject, computed, onBeforeMount } from 'vue'
import { TabKey } from './BjTab.vue'

const ctx = inject(TabKey)
if (!ctx) throw new Error('BjTabPanel must be inside BjTab')

let index = -1
onBeforeMount(() => {
  index = ctx.register()
})

const isActive = computed(() => ctx.activeIndex.value === index)
const panelId = computed(() => `${ctx.tabsId}-panel-${index}`)
const tabId = computed(() => `${ctx.tabsId}-tab-${index}`)
</script>

<template>
  <div
    :id="panelId"
    class="bj-tabs__panel"
    role="tabpanel"
    :aria-labelledby="tabId"
    :tabindex="isActive ? 0 : undefined"
    :data-bj-expanded="isActive ? '' : undefined"
    :style="{ display: isActive ? 'block' : 'none' }"
  >
    <slot />
  </div>
</template>
