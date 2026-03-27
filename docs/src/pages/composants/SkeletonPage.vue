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
      desc: 'Placeholder animé : variantes <code>bj-skeleton--text</code> (défaut), <code>bj-skeleton--heading</code>, <code>bj-skeleton--circle</code>, <code>bj-skeleton--rect</code> ; tailles <code>bj-skeleton--sm</code>, médiane sans classe de taille, <code>bj-skeleton--lg</code>.',
      'section-exemple': 'Exemple de base',
      'section-variantes': 'Variantes de forme',
      'section-tailles': 'Tailles (texte)',
      'section-matrix': 'Forme × taille',
      'para-matrix':
        'Matrice complète : quatre formes × trois tailles (12 combinaisons). La taille md n’ajoute ni <code>--sm</code> ni <code>--lg</code>.',
      'section-groupe': 'Groupe (carte placeholder)',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note':
        'Ajoutez <code>aria-busy="true"</code> sur le conteneur en cours de chargement et <code>aria-hidden="true"</code> sur les éléments skeleton pour les masquer aux lecteurs d\'écran.',
      'prop-bj-skeleton': 'Bloc de base avec animation shimmer.',
      'prop-bj-skeleton-text': 'Ligne de texte placeholder (hauteur ~1em).',
      'prop-bj-skeleton-heading':
        'Titre placeholder (hauteur ~1.5em, largeur ~60 %).',
      'prop-bj-skeleton-circle': 'Cercle (avatar).',
      'prop-bj-skeleton-rect': 'Rectangle (image ou bloc).',
      'prop-bj-skeleton-sm': 'Taille réduite (cumulable avec toute variante).',
      'prop-bj-skeleton-lg': 'Taille agrandie.',
      'prop-bj-skeleton-md-name': 'Taille md (défaut)',
      'prop-bj-skeleton-md-note':
        'Pas de classe CSS : Vue <code>size="md"</code> n’ajoute ni <code>--sm</code> ni <code>--lg</code>.',
      'prop-bj-skeleton-group':
        'Conteneur empilant plusieurs skeletons avec espacement.',
    },
    en: {
      title: 'Skeleton',
      desc: 'Animated placeholder: <code>bj-skeleton--text</code> (default), <code>bj-skeleton--heading</code>, <code>bj-skeleton--circle</code>, <code>bj-skeleton--rect</code>; sizes <code>bj-skeleton--sm</code>, medium with no size class, <code>bj-skeleton--lg</code>.',
      'section-exemple': 'Basic example',
      'section-variantes': 'Shape variants',
      'section-tailles': 'Sizes (text variant)',
      'section-matrix': 'Shape × size',
      'para-matrix':
        'Full matrix: four shapes × three sizes (12 combinations). Medium adds neither <code>--sm</code> nor <code>--lg</code>.',
      'section-groupe': 'Group (card placeholder)',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note':
        'Add <code>aria-busy="true"</code> on the loading container and <code>aria-hidden="true"</code> on skeleton elements to hide them from screen readers.',
      'prop-bj-skeleton': 'Base block with shimmer animation.',
      'prop-bj-skeleton-text': 'Text line placeholder (height ~1em).',
      'prop-bj-skeleton-heading':
        'Heading placeholder (height ~1.5em, width ~60%).',
      'prop-bj-skeleton-circle': 'Circle (avatar).',
      'prop-bj-skeleton-rect': 'Rectangle (image or block).',
      'prop-bj-skeleton-sm': 'Smaller size (with any variant).',
      'prop-bj-skeleton-lg': 'Larger size.',
      'prop-bj-skeleton-md-name': 'Medium size (default)',
      'prop-bj-skeleton-md-note':
        'No CSS class: Vue <code>size="md"</code> adds neither <code>--sm</code> nor <code>--lg</code>.',
      'prop-bj-skeleton-group':
        'Container stacking multiple skeletons with spacing.',
    },
  },
})

const codeExemple = `<div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>`

const codeVariantes = `<div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--heading" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--circle" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>`

const codeTailles = `<!-- sm -->
<div class="bj-skeleton bj-skeleton--text bj-skeleton--sm" aria-hidden="true"></div>
<!-- md : pas de modificateur -->
<div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
<!-- lg -->
<div class="bj-skeleton bj-skeleton--text bj-skeleton--lg" aria-hidden="true"></div>`

