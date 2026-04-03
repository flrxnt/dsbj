import { useId } from 'react'
import type * as React from 'react'

import { BjSvgIcon } from '../icons'

export interface BjSearchProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children' | 'role' | 'onChange'> {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onSubmit?: (value: string) => void
  placeholder?: string
  size?: 'md' | 'lg'
  buttonLabel?: string
  label?: string
  id?: string
  children?: React.ReactNode
}

export function BjSearch({
  value = '',
  onChange,
  onSubmit,
  placeholder = 'Rechercher…',
  size = 'md',
  buttonLabel = 'Rechercher',
  label,
  id: idProp,
  className,
  children,
  ...rest
}: BjSearchProps) {
  const uid = useId()
  const inputId = idProp ?? `bj-search-${uid.replace(/:/g, '')}`
  const formClass = ['bj-search', size === 'lg' && 'bj-search--lg', className].filter(Boolean).join(' ')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form className={formClass} role="search" onSubmit={handleSubmit} {...rest}>
      {label ? (
        <label className="sr-only" htmlFor={inputId}>{label}</label>
      ) : null}
      <input
        id={inputId}
        className="bj-search__input"
        type="search"
        value={value}
        placeholder={placeholder}
        aria-label={!label ? placeholder : undefined}
        onChange={onChange}
      />
      <button type="submit" className="bj-search__btn">
        {children ?? (
          <>
            <BjSvgIcon name="searchLine" />
            <span>{buttonLabel}</span>
          </>
        )}
      </button>
    </form>
  )
}

BjSearch.displayName = 'BjSearch'
