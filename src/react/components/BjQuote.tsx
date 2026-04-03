import type { HTMLAttributes, ReactNode } from 'react'

export interface BjQuoteProps extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'cite'> {
  accent?: boolean
  text?: string
  author?: string
  source?: string
  cite?: string
  image?: string
  children?: ReactNode
}

export function BjQuote({
  accent,
  text,
  author,
  source,
  cite: citeProp,
  image,
  className,
  children,
  ...rest
}: BjQuoteProps) {
  const cls = ['bj-quote', accent && 'bj-quote--accent', className].filter(Boolean).join(' ')

  return (
    <figure className={cls} {...rest}>
      {image ? <img className="bj-quote__image" src={image} alt="" /> : null}
      <blockquote className="bj-quote__text" cite={citeProp}>{children ?? text}</blockquote>
      {author || source ? (
        <figcaption>
          {author ? <span className="bj-quote__author">{author}</span> : null}
          {source ? <cite className="bj-quote__source">{source}</cite> : null}
        </figcaption>
      ) : null}
    </figure>
  )
}
BjQuote.displayName = 'BjQuote'
