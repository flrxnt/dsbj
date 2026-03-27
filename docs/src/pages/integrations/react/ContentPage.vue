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
      title: 'BjContent',
      desc: 'Conteneur React pour le contenu éditorial : classe bj-content fusionnée sur le div racine, children pour le HTML riche.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-children': 'Children',
      'section-classname': 'className et attributs',
      'section-props': 'Props',
      'prop-children': 'Contenu HTML riche à styliser (titres, paragraphes, listes).',
      'prop-classname': 'Classes supplémentaires fusionnées avec bj-content (non destructif).',
      'prop-div': 'Toute autre prop div native (id, role, data-*, style, etc.) est transmise au div racine.',
      'children-desc':
        'Passez le fragment éditorial en children ; BjContent ajoute uniquement la classe de design system.',
      'class-desc':
        'Vos classes passées via <code>className</code> sont fusionnées avec <code>bj-content</code> (pas de remplacement).',
      'preview-title': 'Titre de section',
      'preview-text': 'Ceci est un paragraphe de contenu éditorial stylisé automatiquement par le composant BjContent.',
      'preview-list-label': 'Liste à puces :',
      'preview-li1': 'Premier point',
      'preview-li2': 'Deuxième point',
    },
    en: {
      title: 'BjContent',
      desc: 'React editorial wrapper: merges the bj-content class on the root div; children hold rich HTML.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-children': 'Children',
      'section-classname': 'className and attributes',
      'section-props': 'Props',
      'prop-children': 'Rich HTML to style (headings, paragraphs, lists).',
      'prop-classname': 'Extra classes merged with bj-content (non-destructive).',
      'prop-div': 'Other native div props (id, role, data-*, style, etc.) are forwarded to the root div.',
      'children-desc':
        'Pass editorial markup as children; BjContent only adds the design-system class.',
      'class-desc':
        'Your <code>className</code> values are merged with <code>bj-content</code> (not replaced).',
      'preview-title': 'Section title',
      'preview-text':
        'This is an editorial content paragraph automatically styled by the BjContent component.',
      'preview-list-label': 'Bullet list:',
      'preview-li1': 'First item',
      'preview-li2': 'Second item',
    },
  },
})

const codeUsage = `import { BjContent } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjContent>
      <h2>Titre</h2>
      <p>Contenu éditorial avec styles typographiques DSBJ.</p>
    </BjContent>
  )
}`

const codeChildren = `<BjContent>
  <h2>Section</h2>
  <p>Paragraphe.</p>
  <ul>
    <li>Point un</li>
    <li>Point deux</li>
  </ul>
</BjContent>`

const codeClassName = `<BjContent id="article-body" className="my-article" data-testid="content">
  <p>Contenu avec attributs sur le conteneur.</p>
</BjContent>`

const propsRows = computed(() => [
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-classname') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-content-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-content-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-content">
        <h2>{{ t('preview-title') }}</h2>
        <p>{{ t('preview-text') }}</p>
        <p class="bj-text-sm" style="margin-top: var(--bj-spacing-2v)">{{ t('preview-list-label') }}</p>
        <ul>
          <li>{{ t('preview-li1') }}</li>
          <li>{{ t('preview-li2') }}</li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-content-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
  </DocsSection>

  <DocsSection id="react-content-classname" :title="t('section-classname')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('class-desc')" />
    <DocsCode :code="codeClassName" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-content-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
