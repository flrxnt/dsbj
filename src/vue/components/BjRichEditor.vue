<script lang="ts">
export interface BjRichEditorProps {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  toolbar?: string[]
  height?: string
}

export const TOOLBAR_ALL = [
  'heading', 'bold', 'italic', 'underline', 'strikethrough',
  'unorderedList', 'orderedList', 'indent', 'outdent',
  'alignLeft', 'alignCenter', 'alignRight', 'alignJustify',
  'link', 'unlink', 'image', 'video', 'table',
  'blockquote', 'codeBlock', 'removeFormat',
  'textColor', 'bgColor', 'horizontalRule', 'undo', 'redo',
] as const
</script>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjRichEditorProps>(), {
  modelValue: '',
  placeholder: '',
  toolbar: () => [...TOOLBAR_ALL],
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const contentRef = ref<HTMLDivElement>()
const isUpdatingFromProp = ref(false)

const activeToolbar = computed(() => new Set(props.toolbar))
function has(tool: string) { return activeToolbar.value.has(tool) }

const ALLOWED_SCHEMES = ['http:', 'https:', 'mailto:']
const EMBED_HOSTS = ['youtube.com', 'www.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com', 'player.vimeo.com', 'vimeo.com', 'www.dailymotion.com']

function isSafeUrl(raw: string): string | null {
  try {
    const u = new URL(raw)
    if (!ALLOWED_SCHEMES.includes(u.protocol)) return null
    return u.href
  } catch { return null }
}

function isEmbedUrl(raw: string): string | null {
  try {
    const u = new URL(raw)
    if (u.protocol !== 'https:') return null
    if (!EMBED_HOSTS.some(h => u.hostname === h)) return null
    return u.href
  } catch { return null }
}

function exec(command: string, value?: string) {
  document.execCommand(command, false, value)
  contentRef.value?.focus()
  emitUpdate()
}

function emitUpdate() {
  if (isUpdatingFromProp.value) return
  const html = contentRef.value?.innerHTML ?? ''
  emit('update:modelValue', html)
}

function onInput() {
  emitUpdate()
}

function insertLink() {
  const raw = prompt('URL du lien :')
  if (!raw) return
  const safe = isSafeUrl(raw)
  if (!safe) return alert('URL invalide. Seuls http://, https:// et mailto: sont autorisés.')
  exec('createLink', safe)
}

function insertImage() {
  const raw = prompt('URL de l\'image :')
  if (!raw) return
  const safe = isSafeUrl(raw)
  if (!safe) return alert('URL invalide. Seuls http:// et https:// sont autorisés.')
  exec('insertImage', safe)
}

function insertVideo() {
  const raw = prompt('URL de la vidéo (YouTube, Vimeo embed) :')
  if (!raw) return
  const safe = isEmbedUrl(raw)
  if (!safe) return alert('URL invalide. Seuls les liens embed YouTube, Vimeo et Dailymotion en HTTPS sont autorisés.')
  const wrapper = document.createElement('div')
  const iframe = document.createElement('iframe')
  iframe.src = safe
  iframe.width = '560'
  iframe.height = '315'
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allowfullscreen', '')
  iframe.style.maxWidth = '100%'
  wrapper.appendChild(iframe)
  exec('insertHTML', wrapper.outerHTML)
}

function insertTable() {
  const rows = parseInt(prompt('Nombre de lignes :') || '3', 10)
  const cols = parseInt(prompt('Nombre de colonnes :') || '3', 10)
  if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) return
  let html = '<table><thead><tr>'
  for (let c = 0; c < cols; c++) html += '<th>En-tête</th>'
  html += '</tr></thead><tbody>'
  for (let r = 0; r < rows - 1; r++) {
    html += '<tr>'
    for (let c = 0; c < cols; c++) html += '<td>Cellule</td>'
    html += '</tr>'
  }
  html += '</tbody></table>'
  exec('insertHTML', html)
}

function insertCodeBlock() {
  exec('insertHTML', '<pre><code>// code ici</code></pre><p><br></p>')
}

function setHeading(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  if (value === 'p') {
    exec('formatBlock', 'p')
  } else {
    exec('formatBlock', value)
  }
}

function setTextColor(event: Event) {
  const color = (event.target as HTMLInputElement).value
  exec('foreColor', color)
}

function setBgColor(event: Event) {
  const color = (event.target as HTMLInputElement).value
  exec('hiliteColor', color)
}

