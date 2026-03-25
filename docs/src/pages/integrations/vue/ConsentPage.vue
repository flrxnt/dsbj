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
      desc: 'Composant Vue pour la bannière de consentement cookies DSBJ et la modale de personnalisation. Émissions accept, refuse et customize.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-title': 'Titre de la bannière (défaut : gestion des cookies).',
      'prop-text': 'Texte explicatif sous le titre.',
      'prop-services':
        'Liste des services (id, name, description et required optionnels) ; les services obligatoires restent cochés en cas de refus.',
    },
    en: {
      title: 'BjConsent',
      desc: 'Vue component for the DSBJ cookie consent banner and customization modal. Emits accept, refuse, and customize.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-title': 'Banner title (default: cookie management copy).',
      'prop-text': 'Explanatory body text.',
      'prop-services':
        'Service list with id, name, and optional description and required flag; required services stay accepted on refuse.',
    },
  },
})

const codeUsage = `<script setup>
import { BjConsent } from '@flrxnt/dsbj/vue'

const services = [
  { id: 'analytics', name: 'Mesure d’audience', description: 'Statistiques anonymes.' },
  { id: 'required', name: 'Indispensable', required: true },
]
<\/script>

<template>
  <BjConsent
    title="Gestion des cookies"
    text="Nous utilisons des cookies pour améliorer le site."
    :services="services"
    @accept="() => {}"
    @refuse="() => {}"
    @customize="() => {}"
  />
</template>`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: 'services', description: t('prop-services') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-consent-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-consent-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-consent-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
