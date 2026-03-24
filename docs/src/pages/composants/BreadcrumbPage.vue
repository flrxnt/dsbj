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
      title: 'Fil d’Ariane',
      desc:
        'Repères hiérarchiques et liens de retour vers les niveaux supérieurs.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-desc': 'Dernier item sans lien (page courante).',
      'prop-bj-breadcrumb': 'Conteneur.',
      'prop-bj-breadcrumb__list': 'Liste.',
      'prop-bj-breadcrumb__item': 'Étape.',
      'prop-bj-breadcrumb__link': 'Lien.',
      'a11y-note':
        'Préférez <code>ol</code> pour l’ordre des niveaux ; <code>aria-label</code> sur le <code>nav</code>.',
    },
    en: {
      title: 'Breadcrumb',
      desc:
        'Hierarchical cues and links back to parent levels.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-desc': 'Last item without a link (current page).',
      'prop-bj-breadcrumb': 'Container.',
      'prop-bj-breadcrumb__list': 'List.',
      'prop-bj-breadcrumb__item': 'Step.',
      'prop-bj-breadcrumb__link': 'Link.',
      'a11y-note':
        'Prefer <code>ol</code> for level order; <code>aria-label</code> on the <code>nav</code>.',
    },
  },
})

const codeExemple = `<nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
  <ol class="bj-breadcrumb__list">…</ol>
</nav>`

const propsRows = computed(() => [
  { name: 'bj-breadcrumb', description: t('prop-bj-breadcrumb') },
  { name: 'bj-breadcrumb__list', description: t('prop-bj-breadcrumb__list') },
  { name: 'bj-breadcrumb__item', description: t('prop-bj-breadcrumb__item') },
  { name: 'bj-breadcrumb__link', description: t('prop-bj-breadcrumb__link') },
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

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
    <DocsPreview>
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Accueil</a>
          </li>
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Démarches</a>
          </li>
          <li class="bj-breadcrumb__item" aria-current="page">
            Demande
          </li>
        </ol>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('variantes-desc') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
