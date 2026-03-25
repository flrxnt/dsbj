import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

interface BjTileBase {
  horizontal?: boolean
  children?: ReactNode
}

type BjTileAsAnchor = BjTileBase & { as?: 'a' } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BjTileBase | 'as'
>
type BjTileAsDiv = BjTileBase & { as: 'div' } & Omit<HTMLAttributes<HTMLDivElement>, keyof BjTileBase | 'as'>

export type BjTileProps = BjTileAsAnchor | BjTileAsDiv

export const BjTile = forwardRef<HTMLDivElement | HTMLAnchorElement, BjTileProps>(
  ({ horizontal, as: Tag = 'a', className, children, ...rest }, ref) => {
    const cls = ['bj-tile', horizontal && 'bj-tile--horizontal', className].filter(Boolean).join(' ')

    return (
      <Tag ref={ref as never} className={cls} {...(rest as Record<string, unknown>)}>
        {children}
      </Tag>
    )
  }
)
BjTile.displayName = 'BjTile'
