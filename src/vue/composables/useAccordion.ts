import { ref, provide, inject, type InjectionKey, type Ref } from 'vue'

export interface AccordionContext {
  exclusive: boolean
  openItems: Ref<Set<string>>
  toggle: (id: string) => void
}

export const AccordionKey: InjectionKey<AccordionContext> = Symbol('BjAccordion')

export function useAccordion(exclusive = false) {
  const openItems = ref<Set<string>>(new Set())

  function toggle(id: string) {
    const next = new Set(openItems.value)
    if (next.has(id)) {
      next.delete(id)
    } else {
      if (exclusive) next.clear()
      next.add(id)
    }
    openItems.value = next
  }

  function isOpen(id: string) {
    return openItems.value.has(id)
  }

  const context: AccordionContext = { exclusive, openItems, toggle }

  return { openItems, toggle, isOpen, context }
}

export function useAccordionItem(id: string) {
  const ctx = inject(AccordionKey)
  if (!ctx) throw new Error('BjAccordionItem must be used inside BjAccordion')

  const isOpen = () => ctx.openItems.value.has(id)
  const toggle = () => ctx.toggle(id)

  return { isOpen, toggle }
}
