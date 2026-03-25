import type { ComponentPropsWithoutRef } from 'react'

export type BjSkiplinkLink = {
  label: string
  target: string
}

export type BjSkiplinkProps = {
  links?: BjSkiplinkLink[]
} & ComponentPropsWithoutRef<'div'>

export function BjSkiplink({
  links = [{ label: 'Aller au contenu', target: '#main' }],
  className,
  ...rest
}: BjSkiplinkProps) {
  return (
    <div className={['bj-skiplinks', className].filter(Boolean).join(' ')} {...rest}>
      <div className="bj-skiplinks__list">
        {links.map((link) => (
          <a key={link.target} className="bj-skiplinks__link" href={link.target}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

BjSkiplink.displayName = 'BjSkiplink'
