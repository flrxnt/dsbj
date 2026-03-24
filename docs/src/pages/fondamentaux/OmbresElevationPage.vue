<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeTransition =
  'transition: color var(--bj-duration-fast) var(--bj-easing);'
</script>

<template>
  <h1 class="bj-h1">Ombres et élévation</h1>
  <p class="bj-text-md bj-text-alt">
    Jetons d’ombre, de rayon et de transition pour hiérarchiser
    l’interface sans excès.
  </p>

  <DocsSection id="ombres" title="Ombres">
    <DocsPreview>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-xs);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-xs</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-sm);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-sm</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-md);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-md</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-lg);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-lg</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-xl);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-xl</code>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="rayons-bordure" title="Rayons de bordure">
    <DocsPreview
      class="bj-d-flex bj-flex-wrap bj-gap-4v bj-items-end"
    >
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-xs);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">xs</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-sm);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">sm</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-md);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">md</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-lg);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">lg</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-xl);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">xl</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-full);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">full</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 5rem;
            height: 2rem;
            border-radius: var(--bj-radius-pill);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">pill</code>
      </div>
    </DocsPreview>
    <table class="docs-props">
      <thead>
        <tr>
          <th>Jeton</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>--bj-radius-xs</code> à <code>--bj-radius-xl</code>,
            <code>--bj-radius-full</code>,
            <code>--bj-radius-pill</code>
          </td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="transitions" title="Transitions">
    <table class="docs-props">
      <thead>
        <tr>
          <th>Jeton</th>
          <th>Valeur</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-duration-fast</code></td>
          <td>150&nbsp;ms</td>
          <td>Hover, focus légers</td>
        </tr>
        <tr>
          <td><code>--bj-duration-normal</code></td>
          <td>250&nbsp;ms</td>
          <td>Ouvertures, panneaux</td>
        </tr>
        <tr>
          <td><code>--bj-duration-slow</code></td>
          <td>400&nbsp;ms</td>
          <td>Transitions plus visibles</td>
        </tr>
        <tr>
          <td><code>--bj-easing</code></td>
          <td><code>cubic-bezier(0.4, 0, 0.2, 1)</code></td>
          <td>Courbe standard matérielle</td>
        </tr>
      </tbody>
    </table>
    <DocsCode :code="codeTransition" />
  </DocsSection>
</template>
