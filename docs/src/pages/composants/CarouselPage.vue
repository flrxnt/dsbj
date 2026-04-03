<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Carrousel',
      desc: 'Composant de défilement de contenu (images, cartes, diapositives). Supporte la navigation au clavier, le balayage tactile et la lecture automatique.',
      'section-base': 'Carrousel de base',
      'section-auto': 'Lecture automatique',
      'section-classes-css': 'Classes CSS',
      'section-attributs': 'Attributs data',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le carrousel possède <code>role="region"</code> et <code>aria-roledescription="carousel"</code>. Chaque diapositive possède <code>role="group"</code> avec un <code>aria-label</code> indicatif. La navigation est possible avec les touches <code>Flèche gauche</code> et <code>Flèche droite</code>. Les boutons de navigation et indicateurs sont accessibles au focus.',
      'cls-base': 'Conteneur principal du carrousel',
      'cls-track': 'Piste de défilement des diapositives',
      'cls-slide': 'Diapositive individuelle',
      'cls-nav': 'Bouton de navigation (précédent / suivant)',
      'cls-nav-prev': 'Modificateur : bouton précédent',
      'cls-nav-next': 'Modificateur : bouton suivant',
      'cls-indicators': 'Conteneur des indicateurs de position',
      'cls-dot': 'Point indicateur individuel',
      'cls-dot-active': 'Point indicateur actif',
      'cls-caption': 'Légende de la diapositive',
      'cls-auto': 'Modificateur : carrousel en lecture automatique',
      'attr-carousel': 'Active le comportement carrousel',
      'attr-prev': 'Bouton diapositive précédente',
      'attr-next': 'Bouton diapositive suivante',
      'attr-auto': 'Active la lecture automatique',
      'attr-interval': "Intervalle de lecture automatique en ms (défaut : 5000)",
    },
    en: {
      title: 'Carousel',
      desc: 'Content slider component (images, cards, slides). Supports keyboard navigation, touch swipe and autoplay.',
      'section-base': 'Basic carousel',
      'section-auto': 'Autoplay',
      'section-classes-css': 'CSS Classes',
      'section-attributs': 'Data attributes',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The carousel has <code>role="region"</code> and <code>aria-roledescription="carousel"</code>. Each slide has <code>role="group"</code> with an <code>aria-label</code>. Navigation is possible with <code>Arrow Left</code> and <code>Arrow Right</code> keys. Navigation buttons and indicators are focusable.',
      'cls-base': 'Main carousel container',
      'cls-track': 'Slide track',
      'cls-slide': 'Individual slide',
      'cls-nav': 'Navigation button (previous / next)',
      'cls-nav-prev': 'Modifier: previous button',
      'cls-nav-next': 'Modifier: next button',
      'cls-indicators': 'Position indicators container',
      'cls-dot': 'Individual indicator dot',
      'cls-dot-active': 'Active indicator dot',
      'cls-caption': 'Slide caption',
      'cls-auto': 'Modifier: autoplay carousel',
      'attr-carousel': 'Activates carousel behavior',
      'attr-prev': 'Previous slide button',
      'attr-next': 'Next slide button',
      'attr-auto': 'Enables autoplay',
      'attr-interval': 'Autoplay interval in ms (default: 5000)',
    },
  },
})

const codeBase = `<div class="bj-carousel" data-bj-carousel role="region" aria-roledescription="carousel" aria-label="Carrousel" tabindex="0">
  <div class="bj-carousel__track">
    <div class="bj-carousel__slide" role="group" aria-roledescription="slide" aria-label="Diapositive 1 sur 3">
      <img src="/img/placeholder-1.svg" alt="Image 1" />
      <div class="bj-carousel__caption">Première diapositive</div>
    </div>
    <div class="bj-carousel__slide" role="group" aria-roledescription="slide" aria-label="Diapositive 2 sur 3" aria-hidden="true">
      <img src="/img/placeholder-2.svg" alt="Image 2" />
      <div class="bj-carousel__caption">Deuxième diapositive</div>
    </div>
    <div class="bj-carousel__slide" role="group" aria-roledescription="slide" aria-label="Diapositive 3 sur 3" aria-hidden="true">
      <img src="/img/placeholder-3.svg" alt="Image 3" />
      <div class="bj-carousel__caption">Troisième diapositive</div>
    </div>
  </div>
  <button class="bj-carousel__nav bj-carousel__nav--prev" data-bj-carousel-prev aria-label="Diapositive précédente">
    <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
  </button>
  <button class="bj-carousel__nav bj-carousel__nav--next" data-bj-carousel-next aria-label="Diapositive suivante">
    <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
  </button>
  <div class="bj-carousel__indicators">
    <button class="bj-carousel__dot bj-carousel__dot--active" aria-label="Aller à la diapositive 1"></button>
    <button class="bj-carousel__dot" aria-label="Aller à la diapositive 2"></button>
    <button class="bj-carousel__dot" aria-label="Aller à la diapositive 3"></button>
  </div>
</div>`

