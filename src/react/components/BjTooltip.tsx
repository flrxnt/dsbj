import { useCallback, useId, useRef, useState, type ReactNode } from 'react'

export interface BjTooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children?: ReactNode
  className?: string
}

export function BjTooltip({ text, position = 'top', children, className }: BjTooltipProps) {
  const [visible, setVisible] = useState(false)
  const baseId = useId()
  const tooltipId = `bj-tooltip-${baseId.replace(/:/g, '')}`
  const triggerRef = useRef<HTMLSpanElement>(null)

  const show = useCallback(() => setVisible(true), [])
  const hide = useCallback(() => setVisible(false), [])

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape' && visible) {
      setVisible(false)
    }
  }

  return (
    <span
      ref={triggerRef}
      className={[
        'bj-tooltip',
        position !== 'top' && `bj-tooltip--${position}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={onKeyDown}
    >
      <span aria-describedby={tooltipId}>
        {children}
      </span>
      <span
        id={tooltipId}
        className="bj-tooltip__content"
        role="tooltip"
        aria-hidden={!visible}
      >
        {text}
      </span>
    </span>
  )
}

BjTooltip.displayName = 'BjTooltip'
