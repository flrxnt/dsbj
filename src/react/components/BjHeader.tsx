import { useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { BjSvgIcon } from '../icons'

export type BjHeaderProps = {
  serviceName?: string
  serviceTagline?: string
  logo?: ReactNode
  tools?: ReactNode
  nav?: ReactNode
  children?: ReactNode
} & ComponentPropsWithoutRef<'header'>

export function BjHeader({
  serviceName,
  serviceTagline,
  logo,
  tools,
  nav,
  children,
  className,
  ...rest
}: BjHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={['bj-header', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="bj-container">
        <div className="bj-header__body">
          <a className="bj-header__brand" href="/">
            {logo}
            {serviceName ? (
              <div className="bj-header__service">
                <span className="bj-header__service-title">{serviceName}</span>
                {serviceTagline ? (
                  <span className="bj-header__service-tagline">{serviceTagline}</span>
                ) : null}
              </div>
            ) : null}
          </a>
          <div className="bj-header__tools">
            {tools}
            <button
              type="button"
              className="bj-header__menu-btn"
              aria-expanded={String(menuOpen)}
              data-bj-header-menu
              onClick={() => setMenuOpen((o) => !o)}
            >
              <BjSvgIcon name={menuOpen ? 'closeLine' : 'menuLine'} />
              <span className="bj-header__menu-label">Menu</span>
            </button>
          </div>
        </div>
        <nav
          className="bj-header__nav"
          data-bj-expanded={menuOpen ? '' : undefined}
          aria-label="Navigation principale"
        >
          <ul className="bj-header__nav-list">{nav}</ul>
        </nav>
        {children}
      </div>
    </header>
  )
}

BjHeader.displayName = 'BjHeader'
