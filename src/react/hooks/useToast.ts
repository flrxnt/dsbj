import { useState, useCallback } from 'react'

export type ToastType = 'info' | 'success' | 'warning' | 'error'

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export type ToastItem = {
  id: string
  title?: string
  text: string
  type: ToastType
  duration: number
  removing: boolean
}

export type ToastOptions = {
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
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const remove = useCallback((id: string) => {
    setToasts(prev => {
      const item = prev.find(t => t.id === id)
      if (!item || item.removing) return prev
      return prev.map(t => (t.id === id ? { ...t, removing: true } : t))
    })
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 300)
  }, [])

  const add = useCallback(
    (options: ToastOptions) => {
      const item: ToastItem = {
        id: Math.random().toString(36).slice(2, 9),
        title: options.title,
        text: options.text,
        type: options.type ?? 'info',
        duration: options.duration ?? 5000,
        removing: false,
      }

      setToasts(prev => {
        const visible = prev.filter(t => !t.removing)
        let next = prev
        if (visible.length >= MAX_VISIBLE && visible[0]) {
          const firstId = visible[0].id
          next = prev.map(t => (t.id === firstId ? { ...t, removing: true } : t))
          setTimeout(() => {
            setToasts(p => p.filter(t => t.id !== firstId))
          }, 300)
        }
        return [...next.filter(t => !t.removing || next === prev ? true : t.id !== visible[0]?.id), item]
      })

      setToasts(prev => {
        const visible = prev.filter(t => !t.removing)
        if (visible.length >= MAX_VISIBLE) {
          const toRemove = visible[0]
          if (toRemove && !prev.find(t => t.id === toRemove.id)?.removing) {
            remove(toRemove.id)
          }
        }
        return prev
      })

      setToasts(prev => {
        const nonRemoving = prev.filter(t => !t.removing)
        let base = prev
        if (nonRemoving.length >= MAX_VISIBLE) {
          const oldest = nonRemoving[0]
          if (oldest) {
            base = prev.map(t => (t.id === oldest.id ? { ...t, removing: true } : t))
            setTimeout(() => {
              setToasts(p => p.filter(t => t.id !== oldest.id))
            }, 0)
          }
        }
        return [...base.filter(t => t.removing === false || !base.some(b => b.id === t.id && b.removing)), item]
      })
    },
    [remove],
  )

  const getIcon = useCallback((type: ToastType) => ICONS[type], [])

  return { toasts, add, remove, getIcon }
}
