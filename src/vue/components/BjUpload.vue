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
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<BjUploadProps>(), {
  text: 'Glissez un fichier ou cliquez pour parcourir',
  icon: 'ri-upload-2-line',
})

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

const uploadId = computed(() => `bj-upload-${Math.random().toString(36).slice(2, 9)}`)

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
}
</script>

<template>
  <div :class="groupClasses">
    <label v-if="label" class="bj-label" :for="uploadId">{{ label }}</label>
    <span v-if="hint" class="bj-hint">{{ hint }}</span>
    <div
      :class="uploadClasses"
      role="button"
      tabindex="0"
      @click="onClick"
      @keydown.enter="onClick"
      @dragover.prevent="dragging = true"
      @dragleave="dragging = false"
      @drop.prevent="onDrop"
    >
      <i :class="['bj-upload__icon', icon]" aria-hidden="true" />
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
    <p v-if="message" class="bj-message" :class="error ? 'bj-message--error' : 'bj-message--info'">
      {{ message }}
    </p>
    <div v-for="(file, i) in files" :key="i" class="bj-upload__file">
      <i class="ri-file-line" aria-hidden="true" />
      {{ file.name }}
      <button type="button" class="bj-upload__file-remove" @click="removeFile(i)" aria-label="Retirer">
        <i class="ri-close-line" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
