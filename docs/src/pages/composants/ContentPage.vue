<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<article class="bj-content">…</article>`

const propsRows = [
  { name: 'bj-content', description: 'Bloc prose.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Contenu éditorial
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Prose institutionnelle : titres, listes, citations, code, figures
    et tableaux simples.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
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

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Styles sur les descendants directs (titres, <code>p</code>,
      listes, <code>blockquote</code>, <code>code</code>,
      <code>pre</code>, <code>hr</code>, <code>figure</code>,
      <code>table</code>).
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Hiérarchie de titres cohérente ; en-têtes de tableaux
      explicites.
    </DocsA11yNote>
  </DocsSection>
</template>
