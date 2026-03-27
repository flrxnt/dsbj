import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjChartLegendItem = {
  label: string
  color: string
}

export type BjChartProps = {
  title?: string
  subtitle?: string
  legend?: BjChartLegendItem[]
  actions?: ReactNode
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<'div'>, 'title'>

export function BjChart({
  title,
  subtitle,
  legend,
  actions,
  children,
  className,
  ...rest
}: BjChartProps) {
  return (
    <div className={['bj-chart', className].filter(Boolean).join(' ')} {...rest}>
      {title || subtitle ? (
        <div className="bj-chart__header">
          <div>
            {title ? <p className="bj-chart__title">{title}</p> : null}
            {subtitle ? <p className="bj-chart__subtitle">{subtitle}</p> : null}
          </div>
          {actions}
        </div>
      ) : null}
      <div className="bj-chart__body">{children}</div>
      {legend?.length ? (
        <div className="bj-chart__legend">
          {legend.map((item) => (
            <span key={item.label} className="bj-chart__legend-item">
              <span className="bj-chart__legend-dot" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

BjChart.displayName = 'BjChart'
