import type { HTMLAttributes, ReactNode } from 'react'

export interface BjCardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode
}

export function BjCardFooter({ className, children, ...rest }: BjCardFooterProps) {
  const cls = ['bj-card__footer', className].filter(Boolean).join(' ')
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  )
}
BjCardFooter.displayName = 'BjCardFooter'
