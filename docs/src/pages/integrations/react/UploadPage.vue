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
      title: 'BjUpload',
      desc: 'Zone de téléversement React avec glisser-déposer, libellé, message de validation et liste des fichiers sélectionnés.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-label': 'Libellé au-dessus de la zone.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-accept': 'Attribut accept du input file (types MIME ou extensions).',
      'prop-multiple': 'Si vrai, autorise plusieurs fichiers.',
      'prop-error': 'Si vrai, applique bj-upload-group--error.',
      'prop-message': 'Message sous la zone (couleur selon error).',
      'prop-text': 'Texte principal dans la zone (défaut : invitation à déposer ou parcourir).',
      'prop-icon': 'Classe d’icône Remix dans la zone (défaut ri-upload-2-line).',
      'prop-onChange': 'Appelé avec le FileList après sélection ou dépôt.',
      'prop-className': 'Classe CSS sur le conteneur bj-upload-group.',
      'section-error': 'Erreur et message',
      'section-multiple': 'Fichiers multiples',
      'section-text-icon': 'Texte et icône',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Callback onChange',
      'desc-error': 'error et message sous la zone.',
      'desc-multiple': 'multiple avec accept pour plusieurs fichiers.',
      'desc-text-icon': 'text et icon personnalisent la zone.',
      'desc-combinations': 'label, hint, accept, multiple, error et onChange ensemble.',
      'desc-callbacks': 'onChange reçoit le FileList ou null après sélection ou dépôt.',
    },
    en: {
      title: 'BjUpload',
      desc: 'React file drop zone with drag-and-drop, label, validation message, and selected file list.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-label': 'Label above the drop zone.',
      'prop-hint': 'Help text below the label.',
      'prop-accept': 'File input accept attribute (MIME types or extensions).',
      'prop-multiple': 'When true, allows multiple files.',
      'prop-error': 'When true, applies bj-upload-group--error.',
      'prop-message': 'Message below the zone (color follows error).',
      'prop-text': 'Main text inside the zone (default drop/browse prompt).',
      'prop-icon': 'Remix icon class in the zone (default ri-upload-2-line).',
      'prop-onChange': 'Called with the FileList after pick or drop.',
      'prop-className': 'CSS class on the bj-upload-group wrapper.',
      'section-error': 'Error and message',
      'section-multiple': 'Multiple files',
      'section-text-icon': 'Text and icon',
      'section-combinations': 'Combinations',
      'section-callbacks': 'onChange callback',
      'desc-error': 'error and message below the zone.',
      'desc-multiple': 'multiple with accept for several files.',
      'desc-text-icon': 'text and icon customize the drop zone.',
      'desc-combinations': 'label, hint, accept, multiple, error, and onChange together.',
      'desc-callbacks': 'onChange receives the FileList or null after pick or drop.',
    },
  },
})

const codeUsage = `import { BjUpload } from '@flrxnt/dsbj/react'

export default function Example() {
  function onFiles(files: FileList | null) {
    console.log(files)
  }
  return (
    <BjUpload
      label="Pièce justificative"
      hint="PDF ou image, 5 Mo maximum"
      accept=".pdf,image/*"
      onChange={onFiles}
    />
  )
}`

const codeError = `import { BjUpload } from '@flrxnt/dsbj/react'

export default function Example() {
  return (
    <BjUpload
      label="Justificatif"
      error
      message="Le fichier est trop volumineux."
      onChange={() => {}}
    />
  )
}`

const codeMultiple = `import { BjUpload } from '@flrxnt/dsbj/react'

export default function Example() {
  return (
    <BjUpload
      label="Photos"
      hint="Jusqu\u2019à 5 images"
      accept="image/*"
      multiple
      onChange={(files) => console.log(files?.length)}
    />
  )
}`

const codeTextIcon = `import { BjUpload } from '@flrxnt/dsbj/react'

export default function Example() {
  return (
    <BjUpload
      text="D\u00e9posez votre CV ici"
      icon="ri-file-upload-line"
      accept=".pdf"
      onChange={() => {}}
    />
  )
}`

const codeCombinations = `import { BjUpload } from '@flrxnt/dsbj/react'

export default function Example() {
  return (
    <BjUpload
      label="Pi\u00e8ces jointes"
      hint="PDF, 10 Mo max par fichier"
      accept=".pdf"
      multiple
      error
      message="Au moins un PDF requis."
      text="Ajouter des PDF"
      icon="ri-attachment-2"
      onChange={(files) => {
        if (files) console.log(Array.from(files).map((f) => f.name))
      }}
    />
  )
}`

const codeCallbacks = `import { BjUpload } from '@flrxnt/dsbj/react'

export default function Example() {
  function handleFiles(files: FileList | null) {
    if (!files?.length) return
    for (const file of Array.from(files)) {
      console.log(file.name, file.size)
    }
  }
  return <BjUpload label="Import" accept="image/*" onChange={handleFiles} />
}`

const propsRows = computed(() => [
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'accept', description: t('prop-accept') },
  { name: 'multiple', description: t('prop-multiple') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'text', description: t('prop-text') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-upload-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-upload-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <label class="bj-label" for="react-up-in">Pièce justificative</label>
        <span class="bj-hint">PDF ou image, 5 Mo maximum</span>
        <div class="bj-upload" style="position: relative" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <input id="react-up-in" type="file" accept=".pdf,image/*" />
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-upload-error" :title="t('section-error')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-error') }}</p>
    <DocsPreview>
      <div class="bj-upload-group bj-upload-group--error" style="max-width: 28rem">
        <label class="bj-label" for="react-up-err">Justificatif</label>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <input id="react-up-err" type="file" />
        </div>
        <p class="bj-message bj-message--error">Le fichier est trop volumineux.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeError" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-upload-multiple" :title="t('section-multiple')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-multiple') }}</p>
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <label class="bj-label" for="react-up-mul">Photos</label>
        <span class="bj-hint">Jusqu'à 5 images</span>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <input id="react-up-mul" type="file" accept="image/*" multiple />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMultiple" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-upload-text-icon" :title="t('section-text-icon')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-text-icon') }}</p>
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-file-upload-line" aria-hidden="true" />
          <span class="bj-upload__text">Déposez votre CV ici</span>
          <input type="file" accept=".pdf" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTextIcon" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-upload-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <div class="bj-upload-group bj-upload-group--error" style="max-width: 28rem">
        <label class="bj-label" for="react-up-combo">Pièces jointes</label>
        <span class="bj-hint">PDF, 10 Mo max par fichier</span>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-attachment-2" aria-hidden="true" />
          <span class="bj-upload__text">Ajouter des PDF</span>
          <input id="react-up-combo" type="file" accept=".pdf" multiple />
        </div>
        <p class="bj-message bj-message--error">Au moins un PDF requis.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-upload-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-upload-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
