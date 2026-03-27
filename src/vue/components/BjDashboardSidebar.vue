<script lang="ts">
export interface DashboardSidebarLink {
  label: string
  to: string
  icon?: string
  active?: boolean
  children?: DashboardSidebarLink[]
}

export interface DashboardSidebarSection {
  title?: string
  links: DashboardSidebarLink[]
}

export interface BjDashboardSidebarProps {
  brandText?: string
  brandImg?: string
  brandHref?: string
  sections?: DashboardSidebarSection[]
  compact?: boolean
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<BjDashboardSidebarProps>(), {
  sections: () => [],
  compact: false,
})

const expanded = ref<Set<string>>(new Set())

function toggle(key: string) {
  const next = new Set(expanded.value)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  expanded.value = next
}
</script>

<template>
  <aside
    class="bj-dashboard-sidebar"
    :class="{ 'bj-dashboard-sidebar--compact': compact }"
    v-bind="$attrs"
  >
    <component
      :is="brandHref ? 'a' : 'div'"
      v-if="brandImg || brandText"
      class="bj-dashboard-sidebar__brand"
      :href="brandHref || undefined"
    >
      <img v-if="brandImg" :src="brandImg" alt="" class="bj-dashboard-sidebar__brand-img" />
      <span v-if="brandText" class="bj-dashboard-sidebar__brand-text">{{ brandText }}</span>
    </component>

    <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
      <div v-for="(section, si) in sections" :key="si" class="bj-dashboard-sidebar__section">
        <p v-if="section.title" class="bj-dashboard-sidebar__section-title">{{ section.title }}</p>
        <ul class="bj-dashboard-sidebar__list">
          <li v-for="link in section.links" :key="link.to" class="bj-dashboard-sidebar__item">
            <template v-if="link.children?.length">
              <button
                type="button"
                class="bj-dashboard-sidebar__btn"
                :aria-expanded="expanded.has(link.to)"
                @click="toggle(link.to)"
              >
                <i v-if="link.icon" :class="link.icon" class="bj-dashboard-sidebar__link-icon" aria-hidden="true" />
                <span class="bj-dashboard-sidebar__link-label">{{ link.label }}</span>
              </button>
              <ul v-if="expanded.has(link.to)" class="bj-dashboard-sidebar__sublist">
                <li v-for="child in link.children" :key="child.to" class="bj-dashboard-sidebar__item">
                  <a
                    class="bj-dashboard-sidebar__link"
                    :class="{ 'bj-dashboard-sidebar__link--active': child.active }"
                    :href="child.to"
                    :aria-current="child.active ? 'page' : undefined"
                  >
                    <i v-if="child.icon" :class="child.icon" class="bj-dashboard-sidebar__link-icon" aria-hidden="true" />
                    <span class="bj-dashboard-sidebar__link-label">{{ child.label }}</span>
                  </a>
                </li>
              </ul>
            </template>
            <a
              v-else
              class="bj-dashboard-sidebar__link"
              :class="{ 'bj-dashboard-sidebar__link--active': link.active }"
              :href="link.to"
              :aria-current="link.active ? 'page' : undefined"
            >
              <i v-if="link.icon" :class="link.icon" class="bj-dashboard-sidebar__link-icon" aria-hidden="true" />
              <span class="bj-dashboard-sidebar__link-label">{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div v-if="$slots.footer" class="bj-dashboard-sidebar__footer">
      <slot name="footer" />
    </div>
  </aside>
</template>
