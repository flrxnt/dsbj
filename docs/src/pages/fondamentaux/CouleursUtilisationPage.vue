<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Couleurs - utilisation et jetons',
      desc:
        'Les jetons sémantiques s’adaptent au thème clair ou sombre (<code>data-bj-theme</code>). Préférez-les aux couleurs de palette directes dans les interfaces.',
      'section-texte': 'Texte et fonds',
      'section-bordures': 'Bordures et actions',
      'section-fonctionnelles': 'Couleurs fonctionnelles',
      'th-jeton': 'Jeton',
      'th-clair': 'Thème clair',
      'th-sombre': 'Thème sombre',
      'th-role': 'Rôle',
      'texte-intro':
        'Les variables ci-dessous mappent la palette brute vers des rôles lisibles en contexte administratif.',
      'fonc-intro':
        'Utilisez ces jetons pour les états informatifs, de succès, d’avertissement et d’erreur (texte, bordures, icônes). Les fonds associés portent le suffixe <code>-bg</code>.',
      'role-info': 'Information',
      'role-info-bg': 'Fond info',
      'role-success': 'Succès',
      'role-success-bg': 'Fond succès',
      'role-warning': 'Alerte',
      'role-warning-bg': 'Fond alerte',
      'role-error': 'Erreur',
      'role-error-bg': 'Fond erreur',
    },
    en: {
      title: 'Colors — usage and tokens',
      desc:
        'Semantic tokens adapt to light or dark theme (<code>data-bj-theme</code>). Prefer them to raw palette colors in interfaces.',
      'section-texte': 'Text and backgrounds',
      'section-bordures': 'Borders and actions',
      'section-fonctionnelles': 'Functional colors',
      'th-jeton': 'Token',
      'th-clair': 'Light theme',
      'th-sombre': 'Dark theme',
      'th-role': 'Role',
      'texte-intro':
        'The variables below map the raw palette to roles that read well in administrative contexts.',
      'fonc-intro':
        'Use these tokens for info, success, warning and error states (text, borders, icons). Backgrounds use the <code>-bg</code> suffix.',
      'role-info': 'Information',
      'role-info-bg': 'Info background',
      'role-success': 'Success',
      'role-success-bg': 'Success background',
      'role-warning': 'Warning',
      'role-warning-bg': 'Warning background',
      'role-error': 'Error',
      'role-error-bg': 'Error background',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt" v-html="t('desc')" />

  <DocsSection id="texte-et-fonds" :title="t('section-texte')">
    <p>
      {{ t('texte-intro') }}
    </p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('th-jeton') }}</th>
          <th>{{ t('th-clair') }}</th>
          <th>{{ t('th-sombre') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-text-default</code></td>
          <td><code>var(--bj-color-gris-50)</code></td>
          <td><code>var(--bj-color-gris-975)</code></td>
        </tr>
        <tr>
          <td><code>--bj-text-title</code></td>
          <td><code>var(--bj-color-gris-50)</code></td>
          <td><code>var(--bj-color-gris-1000)</code></td>
        </tr>
        <tr>
          <td><code>--bj-text-alt</code></td>
          <td><code>var(--bj-color-gris-425)</code></td>
          <td><code>var(--bj-color-gris-850)</code></td>
        </tr>
        <tr>
          <td><code>--bj-text-mention</code></td>
          <td><code>var(--bj-color-gris-625)</code></td>
          <td><code>var(--bj-color-gris-750)</code></td>
        </tr>
        <tr>
          <td><code>--bj-text-disabled</code></td>
          <td><code>var(--bj-color-gris-750)</code></td>
          <td><code>var(--bj-color-gris-625)</code></td>
        </tr>
        <tr>
          <td><code>--bj-text-inverted</code></td>
          <td><code>var(--bj-color-gris-1000)</code></td>
          <td><code>var(--bj-color-gris-50)</code></td>
        </tr>
        <tr>
          <td><code>--bj-bg-default</code></td>
          <td><code>var(--bj-color-gris-1000)</code></td>
          <td><code>var(--bj-color-gris-50)</code></td>
        </tr>
        <tr>
          <td><code>--bj-bg-alt</code></td>
          <td><code>var(--bj-color-gris-975)</code></td>
          <td><code>var(--bj-color-gris-100)</code></td>
        </tr>
        <tr>
          <td><code>--bj-bg-contrast</code></td>
          <td><code>var(--bj-color-gris-50)</code></td>
          <td><code>var(--bj-color-gris-975)</code></td>
        </tr>
        <tr>
          <td><code>--bj-bg-elevated</code></td>
          <td><code>var(--bj-color-gris-1000)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-bg-disabled</code></td>
          <td><code>var(--bj-color-gris-925)</code></td>
          <td><code>var(--bj-color-gris-425)</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="bordures-actions" :title="t('section-bordures')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('th-jeton') }}</th>
          <th>{{ t('th-clair') }}</th>
          <th>{{ t('th-sombre') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-border-default</code></td>
          <td><code>var(--bj-color-gris-900)</code></td>
          <td><code>var(--bj-color-gris-425)</code></td>
        </tr>
        <tr>
          <td><code>--bj-border-strong</code></td>
          <td><code>var(--bj-color-gris-50)</code></td>
          <td><code>var(--bj-color-gris-975)</code></td>
        </tr>
        <tr>
          <td><code>--bj-border-subtle</code></td>
          <td><code>var(--bj-color-gris-925)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-border-disabled</code></td>
          <td><code>var(--bj-color-gris-900)</code></td>
          <td><code>var(--bj-color-gris-425)</code></td>
        </tr>
        <tr>
          <td><code>--bj-action-high</code></td>
          <td><code>var(--bj-color-vert-benin-main-491)</code></td>
          <td><code>var(--bj-color-vert-benin-moon-680)</code></td>
        </tr>
        <tr>
          <td><code>--bj-action-high-hover</code></td>
          <td><code>var(--bj-color-vert-benin-sun-340)</code></td>
          <td><code>var(--bj-color-vert-benin-850)</code></td>
        </tr>
        <tr>
          <td><code>--bj-action-high-active</code></td>
          <td><code>var(--bj-color-vert-benin-425)</code></td>
          <td><code>var(--bj-color-vert-benin-moon-680)</code></td>
        </tr>
        <tr>
          <td><code>--bj-action-low</code></td>
          <td><code>var(--bj-color-vert-benin-975)</code></td>
          <td><code>var(--bj-color-vert-benin-sun-340)</code></td>
        </tr>
        <tr>
          <td><code>--bj-action-low-hover</code></td>
          <td><code>var(--bj-color-vert-benin-925)</code></td>
          <td><code>var(--bj-color-vert-benin-425)</code></td>
        </tr>
        <tr>
          <td><code>--bj-accent</code></td>
          <td><code>var(--bj-color-jaune-benin-main-822)</code></td>
          <td><code>var(--bj-color-jaune-benin-moon-850)</code></td>
        </tr>
        <tr>
          <td><code>--bj-accent-text</code></td>
          <td><code>var(--bj-color-jaune-benin-sun-600)</code></td>
          <td><code>var(--bj-color-jaune-benin-moon-850)</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="couleurs-fonctionnelles" :title="t('section-fonctionnelles')">
    <p v-html="t('fonc-intro')" />
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('th-jeton') }}</th>
          <th>{{ t('th-role') }}</th>
          <th>{{ t('th-clair') }}</th>
          <th>{{ t('th-sombre') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-info</code></td>
          <td>{{ t('role-info') }}</td>
          <td><code>var(--bj-color-info-main-500)</code></td>
          <td><code>var(--bj-color-info-moon-625)</code></td>
        </tr>
        <tr>
          <td><code>--bj-info-bg</code></td>
          <td>{{ t('role-info-bg') }}</td>
          <td><code>var(--bj-color-info-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-success</code></td>
          <td>{{ t('role-success') }}</td>
          <td><code>var(--bj-color-succes-main-460)</code></td>
          <td><code>var(--bj-color-succes-moon-640)</code></td>
        </tr>
        <tr>
          <td><code>--bj-success-bg</code></td>
          <td>{{ t('role-success-bg') }}</td>
          <td><code>var(--bj-color-succes-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-warning</code></td>
          <td>{{ t('role-warning') }}</td>
          <td><code>var(--bj-color-alerte-main-510)</code></td>
          <td><code>var(--bj-color-alerte-moon-640)</code></td>
        </tr>
        <tr>
          <td><code>--bj-warning-bg</code></td>
          <td>{{ t('role-warning-bg') }}</td>
          <td><code>var(--bj-color-alerte-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-error</code></td>
          <td>{{ t('role-error') }}</td>
          <td><code>var(--bj-color-erreur-main-510)</code></td>
          <td><code>var(--bj-color-erreur-moon-640)</code></td>
        </tr>
        <tr>
          <td><code>--bj-error-bg</code></td>
          <td>{{ t('role-error-bg') }}</td>
          <td><code>var(--bj-color-erreur-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
      </tbody>
    </table>
    <DocsPreview
      style="margin-top: var(--bj-spacing-4v)"
    >
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-md-6">
          <p class="bj-text-info bj-text-semibold">
            <i class="ri-information-line"></i> Exemple info
          </p>
          <p
            class="bj-bg-info bj-p-3v"
            style="border-radius: var(--bj-radius-sm)"
          >
            Bloc avec <code>bj-bg-info</code>
          </p>
        </div>
        <div class="bj-col-12 bj-col-md-6">
          <p class="bj-text-success bj-text-semibold">
            <i class="ri-checkbox-circle-line"></i> Exemple succès
          </p>
          <p
            class="bj-bg-success bj-p-3v"
            style="border-radius: var(--bj-radius-sm)"
          >
            Bloc avec <code>bj-bg-success</code>
          </p>
        </div>
        <div class="bj-col-12 bj-col-md-6">
          <p class="bj-text-warning bj-text-semibold">
            <i class="ri-alert-line"></i> Exemple alerte
          </p>
          <p
            class="bj-bg-warning bj-p-3v"
            style="border-radius: var(--bj-radius-sm)"
          >
            Bloc avec <code>bj-bg-warning</code>
          </p>
        </div>
        <div class="bj-col-12 bj-col-md-6">
          <p class="bj-text-error bj-text-semibold">
            <i class="ri-error-warning-line"></i> Exemple erreur
          </p>
          <p
            class="bj-bg-error bj-p-3v"
            style="border-radius: var(--bj-radius-sm)"
          >
            Bloc avec <code>bj-bg-error</code>
          </p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>
</template>
