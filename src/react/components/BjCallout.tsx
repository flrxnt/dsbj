import type { HTMLAttributes, ReactNode } from 'react'

export interface BjCalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
  color?: 'default' | 'green' | 'yellow' | 'red'
  icon?: string
  title?: string
  action?: ReactNode
  children?: ReactNode
}

export function BjCallout({
  color = 'default',
  icon,
  title,
  action,
  className,
  children,
  ...rest
}: BjCalloutProps) {
  const cls = [
    'bj-callout',
    color !== 'default' && `bj-callout--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} {...rest}>
      {icon ? <i className={`bj-callout__icon ${icon}`} aria-hidden="true" /> : null}
      {title ? <p className="bj-callout__title">{title}</p> : null}
      <div className="bj-callout__text">{children}</div>
      {action ? <div className="bj-callout__btn">{action}</div> : null}
    </div>
  )
}
BjCallout.displayName = 'BjCallout'
