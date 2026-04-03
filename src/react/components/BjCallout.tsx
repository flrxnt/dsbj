import type { HTMLAttributes, ReactNode } from 'react'

export interface BjCalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title' | 'role'> {
  color?: 'default' | 'green' | 'yellow' | 'red'
  icon?: string
  title?: string
  action?: ReactNode
  role?: 'alert' | 'status' | 'note'
  children?: ReactNode
}

export function BjCallout({
  color = 'default',
  icon,
  title,
  action,
  role: roleProp,
  className,
  children,
  ...rest
}: BjCalloutProps) {
  const effectiveRole = roleProp === 'note' ? undefined : roleProp

  const cls = [
    'bj-callout',
    color !== 'default' && `bj-callout--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} role={effectiveRole} {...rest}>
      {icon ? <i className={`bj-callout__icon ${icon}`} aria-hidden="true" /> : null}
      {title ? <p className="bj-callout__title">{title}</p> : null}
      <div className="bj-callout__text">{children}</div>
      {action ? <div className="bj-callout__btn">{action}</div> : null}
    </div>
  )
}
BjCallout.displayName = 'BjCallout'
