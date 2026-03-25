import { useId } from 'react'
import type * as React from 'react'

export interface BjRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'value' | 'id' | 'children'> {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value: string
  label?: string
  hint?: string
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
  disabled,
  name,
  id: idProp,
  className,
  children,
  ...rest
}: BjRadioProps) {
  const uid = useId()
  const radioId = idProp ?? uid

  return (
    <label className={['bj-radio', className].filter(Boolean).join(' ')} htmlFor={radioId}>
      <input id={radioId} type="radio" checked={checked} value={value} disabled={disabled} name={name} onChange={onChange} {...rest} />
      <span className="bj-radio__label">
        {children ?? label}
        {hint ? <span className="bj-radio__hint">{hint}</span> : null}
      </span>
    </label>
  )
}

BjRadio.displayName = 'BjRadio'
