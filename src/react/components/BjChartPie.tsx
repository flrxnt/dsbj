import type { ComponentPropsWithoutRef } from 'react'

export type BjChartPieSlice = {
  label: string
  value: number
  color: string
}

export type BjChartPieProps = {
  data: BjChartPieSlice[]
  donut?: boolean
  centerText?: string
  size?: number
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export function BjChartPie({
  data,
  donut = false,
  centerText,
  size = 200,
  className,
  ...rest
}: BjChartPieProps) {
  const total = data.reduce((acc, d) => acc + d.value, 0) || 1
  const c = size / 2
  const r = size / 2 - 4
  const ir = donut ? r * 0.6 : 0

  let cumAngle = -Math.PI / 2
  const slices = data.map((d) => {
    const angle = (d.value / total) * Math.PI * 2
    const startAngle = cumAngle
    const endAngle = cumAngle + angle
    cumAngle = endAngle
    const largeArc = angle > Math.PI ? 1 : 0

    const x1 = c + r * Math.cos(startAngle)
    const y1 = c + r * Math.sin(startAngle)
    const x2 = c + r * Math.cos(endAngle)
    const y2 = c + r * Math.sin(endAngle)

    let path: string
    if (ir > 0) {
      const ix1 = c + ir * Math.cos(endAngle)
      const iy1 = c + ir * Math.sin(endAngle)
      const ix2 = c + ir * Math.cos(startAngle)
      const iy2 = c + ir * Math.sin(startAngle)
      path = `M${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} L${ix1},${iy1} A${ir},${ir} 0 ${largeArc} 0 ${ix2},${iy2} Z`
    } else {
      path = `M${c},${c} L${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z`
    }

    return { ...d, path }
  })

  const cls = ['bj-chart-pie', donut && 'bj-chart-pie--donut', className].filter(Boolean).join(' ')

  return (
    <div className={cls} {...rest}>
      <svg viewBox={`0 0 ${size} ${size}`}>
        {slices.map((slice, i) => (
          <path key={i} className="bj-chart-pie__slice" d={slice.path} fill={slice.color} />
        ))}
        {donut && centerText ? (
          <text className="bj-chart-pie__center-text" x={c} y={c}>
            {centerText}
          </text>
        ) : null}
      </svg>
    </div>
  )
}

BjChartPie.displayName = 'BjChartPie'
