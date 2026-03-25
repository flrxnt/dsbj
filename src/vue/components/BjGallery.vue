<script lang="ts">
export interface GalleryImage {
  src: string
  alt?: string
  caption?: string
  thumbnail?: string
}
export interface BjGalleryProps {
  images: GalleryImage[]
  cols?: 2 | 3 | 4
}
</script>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<BjGalleryProps>(), {
  cols: 3,
})

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const galleryClasses = computed(() => [
  'bj-gallery',
  props.cols !== 3 && `bj-gallery--cols-${props.cols}`,
])

const current = computed(() => props.images[currentIndex.value])

function openLightbox(index: number) {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.classList.add('bj-modal-open')
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.classList.remove('bj-modal-open')
}

function prev() {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : props.images.length - 1
}

function next() {
  currentIndex.value = currentIndex.value < props.images.length - 1 ? currentIndex.value + 1 : 0
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('bj-modal-open')
})
</script>

<template>
  <div :class="galleryClasses" v-bind="$attrs">
    <div
      v-for="(img, i) in images"
      :key="i"
      class="bj-gallery__item"
      role="button"
      tabindex="0"
      :aria-label="`Voir l'image ${i + 1}`"
      @click="openLightbox(i)"
      @keydown.enter="openLightbox(i)"
    >
      <img class="bj-gallery__img" :src="img.thumbnail || img.src" :alt="img.alt || ''" />
      <span v-if="img.caption" class="bj-gallery__caption">{{ img.caption }}</span>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="lightboxOpen"
      class="bj-lightbox"
      data-bj-expanded
      role="dialog"
      aria-label="Visionneuse d'images"
      style="display: flex"
      @click.self="closeLightbox"
    >
      <span class="bj-lightbox__counter">{{ currentIndex + 1 }} / {{ images.length }}</span>
      <button class="bj-lightbox__close" aria-label="Fermer" @click="closeLightbox">
        <i class="ri-close-line" aria-hidden="true" />
      </button>
      <button class="bj-lightbox__nav bj-lightbox__nav--prev" aria-label="Image précédente" @click="prev">
        <i class="ri-arrow-left-s-line" aria-hidden="true" />
      </button>
      <div class="bj-lightbox__content">
        <img class="bj-lightbox__img" :src="current.src" :alt="current.alt || ''" />
        <p v-if="current.caption" class="bj-lightbox__caption">{{ current.caption }}</p>
      </div>
      <button class="bj-lightbox__nav bj-lightbox__nav--next" aria-label="Image suivante" @click="next">
        <i class="ri-arrow-right-s-line" aria-hidden="true" />
      </button>
    </div>
  </Teleport>
</template>
