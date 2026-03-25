import { ref } from 'vue'

function isCollapsed(): boolean {
  try {
    return globalThis.localStorage?.getItem('bj-docs-sidebar') === 'collapsed'
  } catch {
    return false
  }
}

const collapsed = ref(isCollapsed())
const mobileOpen = ref(false)

export function useSidebar() {
  function toggle() {
    collapsed.value = !collapsed.value
    try {
      globalThis.localStorage?.setItem('bj-docs-sidebar', collapsed.value ? 'collapsed' : 'expanded')
    } catch {}
  }

  function openMobile() {
    mobileOpen.value = true
  }

  function closeMobile() {
    mobileOpen.value = false
  }

  function toggleMobile() {
    mobileOpen.value = !mobileOpen.value
  }

  return { collapsed, toggle, mobileOpen, openMobile, closeMobile, toggleMobile }
}