function onKeydown(event: KeyboardEvent) {
  const mod = event.ctrlKey || event.metaKey
  if (!mod) return

  const key = event.key.toLowerCase()
  const shortcuts: Record<string, () => void> = {
    b: () => exec('bold'),
    i: () => exec('italic'),
    u: () => exec('underline'),
    z: () => event.shiftKey ? exec('redo') : exec('undo'),
    y: () => exec('redo'),
  }

  if (shortcuts[key]) {
    event.preventDefault()
    shortcuts[key]()
  }
}

function sanitizeHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  doc.querySelectorAll('script, style, link, meta, object, embed, applet').forEach(el => el.remove())
  doc.querySelectorAll('*').forEach(el => {
    for (const attr of Array.from(el.attributes)) {
      if (attr.name.startsWith('on') || (attr.name === 'href' && attr.value.trim().toLowerCase().startsWith('javascript:')) || (attr.name === 'src' && attr.value.trim().toLowerCase().startsWith('javascript:'))) {
        el.removeAttribute(attr.name)
      }
    }
  })
  return doc.body.innerHTML
}

watch(() => props.modelValue, (val) => {
  const safe = sanitizeHtml(val)
  if (contentRef.value && contentRef.value.innerHTML !== safe) {
    isUpdatingFromProp.value = true
    contentRef.value.innerHTML = safe
    nextTick(() => { isUpdatingFromProp.value = false })
  }
})

onMounted(() => {
  if (contentRef.value && props.modelValue) {
    contentRef.value.innerHTML = sanitizeHtml(props.modelValue)
  }
})
</script>

