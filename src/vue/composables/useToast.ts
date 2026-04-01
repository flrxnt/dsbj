import { ref, type Ref } from 'vue'

export type ToastType = 'info' | 'success' | 'warning' | 'error'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface ToastItem {
  id: string
  title?: string
  text: string
  type: ToastType
  duration: number
  removing: boolean
}

export interface ToastOptions {
  title?: string
  text: string
  type?: ToastType
  duration?: number
}

const ICONS: Record<ToastType, string> = {
  info: 'informationLine',
  success: 'checkLine',
  warning: 'alertLine',
  error: 'closeCircleLine',
}

const MAX_VISIBLE = 5

export function useToast() {
  const toasts: Ref<ToastItem[]> = ref([])

  function add(options: ToastOptions) {
    const item: ToastItem = {
      id: Math.random().toString(36).slice(2, 9),
      title: options.title,
      text: options.text,
      type: options.type ?? 'info',
      duration: options.duration ?? 5000,
      removing: false,
    }

    if (toasts.value.filter(t => !t.removing).length >= MAX_VISIBLE) {
      remove(toasts.value[0].id)
    }

    toasts.value.push(item)

    if (item.duration > 0) {
      setTimeout(() => remove(item.id), item.duration)
    }

    return item.id
  }

  function remove(id: string) {
    const item = toasts.value.find(t => t.id === id)
    if (!item || item.removing) return
    item.removing = true
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, 300)
  }

  function getIcon(type: ToastType) {
    return ICONS[type]
  }

  return { toasts, add, remove, getIcon }
}
