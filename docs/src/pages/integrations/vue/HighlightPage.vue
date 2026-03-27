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
      desc: 'Encadré de mise en exergue avec bordure gauche ; taille sm, md (défaut) ou lg pour le padding et la typographie.',
      'section-usage': 'Utilisation',
      'section-sizes': 'Tailles',
      'section-matrix': 'Tailles × contenu',
      'section-slot': 'Slot par défaut',
      'section-props': 'Props',
      'prop-size': 'sm, md (défaut) ou lg.',
      'slot-desc': 'Placez paragraphes, listes ou liens dans le slot par défaut.',
      'ex-p': 'Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.',
      'code-p': 'Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.',
      'label-sm': 'sm',
      'label-md': 'md',
      'label-lg': 'lg',
    },
    en: {
      title: 'BjHighlight',
      desc: 'Emphasis block with a left border; sm, md (default), or lg for padding and type scale.',
      'section-usage': 'Usage',
      'section-sizes': 'Sizes',
      'section-matrix': 'Sizes × content',
      'section-slot': 'Default slot',
      'section-props': 'Props',
      'prop-size': 'sm, md (default), or lg.',
      'slot-desc': 'Put paragraphs, lists, or links in the default slot.',
      'ex-p': 'This paragraph is highlighted to make key points easier to read.',
      'code-p': 'This paragraph is highlighted to make key points easier to read.',
      'label-sm': 'sm',
      'label-md': 'md',
      'label-lg': 'lg',
    },
  },
})

const codeUsage = computed(() => {
  const p = t('code-p')
  return `<script setup>
import { BjHighlight } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjHighlight size="lg">
    <p>${p}</p>
  </BjHighlight>
</template>`
})

const codeSizes = `<BjHighlight size="sm"><p>Texte sm.</p></BjHighlight>
<BjHighlight size="md"><p>Texte md (défaut).</p></BjHighlight>
<BjHighlight size="lg"><p>Texte lg.</p></BjHighlight>`

const codeMatrix = `<BjHighlight size="sm"><p>sm</p></BjHighlight>
<BjHighlight size="sm"><p class="bj-text-sm">sm + classe texte petite</p></BjHighlight>
<BjHighlight size="lg"><p>lg</p><p class="bj-text-sm">Sous-ligne lg</p></BjHighlight>`

const codeSlot = `<BjHighlight>
  <p>Titre implicite via style.</p>
  <ul>
    <li>Point un</li>
    <li>Point deux</li>
  </ul>
</BjHighlight>`

const propsRows = computed(() => [{ name: 'size', description: t('prop-size') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-highlight-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-highlight-sizes" :title="t('section-sizes')">
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
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-highlight-matrix" :title="t('section-matrix')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 40rem">
      <div class="bj-highlight bj-highlight--sm"><p>sm — court</p></div>
      <div class="bj-highlight bj-highlight--lg">
        <p>lg — bloc principal</p>
        <p class="bj-text-sm">Sous-texte</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMatrix" lang="html" />
  </DocsSection>

  <DocsSection id="vue-highlight-slot" :title="t('section-slot')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('slot-desc') }}</p>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-highlight-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
