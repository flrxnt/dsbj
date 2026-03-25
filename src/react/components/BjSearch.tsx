import type * as React from 'react'

export interface BjSearchProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children' | 'role' | 'onChange'> {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onSubmit?: (value: string) => void
  placeholder?: string
  size?: 'md' | 'lg'
  buttonLabel?: string
  children?: React.ReactNode
}

export function BjSearch({
  value = '',
  onChange,
  onSubmit,
  placeholder = 'Rechercher…',
  size = 'md',
  buttonLabel = 'Rechercher',
  className,
  children,
  ...rest
}: BjSearchProps) {
  const formClass = ['bj-search', size === 'lg' && 'bj-search--lg', className].filter(Boolean).join(' ')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form className={formClass} role="search" onSubmit={handleSubmit} {...rest}>
      <input className="bj-search__input" type="search" value={value} placeholder={placeholder} onChange={onChange} />
      <button type="submit" className="bj-search__btn">
        {children ?? (
          <>
            <i className="ri-search-line" aria-hidden />
            <span>{buttonLabel}</span>
          </>
        )}
      </button>
    </form>
  )
}

BjSearch.displayName = 'BjSearch'
