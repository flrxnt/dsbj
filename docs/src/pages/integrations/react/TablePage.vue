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
      desc: 'Tableau React : wrapper, props header et footer pour des nœuds au-dessus / sous le table ; bordered, striped, fixedLayout, caption.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-bordered': 'bordered',
      'section-striped': 'striped',
      'section-fixed': 'fixedLayout',
      'section-caption': 'caption et no-caption',
      'section-header-footer': 'header et footer',
      'section-combos': 'Combinaisons',
      'section-children': 'Children (thead, tbody…)',
      'section-props': 'Props',
      'prop-bordered': 'Bordures cellules.',
      'prop-striped': 'Rayures sur le tbody.',
      'prop-fixedLayout': 'table-layout fixed.',
      'prop-caption': 'Légende ; sans caption, classe no-caption.',
      'prop-header': 'Nœud React dans bj-table__header.',
      'prop-footer': 'Nœud React dans bj-table__footer.',
      'children-desc': 'Enfants du table : colgroup, thead, tbody, etc.',
      'ex-caption': 'Liste des services',
      'ex-col1': 'Service',
      'ex-col2': 'Délai',
      'ex-r1c1': 'Carte d’identité',
      'ex-r1c2': '15 jours',
      'ex-r2c1': 'Extrait de naissance',
      'ex-r2c2': '48 h',
      'header-label': 'Exporter',
      'footer-label': '1–2 sur 2',
    },
    en: {
      title: 'BjTable',
      desc: 'React table: wrapper; header and footer props for nodes above/below the table; bordered, striped, fixedLayout, caption.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-bordered': 'bordered',
      'section-striped': 'striped',
      'section-fixed': 'fixedLayout',
      'section-caption': 'caption and no-caption',
      'section-header-footer': 'header and footer',
      'section-combos': 'Combinations',
      'section-children': 'Children (thead, tbody…)',
      'section-props': 'Props',
      'prop-bordered': 'Cell borders.',
      'prop-striped': 'Striped body rows.',
      'prop-fixedLayout': 'table-layout fixed.',
      'prop-caption': 'Caption; without it, no-caption class.',
      'prop-header': 'React node in bj-table__header.',
      'prop-footer': 'React node in bj-table__footer.',
      'children-desc': 'Table children: colgroup, thead, tbody, etc.',
      'ex-caption': 'Service list',
      'ex-col1': 'Service',
      'ex-col2': 'Lead time',
      'ex-r1c1': 'ID card',
      'ex-r1c2': '15 days',
      'ex-r2c1': 'Birth certificate',
      'ex-r2c2': '48 hours',
      'header-label': 'Export',
      'footer-label': '1–2 of 2',
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

const codeBordered = `<BjTable bordered caption="…">…</BjTable>`

const codeStriped = `<BjTable striped caption="…">…</BjTable>`

const codeFixed = `<BjTable fixedLayout bordered caption="…">
  <colgroup>
    <col style={{ width: '40%' }} />
    <col style={{ width: '60%' }} />
  </colgroup>
  …
</BjTable>`

const codeNoCaption = `<BjTable bordered>
  <thead>…</thead>
  <tbody>…</tbody>
</BjTable>`

const codeHeaderFooter = `import { BjButton } from '@flrxnt/dsbj/react'
import { BjTable } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjTable
      caption="Liste"
      bordered
      header={
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BjButton variant="secondary" size="sm">Exporter</BjButton>
        </div>
      }
      footer={<p className="bj-text-sm">Pagination</p>}
    >
      <thead>…</thead>
      <tbody>…</tbody>
    </BjTable>
  )
}`

const codeCombos = `<BjTable caption="…" bordered striped fixedLayout header={…} footer={…}>
  <thead>…</thead>
  <tbody>…</tbody>
</BjTable>`

const propsRows = computed(() => [
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'striped', description: t('prop-striped') },
  { name: 'fixedLayout', description: t('prop-fixedLayout') },
  { name: 'caption', description: t('prop-caption') },
  { name: 'header', description: t('prop-header') },
  { name: 'footer', description: t('prop-footer') },
  { name: 'children', description: t('children-desc') },
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

  <DocsSection id="react-table-bordered" :title="t('section-bordered')">
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--bordered bj-table--no-caption">
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
    <DocsCode :code="codeBordered" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-striped" :title="t('section-striped')">
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--striped bj-table--no-caption">
          <thead>
            <tr>
              <th>X</th>
              <th>Y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>b</td>
            </tr>
            <tr>
              <td>c</td>
              <td>d</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStriped" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-fixed" :title="t('section-fixed')">
    <DocsCode :code="codeFixed" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-caption" :title="t('section-caption')">
    <DocsCode :code="codeNoCaption" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-header-footer" :title="t('section-header-footer')">
    <DocsPreview>
      <div class="bj-table-wrapper">
        <div class="bj-table__header">
          <div style="display: flex; justify-content: flex-end">
            <button type="button" class="bj-btn bj-btn--secondary bj-btn--sm">{{ t('header-label') }}</button>
          </div>
        </div>
        <table class="bj-table bj-table--bordered">
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
          </tbody>
        </table>
        <div class="bj-table__footer">
          <p class="bj-text-sm">{{ t('footer-label') }}</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeHeaderFooter" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-combos" :title="t('section-combos')">
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--bordered bj-table--striped bj-table--layout-fixed">
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
    <DocsCode :code="codeCombos" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-table-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
  </DocsSection>

  <DocsSection id="react-table-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
