<script lang="ts">
export interface BjChartPieSlice {
  label: string
  value: number
  color: string
}

export interface BjChartPieProps {
  data: BjChartPieSlice[]
  donut?: boolean
  centerText?: string
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjChartPieProps>(), {
  donut: false,
  size: 200,
})

const total = computed(() => props.data.reduce((acc, d) => acc + d.value, 0) || 1)
const center = computed(() => props.size / 2)
const radius = computed(() => props.size / 2 - 4)
const innerRadius = computed(() => (props.donut ? radius.value * 0.6 : 0))

const slices = computed(() => {
  let cumAngle = -Math.PI / 2
  return props.data.map((d) => {
    const angle = (d.value / total.value) * Math.PI * 2
    const startAngle = cumAngle
    const endAngle = cumAngle + angle
    cumAngle = endAngle
    const largeArc = angle > Math.PI ? 1 : 0
    const r = radius.value
    const ir = innerRadius.value

    const x1 = center.value + r * Math.cos(startAngle)
    const y1 = center.value + r * Math.sin(startAngle)
    const x2 = center.value + r * Math.cos(endAngle)
    const y2 = center.value + r * Math.sin(endAngle)

    let path: string
    if (ir > 0) {
      const ix1 = center.value + ir * Math.cos(endAngle)
      const iy1 = center.value + ir * Math.sin(endAngle)
      const ix2 = center.value + ir * Math.cos(startAngle)
      const iy2 = center.value + ir * Math.sin(startAngle)
      path = `M${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} L${ix1},${iy1} A${ir},${ir} 0 ${largeArc} 0 ${ix2},${iy2} Z`
    } else {
      path = `M${center.value},${center.value} L${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z`
    }

    return { ...d, path }
  })
})
</script>

<template>
  <div class="bj-chart-pie" :class="{ 'bj-chart-pie--donut': donut }" v-bind="$attrs">
    <svg :viewBox="`0 0 ${size} ${size}`">
      <path
        v-for="(slice, i) in slices"
        :key="i"
        class="bj-chart-pie__slice"
        :d="slice.path"
        :fill="slice.color"
      />
      <text v-if="donut && centerText" class="bj-chart-pie__center-text" :x="center" :y="center">
        {{ centerText }}
      </text>
    </svg>
  </div>
</template>
