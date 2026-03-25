import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjNavigationProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<'nav'>

export function BjNavigation({ children, className, ...rest }: BjNavigationProps) {
  return (
    <nav
      className={['bj-nav', className].filter(Boolean).join(' ')}
      aria-label="Navigation"
      {...rest}
    >
      <ul className="bj-nav__list">{children}</ul>
    </nav>
  )
}

BjNavigation.displayName = 'BjNavigation'
