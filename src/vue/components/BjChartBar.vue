<script lang="ts">
export interface BjChartBarItem {
  label: string
  value: number
  color?: string
}

export interface BjChartBarProps {
  data: BjChartBarItem[]
  horizontal?: boolean
  maxValue?: number
  showValues?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjChartBarProps>(), {
  horizontal: false,
  showValues: true,
})

const max = computed(() => props.maxValue ?? Math.max(...props.data.map((d) => d.value), 1))
</script>

<template>
  <div
    class="bj-chart-bar"
    :class="{ 'bj-chart-bar--horizontal': horizontal }"
    role="img"
    v-bind="$attrs"
  >
    <template v-if="!horizontal">
      <div v-for="item in data" :key="item.label" class="bj-chart-bar__col">
        <span v-if="showValues" class="bj-chart-bar__value">{{ item.value }}</span>
        <div class="bj-chart-bar__bar-area">
          <div
            class="bj-chart-bar__bar"
            :style="{ height: `${(item.value / max) * 100}%`, backgroundColor: item.color }"
          />
        </div>
        <span class="bj-chart-bar__label">{{ item.label }}</span>
      </div>
    </template>
    <template v-else>
      <div v-for="item in data" :key="item.label" class="bj-chart-bar__row">
        <span class="bj-chart-bar__label" style="min-width: 5rem">{{ item.label }}</span>
        <div class="bj-chart-bar__track">
          <div
            class="bj-chart-bar__fill"
            :style="{ width: `${(item.value / max) * 100}%`, backgroundColor: item.color }"
          />
        </div>
        <span v-if="showValues" class="bj-chart-bar__value">{{ item.value }}</span>
      </div>
    </template>
  </div>
</template>
