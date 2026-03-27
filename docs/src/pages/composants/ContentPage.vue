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
      desc: 'Le composant <code>BjContent</code> est un simple conteneur <code>div.bj-content</code> : tout le contenu éditorial (titres, paragraphes, listes, tableaux, etc.) se place dans le slot par défaut — enfants directs du conteneur pour appliquer les styles de prose du design system.',
      'section-example': 'Exemple',
      'section-slot': 'Slot / enfants',
      'para-slot':
        'En HTML statique, enrobez votre article ou section avec <code>class="bj-content"</code>. En Vue, tout ce qui est passé entre les balises ouvrantes et fermantes du composant devient les enfants du <code>div</code> (équivalent du slot par défaut). Aucune classe de variante : un seul style de conteneur.',
      'section-variants': 'Styles sur les descendants',
      'para-variants':
        'Les styles s’appliquent aux descendants directs (titres, <code>p</code>, listes, <code>blockquote</code>, <code>code</code>, <code>pre</code>, <code>hr</code>, <code>figure</code>, <code>table</code>).',
      'section-minimal': 'Conteneur minimal',
      'para-minimal':
        'Un seul paragraphe suffit : la classe <code>bj-content</code> assure l’espacement et la typo de base.',
      'section-balise-racine':
        'Balise racine (<code>article</code>, <code>section</code>, <code>main</code>)',
      'para-balise-racine':
        'Seule la classe <code>bj-content</code> compte pour les styles : vous pouvez l’attacher à <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;main&gt;</code> ou <code>&lt;div&gt;</code> selon le rôle sémantique.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Hiérarchie de titres cohérente ; en-têtes de tableaux explicites (<code>th</code> + <code>scope</code> lorsque pertinent).',
      'prop-bj-content':
        'Bloc prose unique ; pas de props ni de modificateurs — tout le contenu passe par les enfants / le slot.',
    },
    en: {
      title: 'Editorial content',
      desc: '<code>BjContent</code> is a plain <code>div.bj-content</code> wrapper: all editorial markup (headings, paragraphs, lists, tables, etc.) goes in the default slot—direct children of the container so prose styles apply.',
      'section-example': 'Example',
      'section-slot': 'Slot / children',
      'para-slot':
        'In static HTML, wrap your article or section with <code>class="bj-content"</code>. In Vue, anything between the component’s opening and closing tags becomes the <code>div</code>’s children (default slot). No variant classes: one container style only.',
      'section-variants': 'Descendant styles',
      'para-variants':
        'Styles apply to direct descendants (headings, <code>p</code>, lists, <code>blockquote</code>, <code>code</code>, <code>pre</code>, <code>hr</code>, <code>figure</code>, <code>table</code>).',
      'section-minimal': 'Minimal container',
      'para-minimal':
        'A single paragraph is enough: <code>bj-content</code> provides base spacing and typography.',
      'section-balise-racine':
        'Root element (<code>article</code>, <code>section</code>, <code>main</code>)',
      'para-balise-racine':
        'Only the <code>bj-content</code> class drives styles: attach it to <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;main&gt;</code>, or <code>&lt;div&gt;</code> depending on semantics.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Consistent heading hierarchy; explicit table headers (<code>th</code> + <code>scope</code> where appropriate).',
      'prop-bj-content':
        'Single prose block; no props or modifiers—all content via children / default slot.',
    },
  },
})

const codeExemple = `<article class="bj-content">
  <h2 class="bj-h2">Section</h2>
  <p>Texte avec <a href="#">lien</a>.</p>
  …
</article>`

const codeMinimal = `<div class="bj-content">
  <p>Un seul paragraphe dans le conteneur éditorial.</p>
</div>`

const codeSectionRoot = `<section class="bj-content" aria-labelledby="sec-a">
  <h2 class="bj-h2" id="sec-a">Titre de section</h2>
  <p>Contenu avec la même classe sur une autre balise sémantique.</p>
</section>`

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
    <span v-html="t('desc')" />
  </p>

  <DocsSection id="sec-slot" :title="t('section-slot')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-slot')" />
    </p>
  </DocsSection>

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

  <DocsSection id="sec-minimal" :title="t('section-minimal')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-minimal')" />
    </p>
    <DocsPreview>
      <div class="bj-content">
        <p>Un seul paragraphe dans le conteneur éditorial.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMinimal" />
  </DocsSection>

  <DocsSection id="sec-balise-racine" :title="t('section-balise-racine')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-balise-racine')" />
    </p>
    <DocsPreview>
      <section class="bj-content" aria-labelledby="doc-content-sec">
        <h2 class="bj-h2" id="doc-content-sec">Sous-section</h2>
        <p>
          Même styles de prose : la racine est un
          <code>&lt;section&gt;</code> avec <code>bj-content</code>.
        </p>
      </section>
    </DocsPreview>
    <DocsCode :code="codeSectionRoot" />
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
