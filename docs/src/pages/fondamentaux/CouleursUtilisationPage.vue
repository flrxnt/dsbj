<script setup lang="ts">
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
</script>

<template>
  <h1 class="bj-h1">Couleurs - utilisation et jetons</h1>
  <p class="bj-text-md bj-text-alt">
    Les jetons sémantiques s’adaptent au thème clair ou sombre
    (<code>data-bj-theme</code>). Préférez-les aux couleurs de palette
    directes dans les interfaces.
  </p>

  <DocsSection id="texte-et-fonds" title="Texte et fonds">
    <p>
      Les variables ci-dessous mappent la palette brute vers des rôles
      lisibles en contexte administratif.
    </p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>Jeton</th>
          <th>Thème clair</th>
          <th>Thème sombre</th>
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

  <DocsSection id="bordures-actions" title="Bordures et actions">
    <table class="docs-props">
      <thead>
        <tr>
          <th>Jeton</th>
          <th>Thème clair</th>
          <th>Thème sombre</th>
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

  <DocsSection id="couleurs-fonctionnelles" title="Couleurs fonctionnelles">
    <p>
      Utilisez ces jetons pour les états informatifs, de succès,
      d’avertissement et d’erreur (texte, bordures, icônes). Les fonds
      associés portent le suffixe <code>-bg</code>.
    </p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>Jeton</th>
          <th>Rôle</th>
          <th>Thème clair</th>
          <th>Thème sombre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-info</code></td>
          <td>Information</td>
          <td><code>var(--bj-color-info-main-500)</code></td>
          <td><code>var(--bj-color-info-moon-625)</code></td>
        </tr>
        <tr>
          <td><code>--bj-info-bg</code></td>
          <td>Fond info</td>
          <td><code>var(--bj-color-info-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-success</code></td>
          <td>Succès</td>
          <td><code>var(--bj-color-succes-main-460)</code></td>
          <td><code>var(--bj-color-succes-moon-640)</code></td>
        </tr>
        <tr>
          <td><code>--bj-success-bg</code></td>
          <td>Fond succès</td>
          <td><code>var(--bj-color-succes-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-warning</code></td>
          <td>Alerte</td>
          <td><code>var(--bj-color-alerte-main-510)</code></td>
          <td><code>var(--bj-color-alerte-moon-640)</code></td>
        </tr>
        <tr>
          <td><code>--bj-warning-bg</code></td>
          <td>Fond alerte</td>
          <td><code>var(--bj-color-alerte-975)</code></td>
          <td><code>var(--bj-color-gris-200)</code></td>
        </tr>
        <tr>
          <td><code>--bj-error</code></td>
          <td>Erreur</td>
          <td><code>var(--bj-color-erreur-main-510)</code></td>
          <td><code>var(--bj-color-erreur-moon-640)</code></td>
        </tr>
        <tr>
          <td><code>--bj-error-bg</code></td>
          <td>Fond erreur</td>
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
