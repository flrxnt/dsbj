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
      title: 'BjGallery',
      desc: 'Grille d’images React avec lightbox en portail : clic ou clavier sur une vignette ouvre la visionneuse ; flèches et Échap sont gérés. Chaque entrée peut définir src, alt, caption et thumbnail optionnel.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-images': 'Tableau d’objets avec champs src, alt et caption optionnels ; thumbnail optionnel remplace src pour la tuile.',
      'prop-cols': 'Nombre de colonnes : 2, 3 (défaut) ou 4.',
    },
    en: {
      title: 'BjGallery',
      desc: 'React image grid with a portaled lightbox: clicking or activating a tile opens the viewer; arrow keys and Escape are handled. Each item supports src, alt, optional caption, and optional thumbnail.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-images': 'Array of objects with src, optional alt and caption, and optional thumbnail for the tile.',
      'prop-cols': 'Column count: 2, 3 (default), or 4.',
    },
  },
})

const codeUsage = `import { BjGallery } from '@flrxnt/dsbj/react'

const images = [
  { src: 'https://picsum.photos/id/10/1200/800', alt: 'Forêt', caption: 'Paysage 1' },
  { src: 'https://picsum.photos/id/20/1200/800', alt: 'Plage', caption: 'Paysage 2' },
]

export function Example() {
  return <BjGallery images={images} cols={3} />
}`

const propsRows = computed(() => [
  { name: 'images', description: t('prop-images') },
  { name: 'cols', description: t('prop-cols') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-gallery-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-gallery-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-gallery">
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="Voir l'image 1">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/10/600/400"
            alt="Forêt"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Paysage 1</span>
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="Voir l'image 2">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/20/600/400"
            alt="Plage"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Paysage 2</span>
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="Voir l'image 3">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/30/600/400"
            alt="Ville"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Paysage 3</span>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-gallery-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
