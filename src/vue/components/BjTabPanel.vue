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
</script>

<template>
  <div
    class="bj-tabs__panel"
    role="tabpanel"
    :data-bj-expanded="isActive ? '' : undefined"
    :style="{ display: isActive ? 'block' : 'none' }"
  >
    <slot />
  </div>
</template>
