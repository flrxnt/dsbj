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
      title: 'Recherche',
      desc: 'Champ de recherche jumelé à un bouton d’action pour les moteurs internes.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-search--lg</code> pour un gabarit plus haut.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-search': 'Conteneur.',
      'prop-search-input': 'Champ.',
      'prop-search-btn': 'Bouton.',
      'prop-search-lg': 'Grande taille.',
      'prop-search-md':
        'Conteneur <code>form</code> avec <code>role="search"</code> ; taille médiane par défaut (aucun modificateur de taille).',
      'a11y-note':
        '<code>role="search"</code> sur le <code>form</code>. Libellé accessible au champ ; <code>bj-sr-only</code> pour le texte du bouton icône.',
    },
    en: {
      title: 'Search',
      desc: 'Search field paired with an action button for internal engines.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-search--lg</code> for a taller layout. The Vue default size is <code>md</code>: no modifier class (only <code>bj-search</code>).',
      'section-button-label':
        'Button label',
      'section-button-label-body':
        'The submit button text is free-form (Vue <code>buttonLabel</code>). You can show only an icon by hiding the label with <code>bj-sr-only</code>.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-search': 'Container.',
      'prop-search-input': 'Field.',
      'prop-search-btn': 'Button.',
      'prop-search-lg': 'Large size.',
      'prop-search-md':
        '<code>form</code> wrapper with <code>role="search"</code>; medium size is the default (no size modifier).',
      'a11y-note':
        '<code>role="search"</code> on the <code>form</code>. Accessible label on the field; <code>bj-sr-only</code> for icon-only button text.',
    },
  },
})

const codeExample = `<form class="bj-search" role="search" action="/recherche" method="get">
  <input class="bj-search__input" type="search" name="q" placeholder="Rechercher…" />
  <button type="submit" class="bj-search__btn">
    <span class="bj-sr-only">Lancer la recherche</span>
    <i class="ri-search-line" aria-hidden="true"></i>
  </button>
</form>

<form class="bj-search bj-search--lg" role="search">
  <input class="bj-search__input" type="search" placeholder="Recherche large" />
  <button type="submit" class="bj-search__btn">Rechercher</button>
</form>`

const propsRows = computed(() => [
  { name: 'bj-search', description: t('prop-search-md') },
  { name: 'bj-search__input', description: t('prop-search-input') },
  { name: 'bj-search__btn', description: t('prop-search-btn') },
  { name: 'bj-search--lg', description: t('prop-search-lg') },
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

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <form class="bj-search" role="search" action="#" method="get">
        <input
          class="bj-search__input"
          type="search"
          name="q"
          placeholder="Rechercher une démarche…"
          aria-label="Rechercher une démarche"
        />
        <button type="submit" class="bj-search__btn">
          <span class="bj-sr-only">Lancer la recherche</span>
          <i class="ri-search-line" aria-hidden="true"></i>
        </button>
      </form>
      <form
        class="bj-search bj-search--lg"
        role="search"
        action="#"
        method="get"
        style="margin-top: var(--bj-spacing-4v)"
      >
        <input
          class="bj-search__input"
          type="search"
          name="q2"
          placeholder="Recherche large"
          aria-label="Recherche large"
        />
        <button type="submit" class="bj-search__btn">
          Lancer la recherche
        </button>
      </form>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-bouton" :title="t('section-button-label')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-button-label-body')"
    />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-variants-body')"
    />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
