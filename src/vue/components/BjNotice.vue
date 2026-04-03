<script lang="ts">
export interface BjNoticeProps {
  variant?: 'default' | 'info' | 'warning' | 'alert'
  closable?: boolean
  title?: string
  icon?: string
  closeLabel?: string
  role?: 'alert' | 'status'
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BjSvgIcon, iconPaths } from '../icons'

const props = withDefaults(defineProps<BjNoticeProps>(), {
  variant: 'default',
  closeLabel: 'Fermer',
})

const emit = defineEmits<{ close: [] }>()

const visible = ref(true)

function remixClassToIconName(classStr: string): string | undefined {
  const m = classStr.match(/\bri-([a-z0-9]+(?:-[a-z0-9]+)*)\b/)
  if (!m) return undefined
  const segs = m[1].split('-')
  return segs[0] + segs.slice(1).map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

const noticeIconSvgName = computed(() => {
  if (!props.icon) return undefined
  const name = remixClassToIconName(props.icon)
  if (name && name in iconPaths) return name
  return undefined
})

const noticeIconExtraClass = computed(() => {
  if (!props.icon || !noticeIconSvgName.value) return ''
  return props.icon
    .trim()
    .split(/\s+/)
    .filter((c) => c && !c.startsWith('ri-'))
    .join(' ')
})

const effectiveRole = computed(() => {
  if (props.role) return props.role
  if (props.variant === 'alert' || props.variant === 'warning') return 'alert' as const
  return 'status' as const
})

const classes = computed(() => [
  'bj-notice',
  props.variant !== 'default' && `bj-notice--${props.variant}`,
])

function close() {
  visible.value = false
  emit('close')
}
</script>

<template>
  <div v-if="visible" :class="classes" :role="effectiveRole" v-bind="$attrs">
    <span
      v-if="icon && noticeIconSvgName"
      class="bj-notice__icon"
      :class="noticeIconExtraClass"
      aria-hidden="true"
    >
      <BjSvgIcon :name="noticeIconSvgName" />
    </span>
    <i v-else-if="icon" class="bj-notice__icon" :class="icon" aria-hidden="true" />
    <div class="bj-notice__body">
      <p v-if="title" class="bj-notice__title">{{ title }}</p>
      <slot />
    </div>
    <button
      v-if="closable"
      type="button"
      class="bj-notice__close"
      :aria-label="closeLabel"
      @click="close"
    >
      <BjSvgIcon name="closeLine" />
    </button>
  </div>
</template>
