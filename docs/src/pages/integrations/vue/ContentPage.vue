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
      desc: 'Conteneur Vue pour le contenu éditorial : applique la classe .bj-content et les styles typographiques DSBJ au HTML du slot par défaut.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-slot': 'Slot par défaut',
      'section-attrs': 'Attributs natifs',
      'section-props': 'Props et héritage',
      'slot-desc':
        'Placez titres, paragraphes, listes et liens dans le slot ; le composant ne fait qu’envelopper le fragment dans un div.bj-content.',
      'attrs-desc':
        'Les attributs et écouteurs non reconnus (id, class, data-*, gestionnaires de clic, etc.) sont transmis au div racine via l’héritage d’attributs Vue 3.',
      'prop-slot': 'Contenu HTML riche à styliser (slot par défaut).',
      'prop-div': 'Tout attribut div natif ou écouteur est fusionné sur l’élément racine.',
      'preview-title': 'Titre de section',
      'preview-text':
        'Ceci est un paragraphe de contenu éditorial stylisé automatiquement par le composant BjContent.',
      'preview-list-label': 'Liste à puces :',
      'preview-li1': 'Premier point',
      'preview-li2': 'Deuxième point',
    },
    en: {
      title: 'BjContent',
      desc: 'Vue wrapper for editorial content: applies the .bj-content class and DSBJ typographic styles to the default slot markup.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-slot': 'Default slot',
      'section-attrs': 'Native attributes',
      'section-props': 'Props and fallthrough',
      'slot-desc':
        'Put headings, paragraphs, lists, and links in the slot; the component only wraps the fragment in a div.bj-content.',
      'attrs-desc':
        'Unrecognized attributes and listeners (id, class, data-*, click handlers, etc.) are forwarded to the root div via Vue 3 attribute fallthrough.',
      'prop-slot': 'Rich HTML content to style (default slot).',
      'prop-div': 'Any native div attribute or listener is merged onto the root element.',
      'preview-title': 'Section title',
      'preview-text':
        'This is an editorial content paragraph automatically styled by the BjContent component.',
      'preview-list-label': 'Bullet list:',
      'preview-li1': 'First item',
      'preview-li2': 'Second item',
    },
  },
})

const codeUsage = `<script setup>
import { BjContent } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjContent>
    <h2>Titre</h2>
    <p>Contenu éditorial avec styles typographiques DSBJ.</p>
  </BjContent>
</template>`

const codeSlot = `<BjContent>
  <h2>Titre de section</h2>
  <p>Paragraphe éditorial.</p>
  <ul>
    <li>Premier point</li>
    <li>Deuxième point</li>
  </ul>
</BjContent>`

const codeAttrs = `<BjContent id="article-body" class="my-article" data-testid="content">
  <p>Contenu avec attributs sur le conteneur.</p>
</BjContent>`

const propsRows = computed(() => [
  { name: '(default slot)', description: t('prop-slot') },
  { name: '(div attrs)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-content-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-content-preview" :title="t('section-preview')">
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
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-content-slot" :title="t('section-slot')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('slot-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-content-attrs" :title="t('section-attrs')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('attrs-desc') }}</p>
    <DocsCode :code="codeAttrs" lang="html" />
  </DocsSection>

  <DocsSection id="vue-content-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop / slot', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
