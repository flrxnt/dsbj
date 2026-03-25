<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { sidebars } from '../data/navigation'
import { useSidebar } from '../composables/useSidebar'

const props = defineProps<{ section: string }>()
const route = useRoute()
const { t } = useI18n()
const { collapsed, toggle, mobileOpen, closeMobile } = useSidebar()

const groups = computed(() => sidebars[props.section] || [])

watch(() => route.path, () => {
  closeMobile()
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && mobileOpen.value) {
    closeMobile()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="docs-sidebar-overlay">
      <div
        v-if="mobileOpen"
        class="docs-sidebar__overlay"
        @click="closeMobile"
      />
    </Transition>
  </Teleport>

  <aside
    class="docs-sidebar"
    :class="{ 'docs-sidebar--mobile-open': mobileOpen }"
    :aria-label="t('sidebar.aria-label')"
  >
    <div class="docs-sidebar__head">
      <button
        class="docs-sidebar__toggle"
        :aria-label="collapsed ? t('sidebar.show') : t('sidebar.hide')"
        :title="collapsed ? t('sidebar.show') : t('sidebar.hide')"
        @click="toggle"
      >
        <i :class="collapsed ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'" aria-hidden="true"></i>
      </button>
      <button
        class="docs-sidebar__close"
        :aria-label="t('sidebar.hide')"
        @click="closeMobile"
      >
        <i class="ri-close-line" aria-hidden="true"></i>
      </button>
    </div>

    <div class="docs-sidebar__content">
      <template v-for="(group, gi) in groups" :key="gi">
        <p class="docs-sidebar__title" :style="gi > 0 ? 'margin-top: var(--bj-spacing-4v)' : undefined">
          {{ group.i18nKey ? t(group.i18nKey) : group.title }}
        </p>
        <nav class="docs-sidebar__list">
          <RouterLink
            v-for="link in group.links"
            :key="link.to"
            :to="link.to"
            class="docs-sidebar__link"
            :class="{ 'docs-sidebar__link--active': route.path === link.to }"
            :aria-current="route.path === link.to ? 'page' : undefined"
          >
            {{ link.i18nKey ? t(link.i18nKey) : link.label }}
          </RouterLink>
        </nav>
      </template>
    </div>
  </aside>
</template>
