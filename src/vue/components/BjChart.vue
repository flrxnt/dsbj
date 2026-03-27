<script lang="ts">
export interface BjChartLegendItem {
  label: string
  color: string
}

export interface BjChartProps {
  title?: string
  subtitle?: string
  legend?: BjChartLegendItem[]
}
</script>

<script setup lang="ts">
defineProps<BjChartProps>()
</script>

<template>
  <div class="bj-chart" v-bind="$attrs">
    <div v-if="title || subtitle" class="bj-chart__header">
      <div>
        <p v-if="title" class="bj-chart__title">{{ title }}</p>
        <p v-if="subtitle" class="bj-chart__subtitle">{{ subtitle }}</p>
      </div>
      <slot name="actions" />
    </div>
    <div class="bj-chart__body">
      <slot />
    </div>
    <div v-if="legend?.length" class="bj-chart__legend">
      <span v-for="item in legend" :key="item.label" class="bj-chart__legend-item">
        <span class="bj-chart__legend-dot" :style="{ backgroundColor: item.color }" />
        {{ item.label }}
      </span>
    </div>
  </div>
</template>
