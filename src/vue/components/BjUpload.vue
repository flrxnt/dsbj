<script lang="ts">
export interface BjUploadProps {
  label?: string
  hint?: string
  accept?: string
  multiple?: boolean
  error?: boolean
  message?: string
  text?: string
  icon?: string
  id?: string
  removeLabel?: string
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BjSvgIcon } from '../icons'

let uid = 0

function riKebabToCamel(s: string): string {
  return s.split('-').map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1))).join('')
}

function resolveIconName(icon: string): string {
  if (icon.startsWith('ri-')) return riKebabToCamel(icon.replace(/^ri-/, ''))
  return icon
}

const props = withDefaults(defineProps<BjUploadProps>(), {
  text: 'Glissez un fichier ou cliquez pour parcourir',
  icon: 'upload2Line',
  removeLabel: 'Retirer',
})

const iconName = computed(() => resolveIconName(props.icon))

const emit = defineEmits<{
  change: [files: FileList | null]
}>()

const fileInput = ref<HTMLInputElement>()
const files = ref<File[]>([])
const dragging = ref(false)

const groupClasses = computed(() => [
  'bj-upload-group',
  props.error && 'bj-upload-group--error',
])

const uploadClasses = computed(() => [
  'bj-upload',
  dragging.value && 'bj-upload--drag-over',
])

const uploadId = props.id || `bj-upload-${++uid}`
const hintId = `${uploadId}-hint`
const messageId = `${uploadId}-msg`

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.hint) ids.push(hintId)
  if (props.message) ids.push(messageId)
  return ids.length ? ids.join(' ') : undefined
})

function handleFiles(fl: FileList | null) {
  if (!fl) return
  files.value = Array.from(fl)
  emit('change', fl)
}

function onClick() {
  fileInput.value?.click()
}

function onDrop(e: DragEvent) {
  dragging.value = false
  handleFiles(e.dataTransfer?.files ?? null)
}

function removeFile(index: number) {
  files.value.splice(index, 1)
  if (fileInput.value) fileInput.value.value = ''
}
</script>

<template>
  <div :class="groupClasses">
    <label v-if="label" class="bj-label" :for="uploadId">{{ label }}</label>
    <span v-if="hint" :id="hintId" class="bj-hint">{{ hint }}</span>
    <div
      :class="uploadClasses"
      role="button"
      tabindex="0"
      :aria-label="text"
      :aria-describedby="describedBy"
      @click="onClick"
      @keydown.enter="onClick"
      @keydown.space.prevent="onClick"
      @dragover.prevent="dragging = true"
      @dragleave="dragging = false"
      @drop.prevent="onDrop"
    >
      <BjSvgIcon class="bj-upload__icon" :name="iconName" />
      <span class="bj-upload__text">{{ text }}</span>
      <span v-if="$slots.uploadHint" class="bj-upload__hint"><slot name="uploadHint" /></span>
      <input
        ref="fileInput"
        :id="uploadId"
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="handleFiles(($event.target as HTMLInputElement).files)"
      />
    </div>
    <p
      v-if="message"
      :id="messageId"
      class="bj-message"
      :class="error ? 'bj-message--error' : 'bj-message--info'"
      :role="error ? 'alert' : 'status'"
    >
      {{ message }}
    </p>
    <div v-for="(file, i) in files" :key="i" class="bj-upload__file">
      <BjSvgIcon name="fileLine" />
      {{ file.name }}
      <button type="button" class="bj-upload__file-remove" @click="removeFile(i)" :aria-label="`${removeLabel} ${file.name}`">
        <BjSvgIcon name="closeLine" />
      </button>
    </div>
  </div>
</template>