const codeMatrix = `<!-- text × sm | md | lg -->
<div class="bj-skeleton bj-skeleton--text bj-skeleton--sm" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--text bj-skeleton--lg" aria-hidden="true"></div>
<!-- heading × sm | md | lg -->
<div class="bj-skeleton bj-skeleton--heading bj-skeleton--sm" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--heading" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--heading bj-skeleton--lg" aria-hidden="true"></div>
<!-- circle × sm | md | lg -->
<div class="bj-skeleton bj-skeleton--circle bj-skeleton--sm" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--circle" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--circle bj-skeleton--lg" aria-hidden="true"></div>
<!-- rect × sm | md | lg -->
<div class="bj-skeleton bj-skeleton--rect bj-skeleton--sm" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>
<div class="bj-skeleton bj-skeleton--rect bj-skeleton--lg" aria-hidden="true"></div>`

const codeGroupe = `<div class="bj-skeleton-group" aria-busy="true" style="max-width: 20rem">
  <div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>
  <div class="bj-skeleton bj-skeleton--heading" aria-hidden="true"></div>
  <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-skeleton', description: t('prop-bj-skeleton') },
  { name: 'bj-skeleton--text', description: t('prop-bj-skeleton-text') },
  { name: 'bj-skeleton--heading', description: t('prop-bj-skeleton-heading') },
  { name: 'bj-skeleton--circle', description: t('prop-bj-skeleton-circle') },
  { name: 'bj-skeleton--rect', description: t('prop-bj-skeleton-rect') },
  { name: 'bj-skeleton--sm', description: t('prop-bj-skeleton-sm') },
  { name: 'bj-skeleton--lg', description: t('prop-bj-skeleton-lg') },
  {
    name: t('prop-bj-skeleton-md-name'),
    description: t('prop-bj-skeleton-md-note'),
  },
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
    <span v-html="t('desc')" />
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
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-3v);
        max-width: 24rem;
      "
    >
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--heading" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--circle" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="tailles-skeleton" :title="t('section-tailles')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-3v);
        max-width: 24rem;
      "
    >
      <div
        class="bj-skeleton bj-skeleton--text bj-skeleton--sm"
        aria-hidden="true"
      ></div>
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
      <div
        class="bj-skeleton bj-skeleton--text bj-skeleton--lg"
        aria-hidden="true"
      ></div>
    </DocsPreview>
    <DocsCode :code="codeTailles" />
  </DocsSection>

  <DocsSection id="matrix-skeleton" :title="t('section-matrix')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-matrix')" />
    </p>
    <DocsPreview>
      <div
        style="
          display: grid;
          grid-template-columns: 5rem repeat(3, minmax(0, 1fr));
          gap: var(--bj-spacing-3v);
          max-width: 28rem;
          align-items: center;
        "
      >
        <span class="bj-text-sm bj-text-alt"></span>
        <span class="bj-text-xs bj-text-alt">sm</span>
        <span class="bj-text-xs bj-text-alt">md</span>
        <span class="bj-text-xs bj-text-alt">lg</span>

        <span class="bj-text-xs bj-text-alt">text</span>
        <div
          class="bj-skeleton bj-skeleton--text bj-skeleton--sm"
          aria-hidden="true"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--text"
          aria-hidden="true"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--text bj-skeleton--lg"
          aria-hidden="true"
        ></div>

        <span class="bj-text-xs bj-text-alt">heading</span>
        <div
          class="bj-skeleton bj-skeleton--heading bj-skeleton--sm"
          aria-hidden="true"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--heading"
          aria-hidden="true"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--heading bj-skeleton--lg"
          aria-hidden="true"
        ></div>

        <span class="bj-text-xs bj-text-alt">circle</span>
        <div
          class="bj-skeleton bj-skeleton--circle bj-skeleton--sm"
          aria-hidden="true"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--circle"
          aria-hidden="true"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--circle bj-skeleton--lg"
          aria-hidden="true"
        ></div>

        <span class="bj-text-xs bj-text-alt">rect</span>
        <div
          class="bj-skeleton bj-skeleton--rect bj-skeleton--sm"
          aria-hidden="true"
          style="width: 100%"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--rect"
          aria-hidden="true"
          style="width: 100%"
        ></div>
        <div
          class="bj-skeleton bj-skeleton--rect bj-skeleton--lg"
          aria-hidden="true"
          style="width: 100%"
        ></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMatrix" />
  </DocsSection>

  <DocsSection id="groupe-skeleton" :title="t('section-groupe')">
    <DocsPreview>
      <div
        class="bj-skeleton-group"
        aria-busy="true"
        style="max-width: 20rem"
      >
        <div class="bj-skeleton bj-skeleton--rect" aria-hidden="true"></div>
        <div
          class="bj-skeleton bj-skeleton--heading"
          aria-hidden="true"
        ></div>
        <div class="bj-skeleton bj-skeleton--text" aria-hidden="true"></div>
        <div
          class="bj-skeleton bj-skeleton--text"
          aria-hidden="true"
          style="width: 80%"
        ></div>
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
