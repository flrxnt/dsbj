import { useId } from 'react'
import type * as React from 'react'

export interface BjToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'role' | 'id' | 'children'> {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label?: string
  hint?: string
  disabled?: boolean
  border?: boolean
  labelLeft?: boolean
  id?: string
  children?: React.ReactNode
}

export function BjToggle({
  checked = false,
  onChange,
  label,
  hint,
  disabled,
  border,
  labelLeft,
  id: idProp,
  className,
  children,
  ...rest
}: BjToggleProps) {
  const uid = useId()
  const toggleId = idProp ?? uid
  const hintId = `${toggleId}-hint`

  const describedBy = hint ? hintId : undefined

  const labelClass = ['bj-toggle', border && 'bj-toggle--border', labelLeft && 'bj-toggle--label-left', className].filter(Boolean).join(' ')

  return (
    <label className={labelClass} htmlFor={toggleId}>
      <input
        id={toggleId}
        type="checkbox"
        className="bj-toggle__input"
        role="switch"
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        aria-describedby={describedBy}
        onChange={onChange}
        {...rest}
      />
      <span className="bj-toggle__label">
        {children ?? label}
        {hint ? <span id={hintId} className="bj-toggle__hint">{hint}</span> : null}
      </span>
    </label>
  )
}

BjToggle.displayName = 'BjToggle'
