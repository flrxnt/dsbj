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
      title: 'Téléversement',
      desc: 'Zone d’invitation au dépôt de fichiers avec états d’erreur et rappel du fichier choisi.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-upload-group--error</code>, <code>bj-upload__file</code>, <code>bj-upload__file-remove</code>.',
      'section-complete':
        'Groupe complet (libellé, aide, texte, icône, formats)',
      'section-complete-body':
        'Le composant Vue compose <code>bj-upload-group</code>, <code>bj-label</code>, <code>bj-hint</code>, zone <code>bj-upload</code> avec <code>bj-upload__icon</code> (classe d’icône Remix en plus), <code>bj-upload__text</code>, <code>bj-upload__hint</code>, <code>input type="file"</code> avec <code>accept</code> et <code>multiple</code>, puis message <code>bj-message--info</code> ou <code>bj-message--error</code>.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-upload-group': 'Groupe.',
      'prop-upload-group-error': 'Erreur.',
      'prop-upload':
        'Zone (conteneur position:relative).',
      'prop-upload-drag-over': 'Survol actif.',
      'prop-upload-content':
        'Contenu.',
      'prop-upload-file':
        'Fichier choisi.',
      'prop-upload-label':
        'Libellé et aide (comme les autres champs).',
      'prop-upload-message':
        'Message sous la zone\u00a0: <code>bj-message--info</code> ou <code>bj-message--error</code>.',
      'prop-upload-multiple':
        'Attributs <code>accept</code> et <code>multiple</code> sur <code>input type="file"</code>.',
      'a11y-note':
        'Reliez l’input à une étiquette (<code>aria-labelledby</code> ou <code>label</code>). Décrivez formats et tailles dans le texte visible.',
    },
    en: {
      title: 'File upload',
      desc: 'Drop zone for files with error states and display of the chosen file.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-upload-group--error</code>, <code>bj-upload__file</code>, <code>bj-upload__file-remove</code>.',
      'section-complete':
        'Full group (label, hint, text, icon, formats)',
      'section-complete-body':
        'The Vue component uses <code>bj-upload-group</code>, <code>bj-label</code>, <code>bj-hint</code>, a <code>bj-upload</code> zone with <code>bj-upload__icon</code> (plus a Remix icon class), <code>bj-upload__text</code>, <code>bj-upload__hint</code>, a file <code>input</code> with <code>accept</code> and <code>multiple</code>, then <code>bj-message--info</code> or <code>bj-message--error</code>.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-upload-group': 'Group.',
      'prop-upload-group-error': 'Error state.',
      'prop-upload':
        'Zone (wrapper with position:relative).',
      'prop-upload-drag-over': 'Active drag-over state.',
      'prop-upload-content':
        'Content.',
      'prop-upload-file':
        'Chosen file.',
      'prop-upload-label':
        'Label and hint (same as other fields).',
      'prop-upload-message':
        'Message below the zone: <code>bj-message--info</code> or <code>bj-message--error</code>.',
      'prop-upload-multiple':
        '<code>accept</code> and <code>multiple</code> on the file <code>input</code>.',
      'a11y-note':
        'Link the input to a label (<code>aria-labelledby</code> or <code>label</code>). Describe allowed formats and sizes in visible text.',
    },
  },
})

const codeExample = `<div class="bj-upload-group">
  <label class="bj-label" for="uf">Justificatif</label>
  <span class="bj-hint">PDF ou image, 5 Mo max.</span>
  <div class="bj-upload" role="button" tabindex="0">
    <i class="ri-upload-2-line bj-upload__icon" aria-hidden="true"></i>
    <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
    <span class="bj-upload__hint">Formats acceptés sur cette étape.</span>
    <input id="uf" type="file" accept=".pdf,image/*" multiple />
  </div>
  <p class="bj-message bj-message--info" role="status">Vous pouvez ajouter jusqu’à 3 fichiers.</p>
</div>`

const propsRows = computed(() => [
  { name: 'bj-label', description: t('prop-upload-label') },
  { name: 'bj-hint', description: t('prop-upload-label') },
  { name: 'bj-upload-group', description: t('prop-upload-group') },
  {
    name: 'bj-upload-group--error',
    description: t('prop-upload-group-error'),
  },
  {
    name: 'bj-upload',
    description: t('prop-upload'),
  },
  { name: 'bj-upload--drag-over', description: t('prop-upload-drag-over') },
  {
    name: 'bj-upload__text / bj-upload__hint / bj-upload__icon',
    description: t('prop-upload-content'),
  },
  {
    name: '(input file: accept, multiple)',
    description: t('prop-upload-multiple'),
  },
  {
    name: 'bj-message--info / bj-message--error',
    description: t('prop-upload-message'),
  },
  {
    name: 'bj-upload__file / bj-upload__file-remove',
    description: t('prop-upload-file'),
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

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <div class="bj-upload-group">
        <span id="ex-ul1" class="bj-label">Justificatif</span>
        <span class="bj-hint">PDF ou image — 5&nbsp;Mo max.</span>
        <label
          class="bj-upload"
          style="position: relative"
          aria-labelledby="ex-ul1"
        >
          <input
            type="file"
            name="xf1"
            accept=".pdf,image/*"
            multiple
            aria-labelledby="ex-ul1"
          />
          <i
            class="ri-upload-cloud-2-line bj-upload__icon"
            aria-hidden="true"
          ></i>
          <span class="bj-upload__text"
            >Glisser-déposer ou parcourir</span
          >
          <span class="bj-upload__hint"
            >Plusieurs fichiers possibles.</span
          >
        </label>
        <p class="bj-message bj-message--info" role="status">
          Jusqu’à 3 pièces pour cette étape.
        </p>
      </div>
      <div class="bj-upload-group">
        <span id="ex-ul2" class="bj-label">État actif (démo)</span>
        <label
          class="bj-upload bj-upload--drag-over"
          style="position: relative"
          aria-labelledby="ex-ul2"
        >
          <input type="file" aria-labelledby="ex-ul2" />
          <span class="bj-upload__text"
            >Classe <code>bj-upload--drag-over</code></span
          >
        </label>
      </div>
      <div class="bj-upload-group">
        <span id="ex-ul1b" class="bj-label">Autre icône</span>
        <label
          class="bj-upload"
          style="position: relative"
          aria-labelledby="ex-ul1b"
        >
          <input type="file" aria-labelledby="ex-ul1b" />
          <i
            class="ri-attachment-2 bj-upload__icon"
            aria-hidden="true"
          ></i>
          <span class="bj-upload__text">Pièces jointes</span>
        </label>
      </div>
      <div class="bj-upload-group bj-upload-group--error">
        <span id="ex-ul3" class="bj-label">Erreur</span>
        <label
          class="bj-upload"
          style="position: relative"
          aria-labelledby="ex-ul3"
        >
          <input type="file" aria-labelledby="ex-ul3" />
          <span class="bj-upload__text">Format refusé</span>
        </label>
        <p class="bj-message bj-message--error" role="alert">
          Merci de téléverser un PDF.
        </p>
      </div>
      <div class="bj-upload-group">
        <span class="bj-label">Fichier sélectionné</span>
        <div class="bj-upload__file" role="status">
          <i class="ri-file-pdf-line" aria-hidden="true"></i>
          <span>attestation.pdf</span>
          <button
            type="button"
            class="bj-upload__file-remove"
            aria-label="Retirer le fichier"
          >
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-complet" :title="t('section-complete')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-complete-body')"
    />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-variants-body')"
    />
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
