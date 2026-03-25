<script lang="ts">
export interface SkiplinkItem {
  label: string
  target: string
}
export interface BjSkiplinkProps {
  links?: SkiplinkItem[]
}
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<BjSkiplinkProps>(), {
  links: () => [{ label: 'Aller au contenu', target: '#main' }],
})
</script>

<template>
  <div class="bj-skiplinks" v-bind="$attrs">
    <div class="bj-skiplinks__list">
      <a v-for="link in links" :key="link.target" class="bj-skiplinks__link" :href="link.target">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>
