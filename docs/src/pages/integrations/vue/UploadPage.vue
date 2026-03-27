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
      desc: 'Zone de téléversement Vue avec glisser-déposer, libellé, aide, accept, fichiers multiples, message d’erreur, texte et icône personnalisables, slot uploadHint et événement change.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-change': 'Événement change',
      'section-multiple': 'Fichiers multiples',
      'section-error-message': 'Erreur et message',
      'section-text-icon': 'Texte et icône',
      'section-slot-hint': 'Slot uploadHint',
      'section-combo': 'Combinaison (accept + multiple + hint)',
      'section-props': 'Props',
      'prop-label': 'Libellé au-dessus de la zone.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-accept': 'Attribut accept du input file (types MIME ou extensions).',
      'prop-multiple': 'Autorise plusieurs fichiers.',
      'prop-error': 'Met la zone en état d’erreur (bj-upload-group--error).',
      'prop-message': 'Message sous la zone (couleur selon error).',
      'prop-text': 'Texte principal dans la zone (défaut : invitation à déposer ou parcourir).',
      'prop-icon': 'Classe d’icône Remix dans .bj-upload__icon (défaut ri-upload-2-line).',
      'event-change': 'Émis avec la <code>FileList</code> du input après sélection ou dépôt.',
      'slot-uploadHint': 'Contenu affiché dans <code>.bj-upload__hint</code> sous le texte principal.',
    },
    en: {
      title: 'BjUpload',
      desc: 'Vue file drop zone with drag-and-drop, label, hint, accept, multiple files, error message, custom text and icon, uploadHint slot, and change event.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-change': 'change event',
      'section-multiple': 'Multiple files',
      'section-error-message': 'Error and message',
      'section-text-icon': 'Text and icon',
      'section-slot-hint': 'uploadHint slot',
      'section-combo': 'Combination (accept + multiple + hint)',
      'section-props': 'Props',
      'prop-label': 'Label above the drop zone.',
      'prop-hint': 'Help text below the label.',
      'prop-accept': 'File input accept attribute (MIME types or extensions).',
      'prop-multiple': 'Allows multiple files.',
      'prop-error': 'Applies error styling (bj-upload-group--error).',
      'prop-message': 'Message below the zone (color follows error).',
      'prop-text': 'Main text inside the zone (default drop/browse prompt).',
      'prop-icon': 'Remix icon class on .bj-upload__icon (default ri-upload-2-line).',
      'event-change': 'Emitted with the input <code>FileList</code> after pick or drop.',
      'slot-uploadHint': 'Content rendered in <code>.bj-upload__hint</code> below the main text.',
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

const codeChange = `<script setup lang="ts">
import { BjUpload } from '@flrxnt/dsbj/vue'

function onFiles(files: FileList | null) {
  if (!files?.length) return
  console.log([...files].map(f => f.name))
}
<\/script>

<template>
  <BjUpload label="Document" @change="onFiles" />
</template>`

const codeMultiple = `<BjUpload
  label="Photos"
  :multiple="true"
  accept="image/*"
  text="Glissez une ou plusieurs images"
/>`

const codeError = `<BjUpload
  label="CV"
  accept=".pdf"
  :error="true"
  message="Le fichier doit être un PDF."
/>`

const codeTextIcon = `<BjUpload
  label="Avatar"
  text="Choisir une image de profil"
  icon="ri-image-add-line"
/>`

const codeSlot = `<BjUpload label="Pièce d’identité" accept="image/*">
  <template #uploadHint>Formats : JPG, PNG — max. 2&nbsp;Mo</template>
</BjUpload>`

const codeCombo = `<BjUpload
  label="Pièces jointes"
  hint="Plusieurs fichiers possibles"
  accept=".pdf,.doc,.docx"
  :multiple="true"
  :error="false"
  @change="onFiles"
>
  <template #uploadHint>Taille max. 10&nbsp;Mo par fichier</template>
</BjUpload>`

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

  <DocsSection id="vue-upload-change" :title="t('section-change')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('event-change')" />
    <DocsCode :code="codeChange" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-multiple" :title="t('section-multiple')">
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <label class="bj-label" for="vue-up-mul">Photos</label>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez une ou plusieurs images</span>
          <input id="vue-up-mul" type="file" accept="image/*" multiple />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMultiple" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-error" :title="t('section-error-message')">
    <DocsPreview>
      <div class="bj-upload-group bj-upload-group--error" style="max-width: 28rem">
        <label class="bj-label" for="vue-up-err">CV</label>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <input id="vue-up-err" type="file" accept=".pdf" />
        </div>
        <p class="bj-message bj-message--error">Le fichier doit être un PDF.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeError" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-text-icon" :title="t('section-text-icon')">
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <label class="bj-label" for="vue-up-ti">Avatar</label>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-image-add-line" aria-hidden="true" />
          <span class="bj-upload__text">Choisir une image de profil</span>
          <input id="vue-up-ti" type="file" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTextIcon" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-slot" :title="t('section-slot-hint')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-uploadHint')" />
    <DocsPreview>
      <div class="bj-upload-group" style="max-width: 28rem">
        <label class="bj-label" for="vue-up-sl">Pièce d’identité</label>
        <div class="bj-upload" role="button" tabindex="0">
          <i class="bj-upload__icon ri-upload-2-line" aria-hidden="true" />
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <span class="bj-upload__hint">Formats : JPG, PNG — max. 2&nbsp;Mo</span>
          <input id="vue-up-sl" type="file" accept="image/*" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-combo" :title="t('section-combo')">
    <DocsCode :code="codeCombo" lang="html" />
  </DocsSection>

  <DocsSection id="vue-upload-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
