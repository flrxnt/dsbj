import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

export interface BjLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg'
  iconPosition?: 'left' | 'right' | 'none'
  reset?: boolean
  children?: ReactNode
}

export const BjLink = forwardRef<HTMLAnchorElement, BjLinkProps>(
  ({ size = 'md', iconPosition = 'none', reset, className, children, ...rest }, ref) => {
    const cls = [
      'bj-link',
      size !== 'md' && `bj-link--${size}`,
      iconPosition === 'left' && 'bj-link--icon-left',
      iconPosition === 'right' && 'bj-link--icon-right',
      reset && 'bj-link--reset',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <a ref={ref} className={cls} {...rest}>
        {children}
      </a>
    )
  }
)
BjLink.displayName = 'BjLink'
