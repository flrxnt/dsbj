<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<div class="bj-highlight">
  <p>…</p>
</div>`

const codeVariantes = `<div class="bj-highlight bj-highlight--sm"><p>…</p></div>
<div class="bj-highlight bj-highlight--lg"><p>…</p></div>`

const propsRows = [
  {
    name: 'bj-highlight',
    description:
      'Bordure gauche grise foncée, texte en taille intermédiaire élargie.',
  },
  { name: 'bj-highlight--sm', description: 'Padding et corps de texte réduits.' },
  { name: 'bj-highlight--lg', description: 'Corps de texte très large (affichage).' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Mise en exergue
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Paragraphe ou extrait mis en valeur par une bordure gauche et une
    taille de texte plus grande, sans changer le ton sémantique d’une
    alerte.
  </p>

  <DocsSection id="exemple-highlight" title="Exemple">
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

  <DocsSection id="variantes-highlight" title="Variantes">
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

  <DocsSection id="classes-highlight" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-highlight" title="Accessibilité">
    <DocsA11yNote>
      Préférez un paragraphe <code>&lt;p&gt;</code> à l’intérieur du
      bloc pour une structure lisible. Ne confondez pas mise en
      exergue et message d’état : n’utilisez pas
      <code>role="alert"</code> ici. Le contraste du texte sur le
      fond de page doit rester conforme WCAG.
    </DocsA11yNote>
  </DocsSection>
</template>
