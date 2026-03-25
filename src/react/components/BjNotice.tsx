import { useState, type HTMLAttributes, type ReactNode } from 'react'

export interface BjNoticeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
  variant?: 'default' | 'info' | 'warning' | 'alert'
  closable?: boolean
  title?: string
  icon?: string
  onClose?: () => void
  children?: ReactNode
}

export function BjNotice({
  variant = 'default',
  closable,
  title,
  icon,
  onClose,
  className,
  children,
  ...rest
}: BjNoticeProps) {
  const [visible, setVisible] = useState(true)

  const cls = ['bj-notice', variant !== 'default' && `bj-notice--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  function close() {
    setVisible(false)
    onClose?.()
  }

  if (!visible) return null

  return (
    <div className={cls} {...rest}>
      {icon ? <i className={`bj-notice__icon ${icon}`} aria-hidden="true" /> : null}
      <div className="bj-notice__body">
        {title ? <p className="bj-notice__title">{title}</p> : null}
        {children}
      </div>
      {closable ? (
        <button type="button" className="bj-notice__close" aria-label="Fermer" onClick={close}>
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  )
}
BjNotice.displayName = 'BjNotice'