const codeAuto = `<div class="bj-carousel bj-carousel--auto" data-bj-carousel data-bj-carousel-auto data-bj-carousel-interval="3000">
  <!-- Même structure, lecture automatique toutes les 3 secondes -->
</div>`

const cssRows = computed(() => [
  { name: '.bj-carousel', description: t('cls-base') },
  { name: '.bj-carousel__track', description: t('cls-track') },
  { name: '.bj-carousel__slide', description: t('cls-slide') },
  { name: '.bj-carousel__nav', description: t('cls-nav') },
  { name: '.bj-carousel__nav--prev', description: t('cls-nav-prev') },
  { name: '.bj-carousel__nav--next', description: t('cls-nav-next') },
  { name: '.bj-carousel__indicators', description: t('cls-indicators') },
  { name: '.bj-carousel__dot', description: t('cls-dot') },
  { name: '.bj-carousel__dot--active', description: t('cls-dot-active') },
  { name: '.bj-carousel__caption', description: t('cls-caption') },
  { name: '.bj-carousel--auto', description: t('cls-auto') },
])

const attrRows = computed(() => [
  { name: 'data-bj-carousel', description: t('attr-carousel') },
  { name: 'data-bj-carousel-prev', description: t('attr-prev') },
  { name: 'data-bj-carousel-next', description: t('attr-next') },
  { name: 'data-bj-carousel-auto', description: t('attr-auto') },
  { name: 'data-bj-carousel-interval', description: t('attr-interval') },
])

const demoSlides = [
  { color: 'var(--bj-action-high)', label: 'Diapositive 1' },
  { color: 'var(--bj-color-vert-emeraude)', label: 'Diapositive 2' },
  { color: 'var(--bj-color-jaune-tournesol)', label: 'Diapositive 3' },
]
</script>

<template>
  <div class="docs-content">
    <h1>{{ t('title') }}</h1>
    <p class="docs-intro">{{ t('desc') }}</p>

    <DocsSection :title="t('section-base')">
      <DocsPreview>
        <div class="bj-carousel" data-bj-carousel role="region" aria-roledescription="carousel" aria-label="Carrousel" tabindex="0" style="max-width: 480px; margin: 0 auto;">
          <div class="bj-carousel__track">
            <div
              v-for="(slide, i) in demoSlides"
              :key="i"
              class="bj-carousel__slide"
              role="group"
              aria-roledescription="slide"
              :aria-label="`Diapositive ${i + 1} sur ${demoSlides.length}`"
              :aria-hidden="i !== 0 ? 'true' : undefined"
            >
              <div :style="{ background: slide.color, height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 'var(--bj-fs-xl)', fontWeight: 'var(--bj-fw-bold)', borderRadius: 'var(--bj-radius-sm)' }">
                {{ slide.label }}
              </div>
            </div>
          </div>
          <button class="bj-carousel__nav bj-carousel__nav--prev" data-bj-carousel-prev aria-label="Diapositive précédente">
            <i class="ri-arrow-left-s-line" aria-hidden="true" />
          </button>
          <button class="bj-carousel__nav bj-carousel__nav--next" data-bj-carousel-next aria-label="Diapositive suivante">
            <i class="ri-arrow-right-s-line" aria-hidden="true" />
          </button>
          <div class="bj-carousel__indicators">
            <button
              v-for="(_, i) in demoSlides"
              :key="i"
              :class="['bj-carousel__dot', i === 0 && 'bj-carousel__dot--active']"
              :aria-label="`Aller à la diapositive ${i + 1}`"
            />
          </div>
        </div>
      </DocsPreview>
      <DocsCode :code="codeBase" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-auto')">
      <DocsCode :code="codeAuto" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-classes-css')">
      <DocsPropsTable :rows="cssRows" />
    </DocsSection>

    <DocsSection :title="t('section-attributs')">
      <DocsPropsTable :rows="attrRows" />
    </DocsSection>

    <DocsSection id="a11y-carousel" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
