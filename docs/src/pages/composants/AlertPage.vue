<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Alerte',
      desc: 'Message structuré dans le flux de la page : icône, titre optionnel, texte et modificateurs sémantiques (information par défaut, succès, attention, erreur). Tailles <code>sm</code> / <code>md</code> et bouton de fermeture optionnel.',
      'section-examples': 'Exemples',
      'section-close': 'Alerte avec bouton de fermeture',
      'section-sm': 'Alerte compacte',
      'para-sm':
        'La classe <code>bj-alert--sm</code> réduit le padding et les tailles de texte pour les encarts ou colonnes étroites.',
      'section-variant-size': 'Variante × taille',
      'para-variant-size':
        'Les quatre tons avec <code>bj-alert--sm</code> : info = <code>bj-alert</code> seul (pas de <code>bj-alert--info</code>), puis <code>bj-alert--success</code>, <code>bj-alert--warning</code>, <code>bj-alert--error</code>.',
      'section-variant-close': 'Variante × fermeture',
      'para-variant-close':
        'Le bouton <code>bj-alert__close</code> peut accompagner n’importe quelle variante ; la structure reste icône + corps + bouton optionnel.',
      'section-variant-close-matrix': 'Toutes les variantes × fermeture',
      'para-variant-close-matrix':
        'Chaque variante peut inclure <code>bj-alert__close</code> avec le même couple d’icônes Remix.',
      'section-structure': 'Structure HTML (icône)',
      'para-structure':
        'Reproduisez les icônes Remix utilisées par le composant Vue : <code>ri-information-line</code> (info), <code>ri-checkbox-circle-line</code> (succès), <code>ri-alert-line</code> (avertissement), <code>ri-error-warning-line</code> (erreur).',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Pour les messages importants ou injectés dynamiquement, utilisez <code>role="alert"</code> afin que les technologies d’assistance les annoncent sans délai. Pour une alerte statique dans le flux, <code>role="region"</code> avec <code>aria-labelledby</code> sur le titre permet de nommer la zone. Le bouton de fermeture doit porter un <code>aria-label</code> explicite ; après fermeture, gérez le focus en JavaScript pour éviter de le perdre. Masquez l’icône décorative avec <code>aria-hidden="true"</code>.',
      'prop-bj-alert':
        'Conteneur flex de l’alerte ; style information (bordure et fond) sans modificateur supplémentaire.',
      'prop-bj-alert-icon': 'Icône sémantique à gauche (Remix Icon).',
      'prop-bj-alert-body': 'Zone titre + texte.',
      'prop-bj-alert-title': 'Titre du message (optionnel).',
      'prop-bj-alert-text': 'Corps du message.',
      'prop-bj-alert-close':
        'Bouton de fermeture aligné à droite (aucune classe <code>bj-alert--closable</code> en feuille de style — la présence du bouton suffit).',
      'prop-bj-alert-success': 'Variante succès (bordure et fond).',
      'prop-bj-alert-warning': 'Variante avertissement.',
      'prop-bj-alert-error': 'Variante erreur.',
      'prop-bj-alert-sm': 'Variante compacte.',
    },
    en: {
      title: 'Alert',
      desc: 'Structured in-flow message: icon, optional title, text, and semantic modifiers (information by default, success, warning, error). <code>sm</code> / <code>md</code> sizes and optional close button.',
      'section-examples': 'Examples',
      'section-close': 'Alert with close button',
      'section-sm': 'Compact alert',
      'para-sm':
        'The <code>bj-alert--sm</code> class reduces padding and text sizes for sidebars or narrow columns.',
      'section-variant-size': 'Variant × size',
      'para-variant-size':
        'All four tones with <code>bj-alert--sm</code>: info = base <code>bj-alert</code> only (no <code>bj-alert--info</code>), then <code>bj-alert--success</code>, <code>bj-alert--warning</code>, <code>bj-alert--error</code>.',
      'section-variant-close': 'Variant × close',
      'para-variant-close':
        'The <code>bj-alert__close</code> button can sit on any variant; structure stays icon + body + optional button.',
      'section-variant-close-matrix': 'All variants × dismiss',
      'para-variant-close-matrix':
        'Each variant can include <code>bj-alert__close</code> with the same Remix icon pairing.',
      'section-structure': 'HTML structure (icon)',
      'para-structure':
        'Match the Remix icons from the Vue component: <code>ri-information-line</code> (info), <code>ri-checkbox-circle-line</code> (success), <code>ri-alert-line</code> (warning), <code>ri-error-warning-line</code> (error).',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'For important or dynamically injected messages, use <code>role="alert"</code> so assistive technologies announce them immediately. For a static in-flow alert, <code>role="region"</code> with <code>aria-labelledby</code> on the title names the region. The close button needs an explicit <code>aria-label</code>; after closing, manage focus in JavaScript so it is not lost. Hide decorative icons with <code>aria-hidden="true"</code>.',
      'prop-bj-alert':
        'Flex alert container; information styling with no extra variant class.',
      'prop-bj-alert-icon': 'Semantic icon on the left (Remix Icon).',
      'prop-bj-alert-body': 'Title + text area.',
      'prop-bj-alert-title': 'Message title (optional).',
      'prop-bj-alert-text': 'Message body.',
      'prop-bj-alert-close':
        'Close button on the right (no <code>bj-alert--closable</code> in CSS—the button itself is the dismiss UI).',
      'prop-bj-alert-success': 'Success variant (border and background).',
      'prop-bj-alert-warning': 'Warning variant.',
      'prop-bj-alert-error': 'Error variant.',
      'prop-bj-alert-sm': 'Compact variant.',
    },
  },
})

