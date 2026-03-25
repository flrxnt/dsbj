<script setup lang="ts">
import DocsHeader from '../components/DocsHeader.vue'
import DocsFooter from '../components/DocsFooter.vue'
import DocsBreadcrumb from '../components/DocsBreadcrumb.vue'
</script>

<template>
  <DocsHeader />
  <main id="main" role="main" style="min-height: calc(100vh - 10rem)">
    <div class="bj-container" style="padding-top: var(--bj-spacing-6v); padding-bottom: var(--bj-spacing-12v)">
      <DocsBreadcrumb />
      <slot />
    </div>
  </main>
  <DocsFooter />
</template>
