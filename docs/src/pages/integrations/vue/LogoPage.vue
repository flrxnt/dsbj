<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjLogo } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjLogo',
      desc: 'Bloc logo : size md (défaut), lg ou xl ; href optionnel ; src / alt pour image ; sans src, le slot par défaut remplace l’image ; motto et tagline optionnels.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-size': 'size',
      'section-href': 'Avec href (lien)',
      'section-src': 'Avec src et alt',
      'section-slot': 'Sans src (slot par défaut)',
      'section-motto-tagline': 'motto et tagline',
      'section-combo': 'Combinaison (xl + href + motto + tagline + src)',
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
      'logo-motto': 'Fraternité · Justice · Travail',
      'label-size-md': 'md',
      'label-size-lg': 'lg',
      'label-size-xl': 'xl',
    },
    en: {
      title: 'BjLogo',
      desc: 'Logo block: size md (default), lg, or xl; optional href; src / alt for image; without src, the default slot replaces the image; optional motto and tagline.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-size': 'size',
      'section-href': 'With href (link)',
      'section-src': 'With src and alt',
      'section-slot': 'Without src (default slot)',
      'section-motto-tagline': 'motto and tagline',
      'section-combo': 'Combination (xl + href + motto + tagline + src)',
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
      'logo-motto': 'Fraternity · Justice · Labor',
      'label-size-md': 'md',
      'label-size-lg': 'lg',
      'label-size-xl': 'xl',
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

const codeSlot = `<BjLogo href="/" motto="Devise" tagline="Sous-texte">
  <span class="bj-text-lg"><strong>R</strong></span>
</BjLogo>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'href', description: t('prop-href') },
  { name: 'motto', description: t('prop-motto') },
  { name: 'tagline', description: t('prop-tagline') },
  { name: 'src', description: t('prop-src') },
  { name: 'alt', description: t('prop-alt') },
  { name: 'default', description: t('prop-slot-default') },
])

const sizes = ['md', 'lg', 'xl'] as const

function sizeLabel(s: (typeof sizes)[number]) {
  return t(`label-size-${s}`)
}
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-logo-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-logo-preview" :title="t('section-preview')">
    <DocsPreview>
      <BjLogo src="/sigle.svg" :alt="t('logo-line1')" :tagline="t('logo-tagline')" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-size" :title="t('section-size')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)">
      <div v-for="sz in sizes" :key="sz">
        <p class="bj-text-sm">{{ sizeLabel(sz) }}</p>
        <BjLogo :size="sz" src="/sigle.svg" alt="" :tagline="t('logo-tagline')" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-href" :title="t('section-href')">
    <DocsPreview>
      <BjLogo href="#vue-logo-href" src="/sigle.svg" alt="" :tagline="t('logo-tagline')" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-src" :title="t('section-src')">
    <DocsPreview>
      <BjLogo src="/sigle.svg" :alt="`${t('logo-line1')} ${t('logo-line2')}`" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-slot" :title="t('section-slot')">
    <DocsPreview>
      <BjLogo :motto="t('logo-motto')" :tagline="t('logo-tagline')">
        <div class="bj-text-sm">
          {{ t('logo-line1') }}<br />
          {{ t('logo-line2') }}
        </div>
      </BjLogo>
    </DocsPreview>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-logo-motto-tagline" :title="t('section-motto-tagline')">
    <DocsPreview>
      <BjLogo src="/sigle.svg" alt="" :motto="t('logo-motto')" :tagline="t('logo-tagline')" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-combo" :title="t('section-combo')">
    <DocsPreview>
      <BjLogo
        size="xl"
        href="#"
        src="/sigle.svg"
        :alt="t('logo-line1')"
        :motto="t('logo-motto')"
        :tagline="t('logo-tagline')"
      />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-logo-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
