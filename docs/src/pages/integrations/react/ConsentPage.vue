<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjConsent',
      desc: 'Bannière de consentement cookies React avec modale de personnalisation en portail. Les services obligatoires restent acceptés après refus global ; onCustomize reçoit la liste des ids acceptés après enregistrement.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-title': 'Titre de la bannière ; valeur par défaut fournie par le composant.',
      'prop-text': 'Texte explicatif sous le titre ; valeur par défaut fournie.',
      'prop-services': 'Liste de services avec id, name, description et required optionnels.',
      'prop-onAccept': 'Callback sans argument après « Tout accepter ».',
      'prop-onRefuse': 'Callback sans argument après « Tout refuser ».',
      'prop-onCustomize': 'Callback avec un tableau d’ids acceptés après « Enregistrer » dans la modale.',
      'prop-div': 'Attributs div natifs supplémentaires sont appliqués à la bannière.',
      'prop-children': 'Contenu optionnel rendu dans le corps de la bannière sous le texte.',
      'section-callbacks': 'Callbacks : onAccept, onRefuse, onCustomize',
      'section-services': 'services : obligatoires et optionnels',
      'section-children': 'Enfants : contenu additionnel sous le texte',
      'section-cross': 'Combinaison : titre, texte, services et callbacks',
      'section-preview-manager': 'Aperçu HTML — gestionnaire (portail en runtime)',
    },
    en: {
      title: 'BjConsent',
      desc: 'React cookie consent banner with a customization modal in a portal. Required services stay accepted after a global refuse; onCustomize receives accepted service ids after save.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-title': 'Banner title; the component supplies a default string.',
      'prop-text': 'Body copy under the title; a default is provided.',
      'prop-services': 'Service entries with id, name, and optional description and required flag.',
      'prop-onAccept': 'No-arg callback after Accept all.',
      'prop-onRefuse': 'No-arg callback after Refuse all.',
      'prop-onCustomize': 'Callback with an array of accepted ids after Save in the modal.',
      'prop-div': 'Extra native div attributes are forwarded to the banner root.',
      'prop-children': 'Optional content rendered in the banner body under the text.',
      'section-callbacks': 'Callbacks: onAccept, onRefuse, onCustomize',
      'section-services': 'services: required vs optional entries',
      'section-children': 'Children: extra body content under the text',
      'section-cross': 'Combination: title, text, services, and callbacks',
      'section-preview-manager': 'HTML preview — preference manager (portaled at runtime)',
    },
  },
})

const codeUsage = `import { BjConsent } from '@flrxnt/dsbj/react'

const services = [
  { id: 'analytics', name: 'Mesure d’audience', description: 'Statistiques anonymes.' },
  { id: 'required', name: 'Indispensable', required: true },
]

export function Example() {
  return (
    <BjConsent
      title="Gestion des cookies"
      text="Nous utilisons des cookies pour améliorer le site."
      services={services}
      onAccept={() => {
        localStorage.setItem('consent', 'all')
      }}
      onRefuse={() => {
        localStorage.setItem('consent', 'essential')
      }}
      onCustomize={(accepted) => {
        localStorage.setItem('consent', JSON.stringify(accepted))
      }}
    />
  )
}`

const codeCallbacks = `import { useCallback } from 'react'
import { BjConsent } from '@flrxnt/dsbj/react'

type Service = { id: string; name: string; description?: string; required?: boolean }

export function ConsentTracked({ services }: { services: Service[] }) {
  const onAccept = useCallback(() => {
    console.log('accept all')
  }, [])
  const onRefuse = useCallback(() => {
    console.log('refuse all')
  }, [])
  const onCustomize = useCallback((accepted: string[]) => {
    console.log('saved ids', accepted)
  }, [])

  return (
    <BjConsent
      services={services}
      onAccept={onAccept}
      onRefuse={onRefuse}
      onCustomize={onCustomize}
    />
  )
}`

const codeServices = `const services = [
  { id: 'req', name: 'Sécurité', required: true, description: 'Toujours actif.' },
  { id: 'ads', name: 'Publicité', description: 'Optionnel.' },
]`

