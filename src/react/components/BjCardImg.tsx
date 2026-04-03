import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface BjCardImgProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  background?: string
  label?: string
  decorative?: boolean
  children?: ReactNode
}

export function BjCardImg({
  background,
  label = '',
  decorative,
  className,
  children,
  style,
  ...rest
}: BjCardImgProps) {
  const cls = ['bj-card__img', className].filter(Boolean).join(' ')
  const mergedStyle: CSSProperties | undefined =
    background || style
      ? { ...(style ?? {}), ...(background ? { background } : {}) }
      : style

  return (
    <div
      className={cls}
      style={mergedStyle}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label || undefined}
      aria-hidden={decorative || undefined}
      {...rest}
    >
      {children}
    </div>
  )
}
BjCardImg.displayName = 'BjCardImg'
