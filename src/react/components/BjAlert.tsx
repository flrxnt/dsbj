import { useState, type HTMLAttributes, type ReactNode } from 'react'

const iconMap: Record<string, string> = {
  info: 'ri-information-line',
  success: 'ri-checkbox-circle-line',
  warning: 'ri-alert-line',
  error: 'ri-error-warning-line',
}

export interface BjAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
  variant?: 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  closable?: boolean
  title?: string
  onClose?: () => void
  children?: ReactNode
}

export function BjAlert({
  variant = 'info',
  size = 'md',
  closable,
  title,
  onClose,
  className,
  children,
  ...rest
}: BjAlertProps) {
  const [visible, setVisible] = useState(true)

  const cls = [
    'bj-alert',
    variant !== 'info' && `bj-alert--${variant}`,
    size === 'sm' && 'bj-alert--sm',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  function close() {
    setVisible(false)
    onClose?.()
  }

  if (!visible) return null

  return (
    <div className={cls} role="alert" {...rest}>
      <i className={`bj-alert__icon ${iconMap[variant]}`} aria-hidden="true" />
      <div className="bj-alert__body">
        {title ? <p className="bj-alert__title">{title}</p> : null}
        <div className="bj-alert__text">{children}</div>
      </div>
      {closable ? (
        <button type="button" className="bj-alert__close" aria-label="Fermer" onClick={close}>
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  )
}
BjAlert.displayName = 'BjAlert'
