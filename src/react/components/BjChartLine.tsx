import type { ComponentPropsWithoutRef } from 'react'

export type BjChartLinePoint = {
  label: string
  value: number
}

export type BjChartLineSeries = {
  name: string
  color?: string
  data: BjChartLinePoint[]
}

export type BjChartLineProps = {
  series: BjChartLineSeries[]
  height?: number
  showArea?: boolean
  showDots?: boolean
  showGrid?: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

const PAD = { top: 10, right: 10, bottom: 30, left: 40 }
const W = 400

function buildPath(data: BjChartLinePoint[], h: number, maxVal: number) {
  const n = data.length
  if (n === 0) return ''
  const xStep = n > 1 ? (W - PAD.left - PAD.right) / (n - 1) : 0
  return data
    .map((d, i) => {
      const x = PAD.left + i * xStep
      const y = h - PAD.bottom - (d.value / maxVal) * (h - PAD.top - PAD.bottom)
      return `${i === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')
}

function buildArea(data: BjChartLinePoint[], h: number, maxVal: number) {
  const n = data.length
  if (n === 0) return ''
  const xStep = n > 1 ? (W - PAD.left - PAD.right) / (n - 1) : 0
  const base = h - PAD.bottom
  const points = data.map((d, i) => {
    const x = PAD.left + i * xStep
    const y = h - PAD.bottom - (d.value / maxVal) * (h - PAD.top - PAD.bottom)
    return `${x},${y}`
  })
  return `M${PAD.left},${base} L${points.join(' L')} L${PAD.left + (n - 1) * xStep},${base} Z`
}

export function BjChartLine({
  series,
  height = 200,
  showArea = false,
  showDots = true,
  showGrid = true,
  className,
  ...rest
}: BjChartLineProps) {
  const allValues = series.flatMap((s) => s.data.map((d) => d.value))
  const maxVal = Math.max(...allValues, 1)
  const labels = series[0]?.data.map((d) => d.label) ?? []
  const n = labels.length

  const xStep = n > 1 ? (W - PAD.left - PAD.right) / (n - 1) : 0

  return (
    <div className={['bj-chart-line', className].filter(Boolean).join(' ')} {...rest}>
      <svg viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="xMidYMid meet">
        {showGrid
          ? Array.from({ length: 5 }, (_, i) => {
              const y = PAD.top + (i / 4) * (height - PAD.top - PAD.bottom)
              return (
                <line key={i} className="bj-chart-line__grid" x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} />
              )
            })
          : null}
        {series.map((s) => (
          <g key={s.name}>
            {showArea ? (
              <path className="bj-chart-line__area" d={buildArea(s.data, height, maxVal)} style={{ fill: s.color }} />
            ) : null}
            <path className="bj-chart-line__path" d={buildPath(s.data, height, maxVal)} style={{ stroke: s.color }} />
            {showDots
              ? s.data.map((d, i) => {
                  const cx = PAD.left + i * xStep
                  const cy = height - PAD.bottom - (d.value / maxVal) * (height - PAD.top - PAD.bottom)
                  return <circle key={i} className="bj-chart-line__dot" cx={cx} cy={cy} style={{ stroke: s.color }} />
                })
              : null}
          </g>
        ))}
        {labels.map((label, i) => (
          <text
            key={i}
            className="bj-chart-line__axis"
            x={PAD.left + i * xStep}
            y={height - 8}
            textAnchor="middle"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  )
}

BjChartLine.displayName = 'BjChartLine'
