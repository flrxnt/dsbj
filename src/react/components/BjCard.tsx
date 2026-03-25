import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

export interface BjCardBaseProps {
  horizontal?: boolean
  flat?: boolean
  highlight?: boolean
  link?: boolean
  as?: 'article' | 'div' | 'a'
  children?: ReactNode
}

type BjCardAsArticle = BjCardBaseProps & { as?: 'article' } & Omit<
  HTMLAttributes<HTMLElement>,
  keyof BjCardBaseProps
>
type BjCardAsDiv = BjCardBaseProps & { as: 'div' } & Omit<HTMLAttributes<HTMLDivElement>, keyof BjCardBaseProps>
type BjCardAsAnchor = BjCardBaseProps & { as: 'a' } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BjCardBaseProps
>

export type BjCardProps = BjCardAsArticle | BjCardAsDiv | BjCardAsAnchor

export const BjCard = forwardRef<HTMLElement | HTMLAnchorElement, BjCardProps>(
  (
    { horizontal, flat, highlight, link, as: Tag = 'article', className, children, ...rest },
    ref
  ) => {
    const cls = [
      'bj-card',
      horizontal && 'bj-card--horizontal',
      flat && 'bj-card--flat',
      highlight && 'bj-card--highlight',
      link && 'bj-card--link',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Tag ref={ref as never} className={cls} {...(rest as Record<string, unknown>)}>
        {children}
      </Tag>
    )
  }
)
BjCard.displayName = 'BjCard'
