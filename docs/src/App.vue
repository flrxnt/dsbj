<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HomeLayout from './layouts/HomeLayout.vue'
import SectionLayout from './layouts/SectionLayout.vue'
import DocsLayout from './layouts/DocsLayout.vue'
import LegalLayout from './layouts/LegalLayout.vue'
import CookieConsent from './components/CookieConsent.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

const route = useRoute()

const isClient = ref(false)
onMounted(() => { isClient.value = true })

const layouts: Record<string, any> = {
  home: HomeLayout,
  section: SectionLayout,
  docs: DocsLayout,
  legal: LegalLayout,
}

const layout = computed(() => {
  const name = (route.meta.layout as string) || 'docs'
  return layouts[name] || DocsLayout
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
  <CookieConsent />
  <ReloadPrompt v-if="isClient" />
</template>
