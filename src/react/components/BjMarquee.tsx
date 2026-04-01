import { useState, type ReactNode } from 'react'

import { BjSvgIcon } from '../icons'

export interface BjMarqueeProps {
  speed?: 'slow' | 'default' | 'fast'
  reverse?: boolean
  bordered?: boolean
  pausable?: boolean
  children?: ReactNode
  className?: string
}

export function BjMarquee({
  speed = 'default',
  reverse = false,
  bordered = false,
  pausable = true,
  children,
  className,
}: BjMarqueeProps) {
  const [paused, setPaused] = useState(false)

  function togglePause() {
    setPaused(p => !p)
  }

  return (
    <div
      className={[
        'bj-marquee',
        paused && 'bj-marquee--paused',
        reverse && 'bj-marquee--reverse',
        speed !== 'default' && `bj-marquee--${speed}`,
        bordered && 'bj-marquee--bordered',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-live={paused ? 'polite' : 'off'}
    >
      <div className="bj-marquee__track">
        {children}
        {children}
      </div>
      {pausable ? (
        <button
          type="button"
          className="bj-marquee__pause"
          aria-label={paused ? 'Reprendre le défilement' : 'Mettre en pause le défilement'}
          onClick={togglePause}
        >
          <BjSvgIcon name={paused ? 'playLine' : 'pauseLine'} />
        </button>
      ) : null}
    </div>
  )
}

BjMarquee.displayName = 'BjMarquee'
