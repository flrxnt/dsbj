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
      title: 'Liens d\u2019évitement',
      desc:
        'Accès direct au contenu principal (et autres zones) pour le clavier et les lecteurs d\u2019écran.',
      'section-exemple': 'Un lien',
      'section-plusieurs': 'Plusieurs cibles',
      'section-plusieurs-p':
        'Le composant Vue enveloppe les liens dans <code>bj-skiplinks__list</code> ; même structure recommandée en HTML statique.',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'exemple-hint': 'Appuyez sur <kbd>Tab</kbd> pour révéler le lien.',
      'a11y-note':
        'Placez les liens en tête de document ; la cible <code>id</code> doit exister.',
      'prop-bj-skiplinks': 'Conteneur.',
      'prop-bj-skiplinks-list': 'Liste des liens d\u2019évitement.',
      'prop-bj-skiplinks-link': 'Lien hors écran jusqu\u2019au focus.',
    },
    en: {
      title: 'Skip links',
      desc:
        'Direct access to main content (and other landmarks) for keyboard and screen reader users.',
      'section-exemple': 'Single link',
      'section-plusieurs': 'Multiple targets',
      'section-plusieurs-p':
        'The Vue component wraps links in <code>bj-skiplinks__list</code>; use the same structure in static HTML.',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'exemple-hint': 'Press <kbd>Tab</kbd> to reveal the link.',
      'a11y-note':
        'Place links at the top of the document; the target <code>id</code> must exist.',
      'prop-bj-skiplinks': 'Container.',
      'prop-bj-skiplinks-list': 'Skip link list wrapper.',
      'prop-bj-skiplinks-link': 'Off-screen until focused.',
    },
  },
})

const codeUn = `<div class="bj-skiplinks">
  <div class="bj-skiplinks__list">
    <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
  </div>
</div>`

const codeMulti = `<div class="bj-skiplinks">
  <div class="bj-skiplinks__list">
    <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
    <a class="bj-skiplinks__link" href="#nav">Aller à la navigation</a>
    <a class="bj-skiplinks__link" href="#footer">Aller au pied de page</a>
  </div>
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
        <div class="bj-skiplinks__list">
          <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeUn" />
  </DocsSection>

  <DocsSection id="sec-plusieurs" :title="t('section-plusieurs')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-4v)"
      v-html="t('section-plusieurs-p')"
    />
    <DocsPreview>
      <div class="bj-skiplinks">
        <div class="bj-skiplinks__list">
          <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
          <a class="bj-skiplinks__link" href="#nav-principale"
            >Aller à la navigation</a
          >
          <a class="bj-skiplinks__link" href="#pied"
            >Aller au pied de page</a
          >
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMulti" />
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
