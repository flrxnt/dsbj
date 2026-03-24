<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeIcon =
  '<i class="ri-home-line bj-icon bj-icon--md"></i>'

const codeIconColor =
  '<i class="ri-information-line bj-icon bj-icon--md bj-icon--info"></i>'
</script>

<template>
  <h1 class="bj-h1">Icônes</h1>
  <p class="bj-text-md bj-text-alt">
    Les icônes proviennent de
    <a href="https://remixicon.com/" class="bj-link">Remix Icon</a>,
    chargées via CDN. Combinez les classes Remix (<code>ri-*</code>)
    avec <code>bj-icon</code> pour les tailles et couleurs du DSBJ.
  </p>

  <DocsSection id="tailles-icones" title="Tailles">
    <DocsPreview
      class="bj-d-flex bj-items-center bj-gap-6v bj-flex-wrap"
    >
      <span
        ><i class="ri-building-4-line bj-icon bj-icon--sm"></i>
        <code class="bj-text-xs">bj-icon--sm</code></span
      >
      <span
        ><i class="ri-building-4-line bj-icon bj-icon--md"></i>
        <code class="bj-text-xs">bj-icon--md</code></span
      >
      <span
        ><i class="ri-building-4-line bj-icon bj-icon--lg"></i>
        <code class="bj-text-xs">bj-icon--lg</code></span
      >
      <span
        ><i class="ri-building-4-line bj-icon bj-icon--xl"></i>
        <code class="bj-text-xs">bj-icon--xl</code></span
      >
    </DocsPreview>
    <DocsCode :code="codeIcon" />
  </DocsSection>

  <DocsSection id="variantes-couleur" title="Variantes de couleur">
    <DocsPreview
      class="bj-d-flex bj-items-center bj-gap-6v bj-flex-wrap"
    >
      <i
        class="ri-flag-line bj-icon bj-icon--lg bj-icon--action"
        title="action"
      ></i>
      <i
        class="ri-information-line bj-icon bj-icon--lg bj-icon--info"
        title="info"
      ></i>
      <i
        class="ri-checkbox-circle-line bj-icon bj-icon--lg bj-icon--success"
        title="success"
      ></i>
      <i
        class="ri-alert-line bj-icon bj-icon--lg bj-icon--warning"
        title="warning"
      ></i>
      <i
        class="ri-error-warning-line bj-icon bj-icon--lg bj-icon--error"
        title="error"
      ></i>
    </DocsPreview>
    <DocsCode :code="codeIconColor" />
  </DocsSection>

  <DocsSection id="exemples-pictogrammes" title="Exemples de pictogrammes">
    <table class="docs-props">
      <thead>
        <tr>
          <th>Aperçu</th>
          <th>Classe Remix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="ri-home-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-home-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-user-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-user-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-file-text-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-file-text-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-calendar-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-calendar-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-mail-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-mail-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-phone-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-phone-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-map-pin-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-map-pin-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-search-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-search-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-download-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-download-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-upload-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-upload-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-printer-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-printer-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-external-link-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-external-link-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-arrow-right-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-arrow-right-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-menu-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-menu-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-close-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-close-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-settings-3-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-settings-3-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-lock-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-lock-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-shield-check-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-shield-check-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-team-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-team-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-bank-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-bank-line</code></td>
        </tr>
        <tr>
          <td>
            <i class="ri-building-line bj-icon bj-icon--md"></i>
          </td>
          <td><code>ri-building-line</code></td>
        </tr>
        <tr>
          <td><i class="ri-booklet-line bj-icon bj-icon--md"></i></td>
          <td><code>ri-booklet-line</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>
</template>
