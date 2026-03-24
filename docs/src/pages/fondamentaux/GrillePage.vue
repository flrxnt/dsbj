<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeGutters = `<div class="bj-grid-row bj-grid-row--gutters">
  <div class="bj-col-12 bj-col-md-6 bj-col-lg-4">…</div>
</div>`
</script>

<template>
  <h1 class="bj-h1">Grille</h1>
  <p class="bj-text-md bj-text-alt">
    Le contenu est centré dans un <code>bj-container</code> (largeur
    max. 1248&nbsp;px) avec marges latérales responsives. La grille
    comporte <strong>12 colonnes</strong> et des gouttières basées sur
    <code>--bj-spacing-4v</code>.
  </p>

  <DocsSection id="points-rupture" title="Points de rupture">
    <table class="docs-props">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Largeur min.</th>
          <th>Préfixe de colonne</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SM</td>
          <td>576&nbsp;px</td>
          <td><code>bj-col-sm-*</code></td>
        </tr>
        <tr>
          <td>MD</td>
          <td>768&nbsp;px</td>
          <td><code>bj-col-md-*</code></td>
        </tr>
        <tr>
          <td>LG</td>
          <td>992&nbsp;px</td>
          <td><code>bj-col-lg-*</code></td>
        </tr>
        <tr>
          <td>XL</td>
          <td>1248&nbsp;px</td>
          <td><code>bj-col-xl-*</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="demo-12-colonnes" title="12 colonnes (démo)">
    <p class="bj-text-sm bj-text-alt">
      Ligne classique avec marges négatives sur le rang - chaque
      colonne a un padding latéral.
    </p>
    <DocsPreview style="overflow-x: auto">
      <div class="bj-grid-row">
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            1
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            2
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            3
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            4
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            5
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            6
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            7
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            8
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            9
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            10
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            11
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            12
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <section class="docs-section" id="gouttieres" aria-labelledby="gouttieres-title">
    <h2 id="gouttieres-title" class="docs-section__title">
      Gouttières : <code>bj-grid-row--gutters</code>
    </h2>
    <p class="bj-text-sm bj-text-alt">
      Utilise la propriété <code>gap</code> ; les colonnes n’ont pas
      de padding supplémentaire à l’intérieur du rang.
    </p>
    <DocsPreview>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-md-4">
          <div
            class="bj-p-3v bj-text-sm bj-text-center"
            style="background: var(--bj-color-info-925)"
          >
            bj-col-12 bj-col-md-4
          </div>
        </div>
        <div class="bj-col-12 bj-col-md-4">
          <div
            class="bj-p-3v bj-text-sm bj-text-center"
            style="background: var(--bj-color-succes-925)"
          >
            bj-col-12 bj-col-md-4
          </div>
        </div>
        <div class="bj-col-12 bj-col-md-4">
          <div
            class="bj-p-3v bj-text-sm bj-text-center"
            style="background: var(--bj-color-alerte-925)"
          >
            bj-col-12 bj-col-md-4
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGutters" />
  </section>

  <DocsSection id="colonnes-responsives" title="Colonnes responsives">
    <p>
      Combinez <code>bj-col-*</code> (mobile) avec
      <code>bj-col-sm-*</code>, <code>bj-col-md-*</code>,
      <code>bj-col-lg-*</code>, <code>bj-col-xl-*</code>. Utilisez
      <code>bj-col</code> pour une colonne flexible (<code
        >flex: 1 1 0%</code>).
    </p>
  </DocsSection>
</template>