const codeExemples = `<div class="bj-alert" role="alert">
  <i class="bj-alert__icon ri-information-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Information</p>
    <div class="bj-alert__text">Votre demande a bien été prise en compte.</div>
  </div>
</div>
<div class="bj-alert bj-alert--success" role="alert">
  <i class="bj-alert__icon ri-checkbox-circle-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Succès</p>
    <div class="bj-alert__text">Votre dossier a été enregistré avec succès.</div>
  </div>
</div>
<div class="bj-alert bj-alert--warning" role="alert">
  <i class="bj-alert__icon ri-alert-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Attention</p>
    <div class="bj-alert__text">Certaines pièces jointes ne sont pas au format attendu.</div>
  </div>
</div>
<div class="bj-alert bj-alert--error" role="alert">
  <i class="bj-alert__icon ri-error-warning-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Erreur</p>
    <div class="bj-alert__text">La soumission a échoué. Réessayez ultérieurement.</div>
  </div>
</div>`

const codeClose = `<div class="bj-alert" role="alert">
  <i class="bj-alert__icon ri-information-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Titre de l'alerte</p>
    <div class="bj-alert__text">Description détaillée.</div>
  </div>
  <button type="button" class="bj-alert__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
</div>`

const codeSm = `<div class="bj-alert bj-alert--sm" role="alert">
  <i class="bj-alert__icon ri-information-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Rappel</p>
    <div class="bj-alert__text">Les guichets ferment à 17 h 00 les jours ouvrés.</div>
  </div>
</div>`

const codeVariantSize = `<!-- Info sm (classe de base, pas de --info) -->
<div class="bj-alert bj-alert--sm" role="alert">
  <i class="bj-alert__icon ri-information-line" aria-hidden="true"></i>
  <div class="bj-alert__body"><div class="bj-alert__text">Info compacte.</div></div>
</div>
<div class="bj-alert bj-alert--success bj-alert--sm" role="alert">…</div>
<div class="bj-alert bj-alert--warning bj-alert--sm" role="alert">…</div>
<div class="bj-alert bj-alert--error bj-alert--sm" role="alert">…</div>`

const codeVariantClose = `<div class="bj-alert bj-alert--warning" role="alert">
  <i class="bj-alert__icon ri-alert-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <p class="bj-alert__title">Maintenance</p>
    <div class="bj-alert__text">Interruption prévue ce soir.</div>
  </div>
  <button type="button" class="bj-alert__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
</div>`

const codeVariantCloseMatrix = `<div class="bj-alert" role="alert">
  <i class="bj-alert__icon ri-information-line" aria-hidden="true"></i>
  <div class="bj-alert__body"><div class="bj-alert__text">Info.</div></div>
  <button type="button" class="bj-alert__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
</div>
<div class="bj-alert bj-alert--success" role="alert">… + bj-alert__close</div>
<div class="bj-alert bj-alert--warning" role="alert">… + bj-alert__close</div>
<div class="bj-alert bj-alert--error" role="alert">… + bj-alert__close</div>`

