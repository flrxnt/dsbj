<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import DocsHeader from '../components/DocsHeader.vue'
import DocsFooter from '../components/DocsFooter.vue'
import DocsSidebar from '../components/DocsSidebar.vue'
import DocsBreadcrumb from '../components/DocsBreadcrumb.vue'
import { useSidebar } from '../composables/useSidebar'

const route = useRoute()
const { t } = useI18n()
const section = computed(() => (route.meta.section as string) || '')
const { collapsed, openMobile } = useSidebar()
</script>

<template>
  <DocsHeader />
  <main id="main" role="main">
    <div class="docs-layout" :class="{ 'docs-layout--collapsed': collapsed }">
      <DocsSidebar :section="section" />
      <div class="docs-main">
        <div class="docs-main__topbar">
          <button
            class="docs-sidebar__mobile-toggle"
            :aria-label="t('sidebar.show')"
            @click="openMobile"
          >
            <i class="ri-menu-line" aria-hidden="true"></i>
            <span>{{ t('sidebar.menu') }}</span>
          </button>
          <DocsBreadcrumb />
        </div>
        <slot />
      </div>
    </div>
  </main>
  <DocsFooter />
</template>
