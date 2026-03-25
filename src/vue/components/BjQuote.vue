<script lang="ts">
export interface BjQuoteProps {
  accent?: boolean
  text?: string
  author?: string
  source?: string
  image?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<BjQuoteProps>()

const classes = computed(() => [
  'bj-quote',
  props.accent && 'bj-quote--accent',
])
</script>

<template>
  <figure :class="classes" v-bind="$attrs">
    <img v-if="image" class="bj-quote__image" :src="image" alt="" />
    <blockquote class="bj-quote__text">
      <slot>{{ text }}</slot>
    </blockquote>
    <figcaption v-if="author || source">
      <span v-if="author" class="bj-quote__author">{{ author }}</span>
      <span v-if="source" class="bj-quote__source">{{ source }}</span>
    </figcaption>
  </figure>
</template>
