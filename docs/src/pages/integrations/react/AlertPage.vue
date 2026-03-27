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
      title: 'BjAlert',
      desc: 'Alerte React avec variantes sémantiques, taille compacte, titre optionnel, fermeture optionnelle et callback onClose ; le conteneur définit role="alert".',
      'section-usage': 'Utilisation',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-variant-size': 'Variantes × tailles',
      'section-title-closable': 'Titre et fermeture',
      'section-children': 'Contenu (children)',
      'section-callback': 'Callback onClose',
      'section-props': 'Props',
      'prop-variant': 'info (défaut), success, warning ou error.',
      'prop-size': 'md (défaut) ou sm.',
      'prop-closable': 'Affiche le bouton de fermeture et masque le bloc après fermeture.',
      'prop-title': 'Titre au-dessus du contenu enfant.',
      'prop-onClose': 'Invoqué après la fermeture locale (avec closable).',
      'prop-attrs': 'Attributs div natifs supplémentaires (sauf children et title).',
      'children-desc': 'Passez le message principal en children (texte ou éléments React).',
      'callback-desc':
        'Utilisez <code>onClose</code> pour synchroniser un état externe, envoyer une analytics ou retirer l’alerte d’une liste.',
      'ex-info': 'Information',
      'ex-success': 'Succès',
      'ex-warning': 'Attention',
      'ex-error': 'Erreur',
      'ex-body-info': 'Votre session expirera dans 5 minutes.',
      'ex-body-success': 'Votre dossier a été enregistré.',
      'ex-body-warning': 'Vérifiez les champs avant de valider.',
      'ex-body-error': 'La soumission a échoué. Réessayez.',
      'ex-title-dismiss': 'Fermable',
      'ex-body-dismiss': 'Cette alerte peut être masquée par l’utilisateur.',
    },
    en: {
      title: 'BjAlert',
      desc: 'React alert with semantic variants, compact size, optional title, optional dismiss, and onClose callback; the root sets role="alert".',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-variant-size': 'Variants × sizes',
      'section-title-closable': 'Title and dismiss',
      'section-children': 'Content (children)',
      'section-callback': 'onClose callback',
      'section-props': 'Props',
      'prop-variant': 'info (default), success, warning, or error.',
      'prop-size': 'md (default) or sm.',
      'prop-closable': 'Shows dismiss and hides the block after close.',
      'prop-title': 'Title above child content.',
      'prop-onClose': 'Called after local dismiss (with closable).',
      'prop-attrs': 'Extra native div attributes (except children and title).',
      'children-desc': 'Pass the main message as children (text or React nodes).',
      'callback-desc':
        'Use <code>onClose</code> to sync external state, track analytics, or remove the alert from a list.',
      'ex-info': 'Information',
      'ex-success': 'Success',
      'ex-warning': 'Warning',
      'ex-error': 'Error',
      'ex-body-info': 'Your session will expire in 5 minutes.',
      'ex-body-success': 'Your file has been saved.',
      'ex-body-warning': 'Review the fields before submitting.',
      'ex-body-error': 'Submission failed. Please try again.',
      'ex-title-dismiss': 'Dismissible',
      'ex-body-dismiss': 'This alert can be dismissed by the user.',
    },
  },
})

const codeUsage = `import { BjAlert } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjAlert variant="success" title="Succès">
      Votre dossier a été enregistré.
    </BjAlert>
  )
}`

const codeVariants = `<BjAlert variant="info" title="Information">Message info.</BjAlert>
<BjAlert variant="success" title="Succès">Message succès.</BjAlert>
<BjAlert variant="warning" title="Attention">Message avertissement.</BjAlert>
<BjAlert variant="error" title="Erreur">Message erreur.</BjAlert>`

const codeSizes = `<BjAlert variant="warning" size="sm" title="Compact">Alerte sm.</BjAlert>
<BjAlert variant="warning" size="md" title="Par défaut">Alerte md.</BjAlert>`

const codeVariantSize = `<BjAlert variant="success" size="sm" title="sm">Corps sm.</BjAlert>
<BjAlert variant="success" title="md">Corps md.</BjAlert>
<BjAlert variant="error" size="sm" title="sm">Erreur sm.</BjAlert>
<BjAlert variant="error" title="md">Erreur md.</BjAlert>`

const codeTitleClosable = `<BjAlert variant="info" title="À lire" closable onClose={() => console.log('closed')}>
  Contenu important pour l’utilisateur.
</BjAlert>`

const codeChildren = `<BjAlert variant="warning">
  <p>Paragraphe dans children.</p>
  <p className="bj-text-sm">Ligne secondaire.</p>
</BjAlert>`

const codeOnClose = `import { useState } from 'react'
import { BjAlert } from '@flrxnt/dsbj/react'

export function Example() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <BjAlert closable variant="info" onClose={() => setOpen(false)}>
      Fermez pour mettre à jour l’état parent.
    </BjAlert>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
  { name: 'onClose', description: t('prop-onClose') },
  { name: 'children', description: t('children-desc') },
  { name: '(div props)', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-alert-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-alert" role="alert">
        <i class="bj-alert__icon ri-information-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ t('ex-info') }}</p>
          <div class="bj-alert__text">{{ t('ex-body-info') }}</div>
        </div>
      </div>
      <div class="bj-alert bj-alert--success" role="alert">
        <i class="bj-alert__icon ri-checkbox-circle-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ t('ex-success') }}</p>
          <div class="bj-alert__text">{{ t('ex-body-success') }}</div>
        </div>
      </div>
      <div class="bj-alert bj-alert--warning" role="alert">
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ t('ex-warning') }}</p>
          <div class="bj-alert__text">{{ t('ex-body-warning') }}</div>
        </div>
      </div>
      <div class="bj-alert bj-alert--error" role="alert">
        <i class="bj-alert__icon ri-error-warning-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ t('ex-error') }}</p>
          <div class="bj-alert__text">{{ t('ex-body-error') }}</div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-alert bj-alert--warning bj-alert--sm" role="alert">
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">sm</p>
          <div class="bj-alert__text">Alerte compacte.</div>
        </div>
      </div>
      <div class="bj-alert bj-alert--warning" role="alert">
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">md</p>
          <div class="bj-alert__text">Taille par défaut.</div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-variant-size" :title="t('section-variant-size')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: var(--bj-spacing-3v);
      "
    >
      <div v-for="v in ['success', 'error']" :key="v" class="bj-alert" :class="[`bj-alert--${v}`, 'bj-alert--sm']" role="alert">
        <i
          class="bj-alert__icon"
          :class="v === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ v }} sm</p>
          <div class="bj-alert__text">…</div>
        </div>
      </div>
      <div v-for="v in ['success', 'error']" :key="`${v}-md`" class="bj-alert" :class="`bj-alert--${v}`" role="alert">
        <i
          class="bj-alert__icon"
          :class="v === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ v }} md</p>
          <div class="bj-alert__text">…</div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantSize" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-title-closable" :title="t('section-title-closable')">
    <DocsPreview>
      <div class="bj-alert bj-alert--info" role="alert">
        <i class="bj-alert__icon ri-information-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ t('ex-title-dismiss') }}</p>
          <div class="bj-alert__text">{{ t('ex-body-dismiss') }}</div>
        </div>
        <button type="button" class="bj-alert__close" aria-label="Fermer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTitleClosable" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-callback" :title="t('section-callback')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('callback-desc')" />
    <DocsCode :code="codeOnClose" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
