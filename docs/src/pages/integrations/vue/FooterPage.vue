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
      title: 'BjFooter',
      desc: 'Pied de page en deux zones : bande supérieure optionnelle et contenu principal.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-slot-top': 'Contenu au-dessus du bloc principal (souvent liens secondaires).',
      'prop-slot-bottom': 'Contenu du bloc principal (liens, mentions, etc.).',
      'prop-slot-default': 'Contenu additionnel rendu dans le conteneur du bas.',
      'preview-top': 'Liens utiles',
      'preview-bottom': '© République du Bénin',
    },
    en: {
      title: 'BjFooter',
      desc: 'Footer with two areas: optional top band and main bottom block.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-slot-top': 'Content above the main block (often secondary links).',
      'prop-slot-bottom': 'Main block content (links, legal line, etc.).',
      'prop-slot-default': 'Additional content rendered in the bottom container.',
      'preview-top': 'Useful links',
      'preview-bottom': '© Republic of Benin',
    },
  },
})

const codeUsage = `<script setup>
import { BjFooter } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjFooter>
    <template #top>
      <p>Liens utiles</p>
    </template>
    <template #bottom>
      <p>Mentions et copyright</p>
    </template>
  </BjFooter>
</template>`

const propsRows = computed(() => [
  { name: '#top', description: t('prop-slot-top') },
  { name: '#bottom', description: t('prop-slot-bottom') },
  { name: 'default', description: t('prop-slot-default') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-footer-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-preview" :title="t('section-preview')">
    <DocsPreview>
      <footer class="bj-footer">
        <div class="bj-footer__top">
          <div class="bj-container">
            <p class="bj-text-sm">{{ t('preview-top') }}</p>
          </div>
        </div>
        <div class="bj-footer__bottom">
          <div class="bj-container">
            <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-footer-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
