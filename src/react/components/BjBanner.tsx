import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjBannerProps = {
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  theme?: 'light' | 'dark' | 'green' | 'yellow' | 'red' | 'plain'
  image?: string
  title?: string
  text?: string
  actions?: ReactNode
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export function BjBanner({
  size = 'md',
  align = 'left',
  theme = 'dark',
  image,
  title,
  text,
  actions,
  children,
  className,
  ...rest
}: BjBannerProps) {
  const cls = [
    'bj-banner',
    size !== 'md' && `bj-banner--${size}`,
    align !== 'left' && `bj-banner--${align}`,
    `bj-banner--${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} {...rest}>
      {image ? (
        <div
          className="bj-banner__img"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-hidden="true"
        />
      ) : null}
      <div className="bj-banner__overlay" />
      <div className="bj-banner__body">
        {title ? <h1 className="bj-banner__title">{title}</h1> : null}
        {text ? <p className="bj-banner__text">{text}</p> : null}
        {actions ? <div className="bj-banner__actions">{actions}</div> : null}
        {children}
      </div>
    </div>
  )
}

BjBanner.displayName = 'BjBanner'
