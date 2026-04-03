import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { BjSvgIcon } from '../icons'
import { useFocusTrap } from '../hooks/useFocusTrap'

export interface BjDrawerProps {
  open: boolean
  onClose: () => void
  position?: 'left' | 'right'
  size?: 'default' | 'sm' | 'lg' | 'full'
  title?: string
  closeLabel?: string
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export function BjDrawer({
  open,
  onClose,
  position = 'left',
  size = 'default',
  title,
  closeLabel = 'Fermer',
  children,
  footer,
  className,
}: BjDrawerProps) {
  const baseId = useId()
  const drawerId = `bj-drawer-${baseId.replace(/:/g, '')}`
  const titleId = `${drawerId}-title`
  const panelRef = useRef<HTMLDivElement>(null)

  useFocusTrap(panelRef, open)

  useEffect(() => {
    if (open) document.body.classList.add('bj-drawer-open')
    else document.body.classList.remove('bj-drawer-open')
    return () => document.body.classList.remove('bj-drawer-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!open) return null

  const node = (
    <div
      ref={panelRef}
      id={drawerId}
      className={[
        'bj-drawer',
        position === 'right' && 'bj-drawer--right',
        size !== 'default' && `bj-drawer--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-bj-expanded
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      style={{ display: 'block' }}
    >
      <div className="bj-drawer__overlay" role="presentation" onClick={onClose} />
      <div className="bj-drawer__panel">
        {title ? (
          <header className="bj-drawer__header">
            <h2 id={titleId} className="bj-drawer__title">
              {title}
            </h2>
            <button type="button" className="bj-drawer__close" aria-label={closeLabel} onClick={onClose}>
              <BjSvgIcon name="closeLine" />
            </button>
          </header>
        ) : null}
        <div className="bj-drawer__body">{children}</div>
        {footer ? <footer className="bj-drawer__footer">{footer}</footer> : null}
      </div>
    </div>
  )

  return createPortal(node, document.body)
}

BjDrawer.displayName = 'BjDrawer'
