<script lang="ts">
export interface BjLinkProps {
  size?: 'sm' | 'md' | 'lg'
  iconPosition?: 'left' | 'right' | 'none'
  reset?: boolean
  external?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjLinkProps>(), {
  size: 'md',
  iconPosition: 'none',
})

const classes = computed(() => [
  'bj-link',
  props.size !== 'md' && `bj-link--${props.size}`,
  props.iconPosition === 'left' && 'bj-link--icon-left',
  props.iconPosition === 'right' && 'bj-link--icon-right',
  props.reset && 'bj-link--reset',
  props.external && 'bj-link--external',
])
</script>

<template>
  <a
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    v-bind="$attrs"
  >
    <slot />
    <BjSvgIcon v-if="external" class="bj-link__external-icon" name="externalLinkLine" aria-hidden="true" />
  </a>
</template>
