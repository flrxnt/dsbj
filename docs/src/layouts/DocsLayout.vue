<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DocsHeader from '../components/DocsHeader.vue'
import DocsFooter from '../components/DocsFooter.vue'
import DocsSidebar from '../components/DocsSidebar.vue'
import DocsBreadcrumb from '../components/DocsBreadcrumb.vue'
import { useSidebar } from '../composables/useSidebar'

const route = useRoute()
const section = computed(() => (route.meta.section as string) || '')
const { collapsed } = useSidebar()
</script>

<template>
  <DocsHeader />
  <main id="main" role="main">
    <div class="docs-layout" :class="{ 'docs-layout--collapsed': collapsed }">
      <DocsSidebar :section="section" />
      <div class="docs-main">
        <DocsBreadcrumb />
        <slot />
      </div>
    </div>
  </main>
  <DocsFooter />
</template>
