import { useEffect, useId, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface BjModalProps {
  open: boolean
  onClose: () => void
  size?: 'default' | 'sm' | 'lg' | 'full'
  title?: string
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export function BjModal({
  open,
  onClose,
  size = 'default',
  title,
  children,
  footer,
  className,
}: BjModalProps) {
  const baseId = useId()
  const modalId = `bj-modal-${baseId.replace(/:/g, '')}`
  const titleId = `${modalId}-title`

  useEffect(() => {
    if (open) document.body.classList.add('bj-modal-open')
    else document.body.classList.remove('bj-modal-open')
    return () => document.body.classList.remove('bj-modal-open')
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
      id={modalId}
      className={['bj-modal', size !== 'default' && `bj-modal--${size}`, className]
        .filter(Boolean)
        .join(' ')}
      data-bj-expanded
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      style={{ display: 'flex' }}
    >
      <div className="bj-modal__overlay" role="presentation" onClick={onClose} />
      <div className="bj-modal__dialog">
        {title ? (
          <header className="bj-modal__header">
            <h2 id={titleId} className="bj-modal__title">
              {title}
            </h2>
            <button type="button" className="bj-modal__close" aria-label="Fermer" onClick={onClose}>
              <i className="ri-close-line" aria-hidden="true" />
            </button>
          </header>
        ) : null}
        <div className="bj-modal__body">{children}</div>
        {footer ? <footer className="bj-modal__footer">{footer}</footer> : null}
      </div>
    </div>
  )

  return createPortal(node, document.body)
}

BjModal.displayName = 'BjModal'
