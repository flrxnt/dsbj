import { useState, type HTMLAttributes, type ReactNode } from 'react'

import { BjSvgIcon, iconPaths, remixClassToIconName } from '../icons'

function classesWithoutRemixIcon(classes: string): string {
  return classes.replace(/\bri-[a-z0-9-]+\b/g, '').trim().replace(/\s+/g, ' ')
}

function noticeIconName(icon: string): string {
  if (!/\bri-[a-z0-9-]+/.test(icon)) return 'informationLine'
  const name = remixClassToIconName(icon)
  return name in iconPaths ? name : 'informationLine'
}

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
      {icon ? (
        <span
          className={['bj-notice__icon', classesWithoutRemixIcon(icon)].filter(Boolean).join(' ')}
        >
          <BjSvgIcon name={noticeIconName(icon)} />
        </span>
      ) : null}
      <div className="bj-notice__body">
        {title ? <p className="bj-notice__title">{title}</p> : null}
        {children}
      </div>
      {closable ? (
        <button type="button" className="bj-notice__close" aria-label="Fermer" onClick={close}>
          <BjSvgIcon name="closeLine" />
        </button>
      ) : null}
    </div>
  )
}
BjNotice.displayName = 'BjNotice'
