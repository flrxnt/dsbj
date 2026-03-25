import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjStepperStep = {
  label: string
  done?: boolean
}

export type BjStepperProps = {
  title?: string
  steps: BjStepperStep[]
  current: number
  vertical?: boolean
  detail?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export function BjStepper({
  title,
  steps,
  current,
  vertical,
  detail,
  children,
  className,
  ...rest
}: BjStepperProps) {
  const cls = ['bj-stepper', vertical && 'bj-stepper--vertical', className].filter(Boolean).join(' ')

  return (
    <div className={cls} role="navigation" aria-label="Étapes" {...rest}>
      <div className="bj-stepper__header">
        {title ? <h2 className="bj-stepper__title">{title}</h2> : null}
        <div className="bj-stepper__steps" role="list">
          {steps.map((step, i) => (
            <div
              key={i}
              className={[
                'bj-stepper__step',
                i === current && 'bj-stepper__step--current',
                (step.done || i < current) && 'bj-stepper__step--done',
              ]
                .filter(Boolean)
                .join(' ')}
              role="listitem"
              aria-current={i === current ? 'step' : undefined}
            >
              {step.label}
            </div>
          ))}
        </div>
        {detail ? <p className="bj-stepper__detail">{detail}</p> : null}
      </div>
      {children}
    </div>
  )
}

BjStepper.displayName = 'BjStepper'
