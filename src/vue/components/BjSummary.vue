<script lang="ts">
export interface SummaryLink {
  label: string
  anchor: string
}
export interface BjSummaryProps {
  title?: string
  links: SummaryLink[]
}
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<BjSummaryProps>(), {
  title: 'Sommaire',
})
</script>

<template>
  <nav class="bj-summary" :aria-label="title" v-bind="$attrs">
    <p class="bj-summary__title">{{ title }}</p>
    <ul class="bj-summary__list">
      <li v-for="link in links" :key="link.anchor">
        <a class="bj-summary__link" :href="link.anchor">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>
