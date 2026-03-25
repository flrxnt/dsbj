import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type * as React from 'react'

const DAYS_SHORT = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
]
const MONTHS_SHORT = [
  'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
  'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc',
]

function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }
function formatDate(d: Date) { return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}` }
function formatMonth(month: number, year: number) { return `${pad(month + 1)}/${year}` }
function formatYear(year: number) { return `${year}` }

function parseDate(s: string): Date | null {
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!m) return null
  const d = new Date(+m[3], +m[2] - 1, +m[1])
  return Number.isNaN(d.getTime()) ? null : d
}
function parseMonth(s: string): { month: number; year: number } | null {
  const m = s.match(/^(\d{2})\/(\d{4})$/)
  return m ? { month: +m[1] - 1, year: +m[2] } : null
}
function parseYear(s: string): number | null {
  const m = s.match(/^(\d{4})$/)
  return m ? +m[1] : null
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate() }

interface DayCell {
  date: Date; day: number; outside: boolean; today: boolean; selected: boolean; disabled: boolean
}

type ViewMode = 'days' | 'months' | 'years'

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
  mode?: 'date' | 'month' | 'year'
  id?: string
}

export function BjDatepicker({
  value = '',
  onChange,
  label,
  hint,
  placeholder: placeholderProp,
  min,
  max,
  disabled,
  size = 'md',
  mode = 'date',
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
  const [currentView, setCurrentView] = useState<ViewMode>('days')

  const viewDecade = Math.floor(viewYear / 10) * 10
  const placeholder = placeholderProp || (mode === 'month' ? 'MM/AAAA' : mode === 'year' ? 'AAAA' : 'JJ/MM/AAAA')

  const minDate = min ? parseDate(min) : null
  const maxDate = max ? parseDate(max) : null
  const selectedDate = value ? parseDate(value) : null
  const selectedMonth = value ? parseMonth(value) : null
  const selectedYear = value ? parseYear(value) : null

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
      cells.push({ date: d, day: prevDim - i, outside: true, today: sameDay(d, today), selected: !!(selectedDate && sameDay(d, selectedDate)), disabled: isDisabled(d) })
    }
    for (let day = 1; day <= dim; day++) {
      const d = new Date(viewYear, viewMonth, day)
      cells.push({ date: d, day, outside: false, today: sameDay(d, today), selected: !!(selectedDate && sameDay(d, selectedDate)), disabled: isDisabled(d) })
    }
    const total = cells.length
    const remaining = total % 7 === 0 ? 0 : 7 - (total % 7)
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(viewYear, viewMonth + 1, i)
      cells.push({ date: d, day: i, outside: true, today: sameDay(d, today), selected: !!(selectedDate && sameDay(d, selectedDate)), disabled: isDisabled(d) })
    }
    return cells
  }, [viewYear, viewMonth, value, min, max])

  const monthCells = useMemo(() => {
    const now = new Date()
    return MONTHS_SHORT.map((lbl, i) => ({
      label: lbl, index: i,
      today: i === now.getMonth() && viewYear === now.getFullYear(),
      selected: mode === 'month' ? (selectedMonth?.month === i && selectedMonth?.year === viewYear) : viewMonth === i,
    }))
  }, [viewYear, viewMonth, value, mode])

  const yearCells = useMemo(() => {
    const now = new Date()
    const start = viewDecade - 1
    return Array.from({ length: 12 }, (_, i) => {
      const y = start + i
      return {
        year: y,
        outside: y < viewDecade || y >= viewDecade + 10,
        today: y === now.getFullYear(),
        selected: mode === 'year' ? selectedYear === y : viewYear === y,
      }
    })
  }, [viewYear, viewDecade, value, mode])

  function selectDay(cell: DayCell) {
    if (cell.disabled) return
    onChange?.(formatDate(cell.date))
    setOpen(false)
  }

  function selectMonthCell(index: number) {
    if (mode === 'month') {
      onChange?.(formatMonth(index, viewYear))
      setOpen(false)
    } else {
      setViewMonth(index)
      setCurrentView('days')
    }
  }

  function selectYearCell(year: number) {
    if (mode === 'year') {
      onChange?.(formatYear(year))
      setOpen(false)
    } else {
      setViewYear(year)
      setCurrentView('months')
    }
  }

  function toggle() {
    if (disabled) return
    setOpen(o => {
      const next = !o
      if (next) {
        if (mode === 'date' && selectedDate) {
          setViewYear(selectedDate.getFullYear())
          setViewMonth(selectedDate.getMonth())
          setCurrentView('days')
        } else if (mode === 'month') {
          if (selectedMonth) setViewYear(selectedMonth.year)
          setCurrentView('months')
        } else if (mode === 'year') {
          if (selectedYear) setViewYear(selectedYear)
          setCurrentView('years')
        } else {
          setCurrentView('days')
        }
      }
      return next
    })
  }

  const updatePortalPosition = useCallback(() => {
    const el = fieldRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPortalStyle({ position: 'fixed', top: r.bottom + 4, left: r.left, zIndex: 200 })
  }, [])

  useEffect(() => {
    if (!open) return
    updatePortalPosition()
    window.addEventListener('scroll', updatePortalPosition, true)
    window.addEventListener('resize', updatePortalPosition)
    return () => {
      window.removeEventListener('scroll', updatePortalPosition, true)
      window.removeEventListener('resize', updatePortalPosition)
    }
  }, [open, updatePortalPosition])

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
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [open])

  function dayClasses(cell: DayCell) {
    return ['bj-datepicker__day', cell.outside && 'bj-datepicker__day--outside', cell.today && 'bj-datepicker__day--today', cell.selected && 'bj-datepicker__day--selected'].filter(Boolean).join(' ')
  }

  const wrapperClass = ['bj-datepicker', size === 'sm' && 'bj-datepicker--sm', className].filter(Boolean).join(' ')

  const calendar = open && typeof document !== 'undefined' ? (
    <div
      ref={calendarRef}
      className="bj-datepicker__calendar"
      data-bj-expanded
      role="dialog"
      aria-label="Calendrier"
      style={portalStyle}
      onMouseDown={e => e.stopPropagation()}
    >
      {currentView === 'days' && (
        <>
          <div className="bj-datepicker__nav">
            <button type="button" className="bj-datepicker__nav-btn" aria-label="Mois précédent" onClick={() => { setViewMonth(m => { if (m === 0) { setViewYear(y => y - 1); return 11 } return m - 1 }) }}>
              <i className="ri-arrow-left-s-line" aria-hidden />
            </button>
            <button type="button" className="bj-datepicker__nav-title" onClick={() => setCurrentView('months')}>
              {MONTHS[viewMonth]} {viewYear}
            </button>
            <button type="button" className="bj-datepicker__nav-btn" aria-label="Mois suivant" onClick={() => { setViewMonth(m => { if (m === 11) { setViewYear(y => y + 1); return 0 } return m + 1 }) }}>
              <i className="ri-arrow-right-s-line" aria-hidden />
            </button>
          </div>
          <div className="bj-datepicker__weekdays">
            {DAYS_SHORT.map(d => <span key={d} className="bj-datepicker__weekday">{d}</span>)}
          </div>
          <div className="bj-datepicker__grid" role="grid">
            {days.map((cell, i) => (
              <button key={i} type="button" className={dayClasses(cell)} disabled={cell.disabled} tabIndex={-1} onClick={() => selectDay(cell)}>
                {cell.day}
              </button>
            ))}
          </div>
        </>
      )}

      {currentView === 'months' && (
        <>
          <div className="bj-datepicker__nav">
            <button type="button" className="bj-datepicker__nav-btn" aria-label="Année précédente" onClick={() => setViewYear(y => y - 1)}>
              <i className="ri-arrow-left-s-line" aria-hidden />
            </button>
            <button type="button" className="bj-datepicker__nav-title" onClick={() => setCurrentView('years')}>
              {viewYear}
            </button>
            <button type="button" className="bj-datepicker__nav-btn" aria-label="Année suivante" onClick={() => setViewYear(y => y + 1)}>
              <i className="ri-arrow-right-s-line" aria-hidden />
            </button>
          </div>
          <div className="bj-datepicker__months-grid">
            {monthCells.map(cell => (
              <button
                key={cell.index}
                type="button"
                className={['bj-datepicker__month-cell', cell.today && 'bj-datepicker__month-cell--today', cell.selected && 'bj-datepicker__month-cell--selected'].filter(Boolean).join(' ')}
                onClick={() => selectMonthCell(cell.index)}
              >
                {cell.label}
              </button>
            ))}
          </div>
        </>
      )}

      {currentView === 'years' && (
        <>
          <div className="bj-datepicker__nav">
            <button type="button" className="bj-datepicker__nav-btn" aria-label="Décennie précédente" onClick={() => setViewYear(y => y - 10)}>
              <i className="ri-arrow-left-s-line" aria-hidden />
            </button>
            <span className="bj-datepicker__nav-title" style={{ cursor: 'default' }}>
              {viewDecade}–{viewDecade + 9}
            </span>
            <button type="button" className="bj-datepicker__nav-btn" aria-label="Décennie suivante" onClick={() => setViewYear(y => y + 10)}>
              <i className="ri-arrow-right-s-line" aria-hidden />
            </button>
          </div>
          <div className="bj-datepicker__years-grid">
            {yearCells.map(cell => (
              <button
                key={cell.year}
                type="button"
                className={['bj-datepicker__year-cell', cell.outside && 'bj-datepicker__year-cell--outside', cell.today && 'bj-datepicker__year-cell--today', cell.selected && 'bj-datepicker__year-cell--selected'].filter(Boolean).join(' ')}
                onClick={() => selectYearCell(cell.year)}
              >
                {cell.year}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  ) : null

  return (
    <div ref={wrapperRef} className={wrapperClass} {...rest}>
      {label ? <label className="bj-label" htmlFor={inputId}>{label}</label> : null}
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
