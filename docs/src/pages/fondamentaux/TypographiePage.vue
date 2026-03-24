<script setup lang="ts">
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsSection from "@docs/components/DocsSection.vue";

const codeDisplay = `<p class="bj-display-xl">…</p>
<p class="bj-display-lg">…</p>
<p class="bj-display-md">…</p>
<p class="bj-display-sm">…</p>`;

const codeHeadings = `<h1 class="bj-h1">…</h1>
<h2 class="bj-h2">…</h2>
<!-- … -->`;

const codeTextSizes = `<p class="bj-text-lg">…</p>
<p class="bj-text-md">…</p>
<p class="bj-text-sm">…</p>
<p class="bj-text-xs">…</p>`;
</script>

<template>
  <h1 class="bj-h1">Typographie</h1>
  <p class="bj-text-md bj-text-alt">
    Le DSBJ s’appuie sur <strong>Open Sans</strong> pour l’interface,
    <strong>Spectral</strong> pour le contenu éditorial ou les citations, et une
    pile <strong>monospace</strong> pour le code.
  </p>

  <DocsSection id="familles-polices" title="Familles de polices">
    <table class="docs-props">
      <thead>
        <tr>
          <th>Rôle</th>
          <th>Variable CSS</th>
          <th>Exemple</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sans-serif (corps)</td>
          <td><code>--bj-font-sans</code></td>
          <td class="bj-text-md">Open Sans - Services en ligne</td>
        </tr>
        <tr>
          <td>Serif</td>
          <td><code>--bj-font-serif</code></td>
          <td class="bj-text-md bj-text-serif">
            Spectral - Texte institutionnel
          </td>
        </tr>
        <tr>
          <td>Monospace</td>
          <td><code>--bj-font-mono</code></td>
          <td class="bj-text-mono bj-text-sm">npm install @flrxnt/dsbj</td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="titres-affichage" title="Titres d’affichage">
    <p class="bj-text-sm bj-text-alt">
      Classes <code>bj-display-xl</code> à <code>bj-display-sm</code> - tailles
      renforcées à partir du breakpoint LG.
    </p>
    <DocsPreview>
      <p class="bj-display-xl">bj-display-xl</p>
      <p class="bj-display-lg">bj-display-lg</p>
      <p class="bj-display-md">bj-display-md</p>
      <p class="bj-display-sm">bj-display-sm</p>
    </DocsPreview>
    <DocsCode :code="codeDisplay" />
  </DocsSection>

  <DocsSection id="niveaux-titre" title="Niveaux de titre">
    <p class="bj-text-sm bj-text-alt">
      Balises <code>h1</code>–<code>h6</code> ou classes
      <code>bj-h1</code>–<code>bj-h6</code>.
    </p>
    <DocsPreview>
      <p class="bj-h1" style="margin-bottom: 0.5rem">Titre niveau 1</p>
      <h2 class="bj-h2" style="margin-bottom: 0.5rem">Titre niveau 2</h2>
      <h3 class="bj-h3" style="margin-bottom: 0.5rem">Titre niveau 3</h3>
      <h4 class="bj-h4" style="margin-bottom: 0.5rem">Titre niveau 4</h4>
      <h5 class="bj-h5" style="margin-bottom: 0.5rem">Titre niveau 5</h5>
      <h6 class="bj-h6" style="margin-bottom: 0">Titre niveau 6</h6>
    </DocsPreview>
    <DocsCode :code="codeHeadings" />
  </DocsSection>

  <DocsSection id="tailles-texte" title="Tailles de texte courant">
    <DocsPreview>
      <p class="bj-text-lg">
        bj-text-lg - Texte d’introduction ou mise en avant.
      </p>
      <p class="bj-text-md">
        bj-text-md - Taille par défaut du corps (équivalent au
        <code>body</code>).
      </p>
      <p class="bj-text-sm">
        bj-text-sm - Métadonnées, légendes, aides de formulaire.
      </p>
      <p class="bj-text-xs">
        bj-text-xs - Mentions légales, précisions discrètes.
      </p>
    </DocsPreview>
    <DocsCode :code="codeTextSizes" />
  </DocsSection>

  <DocsSection id="graisses" title="Graisses">
    <table class="docs-props">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Jeton</th>
          <th>Valeur</th>
          <th>Classes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Regular</td>
          <td><code>--bj-fw-regular</code></td>
          <td>400</td>
          <td><code>bj-text-regular</code></td>
        </tr>
        <tr>
          <td>Medium</td>
          <td><code>--bj-fw-medium</code></td>
          <td>500</td>
          <td><code>bj-text-medium</code></td>
        </tr>
        <tr>
          <td>Semibold</td>
          <td><code>--bj-fw-semibold</code></td>
          <td>600</td>
          <td><code>bj-text-semibold</code></td>
        </tr>
        <tr>
          <td>Bold</td>
          <td><code>--bj-fw-bold</code></td>
          <td>700</td>
          <td><code>bj-text-bold</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="variables-echelle" title="Variables d’échelle">
    <p class="bj-text-sm bj-text-alt">
      Tailles de police (<code>--bj-fs-*</code>), interlignes
      (<code>--bj-lh-*</code>) et graisses (<code>--bj-fw-*</code>) sont
      définies sur <code>:root</code>.
    </p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Jetons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tailles</td>
          <td><code>--bj-fs-xs</code> à <code>--bj-fs-6xl</code></td>
        </tr>
        <tr>
          <td>Interligne</td>
          <td>
            <code>--bj-lh-tight</code>, <code>--bj-lh-normal</code>,
            <code>--bj-lh-loose</code>
          </td>
        </tr>
        <tr>
          <td>Graisse</td>
          <td>
            <code>--bj-fw-regular</code>, <code>--bj-fw-medium</code>,
            <code>--bj-fw-semibold</code>, <code>--bj-fw-bold</code>
          </td>
        </tr>
      </tbody>
    </table>
  </DocsSection>
</template>
