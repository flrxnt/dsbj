<script lang="ts">
export interface BjLogoProps {
  size?: 'md' | 'lg' | 'xl'
  href?: string
  motto?: string
  tagline?: string
  src?: string
  alt?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjLogoProps>(), {
  size: 'md',
  alt: 'Logo',
})

const classes = computed(() => [
  'bj-logo',
  props.size !== 'md' && `bj-logo--${props.size}`,
])
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <a v-if="href" :href="href" class="bj-logo__link">
      <img v-if="src" class="bj-logo__img" :src="src" :alt="alt" />
      <slot v-else />
    </a>
    <template v-else>
      <img v-if="src" class="bj-logo__img" :src="src" :alt="alt" />
      <slot v-else />
    </template>
    <p v-if="motto" class="bj-logo__motto">{{ motto }}</p>
    <p v-if="tagline" class="bj-logo__tagline">{{ tagline }}</p>
  </div>
</template>
