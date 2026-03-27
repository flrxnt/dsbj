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
      desc: 'Composant Vue pour la grille d’images DSBJ avec lightbox : navigation, compteur et légendes. Les images sont passées via un tableau typé.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-images':
        'Tableau d’objets avec champs src, alt et caption optionnels, thumbnail optionnel ; thumbnail remplace src pour la vignette si fourni.',
      'prop-cols': 'Nombre de colonnes de la grille : 2, 3 (défaut) ou 4.',
      'section-cols': 'cols : 2, 3 et 4 (aperçu HTML)',
      'section-images': 'images : champs et combinaisons',
      'section-no-slots': 'Slots',
      'section-no-emits': 'Événements Vue',
      'section-no-vmodel': 'v-model',
      'cols-intro': 'Modificateurs : bj-gallery--cols-2, (défaut 3, pas de classe), bj-gallery--cols-4.',
      'images-intro':
        'src (requis pour l’image plein écran), alt, caption (sous la vignette), thumbnail (vignette différente du plein écran).',
      'no-slots-desc': 'Pas de slots : la grille et la lightbox sont entièrement dérivées du tableau images.',
      'no-emits-desc': 'Pas d’emit : ouverture lightbox et navigation au clavier sont internes.',
      'no-vmodel-desc': 'Pas de v-model : l’index affiché dans la lightbox est interne.',
    },
    en: {
      title: 'BjGallery',
      desc: 'Vue component for the DSBJ image grid with lightbox: navigation, counter, and captions. Images are passed as a typed array.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-images':
        'Array of objects with src, optional alt, caption, and thumbnail ; thumbnail overrides src for the tile when set.',
      'prop-cols': 'Grid column count: 2, 3 (default), or 4.',
      'section-cols': 'cols: 2, 3, and 4 (HTML preview)',
      'section-images': 'images: fields and combinations',
      'section-no-slots': 'Slots',
      'section-no-emits': 'Vue events',
      'section-no-vmodel': 'v-model',
      'cols-intro': 'Modifiers: bj-gallery--cols-2, (default 3, no extra class), bj-gallery--cols-4.',
      'images-intro':
        'src (required for full-size), alt, caption (under tile), thumbnail (tile different from lightbox src).',
      'no-slots-desc': 'No slots: grid and lightbox are fully driven by the images array.',
      'no-emits-desc': 'No emits: lightbox open and keyboard navigation are internal.',
      'no-vmodel-desc': 'No v-model: lightbox index is internal.',
    },
  },
})

const codeUsage = `<script setup>
import { BjGallery } from '@flrxnt/dsbj/vue'

const images = [
  { src: 'https://picsum.photos/id/10/1200/800', alt: 'Forêt', caption: 'Paysage 1' },
  { src: 'https://picsum.photos/id/20/1200/800', alt: 'Plage', caption: 'Paysage 2' },
]
<\/script>

<template>
  <BjGallery :images="images" :cols="3" />
</template>`

const codeCols = `<BjGallery :images="images" :cols="2" />
<BjGallery :images="images" :cols="3" />
<BjGallery :images="images" :cols="4" />`

const codeImages = `const mix = [
  { src: 'https://example.com/large.jpg', thumbnail: 'https://example.com/small.jpg', alt: 'Vue', caption: 'Légende' },
  { src: 'https://example.com/only.jpg', alt: 'Sans légende ni vignette' },
]`

const propsRows = computed(() => [
  { name: 'images', description: t('prop-images') },
  { name: 'cols', description: t('prop-cols') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-gallery-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-gallery-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-gallery" data-bj-gallery>
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

  <DocsSection id="vue-gallery-cols" :title="t('section-cols')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('cols-intro') }}</p>
    <DocsCode :code="codeCols" lang="html" />
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); margin-top: var(--bj-spacing-3v)">
      <div class="bj-gallery bj-gallery--cols-2" data-bj-gallery>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="cols-2 a">
          <img class="bj-gallery__img" src="https://picsum.photos/id/101/400/260" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="cols-2 b">
          <img class="bj-gallery__img" src="https://picsum.photos/id/102/400/260" alt="" loading="lazy" />
        </div>
      </div>
      <div class="bj-gallery bj-gallery--cols-4" data-bj-gallery>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="cols-4 a">
          <img class="bj-gallery__img" src="https://picsum.photos/id/103/200/200" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="cols-4 b">
          <img class="bj-gallery__img" src="https://picsum.photos/id/104/200/200" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="cols-4 c">
          <img class="bj-gallery__img" src="https://picsum.photos/id/106/200/200" alt="" loading="lazy" />
        </div>
        <div class="bj-gallery__item" role="button" tabindex="0" aria-label="cols-4 d">
          <img class="bj-gallery__img" src="https://picsum.photos/id/107/200/200" alt="" loading="lazy" />
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-gallery-images" :title="t('section-images')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('images-intro') }}</p>
    <DocsCode :code="codeImages" lang="html" />
  </DocsSection>

  <DocsSection id="vue-gallery-slots" :title="t('section-no-slots')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-slots-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-gallery-emits" :title="t('section-no-emits')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-emits-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-gallery-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-gallery-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
