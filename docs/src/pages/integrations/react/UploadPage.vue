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

  <DocsSection id="react-upload-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
