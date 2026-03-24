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
      title: 'Liens d’évitement',
      desc:
        'Accès direct au contenu principal pour le clavier et les lecteurs d’écran.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'exemple-hint': 'Appuyez sur <kbd>Tab</kbd> pour révéler le lien.',
      'variantes-p': 'Liste <code>bj-skiplinks__list</code> pour plusieurs cibles.',
      'a11y-note':
        'Placez les liens en tête de document ; la cible <code>id</code> doit exister.',
      'prop-bj-skiplinks': 'Conteneur.',
      'prop-bj-skiplinks-list': 'Liste optionnelle.',
      'prop-bj-skiplinks-link':
        'Lien hors écran jusqu’au focus.',
    },
    en: {
      title: 'Skip links',
      desc:
        'Direct access to main content for keyboard and screen reader users.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'exemple-hint': 'Press <kbd>Tab</kbd> to reveal the link.',
      'variantes-p':
        'Use <code>bj-skiplinks__list</code> for multiple targets.',
      'a11y-note':
        'Place links at the top of the document; the target <code>id</code> must exist.',
      'prop-bj-skiplinks': 'Container.',
      'prop-bj-skiplinks-list': 'Optional list.',
      'prop-bj-skiplinks-link': 'Off-screen until focused.',
    },
  },
})

const codeExemple = `<div class="bj-skiplinks">
  <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
</div>`

const propsRows = computed(() => [
  { name: 'bj-skiplinks', description: t('prop-bj-skiplinks') },
  { name: 'bj-skiplinks__list', description: t('prop-bj-skiplinks-list') },
  { name: 'bj-skiplinks__link', description: t('prop-bj-skiplinks-link') },
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
    <p
      class="bj-text-sm bj-text-mention"
      style="margin-bottom: var(--bj-spacing-3v)"
      v-html="t('exemple-hint')"
    />
    <DocsPreview>
      <div class="bj-skiplinks">
        <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('variantes-p')"
    />
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
