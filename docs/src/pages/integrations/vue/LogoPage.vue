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
      title: 'BjLogo',
      desc: 'Bloc logo institutionnel : taille, lien, image, devise, tagline et contenu par slot.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-size': 'md (défaut), lg ou xl.',
      'prop-href': 'Si défini, enveloppe le sigle dans un lien.',
      'prop-motto': 'Courte devise sous le bloc.',
      'prop-tagline': 'Sous-ligne descriptive.',
      'prop-src': 'URL de l’image du sigle.',
      'prop-alt': 'Texte alternatif de l’image (défaut : « Logo »).',
      'prop-slot-default': 'Contenu à la place de l’image si src est absent.',
      'logo-line1': 'République',
      'logo-line2': 'du Bénin',
      'logo-tagline': 'Portail des démarches',
    },
    en: {
      title: 'BjLogo',
      desc: 'Institutional logo block: size, link, image, motto, tagline, and default slot content.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-size': 'md (default), lg, or xl.',
      'prop-href': 'When set, wraps the mark in a link.',
      'prop-motto': 'Short motto below the block.',
      'prop-tagline': 'Descriptive subline.',
      'prop-src': 'Coat of arms or mark image URL.',
      'prop-alt': 'Image alt text (default: "Logo").',
      'prop-slot-default': 'Content instead of the image when src is omitted.',
      'logo-line1': 'Republic',
      'logo-line2': 'of Benin',
      'logo-tagline': 'Procedures portal',
    },
  },
})

const codeUsage = `<script setup>
import { BjLogo } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjLogo
    size="md"
    href="/"
    src="/sigle.svg"
    alt="République du Bénin"
    tagline="Portail des démarches"
  />
</template>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'href', description: t('prop-href') },
  { name: 'motto', description: t('prop-motto') },
  { name: 'tagline', description: t('prop-tagline') },
  { name: 'src', description: t('prop-src') },
  { name: 'alt', description: t('prop-alt') },
  { name: 'default', description: t('prop-slot-default') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-logo-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-logo-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-logo">
        <img src="/sigle.svg" alt="" class="bj-logo__img">
        <p>{{ t('logo-line1') }}<br>{{ t('logo-line2') }}</p>
        <p class="bj-logo__tagline">{{ t('logo-tagline') }}</p>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
