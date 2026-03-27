<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjBanner } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const demoImage = 'https://picsum.photos/seed/dsbj-banner/1200/400'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjBanner',
      desc: 'Bannière hero : size (sm / md défaut / lg), align (left défaut / center / right), theme (light / dark défaut / green / yellow / red / plain), image, title, text, slot #actions et slot par défaut dans le corps.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-size': 'size',
      'section-align': 'align',
      'section-theme': 'theme',
      'section-matrix': 'Combinaisons align × theme (size md)',
      'section-image': 'Image de fond',
      'section-slot-actions': 'Slot #actions',
      'section-slot-default': 'Slot par défaut',
      'prop-size': 'sm, md (défaut) ou lg.',
      'prop-align': 'left (défaut), center ou right.',
      'prop-theme': 'light, dark (défaut), green, yellow, red ou plain.',
      'prop-image': 'URL d’image pour le fond (couche .bj-banner__img).',
      'prop-title': 'Titre principal.',
      'prop-text': 'Texte d’introduction.',
      'prop-slot-actions': 'Boutons ou liens dans .bj-banner__actions.',
      'prop-slot-default': 'Contenu additionnel dans .bj-banner__body après les actions.',
      'banner-title': 'Services en ligne',
      'banner-text': 'Effectuez vos démarches administratives simplement.',
      'banner-action': 'Commencer',
      'label-size-sm': 'sm',
      'label-size-md': 'md',
      'label-size-lg': 'lg',
      'label-align-left': 'left',
      'label-align-center': 'center',
      'label-align-right': 'right',
      'label-theme-light': 'light',
      'label-theme-dark': 'dark',
      'label-theme-green': 'green',
      'label-theme-yellow': 'yellow',
      'label-theme-red': 'red',
      'label-theme-plain': 'plain',
      'matrix-caption': 'Chaque carte : align (ligne) × theme (colonne), size md.',
      'banner-secondary': 'Secondaire',
    },
    en: {
      title: 'BjBanner',
      desc: 'Hero banner: size (sm / default md / lg), align (default left / center / right), theme (light / default dark / green / yellow / red / plain), image, title, text, #actions slot and default slot in the body.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-size': 'size',
      'section-align': 'align',
      'section-theme': 'theme',
      'section-matrix': 'align × theme combinations (md size)',
      'section-image': 'Background image',
      'section-slot-actions': '#actions slot',
      'section-slot-default': 'Default slot',
      'prop-size': 'sm, md (default), or lg.',
      'prop-align': 'left (default), center, or right.',
      'prop-theme': 'light, dark (default), green, yellow, red, or plain.',
      'prop-image': 'Background image URL (.bj-banner__img layer).',
      'prop-title': 'Main title.',
      'prop-text': 'Introductory text.',
      'prop-slot-actions': 'Buttons or links in .bj-banner__actions.',
      'prop-slot-default': 'Extra content in .bj-banner__body after actions.',
      'banner-title': 'Online services',
      'banner-text': 'Complete your administrative procedures easily.',
      'banner-action': 'Get started',
      'label-size-sm': 'sm',
      'label-size-md': 'md',
      'label-size-lg': 'lg',
      'label-align-left': 'left',
      'label-align-center': 'center',
      'label-align-right': 'right',
      'label-theme-light': 'light',
      'label-theme-dark': 'dark',
      'label-theme-green': 'green',
      'label-theme-yellow': 'yellow',
      'label-theme-red': 'red',
      'label-theme-plain': 'plain',
      'matrix-caption': 'Each tile: align (row) × theme (column), md size.',
      'banner-secondary': 'Secondary',
    },
  },
})

const sizes = ['sm', 'md', 'lg'] as const
const aligns = ['left', 'center', 'right'] as const
const themes = ['light', 'dark', 'green', 'yellow', 'red', 'plain'] as const

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

const codeImage = `<BjBanner
  size="lg"
  align="center"
  theme="dark"
  :image="imageUrl"
  title="Titre"
  text="Sous-titre"
/>`

