import { type ReactNode } from 'react'

export interface BjTabPanelProps {
  active: boolean
  children?: ReactNode
  className?: string
}

export function BjTabPanel({ active, children, className }: BjTabPanelProps) {
  return (
    <div
      className={['bj-tabs__panel', className].filter(Boolean).join(' ')}
      role="tabpanel"
      data-bj-expanded={active ? '' : undefined}
      style={{ display: active ? 'block' : 'none' }}
    >
      {children}
    </div>
  )
}

BjTabPanel.displayName = 'BjTabPanel'
