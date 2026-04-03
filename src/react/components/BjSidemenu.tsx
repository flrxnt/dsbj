import type { ComponentPropsWithoutRef } from 'react'

export type BjSidemenuLink = {
  label: string
  to: string
  active?: boolean
  children?: BjSidemenuLink[]
}

export type BjSidemenuProps = {
  title?: string
  links: BjSidemenuLink[]
  ariaLabel?: string
} & ComponentPropsWithoutRef<'nav'>

function SidemenuSublist({ links }: { links: BjSidemenuLink[] }) {
  return (
    <ul className="bj-sidemenu__sublist">
      {links.map((child) => (
        <li key={child.to} className="bj-sidemenu__item">
          <a
            className={['bj-sidemenu__link', child.active && 'bj-sidemenu__link--active']
              .filter(Boolean)
              .join(' ')}
            href={child.to}
            aria-current={child.active ? 'page' : undefined}
          >
            {child.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function BjSidemenu({ title, links, ariaLabel = 'Menu latéral', className, ...rest }: BjSidemenuProps) {
  return (
    <nav
      className={['bj-sidemenu', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      {...rest}
    >
      {title ? <p className="bj-sidemenu__title">{title}</p> : null}
      <ul className="bj-sidemenu__list">
        {links.map((link) => (
          <li key={link.to} className="bj-sidemenu__item">
            <a
              className={['bj-sidemenu__link', link.active && 'bj-sidemenu__link--active']
                .filter(Boolean)
                .join(' ')}
              href={link.to}
              aria-current={link.active ? 'page' : undefined}
            >
              {link.label}
            </a>
            {link.children?.length ? <SidemenuSublist links={link.children} /> : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

BjSidemenu.displayName = 'BjSidemenu'
