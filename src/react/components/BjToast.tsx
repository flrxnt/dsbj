import type { ToastItem, ToastPosition, ToastType } from '../hooks/useToast'
import { BjSvgIcon } from '../icons'

export interface BjToastProps {
  position?: ToastPosition
  toasts: ToastItem[]
  onRemove: (id: string) => void
  className?: string
}

const TOAST_ICONS: Record<ToastType, string> = {
  info: 'informationLine',
  success: 'checkLine',
  warning: 'alertLine',
  error: 'closeCircleLine',
}

export function BjToast({ position = 'top-right', toasts, onRemove, className }: BjToastProps) {
  return (
    <div
      className={[
        'bj-toast-container',
        position !== 'top-right' && `bj-toast-container--${position}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-live="polite"
      role="status"
    >
      {toasts.map(t => (
        <div
          key={t.id}
          className={['bj-toast', `bj-toast--${t.type}`, t.removing && 'bj-toast--removing']
            .filter(Boolean)
            .join(' ')}
          role="alert"
        >
          <span className="bj-toast__icon" aria-hidden="true">
            <BjSvgIcon name={TOAST_ICONS[t.type]} />
          </span>
          <div className="bj-toast__body">
            {t.title ? <p className="bj-toast__title">{t.title}</p> : null}
            <p className="bj-toast__text">{t.text}</p>
          </div>
          <button type="button" className="bj-toast__close" aria-label="Fermer" onClick={() => onRemove(t.id)}>
            <BjSvgIcon name="closeLine" />
          </button>
          {t.duration > 0 ? (
            <div
              className="bj-toast__progress"
              style={{
                width: '100%',
                transitionDuration: `${t.duration}ms`,
                animation: `bjProgressShrink ${t.duration}ms linear forwards`,
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}

BjToast.displayName = 'BjToast'
