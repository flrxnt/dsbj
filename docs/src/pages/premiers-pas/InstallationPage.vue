<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-6v)">
    {{ t('title') }}
  </h1>

  <DocsSection id="npm" :title="t('section-npm')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('npm-p1a') }}
      <code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >@flrxnt</code
      >{{ t('npm-p1b') }}
    </p>
    <DocsCode code="npm install @flrxnt/dsbj" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('npm-p2a') }}
      <code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >require</code
      >{{ t('npm-p2b') }}
    </p>
  </DocsSection>

  <DocsSection id="integration" :title="t('section-integration')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('integration-intro') }}
    </p>
    <DocsCode :code="integrationSnippet" />
    <div
      class="bj-callout bj-callout--info"
      style="margin-top: var(--bj-spacing-4v); max-width: 40rem"
    >
      <p>{{ t('integration-safe') }}</p>
    </div>
  </DocsSection>

  <DocsSection id="reset" :title="t('section-reset')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('reset-intro') }}
    </p>
    <DocsCode :code="resetSnippet" />
    <div
      class="bj-callout bj-callout--warning"
      style="margin-top: var(--bj-spacing-4v); max-width: 40rem"
    >
      <p>{{ t('reset-warning') }}</p>
    </div>
  </DocsSection>

  <DocsSection id="cdn" :title="t('section-cdn')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('cdn-p1a') }}<strong>unpkg</strong>{{ t('cdn-p1b') }}
    </p>
    <DocsCode :code="cdnSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('cdn-p2a') }}
      <code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >dist/dsbj.es.js</code
      >{{ t('cdn-p2b') }}
    </p>
  </DocsSection>

  <DocsSection id="telechargement" :title="t('section-download')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('download-p1a') }}
      <code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >dist/</code
      >{{ t('download-p1b') }}
    </p>
  </DocsSection>

  <DocsSection id="structure" :title="t('section-structure')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('structure-p1a') }}
      <code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >dist/</code
      >{{ t('structure-p1b') }}
    </p>
    <div
      class="bj-content"
      style="margin-bottom: var(--bj-spacing-4v); max-width: 40rem"
    >
      <ul>
        <li>
          <strong>dsbj.css</strong>{{ t('structure-li-css') }}
        </li>
        <li>
          <strong>dsbj-reset.css</strong>{{ t('structure-li-reset') }}
        </li>
        <li>
          <strong>dsbj.es.js</strong>{{ t('structure-li-es') }}
          <code
            style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
            >type="module"</code
          >{{ t('structure-li-es-end') }}
        </li>
        <li>
          <strong>dsbj.umd.js</strong>{{ t('structure-li-umd') }}
          <code
            style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
            >&lt;script&gt;</code
          >{{ t('structure-li-umd-end') }}
        </li>
      </ul>
    </div>

    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">{{ t('section-exports') }}</h3>
    <div class="bj-table" style="max-width: 48rem">
      <table>
        <thead>
          <tr>
            <th>Import</th>
            <th>{{ t('exports-col-content') }}</th>
            <th>{{ t('exports-col-usage') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)">@flrxnt/dsbj</code></td>
            <td>{{ t('exports-main-content') }}</td>
            <td>{{ t('exports-main-usage') }}</td>
          </tr>
          <tr>
            <td><code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)">@flrxnt/dsbj/css</code></td>
            <td>{{ t('exports-css-content') }}</td>
            <td>{{ t('exports-css-usage') }}</td>
          </tr>
          <tr>
            <td><code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)">@flrxnt/dsbj/reset</code></td>
            <td>{{ t('exports-reset-content') }}</td>
            <td>{{ t('exports-reset-usage') }}</td>
          </tr>
          <tr>
            <td><code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)">@flrxnt/dsbj/scss</code></td>
            <td>{{ t('exports-scss-content') }}</td>
            <td>{{ t('exports-scss-usage') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DocsSection>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Installation',
      'section-npm': 'npm',
      'section-integration': 'Int\u00e9gration dans un projet existant',
      'section-reset': 'Projet 100\u00a0% DSBJ',
      'section-cdn': 'CDN',
      'section-download': 'T\u00e9l\u00e9chargement',
      'section-structure': 'Structure des fichiers',
      'section-exports': "Points d'entr\u00e9e disponibles",
      'npm-p1a': 'Le paquet officiel est publi\u00e9 sous le scope ',
      'npm-p1b':
        ". Il convient aux projets disposant d'une cha\u00eene de build (bundler, framework ou outil de gestion des d\u00e9pendances).",
      'npm-p2a':
        'Apr\u00e8s installation, r\u00e9f\u00e9rencez la feuille de style et, le cas \u00e9ch\u00e9ant, le module JavaScript selon les conventions de votre environnement (import ES, ',
      'npm-p2b': ' ou copie vers vos assets publics).',
      'integration-intro':
        "Le DSBJ est con\u00e7u pour coexister avec votre CSS existant. Tous les styles sont scop\u00e9s aux classes .bj-* : aucun reset global, aucun style sur body, h1, p, a ou table. Votre interface n'est pas modifi\u00e9e.",
      'integration-safe':
        "Seuls les \u00e9l\u00e9ments portant une classe .bj-* (et leurs enfants) re\u00e7oivent les styles du design syst\u00e8me. Le reste de votre application n'est pas affect\u00e9.",
      'reset-intro':
        'Si le DSBJ est le framework principal de votre projet (site institutionnel, portail public), vous pouvez activer le reset CSS global complet qui stylise body, h1-h6, p, a, table, etc.',
      'reset-warning':
        "Le reset modifie les styles de tous les \u00e9l\u00e9ments HTML. Ne l'utilisez pas si vous int\u00e9grez le DSBJ dans une application existante avec son propre CSS.",
      'cdn-p1a':
        'Pour une int\u00e9gration rapide ou des prototypes, le r\u00e9seau de distribution ',
      'cdn-p1b':
        " sert les fichiers compil\u00e9s du paquet. Indiquez une version explicite en production afin de garantir la reproductibilit\u00e9 des d\u00e9ploiements.",
      'cdn-p2a':
        "Le fichier UMD s'ex\u00e9cute dans le navigateur sans module loader. Pour les applications bas\u00e9es sur les modules ES natifs, vous pouvez pointer vers ",
      'cdn-p2b': " de la m\u00eame mani\u00e8re.",
      'download-p1a':
        "Il est \u00e9galement possible de r\u00e9cup\u00e9rer les artefacts directement depuis le d\u00e9p\u00f4t du projet ou depuis une archive de version, puis de placer le contenu du r\u00e9pertoire ",
      'download-p1b':
        " sur votre serveur ou dans votre d\u00e9p\u00f4t d\u2019assets statiques. Cette approche est adapt\u00e9e aux sites sans gestionnaire de paquets ou aux environnements contraints.",
      'structure-p1a': 'Le r\u00e9pertoire ',
      'structure-p1b': " regroupe les livrables pr\u00eats pour la production.",
      'structure-li-css':
        " \u2014 styles du design syst\u00e8me scop\u00e9s aux classes .bj-* (composants, utilitaires, th\u00e8mes). Compatible avec un CSS existant.",
      'structure-li-reset':
        " \u2014 reset CSS global (opt-in). Stylise body, h1-h6, p, a, table, etc. \u00c0 importer s\u00e9par\u00e9ment pour les projets 100\u00a0% DSBJ.",
      'structure-li-es':
        " \u2014 entr\u00e9e au format module ECMAScript ; initialisation automatique au chargement du document lorsque le script est charg\u00e9 en ",
      'structure-li-es-end': '.',
      'structure-li-umd':
        " \u2014 bundle universel compatible inclusion directe via balise ",
      'structure-li-umd-end': ' sans module.',
      'exports-col-content': 'Contenu',
      'exports-col-usage': 'Usage',
      'exports-main-content': 'CSS scop\u00e9 + JS',
      'exports-main-usage': 'Int\u00e9gration dans un projet existant',
      'exports-css-content': 'CSS scop\u00e9 seul',
      'exports-css-usage': 'Sans JavaScript',
      'exports-reset-content': 'Reset CSS global',
      'exports-reset-usage': 'Projet 100\u00a0% DSBJ uniquement',
      'exports-scss-content': 'Sources SCSS',
      'exports-scss-usage': 'Personnalisation avanc\u00e9e',
    },
    en: {
      title: 'Installation',
      'section-npm': 'npm',
      'section-integration': 'Integration in an existing project',
      'section-reset': '100% DSBJ project',
      'section-cdn': 'CDN',
      'section-download': 'Download',
      'section-structure': 'File structure',
      'section-exports': 'Available entry points',
      'npm-p1a': 'The official package is published under the ',
      'npm-p1b':
        ' scope. It suits projects that have a build pipeline (bundler, framework, or dependency manager).',
      'npm-p2a':
        'After installation, reference the stylesheet and, if needed, the JavaScript module according to your environment (ES import, ',
      'npm-p2b': ', or copy into your public assets).',
      'integration-intro':
        'DSBJ is designed to coexist with your existing CSS. All styles are scoped to .bj-* classes: no global reset, no styles on body, h1, p, a, or table. Your existing interface is not affected.',
      'integration-safe':
        'Only elements with a .bj-* class (and their children) receive design system styles. The rest of your application remains untouched.',
      'reset-intro':
        'If DSBJ is the primary framework for your project (institutional website, public portal), you can enable the full global CSS reset that styles body, h1-h6, p, a, table, etc.',
      'reset-warning':
        'The reset modifies styles of all HTML elements. Do not use it if you are integrating DSBJ into an existing application with its own CSS.',
      'cdn-p1a': 'For quick integration or prototypes, the ',
      'cdn-p1b':
        " CDN serves the package's compiled files. Pin an explicit version in production so deployments stay reproducible.",
      'cdn-p2a':
        'The UMD file runs in the browser without a module loader. For apps using native ES modules, you can point to ',
      'cdn-p2b': ' the same way.',
      'download-p1a':
        'You can also fetch artifacts from the project repository or a release archive, then place the contents of the ',
      'download-p1b':
        ' directory on your server or in your static asset store. This works well for sites without a package manager or in constrained environments.',
      'structure-p1a': 'The ',
      'structure-p1b': ' directory contains production-ready deliverables.',
      'structure-li-css':
        ' \u2014 design-system styles scoped to .bj-* classes (components, utilities, themes). Safe alongside existing CSS.',
      'structure-li-reset':
        ' \u2014 global CSS reset (opt-in). Styles body, h1-h6, p, a, table, etc. Import separately for 100% DSBJ projects.',
      'structure-li-es':
        ' \u2014 ECMAScript module entry; auto-initializes on document load when the script is loaded with ',
      'structure-li-es-end': '.',
      'structure-li-umd':
        ' \u2014 universal bundle for direct inclusion via a ',
      'structure-li-umd-end': ' tag without a module system.',
      'exports-col-content': 'Content',
      'exports-col-usage': 'Usage',
      'exports-main-content': 'Scoped CSS + JS',
      'exports-main-usage': 'Integration in an existing project',
      'exports-css-content': 'Scoped CSS only',
      'exports-css-usage': 'Without JavaScript',
      'exports-reset-content': 'Global CSS reset',
      'exports-reset-usage': '100% DSBJ projects only',
      'exports-scss-content': 'SCSS sources',
      'exports-scss-usage': 'Advanced customization',
    },
  },
})

const integrationSnippet = `import '@flrxnt/dsbj';

// Utilisez ensuite les composants DSBJ avec les classes .bj-*
// <button class="bj-btn bj-btn--primary">Valider</button>`

const resetSnippet = `import '@flrxnt/dsbj';
import '@flrxnt/dsbj/reset'; // Active le reset CSS global`

const cdnSnippet = `<link rel="stylesheet" href="https://unpkg.com/@flrxnt/dsbj/dist/dsbj.css">
<script src="https://unpkg.com/@flrxnt/dsbj/dist/dsbj.umd.js"><\/script>

<!-- Optionnel : reset global pour projets 100% DSBJ -->
<!-- <link rel="stylesheet" href="https://unpkg.com/@flrxnt/dsbj/dist/dsbj-reset.css"> -->`
</script>
