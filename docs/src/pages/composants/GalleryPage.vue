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
      'section-cols-2': 'Grille à 2 colonnes',
      'cols-2-intro': 'Classe',
      'section-cols-3': 'Grille à 3 colonnes (défaut)',
      'cols-3-intro':
        'Sans modificateur : la grille suit la mise en page standard à trois colonnes.',
      'section-cols-4': 'Grille à 4 colonnes',
      'cols-4-intro': 'Classe',
      'cols-4-note':
        'Sur petit écran, la feuille de style repasse automatiquement à deux colonnes.',
      'section-classes': 'Classes CSS (grille et lightbox)',
      'section-lightbox': 'Lightbox (marquage)',
      'section-a11y': 'Accessibilité',
      'th-class-attr': 'Classe',
      'th-description': 'Description',
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
      'prop-lb-root': 'Overlay plein écran ; affiché lorsque data-bj-expanded est présent.',
      'prop-lb-expanded': 'État ouvert de la visionneuse (posé par le script gallery).',
      'prop-lb-content': 'Colonne image + légende.',
      'prop-lb-img': 'Image agrandie.',
      'prop-lb-caption': 'Légende sous l’image.',
      'prop-lb-close': 'Fermeture.',
      'prop-lb-nav': 'Précédent / suivant (bj-lightbox__nav--prev / --next).',
      'prop-lb-counter': 'Compteur « courant / total ».',
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
      'section-cols-2': '2-column grid',
      'cols-2-intro': 'Use',
      'section-cols-3': '3-column grid (default)',
      'cols-3-intro':
        'No modifier: the gallery uses the standard three-column layout.',
      'section-cols-4': '4-column grid',
      'cols-4-intro': 'Use',
      'cols-4-note':
        'On small screens the stylesheet collapses to two columns.',
      'section-classes': 'CSS classes (grid and lightbox)',
      'section-lightbox': 'Lightbox (markup)',
      'section-a11y': 'Accessibility',
      'th-class-attr': 'Class',
      'th-description': 'Description',
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
      'prop-lb-root': 'Full-screen overlay; shown when data-bj-expanded is present.',
      'prop-lb-expanded': 'Open state for the viewer (set by the gallery script).',
      'prop-lb-content': 'Image and caption column.',
      'prop-lb-img': 'Enlarged image.',
      'prop-lb-caption': 'Caption under the image.',
      'prop-lb-close': 'Close control.',
      'prop-lb-nav': 'Previous / next (bj-lightbox__nav--prev / --next).',
      'prop-lb-counter': '“Current / total” counter.',
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

const codeGalleryCols2 = `<div class="bj-gallery bj-gallery--cols-2" data-bj-gallery>…</div>`

const codeGalleryCols3 = `<div class="bj-gallery" data-bj-gallery>…</div>`

const codeGalleryCols4 = `<div class="bj-gallery bj-gallery--cols-4" data-bj-gallery>…</div>`

const codeLightbox = `<!-- Injectée par le script à l’ouverture ; équivalent structurel -->
<div class="bj-lightbox" data-bj-expanded role="dialog" aria-label="Visionneuse">
  <span class="bj-lightbox__counter">1 / 4</span>
  <button type="button" class="bj-lightbox__close" aria-label="Fermer">…</button>
  <button type="button" class="bj-lightbox__nav bj-lightbox__nav--prev" aria-label="Précédent">…</button>
  <div class="bj-lightbox__content">
    <img class="bj-lightbox__img" src="…" alt="…" />
    <p class="bj-lightbox__caption">Légende</p>
  </div>
  <button type="button" class="bj-lightbox__nav bj-lightbox__nav--next" aria-label="Suivant">…</button>
</div>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const variantesRows = computed(() => [
  { name: 'bj-gallery', description: t('prop-gallery') },
  { name: 'bj-gallery--cols-2', description: t('prop-cols2') },
  { name: 'bj-gallery--cols-4', description: t('prop-cols4') },
  { name: 'bj-gallery__item', description: t('prop-item') },
  { name: 'bj-gallery__img', description: t('prop-img') },
  { name: 'bj-gallery__caption', description: t('prop-caption') },
  { name: 'bj-lightbox', description: t('prop-lb-root') },
  { name: 'data-bj-expanded', description: t('prop-lb-expanded') },
  { name: 'bj-lightbox__content', description: t('prop-lb-content') },
  { name: 'bj-lightbox__img', description: t('prop-lb-img') },
  { name: 'bj-lightbox__caption', description: t('prop-lb-caption') },
  { name: 'bj-lightbox__close', description: t('prop-lb-close') },
  { name: 'bj-lightbox__nav', description: t('prop-lb-nav') },
  { name: 'bj-lightbox__counter', description: t('prop-lb-counter') },
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
          <span class="bj-gallery__caption">Cours d’eau</span>
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

  <DocsSection id="sec-cols-2" :title="t('section-cols-2')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t('cols-2-intro') }}
      <code>bj-gallery--cols-2</code>.
    </p>
    <DocsPreview>
      <div class="bj-gallery bj-gallery--cols-2" data-bj-gallery>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/40/500/375"
            alt="Vue urbaine"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/41/500/375"
            alt="Architecture"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/42/500/375"
            alt="Place publique"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/43/500/375"
            alt="Parc"
            loading="lazy"
          />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGalleryCols2" />
  </DocsSection>

  <DocsSection id="sec-cols-3" :title="t('section-cols-3')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t('cols-3-intro') }}
    </p>
    <DocsPreview>
      <div class="bj-gallery" data-bj-gallery>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/60/500/375"
            alt="Paysage A"
            loading="lazy"
          />
          <span class="bj-gallery__caption">Trois colonnes</span>
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/61/500/375"
            alt="Paysage B"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/62/500/375"
            alt="Paysage C"
            loading="lazy"
          />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGalleryCols3" />
  </DocsSection>

  <DocsSection id="sec-cols-4" :title="t('section-cols-4')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t('cols-4-intro') }}
      <code>bj-gallery--cols-4</code>.
      {{ t('cols-4-note') }}
    </p>
    <DocsPreview>
      <div class="bj-gallery bj-gallery--cols-4" data-bj-gallery>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/50/400/300"
            alt="Motif 1"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/51/400/300"
            alt="Motif 2"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/52/400/300"
            alt="Motif 3"
            loading="lazy"
          />
        </div>
        <div class="bj-gallery__item">
          <img
            class="bj-gallery__img"
            src="https://picsum.photos/id/53/400/300"
            alt="Motif 4"
            loading="lazy"
          />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGalleryCols4" />
  </DocsSection>

  <DocsSection id="sec-classes" :title="t('section-classes')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="variantesRows" />
  </DocsSection>

  <DocsSection id="sec-lightbox" :title="t('section-lightbox')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t('lightbox-1') }}
      <code>data-bj-gallery-src</code>
      {{ t('lightbox-2') }}
    </p>
    <DocsCode :code="codeLightbox" />
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
