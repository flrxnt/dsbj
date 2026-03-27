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
      'prop-className': 'Classe sur la racine .bj-gallery.',
      'section-cols': 'cols : 2, 3 et 4',
      'section-images': 'images : vignette, légende et combinaisons',
      'section-classname': 'className sur la galerie',
    },
    en: {
      title: 'BjGallery',
      desc: 'React image grid with a portaled lightbox: clicking or activating a tile opens the viewer; arrow keys and Escape are handled. Each item supports src, alt, optional caption, and optional thumbnail.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-images': 'Array of objects with src, optional alt and caption, and optional thumbnail for the tile.',
      'prop-cols': 'Column count: 2, 3 (default), or 4.',
      'prop-className': 'Class on the .bj-gallery root.',
      'section-cols': 'cols: 2, 3, and 4',
      'section-images': 'images: thumbnail, caption, and combinations',
      'section-classname': 'className on the gallery',
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

const codeCols = `import { BjGallery } from '@flrxnt/dsbj/react'

const imgs = [
  { src: 'https://picsum.photos/id/1/800/600', alt: 'A' },
  { src: 'https://picsum.photos/id/2/800/600', alt: 'B' },
]

export function ColsDemo() {
  return (
    <>
      <BjGallery images={imgs} cols={2} />
      <BjGallery images={imgs} cols={3} />
      <BjGallery images={imgs} cols={4} />
    </>
  )
}`

const codeThumbCaption = `import { BjGallery } from '@flrxnt/dsbj/react'

const images = [
  {
    src: 'https://picsum.photos/id/30/1600/900',
    thumbnail: 'https://picsum.photos/id/30/400/300',
    alt: 'Ville',
    caption: 'Centre-ville',
  },
]

export function ThumbCaption() {
  return <BjGallery images={images} cols={3} />
}`

const codeClass = `import { BjGallery } from '@flrxnt/dsbj/react'

export function StyledGallery() {
  const images = [{ src: 'https://picsum.photos/id/5/800/600', alt: 'Photo' }]
  return <BjGallery images={images} cols={3} className="my-gallery" />
}`

const propsRows = computed(() => [
  { name: 'images', description: t('prop-images') },
  { name: 'cols', description: t('prop-cols') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-gallery-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-gallery-cols" :title="t('section-cols')">
    <DocsPreview>
      <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bj-gallery--cols-2</p>
      <div class="bj-gallery bj-gallery--cols-2" style="margin-bottom: var(--bj-spacing-4v)">
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/11/400/300" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/12/400/300" alt="" loading="lazy" />
        </div>
      </div>
      <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bj-gallery (cols 3 défaut)</p>
      <div class="bj-gallery" style="margin-bottom: var(--bj-spacing-4v)">
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/13/400/300" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/14/400/300" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/15/400/300" alt="" loading="lazy" />
        </div>
      </div>
      <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bj-gallery--cols-4</p>
      <div class="bj-gallery bj-gallery--cols-4">
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/16/200/200" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/17/200/200" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/18/200/200" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/19/200/200" alt="" loading="lazy" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCols" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-gallery-images" :title="t('section-images')">
    <DocsPreview>
      <div class="bj-gallery">
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="Voir l'image 1">
          <img class="bj-gallery__img" src="https://picsum.photos/id/30/400/300" alt="Ville" loading="lazy" />
          <span class="bj-gallery__caption">Vignette + légende</span>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeThumbCaption" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-gallery-classname" :title="t('section-classname')">
    <DocsPreview>
      <div class="bj-gallery my-gallery-preview">
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/21/400/300" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0">
          <img class="bj-gallery__img" src="https://picsum.photos/id/22/400/300" alt="" loading="lazy" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeClass" lang="tsx" />
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
