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
      title: 'BjBanner',
      desc: 'Bannière hero avec taille, alignement, thème, image de fond optionnelle et zone d’actions.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-size': 'sm, md (défaut) ou lg.',
      'prop-align': 'left (défaut), center ou right.',
      'prop-theme': 'light, dark (défaut), green, yellow, red ou plain.',
      'prop-image': 'URL d’image pour le fond (couche .bj-banner__img).',
      'prop-title': 'Titre principal.',
      'prop-text': 'Texte d’introduction.',
      'prop-slot-actions': 'Slot nommé #actions pour boutons ou liens.',
      'banner-title': 'Services en ligne',
      'banner-text': 'Effectuez vos démarches administratives simplement.',
      'banner-action': 'Commencer',
    },
    en: {
      title: 'BjBanner',
      desc: 'Hero banner with size, alignment, theme, optional background image, and actions area.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-size': 'sm, md (default), or lg.',
      'prop-align': 'left (default), center, or right.',
      'prop-theme': 'light, dark (default), green, yellow, red, or plain.',
      'prop-image': 'Background image URL (.bj-banner__img layer).',
      'prop-title': 'Main title.',
      'prop-text': 'Introductory text.',
      'prop-slot-actions': 'Named slot #actions for buttons or links.',
      'banner-title': 'Online services',
      'banner-text': 'Complete your administrative procedures easily.',
      'banner-action': 'Get started',
    },
  },
})

const codeUsage = `<script setup>
import { BjBanner } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjBanner
    size="md"
    align="left"
    theme="green"
    title="Services en ligne"
    text="Sous-titre de la bannière."
  >
    <template #actions>
      <a class="bj-btn bj-btn--contrast" href="#">Action</a>
    </template>
  </BjBanner>
</template>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'align', description: t('prop-align') },
  { name: 'theme', description: t('prop-theme') },
  { name: 'image', description: t('prop-image') },
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: '#actions', description: t('prop-slot-actions') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-banner-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-banner-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-banner bj-banner--green">
        <div class="bj-banner__overlay" />
        <div class="bj-banner__body">
          <h1 class="bj-banner__title">{{ t('banner-title') }}</h1>
          <p class="bj-banner__text">{{ t('banner-text') }}</p>
          <div class="bj-banner__actions">
            <button type="button" class="bj-btn bj-btn--contrast">{{ t('banner-action') }}</button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
