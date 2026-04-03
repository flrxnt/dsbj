<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import BjCarousel from '@dsbj/vue/components/BjCarousel.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjCarousel — React',
      desc: 'Composant React pour afficher un carrousel de contenu avec navigation, indicateurs et lecture automatique.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le carrousel possède <code>role="region"</code> et <code>aria-roledescription="carousel"</code>. Chaque diapositive est un <code>role="group"</code> avec <code>aria-label</code>. Navigation au clavier avec <code>Flèche gauche</code> et <code>Flèche droite</code>.',
      'prop-slides': "Tableau d'objets {'{'} src, alt?, caption? {'}'} décrivant les diapositives.",
      'prop-autoplay': 'Active la lecture automatique (défaut : false).',
      'prop-interval': 'Intervalle en ms entre les diapositives (défaut : 5000).',
      'prop-showIndicators': 'Affiche les indicateurs de position (défaut : true).',
      'prop-showNavigation': 'Affiche les boutons précédent/suivant (défaut : true).',
      'prop-className': 'Classe CSS additionnelle.',
      'prop-onChange': "Callback déclenché au changement de diapositive. Paramètre : {'{'} index, total {'}'}.",
      'prop-renderSlide': 'Fonction de rendu personnalisé : (slide, index) => ReactNode.',
    },
    en: {
      title: 'BjCarousel — React',
      desc: 'React component to display a content carousel with navigation, indicators and autoplay.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The carousel has <code>role="region"</code> and <code>aria-roledescription="carousel"</code>. Each slide is a <code>role="group"</code> with <code>aria-label</code>. Keyboard navigation with <code>Arrow Left</code> and <code>Arrow Right</code>.',
      'prop-slides': "Array of {'{'} src, alt?, caption? {'}'} objects describing slides.",
      'prop-autoplay': 'Enables autoplay (default: false).',
      'prop-interval': 'Interval in ms between slides (default: 5000).',
      'prop-showIndicators': 'Shows position indicators (default: true).',
      'prop-showNavigation': 'Shows previous/next buttons (default: true).',
      'prop-className': 'Additional CSS class.',
      'prop-onChange': "Callback triggered on slide change. Parameter: {'{'} index, total {'}'}.",
      'prop-renderSlide': 'Custom render function: (slide, index) => ReactNode.',
    },
  },
})

const slides = ref([
  { src: '', alt: 'Slide 1', caption: 'Première diapositive' },
  { src: '', alt: 'Slide 2', caption: 'Deuxième diapositive' },
  { src: '', alt: 'Slide 3', caption: 'Troisième diapositive' },
])

const codeUsage = `import { BjCarousel } from '@flrxnt/dsbj/react'

const slides = [
  { src: '/img/slide-1.jpg', alt: 'Photo 1', caption: 'Première diapositive' },
  { src: '/img/slide-2.jpg', alt: 'Photo 2', caption: 'Deuxième diapositive' },
  { src: '/img/slide-3.jpg', alt: 'Photo 3', caption: 'Troisième diapositive' },
]

function App() {
  return <BjCarousel slides={slides} autoplay interval={3000} />
}`

const propsRows = computed(() => [
  { name: 'slides', description: t('prop-slides') },
  { name: 'autoplay', description: t('prop-autoplay') },
  { name: 'interval', description: t('prop-interval') },
  { name: 'showIndicators', description: t('prop-showIndicators') },
  { name: 'showNavigation', description: t('prop-showNavigation') },
  { name: 'className', description: t('prop-className') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'renderSlide', description: t('prop-renderSlide') },
])

const demoColors = ['var(--bj-action-high)', 'var(--bj-color-vert-emeraude)', 'var(--bj-color-jaune-tournesol)']
</script>

<template>
  <div class="docs-content">
    <h1>{{ t('title') }}</h1>
    <p class="docs-intro">{{ t('desc') }}</p>

    <DocsSection :title="t('section-usage')">
      <DocsCode :code="codeUsage" language="tsx" />
    </DocsSection>

    <DocsSection :title="t('section-preview')">
      <DocsPreview>
        <BjCarousel :slides="slides" style="max-width: 480px; margin: 0 auto;">
          <template #slide="{ slide, index }">
            <div :style="{ background: demoColors[index], height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 'var(--bj-fs-xl)', fontWeight: 'var(--bj-fw-bold)', borderRadius: 'var(--bj-radius-sm)' }">
              {{ slide.caption }}
            </div>
          </template>
        </BjCarousel>
      </DocsPreview>
    </DocsSection>

    <DocsSection :title="t('section-props')">
      <DocsPropsTable :rows="propsRows" />
    </DocsSection>

    <DocsSection id="a11y-carousel" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
