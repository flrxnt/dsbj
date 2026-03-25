import { useContext, useId, type ReactNode } from 'react'
import { AccordionContext } from './BjAccordion'

export interface BjAccordionItemProps {
  id: string
  title: string
  children?: ReactNode
  className?: string
}

export function BjAccordionItem({ id, title, children, className }: BjAccordionItemProps) {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('BjAccordionItem must be inside BjAccordion')

  const isOpen = ctx.openItems.has(id)
  const uid = useId()
  const panelId = `accordion-panel-${id}-${uid.replace(/:/g, '')}`
  const btnId = `accordion-btn-${id}-${uid.replace(/:/g, '')}`

  return (
    <div
      className={['bj-accordion', isOpen && 'bj-accordion--expanded', className]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        id={btnId}
        type="button"
        className="bj-accordion__btn"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => ctx.toggle(id)}
      >
        {title}
      </button>
      <div
        id={panelId}
        className="bj-accordion__body"
        data-bj-expanded={isOpen ? '' : undefined}
        role="region"
        aria-labelledby={btnId}
      >
        {children}
      </div>
    </div>
  )
}

BjAccordionItem.displayName = 'BjAccordionItem'
