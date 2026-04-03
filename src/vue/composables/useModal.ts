import { ref, onMounted, onBeforeUnmount, nextTick, type Ref } from 'vue'
import { useFocusTrap } from './useFocusTrap'

export function useModal(initialOpen = false, containerRef?: Ref<HTMLElement | undefined>) {
  const isOpen = ref(initialOpen)
  let previousFocus: HTMLElement | null = null

  if (containerRef) {
    useFocusTrap(containerRef, isOpen)
  }

  function open() {
    previousFocus = document.activeElement as HTMLElement
    isOpen.value = true
    document.body.classList.add('bj-modal-open')
  }

  function close() {
    isOpen.value = false
    document.body.classList.remove('bj-modal-open')
    nextTick(() => previousFocus?.focus())
  }

  function toggle() {
    if (isOpen.value) close()
    else open()
  }

  function onEscape(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen.value) close()
  }

  onMounted(() => document.addEventListener('keydown', onEscape))
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onEscape)
    if (isOpen.value) document.body.classList.remove('bj-modal-open')
  })

  return { isOpen, open, close, toggle }
}
