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
      desc: 'Tableau dans un conteneur défilant horizontal, légende optionnelle, modificateurs bordures / rayures / largeur fixe, emplacements header et footer optionnels.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-bordered': 'Ajoute des bordures sur toutes les cellules.',
      'prop-striped': 'Alterne le fond des lignes du corps.',
      'prop-fixedLayout': 'Applique table-layout: fixed sur le tableau.',
      'prop-caption': 'Texte de la légende accessible ; si absent, la classe bj-table--no-caption masque une légende vide.',
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
    },
    en: {
      title: 'BjTable',
      desc: 'Table inside a horizontal scroll wrapper, optional caption, bordered / striped / fixed-layout modifiers, optional header and footer slots.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-bordered': 'Adds borders on all cells.',
      'prop-striped': 'Alternates row background in the body.',
      'prop-fixedLayout': 'Applies table-layout: fixed.',
      'prop-caption': 'Accessible caption text; when omitted, bj-table--no-caption hides an empty caption.',
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

const propsRows = computed(() => [
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'striped', description: t('prop-striped') },
  { name: 'fixedLayout', description: t('prop-fixedLayout') },
  { name: 'caption', description: t('prop-caption') },
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

  <DocsSection id="vue-table-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
