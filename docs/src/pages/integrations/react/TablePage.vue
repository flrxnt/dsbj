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
      title: 'BjTable',
      desc: 'Tableau dans un conteneur défilant horizontal avec wrapper div ; légende optionnelle, modificateurs bordures, rayures et largeur fixe ; props header et footer pour des nœuds React au-dessus et en dessous du table.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-bordered': 'Ajoute des bordures sur les cellules.',
      'prop-striped': 'Alterne le fond des lignes du corps.',
      'prop-fixedLayout': 'Applique table-layout fixed sur le tableau.',
      'prop-caption': 'Texte de caption accessible ; sans caption, la classe no-caption évite une légende vide.',
      'prop-header': 'Contenu au-dessus du table dans bj-table__header.',
      'prop-footer': 'Contenu sous le table dans bj-table__footer.',
      'ex-caption': 'Liste des services',
      'ex-col1': 'Service',
      'ex-col2': 'Délai',
      'ex-r1c1': 'Carte d’identité',
      'ex-r1c2': '15 jours',
      'ex-r2c1': 'Extrait de naissance',
      'ex-r2c2': '48 h',
    },
    en: {
      title: 'BjTable',
      desc: 'Table inside a horizontal scroll wrapper div; optional caption; bordered, striped, and fixed layout; header and footer props render React nodes above and below the table.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-bordered': 'Adds borders to cells.',
      'prop-striped': 'Alternates body row backgrounds.',
      'prop-fixedLayout': 'Applies table-layout fixed.',
      'prop-caption': 'Accessible caption text; without it, no-caption avoids an empty caption.',
      'prop-header': 'Content above the table in bj-table__header.',
      'prop-footer': 'Content below the table in bj-table__footer.',
      'ex-caption': 'Service list',
      'ex-col1': 'Service',
      'ex-col2': 'Lead time',
      'ex-r1c1': 'ID card',
      'ex-r1c2': '15 days',
      'ex-r2c1': 'Birth certificate',
      'ex-r2c2': '48 hours',
    },
  },
})

const codeUsage = `import { BjTable } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjTable caption="Liste des services" bordered striped>
      <thead>
        <tr>
          <th>Service</th>
          <th>Délai</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Carte d’identité</td>
          <td>15 jours</td>
        </tr>
        <tr>
          <td>Extrait de naissance</td>
          <td>48 h</td>
        </tr>
      </tbody>
    </BjTable>
  )
}`

const propsRows = computed(() => [
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'striped', description: t('prop-striped') },
  { name: 'fixedLayout', description: t('prop-fixedLayout') },
  { name: 'caption', description: t('prop-caption') },
  { name: 'header', description: t('prop-header') },
  { name: 'footer', description: t('prop-footer') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-table-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--bordered bj-table--striped">
          <caption>{{ t('ex-caption') }}</caption>
          <thead>
            <tr>
              <th>{{ t('ex-col1') }}</th>
              <th>{{ t('ex-col2') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ t('ex-r1c1') }}</td>
              <td>{{ t('ex-r1c2') }}</td>
            </tr>
            <tr>
              <td>{{ t('ex-r2c1') }}</td>
              <td>{{ t('ex-r2c2') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-table-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
