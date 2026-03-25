import { useId } from 'react'
import type * as React from 'react'

export interface BjSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface BjSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'id' | 'children'> {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  label?: string
  hint?: string
  options?: BjSelectOption[]
  error?: boolean
  message?: string
  disabled?: boolean
  placeholder?: string
  id?: string
  children?: React.ReactNode
}

export function BjSelect({
  value = '',
  onChange,
  label,
  hint,
  options = [],
  error,
  message,
  disabled,
  placeholder,
  id: idProp,
  className,
  children,
  ...rest
}: BjSelectProps) {
  const uid = useId()
  const selectId = idProp ?? uid
  const hintId = `${selectId}-hint`
  const messageId = `${selectId}-msg`

  const describedBy = [hint && hintId, message && messageId].filter(Boolean).join(' ') || undefined

  const selectClass = ['bj-select', error && 'bj-select--error', className].filter(Boolean).join(' ')

  return (
    <div className="bj-select-group">
      {label ? (
        <label className="bj-label" htmlFor={selectId}>
          {label}
        </label>
      ) : null}
      {hint ? (
        <span id={hintId} className="bj-hint">
          {hint}
        </span>
      ) : null}
      <select
        id={selectId}
        className={selectClass}
        value={value}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        onChange={onChange}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
        {children}
      </select>
      {message ? (
        <p id={messageId} className={['bj-message', error ? 'bj-message--error' : 'bj-message--info'].filter(Boolean).join(' ')}>
          {message}
        </p>
      ) : null}
    </div>
  )
}

BjSelect.displayName = 'BjSelect'
