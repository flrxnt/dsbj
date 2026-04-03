<script lang="ts">
export type BjBannerHeadingLevel = 'h1' | 'h2' | 'h3'

export interface BjBannerProps {
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  theme?: 'light' | 'dark' | 'green' | 'yellow' | 'red' | 'plain'
  image?: string
  title?: string
  text?: string
  headingLevel?: BjBannerHeadingLevel
  ariaLabel?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjBannerProps>(), {
  size: 'md',
  align: 'left',
  theme: 'dark',
  headingLevel: 'h1',
})

const classes = computed(() => [
  'bj-banner',
  props.size !== 'md' && `bj-banner--${props.size}`,
  props.align !== 'left' && `bj-banner--${props.align}`,
  `bj-banner--${props.theme}`,
])
</script>

<template>
  <section :class="classes" :aria-label="ariaLabel || title || undefined" v-bind="$attrs">
    <div v-if="image" class="bj-banner__img" :style="{ backgroundImage: `url(${image})` }" aria-hidden="true" />
    <div class="bj-banner__overlay" />
    <div class="bj-banner__body">
      <component :is="headingLevel" v-if="title" class="bj-banner__title">{{ title }}</component>
      <p v-if="text" class="bj-banner__text">{{ text }}</p>
      <div v-if="$slots.actions" class="bj-banner__actions">
        <slot name="actions" />
      </div>
      <slot />
    </div>
  </section>
</template>
