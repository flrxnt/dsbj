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

  <DocsSection id="vue-gallery-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
