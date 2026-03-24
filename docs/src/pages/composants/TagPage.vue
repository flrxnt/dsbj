<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<span class="bj-tag">Administration</span>`

const codeVariantes = `<div class="bj-tags">
  <span class="bj-tag bj-tag--action">…</span>
</div>
<span class="bj-tag bj-tag--dismiss">
  Filtre
  <button type="button" class="bj-tag__close" aria-label="Retirer le filtre">…</button>
</span>`

const propsRows = [
  {
    name: 'bj-tag',
    description:
      'Tag neutre ; peut être span, a ou button.',
  },
  { name: 'bj-tag--action', description: 'Style lié à la couleur d’action.' },
  {
    name: 'bj-tag--info … bj-tag--error',
    description:
      'Variantes sémantiques (info, succès, avertissement, erreur).',
  },
  { name: 'bj-tag--sm', description: 'Tag compact.' },
  {
    name: 'bj-tag--dismiss',
    description: 'Ajuste le padding pour accueillir le bouton de fermeture.',
  },
  { name: 'bj-tag__close', description: 'Bouton icône pour retirer le tag.' },
  { name: 'bj-tags', description: 'Conteneur flex wrap pour une liste de tags.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">Tag</h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Mot-clé ou filtre affiché comme une pastille ; peut être statique,
    lien ou bouton. Variantes sémantiques et tag fermable pour les
    facettes de recherche.
  </p>

  <DocsSection id="exemple-tag" title="Exemple">
    <DocsPreview>
      <span class="bj-tag">Administration</span>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-tag" title="Variantes">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-6v);
      "
    >
      <div class="bj-tags" role="list">
        <span class="bj-tag" role="listitem">Défaut</span>
        <a href="#" class="bj-tag bj-tag--action" role="listitem"
          >Action (lien)</a
        >
        <span class="bj-tag bj-tag--info" role="listitem">Info</span>
        <span class="bj-tag bj-tag--success" role="listitem">Succès</span>
        <span class="bj-tag bj-tag--warning" role="listitem">Attention</span>
        <span class="bj-tag bj-tag--error" role="listitem">Erreur</span>
        <span class="bj-tag bj-tag--sm" role="listitem">Petit</span>
      </div>
      <div>
        <span class="bj-tag bj-tag--dismiss bj-tag--info">
          Filtre actif
          <button
            type="button"
            class="bj-tag__close"
            aria-label="Retirer le filtre Filtre actif"
          >
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-tag" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tag" title="Accessibilité">
    <DocsA11yNote>
      Le bouton de fermeture doit avoir un
      <code>aria-label</code> décrivant l’action et le filtre
      retiré. Pour une liste de tags, un rôle <code>list</code> /
      <code>listitem</code> ou une structure de groupe avec titre
      visible améliore la navigation au lecteur d’écran.
    </DocsA11yNote>
  </DocsSection>
</template>
