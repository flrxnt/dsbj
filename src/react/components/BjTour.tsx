import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BjSvgIcon } from '../icons'

export interface TourStep {
  target: string
  title: string
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export interface BjTourProps {
  steps: TourStep[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onChange?: (payload: { step: number; total: number }) => void
  onStart?: () => void
  onEnd?: () => void
}

const PADDING = 8

function computePopoverPosition(
  targetRect: DOMRect,
  popRect: DOMRect,
  placement: string,
): { top: number; left: number } {
  const gap = 12
  let top = 0
  let left = 0

  switch (placement) {
    case 'bottom':
      top = targetRect.bottom + gap + PADDING
      left = targetRect.left + targetRect.width / 2 - popRect.width / 2
      break
    case 'left':
      top = targetRect.top + targetRect.height / 2 - popRect.height / 2
      left = targetRect.left - popRect.width - gap - PADDING
      break
    case 'right':
      top = targetRect.top + targetRect.height / 2 - popRect.height / 2
      left = targetRect.right + gap + PADDING
      break
    default:
      top = targetRect.top - popRect.height - gap - PADDING
      left = targetRect.left + targetRect.width / 2 - popRect.width / 2
      break
  }

  left = Math.max(8, Math.min(left, window.innerWidth - popRect.width - 8))
  top = Math.max(8, Math.min(top, window.innerHeight - popRect.height - 8))

  return { top: top + window.scrollY, left: left + window.scrollX }
}

export function BjTour({
  steps,
  open: isOpen = false,
  onOpenChange,
  onChange,
  onStart,
  onEnd,
}: BjTourProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [hlStyle, setHlStyle] = useState<React.CSSProperties>({})
  const [popStyle, setPopStyle] = useState<React.CSSProperties>({})
  const popoverRef = useRef<HTMLDivElement>(null)

  const total = steps.length

  const close = useCallback(() => {
    document.body.classList.remove('bj-modal-open')
    onOpenChange?.(false)
    onEnd?.()
  }, [onOpenChange, onEnd])

  const positionStep = useCallback(
    (stepIndex: number) => {
      const step = steps[stepIndex]
      if (!step) return

      const targetEl = document.querySelector<HTMLElement>(step.target)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        requestAnimationFrame(() => {
          const rect = targetEl.getBoundingClientRect()
          setHlStyle({
            display: undefined,
            top: `${rect.top + window.scrollY - PADDING}px`,
            left: `${rect.left + window.scrollX - PADDING}px`,
            width: `${rect.width + PADDING * 2}px`,
            height: `${rect.height + PADDING * 2}px`,
          })

          if (popoverRef.current) {
            const popRect = popoverRef.current.getBoundingClientRect()
            const pos = computePopoverPosition(rect, popRect, step.placement || 'bottom')
            setPopStyle({ top: `${pos.top}px`, left: `${pos.left}px` })
          }
        })
      } else {
        setHlStyle({ display: 'none' })
        setPopStyle({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' })
      }

      onChange?.({ step: stepIndex, total })
    },
    [steps, total, onChange],
  )

  const nextStep = useCallback(() => {
    if (currentStep < total - 1) {
      const next = currentStep + 1
      setCurrentStep(next)
      positionStep(next)
    } else {
      close()
    }
  }, [currentStep, total, close, positionStep])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      const prev = currentStep - 1
      setCurrentStep(prev)
      positionStep(prev)
    }
  }, [currentStep, positionStep])

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0)
      document.body.classList.add('bj-modal-open')
      onStart?.()
      requestAnimationFrame(() => positionStep(0))
    }
  }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isOpen) return
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') nextStep()
      else if (e.key === 'ArrowLeft') prevStep()
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [isOpen, close, nextStep, prevStep])

  useEffect(() => {
    return () => { document.body.classList.remove('bj-modal-open') }
  }, [])

  if (!isOpen || !steps.length) return null

  const step = steps[currentStep]

  return createPortal(
    <>
      <div className="bj-tour-overlay" data-bj-expanded>
        <div className="bj-tour-overlay__backdrop" onClick={close} />
      </div>

      <div className="bj-tour-highlight" style={hlStyle} />

      <div
        ref={popoverRef}
        className="bj-tour-popover"
        role="dialog"
        aria-label="Visite guidée"
        style={popStyle}
      >
        <button
          type="button"
          className="bj-tour-popover__close"
          aria-label="Fermer la visite"
          onClick={close}
        >
          <BjSvgIcon name="closeLine" />
        </button>
        <div className="bj-tour-popover__header">
          <h3 className="bj-tour-popover__title">{step?.title}</h3>
          <span className="bj-tour-popover__step">
            {currentStep + 1}/{total}
          </span>
        </div>
        <div
          className="bj-tour-popover__body"
          dangerouslySetInnerHTML={{ __html: step?.content || '' }}
        />
        <div className="bj-tour-popover__footer">
          <div className="bj-tour-popover__progress">
            {steps.map((_, i) => (
              <span
                key={i}
                className={[
                  'bj-tour-popover__progress-dot',
                  i === currentStep && 'bj-tour-popover__progress-dot--active',
                  i < currentStep && 'bj-tour-popover__progress-dot--done',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            ))}
          </div>
          <div className="bj-tour-popover__actions">
            {currentStep > 0 ? (
              <button type="button" className="bj-btn bj-btn--sm bj-btn--secondary" onClick={prevStep}>
                Précédent
              </button>
            ) : null}
            <button type="button" className="bj-btn bj-btn--sm" onClick={nextStep}>
              {currentStep === total - 1 ? 'Terminer' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  )
}

BjTour.displayName = 'BjTour'
