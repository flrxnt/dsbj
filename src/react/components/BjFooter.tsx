import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type BjFooterProps = {
  top?: ReactNode
  bottom?: ReactNode
  children?: ReactNode
} & ComponentPropsWithoutRef<'footer'>

export function BjFooter({ top, bottom, children, className, ...rest }: BjFooterProps) {
  return (
    <footer className={['bj-footer', className].filter(Boolean).join(' ')} {...rest}>
      {top ? (
        <div className="bj-footer__top">
          <div className="bj-container">{top}</div>
        </div>
      ) : null}
      <div className="bj-footer__bottom">
        <div className="bj-container">
          {bottom}
          {children}
        </div>
      </div>
    </footer>
  )
}

BjFooter.displayName = 'BjFooter'
