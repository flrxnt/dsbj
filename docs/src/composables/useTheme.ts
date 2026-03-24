import { ref, watchEffect } from 'vue'

function getStoredTheme(): 'light' | 'dark' {
  try {
    const val = globalThis.localStorage?.getItem('bj-docs-theme')
    if (val === 'dark') return 'dark'
  } catch {}
  return 'light'
}

const theme = ref<'light' | 'dark'>(getStoredTheme())

export function useTheme() {
  watchEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-bj-theme', theme.value)
    }
    try {
      globalThis.localStorage?.setItem('bj-docs-theme', theme.value)
    } catch {}
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
