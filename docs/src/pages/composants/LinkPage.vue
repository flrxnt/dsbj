<script setup lang="ts">
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsSection from "@docs/components/DocsSection.vue";
import DocsA11yNote from "@docs/components/DocsA11yNote.vue";
import DocsPropsTable from "@docs/components/DocsPropsTable.vue";

const codeExemple = `<a href="#" class="bj-link">Consulter la démarche</a>`;

const codeVariantes = `<a href="#" class="bj-link bj-link--sm">…</a>
<a href="#" class="bj-link bj-link--icon-left"><i class="ri-arrow-left-line"></i> …</a>
<a href="https://…" class="bj-link" target="_blank" rel="noopener noreferrer">…</a>`;

const propsRows = [
  {
    name: "bj-link",
    description:
      "Lien standard : couleur d’action, soulignement, survol renforcé.",
  },
  {
    name: "bj-link--sm / bj-link--lg",
    description: "Corps de texte plus petit ou plus grand.",
  },
  {
    name: "bj-link--icon-left",
    description: "Flex avec icône avant le libellé.",
  },
  {
    name: "bj-link--icon-right",
    description: "Flex avec icône après le libellé.",
  },
  {
    name: "bj-link--reset",
    description: "Hérite de la couleur du texte ; soulignement au survol.",
  },
];
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">Lien</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    Liens de texte soulignés aux couleurs d’action du DSBJ, avec variantes de
    taille et disposition d’icônes. Un lien ouvrant un nouvel onglet affiche
    automatiquement une icône « externe » lorsque
    <code class="bj-text-sm">target="_blank"</code> est utilisé.
  </p>

  <DocsSection id="exemple-link" title="Exemple">
    <DocsPreview>
      <a href="#" class="bj-link">Consulter la démarche</a>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-link" title="Variantes">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
        align-items: flex-start;
      "
    >
      <a href="#" class="bj-link bj-link--sm">Lien petit</a>
      <a href="#" class="bj-link bj-link--lg">Lien grand</a>
      <a href="#" class="bj-link bj-link--icon-left"
        ><i class="ri-arrow-left-line"></i> Retour à la liste</a
      >
      <a href="#" class="bj-link bj-link--icon-right"
        >Suite <i class="ri-arrow-right-line"></i
      ></a>
      <p class="bj-text-md" style="margin: 0">
        Dans un paragraphe :
        <a href="#" class="bj-link bj-link--reset">lien reset</a>
        reprend la couleur du texte.
      </p>
      <a
        href="https://www.gouv.example"
        class="bj-link"
        target="_blank"
        rel="noopener noreferrer"
        >Site officiel (nouvel onglet)</a
      >
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-link" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
    <p
      class="bj-text-sm"
      style="color: var(--bj-text-mention); margin-top: var(--bj-spacing-2v)"
    >
      Avec <code>target="_blank"</code>, le DSBJ ajoute une glyphe externe via
      pseudo-élément (police Remix Icon).
    </p>
  </DocsSection>

  <DocsSection id="a11y-link" title="Accessibilité">
    <DocsA11yNote>
      Les liens vers un nouvel onglet doivent l’indiquer dans le libellé ou un
      texte masqué, en complément de
      <code>rel="noopener noreferrer"</code>. Le focus visible natif du
      navigateur doit rester actif ; évitez <code>outline: none</code> sans
      alternative.
    </DocsA11yNote>
  </DocsSection>
</template>
