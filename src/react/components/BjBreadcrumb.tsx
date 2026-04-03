import type { ComponentPropsWithoutRef } from 'react'

export type BjBreadcrumbItem = {
  label: string
  to?: string
}

export type BjBreadcrumbProps = {
  items: BjBreadcrumbItem[]
  ariaLabel?: string
} & ComponentPropsWithoutRef<'nav'>

export function BjBreadcrumb({ items, ariaLabel = "Fil d'Ariane", className, ...rest }: BjBreadcrumbProps) {
  return (
    <nav
      className={['bj-breadcrumb', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      {...rest}
    >
      <ol className="bj-breadcrumb__list">
        {items.map((item, i) => (
          <li key={i} className="bj-breadcrumb__item">
            {item.to && i < items.length - 1 ? (
              <a className="bj-breadcrumb__link" href={item.to}>
                {item.label}
              </a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

BjBreadcrumb.displayName = 'BjBreadcrumb'
