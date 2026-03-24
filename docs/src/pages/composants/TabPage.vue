<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<div class="bj-tabs" data-bj-tabs>
  <div class="bj-tabs__list" role="tablist">
    <button class="bj-tabs__tab" data-bj-tab role="tab">Onglet 1</button>
    <button class="bj-tabs__tab" data-bj-tab role="tab">Onglet 2</button>
    <button class="bj-tabs__tab" data-bj-tab role="tab">Onglet 3</button>
  </div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel"><p>Contenu du premier onglet...</p></div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel"><p>Contenu du deuxième onglet...</p></div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel"><p>Contenu du troisième onglet...</p></div>
</div>`

const propsRows = [
  {
    name: 'bj-tabs + data-bj-tabs',
    description: 'Conteneur racine du composant.',
  },
  { name: 'bj-tabs__list', description: 'Barre d’onglets (role="tablist").' },
  {
    name: 'bj-tabs__tab + data-bj-tab',
    description: 'Bouton d’onglet (role="tab").',
  },
  {
    name: 'bj-tabs__panel + data-bj-tab-panel',
    description:
      'Panneau de contenu (role="tabpanel") ; visibilité pilotée par data-bj-expanded.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Onglet
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Regroupement de panneaux affichés un à la fois, avec barre
    d’onglets et prise en charge clavier fournie par le script DSBJ.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <div class="bj-tabs" data-bj-tabs>
        <div
          class="bj-tabs__list"
          role="tablist"
          aria-label="Démonstration des onglets"
        >
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
          >
            Onglet 1
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
          >
            Onglet 2
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
          >
            Onglet 3
          </button>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu du premier onglet…</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu du deuxième onglet…</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu du troisième onglet…</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-clavier" title="Navigation clavier">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Lorsqu’un onglet a le focus, utilisez
      <kbd>Flèche droite</kbd> et <kbd>Flèche gauche</kbd> pour passer
      à l’onglet suivant ou précédent (le panneau affiché suit la
      sélection). <kbd>Début</kbd> (<kbd>Home</kbd>) active le premier
      onglet, <kbd>Fin</kbd> (<kbd>End</kbd>) le dernier. Le script
      repositionne le focus sur l’onglet cible après ces raccourcis.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable
      :headers="['Classe / attribut', 'Description']"
      :rows="propsRows"
    />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Utilisez <code>role="tablist"</code> sur la liste,
      <code>role="tab"</code> sur chaque bouton et
      <code>role="tabpanel"</code> sur chaque panneau. Le script met
      à jour <code>aria-selected</code> (onglet actif à
      <code>true</code>) et la gestion du
      <code>tabindex</code> (onglet sélectionné en <code>0</code>,
      les autres en <code>-1</code>) pour un parcours clavier
      prévisible. Un libellé sur la
      <code>tablist</code> (<code>aria-label</code>) aide les
      lecteurs d’écran à comprendre le groupe d’onglets.
    </DocsA11yNote>
  </DocsSection>
</template>
