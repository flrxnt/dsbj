import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import { BjSvgIcon } from '../icons'

export interface BjLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg'
  iconPosition?: 'left' | 'right' | 'none'
  reset?: boolean
  external?: boolean
  children?: ReactNode
}

export const BjLink = forwardRef<HTMLAnchorElement, BjLinkProps>(
  ({ size = 'md', iconPosition = 'none', reset, external, className, children, target, rel, ...rest }, ref) => {
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

    const effectiveTarget = external ? '_blank' : target
    const effectiveRel = external ? 'noopener noreferrer' : rel

    return (
      <a ref={ref} className={cls} target={effectiveTarget} rel={effectiveRel} {...rest}>
        {children}
        {external ? (
          <BjSvgIcon name="externalLinkLine" aria-hidden="true" />
        ) : null}
      </a>
    )
  }
)
BjLink.displayName = 'BjLink'
