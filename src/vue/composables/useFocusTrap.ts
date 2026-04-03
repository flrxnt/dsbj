import { nextTick, watch, type Ref } from 'vue'

const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(containerRef: Ref<HTMLElement | undefined>, isOpen: Ref<boolean> | (() => boolean)) {
  let handler: ((e: KeyboardEvent) => void) | null = null

  function trap(el: HTMLElement) {
    release()
    handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    el.addEventListener('keydown', handler)
    const focusable = el.querySelectorAll<HTMLElement>(FOCUSABLE)
    if (focusable.length) focusable[0].focus()
  }

  function release() {
    if (handler && containerRef.value) {
      containerRef.value.removeEventListener('keydown', handler)
    }
    handler = null
  }

  const source = typeof isOpen === 'function' ? isOpen : () => isOpen.value

  watch(source, (val) => {
    if (val) {
      nextTick(() => {
        if (containerRef.value) trap(containerRef.value)
      })
    } else {
      release()
    }
  })

  return { trap, release }
}
