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
      title: 'Mise en exergue',
      desc: 'Paragraphe ou extrait mis en valeur par une bordure gauche et une taille de texte plus grande, sans changer le ton sémantique d’une alerte.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Préférez un paragraphe <code>&lt;p&gt;</code> à l’intérieur du bloc pour une structure lisible. Ne confondez pas mise en exergue et message d’état : n’utilisez pas <code>role="alert"</code> ici. Le contraste du texte sur le fond de page doit rester conforme WCAG.',
      'prop-bj-highlight':
        'Bordure gauche grise foncée, texte en taille intermédiaire élargie.',
      'prop-bj-highlight-sm': 'Padding et corps de texte réduits.',
      'prop-bj-highlight-lg':
        'Corps de texte très large (affichage).',
    },
    en: {
      title: 'Highlight',
      desc: 'Paragraph or excerpt emphasised with a left border and larger type, without taking on alert semantics.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Prefer a <code>&lt;p&gt;</code> inside the block for clear structure. Do not confuse a highlight with a status message: do not use <code>role="alert"</code> here. Text contrast against the page background must meet WCAG.',
      'prop-bj-highlight':
        'Dark grey left border, body text at an enlarged intermediate size.',
      'prop-bj-highlight-sm': 'Reduced padding and body text.',
      'prop-bj-highlight-lg': 'Very large body text (display).',
    },
  },
})

const codeExemple = `<div class="bj-highlight">
  <p>…</p>
</div>`

const codeVariantes = `<div class="bj-highlight bj-highlight--sm"><p>…</p></div>
<div class="bj-highlight bj-highlight--lg"><p>…</p></div>`

const propsRows = computed(() => [
  {
    name: 'bj-highlight',
    description: t('prop-bj-highlight'),
  },
  {
    name: 'bj-highlight--sm',
    description: t('prop-bj-highlight-sm'),
  },
  {
    name: 'bj-highlight--lg',
    description: t('prop-bj-highlight-lg'),
  },
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

  <DocsSection id="exemple-highlight" :title="t('section-example')">
    <DocsPreview>
      <div class="bj-highlight">
        <p>
          Les usagers peuvent suivre l’état de leur dossier depuis
          l’espace personnel sécurisé.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-highlight" :title="t('section-variants')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div class="bj-highlight bj-highlight--sm">
        <p>
          Variante compacte pour notes ou encarts dans une colonne
          latérale.
        </p>
      </div>
      <div class="bj-highlight bj-highlight--lg">
        <p>Variante large pour un extrait phare en tête d’article.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-highlight" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-highlight" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
