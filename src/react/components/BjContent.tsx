import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjContentProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export function BjContent({ children, className, ...rest }: BjContentProps) {
  return (
    <div className={['bj-content', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
}

BjContent.displayName = 'BjContent'
