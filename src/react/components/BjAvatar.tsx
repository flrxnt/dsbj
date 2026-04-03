import type { HTMLAttributes, ReactNode } from 'react'

export interface BjAvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  square?: boolean
  src?: string
  alt?: string
  initials?: string
  icon?: string
  status?: 'online' | 'away' | 'busy' | 'offline'
  statusLabel?: string
  children?: ReactNode
}

export function BjAvatar({
  size = 'md',
  square,
  src,
  alt = '',
  initials,
  icon,
  status,
  statusLabel,
  className,
  children,
  ...rest
}: BjAvatarProps) {
  const cls = [
    'bj-avatar',
    size !== 'md' && `bj-avatar--${size}`,
    square && 'bj-avatar--square',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={cls} {...rest}>
      {src ? <img className="bj-avatar__img" src={src} alt={alt} /> : null}
      {!src && initials ? <span className="bj-avatar__initials" aria-hidden="true">{initials}</span> : null}
      {!src && !initials && icon ? (
        <i className={`bj-avatar__icon ${icon}`} aria-hidden="true" />
      ) : null}
      {!src && !initials && !icon ? children : null}
      {status ? (
        <span
          className={`bj-avatar__status bj-avatar__status--${status}`}
          role="status"
          aria-label={statusLabel || status}
        />
      ) : null}
    </span>
  )
}
BjAvatar.displayName = 'BjAvatar'
