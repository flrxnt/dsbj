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
      title: 'Fil d\u2019Ariane',
      desc:
        'Repères hiérarchiques et liens de retour vers les niveaux supérieurs ; le dernier segment est la page courante (sans <code>bj-breadcrumb__link</code>).',
      'section-deux': 'Deux niveaux',
      'section-trois': 'Trois niveaux et plus',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-desc':
        'Dernier item sans lien : texte ou <code>span</code> avec <code>aria-current="page"</code> (comme <code>BjBreadcrumb</code>).',
      'prop-bj-breadcrumb': 'Conteneur <code>nav</code>.',
      'prop-bj-breadcrumb__list': 'Liste ordonnée <code>ol</code>.',
      'prop-bj-breadcrumb__item': 'Élément <code>li</code>.',
      'prop-bj-breadcrumb__link': 'Lien vers un niveau parent.',
      'a11y-note':
        'Préférez <code>ol</code> pour l\u2019ordre des niveaux ; <code>aria-label</code> sur le <code>nav</code> (ex. \u00ab Fil d\u2019Ariane \u00bb).',
    },
    en: {
      title: 'Breadcrumb',
      desc:
        'Hierarchical cues and parent links; the last segment is the current page (no <code>bj-breadcrumb__link</code>).',
      'section-deux': 'Two levels',
      'section-trois': 'Three or more levels',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-desc':
        'Last item is not a link: text or <code>span</code> with <code>aria-current="page"</code> (same as <code>BjBreadcrumb</code>).',
      'prop-bj-breadcrumb': '<code>nav</code> container.',
      'prop-bj-breadcrumb__list': 'Ordered list <code>ol</code>.',
      'prop-bj-breadcrumb__item': '<code>li</code> item.',
      'prop-bj-breadcrumb__link': 'Link to a parent level.',
      'a11y-note':
        'Prefer <code>ol</code> for level order; <code>aria-label</code> on the <code>nav</code>.',
    },
  },
})

const codeDeux = `<nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
  <ol class="bj-breadcrumb__list">
    <li class="bj-breadcrumb__item">
      <a class="bj-breadcrumb__link" href="/">Accueil</a>
    </li>
    <li class="bj-breadcrumb__item" aria-current="page">Démarches</li>
  </ol>
</nav>`

const codeTrois = `<nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
  <ol class="bj-breadcrumb__list">
    <li class="bj-breadcrumb__item">
      <a class="bj-breadcrumb__link" href="/">Accueil</a>
    </li>
    <li class="bj-breadcrumb__item">
      <a class="bj-breadcrumb__link" href="/demarches">Démarches</a>
    </li>
    <li class="bj-breadcrumb__item" aria-current="page">Demande</li>
  </ol>
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

  <DocsSection id="sec-deux" :title="t('section-deux')">
    <DocsPreview>
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Accueil</a>
          </li>
          <li class="bj-breadcrumb__item" aria-current="page">
            Démarches
          </li>
        </ol>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeDeux" />
  </DocsSection>

  <DocsSection id="sec-trois" :title="t('section-trois')">
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
    <DocsCode :code="codeTrois" />
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
