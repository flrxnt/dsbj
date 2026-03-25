import { useId } from 'react'
import type * as React from 'react'

export interface BjCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'id' | 'children'> {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label?: string
  hint?: string
  disabled?: boolean
  name?: string
  value?: string
  id?: string
  children?: React.ReactNode
}

export function BjCheckbox({
  checked = false,
  onChange,
  label,
  hint,
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

  return (
    <label className={['bj-checkbox', className].filter(Boolean).join(' ')} htmlFor={checkboxId}>
      <input id={checkboxId} type="checkbox" checked={checked} disabled={disabled} name={name} value={value} onChange={onChange} {...rest} />
      <span className="bj-checkbox__label">
        {children ?? label}
        {hint ? <span className="bj-checkbox__hint">{hint}</span> : null}
      </span>
    </label>
  )
}

BjCheckbox.displayName = 'BjCheckbox'
