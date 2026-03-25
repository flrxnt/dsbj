import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

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

  const open = useCallback(() => setIsOpen(true), [])

  const close = useCallback(() => setIsOpen(false), [])

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
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) close()
    }
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [isOpen, close])

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
      <div
        className="bj-dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={e => {
          e.stopPropagation()
          toggle()
        }}
      >
        {trigger}
      </div>
      {isOpen ? (
        <ul className="bj-dropdown__menu" data-bj-expanded role="menu" style={{ display: 'block' }}>
          {children}
        </ul>
      ) : null}
    </div>
  )
}

BjDropdown.displayName = 'BjDropdown'
