import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type AccordionContextValue = {
  exclusive: boolean
  openItems: Set<string>
  toggle: (id: string) => void
}

export const AccordionContext = createContext<AccordionContextValue | null>(null)

export interface BjAccordionProps {
  exclusive?: boolean
  children?: ReactNode
  className?: string
}

export function BjAccordion({ exclusive = false, children, className }: BjAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => new Set())

  const toggle = useCallback(
    (id: string) => {
      setOpenItems(prev => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else {
          if (exclusive) next.clear()
          next.add(id)
        }
        return next
      })
    },
    [exclusive],
  )

  const value = useMemo(
    () => ({ exclusive, openItems, toggle }),
    [exclusive, openItems, toggle],
  )

  return (
    <AccordionContext.Provider value={value}>
      <div className={['bj-accordions', className].filter(Boolean).join(' ')}>{children}</div>
    </AccordionContext.Provider>
  )
}

BjAccordion.displayName = 'BjAccordion'
