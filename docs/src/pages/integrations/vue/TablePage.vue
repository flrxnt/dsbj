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
      desc: 'Tableau dans un wrapper défilant : légende optionnelle, modificateurs bordered, striped, fixedLayout, slots header et footer autour du table.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-bordered': 'bordered',
      'section-striped': 'striped',
      'section-fixed': 'fixedLayout',
      'section-caption': 'caption et no-caption',
      'section-slots': 'Slots header et footer',
      'section-combos': 'Combinaisons',
      'section-props': 'Props',
      'prop-bordered': 'Bordures sur les cellules.',
      'prop-striped': 'Rayures alternées sur le corps.',
      'prop-fixedLayout': 'table-layout: fixed sur le table.',
      'prop-caption': 'Texte de légende ; si absent, classe bj-table--no-caption.',
      'prop-header': 'Slot header : barre d’outils au-dessus du table.',
      'prop-footer': 'Slot footer : pagination ou actions sous le table.',
      'ex-caption': 'Liste des services',
      'ex-col1': 'Service',
      'ex-col2': 'Délai',
      'ex-r1c1': 'Carte d’identité',
      'ex-r1c2': '15 jours',
      'ex-r2c1': 'Extrait de naissance',
      'ex-r2c2': '48 h',
      'code-caption': 'Liste des services',
      'code-col1': 'Service',
      'code-col2': 'Délai',
      'code-r1c1': 'Carte d’identité',
      'code-r1c2': '15 jours',
      'code-r2c1': 'Extrait de naissance',
      'code-r2c2': '48 h',
      'header-label': 'Exporter',
      'footer-label': '1–2 sur 2',
    },
    en: {
      title: 'BjTable',
      desc: 'Table in a scroll wrapper: optional caption; bordered, striped, fixedLayout; header and footer slots around the table.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-bordered': 'bordered',
      'section-striped': 'striped',
      'section-fixed': 'fixedLayout',
      'section-caption': 'caption and no-caption',
      'section-slots': 'header and footer slots',
      'section-combos': 'Combinations',
      'section-props': 'Props',
      'prop-bordered': 'Cell borders.',
      'prop-striped': 'Alternating body row backgrounds.',
      'prop-fixedLayout': 'table-layout: fixed on the table.',
      'prop-caption': 'Caption text; when omitted, bj-table--no-caption applies.',
      'prop-header': 'Header slot: toolbar above the table.',
      'prop-footer': 'Footer slot: pagination or actions below the table.',
      'ex-caption': 'Service list',
      'ex-col1': 'Service',
      'ex-col2': 'Lead time',
      'ex-r1c1': 'ID card',
      'ex-r1c2': '15 days',
      'ex-r2c1': 'Birth certificate',
      'ex-r2c2': '48 hours',
      'code-caption': 'Service list',
      'code-col1': 'Service',
      'code-col2': 'Lead time',
      'code-r1c1': 'ID card',
      'code-r1c2': '15 days',
      'code-r2c1': 'Birth certificate',
      'code-r2c2': '48 hours',
      'header-label': 'Export',
      'footer-label': '1–2 of 2',
    },
  },
})

const codeUsage = computed(() => {
  const esc = (s: string) => s.replace(/"/g, '&quot;')
  const cap = esc(t('code-caption'))
  const c1 = esc(t('code-col1'))
  const c2 = esc(t('code-col2'))
  const r1a = esc(t('code-r1c1'))
  const r1b = esc(t('code-r1c2'))
  const r2a = esc(t('code-r2c1'))
  const r2b = esc(t('code-r2c2'))
  return `<script setup>
import { BjTable } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjTable caption="${cap}" bordered striped>
    <thead>
      <tr>
        <th>${c1}</th>
        <th>${c2}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${r1a}</td>
        <td>${r1b}</td>
      </tr>
      <tr>
        <td>${r2a}</td>
        <td>${r2b}</td>
      </tr>
    </tbody>
  </BjTable>
</template>`
})

const codeBordered = `<BjTable bordered caption="…">…</BjTable>
<BjTable caption="…">Sans bordered</BjTable>`

const codeStriped = `<BjTable striped caption="…">…</BjTable>`

const codeFixed = `<BjTable fixedLayout bordered caption="Colonnes à largeur fixe">
  <colgroup>
    <col style="width: 40%" />
    <col style="width: 60%" />
  </colgroup>
  …
</BjTable>`

const codeNoCaption = `<BjTable bordered>
  <!-- Sans caption → bj-table--no-caption -->
  <thead>…</thead>
  <tbody>…</tbody>
</BjTable>`

const codeSlots = `<BjTable caption="Liste" bordered>
  <template #header>
    <div style="display: flex; justify-content: flex-end; gap: var(--bj-spacing-2v)">
      <button type="button" class="bj-btn bj-btn--secondary bj-btn--sm">Exporter</button>
    </div>
  </template>
  <thead>…</thead>
  <tbody>…</tbody>
  <template #footer>
    <p class="bj-text-sm">Pagination ou méta</p>
  </template>
</BjTable>`

const codeCombos = `<BjTable caption="…" bordered striped fixedLayout>
  <template #header>…</template>
  <thead>…</thead>
  <tbody>…</tbody>
  <template #footer>…</template>
</BjTable>`

const propsRows = computed(() => [
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'striped', description: t('prop-striped') },
  { name: 'fixedLayout', description: t('prop-fixedLayout') },
  { name: 'caption', description: t('prop-caption') },
  { name: 'header (slot)', description: t('prop-header') },
  { name: 'footer (slot)', description: t('prop-footer') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-table-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-table-bordered" :title="t('section-bordered')">
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
    <DocsCode :code="codeBordered" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-striped" :title="t('section-striped')">
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
    <DocsCode :code="codeStriped" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-fixed" :title="t('section-fixed')">
    <DocsCode :code="codeFixed" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-caption" :title="t('section-caption')">
    <DocsCode :code="codeNoCaption" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-slots" :title="t('section-slots')">
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
    <DocsCode :code="codeSlots" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-combos" :title="t('section-combos')">
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
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-table-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop / slot', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
