import type { HTMLAttributes, ReactNode } from 'react'

export interface BjHighlightProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg'
  children?: ReactNode
}

export function BjHighlight({ size = 'md', className, children, ...rest }: BjHighlightProps) {
  const cls = ['bj-highlight', size !== 'md' && `bj-highlight--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  )
}
BjHighlight.displayName = 'BjHighlight'
