<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface BreadcrumbItem {
  label: string
  to?: string
}

const route = useRoute()

const items = computed<BreadcrumbItem[]>(() => {
  const crumbs: BreadcrumbItem[] = [{ label: 'Accueil', to: '/' }]
  const meta = route.meta.breadcrumb as BreadcrumbItem[] | undefined
  if (meta) {
    crumbs.push(...meta)
  }
  return crumbs
})
</script>

<template>
  <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
    <ol class="bj-breadcrumb__list">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="bj-breadcrumb__item"
        :aria-current="i === items.length - 1 ? 'page' : undefined"
      >
        <RouterLink v-if="item.to && i < items.length - 1" class="bj-breadcrumb__link" :to="item.to">
          {{ item.label }}
        </RouterLink>
        <template v-else>{{ item.label }}</template>
      </li>
    </ol>
  </nav>
</template>