const codeDefaultSlot = `<BjBanner title="Titre" text="Texte">
  <template #actions>
    <button type="button" class="bj-btn">OK</button>
  </template>
  <p>Contenu slot défaut sous les actions</p>
</BjBanner>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'align', description: t('prop-align') },
  { name: 'theme', description: t('prop-theme') },
  { name: 'image', description: t('prop-image') },
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: '#actions', description: t('prop-slot-actions') },
  { name: 'default', description: t('prop-slot-default') },
])

function themeLabel(th: (typeof themes)[number]) {
  return t(`label-theme-${th}`)
}
function alignLabel(a: (typeof aligns)[number]) {
  return t(`label-align-${a}`)
}
function sizeLabel(s: (typeof sizes)[number]) {
  return t(`label-size-${s}`)
}
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-banner-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-banner-preview" :title="t('section-preview')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <BjBanner theme="green" :title="t('banner-title')" :text="t('banner-text')">
        <template #actions>
          <button type="button" class="bj-btn bj-btn--contrast">{{ t('banner-action') }}</button>
        </template>
      </BjBanner>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-size" :title="t('section-size')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); padding: 0">
      <div v-for="sz in sizes" :key="sz">
        <p class="bj-text-sm" style="padding: 0 var(--bj-spacing-2v)">{{ sizeLabel(sz) }}</p>
        <BjBanner :size="sz" theme="dark" :title="`${t('banner-title')} (${sz})`" :text="t('banner-text')">
          <template #actions>
            <button type="button" class="bj-btn bj-btn--contrast">{{ t('banner-action') }}</button>
          </template>
        </BjBanner>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-align" :title="t('section-align')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); padding: 0">
      <div v-for="al in aligns" :key="al">
        <p class="bj-text-sm" style="padding: 0 var(--bj-spacing-2v)">{{ alignLabel(al) }}</p>
        <BjBanner size="sm" :align="al" theme="green" :title="t('banner-title')" :text="t('banner-text')" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-theme" :title="t('section-theme')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); padding: 0">
      <div v-for="th in themes" :key="th">
        <p class="bj-text-sm" style="padding: 0 var(--bj-spacing-2v)">{{ themeLabel(th) }}</p>
        <BjBanner size="sm" :theme="th" :title="t('banner-title')" :text="t('banner-text')" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-matrix" :title="t('section-matrix')">
    <p class="bj-text-sm" style="max-width: 48rem; margin-bottom: var(--bj-spacing-3v)">{{ t('matrix-caption') }}</p>
    <DocsPreview style="padding: var(--bj-spacing-2v); overflow: auto">
      <div
        style="
          display: grid;
          grid-template-columns: repeat(6, minmax(10rem, 1fr));
          gap: var(--bj-spacing-2v);
          min-width: min(100%, 72rem);
        "
      >
        <template v-for="al in aligns" :key="al">
          <div
            v-for="th in themes"
            :key="`${al}-${th}`"
            style="min-height: 6rem; display: flex; flex-direction: column"
          >
            <BjBanner
              size="sm"
              :align="al"
              :theme="th"
              :title="`${alignLabel(al)} · ${themeLabel(th)}`"
            />
          </div>
        </template>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-image" :title="t('section-image')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <BjBanner
        size="lg"
        align="center"
        theme="dark"
        :image="demoImage"
        :title="t('banner-title')"
        :text="t('banner-text')"
      >
        <template #actions>
          <button type="button" class="bj-btn">{{ t('banner-action') }}</button>
        </template>
      </BjBanner>
    </DocsPreview>
    <DocsCode :code="codeImage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-banner-actions" :title="t('section-slot-actions')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <BjBanner theme="yellow" :title="t('banner-title')" :text="t('banner-text')">
        <template #actions>
          <button type="button" class="bj-btn">{{ t('banner-action') }}</button>
          <button type="button" class="bj-btn bj-btn--secondary">{{ t('banner-secondary') }}</button>
        </template>
      </BjBanner>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-banner-default-slot" :title="t('section-slot-default')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <BjBanner theme="plain" :title="t('banner-title')" :text="t('banner-text')">
        <template #actions>
          <button type="button" class="bj-btn">{{ t('banner-action') }}</button>
        </template>
        <p class="bj-text-sm" style="margin-top: var(--bj-spacing-2v)">Slot défaut : paragraphe additionnel.</p>
      </BjBanner>
    </DocsPreview>
    <DocsCode :code="codeDefaultSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-banner-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
