import type { ComponentPropsWithoutRef } from 'react'

export type BjSummaryLink = {
  label: string
  anchor: string
}

export type BjSummaryProps = {
  title?: string
  links: BjSummaryLink[]
} & ComponentPropsWithoutRef<'nav'>

export function BjSummary({ title = 'Sommaire', links, className, ...rest }: BjSummaryProps) {
  return (
    <nav
      className={['bj-summary', className].filter(Boolean).join(' ')}
      aria-label={title}
      {...rest}
    >
      <p className="bj-summary__title">{title}</p>
      <ul className="bj-summary__list">
        {links.map((link) => (
          <li key={link.anchor}>
            <a className="bj-summary__link" href={link.anchor}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

BjSummary.displayName = 'BjSummary'
