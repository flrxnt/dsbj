<script lang="ts">
export interface BjAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  square?: boolean
  src?: string
  alt?: string
  initials?: string
  icon?: string
  status?: 'online' | 'away' | 'busy' | 'offline'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjAvatarProps>(), {
  size: 'md',
  alt: '',
})

const classes = computed(() => [
  'bj-avatar',
  props.size !== 'md' && `bj-avatar--${props.size}`,
  props.square && 'bj-avatar--square',
])
</script>

<template>
  <span :class="classes" v-bind="$attrs">
    <img v-if="src" class="bj-avatar__img" :src="src" :alt="alt" />
    <span v-else-if="initials" class="bj-avatar__initials">{{ initials }}</span>
    <i v-else-if="icon" class="bj-avatar__icon" :class="icon" aria-hidden="true" />
    <slot v-else />
    <span
      v-if="status"
      class="bj-avatar__status"
      :class="`bj-avatar__status--${status}`"
    />
  </span>
</template>
