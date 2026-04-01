import { useEffect, useState, type ComponentPropsWithoutRef } from 'react'
import { createPortal } from 'react-dom'
import { BjSvgIcon } from '../icons'

export type BjConsentService = {
  id: string
  name: string
  description?: string
  required?: boolean
}

export type BjConsentProps = {
  title?: string
  text?: string
  services?: BjConsentService[]
  onAccept?: () => void
  onRefuse?: () => void
  onCustomize?: (accepted: string[]) => void
} & ComponentPropsWithoutRef<'div'>

export function BjConsent({
  title = 'Gestion des cookies',
  text = 'Ce site utilise des cookies pour améliorer votre expérience.',
  services = [],
  onAccept,
  onRefuse,
  onCustomize,
  className,
  children,
  ...rest
}: BjConsentProps) {
  const [visible, setVisible] = useState(true)
  const [managerOpen, setManagerOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [accepted, setAccepted] = useState<Set<string>>(() => {
    const next = new Set<string>()
    for (const s of services) {
      if (s.required) next.add(s.id)
    }
    return next
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  function acceptAll() {
    setAccepted(new Set(services.map((s) => s.id)))
    setVisible(false)
    onAccept?.()
  }

  function refuseAll() {
    setAccepted(new Set(services.filter((s) => s.required).map((s) => s.id)))
    setVisible(false)
    onRefuse?.()
  }

  function toggleService(id: string) {
    setAccepted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function savePreferences() {
    setManagerOpen(false)
    setVisible(false)
    onCustomize?.(Array.from(accepted))
  }

  const manager = managerOpen ? (
    <div className="bj-consent-manager" style={{ display: 'flex' }}>
      <div className="bj-consent-manager__dialog">
        <div className="bj-consent-manager__header">
          <h2 className="bj-consent-manager__title">Préférences de cookies</h2>
        </div>
        <div className="bj-consent-manager__body">
          {services.map((service) => (
            <div key={service.id} className="bj-consent-service">
              <div className="bj-consent-service__info">
                <p className="bj-consent-service__name">{service.name}</p>
                {service.description ? (
                  <p className="bj-consent-service__desc">{service.description}</p>
                ) : null}
              </div>
              <label className="bj-toggle bj-consent-service__toggle">
                <input
                  type="checkbox"
                  className="bj-toggle__input"
                  checked={accepted.has(service.id)}
                  disabled={service.required}
                  onChange={() => toggleService(service.id)}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="bj-consent-manager__footer">
          <button type="button" className="bj-btn" onClick={savePreferences}>
            Enregistrer
          </button>
          <button
            type="button"
            className="bj-btn bj-btn--tertiary"
            onClick={() => setManagerOpen(false)}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      {visible ? (
        <div
          className={['bj-consent-banner', className].filter(Boolean).join(' ')}
          data-bj-consent-banner
          data-bj-expanded=""
          role="dialog"
          aria-label="Consentement aux cookies"
          {...rest}
        >
          <div className="bj-consent-banner__body">
            <div className="bj-consent-banner__header">
              <span className="bj-consent-banner__icon">
                <BjSvgIcon name="shieldCheckLine" />
              </span>
              <p className="bj-consent-banner__title">{title}</p>
            </div>
            <p className="bj-consent-banner__text">{text}</p>
            {children}
            <div className="bj-consent-banner__actions">
              <button type="button" className="bj-btn" data-bj-consent-accept onClick={acceptAll}>
                Tout accepter
              </button>
              <button
                type="button"
                className="bj-btn bj-btn--secondary"
                data-bj-consent-refuse
                onClick={refuseAll}
              >
                Tout refuser
              </button>
              <button
                type="button"
                className="bj-btn bj-btn--tertiary"
                data-bj-consent-customize
                onClick={() => setManagerOpen(true)}
              >
                Personnaliser
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {mounted && managerOpen ? createPortal(manager, document.body) : null}
    </>
  )
}

BjConsent.displayName = 'BjConsent'
