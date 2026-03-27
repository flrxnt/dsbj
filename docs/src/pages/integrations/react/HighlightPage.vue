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
      title: 'BjHighlight',
      desc: 'Encadré de mise en exergue React ; prop size sm, md (défaut) ou lg ; children pour le contenu.',
      'section-usage': 'Utilisation',
      'section-sizes': 'Tailles',
      'section-matrix': 'Tailles × contenu',
      'section-children': 'Children',
      'section-props': 'Props',
      'prop-size': 'sm, md (défaut) ou lg.',
      'children-desc': 'Contenu riche (paragraphes, listes) passé en children.',
      'ex-p': 'Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.',
      'label-sm': 'sm',
      'label-md': 'md',
      'label-lg': 'lg',
    },
    en: {
      title: 'BjHighlight',
      desc: 'React emphasis block; size prop sm, md (default), or lg; children for content.',
      'section-usage': 'Usage',
      'section-sizes': 'Sizes',
      'section-matrix': 'Sizes × content',
      'section-children': 'Children',
      'section-props': 'Props',
      'prop-size': 'sm, md (default), or lg.',
      'children-desc': 'Rich content (paragraphs, lists) as children.',
      'ex-p': 'This paragraph is highlighted to make key points easier to read.',
      'label-sm': 'sm',
      'label-md': 'md',
      'label-lg': 'lg',
    },
  },
})

const codeUsage = `import { BjHighlight } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjHighlight size="lg">
      <p>Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.</p>
    </BjHighlight>
  )
}`

const codeSizes = `<BjHighlight size="sm"><p>Texte sm.</p></BjHighlight>
<BjHighlight size="md"><p>Texte md (défaut).</p></BjHighlight>
<BjHighlight size="lg"><p>Texte lg.</p></BjHighlight>`

const codeMatrix = `<BjHighlight size="sm"><p>sm</p></BjHighlight>
<BjHighlight size="sm"><p className="bj-text-sm">sm + petite typo</p></BjHighlight>
<BjHighlight size="lg">
  <p>lg</p>
  <p className="bj-text-sm">Sous-ligne</p>
</BjHighlight>`

const codeChildren = `<BjHighlight>
  <p>Intro.</p>
  <ul>
    <li>Point un</li>
    <li>Point deux</li>
  </ul>
</BjHighlight>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'children', description: t('children-desc') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-highlight-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-highlight-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 40rem">
      <div class="bj-highlight bj-highlight--sm">
        <p class="bj-text-sm">{{ t('label-sm') }} — {{ t('ex-p') }}</p>
      </div>
      <div class="bj-highlight">
        <p>{{ t('label-md') }} — {{ t('ex-p') }}</p>
      </div>
      <div class="bj-highlight bj-highlight--lg">
        <p>{{ t('label-lg') }} — {{ t('ex-p') }}</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-highlight-matrix" :title="t('section-matrix')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 40rem">
      <div class="bj-highlight bj-highlight--sm"><p>sm — court</p></div>
      <div class="bj-highlight bj-highlight--lg">
        <p>lg — bloc principal</p>
        <p class="bj-text-sm">Sous-texte</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMatrix" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-highlight-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-highlight-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
