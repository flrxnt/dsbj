<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bandeau',
      desc:
        'Bandeau horizontal pour annonces globales (maintenance, lien d’urgence, cookie). Plus compact que l’alerte encadrée ; s’intègre souvent sous l’en-tête.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'prop-bj-notice':
        'Bandeau flex, fond alternatif, bordure basse.',
      'prop-bj-notice__icon': 'Icône à gauche.',
      'prop-bj-notice__body':
        'Texte principal (peut contenir un bj-notice__title en gras).',
      'prop-bj-notice__title':
        'Préfixe ou intitulé court dans le corps.',
      'prop-bj-notice__close': 'Bouton de fermeture à droite.',
      'prop-bj-notice--info':
        'Accent gauche information (bleu).',
      'prop-bj-notice--warning': 'Accent avertissement.',
      'prop-bj-notice--alert':
        'Accent critique (erreur / urgence).',
      'a11y-note':
        'Pour un message non critique et statique, <code>role="status"</code> convient. Pour une urgence immédiate, <code>role="alert"</code> peut être approprié. Le bouton « fermer » exige un libellé explicite ; si le bandeau disparaît, évitez de piéger le focus.',
    },
    en: {
      title: 'Notice bar',
      desc:
        'Horizontal bar for global announcements (maintenance, emergency link, cookies). More compact than a framed alert; often sits under the header.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'prop-bj-notice':
        'Flex bar, alternate background, bottom border.',
      'prop-bj-notice__icon': 'Icon on the left.',
      'prop-bj-notice__body':
        'Main text (may include a bold bj-notice__title).',
      'prop-bj-notice__title':
        'Prefix or short label in the body.',
      'prop-bj-notice__close': 'Close button on the right.',
      'prop-bj-notice--info': 'Left accent for information (blue).',
      'prop-bj-notice--warning': 'Warning accent.',
      'prop-bj-notice--alert':
        'Critical accent (error / urgency).',
      'a11y-note':
        'For non-critical static messages, <code>role="status"</code> is appropriate. For immediate urgency, <code>role="alert"</code> may fit. The close button needs a clear label; if the bar is removed, avoid trapping focus.',
    },
  },
})

const codeExemple = `<div class="bj-notice" role="status">
  <span class="bj-notice__icon" aria-hidden="true">…</span>
  <div class="bj-notice__body">…</div>
</div>`

const codeVariantes = `<div class="bj-notice bj-notice--info">…</div>
<div class="bj-notice bj-notice--warning">…</div>
<div class="bj-notice bj-notice--alert">…</div>`

const propsRows = computed(() => [
  {
    name: 'bj-notice',
    description: t('prop-bj-notice'),
  },
  { name: 'bj-notice__icon', description: t('prop-bj-notice__icon') },
  {
    name: 'bj-notice__body',
    description: t('prop-bj-notice__body'),
  },
  {
    name: 'bj-notice__title',
    description: t('prop-bj-notice__title'),
  },
  {
    name: 'bj-notice__close',
    description: t('prop-bj-notice__close'),
  },
  {
    name: 'bj-notice--info',
    description: t('prop-bj-notice--info'),
  },
  {
    name: 'bj-notice--warning',
    description: t('prop-bj-notice--warning'),
  },
  {
    name: 'bj-notice--alert',
    description: t('prop-bj-notice--alert'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-notice" :title="t('section-exemple')">
    <DocsPreview style="padding: 0">
      <div class="bj-notice" role="status">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-megaphone-line bj-icon"></i
        ></span>
        <div class="bj-notice__body">
          Le guichet physique est fermé le vendredi après-midi.
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-notice" :title="t('section-variantes')">
    <DocsPreview
      style="
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
      "
    >
      <div class="bj-notice bj-notice--info" role="status">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-information-line bj-icon bj-icon--info"></i
        ></span>
        <div class="bj-notice__body">
          <span class="bj-notice__title">Info - </span>Nouvelle
          version du portail disponible.
        </div>
      </div>
      <div class="bj-notice bj-notice--warning" role="status">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-alert-line bj-icon bj-icon--warning"></i
        ></span>
        <div class="bj-notice__body">
          Délai de réponse allongé pendant les travaux.
        </div>
      </div>
      <div class="bj-notice bj-notice--alert" role="alert">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-error-warning-line bj-icon bj-icon--error"></i
        ></span>
        <div class="bj-notice__body">
          Interruption programmée ce soir de 22h à 2h.
        </div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-notice" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-notice" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
