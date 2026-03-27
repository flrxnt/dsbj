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
      desc: 'Paragraphe ou extrait mis en valeur par une bordure gauche et une taille de texte plus grande : <code>bj-highlight</code> (taille <code>md</code> par défaut, sans classe supplémentaire), <code>bj-highlight--sm</code>, <code>bj-highlight--lg</code>.',
      'section-example': 'Exemple (taille moyenne par défaut)',
      'section-variants': 'Tailles sm et lg',
      'section-matrix': 'Tailles × exemples',
      'para-matrix':
        'Les trois niveaux côte à côte : compact pour encarts, médium par défaut, large pour accroche en tête d’article.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Préférez un paragraphe <code>&lt;p&gt;</code> à l’intérieur du bloc pour une structure lisible. Ne confondez pas mise en exergue et message d’état : n’utilisez pas <code>role="alert"</code> ici. Le contraste du texte sur le fond de page doit rester conforme WCAG.',
      'prop-bj-highlight':
        'Taille médiane par défaut : bordure gauche grise foncée, corps de texte élargi (aucune classe <code>bj-highlight--md</code> — le médium est l’absence de <code>--sm</code> / <code>--lg</code>).',
      'prop-bj-highlight-sm': 'Padding et corps de texte réduits.',
      'prop-bj-highlight-lg':
        'Corps de texte très large (affichage).',
    },
    en: {
      title: 'Highlight',
      desc: 'Paragraph or excerpt emphasised with a left border and larger type: <code>bj-highlight</code> (<code>md</code> default—no extra size class), <code>bj-highlight--sm</code>, <code>bj-highlight--lg</code>.',
      'section-example': 'Example (default medium size)',
      'section-variants': 'Small and large sizes',
      'section-matrix': 'Sizes × examples',
      'para-matrix':
        'All three levels: compact for sidebars, medium by default, large for a lead paragraph.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Prefer a <code>&lt;p&gt;</code> inside the block for clear structure. Do not confuse a highlight with a status message: do not use <code>role="alert"</code> here. Text contrast against the page background must meet WCAG.',
      'prop-bj-highlight':
        'Default medium size: dark grey left border, enlarged body text (no <code>bj-highlight--md</code> class—medium means neither <code>--sm</code> nor <code>--lg</code>).',
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

const codeMatrix = `<!-- sm -->
<div class="bj-highlight bj-highlight--sm"><p>Compact</p></div>
<!-- md (défaut) -->
<div class="bj-highlight"><p>Par défaut</p></div>
<!-- lg -->
<div class="bj-highlight bj-highlight--lg"><p>Accroche</p></div>`

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
    <span v-html="t('desc')" />
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

  <DocsSection id="highlight-matrix" :title="t('section-matrix')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-matrix')" />
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div class="bj-highlight bj-highlight--sm">
        <p>Sm — encart latéral ou métadonnée mise en avant.</p>
      </div>
      <div class="bj-highlight">
        <p>Md — taille par défaut du composant Vue (<code>size="md"</code>).</p>
      </div>
      <div class="bj-highlight bj-highlight--lg">
        <p>Lg — chapô ou citation institutionnelle très visible.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMatrix" />
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
