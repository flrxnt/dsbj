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
      title: 'Skeleton',
      desc: 'Placeholder animé qui indique le chargement d\'un contenu. L\'animation shimmer guide le regard et rassure l\'utilisateur.',
      'section-exemple': 'Exemple de base',
      'section-variantes': 'Variantes de forme',
      'section-tailles': 'Tailles',
      'section-groupe': 'Groupe (carte placeholder)',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Ajoutez <code>aria-busy="true"</code> sur le conteneur en cours de chargement et <code>aria-hidden="true"</code> sur les éléments skeleton eux-mêmes pour les masquer aux lecteurs d\'écran.',
      'prop-bj-skeleton': 'Bloc de base avec animation shimmer.',
      'prop-bj-skeleton-text': 'Ligne de texte placeholder (hauteur ~1em).',
      'prop-bj-skeleton-heading': 'Titre placeholder (hauteur ~1.5em, largeur 60 %).',
      'prop-bj-skeleton-circle': 'Cercle (avatar placeholder).',
      'prop-bj-skeleton-rect': 'Rectangle générique (image placeholder).',
      'prop-bj-skeleton-sm': 'Taille réduite.',
      'prop-bj-skeleton-lg': 'Taille agrandie.',
      'prop-bj-skeleton-group': 'Conteneur empilant plusieurs skeletons avec espacement.',
    },
    en: {
      title: 'Skeleton',
      desc: 'Animated placeholder indicating content is loading. The shimmer animation guides the eye and reassures the user.',
      'section-exemple': 'Basic example',
      'section-variantes': 'Shape variants',
      'section-tailles': 'Sizes',
      'section-groupe': 'Group (card placeholder)',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'Add <code>aria-busy="true"</code> on the loading container and <code>aria-hidden="true"</code> on the skeleton elements themselves to hide them from screen readers.',
      'prop-bj-skeleton': 'Base block with shimmer animation.',
      'prop-bj-skeleton-text': 'Text line placeholder (height ~1em).',
      'prop-bj-skeleton-heading': 'Heading placeholder (height ~1.5em, width 60%).',
      'prop-bj-skeleton-circle': 'Circle (avatar placeholder).',
      'prop-bj-skeleton-rect': 'Generic rectangle (image placeholder).',
      'prop-bj-skeleton-sm': 'Smaller size.',
      'prop-bj-skeleton-lg': 'Larger size.',
      'prop-bj-skeleton-group': 'Container stacking multiple skeletons with spacing.',
    },
  },
})

const codeExemple = `<div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>`

const codeVariantes = `<div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--heading" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--circle" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>`

const codeTailles = `<!-- Petit -->
<div class="bj-skeleton bj-skeleton--text bj-skeleton--sm"></div>
<!-- Normal -->
<div class="bj-skeleton bj-skeleton--text"></div>
<!-- Grand -->
<div class="bj-skeleton bj-skeleton--text bj-skeleton--lg"></div>`

const codeGroupe = `<div class="bj-skeleton-group" aria-busy="true" aria-hidden="true" style="max-width: 20rem">
  <div class="bj-skeleton bj-skeleton--rect"></div>
  <div class="bj-skeleton bj-skeleton--heading"></div>
  <div class="bj-skeleton bj-skeleton--text"></div>
  <div class="bj-skeleton bj-skeleton--text" style="width: 80%"></div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-skeleton', description: t('prop-bj-skeleton') },
  { name: 'bj-skeleton--text', description: t('prop-bj-skeleton-text') },
  { name: 'bj-skeleton--heading', description: t('prop-bj-skeleton-heading') },
  { name: 'bj-skeleton--circle', description: t('prop-bj-skeleton-circle') },
  { name: 'bj-skeleton--rect', description: t('prop-bj-skeleton-rect') },
  { name: 'bj-skeleton--sm', description: t('prop-bj-skeleton-sm') },
  { name: 'bj-skeleton--lg', description: t('prop-bj-skeleton-lg') },
  { name: 'bj-skeleton-group', description: t('prop-bj-skeleton-group') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-skeleton" :title="t('section-exemple')">
    <DocsPreview>
      <div style="max-width: 24rem">
        <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-skeleton" :title="t('section-variantes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 24rem">
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--heading" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--circle" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="tailles-skeleton" :title="t('section-tailles')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 24rem">
      <div class="bj-skeleton bj-skeleton--text bj-skeleton--sm" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--text bj-skeleton--lg" aria-hidden="true"></div>
    </DocsPreview>
    <DocsCode :code="codeTailles" />
  </DocsSection>

  <DocsSection id="groupe-skeleton" :title="t('section-groupe')">
    <DocsPreview>
      <div class="bj-skeleton-group" aria-busy="true" aria-hidden="true" style="max-width: 20rem">
        <div class="bj-skeleton bj-skeleton--rect"></div>
        <div class="bj-skeleton bj-skeleton--heading"></div>
        <div class="bj-skeleton bj-skeleton--text"></div>
        <div class="bj-skeleton bj-skeleton--text" style="width: 80%"></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroupe" />
  </DocsSection>

  <DocsSection id="classes-skeleton" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-skeleton" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
