<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Galerie d’images',
      desc:
        'Grille d’images avec visionneuse plein écran (lightbox). Navigation par flèches clavier, focus trap et préchargement des images adjacentes.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes de grille',
      'section-lightbox': 'Lightbox',
      'section-a11y': 'Accessibilité',
      'lightbox-1':
        'La visionneuse est créée automatiquement par le script. Elle affiche l’image agrandie avec navigation, compteur et légende. Utilisez',
      'lightbox-2':
        'sur l’image pour fournir une URL haute résolution différente de la miniature.',
      'prop-gallery': 'Grille 3 colonnes par défaut.',
      'prop-cols2': 'Grille 2 colonnes.',
      'prop-cols4': 'Grille 4 colonnes.',
      'prop-item': 'Conteneur image cliquable.',
      'prop-img': 'Image avec ratio 4:3.',
      'prop-caption': 'Légende en superposition.',
      'a11y-1': 'Chaque image a',
      'a11y-2': 'et',
      'a11y-3': '. La lightbox a',
      'a11y-4a':
        'avec focus trap. Navigation : flèches gauche/droite, ',
      'a11y-4b': ' pour fermer. Les images doivent avoir un ',
      'a11y-5': 'descriptif.',
      'kbd-esc': 'Échap',
    },
    en: {
      title: 'Image gallery',
      desc:
        'Image grid with a full-screen lightbox. Arrow-key navigation, focus trap, and preloading of adjacent images.',
      'section-example': 'Example',
      'section-variants': 'Grid variants',
      'section-lightbox': 'Lightbox',
      'section-a11y': 'Accessibility',
      'lightbox-1':
        'The viewer is created automatically by the script. It shows the enlarged image with navigation, counter, and caption. Use',
      'lightbox-2':
        'on the image to supply a high-resolution URL different from the thumbnail.',
      'prop-gallery': '3-column grid by default.',
      'prop-cols2': '2-column grid.',
      'prop-cols4': '4-column grid.',
      'prop-item': 'Clickable image container.',
      'prop-img': 'Image with 4:3 ratio.',
      'prop-caption': 'Overlaid caption.',
      'a11y-1': 'Each image has',
      'a11y-2': 'and',
      'a11y-3': '. The lightbox uses',
      'a11y-4a': 'with a focus trap. Navigate with left/right arrows; ',
      'a11y-4b': ' closes. Images need a descriptive ',
      'a11y-5': 'attribute.',
      'kbd-esc': 'Escape',
    },
  },
})

const codeGallery = `<div class="bj-gallery" data-bj-gallery>
  <div class="bj-gallery__item">
    <img class="bj-gallery__img" src="…" alt="…" loading="lazy" />
    <span class="bj-gallery__caption">Légende</span>
  </div>
  …
</div>`

const variantesRows = computed(() => [
  { name: 'bj-gallery', description: t('prop-gallery') },
  { name: 'bj-gallery--cols-2', description: t('prop-cols2') },
  { name: 'bj-gallery--cols-4', description: t('prop-cols4') },
  { name: 'bj-gallery__item', description: t('prop-item') },
  { name: 'bj-gallery__img', description: t('prop-img') },
  { name: 'bj-gallery__caption', description: t('prop-caption') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <div class="bj-gallery" data-bj-gallery>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/10/600/400"
            alt="Forêt"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Forêt tropicale</span>
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/15/600/400"
            alt="Rivière"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Cours d'eau</span>
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/20/600/400"
            alt="Montagnes"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Relief montagneux</span>
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/25/600/400"
            alt="Végétation"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/30/600/400"
            alt="Littoral"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Côte atlantique</span>
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/35/600/400"
            alt="Paysage"
            loading="lazy"
          />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGallery" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <DocsPropsTable :rows="variantesRows" />
  </DocsSection>

  <DocsSection id="sec-lightbox" :title="t('section-lightbox')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t('lightbox-1') }}
      <code>data-bj-gallery-src</code>
      {{ t('lightbox-2') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <code>role="button"</code>
      {{ t('a11y-2') }}
      <code>tabindex="0"</code>
      {{ t('a11y-3') }}
      <code>role="dialog"</code>
      {{ t('a11y-4a') }}
      <kbd>{{ t('kbd-esc') }}</kbd>
      {{ t('a11y-4b') }}
      <code>alt</code>
      {{ t('a11y-5') }}
    </DocsA11yNote>
  </DocsSection>
</template>