const codeChildren = `import { BjConsent } from '@flrxnt/dsbj/react'

export function ConsentWithSlot() {
  return (
    <BjConsent title="Cookies" text="Description courte.">
      <p className="bj-text-sm">
        <a href="/politique">Politique de confidentialité</a>
      </p>
    </BjConsent>
  )
}`

const codeCross = `import { BjConsent } from '@flrxnt/dsbj/react'

export function ConsentFull() {
  const services = [
    { id: 'necessary', name: 'Nécessaires', required: true },
    { id: 'stats', name: 'Statistiques' },
  ]
  return (
    <BjConsent
      title="Vos choix"
      text="Personnalisez les catégories ci-dessous ou via le bouton Personnaliser."
      services={services}
      className="my-consent"
      role="dialog"
      onAccept={() => {
        /* … */
      }}
      onRefuse={() => {
        /* … */
      }}
      onCustomize={(accepted) => {
        /* persister accepted (string[]) */
      }}
    >
      <p className="bj-text-sm">Texte additionnel.</p>
    </BjConsent>
  )
}`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: 'services', description: t('prop-services') },
  { name: 'onAccept', description: t('prop-onAccept') },
  { name: 'onRefuse', description: t('prop-onRefuse') },
  { name: 'onCustomize', description: t('prop-onCustomize') },
  { name: 'children', description: t('prop-children') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-consent-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-consent-callbacks" :title="t('section-callbacks')">
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-consent-services" :title="t('section-services')">
    <DocsCode :code="codeServices" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-consent-children" :title="t('section-children')">
    <DocsPreview>
      <div class="bj-consent-banner" data-bj-consent-banner role="dialog" style="position: relative">
        <div class="bj-consent-banner__body">
          <div class="bj-consent-banner__header">
            <i class="bj-consent-banner__icon ri-shield-check-line" aria-hidden="true"></i>
            <p class="bj-consent-banner__title">Cookies</p>
          </div>
          <p class="bj-consent-banner__text">Description courte.</p>
          <p class="bj-text-sm"><a href="#" class="bj-link">Politique de confidentialité</a></p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-consent-cross" :title="t('section-cross')">
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-consent-preview-manager" :title="t('section-preview-manager')">
    <DocsPreview>
      <div class="bj-consent-manager" style="position: relative; display: flex; min-height: 200px">
        <div class="bj-consent-manager__dialog" style="margin: auto; position: relative">
          <div class="bj-consent-manager__header">
            <h2 class="bj-consent-manager__title">Préférences de cookies</h2>
          </div>
          <div class="bj-consent-manager__body">
            <div class="bj-consent-service">
              <div class="bj-consent-service__info">
                <p class="bj-consent-service__name">Mesure d’audience</p>
                <p class="bj-consent-service__desc">Statistiques anonymes.</p>
              </div>
              <label class="bj-toggle bj-consent-service__toggle">
                <input type="checkbox" class="bj-toggle__input" checked />
              </label>
            </div>
          </div>
          <div class="bj-consent-manager__footer">
            <button type="button" class="bj-btn">Enregistrer</button>
            <button type="button" class="bj-btn bj-btn--tertiary">Annuler</button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-consent-preview" :title="t('section-preview')">
    <DocsPreview>
      <div
        class="bj-consent-banner"
        data-bj-consent-banner
        role="dialog"
        aria-label="Consentement aux cookies"
        style="position: relative"
      >
        <div class="bj-consent-banner__body">
          <div class="bj-consent-banner__header">
            <i class="bj-consent-banner__icon ri-shield-check-line" aria-hidden="true"></i>
            <p class="bj-consent-banner__title">Gestion des cookies</p>
          </div>
          <p class="bj-consent-banner__text">
            Ce site utilise des cookies pour améliorer votre expérience.
          </p>
          <div class="bj-consent-banner__actions">
            <button type="button" class="bj-btn" data-bj-consent-accept>Tout accepter</button>
            <button type="button" class="bj-btn bj-btn--secondary" data-bj-consent-refuse>
              Tout refuser
            </button>
            <button type="button" class="bj-btn bj-btn--tertiary" data-bj-consent-customize>
              Personnaliser
            </button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-consent-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
