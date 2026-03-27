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
      desc: 'Bandeau avec variantes default, info, warning et alert ; titre et icône optionnels, fermeture optionnelle et événement close.',
      'section-usage': 'Utilisation',
      'section-variants': 'Variantes',
      'section-icon-title': 'Icône et titre',
      'section-closable': 'Fermeture (closable)',
      'section-combos': 'Combinaisons',
      'section-slot': 'Slot par défaut',
      'section-events': 'Événements',
      'section-props': 'Props',
      'section-emits': 'Émissions',
      'prop-variant': 'default (défaut), info, warning ou alert.',
      'prop-closable': 'Affiche le bouton fermer ; masque le bandeau et émet close.',
      'prop-title': 'Titre au-dessus du slot.',
      'prop-icon': 'Classe d’icône à gauche du corps.',
      'prop-attrs': 'Attributs transmis au div racine.',
      'emit-close': 'Émis après fermeture locale si closable.',
      'slot-desc': 'Le détail du message est dans le slot par défaut (souvent un paragraphe).',
      'events-desc': 'Écoutez <code>{\'@\'}close</code> pour mettre à jour un état ou journaliser.',
      'ex-title': 'Maintenance prévue',
      'ex-body': 'Le service sera indisponible dimanche de 2 h à 4 h.',
      'code-title': 'Maintenance prévue',
      'code-body': 'Le service sera indisponible dimanche de 2 h à 4 h.',
      'aria-close': 'Fermer',
    },
    en: {
      title: 'BjNotice',
      desc: 'Banner with default, info, warning, and alert variants; optional title and icon; optional dismiss and close emit.',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-icon-title': 'Icon and title',
      'section-closable': 'Dismiss (closable)',
      'section-combos': 'Combinations',
      'section-slot': 'Default slot',
      'section-events': 'Events',
      'section-props': 'Props',
      'section-emits': 'Emits',
      'prop-variant': 'default (default), info, warning, or alert.',
      'prop-closable': 'Shows dismiss; hides the banner and emits close.',
      'prop-title': 'Title above the slot.',
      'prop-icon': 'Icon class to the left of the body.',
      'prop-attrs': 'Attributes forwarded to the root div.',
      'emit-close': 'Emitted after local dismiss when closable.',
      'slot-desc': 'Message detail goes in the default slot (often a paragraph).',
      'events-desc': 'Listen for <code>{\'@\'}close</code> to sync state or log.',
      'ex-title': 'Scheduled maintenance',
      'ex-body': 'The service will be unavailable on Sunday from 2:00 to 4:00.',
      'code-title': 'Scheduled maintenance',
      'code-body': 'The service will be unavailable on Sunday from 2:00 to 4:00.',
      'aria-close': 'Close',
    },
  },
})

const codeUsage = computed(() => {
  const title = t('code-title').replace(/"/g, '&quot;')
  const body = t('code-body')
  return `<script setup>
import { BjNotice } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjNotice variant="info" closable icon="ri-information-line" title="${title}" @close="onClose">
    ${body}
  </BjNotice>
</template>`
})

const codeVariants = `<BjNotice variant="default">Message neutre.</BjNotice>
<BjNotice variant="info" icon="ri-information-line" title="Info">Détail info.</BjNotice>
<BjNotice variant="warning" icon="ri-alert-line" title="Attention">Détail warning.</BjNotice>
<BjNotice variant="alert" icon="ri-error-warning-line" title="Alerte">Détail alert.</BjNotice>`

const codeIconTitle = `<BjNotice icon="ri-information-line" title="Titre seul">Corps.</BjNotice>
<BjNotice title="Sans icône">Corps sans icône à gauche.</BjNotice>`

const codeClosable = `<BjNotice variant="info" closable title="Fermable" @close="onClose">
  Contenu
</BjNotice>`

const codeCombos = `<BjNotice variant="warning" closable icon="ri-alert-line" title="Complet" @close="onClose">
  Variante + icône + titre + fermeture.
</BjNotice>`

const codeSlot = `<BjNotice variant="info" title="Détail">
  <p>Paragraphe un.</p>
  <p class="bj-text-sm">Paragraphe secondaire.</p>
</BjNotice>`

const codeEvents = `<script setup>
function onClose() {
  console.log('Notice fermée')
}
<\\/script>

<template>
  <BjNotice closable variant="alert" title="Erreur" @close="onClose">Message critique.</BjNotice>
</template>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
  { name: 'icon', description: t('prop-icon') },
  { name: '(div attrs)', description: t('prop-attrs') },
])

const emitRows = computed(() => [{ name: 'close', description: t('emit-close') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-notice-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-variants" :title="t('section-variants')">
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
    <DocsCode :code="codeVariants" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-icon-title" :title="t('section-icon-title')">
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
    <DocsCode :code="codeIconTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-closable" :title="t('section-closable')">
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
    <DocsCode :code="codeClosable" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-combos" :title="t('section-combos')">
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
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-slot" :title="t('section-slot')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('slot-desc') }}</p>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-events" :title="t('section-events')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('events-desc')" />
    <DocsCode :code="codeEvents" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="vue-notice-emits" :title="t('section-emits')">
    <DocsPropsTable :headers="['Émission', 'Description']" :rows="emitRows" />
  </DocsSection>
</template>
