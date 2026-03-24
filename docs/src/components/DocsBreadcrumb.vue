<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

interface BreadcrumbItem {
  labelKey: string
  to?: string
}

const route = useRoute()
const { t } = useI18n()

const items = computed<BreadcrumbItem[]>(() => {
  const crumbs: BreadcrumbItem[] = [{ labelKey: 'common.home', to: '/' }]
  const meta = route.meta.breadcrumb as BreadcrumbItem[] | undefined
  if (meta) {
    crumbs.push(...meta)
  }
  return crumbs
})
</script>

<template>
  <nav class="bj-breadcrumb" :aria-label="t('common.breadcrumb-aria')">
    <ol class="bj-breadcrumb__list">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="bj-breadcrumb__item"
        :aria-current="i === items.length - 1 ? 'page' : undefined"
      >
        <RouterLink v-if="item.to && i < items.length - 1" class="bj-breadcrumb__link" :to="item.to">
          {{ t(item.labelKey) }}
        </RouterLink>
        <template v-else>{{ t(item.labelKey) }}</template>
      </li>
    </ol>
  </nav>
</template>
