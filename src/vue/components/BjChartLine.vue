<script lang="ts">
export interface BjChartLinePoint {
  label: string
  value: number
}

export interface BjChartLineSeries {
  name: string
  color?: string
  data: BjChartLinePoint[]
}

export interface BjChartLineProps {
  series: BjChartLineSeries[]
  height?: number
  showArea?: boolean
  showDots?: boolean
  showGrid?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjChartLineProps>(), {
  height: 200,
  showArea: false,
  showDots: true,
  showGrid: true,
})

const padding = { top: 10, right: 10, bottom: 30, left: 40 }

const allValues = computed(() => props.series.flatMap((s) => s.data.map((d) => d.value)))
const maxVal = computed(() => Math.max(...allValues.value, 1))
const labels = computed(() => props.series[0]?.data.map((d) => d.label) ?? [])

function buildPath(data: BjChartLinePoint[], w: number, h: number) {
  const n = data.length
  if (n === 0) return ''
  const xStep = n > 1 ? (w - padding.left - padding.right) / (n - 1) : 0
  return data
    .map((d, i) => {
      const x = padding.left + i * xStep
      const y = h - padding.bottom - ((d.value / maxVal.value) * (h - padding.top - padding.bottom))
      return `${i === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')
}

function buildArea(data: BjChartLinePoint[], w: number, h: number) {
  const n = data.length
  if (n === 0) return ''
  const xStep = n > 1 ? (w - padding.left - padding.right) / (n - 1) : 0
  const base = h - padding.bottom
  const points = data.map((d, i) => {
    const x = padding.left + i * xStep
    const y = h - padding.bottom - ((d.value / maxVal.value) * (h - padding.top - padding.bottom))
    return `${x},${y}`
  })
  return `M${padding.left},${base} L${points.join(' L')} L${padding.left + (n - 1) * xStep},${base} Z`
}

function dotPositions(data: BjChartLinePoint[], w: number, h: number) {
  const n = data.length
  const xStep = n > 1 ? (w - padding.left - padding.right) / (n - 1) : 0
  return data.map((d, i) => ({
    cx: padding.left + i * xStep,
    cy: h - padding.bottom - ((d.value / maxVal.value) * (h - padding.top - padding.bottom)),
  }))
}
</script>

<template>
  <div class="bj-chart-line" v-bind="$attrs">
    <svg :viewBox="`0 0 400 ${height}`" preserveAspectRatio="xMidYMid meet">
      <template v-if="showGrid">
        <line
          v-for="i in 5"
          :key="i"
          class="bj-chart-line__grid"
          :x1="padding.left"
          :x2="400 - padding.right"
          :y1="padding.top + ((i - 1) / 4) * (height - padding.top - padding.bottom)"
          :y2="padding.top + ((i - 1) / 4) * (height - padding.top - padding.bottom)"
        />
      </template>
      <template v-for="s in series" :key="s.name">
        <path
          v-if="showArea"
          class="bj-chart-line__area"
          :d="buildArea(s.data, 400, height)"
          :style="{ fill: s.color }"
        />
        <path
          class="bj-chart-line__path"
          :d="buildPath(s.data, 400, height)"
          :style="{ stroke: s.color }"
        />
        <circle
          v-if="showDots"
          v-for="(dot, di) in dotPositions(s.data, 400, height)"
          :key="di"
          class="bj-chart-line__dot"
          :cx="dot.cx"
          :cy="dot.cy"
          :style="{ stroke: s.color }"
        />
      </template>
      <text
        v-for="(label, i) in labels"
        :key="i"
        class="bj-chart-line__axis"
        :x="padding.left + (labels.length > 1 ? i * ((400 - padding.left - padding.right) / (labels.length - 1)) : 0)"
        :y="height - 8"
        text-anchor="middle"
      >
        {{ label }}
      </text>
    </svg>
  </div>
</template>
