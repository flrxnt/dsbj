<script lang="ts">
export interface BjHeaderProps {
  serviceName?: string
  serviceTagline?: string
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BjSvgIcon } from '../icons'

defineProps<BjHeaderProps>()

const menuOpen = ref(false)

const menuIconName = computed(() => (menuOpen.value ? 'closeLine' : 'menuLine'))

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

defineExpose({ menuOpen, toggleMenu })
</script>

<template>
  <header class="bj-header" v-bind="$attrs">
    <div class="bj-container">
      <div class="bj-header__body">
        <slot name="brand">
          <a class="bj-header__brand" href="/">
            <slot name="logo" />
            <div v-if="serviceName" class="bj-header__service">
              <span class="bj-header__service-title">{{ serviceName }}</span>
              <span v-if="serviceTagline" class="bj-header__service-tagline">{{ serviceTagline }}</span>
            </div>
          </a>
        </slot>
        <div class="bj-header__tools">
          <slot name="tools" />
          <button
            type="button"
            class="bj-header__menu-btn"
            :aria-expanded="menuOpen"
            data-bj-header-menu
            @click="toggleMenu"
          >
            <BjSvgIcon :name="menuIconName" />
            <span class="bj-header__menu-label">Menu</span>
          </button>
        </div>
      </div>
      <nav
        class="bj-header__nav"
        :data-bj-expanded="menuOpen ? '' : undefined"
        aria-label="Navigation principale"
      >
        <ul class="bj-header__nav-list">
          <slot name="nav" />
        </ul>
      </nav>
    </div>
  </header>
</template>
