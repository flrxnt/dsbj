import type { ComponentPropsWithoutRef } from 'react'

export type BjBreadcrumbItem = {
  label: string
  to?: string
}

export type BjBreadcrumbProps = {
  items: BjBreadcrumbItem[]
} & ComponentPropsWithoutRef<'nav'>

export function BjBreadcrumb({ items, className, ...rest }: BjBreadcrumbProps) {
  return (
    <nav
      className={['bj-breadcrumb', className].filter(Boolean).join(' ')}
      aria-label="Fil d'Ariane"
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
