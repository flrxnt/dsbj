import { type ReactNode } from 'react'

export interface BjTooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children?: ReactNode
  className?: string
}

export function BjTooltip({ text, position = 'top', children, className }: BjTooltipProps) {
  return (
    <span
      className={[
        'bj-tooltip',
        position !== 'top' && `bj-tooltip--${position}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
      <span className="bj-tooltip__content" role="tooltip">
        {text}
      </span>
    </span>
  )
}

BjTooltip.displayName = 'BjTooltip'
