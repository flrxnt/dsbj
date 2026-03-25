<script lang="ts">
export interface PropRow {
  name: string
  description: string
}
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  headers?: [string, string]
  rows: PropRow[]
}>()

const { t } = useI18n()
</script>

<template>
  <table class="docs-props">
    <thead>
      <tr>
        <th>{{ headers?.[0] ?? t('common.class') }}</th>
        <th>{{ headers?.[1] ?? t('common.description') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name">
        <td><code>{{ row.name }}</code></td>
        <td>{{ row.description }}</td>
      </tr>
    </tbody>
  </table>
</template>
