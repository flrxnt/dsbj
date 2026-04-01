import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import type * as React from 'react'

import { BjSvgIcon } from '../icons'

export interface BjSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface BjSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'id' | 'children'> {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onValueChange?: (value: string) => void
  label?: string
  hint?: string
  options?: BjSelectOption[]
  error?: boolean
  message?: string
  disabled?: boolean
  placeholder?: string
  id?: string
  children?: React.ReactNode
  searchable?: boolean
  searchPlaceholder?: string
  noResults?: string
}

export function BjSelect({
  value = '',
  onChange,
  onValueChange,
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
  searchable,
  searchPlaceholder = 'Rechercher…',
  noResults = 'Aucun résultat',
  ...rest
}: BjSelectProps) {
  const uid = useId()
  const selectId = idProp ?? uid
  const hintId = `${selectId}-hint`
  const messageId = `${selectId}-msg`
  const listboxId = `${selectId}-listbox`

  const describedBy = [hint && hintId, message && messageId].filter(Boolean).join(' ') || undefined

  // ─── Native select (default) ─────────────────────
  if (!searchable) {
    const selectClass = ['bj-select', error && 'bj-select--error', className].filter(Boolean).join(' ')
    return (
      <div className="bj-select-group">
        {label ? <label className="bj-label" htmlFor={selectId}>{label}</label> : null}
        {hint ? <span id={hintId} className="bj-hint">{hint}</span> : null}
        <select
          id={selectId}
          className={selectClass}
          value={value}
          disabled={disabled}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          onChange={(e) => { onChange?.(e); onValueChange?.(e.target.value) }}
          {...rest}
        >
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {options.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
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

  // ─── Custom searchable select ─────────────────────
  return <SearchableSelect
    value={value}
    onValueChange={onValueChange}
    label={label}
    hint={hint}
    options={options}
    error={error}
    message={message}
    disabled={disabled}
    placeholder={placeholder}
    searchPlaceholder={searchPlaceholder}
    noResults={noResults}
    selectId={selectId}
    hintId={hintId}
    messageId={messageId}
    listboxId={listboxId}
    describedBy={describedBy}
    className={className}
  />
}

BjSelect.displayName = 'BjSelect'

interface SearchableSelectInternalProps {
  value: string
  onValueChange?: (value: string) => void
  label?: string
  hint?: string
  options: BjSelectOption[]
  error?: boolean
  message?: string
  disabled?: boolean
  placeholder?: string
  searchPlaceholder: string
  noResults: string
  selectId: string
  hintId: string
  messageId: string
  listboxId: string
  describedBy?: string
  className?: string
}

function SearchableSelect({
  value,
  onValueChange,
  label,
  hint,
  options,
  error,
  message,
  disabled,
  placeholder,
  searchPlaceholder,
  noResults,
  selectId,
  hintId,
  messageId,
  listboxId,
  describedBy,
  className,
}: SearchableSelectInternalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const selectedLabel = useMemo(() => options.find(o => o.value === value)?.label ?? '', [options, value])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return options
    return options.filter(o => o.label.toLowerCase().includes(q))
  }, [search, options])

  const openPanel = useCallback(() => {
    if (disabled) return
    setIsOpen(true)
    setActiveIndex(-1)
    setSearch('')
    requestAnimationFrame(() => searchRef.current?.focus())
  }, [disabled])

  const closePanel = useCallback(() => {
    setIsOpen(false)
    setActiveIndex(-1)
  }, [])

  const togglePanel = useCallback(() => {
    if (isOpen) closePanel()
    else openPanel()
  }, [isOpen, openPanel, closePanel])

  const selectOption = useCallback((opt: BjSelectOption) => {
    if (opt.disabled) return
    onValueChange?.(opt.value)
    closePanel()
  }, [onValueChange, closePanel])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) closePanel()
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [isOpen, closePanel])

  function scrollToActive(idx: number) {
    requestAnimationFrame(() => {
      wrapperRef.current?.querySelector(`[data-index="${idx}"]`)?.scrollIntoView({ block: 'nearest' })
    })
  }

  function onSearchKeyDown(e: React.KeyboardEvent) {
    const len = filtered.length
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex(prev => { const n = prev < len - 1 ? prev + 1 : 0; scrollToActive(n); return n })
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex(prev => { const n = prev > 0 ? prev - 1 : len - 1; scrollToActive(n); return n })
        break
      case 'Enter':
        e.preventDefault()
        if (activeIndex >= 0 && activeIndex < len) selectOption(filtered[activeIndex])
        break
      case 'Escape':
        e.preventDefault()
        closePanel()
        break
    }
  }

  function onTriggerKeyDown(e: React.KeyboardEvent) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openPanel()
    }
  }

  const activeDescendant = activeIndex >= 0 ? `${selectId}-opt-${activeIndex}` : undefined

  return (
    <div ref={wrapperRef} className={['bj-select-group', error && 'bj-select--error', className].filter(Boolean).join(' ')}>
      {label ? <label className="bj-label" htmlFor={`${selectId}-trigger`}>{label}</label> : null}
      {hint ? <span id={hintId} className="bj-hint">{hint}</span> : null}

      <div className={['bj-select-custom', isOpen && 'bj-select-custom--open'].filter(Boolean).join(' ')}>
        <button
          id={`${selectId}-trigger`}
          type="button"
          className={['bj-select-custom__trigger', !value && 'bj-select-custom__trigger--placeholder'].filter(Boolean).join(' ')}
          disabled={disabled}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-activedescendant={activeDescendant}
          aria-invalid={error || undefined}
          aria-describedby={describedBy}
          onClick={(e) => { e.stopPropagation(); togglePanel() }}
          onKeyDown={onTriggerKeyDown}
        >
          <span>{selectedLabel || placeholder || '\u00A0'}</span>
          <BjSvgIcon name="arrowDownSLine" />
        </button>

        {isOpen ? (
          <div className="bj-select-custom__panel">
            <input
              ref={searchRef}
              className="bj-select-custom__search"
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              aria-label="Rechercher"
              onChange={e => { setSearch(e.target.value); setActiveIndex(-1) }}
              onKeyDown={onSearchKeyDown}
            />
            {filtered.length > 0 ? (
              <ul id={listboxId} className="bj-select-custom__listbox" role="listbox">
                {filtered.map((opt, i) => (
                  <li
                    key={opt.value}
                    id={`${selectId}-opt-${i}`}
                    data-index={i}
                    className={['bj-select-custom__option', i === activeIndex && 'bj-select-custom__option--active'].filter(Boolean).join(' ')}
                    role="option"
                    aria-selected={opt.value === value}
                    aria-disabled={opt.disabled || undefined}
                    onClick={() => selectOption(opt)}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bj-select-custom__no-results">{noResults}</p>
            )}
          </div>
        ) : null}
      </div>

      {message ? (
        <p id={messageId} className={['bj-message', error ? 'bj-message--error' : 'bj-message--info'].filter(Boolean).join(' ')}>
          {message}
        </p>
      ) : null}
    </div>
  )
}
