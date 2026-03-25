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
      title: 'BjButton',
      desc: 'Composant Vue réactif pour le bouton DSBJ. Encapsule les classes .bj-btn avec des props typées.',
      'section-usage': 'Utilisation',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-props': 'Props',
      'prop-variant': 'Variante visuelle du bouton.',
      'prop-size': 'Taille du bouton.',
      'prop-icon': 'Bouton carré pour icône seule.',
      'prop-full': 'Largeur 100% du conteneur.',
      'prop-disabled': 'Désactive le bouton.',
      'prop-tag': 'Élément HTML rendu (button ou a).',
    },
    en: {
      title: 'BjButton',
      desc: 'Reactive Vue component for the DSBJ button. Wraps .bj-btn classes with typed props.',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-props': 'Props',
      'prop-variant': 'Visual variant of the button.',
      'prop-size': 'Button size.',
      'prop-icon': 'Square button for icon only.',
      'prop-full': '100% width of the container.',
      'prop-disabled': 'Disables the button.',
      'prop-tag': 'Rendered HTML element (button or a).',
    },
  },
})

const codeUsage = `<script setup>
import { BjButton } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjButton>Valider</BjButton>
  <BjButton variant="secondary">Annuler</BjButton>
  <BjButton variant="tertiary">Retour</BjButton>
</template>`

const codeVariants = `<BjButton variant="primary">Primaire</BjButton>
<BjButton variant="secondary">Secondaire</BjButton>
<BjButton variant="tertiary">Tertiaire</BjButton>
<BjButton variant="accent">Accent</BjButton>
<BjButton variant="contrast">Contraste</BjButton>`

const codeSizes = `<BjButton size="sm">Petit</BjButton>
<BjButton>Par défaut</BjButton>
<BjButton size="lg">Grand</BjButton>
<BjButton :full="true">Pleine largeur</BjButton>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'full', description: t('prop-full') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-btn-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn">Primaire</button>
      <button type="button" class="bj-btn bj-btn--secondary">Secondaire</button>
      <button type="button" class="bj-btn bj-btn--tertiary">Tertiaire</button>
      <button type="button" class="bj-btn bj-btn--accent">Accent</button>
      <button type="button" class="bj-btn bj-btn--contrast">Contraste</button>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn bj-btn--sm">Petit</button>
      <button type="button" class="bj-btn">Par défaut</button>
      <button type="button" class="bj-btn bj-btn--lg">Grand</button>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
