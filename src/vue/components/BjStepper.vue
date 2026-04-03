<script lang="ts">
export interface StepperStep {
  label: string
  done?: boolean
}
export interface BjStepperProps {
  title?: string
  steps: StepperStep[]
  current: number
  vertical?: boolean
  detail?: string
  ariaLabel?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjStepperProps>(), {
  current: 0,
  ariaLabel: 'Étapes',
})

const classes = computed(() => [
  'bj-stepper',
  props.vertical && 'bj-stepper--vertical',
])
</script>

<template>
  <div :class="classes" role="navigation" :aria-label="ariaLabel" v-bind="$attrs">
    <div class="bj-stepper__header">
      <h2 v-if="title" class="bj-stepper__title">{{ title }}</h2>
      <div class="bj-stepper__steps" role="list">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="bj-stepper__step"
          :class="{
            'bj-stepper__step--current': i === current,
            'bj-stepper__step--done': step.done || i < current,
          }"
          role="listitem"
          :aria-current="i === current ? 'step' : undefined"
        >
          {{ step.label }}
        </div>
      </div>
      <p v-if="detail" class="bj-stepper__detail">{{ detail }}</p>
    </div>
    <slot />
  </div>
</template>
