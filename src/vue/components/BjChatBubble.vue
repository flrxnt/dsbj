<script lang="ts">
export interface BjChatBubbleProps {
  variant?: 'sent' | 'received' | 'system'
  avatar?: string
  sender?: string
  time?: string
  status?: 'sending' | 'sent' | 'read' | 'error'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjChatBubbleProps>(), {
  variant: 'received',
})

const classes = computed(() => [
  'bj-chat-bubble',
  `bj-chat-bubble--${props.variant}`,
  props.status === 'error' && 'bj-chat-bubble--error',
])

const ariaLabel = computed(() => {
  const parts: string[] = []
  if (props.sender) parts.push(`Message de ${props.sender}`)
  if (props.time) parts.push(`à ${props.time}`)
  return parts.length ? parts.join(' ') : undefined
})

const statusIcon = computed(() => {
  switch (props.status) {
    case 'sending': return 'ri-time-line'
    case 'sent': return 'ri-check-line'
    case 'read': return 'ri-check-double-line'
    case 'error': return 'ri-error-warning-line'
    default: return null
  }
})
</script>

<template>
  <div
    :class="classes"
    role="listitem"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <div v-if="avatar && variant !== 'system'" class="bj-chat-bubble__avatar">
      <img :src="avatar" :alt="sender || ''" />
    </div>
    <div class="bj-chat-bubble__content">
      <span v-if="sender && variant !== 'system'" class="bj-chat-bubble__sender">{{ sender }}</span>
      <div class="bj-chat-bubble__text">
        <slot />
      </div>
      <div v-if="time || status" class="bj-chat-bubble__meta">
        <span v-if="time" class="bj-chat-bubble__time">{{ time }}</span>
        <span v-if="statusIcon" :class="['bj-chat-bubble__status', `bj-chat-bubble__status--${status}`]">
          <i :class="statusIcon" aria-hidden="true" />
        </span>
      </div>
    </div>
  </div>
</template>
