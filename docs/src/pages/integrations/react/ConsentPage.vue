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
      onAccept={() => {}}
      onRefuse={() => {}}
      onCustomize={() => {}}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: 'services', description: t('prop-services') },
  { name: 'onAccept', description: t('prop-onAccept') },
  { name: 'onRefuse', description: t('prop-onRefuse') },
  { name: 'onCustomize', description: t('prop-onCustomize') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-consent-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
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
