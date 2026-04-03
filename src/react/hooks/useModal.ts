import { useState, useCallback, useEffect, useRef, type RefObject } from 'react'
import { useFocusTrap } from './useFocusTrap'

export function useModal(initial = false, containerRef?: RefObject<HTMLElement | null>) {
  const [isOpen, setIsOpen] = useState(initial)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  if (containerRef) {
    useFocusTrap(containerRef, isOpen)
  }

  const open = useCallback(() => {
    previousFocusRef.current = document.activeElement as HTMLElement
    setIsOpen(true)
    document.body.classList.add('bj-modal-open')
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.classList.remove('bj-modal-open')
    previousFocusRef.current?.focus()
    previousFocusRef.current = null
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) close()
    else open()
  }, [isOpen, open, close])

  useEffect(() => {
    return () => {
      document.body.classList.remove('bj-modal-open')
    }
  }, [])

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close()
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [isOpen, close])

  return { isOpen, open, close, toggle }
}
