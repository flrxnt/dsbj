import type { HTMLAttributes, ReactNode } from 'react'

export interface BjQuoteProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  accent?: boolean
  text?: string
  author?: string
  source?: string
  image?: string
  children?: ReactNode
}

export function BjQuote({
  accent,
  text,
  author,
  source,
  image,
  className,
  children,
  ...rest
}: BjQuoteProps) {
  const cls = ['bj-quote', accent && 'bj-quote--accent', className].filter(Boolean).join(' ')

  return (
    <figure className={cls} {...rest}>
      {image ? <img className="bj-quote__image" src={image} alt="" /> : null}
      <blockquote className="bj-quote__text">{children ?? text}</blockquote>
      {author || source ? (
        <figcaption>
          {author ? <span className="bj-quote__author">{author}</span> : null}
          {source ? <span className="bj-quote__source">{source}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  )
}
BjQuote.displayName = 'BjQuote'
