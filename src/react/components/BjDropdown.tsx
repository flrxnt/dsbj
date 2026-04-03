import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react'

export interface BjDropdownProps {
  align?: 'left' | 'right'
  direction?: 'down' | 'up'
  size?: 'sm' | 'md'
  trigger: ReactNode
  children?: ReactNode
  className?: string
}

export function BjDropdown({
  align = 'left',
  direction = 'down',
  size = 'md',
  trigger,
  children,
  className,
}: BjDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const baseId = useId()
  const menuId = `bj-dropdown-menu-${baseId.replace(/:/g, '')}`

  const open = useCallback(() => {
    setIsOpen(true)
    requestAnimationFrame(() => {
      const first = menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])')
      first?.focus()
    })
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) close()
    else open()
  }, [isOpen, open, close])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [isOpen, close])

  function getItems(): HTMLElement[] {
    if (!menuRef.current) return []
    return Array.from(menuRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])'))
  }

  function onTriggerKeydown(e: React.KeyboardEvent) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      if (!isOpen) open()
    }
  }

  function onMenuKeydown(e: React.KeyboardEvent) {
    const items = getItems()
    const idx = items.indexOf(document.activeElement as HTMLElement)

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        const next = idx < items.length - 1 ? idx + 1 : 0
        items[next]?.focus()
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        const prev = idx > 0 ? idx - 1 : items.length - 1
        items[prev]?.focus()
        break
      }
      case 'Home': {
        e.preventDefault()
        items[0]?.focus()
        break
      }
      case 'End': {
        e.preventDefault()
        items[items.length - 1]?.focus()
        break
      }
      case 'Escape': {
        e.preventDefault()
        close()
        triggerRef.current?.focus()
        break
      }
      case 'Tab': {
        close()
        break
      }
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={[
        'bj-dropdown',
        align === 'right' && 'bj-dropdown--right',
        direction === 'up' && 'bj-dropdown--up',
        size === 'sm' && 'bj-dropdown--sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        ref={triggerRef}
        type="button"
        className="bj-dropdown__trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={e => {
          e.stopPropagation()
          toggle()
        }}
        onKeyDown={onTriggerKeydown}
      >
        {trigger}
      </button>
      {isOpen ? (
        <ul
          ref={menuRef}
          id={menuId}
          className="bj-dropdown__menu"
          data-bj-expanded
          role="menu"
          style={{ display: 'block' }}
          onKeyDown={onMenuKeydown}
        >
          {children}
        </ul>
      ) : null}
    </div>
  )
}

BjDropdown.displayName = 'BjDropdown'
