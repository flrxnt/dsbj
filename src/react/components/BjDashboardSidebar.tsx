import { useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'

export type BjDashboardSidebarLink = {
  label: string
  to: string
  icon?: string
  active?: boolean
  children?: BjDashboardSidebarLink[]
}

export type BjDashboardSidebarSection = {
  title?: string
  links: BjDashboardSidebarLink[]
}

export type BjDashboardSidebarProps = {
  brandText?: string
  brandImg?: string
  brandHref?: string
  sections?: BjDashboardSidebarSection[]
  compact?: boolean
  footer?: ReactNode
} & Omit<ComponentPropsWithoutRef<'aside'>, 'children'>

function SidebarLink({ link }: { link: BjDashboardSidebarLink }) {
  return (
    <a
      className={['bj-dashboard-sidebar__link', link.active && 'bj-dashboard-sidebar__link--active']
        .filter(Boolean)
        .join(' ')}
      href={link.to}
      aria-current={link.active ? 'page' : undefined}
    >
      {link.icon ? <i className={`${link.icon} bj-dashboard-sidebar__link-icon`} aria-hidden="true" /> : null}
      <span className="bj-dashboard-sidebar__link-label">{link.label}</span>
    </a>
  )
}

function CollapsibleItem({ link }: { link: BjDashboardSidebarLink }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="bj-dashboard-sidebar__btn"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {link.icon ? <i className={`${link.icon} bj-dashboard-sidebar__link-icon`} aria-hidden="true" /> : null}
        <span className="bj-dashboard-sidebar__link-label">{link.label}</span>
      </button>
      {open && link.children ? (
        <ul className="bj-dashboard-sidebar__sublist">
          {link.children.map((child) => (
            <li key={child.to} className="bj-dashboard-sidebar__item">
              <SidebarLink link={child} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export function BjDashboardSidebar({
  brandText,
  brandImg,
  brandHref,
  sections = [],
  compact = false,
  footer,
  className,
  ...rest
}: BjDashboardSidebarProps) {
  const cls = ['bj-dashboard-sidebar', compact && 'bj-dashboard-sidebar--compact', className]
    .filter(Boolean)
    .join(' ')

  const BrandTag = brandHref ? 'a' : 'div'

  return (
    <aside className={cls} {...rest}>
      {brandImg || brandText ? (
        <BrandTag className="bj-dashboard-sidebar__brand" href={brandHref || undefined}>
          {brandImg ? <img src={brandImg} alt="" className="bj-dashboard-sidebar__brand-img" /> : null}
          {brandText ? <span className="bj-dashboard-sidebar__brand-text">{brandText}</span> : null}
        </BrandTag>
      ) : null}

      <nav className="bj-dashboard-sidebar__nav" aria-label="Dashboard">
        {sections.map((section, si) => (
          <div key={si} className="bj-dashboard-sidebar__section">
            {section.title ? <p className="bj-dashboard-sidebar__section-title">{section.title}</p> : null}
            <ul className="bj-dashboard-sidebar__list">
              {section.links.map((link) => (
                <li key={link.to} className="bj-dashboard-sidebar__item">
                  {link.children?.length ? <CollapsibleItem link={link} /> : <SidebarLink link={link} />}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {footer ? <div className="bj-dashboard-sidebar__footer">{footer}</div> : null}
    </aside>
  )
}

BjDashboardSidebar.displayName = 'BjDashboardSidebar'
