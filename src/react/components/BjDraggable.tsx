import {
  useCallback,
  useState,
  type DragEvent,
  type KeyboardEvent,
  type ReactNode,
} from 'react'

export interface BjDraggableProps {
  items?: string[]
  handle?: boolean
  disabled?: boolean
  className?: string
  renderItem?: (item: string, index: number) => ReactNode
}

export function BjDraggable({
  items = [],
  handle = true,
  disabled = false,
  className,
  renderItem,
}: BjDraggableProps) {
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [overIndex, setOverIndex] = useState<number | null>(null)

  const onDragStart = useCallback(
    (index: number) => {
      if (disabled) return
      setDragIndex(index)
    },
    [disabled],
  )

  const onDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>, index: number) => {
      if (disabled) return
      e.preventDefault()
      setOverIndex(index)
    },
    [disabled],
  )

  const onDrop = useCallback(
    (index: number) => {
      if (disabled || dragIndex === null || dragIndex === index) return
      setDragIndex(null)
      setOverIndex(null)
    },
    [disabled, dragIndex],
  )

  const onDragEnd = useCallback(() => {
    setDragIndex(null)
    setOverIndex(null)
  }, [])

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>, index: number) => {
      if (disabled) return
      if (e.key === 'ArrowUp' && index > 0) e.preventDefault()
      if (e.key === 'ArrowDown' && index < items.length - 1) e.preventDefault()
    },
    [disabled, items.length],
  )

  return (
    <div
      className={['bj-draggable', disabled && 'bj-draggable--disabled', className]
        .filter(Boolean)
        .join(' ')}
      role="list"
    >
      {items.map((item, index) => (
        <div
          key={item}
          className={[
            'bj-draggable__item',
            dragIndex === index && 'bj-draggable__item--dragging',
            overIndex === index && dragIndex !== index && 'bj-draggable__item--over',
          ]
            .filter(Boolean)
            .join(' ')}
          draggable={!disabled}
          tabIndex={disabled ? -1 : 0}
          role="listitem"
          aria-label={item}
          onDragStart={() => onDragStart(index)}
          onDragOver={(e) => onDragOver(e, index)}
          onDrop={() => onDrop(index)}
          onDragEnd={onDragEnd}
          onKeyDown={(e) => onKeyDown(e, index)}
        >
          {handle ? <span className="bj-draggable__handle" aria-hidden="true" /> : null}
          <span className="bj-draggable__content">
            {renderItem ? renderItem(item, index) : item}
          </span>
        </div>
      ))}
    </div>
  )
}

BjDraggable.displayName = 'BjDraggable'
