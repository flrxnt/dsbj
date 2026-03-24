<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeGallery = `<div class="bj-gallery" data-bj-gallery>
  <div class="bj-gallery__item">
    <img class="bj-gallery__img" src="…" alt="…" loading="lazy" />
    <span class="bj-gallery__caption">Légende</span>
  </div>
  …
</div>`

const variantesRows = [
  { name: 'bj-gallery', description: 'Grille 3 colonnes par défaut.' },
  { name: 'bj-gallery--cols-2', description: 'Grille 2 colonnes.' },
  { name: 'bj-gallery--cols-4', description: 'Grille 4 colonnes.' },
  { name: 'bj-gallery__item', description: 'Conteneur image cliquable.' },
  { name: 'bj-gallery__img', description: 'Image avec ratio 4:3.' },
  { name: 'bj-gallery__caption', description: 'Légende en superposition.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Galerie d'images
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    Grille d'images avec visionneuse plein écran (lightbox). Navigation par
    flèches clavier, focus trap et préchargement des images adjacentes.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
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

  <DocsSection id="sec-variantes" title="Variantes de grille">
    <DocsPropsTable :rows="variantesRows" />
  </DocsSection>

  <DocsSection id="sec-lightbox" title="Lightbox">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">
      La visionneuse est créée automatiquement par le script. Elle affiche
      l'image agrandie avec navigation, compteur et légende. Utilisez
      <code>data-bj-gallery-src</code> sur l'image pour fournir une URL haute
      résolution différente de la miniature.
    </p>
  </DocsSection>

  <DocsSection id="sec-accessibilite" title="Accessibilité">
    <DocsA11yNote>
      Chaque image a <code>role="button"</code> et <code>tabindex="0"</code>.
      La lightbox a <code>role="dialog"</code> avec focus trap. Navigation :
      flèches gauche/droite, Échap pour fermer. Les images doivent avoir un
      <code>alt</code> descriptif.
    </DocsA11yNote>
  </DocsSection>
</template>
