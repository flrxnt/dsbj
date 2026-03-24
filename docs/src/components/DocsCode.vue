<script setup lang="ts">
import { ref, toRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useShiki } from '@docs/composables/useShiki'

const props = withDefaults(defineProps<{ code: string; lang?: string }>(), {
  lang: 'html',
})

const { t } = useI18n()
const copied = ref(false)
const { highlighted } = useShiki(toRef(props, 'code'), toRef(props, 'lang'))

function copy() {
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<template>
  <div class="docs-code">
    <div v-if="highlighted" class="docs-code__shiki" v-html="highlighted"></div>
    <pre v-else><code>{{ code }}</code></pre>
    <button class="docs-code__copy" type="button" @click="copy">
      {{ copied ? t('code.copied') : t('code.copy') }}
    </button>
  </div>
</template>