<template>
  <div :class="['bj-rich-editor', disabled && 'bj-rich-editor--disabled']" v-bind="$attrs">
    <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur de texte riche">
      <div v-if="has('heading')" class="bj-rich-editor__toolbar-group">
        <select class="bj-rich-editor__toolbar-select" @change="setHeading" aria-label="Style de bloc">
          <option value="p">Paragraphe</option>
          <option value="h1">Titre 1</option>
          <option value="h2">Titre 2</option>
          <option value="h3">Titre 3</option>
        </select>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="has('heading') && (has('bold') || has('italic') || has('underline') || has('strikethrough'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('bold') || has('italic') || has('underline') || has('strikethrough')">
        <button v-if="has('bold')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('bold')" title="Gras" aria-label="Gras">
          <BjSvgIcon name="bold" />
        </button>
        <button v-if="has('italic')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('italic')" title="Italique" aria-label="Italique">
          <BjSvgIcon name="italic" />
        </button>
        <button v-if="has('underline')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('underline')" title="Souligné" aria-label="Souligné">
          <BjSvgIcon name="underline" />
        </button>
        <button v-if="has('strikethrough')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('strikethrough')" title="Barré" aria-label="Barré">
          <BjSvgIcon name="strikethrough" />
        </button>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="(has('bold') || has('italic')) && (has('unorderedList') || has('orderedList'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('unorderedList') || has('orderedList')">
        <button v-if="has('unorderedList')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('insertUnorderedList')" title="Liste à puces" aria-label="Liste à puces">
          <BjSvgIcon name="listUnordered" />
        </button>
        <button v-if="has('orderedList')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('insertOrderedList')" title="Liste numérotée" aria-label="Liste numérotée">
          <BjSvgIcon name="listOrdered" />
        </button>
      </div>

      <div class="bj-rich-editor__toolbar-group" v-if="has('indent') || has('outdent')">
        <button v-if="has('indent')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('indent')" title="Augmenter le retrait" aria-label="Augmenter le retrait">
          <BjSvgIcon name="indentIncrease" />
        </button>
        <button v-if="has('outdent')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('outdent')" title="Réduire le retrait" aria-label="Réduire le retrait">
          <BjSvgIcon name="indentDecrease" />
        </button>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="(has('unorderedList') || has('orderedList') || has('indent') || has('outdent')) && (has('alignLeft') || has('alignCenter') || has('alignRight') || has('alignJustify'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('alignLeft') || has('alignCenter') || has('alignRight') || has('alignJustify')">
        <button v-if="has('alignLeft')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('justifyLeft')" title="Aligner à gauche" aria-label="Aligner à gauche">
          <BjSvgIcon name="alignLeft" />
        </button>
        <button v-if="has('alignCenter')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('justifyCenter')" title="Centrer" aria-label="Centrer">
          <BjSvgIcon name="alignCenter" />
        </button>
        <button v-if="has('alignRight')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('justifyRight')" title="Aligner à droite" aria-label="Aligner à droite">
          <BjSvgIcon name="alignRight" />
        </button>
        <button v-if="has('alignJustify')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('justifyFull')" title="Justifier" aria-label="Justifier">
          <BjSvgIcon name="alignJustify" />
        </button>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="(has('alignLeft') || has('alignCenter')) && (has('link') || has('image') || has('video') || has('table'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('link') || has('image') || has('video') || has('table')">
        <button v-if="has('link')" type="button" class="bj-rich-editor__toolbar-btn" @click="insertLink" title="Lien" aria-label="Insérer un lien">
          <BjSvgIcon name="link" />
        </button>
        <button v-if="has('unlink')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('unlink')" title="Supprimer le lien" aria-label="Supprimer le lien">
          <BjSvgIcon name="linkUnlink" />
        </button>
        <button v-if="has('image')" type="button" class="bj-rich-editor__toolbar-btn" @click="insertImage" title="Image" aria-label="Insérer une image">
          <BjSvgIcon name="image" />
        </button>
        <button v-if="has('video')" type="button" class="bj-rich-editor__toolbar-btn" @click="insertVideo" title="Vidéo" aria-label="Insérer une vidéo">
          <BjSvgIcon name="video" />
        </button>
        <button v-if="has('table')" type="button" class="bj-rich-editor__toolbar-btn" @click="insertTable" title="Tableau" aria-label="Insérer un tableau">
          <BjSvgIcon name="table" />
        </button>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="(has('link') || has('image') || has('video') || has('table')) && (has('blockquote') || has('codeBlock') || has('horizontalRule'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('blockquote') || has('codeBlock') || has('horizontalRule') || has('removeFormat')">
        <button v-if="has('blockquote')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('formatBlock', 'blockquote')" title="Citation" aria-label="Citation">
          <BjSvgIcon name="doubleQuotes" />
        </button>
        <button v-if="has('codeBlock')" type="button" class="bj-rich-editor__toolbar-btn" @click="insertCodeBlock" title="Bloc de code" aria-label="Bloc de code">
          <BjSvgIcon name="code" />
        </button>
        <button v-if="has('horizontalRule')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('insertHorizontalRule')" title="Ligne horizontale" aria-label="Ligne horizontale">
          <BjSvgIcon name="separator" />
        </button>
        <button v-if="has('removeFormat')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('removeFormat')" title="Effacer le formatage" aria-label="Effacer le formatage">
          <BjSvgIcon name="formatClear" />
        </button>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="(has('blockquote') || has('codeBlock')) && (has('textColor') || has('bgColor'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('textColor') || has('bgColor')">
        <div v-if="has('textColor')" class="bj-rich-editor__color-picker">
          <button type="button" class="bj-rich-editor__toolbar-btn" title="Couleur du texte" aria-label="Couleur du texte">
            <BjSvgIcon name="fontColor" />
          </button>
          <input type="color" @input="setTextColor" value="#000000" aria-label="Choisir la couleur du texte">
        </div>
        <div v-if="has('bgColor')" class="bj-rich-editor__color-picker">
          <button type="button" class="bj-rich-editor__toolbar-btn" title="Couleur de fond" aria-label="Couleur de fond">
            <BjSvgIcon name="paintFill" />
          </button>
          <input type="color" @input="setBgColor" value="#ffff00" aria-label="Choisir la couleur de fond">
        </div>
      </div>

      <div class="bj-rich-editor__toolbar-separator" v-if="(has('textColor') || has('bgColor')) && (has('undo') || has('redo'))" aria-hidden="true" />

      <div class="bj-rich-editor__toolbar-group" v-if="has('undo') || has('redo')">
        <button v-if="has('undo')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('undo')" title="Annuler" aria-label="Annuler">
          <BjSvgIcon name="undo" />
        </button>
        <button v-if="has('redo')" type="button" class="bj-rich-editor__toolbar-btn" @click="exec('redo')" title="Rétablir" aria-label="Rétablir">
          <BjSvgIcon name="redo" />
        </button>
      </div>
    </div>

    <div
      ref="contentRef"
      class="bj-rich-editor__content"
      :contenteditable="!disabled"
      :data-placeholder="placeholder"
      :style="height ? { minHeight: height } : undefined"
      role="textbox"
      aria-multiline="true"
      :aria-label="placeholder || 'Éditeur de texte riche'"
      @input="onInput"
      @keydown="onKeydown"
    />
  </div>
</template>
