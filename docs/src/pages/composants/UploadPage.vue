<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample = `<div class="bj-upload-group">
  <label class="bj-upload" style="position:relative;">
    <input type="file"> …
  </label>
</div>`

const propsRows = [
  { name: 'bj-upload-group', description: 'Groupe.' },
  { name: 'bj-upload-group--error', description: 'Erreur.' },
  {
    name: 'bj-upload',
    description: 'Zone (conteneur position:relative).',
  },
  { name: 'bj-upload--drag-over', description: 'Survol actif.' },
  {
    name: 'bj-upload__text / bj-upload__hint / bj-upload__icon',
    description: 'Contenu.',
  },
  {
    name: 'bj-upload__file / bj-upload__file-remove',
    description: 'Fichier choisi.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Téléversement
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Zone d’invitation au dépôt de fichiers avec états d’erreur et
    rappel du fichier choisi.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <div class="bj-upload-group">
        <span id="ex-ul1" class="bj-label">Justificatif</span>
        <label
          class="bj-upload"
          style="position: relative"
          aria-labelledby="ex-ul1"
        >
          <input
            type="file"
            name="xf1"
            accept=".pdf,image/*"
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
            >PDF ou image - 5&nbsp;Mo max.</span
          >
        </label>
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

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-upload-group--error</code>,
      <code>bj-upload__file</code>,
      <code>bj-upload__file-remove</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Reliez l’input à une étiquette (<code>aria-labelledby</code>
      ou <code>label</code>). Décrivez formats et tailles dans le
      texte visible.
    </DocsA11yNote>
  </DocsSection>
</template>
