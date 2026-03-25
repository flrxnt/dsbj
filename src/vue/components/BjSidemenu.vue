<script lang="ts">
export interface SidemenuLink {
  label: string
  to: string
  active?: boolean
  children?: SidemenuLink[]
}
export interface BjSidemenuProps {
  title?: string
  links: SidemenuLink[]
}
</script>

<script setup lang="ts">

defineProps<BjSidemenuProps>()
</script>

<template>
  <nav class="bj-sidemenu" aria-label="Menu latéral" v-bind="$attrs">
    <p v-if="title" class="bj-sidemenu__title">{{ title }}</p>
    <ul class="bj-sidemenu__list">
      <li v-for="link in links" :key="link.to" class="bj-sidemenu__item">
        <a
          class="bj-sidemenu__link"
          :class="{ 'bj-sidemenu__link--active': link.active }"
          :href="link.to"
          :aria-current="link.active ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
        <ul v-if="link.children?.length" class="bj-sidemenu__sublist">
          <li v-for="child in link.children" :key="child.to" class="bj-sidemenu__item">
            <a
              class="bj-sidemenu__link"
              :class="{ 'bj-sidemenu__link--active': child.active }"
              :href="child.to"
            >
              {{ child.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
