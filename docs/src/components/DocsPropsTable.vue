<script setup lang="ts">
export interface PropRow {
  name: string
  description: string
}

defineProps<{
  headers?: [string, string]
  rows: PropRow[]
}>()
</script>

<template>
  <table class="docs-props">
    <thead>
      <tr>
        <th>{{ headers?.[0] ?? 'Classe' }}</th>
        <th>{{ headers?.[1] ?? 'Description' }}</th>
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
