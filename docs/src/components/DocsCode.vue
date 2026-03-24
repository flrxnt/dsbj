<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ code: string }>()
const { t } = useI18n()
const copied = ref(false)

function copy() {
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<template>
  <div class="docs-code">
    <pre><code>{{ code }}</code></pre>
    <button class="docs-code__copy" type="button" @click="copy">
      {{ copied ? t('code.copied') : t('code.copy') }}
    </button>
  </div>
</template>
