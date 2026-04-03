import { useEffect, useId, useRef } from 'react'
import type * as React from 'react'

export interface BjCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'id' | 'children'> {
  checked?: boolean
  indeterminate?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label?: string
  hint?: string
  invalid?: boolean
  message?: string
  disabled?: boolean
  name?: string
  value?: string
  id?: string
  children?: React.ReactNode
}

export function BjCheckbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  hint,
  invalid,
  message,
  disabled,
  name,
  value,
  id: idProp,
  className,
  children,
  ...rest
}: BjCheckboxProps) {
  const uid = useId()
  const checkboxId = idProp ?? uid
  const hintId = `${checkboxId}-hint`
  const messageId = `${checkboxId}-msg`
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const describedBy =
    [hint && hintId, message && messageId].filter(Boolean).join(' ') || undefined

  return (
    <div className={['bj-checkbox-group', className].filter(Boolean).join(' ')}>
      <label className="bj-checkbox" htmlFor={checkboxId}>
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          name={name}
          value={value}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onChange={onChange}
          {...rest}
        />
        <span className="bj-checkbox__label">
          {children ?? label}
        </span>
      </label>
      {hint ? <span id={hintId} className="bj-hint">{hint}</span> : null}
      {message ? (
        <p
          id={messageId}
          className={['bj-message', invalid ? 'bj-message--error' : 'bj-message--info'].filter(Boolean).join(' ')}
          role={invalid ? 'alert' : 'status'}
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}

BjCheckbox.displayName = 'BjCheckbox'
