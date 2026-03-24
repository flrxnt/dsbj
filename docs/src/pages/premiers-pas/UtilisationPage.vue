<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-6v)">
    Utilisation
  </h1>

  <DocsSection id="structure-html" title="Structure HTML de base">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Une page conforme au DSBJ repose sur une hiérarchie sémantique
      claire : en-tête de service, contenu principal identifiable, pied
      de page institutionnel. Les polices recommandées et les icônes
      peuvent être chargées depuis des réseaux de confiance, comme dans
      l’exemple ci-dessous.
    </p>
    <DocsCode :code="structureHtmlSnippet" />
  </DocsSection>

  <DocsSection id="prefixe-css" title="Préfixe CSS">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Toutes les classes livrées par le DSBJ sont préfixées par
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >bj-</code
      >
      (par exemple
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >bj-btn</code
      >,
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >bj-card</code
      >,
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >bj-header</code
      >). Cette convention limite les collisions avec les feuilles de
      style existantes et facilite l’audit de conformité. Les variables
      de thème suivent le préfixe
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >--bj-</code
      >.
    </p>
  </DocsSection>

  <DocsSection id="theme-sombre" title="Thème sombre">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Le jeu de couleurs sombre s’active en positionnant l’attribut
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-theme</code
      >
      sur l’élément racine
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >&lt;html&gt;</code
      >. Vous pouvez l’aligner sur la préférence système de
      l’utilisateur au moyen d’une requête média CSS.
    </p>
    <DocsCode code='<html lang="fr" data-bj-theme="dark">' />
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Pour suivre la préférence « thème sombre » du système (<code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >prefers-color-scheme: dark</code
      >), adaptez l’attribut lors du chargement et lors des changements
      de préférence, par exemple :
    </p>
    <DocsCode :code="themeOsSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      Lorsque l’utilisateur impose un mode dans les paramètres du site,
      conservez sa valeur (par exemple
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-theme="light"</code
      >) et n’écrasez pas ce choix avec la détection système.
    </p>
  </DocsSection>

  <DocsSection id="init-js" title="Initialisation JavaScript">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Lorsque le module
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dsbj.es.js</code
      >
      est chargé dans le navigateur, le script enregistre les
      comportements interactifs et exécute une initialisation globale au
      moment du
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >DOMContentLoaded</code
      >
      (ou immédiatement si le document est déjà prêt). Les composants
      concernés s’appuient sur des attributs
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-*</code
      >
      pour relier le balisage aux gestionnaires d’événements.
    </p>
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Exemples d’attributs :
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-header-menu</code
      >
      (menu mobile de l’en-tête),
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-accordion-btn</code
      >,
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-modal-open</code
      >,
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-tabs</code
      >,
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-toggle</code
      >. Référez-vous à la documentation des composants pour la liste
      exhaustive et les valeurs attendues.
    </p>
  </DocsSection>

  <DocsSection id="personnalisation" title="Personnalisation">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Les couleurs, espacements et typographies sont exposés sous forme
      de variables CSS. Vous pouvez les redéfinir après l’import de
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dsbj.css</code
      >
      pour adapter l’apparence tout en conservant la structure des
      composants.
    </p>
    <DocsCode :code="customCssSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      Pour des ajustements systématiques à la charte d’un ministère, la
      compilation depuis les sources SCSS et la surcharge des jetons en
      amont restent les approches recommandées.
    </p>
  </DocsSection>
</template>

<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const structureHtmlSnippet = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon service - République du Bénin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet">
  <link rel="stylesheet" href="chemin/vers/dsbj.css">
</head>
<body>
  <header class="bj-header" role="banner">
    <!-- Marque de l'État et navigation -->
  </header>
  <main id="main" role="main">
    <!-- Contenu du service -->
  </main>
  <footer class="bj-footer" role="contentinfo">
    <!-- Liens institutionnels et mentions -->
  </footer>
  <script src="chemin/vers/dsbj.es.js" type="module"><\/script>
</body>
</html>`

const themeOsSnippet = `const mq = window.matchMedia('(prefers-color-scheme: dark)');
function syncThemeFromOs() {
  document.documentElement.setAttribute(
    'data-bj-theme',
    mq.matches ? 'dark' : 'light'
  );
}
mq.addEventListener('change', syncThemeFromOs);
syncThemeFromOs();`

const customCssSnippet = `:root {
  --bj-action-high: #1a5f3c;
  --bj-radius-sm: 6px;
}`
</script>
