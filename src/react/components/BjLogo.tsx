import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjLogoProps = {
  size?: 'md' | 'lg' | 'xl'
  href?: string
  motto?: string
  tagline?: string
  src?: string
  alt?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export function BjLogo({
  size = 'md',
  href,
  motto,
  tagline,
  src,
  alt = 'Logo',
  children,
  className,
  ...rest
}: BjLogoProps) {
  const cls = ['bj-logo', size !== 'md' && `bj-logo--${size}`, className].filter(Boolean).join(' ')

  const image = src ? <img className="bj-logo__img" src={src} alt={alt} /> : children

  return (
    <div className={cls} {...rest}>
      {href ? (
        <a href={href} className="bj-logo__link">
          {image}
        </a>
      ) : (
        image
      )}
      {motto ? <p className="bj-logo__motto">{motto}</p> : null}
      {tagline ? <p className="bj-logo__tagline">{tagline}</p> : null}
    </div>
  )
}

BjLogo.displayName = 'BjLogo'
