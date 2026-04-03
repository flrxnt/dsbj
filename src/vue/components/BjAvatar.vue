<script lang="ts">
export type AvatarStatus = 'online' | 'away' | 'busy' | 'offline'

const statusLabels: Record<AvatarStatus, string> = {
  online: 'En ligne',
  away: 'Absent',
  busy: 'Occupé',
  offline: 'Hors ligne',
}

export interface BjAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  square?: boolean
  src?: string
  alt?: string
  initials?: string
  icon?: string
  status?: AvatarStatus
  statusLabel?: string
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

const effectiveStatusLabel = computed(() => {
  if (!props.status) return undefined
  return props.statusLabel || statusLabels[props.status]
})
</script>

<template>
  <span :class="classes" role="img" :aria-label="alt || initials || undefined" v-bind="$attrs">
    <img v-if="src" class="bj-avatar__img" :src="src" :alt="alt" />
    <span v-else-if="initials" class="bj-avatar__initials" aria-hidden="true">{{ initials }}</span>
    <i v-else-if="icon" class="bj-avatar__icon" :class="icon" aria-hidden="true" />
    <slot v-else />
    <span
      v-if="status"
      class="bj-avatar__status"
      :class="`bj-avatar__status--${status}`"
      role="presentation"
      :aria-label="effectiveStatusLabel"
    >
      <span class="bj-sr-only">{{ effectiveStatusLabel }}</span>
    </span>
  </span>
</template>
