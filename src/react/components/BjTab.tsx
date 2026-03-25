import { useRef, type KeyboardEvent, type ReactNode } from 'react'

export interface BjTabProps {
  tabs: string[]
  activeIndex: number
  onChange: (index: number) => void
  children?: ReactNode
  className?: string
}

export function BjTab({ tabs, activeIndex, onChange, children, className }: BjTabProps) {
  const listRef = useRef<HTMLDivElement>(null)

  function onKeydown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (e.key === 'ArrowRight') next = (index + 1) % tabs.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = tabs.length - 1
    else return
    e.preventDefault()
    onChange(next)
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('button[role="tab"]')
    buttons?.[next]?.focus()
  }

  return (
    <div className={['bj-tabs', className].filter(Boolean).join(' ')}>
      <div ref={listRef} className="bj-tabs__list" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            className="bj-tabs__tab"
            aria-selected={activeIndex === i}
            tabIndex={activeIndex === i ? 0 : -1}
            onClick={() => onChange(i)}
            onKeyDown={e => onKeydown(e, i)}
          >
            {tab}
          </button>
        ))}
      </div>
      {children}
    </div>
  )
}

BjTab.displayName = 'BjTab'
