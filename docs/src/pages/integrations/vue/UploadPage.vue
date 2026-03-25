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
      desc: 'Zone de téléversement Vue avec glisser-déposer, libellé, message de validation et liste des fichiers sélectionnés.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-label': 'Libellé au-dessus de la zone.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-accept': 'Attribut accept du input file (types MIME ou extensions).',
      'prop-multiple': 'Autorise plusieurs fichiers.',
      'prop-error': 'Met la zone en état d’erreur.',
      'prop-message': 'Message sous la zone (couleur selon error).',
      'prop-text': 'Texte principal dans la zone (défaut : invitation à déposer ou parcourir).',
      'prop-icon': 'Classe d’icône Remix affichée dans la zone (défaut ri-upload-2-line).',
    },
    en: {
      title: 'BjUpload',
      desc: 'Vue file drop zone with drag-and-drop, label, validation message, and selected file list.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-label': 'Label above the drop zone.',
      'prop-hint': 'Help text below the label.',
      'prop-accept': 'File input accept attribute (MIME types or extensions).',
      'prop-multiple': 'Allows multiple files.',
      'prop-error': 'Applies error styling to the zone.',
      'prop-message': 'Message below the zone (color follows error).',
      'prop-text': 'Main text inside the zone (default drop/browse prompt).',
      'prop-icon': 'Remix icon class shown in the zone (default ri-upload-2-line).',
    },
  },
})

const codeUsage = `<script setup>
import { BjUpload } from '@flrxnt/dsbj/vue'

function onFiles(files: FileList | null) {
  console.log(files)
}
<\/script>

<template>
  <BjUpload
    label="Pièce justificative"
    hint="PDF ou image, 5 Mo maximum"
    accept=".pdf,image/*"
    @change="onFiles"
  />
</template>`

const propsRows = computed(() => [
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'accept', description: t('prop-accept') },
  { name: 'multiple', description: t('prop-multiple') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'text', description: t('prop-text') },
  { name: 'icon', description: t('prop-icon') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-upload-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <label class="bj-label" for="vue-up-in">Pièce justificative</label>
        <span class="bj-hint">PDF ou image, 5 Mo maximum</span>
        <div class="bj-upload" style="position: relative" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <input id="vue-up-in" type="file" accept=".pdf,image/*" />
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-upload-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
