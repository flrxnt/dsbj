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
      title: 'Contenu éditorial',
      desc: 'Prose institutionnelle : titres, listes, citations, code, figures et tableaux simples.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'para-variants':
        'Styles sur les descendants directs (titres, <code>p</code>, listes, <code>blockquote</code>, <code>code</code>, <code>pre</code>, <code>hr</code>, <code>figure</code>, <code>table</code>).',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Hiérarchie de titres cohérente ; en-têtes de tableaux explicites.',
      'prop-bj-content': 'Bloc prose.',
    },
    en: {
      title: 'Editorial content',
      desc: 'Institutional prose: headings, lists, quotes, code, figures, and simple tables.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'para-variants':
        'Styles apply to direct descendants (headings, <code>p</code>, lists, <code>blockquote</code>, <code>code</code>, <code>pre</code>, <code>hr</code>, <code>figure</code>, <code>table</code>).',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Consistent heading hierarchy; explicit table headers.',
      'prop-bj-content': 'Prose block.',
    },
  },
})

const codeExemple = `<article class="bj-content">…</article>`

const propsRows = computed(() => [
  { name: 'bj-content', description: t('prop-bj-content') },
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
      <article class="bj-content">
        <h2 class="bj-h2">Section</h2>
        <p>Texte avec <a href="#">lien</a>.</p>
        <ul>
          <li>Élément un</li>
          <li>Élément deux</li>
        </ul>
        <blockquote><p>« Citation institutionnelle. »</p></blockquote>
        <p>Code inline <code>npm</code> et bloc&nbsp;:</p>
        <pre><code>dsbj build</code></pre>
        <hr />
        <figure>
          <div
            class="bj-text-sm bj-text-mention"
            style="
              padding: var(--bj-spacing-4v);
              background: var(--bj-bg-alt);
              border-radius: var(--bj-radius-sm);
            "
          >
            [Visuel]
          </div>
          <figcaption>Légende.</figcaption>
        </figure>
        <table>
          <thead>
            <tr>
              <th>Indicateur</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dossiers</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>
      </article>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <span v-html="t('para-variants')" />
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-note') }}
    </DocsA11yNote>
  </DocsSection>
</template>
