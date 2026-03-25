<script setup lang="ts">
import { computed } from 'vue'

export interface BjBannerProps {
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  theme?: 'light' | 'dark' | 'green' | 'yellow' | 'red' | 'plain'
  image?: string
  title?: string
  text?: string
}

const props = withDefaults(defineProps<BjBannerProps>(), {
  size: 'md',
  align: 'left',
  theme: 'dark',
})

const classes = computed(() => [
  'bj-banner',
  props.size !== 'md' && `bj-banner--${props.size}`,
  props.align !== 'left' && `bj-banner--${props.align}`,
  `bj-banner--${props.theme}`,
])
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <div v-if="image" class="bj-banner__img" :style="{ backgroundImage: `url(${image})` }" role="img" aria-hidden="true" />
    <div class="bj-banner__overlay" />
    <div class="bj-banner__body">
      <h1 v-if="title" class="bj-banner__title">{{ title }}</h1>
      <p v-if="text" class="bj-banner__text">{{ text }}</p>
      <div v-if="$slots.actions" class="bj-banner__actions">
        <slot name="actions" />
      </div>
      <slot />
    </div>
  </div>
</template>
