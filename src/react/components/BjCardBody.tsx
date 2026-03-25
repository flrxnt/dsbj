import type { HTMLAttributes, ReactNode } from 'react'

export interface BjCardBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode
}

export function BjCardBody({ className, children, ...rest }: BjCardBodyProps) {
  const cls = ['bj-card__body', className].filter(Boolean).join(' ')
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  )
}
BjCardBody.displayName = 'BjCardBody'
