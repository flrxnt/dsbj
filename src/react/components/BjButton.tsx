import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

export interface BjButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'contrast'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  full?: boolean
  loading?: boolean
  as?: 'button' | 'a'
  children?: ReactNode
}

type ButtonAsButton = BjButtonProps & { as?: 'button' } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BjButtonProps
>
type ButtonAsAnchor = BjButtonProps & { as: 'a' } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BjButtonProps
>

export const BjButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAsButton | ButtonAsAnchor>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: isIcon,
      full,
      loading,
      as: Tag = 'button',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = (rest as any).disabled || loading

    const cls = [
      'bj-btn',
      variant !== 'primary' && `bj-btn--${variant}`,
      size !== 'md' && `bj-btn--${size}`,
      isIcon && 'bj-btn--icon',
      full && 'bj-btn--full',
      loading && 'bj-btn--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Tag
        ref={ref as any}
        className={cls}
        aria-busy={loading ? 'true' : undefined}
        {...(rest as any)}
        disabled={Tag === 'button' ? isDisabled : undefined}
        aria-disabled={Tag !== 'button' && isDisabled ? 'true' : undefined}
      >
        {children}
      </Tag>
    )
  }
)
BjButton.displayName = 'BjButton'
