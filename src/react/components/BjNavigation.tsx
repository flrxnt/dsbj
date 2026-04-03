import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjNavigationProps = {
  ariaLabel?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'nav'>

export function BjNavigation({ ariaLabel = 'Navigation', children, className, ...rest }: BjNavigationProps) {
  return (
    <nav
      className={['bj-nav', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      {...rest}
    >
      <ul className="bj-nav__list">{children}</ul>
    </nav>
  )
}

BjNavigation.displayName = 'BjNavigation'
