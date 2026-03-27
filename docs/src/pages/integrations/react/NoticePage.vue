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
      title: 'BjNotice',
      desc: 'Bandeau React : variantes default, info, warning, alert ; titre et icône optionnels ; closable et onClose.',
      'section-usage': 'Utilisation',
      'section-variants': 'Variantes',
      'section-icon-title': 'Icône et titre',
      'section-closable': 'Fermeture (closable)',
      'section-combos': 'Combinaisons',
      'section-children': 'Children',
      'section-callback': 'onClose',
      'section-props': 'Props',
      'prop-variant': 'default (défaut), info, warning ou alert.',
      'prop-closable': 'Affiche le bouton et masque le bandeau au clic.',
      'prop-title': 'Titre au-dessus des children.',
      'prop-icon': 'Classe d’icône à gauche.',
      'prop-onClose': 'Callback après fermeture locale.',
      'prop-attrs': 'Autres props du div racine.',
      'children-desc': 'Corps du message (texte ou nœuds React).',
      'callback-desc': 'Utilisez <code>onClose</code> avec <code>closable</code> pour synchroniser l’UI.',
      'ex-title': 'Maintenance prévue',
      'ex-body': 'Le service sera indisponible dimanche de 2 h à 4 h.',
      'aria-close': 'Fermer',
    },
    en: {
      title: 'BjNotice',
      desc: 'React banner: default, info, warning, alert variants; optional title and icon; closable and onClose.',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-icon-title': 'Icon and title',
      'section-closable': 'Dismiss (closable)',
      'section-combos': 'Combinations',
      'section-children': 'Children',
      'section-callback': 'onClose',
      'section-props': 'Props',
      'prop-variant': 'default (default), info, warning, or alert.',
      'prop-closable': 'Shows the button and hides the banner on click.',
      'prop-title': 'Title above children.',
      'prop-icon': 'Icon class on the left.',
      'prop-onClose': 'Callback after local dismiss.',
      'prop-attrs': 'Other root div props.',
      'children-desc': 'Message body (text or React nodes).',
      'callback-desc': 'Use <code>onClose</code> with <code>closable</code> to sync UI state.',
      'ex-title': 'Scheduled maintenance',
      'ex-body': 'The service will be unavailable on Sunday from 2:00 to 4:00.',
      'aria-close': 'Close',
    },
  },
})

const codeUsage = `import { BjNotice } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjNotice
      variant="info"
      closable
      icon="ri-information-line"
      title="Maintenance prévue"
      onClose={() => console.log('closed')}
    >
      Le service sera indisponible dimanche de 2 h à 4 h.
    </BjNotice>
  )
}`

const codeVariants = `<BjNotice variant="default">Message neutre.</BjNotice>
<BjNotice variant="info" icon="ri-information-line" title="Info">
  <p>Détail info.</p>
</BjNotice>
<BjNotice variant="warning" icon="ri-alert-line" title="Attention">
  <p>Détail warning.</p>
</BjNotice>
<BjNotice variant="alert" icon="ri-error-warning-line" title="Alerte">
  <p>Détail alert.</p>
</BjNotice>`

const codeIconTitle = `<BjNotice icon="ri-information-line" title="Titre seul">
  <p>Corps.</p>
</BjNotice>
<BjNotice title="Sans icône">
  <p>Corps.</p>
</BjNotice>`

const codeClosable = `<BjNotice variant="info" closable title="Fermable" onClose={() => {}}>
  Contenu
</BjNotice>`

const codeCombos = `<BjNotice
  variant="warning"
  closable
  icon="ri-alert-line"
  title="Complet"
  onClose={() => {}}
>
  Variante + icône + titre + fermeture.
</BjNotice>`

const codeChildren = `<BjNotice variant="info" title="Détail">
  <p>Paragraphe un.</p>
  <p className="bj-text-sm">Paragraphe secondaire.</p>
</BjNotice>`

const codeOnClose = `import { useState } from 'react'
import { BjNotice } from '@flrxnt/dsbj/react'

export function Example() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <BjNotice closable variant="alert" title="Erreur" onClose={() => setOpen(false)}>
      Message critique.
    </BjNotice>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'onClose', description: t('prop-onClose') },
  { name: 'children', description: t('children-desc') },
  { name: '(div props)', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-notice-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-notice">
        <div class="bj-notice__body"><p>default</p></div>
      </div>
      <div class="bj-notice bj-notice--info">
        <i class="ri-information-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">info</p>
          <p>Détail info.</p>
        </div>
      </div>
      <div class="bj-notice bj-notice--warning">
        <i class="ri-alert-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">warning</p>
          <p>Détail warning.</p>
        </div>
      </div>
      <div class="bj-notice bj-notice--alert">
        <i class="ri-error-warning-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">alert</p>
          <p>Détail alert.</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-icon-title" :title="t('section-icon-title')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-notice bj-notice--info">
        <i class="ri-information-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">Titre + icône</p>
          <p>Corps.</p>
        </div>
      </div>
      <div class="bj-notice bj-notice--info">
        <div class="bj-notice__body">
          <p class="bj-notice__title">Sans icône</p>
          <p>Corps.</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIconTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-closable" :title="t('section-closable')">
    <DocsPreview>
      <div class="bj-notice bj-notice--info">
        <i class="ri-information-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">{{ t('ex-title') }}</p>
          <p>{{ t('ex-body') }}</p>
        </div>
        <button type="button" class="bj-notice__close" :aria-label="t('aria-close')">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeClosable" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-combos" :title="t('section-combos')">
    <DocsPreview>
      <div class="bj-notice bj-notice--warning">
        <i class="ri-alert-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">warning + closable + icône</p>
          <p>Combinaison complète.</p>
        </div>
        <button type="button" class="bj-notice__close" :aria-label="t('aria-close')">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombos" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-callback" :title="t('section-callback')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('callback-desc')" />
    <DocsCode :code="codeOnClose" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
