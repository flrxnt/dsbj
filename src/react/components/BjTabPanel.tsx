import type { ReactNode } from 'react'

export interface BjTabPanelProps {
  active: boolean
  index: number
  tabsId: string
  children?: ReactNode
  className?: string
}

export function BjTabPanel({ active, index, tabsId, children, className }: BjTabPanelProps) {
  return (
    <div
      id={`${tabsId}-panel-${index}`}
      className={['bj-tabs__panel', className].filter(Boolean).join(' ')}
      role="tabpanel"
      aria-labelledby={`${tabsId}-tab-${index}`}
      tabIndex={active ? 0 : undefined}
      data-bj-expanded={active ? '' : undefined}
      style={{ display: active ? 'block' : 'none' }}
    >
      {children}
    </div>
  )
}

BjTabPanel.displayName = 'BjTabPanel'
