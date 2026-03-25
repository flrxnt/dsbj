import type { HTMLAttributes, ReactNode } from 'react'

export interface BjBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'new'
  size?: 'sm' | 'md'
  noIcon?: boolean
  children?: ReactNode
}

export function BjBadge({
  variant = 'default',
  size = 'md',
  noIcon,
  className,
  children,
  ...rest
}: BjBadgeProps) {
  const cls = [
    'bj-badge',
    variant !== 'default' && `bj-badge--${variant}`,
    size === 'sm' && 'bj-badge--sm',
    noIcon && 'bj-badge--no-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  )
}
BjBadge.displayName = 'BjBadge'
