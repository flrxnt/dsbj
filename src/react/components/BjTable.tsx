import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjTableProps = {
  bordered?: boolean
  striped?: boolean
  fixedLayout?: boolean
  caption?: string
  header?: ReactNode
  footer?: ReactNode
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export function BjTable({
  bordered,
  striped,
  fixedLayout,
  caption,
  header,
  footer,
  children,
  className,
  ...rest
}: BjTableProps) {
  const tableCls = [
    'bj-table',
    bordered && 'bj-table--bordered',
    striped && 'bj-table--striped',
    fixedLayout && 'bj-table--layout-fixed',
    !caption && 'bj-table--no-caption',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={['bj-table-wrapper', className].filter(Boolean).join(' ')} {...rest}>
      {header ? <div className="bj-table__header">{header}</div> : null}
      <table className={tableCls}>
        {caption ? <caption>{caption}</caption> : null}
        {children}
      </table>
      {footer ? <div className="bj-table__footer">{footer}</div> : null}
    </div>
  )
}

BjTable.displayName = 'BjTable'
