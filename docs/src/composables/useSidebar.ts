import { ref } from 'vue'

function isCollapsed(): boolean {
  try {
    return globalThis.localStorage?.getItem('bj-docs-sidebar') === 'collapsed'
  } catch {
    return false
  }
}

const collapsed = ref(isCollapsed())

export function useSidebar() {
  function toggle() {
    collapsed.value = !collapsed.value
    try {
      globalThis.localStorage?.setItem('bj-docs-sidebar', collapsed.value ? 'collapsed' : 'expanded')
    } catch {}
  }

  return { collapsed, toggle }
}
