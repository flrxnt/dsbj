<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjFooter } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjFooter',
      desc: 'Pied de page en deux zones : bande supérieure optionnelle (#top), bloc principal (#bottom) et slot par défaut rendu dans le même conteneur que #bottom.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-slot-top': 'Slot #top',
      'section-slot-bottom': 'Slot #bottom',
      'section-slot-default': 'Slot par défaut',
      'section-combo-top-bottom': '#top + #bottom',
      'section-combo-bottom-default': '#bottom + défaut',
      'section-combo-all': '#top + #bottom + défaut',
      'prop-slot-top': 'Contenu au-dessus du bloc principal (souvent liens secondaires). La zone n’est pas rendue si le slot est vide.',
      'prop-slot-bottom': 'Contenu du bloc principal (liens, mentions, etc.).',
      'prop-slot-default': 'Contenu additionnel dans le conteneur du bas, après #bottom.',
      'preview-top': 'Liens utiles',
      'preview-bottom': '© République du Bénin',
      'preview-extra': 'Mentions légales · Accessibilité',
    },
    en: {
      title: 'BjFooter',
      desc: 'Footer with an optional top band (#top), main block (#bottom), and a default slot rendered in the same bottom container as #bottom.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-slot-top': '#top slot',
      'section-slot-bottom': '#bottom slot',
      'section-slot-default': 'Default slot',
      'section-combo-top-bottom': '#top + #bottom',
      'section-combo-bottom-default': '#bottom + default',
      'section-combo-all': '#top + #bottom + default',
      'prop-slot-top': 'Content above the main block (often secondary links). The region is omitted when the slot is empty.',
      'prop-slot-bottom': 'Main block content (links, legal line, etc.).',
      'prop-slot-default': 'Extra content in the bottom container, after #bottom.',
      'preview-top': 'Useful links',
      'preview-bottom': '© Republic of Benin',
      'preview-extra': 'Legal notice · Accessibility',
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
      <p>© Organisation</p>
    </template>
    <p>Slot défaut après le bottom</p>
  </BjFooter>
</template>`

const codeTop = `<BjFooter>
  <template #top>
    <p class="bj-text-sm">Bandeau supérieur seul</p>
  </template>
</BjFooter>`

const codeBottom = `<BjFooter>
  <template #bottom>
    <p class="bj-text-sm">Bloc principal</p>
  </template>
</BjFooter>`

const codeDefault = `<BjFooter>
  <p class="bj-text-sm">Contenu via le slot par défaut uniquement</p>
</BjFooter>`

const codeTopBottom = `<BjFooter>
  <template #top><p>Haut</p></template>
  <template #bottom><p>Bas</p></template>
</BjFooter>`

const codeBottomDefault = `<BjFooter>
  <template #bottom>
    <p>Premier bloc</p>
  </template>
  <p>Deuxième bloc (défaut)</p>
</BjFooter>`

const codeAll = `<BjFooter>
  <template #top><p>Top</p></template>
  <template #bottom><p>Bottom</p></template>
  <p>Default</p>
</BjFooter>`

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
      <BjFooter>
        <template #top>
          <p class="bj-text-sm">{{ t('preview-top') }}</p>
        </template>
        <template #bottom>
          <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
        </template>
        <p class="bj-text-sm">{{ t('preview-extra') }}</p>
      </BjFooter>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-footer-slot-top" :title="t('section-slot-top')">
    <DocsPreview>
      <BjFooter>
        <template #top>
          <p class="bj-text-sm">{{ t('preview-top') }}</p>
        </template>
      </BjFooter>
    </DocsPreview>
    <DocsCode :code="codeTop" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-slot-bottom" :title="t('section-slot-bottom')">
    <DocsPreview>
      <BjFooter>
        <template #bottom>
          <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
        </template>
      </BjFooter>
    </DocsPreview>
    <DocsCode :code="codeBottom" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-slot-default" :title="t('section-slot-default')">
    <DocsPreview>
      <BjFooter>
        <p class="bj-text-sm">{{ t('preview-extra') }}</p>
      </BjFooter>
    </DocsPreview>
    <DocsCode :code="codeDefault" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-combo-top-bottom" :title="t('section-combo-top-bottom')">
    <DocsPreview>
      <BjFooter>
        <template #top>
          <p class="bj-text-sm">{{ t('preview-top') }}</p>
        </template>
        <template #bottom>
          <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
        </template>
      </BjFooter>
    </DocsPreview>
    <DocsCode :code="codeTopBottom" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-combo-bottom-default" :title="t('section-combo-bottom-default')">
    <DocsPreview>
      <BjFooter>
        <template #bottom>
          <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
        </template>
        <p class="bj-text-sm">{{ t('preview-extra') }}</p>
      </BjFooter>
    </DocsPreview>
    <DocsCode :code="codeBottomDefault" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-combo-all" :title="t('section-combo-all')">
    <DocsPreview>
      <BjFooter>
        <template #top>
          <p class="bj-text-sm">{{ t('preview-top') }}</p>
        </template>
        <template #bottom>
          <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
        </template>
        <p class="bj-text-sm">{{ t('preview-extra') }}</p>
      </BjFooter>
    </DocsPreview>
    <DocsCode :code="codeAll" lang="html" />
  </DocsSection>

  <DocsSection id="vue-footer-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
