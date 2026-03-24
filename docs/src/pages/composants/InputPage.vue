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
      title: 'Champ de saisie',
      desc: 'Libellé, texte d’aide, champ texte ou multiligne, états de validation et champ avec icône pour les formulaires des services publics.',
      'section-default-example': 'Exemple par défaut',
      'section-validation': 'États de validation',
      'section-icon': 'Champ avec icône',
      'section-textarea': 'Zone de texte',
      'section-disabled': 'Champ désactivé',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-input-group':
        'Conteneur vertical (label, aide, champ, message).',
      'prop-label': 'Libellé du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-input': 'Champ input ou textarea.',
      'prop-input-sm': 'Variante compacte du champ.',
      'prop-input-group-state':
        'États de validation sur le groupe.',
      'prop-message':
        'Messages de retour sous le champ.',
      'prop-input-wrap': 'Conteneur pour champ avec icône.',
      'prop-input-wrap-icon':
        'Icône positionnée (alternative au marquage avec élément i).',
      'a11y-note':
        'Associez toujours un <code>label</code> explicite au champ (<code>for</code> / <code>id</code>). Liez le texte d’aide et les messages de validation au champ avec <code>aria-describedby</code> (identifiants uniques sur les éléments décrits). En cas d’erreur, utilisez <code>aria-invalid="true"</code> et un message en <code>role="alert"</code> ou <code>role="status"</code> selon le contexte.',
    },
    en: {
      title: 'Text input',
      desc: 'Label, hint text, single-line or multiline field, validation states, and icon-prefixed field for public-sector forms.',
      'section-default-example': 'Default example',
      'section-validation': 'Validation states',
      'section-icon': 'Input with icon',
      'section-textarea': 'Text area',
      'section-disabled': 'Disabled field',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-input-group':
        'Vertical wrapper (label, hint, field, message).',
      'prop-label': 'Field label.',
      'prop-hint': 'Help text below the label.',
      'prop-input': 'Input or textarea element.',
      'prop-input-sm': 'Compact field variant.',
      'prop-input-group-state': 'Validation state on the group.',
      'prop-message': 'Feedback messages below the field.',
      'prop-input-wrap': 'Wrapper for input with icon.',
      'prop-input-wrap-icon':
        'Positioned icon (alternative to marking up with an <code>i</code> element).',
      'a11y-note':
        'Always associate an explicit <code>label</code> with the field (<code>for</code> / <code>id</code>). Link hint text and validation messages with <code>aria-describedby</code> (unique ids on the described elements). On error, use <code>aria-invalid="true"</code> and a message with <code>role="alert"</code> or <code>role="status"</code> as appropriate.',
    },
  },
})

const codeDefault = `<div class="bj-input-group">
  <label class="bj-label" for="ex1">Nom</label>
  <span class="bj-hint">Votre nom complet tel qu'il apparaît sur vos documents officiels</span>
  <input class="bj-input" type="text" id="ex1">
</div>`

const codeValidation = `<!-- Succès -->
<div class="bj-input-group bj-input-group--valid">
  …
  <p class="bj-message bj-message--valid" id="msg-ok" role="status">…</p>
</div>

<!-- Erreur -->
<div class="bj-input-group bj-input-group--error">
  …
  <p class="bj-message bj-message--error" id="msg-err" role="alert">…</p>
</div>`

const codeIcon =
  '<div class="bj-input-wrap"><i class="ri-search-line"></i><input class="bj-input" type="search" placeholder="Rechercher..."></div>'

const codeTextarea = `<div class="bj-input-group">
  <label class="bj-label" for="motif">Motif de la demande</label>
  <textarea class="bj-input" id="motif" rows="4"></textarea>
</div>`

const codeDisabled =
  '<input class="bj-input" type="text" disabled value="BJ-2025-00442">'

const propsRows = computed(() => [
  {
    name: 'bj-input-group',
    description: t('prop-input-group'),
  },
  { name: 'bj-label', description: t('prop-label') },
  { name: 'bj-hint', description: t('prop-hint') },
  {
    name: 'bj-input',
    description: t('prop-input'),
  },
  { name: 'bj-input--sm', description: t('prop-input-sm') },
  {
    name: 'bj-input-group--valid / bj-input-group--error',
    description: t('prop-input-group-state'),
  },
  {
    name: 'bj-message, bj-message--valid, bj-message--error, bj-message--info',
    description: t('prop-message'),
  },
  { name: 'bj-input-wrap', description: t('prop-input-wrap') },
  {
    name: 'bj-input-wrap__icon',
    description: t('prop-input-wrap-icon'),
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

  <DocsSection
    id="sec-exemple-defaut"
    :title="t('section-default-example')"
  >
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-ex1">Nom</label>
        <span id="input-ex1-hint" class="bj-hint"
          >Votre nom complet tel qu’il apparaît sur vos documents
          officiels</span
        >
        <input
          id="input-ex1"
          class="bj-input"
          type="text"
          autocomplete="name"
          aria-describedby="input-ex1-hint"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDefault" />
  </DocsSection>

  <DocsSection id="sec-validation" :title="t('section-validation')">
    <DocsPreview>
      <div class="bj-input-group bj-input-group--valid">
        <label class="bj-label" for="input-val-ok">N° IFU</label>
        <input
          id="input-val-ok"
          class="bj-input"
          type="text"
          value="1234567890123"
          readonly
          aria-describedby="input-val-ok-msg"
        />
        <p
          id="input-val-ok-msg"
          class="bj-message bj-message--valid"
          role="status"
        >
          <i class="ri-checkbox-circle-line" aria-hidden="true"></i>
          Numéro enregistré et vérifié.
        </p>
      </div>
      <div class="bj-input-group bj-input-group--error">
        <label class="bj-label" for="input-val-err"
          >Date de naissance</label
        >
        <input
          id="input-val-err"
          class="bj-input"
          type="text"
          placeholder="JJ/MM/AAAA"
          aria-invalid="true"
          aria-describedby="input-val-err-msg"
        />
        <p
          id="input-val-err-msg"
          class="bj-message bj-message--error"
          role="alert"
        >
          Format attendu&nbsp;: JJ/MM/AAAA.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeValidation" />
  </DocsSection>

  <DocsSection id="sec-icone" :title="t('section-icon')">
    <DocsPreview>
      <div class="bj-input-wrap">
        <i class="ri-search-line" aria-hidden="true"></i>
        <input
          class="bj-input"
          type="search"
          placeholder="Rechercher…"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeIcon" />
  </DocsSection>

  <DocsSection id="sec-textarea" :title="t('section-textarea')">
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-ta"
          >Motif de la demande</label
        >
        <span id="input-ta-hint" class="bj-hint"
          >Décrivez brièvement votre situation (facultatif).</span
        >
        <textarea
          id="input-ta"
          class="bj-input"
          rows="4"
          aria-describedby="input-ta-hint"
          placeholder="Votre message…"
        ></textarea>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTextarea" />
  </DocsSection>

  <DocsSection id="sec-desactive" :title="t('section-disabled')">
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-dis"
          >Référence dossier</label
        >
        <input
          id="input-dis"
          class="bj-input"
          type="text"
          disabled
          value="BJ-2025-00442"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
