import { useId } from 'react'
import type * as React from 'react'

export interface BjRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'value' | 'id' | 'children'> {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value: string
  label?: string
  hint?: string
  invalid?: boolean
  disabled?: boolean
  name?: string
  id?: string
  children?: React.ReactNode
}

export function BjRadio({
  checked,
  onChange,
  value,
  label,
  hint,
  invalid,
  disabled,
  name,
  id: idProp,
  className,
  children,
  ...rest
}: BjRadioProps) {
  const uid = useId()
  const radioId = idProp ?? uid
  const hintId = `${radioId}-hint`

  const describedBy = hint ? hintId : undefined

  return (
    <label className={['bj-radio', className].filter(Boolean).join(' ')} htmlFor={radioId}>
      <input
        id={radioId}
        type="radio"
        checked={checked}
        value={value}
        disabled={disabled}
        name={name}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onChange={onChange}
        {...rest}
      />
      <span className="bj-radio__label">
        {children ?? label}
        {hint ? <span id={hintId} className="bj-radio__hint">{hint}</span> : null}
      </span>
    </label>
  )
}

BjRadio.displayName = 'BjRadio'
