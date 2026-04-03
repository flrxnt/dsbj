<script lang="ts">
export interface BreadcrumbItem {
  label: string
  to?: string
}
export interface BjBreadcrumbProps {
  items: BreadcrumbItem[]
  ariaLabel?: string
}
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<BjBreadcrumbProps>(), {
  ariaLabel: "Fil d'Ariane",
})
</script>

<template>
  <nav class="bj-breadcrumb" :aria-label="ariaLabel" v-bind="$attrs">
    <ol class="bj-breadcrumb__list">
      <li v-for="(item, i) in items" :key="i" class="bj-breadcrumb__item">
        <a
          v-if="item.to && i < items.length - 1"
          class="bj-breadcrumb__link"
          :href="item.to"
        >
          {{ item.label }}
        </a>
        <span v-else aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
