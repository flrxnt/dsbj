<script setup lang="ts">
import DocsSection from '@docs/components/DocsSection.vue'
</script>

<template>
  <h1 class="bj-h1">Palette de couleurs</h1>
  <p class="bj-text-md bj-text-alt">
    Référence des couleurs de marque, étendues et fonctionnelles.
    Utilisez les variables CSS pour rester synchronisé avec les thèmes
    clair et sombre.
  </p>

  <DocsSection id="primaires-drapeau" title="Primaires (drapeau)">
    <div class="bj-grid-row bj-grid-row--gutters">
      <div class="bj-col-12 bj-col-md-4">
        <div
          class="docs-swatch"
          style="background: #008751; color: #fff"
        >
          <span class="docs-swatch__name">Vert Bénin</span
          ><span class="docs-swatch__hex">#008751</span
          ><span class="docs-swatch__var"
            >--bj-color-vert-benin-main-491</span
          >
        </div>
      </div>
      <div class="bj-col-12 bj-col-md-4">
        <div
          class="docs-swatch"
          style="background: #fcd116; color: #161616"
        >
          <span class="docs-swatch__name">Jaune Bénin</span
          ><span class="docs-swatch__hex">#FCD116</span
          ><span class="docs-swatch__var"
            >--bj-color-jaune-benin-main-822</span
          >
        </div>
      </div>
      <div class="bj-col-12 bj-col-md-4">
        <div
          class="docs-swatch"
          style="background: #e8112d; color: #fff"
        >
          <span class="docs-swatch__name">Rouge Bénin</span
          ><span class="docs-swatch__hex">#E8112D</span
          ><span class="docs-swatch__var"
            >--bj-color-rouge-benin-main-472</span
          >
        </div>
      </div>
    </div>
  </DocsSection>

  <DocsSection id="etendues" title="Étendues">
    <div class="bj-grid-row bj-grid-row--gutters">
      <div class="bj-col-12 bj-col-md-6">
        <div
          class="docs-swatch"
          style="background: #c8842a; color: #fff"
        >
          <span class="docs-swatch__name">Ocre Terre</span
          ><span class="docs-swatch__hex">#C8842A</span
          ><span class="docs-swatch__var"
            >--bj-color-ocre-terre-main-620</span
          >
        </div>
      </div>
      <div class="bj-col-12 bj-col-md-6">
        <div
          class="docs-swatch"
          style="background: #1b6b93; color: #fff"
        >
          <span class="docs-swatch__name">Bleu Horizon</span
          ><span class="docs-swatch__hex">#1B6B93</span
          ><span class="docs-swatch__var"
            >--bj-color-bleu-horizon-main-491</span
          >
        </div>
      </div>
    </div>
  </DocsSection>

  <DocsSection id="fonctionnelles" title="Fonctionnelles">
    <div class="bj-grid-row bj-grid-row--gutters">
      <div class="bj-col-12 bj-col-sm-6 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #0063cb; color: #fff"
        >
          <span class="docs-swatch__name">Info</span
          ><span class="docs-swatch__hex">#0063CB</span
          ><span class="docs-swatch__var"
            >--bj-color-info-main-500</span
          >
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #18753c; color: #fff"
        >
          <span class="docs-swatch__name">Succès</span
          ><span class="docs-swatch__hex">#18753C</span
          ><span class="docs-swatch__var"
            >--bj-color-succes-main-460</span
          >
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #d64d00; color: #fff"
        >
          <span class="docs-swatch__name">Alerte</span
          ><span class="docs-swatch__hex">#D64D00</span
          ><span class="docs-swatch__var"
            >--bj-color-alerte-main-510</span
          >
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #ce0500; color: #fff"
        >
          <span class="docs-swatch__name">Erreur</span
          ><span class="docs-swatch__hex">#CE0500</span
          ><span class="docs-swatch__var"
            >--bj-color-erreur-main-510</span
          >
        </div>
      </div>
    </div>
  </DocsSection>

  <DocsSection id="neutres-gris" title="Neutres (gris)">
    <p class="bj-text-sm bj-text-alt">
      Échelle du plus foncé au plus clair - <code>gris-50</code> à
      <code>gris-1000</code>.
    </p>
    <div class="bj-grid-row bj-grid-row--gutters">
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #161616; color: #fff"
        >
          <span class="docs-swatch__name">Gris 50</span
          ><span class="docs-swatch__hex">#161616</span
          ><span class="docs-swatch__var">--bj-color-gris-50</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #1e1e1e; color: #fff"
        >
          <span class="docs-swatch__name">Gris 100</span
          ><span class="docs-swatch__hex">#1E1E1E</span
          ><span class="docs-swatch__var">--bj-color-gris-100</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #2a2a2a; color: #fff"
        >
          <span class="docs-swatch__name">Gris 200</span
          ><span class="docs-swatch__hex">#2A2A2A</span
          ><span class="docs-swatch__var">--bj-color-gris-200</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #3a3a3a; color: #fff"
        >
          <span class="docs-swatch__name">Gris 425</span
          ><span class="docs-swatch__hex">#3A3A3A</span
          ><span class="docs-swatch__var">--bj-color-gris-425</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #585858; color: #fff"
        >
          <span class="docs-swatch__name">Gris 500</span
          ><span class="docs-swatch__hex">#585858</span
          ><span class="docs-swatch__var">--bj-color-gris-500</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #7b7b7b; color: #fff"
        >
          <span class="docs-swatch__name">Gris 625</span
          ><span class="docs-swatch__hex">#7B7B7B</span
          ><span class="docs-swatch__var">--bj-color-gris-625</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #a8a8a8; color: #161616"
        >
          <span class="docs-swatch__name">Gris 750</span
          ><span class="docs-swatch__hex">#A8A8A8</span
          ><span class="docs-swatch__var">--bj-color-gris-750</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #cecece; color: #161616"
        >
          <span class="docs-swatch__name">Gris 850</span
          ><span class="docs-swatch__hex">#CECECE</span
          ><span class="docs-swatch__var">--bj-color-gris-850</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #dddddd; color: #161616"
        >
          <span class="docs-swatch__name">Gris 900</span
          ><span class="docs-swatch__hex">#DDDDDD</span
          ><span class="docs-swatch__var">--bj-color-gris-900</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #e5e5e5; color: #161616"
        >
          <span class="docs-swatch__name">Gris 925</span
          ><span class="docs-swatch__hex">#E5E5E5</span
          ><span class="docs-swatch__var">--bj-color-gris-925</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #eeeeee; color: #161616"
        >
          <span class="docs-swatch__name">Gris 950</span
          ><span class="docs-swatch__hex">#EEEEEE</span
          ><span class="docs-swatch__var">--bj-color-gris-950</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="background: #f6f6f6; color: #161616"
        >
          <span class="docs-swatch__name">Gris 975</span
          ><span class="docs-swatch__hex">#F6F6F6</span
          ><span class="docs-swatch__var">--bj-color-gris-975</span>
        </div>
      </div>
      <div class="bj-col-12 bj-col-sm-6 bj-col-md-4 bj-col-lg-3">
        <div
          class="docs-swatch"
          style="
            background: #ffffff;
            color: #161616;
            border: 1px solid var(--bj-border-subtle);
          "
        >
          <span class="docs-swatch__name">Gris 1000</span
          ><span class="docs-swatch__hex">#FFFFFF</span
          ><span class="docs-swatch__var">--bj-color-gris-1000</span>
        </div>
      </div>
    </div>
  </DocsSection>
</template>
