<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<span class="bj-badge">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm"></i> En vigueur
</span>`

const codeVariantes = `<span class="bj-badge bj-badge--info">…</span>
<span class="bj-badge bj-badge--success">…</span>
<span class="bj-badge bj-badge--new">Nouveau</span>
<span class="bj-badge bj-badge--sm">…</span>`

const propsRows = [
  {
    name: 'bj-badge',
    description: 'Style neutre : fond gris léger, texte par défaut.',
  },
  {
    name: 'bj-badge--info',
    description: 'Fond et texte sémantiques « information ».',
  },
  { name: 'bj-badge--success', description: 'Validation ou état positif.' },
  { name: 'bj-badge--warning', description: 'Mise en garde.' },
  { name: 'bj-badge--error', description: 'Erreur ou rejet.' },
  {
    name: 'bj-badge--new',
    description: 'Mise en avant forte (fond vert action, texte blanc).',
  },
  { name: 'bj-badge--sm', description: 'Taille réduite pour zones denses.' },
  {
    name: 'bj-badge--no-icon',
    description: 'Masque les enfants bj-icon si présents.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Badge
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Étiquette compacte en capitales pour un statut, une catégorie ou
    une nouveauté. Peut inclure une icône via la classe utilitaire
    <code class="bj-text-sm">bj-icon</code>.
  </p>

  <DocsSection id="exemple-badge" title="Exemple">
    <DocsPreview>
      <span class="bj-badge"
        ><i class="ri-price-tag-3-line bj-icon bj-icon--sm"></i> En
        vigueur</span
      >
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-badge" title="Variantes">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <span class="bj-badge">Neutre</span>
      <span class="bj-badge bj-badge--info"
        ><i class="ri-information-line bj-icon bj-icon--sm"></i>
        Info</span
      >
      <span class="bj-badge bj-badge--success">Succès</span>
      <span class="bj-badge bj-badge--warning">Attention</span>
      <span class="bj-badge bj-badge--error">Erreur</span>
      <span class="bj-badge bj-badge--new">Nouveau</span>
      <span class="bj-badge bj-badge--sm">Très petit</span>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-badge" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-badge" title="Accessibilité">
    <DocsA11yNote>
      Les badges portent souvent une information ; si l’icône est
      purement décorative, utilisez
      <code>aria-hidden="true"</code> sur l’icône. Pour un statut
      critique (erreur, obligation), associez le badge à un texte
      explicite à proximité ou à un attribut ARIA sur le bloc parent.
    </DocsA11yNote>
  </DocsSection>
</template>
