import { type ReactNode } from 'react'

export interface BjChatBubbleProps {
  variant?: 'sent' | 'received' | 'system'
  avatar?: string
  sender?: string
  time?: string
  status?: 'sending' | 'sent' | 'read' | 'error'
  children?: ReactNode
  className?: string
}

const STATUS_ICONS: Record<string, string> = {
  sending: 'ri-time-line',
  sent: 'ri-check-line',
  read: 'ri-check-double-line',
  error: 'ri-error-warning-line',
}

export function BjChatBubble({
  variant = 'received',
  avatar,
  sender,
  time,
  status,
  children,
  className,
}: BjChatBubbleProps) {
  const cls = [
    'bj-chat-bubble',
    `bj-chat-bubble--${variant}`,
    status === 'error' && 'bj-chat-bubble--error',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const labelParts: string[] = []
  if (sender) labelParts.push(`Message de ${sender}`)
  if (time) labelParts.push(`à ${time}`)
  const ariaLabel = labelParts.length ? labelParts.join(' ') : undefined

  return (
    <div className={cls} role="listitem" aria-label={ariaLabel}>
      {avatar && variant !== 'system' ? (
        <div className="bj-chat-bubble__avatar">
          <img src={avatar} alt={sender || ''} />
        </div>
      ) : null}
      <div className="bj-chat-bubble__content">
        {sender && variant !== 'system' ? (
          <span className="bj-chat-bubble__sender">{sender}</span>
        ) : null}
        <div className="bj-chat-bubble__text">{children}</div>
        {time || status ? (
          <div className="bj-chat-bubble__meta">
            {time ? <span className="bj-chat-bubble__time">{time}</span> : null}
            {status && STATUS_ICONS[status] ? (
              <span className={`bj-chat-bubble__status bj-chat-bubble__status--${status}`}>
                <i className={STATUS_ICONS[status]} aria-hidden="true" />
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

BjChatBubble.displayName = 'BjChatBubble'
