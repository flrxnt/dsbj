<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-6v)">
    Installation
  </h1>

  <DocsSection id="npm" title="npm">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Le paquet officiel est publié sous le scope
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >@gouvbj</code
      >. Il convient aux projets disposant d’une chaîne de build
      (bundler, framework ou outil de gestion des dépendances).
    </p>
    <DocsCode code="npm install @gouvbj/dsbj" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      Après installation, référencez la feuille de style et, le cas
      échéant, le module JavaScript selon les conventions de votre
      environnement (import ES,
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >require</code
      >
      ou copie vers vos assets publics).
    </p>
  </DocsSection>

  <DocsSection id="cdn" title="CDN">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Pour une intégration rapide ou des prototypes, le réseau de
      distribution <strong>unpkg</strong> sert les fichiers compilés du
      paquet. Indiquez une version explicite en production afin de
      garantir la reproductibilité des déploiements.
    </p>
    <DocsCode :code="cdnSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      Le fichier UMD s’exécute dans le navigateur sans module loader.
      Pour les applications basées sur les modules ES natifs, vous
      pouvez pointer vers
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dist/dsbj.es.js</code
      >
      de la même manière.
    </p>
  </DocsSection>

  <DocsSection id="telechargement" title="Téléchargement">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Il est également possible de récupérer les artefacts directement
      depuis le dépôt du projet ou depuis une archive de version, puis
      de placer le contenu du répertoire
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dist/</code
      >
      sur votre serveur ou dans votre dépôt d’assets statiques. Cette
      approche est adaptée aux sites sans gestionnaire de paquets ou aux
      environnements contraints.
    </p>
  </DocsSection>

  <DocsSection id="structure" title="Structure des fichiers">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Le répertoire
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dist/</code
      >
      regroupe les livrables prêts pour la production.
    </p>
    <div
      class="bj-content"
      style="margin-bottom: var(--bj-spacing-4v); max-width: 40rem"
    >
      <ul>
        <li>
          <strong>dsbj.css</strong> - feuille de style unique du design
          système (composants, utilitaires, thèmes).
        </li>
        <li>
          <strong>dsbj.es.js</strong> - entrée au format module
          ECMAScript ; initialisation automatique au chargement du
          document lorsque le script est chargé en
          <code
            style="
              font-family: var(--bj-font-mono);
              font-size: var(--bj-fs-sm);
            "
            >type="module"</code
          >.
        </li>
        <li>
          <strong>dsbj.umd.js</strong> - bundle universel compatible
          inclusion directe via balise
          <code
            style="
              font-family: var(--bj-font-mono);
              font-size: var(--bj-fs-sm);
            "
            >&lt;script&gt;</code
          >
          sans module.
        </li>
      </ul>
    </div>
    <p style="max-width: 40rem">
      Les projets qui compilent depuis les sources SCSS peuvent importer
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >@gouvbj/dsbj/scss</code
      >
      pour personnaliser les jetons avant génération du CSS.
    </p>
  </DocsSection>
</template>

<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const cdnSnippet = `<link rel="stylesheet" href="https://unpkg.com/@gouvbj/dsbj@1.0.0/dist/dsbj.css">
<script src="https://unpkg.com/@gouvbj/dsbj@1.0.0/dist/dsbj.umd.js"><\/script>`
</script>
