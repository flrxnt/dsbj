import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

import { BjSvgIcon } from '../icons'

export interface BjTagBaseProps {
  variant?: 'default' | 'action' | 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  dismissible?: boolean
  dismissLabel?: string
  onDismiss?: () => void
  as?: 'span' | 'a' | 'button'
  children?: ReactNode
}

type BjTagAsSpan = BjTagBaseProps & { as?: 'span' } & Omit<
  HTMLAttributes<HTMLSpanElement>,
  keyof BjTagBaseProps
>
type BjTagAsAnchor = BjTagBaseProps & { as: 'a' } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BjTagBaseProps
>
type BjTagAsButton = BjTagBaseProps & { as: 'button' } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BjTagBaseProps
>

export type BjTagProps = BjTagAsSpan | BjTagAsAnchor | BjTagAsButton

export const BjTag = forwardRef<HTMLSpanElement | HTMLAnchorElement | HTMLButtonElement, BjTagProps>(
  (
    {
      variant = 'default',
      size = 'md',
      dismissible,
      dismissLabel = 'Retirer',
      onDismiss,
      as: requestedTag = 'span',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const Tag = dismissible && requestedTag === 'button' ? 'span' : requestedTag

    const cls = [
      'bj-tag',
      variant !== 'default' && `bj-tag--${variant}`,
      size === 'sm' && 'bj-tag--sm',
      dismissible && 'bj-tag--dismiss',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    function handleDismissClick(e: MouseEvent<HTMLButtonElement>) {
      e.stopPropagation()
      onDismiss?.()
    }

    return (
      <Tag ref={ref as never} className={cls} {...(rest as Record<string, unknown>)}>
        {children}
        {dismissible ? (
          <button
            type="button"
            className="bj-tag__close"
            aria-label={dismissLabel}
            onClick={handleDismissClick}
          >
            <BjSvgIcon name="closeLine" />
          </button>
        ) : null}
      </Tag>
    )
  }
)
BjTag.displayName = 'BjTag'
