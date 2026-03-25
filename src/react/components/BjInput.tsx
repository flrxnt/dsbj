import { useId, type ChangeEventHandler } from 'react'
import type * as React from 'react'

export interface BjInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'value' | 'defaultValue' | 'onChange' | 'id'
  > {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  label?: string
  hint?: string
  state?: 'default' | 'valid' | 'error'
  message?: string
  size?: 'sm' | 'md'
  textarea?: boolean
  rows?: number
  icon?: string
  id?: string
}

export function BjInput({
  value = '',
  onChange,
  label,
  hint,
  state = 'default',
  message,
  size = 'md',
  disabled,
  type = 'text',
  placeholder,
  textarea,
  rows = 4,
  icon,
  id: idProp,
  className,
  ...rest
}: BjInputProps) {
  const uid = useId()
  const inputId = idProp ?? uid
  const hintId = `${inputId}-hint`
  const messageId = `${inputId}-msg`

  const describedBy = [hint && hintId, message && messageId].filter(Boolean).join(' ') || undefined

  const groupClass = ['bj-input-group', state === 'valid' && 'bj-input-group--valid', state === 'error' && 'bj-input-group--error']
    .filter(Boolean)
    .join(' ')

  const inputClass = ['bj-input', size === 'sm' && 'bj-input--sm', className].filter(Boolean).join(' ')

  const shared = {
    id: inputId,
    className: inputClass,
    value,
    placeholder,
    disabled,
    'aria-describedby': describedBy,
    'aria-invalid': state === 'error' ? true : undefined,
    onChange,
    ...rest,
  }

  const messageClass = [
    'bj-message',
    state === 'valid' && 'bj-message--valid',
    state === 'error' && 'bj-message--error',
    state === 'default' && 'bj-message--info',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={groupClass}>
      {label ? (
        <label className="bj-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      {hint ? (
        <span id={hintId} className="bj-hint">
          {hint}
        </span>
      ) : null}
      {textarea ? (
        <textarea rows={rows} {...(shared as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : icon ? (
        <div className="bj-input-wrap">
          <i className={icon} aria-hidden />
          <input type={type} {...shared} />
        </div>
      ) : (
        <input type={type} {...shared} />
      )}
      {message ? (
        <p id={messageId} className={messageClass} role={state === 'error' ? 'alert' : 'status'}>
          {message}
        </p>
      ) : null}
    </div>
  )
}

BjInput.displayName = 'BjInput'
