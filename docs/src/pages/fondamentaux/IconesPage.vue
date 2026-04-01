<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Icônes',
      desc:
        'Les icônes proviennent de {link}, chargées via CDN. Combinez les classes Remix ({ri}) avec {bjIcon} pour les tailles et couleurs du DSBJ.',
      'vue-react-note': 'Les composants Vue et React du DSBJ embarquent leurs icônes en SVG inline — aucune dépendance externe n\'est nécessaire. La section ci-dessous concerne uniquement l\'utilisation HTML/CSS pure.',
      'section-sizes': 'Tailles',
      'section-colors': 'Variantes de couleur',
      'section-examples': 'Exemples de pictogrammes',
      thPreview: 'Aperçu',
      thRemixClass: 'Classe Remix',
    },
    en: {
      title: 'Icons',
      desc:
        'Icons come from {link}, loaded via CDN. Combine Remix classes ({ri}) with {bjIcon} for DSBJ sizes and colors.',
      'vue-react-note': 'Vue and React DSBJ components embed their icons as inline SVGs — no external dependency is needed. The section below applies only to pure HTML/CSS usage.',
      'section-sizes': 'Sizes',
      'section-colors': 'Color variants',
      'section-examples': 'Pictogram examples',
      thPreview: 'Preview',
      thRemixClass: 'Remix class',
    },
  },
})

const codeIcon =
  '<i class="ri-home-line bj-icon bj-icon--md"></i>'

const codeIconColor =
  '<i class="ri-information-line bj-icon bj-icon--md bj-icon--info"></i>'
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>

  <div class="bj-callout bj-callout--success" style="margin-bottom: var(--bj-spacing-4v)">
    <div>
      <span class="ri-checkbox-circle-line" aria-hidden="true" />
      {{ t('vue-react-note') }}
    </div>
  </div>

  <p class="bj-text-md bj-text-alt">
    <i18n-t keypath="desc">
      <template #link>
        <a href="https://remixicon.com/" class="bj-link">Remix Icon</a>
      </template>
      <template #ri>
        <code>ri-*</code>
      </template>
      <template #bjIcon>
        <code>bj-icon</code>
      </template>
    </i18n-t>
  </p>

  <DocsSection id="tailles-icones" :title="t('section-sizes')">
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

  <DocsSection id="variantes-couleur" :title="t('section-colors')">
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

  <DocsSection id="exemples-pictogrammes" :title="t('section-examples')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('thPreview') }}</th>
          <th>{{ t('thRemixClass') }}</th>
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
