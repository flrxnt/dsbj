import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import type * as React from 'react'

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface BjComboboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'id' | 'children' | 'type'> {
  value?: string
  onValueChange?: (value: string) => void
  label?: string
  hint?: string
  options?: ComboboxOption[]
  error?: boolean
  message?: string
  disabled?: boolean
  placeholder?: string
  noResults?: string
  id?: string
}

export function BjCombobox({
  value = '',
  onValueChange,
  label,
  hint,
  options = [],
  error,
  message,
  disabled,
  placeholder,
  noResults = 'Aucun résultat',
  id: idProp,
  className,
  ...rest
}: BjComboboxProps) {
  const uid = useId()
  const baseId = idProp ?? uid
  const inputId = `${baseId}-input`
  const listboxId = `${baseId}-listbox`

  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selectedLabel = useMemo(() => options.find(o => o.value === value)?.label ?? '', [options, value])

  useEffect(() => { setQuery(selectedLabel) }, [selectedLabel])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return options
    return options.filter(o => o.label.toLowerCase().includes(q))
  }, [query, options])

  const open = useCallback(() => {
    if (disabled) return
    setIsOpen(true)
    setActiveIndex(-1)
  }, [disabled])

  const close = useCallback(() => {
    setIsOpen(false)
    setActiveIndex(-1)
  }, [])

  const select = useCallback((opt: ComboboxOption) => {
    if (opt.disabled) return
    onValueChange?.(opt.value)
    setQuery(opt.label)
    setIsOpen(false)
    setActiveIndex(-1)
  }, [onValueChange])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        close()
        setQuery(selectedLabel)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [isOpen, close, selectedLabel])

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    if (!isOpen) open()
    setActiveIndex(-1)
  }

  function scrollToActive(idx: number) {
    requestAnimationFrame(() => {
      wrapperRef.current?.querySelector(`[data-index="${idx}"]`)?.scrollIntoView({ block: 'nearest' })
    })
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const len = filtered.length
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) { open(); return }
        setActiveIndex(prev => { const n = prev < len - 1 ? prev + 1 : 0; scrollToActive(n); return n })
        break
      case 'ArrowUp':
        e.preventDefault()
        if (!isOpen) { open(); return }
        setActiveIndex(prev => { const n = prev > 0 ? prev - 1 : len - 1; scrollToActive(n); return n })
        break
      case 'Enter':
        e.preventDefault()
        if (isOpen && activeIndex >= 0 && activeIndex < len) select(filtered[activeIndex])
        break
      case 'Escape':
        e.preventDefault()
        close()
        setQuery(selectedLabel)
        break
      case 'Tab':
        close()
        break
    }
  }

  const activeDescendant = activeIndex >= 0 ? `${baseId}-opt-${activeIndex}` : undefined
  const hintId = hint ? `${baseId}-hint` : undefined
  const messageId = message ? `${baseId}-msg` : undefined
  const describedBy = [hintId, messageId].filter(Boolean).join(' ') || undefined

  const wrapClass = ['bj-combobox', error && 'bj-combobox--error', isOpen && 'bj-combobox--open', className].filter(Boolean).join(' ')

  return (
    <div ref={wrapperRef} className={wrapClass}>
      {label ? <label className="bj-label" htmlFor={inputId}>{label}</label> : null}
      {hint ? <span id={hintId} className="bj-hint">{hint}</span> : null}

      <div className="bj-combobox__input-wrap">
        <input
          ref={inputRef}
          id={inputId}
          className="bj-combobox__input"
          type="text"
          role="combobox"
          autoComplete="off"
          value={query}
          placeholder={placeholder}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-activedescendant={activeDescendant}
          aria-invalid={error || undefined}
          aria-describedby={describedBy}
          onChange={onInput}
          onFocus={() => { if (!isOpen) open() }}
          onKeyDown={onKeyDown}
          {...rest}
        />
        <i className="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
      </div>

      {isOpen && filtered.length > 0 ? (
        <ul id={listboxId} className="bj-combobox__listbox" role="listbox">
          {filtered.map((opt, i) => (
            <li
              key={opt.value}
              id={`${baseId}-opt-${i}`}
              data-index={i}
              className={['bj-combobox__option', i === activeIndex && 'bj-combobox__option--active'].filter(Boolean).join(' ')}
              role="option"
              aria-selected={opt.value === value}
              aria-disabled={opt.disabled || undefined}
              onClick={() => select(opt)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      ) : null}

      {isOpen && filtered.length === 0 ? (
        <div className="bj-combobox__listbox">
          <p className="bj-combobox__no-results">{noResults}</p>
        </div>
      ) : null}

      {message ? (
        <p id={messageId} className={['bj-message', error ? 'bj-message--error' : 'bj-message--info'].filter(Boolean).join(' ')}>
          {message}
        </p>
      ) : null}
    </div>
  )
}

BjCombobox.displayName = 'BjCombobox'
