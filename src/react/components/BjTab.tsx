import { useId, useRef, type KeyboardEvent, type ReactNode } from 'react'

export interface BjTabProps {
  tabs: string[]
  activeIndex: number
  onChange: (index: number) => void
  id?: string
  children?: ReactNode
  className?: string
}

export function BjTab({ tabs, activeIndex, onChange, id: idProp, children, className }: BjTabProps) {
  const autoId = useId()
  const tabsId = idProp || `bj-tabs-${autoId.replace(/:/g, '')}`
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
            id={`${tabsId}-tab-${i}`}
            type="button"
            role="tab"
            className="bj-tabs__tab"
            aria-selected={activeIndex === i}
            aria-controls={`${tabsId}-panel-${i}`}
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