const codeSansTitre = `<div class="bj-alert" role="alert">
  <i class="bj-alert__icon ri-information-line" aria-hidden="true"></i>
  <div class="bj-alert__body">
    <div class="bj-alert__text">Message sans titre : omettez <code>bj-alert__title</code>.</div>
  </div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-alert', description: t('prop-bj-alert') },
  { name: 'bj-alert__icon', description: t('prop-bj-alert-icon') },
  { name: 'bj-alert__body', description: t('prop-bj-alert-body') },
  { name: 'bj-alert__title', description: t('prop-bj-alert-title') },
  { name: 'bj-alert__text', description: t('prop-bj-alert-text') },
  { name: 'bj-alert__close', description: t('prop-bj-alert-close') },
  {
    name: 'bj-alert--success',
    description: t('prop-bj-alert-success'),
  },
  {
    name: 'bj-alert--warning',
    description: t('prop-bj-alert-warning'),
  },
  {
    name: 'bj-alert--error',
    description: t('prop-bj-alert-error'),
  },
  { name: 'bj-alert--sm', description: t('prop-bj-alert-sm') },
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
    <span v-html="t('desc')" />
  </p>

  <DocsSection id="sec-structure-alert" :title="t('section-structure')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-structure')" />
    </p>
  </DocsSection>

  <DocsSection id="sec-exemples-alert" :title="t('section-examples')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div class="bj-alert" role="alert">
        <i
          class="bj-alert__icon ri-information-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Information</p>
          <div class="bj-alert__text">
            Votre demande a bien été prise en compte.
          </div>
        </div>
      </div>
      <div class="bj-alert bj-alert--success" role="alert">
        <i
          class="bj-alert__icon ri-checkbox-circle-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Succès</p>
          <div class="bj-alert__text">
            Votre dossier a été enregistré avec succès.
          </div>
        </div>
      </div>
      <div class="bj-alert bj-alert--warning" role="alert">
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Attention</p>
          <div class="bj-alert__text">
            Certaines pièces jointes ne sont pas au format attendu.
          </div>
        </div>
      </div>
      <div class="bj-alert bj-alert--error" role="alert">
        <i
          class="bj-alert__icon ri-error-warning-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Erreur</p>
          <div class="bj-alert__text">
            La soumission a échoué. Réessayez ultérieurement.
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemples" />
    <DocsCode :code="codeSansTitre" />
  </DocsSection>

  <DocsSection id="sec-alert-close" :title="t('section-close')">
    <DocsPreview>
      <div class="bj-alert" role="alert">
        <i
          class="bj-alert__icon ri-information-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Titre de l'alerte</p>
          <div class="bj-alert__text">Description détaillée.</div>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeClose" />
  </DocsSection>

  <DocsSection id="sec-alert-sm" :title="t('section-sm')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-sm')" />
    </p>
    <DocsPreview>
      <div class="bj-alert bj-alert--sm" role="alert">
        <i
          class="bj-alert__icon ri-information-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Rappel</p>
          <div class="bj-alert__text">
            Les guichets ferment à 17 h 00 les jours ouvrés.
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSm" />
  </DocsSection>

  <DocsSection id="sec-alert-variant-size" :title="t('section-variant-size')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-variant-size')" />
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div class="bj-alert bj-alert--sm" role="alert">
        <i
          class="bj-alert__icon ri-information-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Info compacte (classe de base).</div>
        </div>
      </div>
      <div
        class="bj-alert bj-alert--success bj-alert--sm"
        role="alert"
      >
        <i
          class="bj-alert__icon ri-checkbox-circle-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Succès compact.</div>
        </div>
      </div>
      <div
        class="bj-alert bj-alert--warning bj-alert--sm"
        role="alert"
      >
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Avertissement compact.</div>
        </div>
      </div>
      <div class="bj-alert bj-alert--error bj-alert--sm" role="alert">
        <i
          class="bj-alert__icon ri-error-warning-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Échec</p>
          <div class="bj-alert__text">Réessayez plus tard.</div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantSize" />
  </DocsSection>

  <DocsSection id="sec-alert-variant-close" :title="t('section-variant-close')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-variant-close')" />
    </p>
    <DocsPreview>
      <div class="bj-alert bj-alert--warning" role="alert">
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">Maintenance</p>
          <div class="bj-alert__text">
            Interruption prévue ce soir.
          </div>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantClose" />
  </DocsSection>

  <DocsSection
    id="sec-alert-variant-close-matrix"
    :title="t('section-variant-close-matrix')"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-variant-close-matrix')" />
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div class="bj-alert" role="alert">
        <i
          class="bj-alert__icon ri-information-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Info avec fermeture.</div>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bj-alert bj-alert--success" role="alert">
        <i
          class="bj-alert__icon ri-checkbox-circle-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Succès avec fermeture.</div>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bj-alert bj-alert--warning" role="alert">
        <i class="bj-alert__icon ri-alert-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Avertissement avec fermeture.</div>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bj-alert bj-alert--error" role="alert">
        <i
          class="bj-alert__icon ri-error-warning-line"
          aria-hidden="true"
        />
        <div class="bj-alert__body">
          <div class="bj-alert__text">Erreur avec fermeture.</div>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantCloseMatrix" />
  </DocsSection>

  <DocsSection id="classes-alert" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-alert" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
