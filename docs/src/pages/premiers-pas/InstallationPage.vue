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
    <p style="max-width: 40rem">
      {{ t('structure-scss-a') }}
      <code style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >@flrxnt/dsbj/scss</code
      >{{ t('structure-scss-b') }}
    </p>
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
      'section-cdn': 'CDN',
      'section-download': 'Téléchargement',
      'section-structure': 'Structure des fichiers',
      'npm-p1a': 'Le paquet officiel est publié sous le scope ',
      'npm-p1b':
        ". Il convient aux projets disposant d'une chaîne de build (bundler, framework ou outil de gestion des dépendances).",
      'npm-p2a':
        'Après installation, référencez la feuille de style et, le cas échéant, le module JavaScript selon les conventions de votre environnement (import ES, ',
      'npm-p2b':
        ' ou copie vers vos assets publics).',
      'cdn-p1a':
        'Pour une intégration rapide ou des prototypes, le réseau de distribution ',
      'cdn-p1b':
        ' sert les fichiers compilés du paquet. Indiquez une version explicite en production afin de garantir la reproductibilité des déploiements.',
      'cdn-p2a':
        "Le fichier UMD s'exécute dans le navigateur sans module loader. Pour les applications basées sur les modules ES natifs, vous pouvez pointer vers ",
      'cdn-p2b': ' de la même manière.',
      'download-p1a':
        'Il est également possible de récupérer les artefacts directement depuis le dépôt du projet ou depuis une archive de version, puis de placer le contenu du répertoire ',
      'download-p1b':
        ' sur votre serveur ou dans votre dépôt d’assets statiques. Cette approche est adaptée aux sites sans gestionnaire de paquets ou aux environnements contraints.',
      'structure-p1a': 'Le répertoire ',
      'structure-p1b': ' regroupe les livrables prêts pour la production.',
      'structure-li-css':
        ' - feuille de style unique du design système (composants, utilitaires, thèmes).',
      'structure-li-es':
        ' - entrée au format module ECMAScript ; initialisation automatique au chargement du document lorsque le script est chargé en ',
      'structure-li-es-end': '.',
      'structure-li-umd':
        ' - bundle universel compatible inclusion directe via balise ',
      'structure-li-umd-end': ' sans module.',
      'structure-scss-a':
        'Les projets qui compilent depuis les sources SCSS peuvent importer ',
      'structure-scss-b':
        ' pour personnaliser les jetons avant génération du CSS.',
    },
    en: {
      title: 'Installation',
      'section-npm': 'npm',
      'section-cdn': 'CDN',
      'section-download': 'Download',
      'section-structure': 'File structure',
      'npm-p1a': 'The official package is published under the ',
      'npm-p1b':
        ' scope. It suits projects that have a build pipeline (bundler, framework, or dependency manager).',
      'npm-p2a':
        'After installation, reference the stylesheet and, if needed, the JavaScript module according to your environment (ES import, ',
      'npm-p2b': ', or copy into your public assets).',
      'cdn-p1a':
        'For quick integration or prototypes, the ',
      'cdn-p1b':
        ' CDN serves the package’s compiled files. Pin an explicit version in production so deployments stay reproducible.',
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
        ' — single design-system stylesheet (components, utilities, themes).',
      'structure-li-es':
        ' — ECMAScript module entry; auto-initializes on document load when the script is loaded with ',
      'structure-li-es-end': '.',
      'structure-li-umd':
        ' — universal bundle for direct inclusion via a ',
      'structure-li-umd-end': ' tag without a module system.',
      'structure-scss-a':
        'Projects that compile from SCSS sources can import ',
      'structure-scss-b':
        ' to override tokens before CSS is generated.',
    },
  },
})

const cdnSnippet = `<link rel="stylesheet" href="https://unpkg.com/@flrxnt/dsbj@1.0.0/dist/dsbj.css">
<script src="https://unpkg.com/@flrxnt/dsbj@1.0.0/dist/dsbj.umd.js"><\/script>`
</script>
