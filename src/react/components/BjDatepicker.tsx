import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type * as React from 'react'

const DAYS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
const MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
]

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`
}

function formatDate(d: Date) {
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`
}

function parseDate(s: string): Date | null {
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!m) return null
  const d = new Date(+m[3], +m[2] - 1, +m[1])
  return Number.isNaN(d.getTime()) ? null : d
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function daysInMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate()
}

interface DayCell {
  date: Date
  day: number
  outside: boolean
  today: boolean
  selected: boolean
  disabled: boolean
}

export interface BjDatepickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  label?: string
  hint?: string
  placeholder?: string
  min?: string
  max?: string
  disabled?: boolean
  size?: 'sm' | 'md'
  id?: string
}

export function BjDatepicker({
  value = '',
  onChange,
  label,
  hint,
  placeholder = 'JJ/MM/AAAA',
  min,
  max,
  disabled,
  size = 'md',
  id: idProp,
  className,
  ...rest
}: BjDatepickerProps) {
  const uid = useId()
  const inputId = idProp ?? uid
  const wrapperRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [portalStyle, setPortalStyle] = useState<React.CSSProperties>({})
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear())
  const [viewMonth, setViewMonth] = useState(() => new Date().getMonth())

  const minDate = min ? parseDate(min) : null
  const maxDate = max ? parseDate(max) : null
  const selectedDate = value ? parseDate(value) : null

  function isDisabled(d: Date) {
    if (minDate && d < minDate) return true
    if (maxDate && d > maxDate) return true
    return false
  }

  const days = useMemo(() => {
    const today = new Date()
    const dim = daysInMonth(viewYear, viewMonth)
    const firstDow = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7
    const cells: DayCell[] = []
    const prevDim = daysInMonth(viewYear, viewMonth - 1)
    for (let i = firstDow - 1; i >= 0; i--) {
      const d = new Date(viewYear, viewMonth - 1, prevDim - i)
      cells.push({
        date: d,
        day: prevDim - i,
        outside: true,
        today: sameDay(d, today),
        selected: !!(selectedDate && sameDay(d, selectedDate)),
        disabled: isDisabled(d),
      })
    }
    for (let day = 1; day <= dim; day++) {
      const d = new Date(viewYear, viewMonth, day)
      cells.push({
        date: d,
        day,
        outside: false,
        today: sameDay(d, today),
        selected: !!(selectedDate && sameDay(d, selectedDate)),
        disabled: isDisabled(d),
      })
    }
    const total = cells.length
    const remaining = total % 7 === 0 ? 0 : 7 - (total % 7)
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(viewYear, viewMonth + 1, i)
      cells.push({
        date: d,
        day: i,
        outside: true,
        today: sameDay(d, today),
        selected: !!(selectedDate && sameDay(d, selectedDate)),
        disabled: isDisabled(d),
      })
    }
    return cells
  }, [viewYear, viewMonth, value, min, max])

  function prevMonth() {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1)
        return 11
      }
      return m - 1
    })
  }

  function nextMonth() {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1)
        return 0
      }
      return m + 1
    })
  }

  function selectDay(cell: DayCell) {
    if (cell.disabled) return
    onChange?.(formatDate(cell.date))
    setOpen(false)
  }

  function toggle() {
    if (disabled) return
    setOpen((o) => {
      const next = !o
      if (next && selectedDate) {
        setViewYear(selectedDate.getFullYear())
        setViewMonth(selectedDate.getMonth())
      }
      return next
    })
  }

  function updatePortalPosition() {
    const el = fieldRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const gap = 4
    setPortalStyle({
      position: 'fixed',
      top: r.bottom + gap,
      left: r.left,
      zIndex: 200,
    })
  }

  useEffect(() => {
    if (!open) return
    updatePortalPosition()
    const onScroll = () => updatePortalPosition()
    const onResize = () => updatePortalPosition()
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const t = e.target as Node
      if (!open) return
      if (wrapperRef.current?.contains(t)) return
      if (calendarRef.current?.contains(t)) return
      setOpen(false)
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [open])

  function dayClasses(cell: DayCell) {
    return ['bj-datepicker__day', cell.outside && 'bj-datepicker__day--outside', cell.today && 'bj-datepicker__day--today', cell.selected && 'bj-datepicker__day--selected']
      .filter(Boolean)
      .join(' ')
  }

  const wrapperClass = ['bj-datepicker', size === 'sm' && 'bj-datepicker--sm', className].filter(Boolean).join(' ')

  const calendar =
    open && typeof document !== 'undefined' ? (
      <div
        ref={calendarRef}
        className="bj-datepicker__calendar"
        data-bj-expanded
        role="dialog"
        aria-label="Calendrier"
        style={portalStyle}
      >
        <div className="bj-datepicker__nav">
          <button type="button" className="bj-datepicker__nav-btn" aria-label="Mois précédent" onClick={prevMonth}>
            <i className="ri-arrow-left-s-line" aria-hidden />
          </button>
          <span className="bj-datepicker__month-year">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button type="button" className="bj-datepicker__nav-btn" aria-label="Mois suivant" onClick={nextMonth}>
            <i className="ri-arrow-right-s-line" aria-hidden />
          </button>
        </div>
        <div className="bj-datepicker__weekdays">
          {DAYS.map((d) => (
            <span key={d} className="bj-datepicker__weekday">
              {d}
            </span>
          ))}
        </div>
        <div className="bj-datepicker__grid" role="grid">
          {days.map((cell, i) => (
            <button key={i} type="button" className={dayClasses(cell)} disabled={cell.disabled} tabIndex={-1} onClick={() => selectDay(cell)}>
              {cell.day}
            </button>
          ))}
        </div>
      </div>
    ) : null

  return (
    <div ref={wrapperRef} className={wrapperClass} {...rest}>
      {label ? (
        <label className="bj-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      {hint ? <span className="bj-hint">{hint}</span> : null}
      <div ref={fieldRef} className="bj-datepicker__field">
        <input
          id={inputId}
          className="bj-datepicker__input"
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly
          onClick={toggle}
        />
        <button type="button" className="bj-datepicker__trigger" disabled={disabled} aria-label="Ouvrir le calendrier" onClick={toggle}>
          <i className="ri-calendar-line" aria-hidden />
        </button>
      </div>
      {calendar && createPortal(calendar, document.body)}
    </div>
  )
}

BjDatepicker.displayName = 'BjDatepicker'
