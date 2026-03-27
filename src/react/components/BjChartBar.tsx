import type { ComponentPropsWithoutRef } from 'react'

export type BjChartBarItem = {
  label: string
  value: number
  color?: string
}

export type BjChartBarProps = {
  data: BjChartBarItem[]
  horizontal?: boolean
  maxValue?: number
  showValues?: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export function BjChartBar({
  data,
  horizontal = false,
  maxValue,
  showValues = true,
  className,
  ...rest
}: BjChartBarProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value), 1)

  const cls = ['bj-chart-bar', horizontal && 'bj-chart-bar--horizontal', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} role="img" {...rest}>
      {!horizontal
        ? data.map((item) => (
            <div key={item.label} className="bj-chart-bar__col">
              {showValues ? <span className="bj-chart-bar__value">{item.value}</span> : null}
              <div className="bj-chart-bar__bar-area">
                <div
                  className="bj-chart-bar__bar"
                  style={{ height: `${(item.value / max) * 100}%`, backgroundColor: item.color }}
                />
              </div>
              <span className="bj-chart-bar__label">{item.label}</span>
            </div>
          ))
        : data.map((item) => (
            <div key={item.label} className="bj-chart-bar__row">
              <span className="bj-chart-bar__label" style={{ minWidth: '5rem' }}>
                {item.label}
              </span>
              <div className="bj-chart-bar__track">
                <div
                  className="bj-chart-bar__fill"
                  style={{ width: `${(item.value / max) * 100}%`, backgroundColor: item.color }}
                />
              </div>
              {showValues ? <span className="bj-chart-bar__value">{item.value}</span> : null}
            </div>
          ))}
    </div>
  )
}

BjChartBar.displayName = 'BjChartBar'
