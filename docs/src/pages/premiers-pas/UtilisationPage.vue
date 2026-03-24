<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-6v)">
    {{ t('title') }}
  </h1>

  <DocsSection id="structure-html" :title="t('section-structure-html')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('structure-html-intro') }}
    </p>
    <DocsCode :code="structureHtmlSnippet" />
  </DocsSection>

  <DocsSection id="prefixe-css" :title="t('section-prefix')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('prefix-a') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >bj-</code
      >{{ t('prefix-b') }}
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
      >{{ t('prefix-c') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >--bj-</code
      >{{ t('prefix-d') }}
    </p>
  </DocsSection>

  <DocsSection id="theme-sombre" :title="t('section-theme')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('theme-a') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-theme</code
      >{{ t('theme-b') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >&lt;html&gt;</code
      >{{ t('theme-c') }}
    </p>
    <DocsCode code='<html lang="fr" data-bj-theme="dark">' />
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('theme-pref-a') }}<code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >prefers-color-scheme: dark</code
      >{{ t('theme-pref-b') }}
    </p>
    <DocsCode :code="themeOsSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('theme-user-a') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-theme="light"</code
      >{{ t('theme-user-b') }}
    </p>
  </DocsSection>

  <DocsSection id="init-js" :title="t('section-init')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('init-a') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dsbj.es.js</code
      >{{ t('init-b') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >DOMContentLoaded</code
      >{{ t('init-c') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-*</code
      >{{ t('init-d') }}
    </p>
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('init-label') }}<code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >data-bj-header-menu</code
      >{{ t('init-header-hint') }},
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
      >{{ t('init-tail') }}
    </p>
  </DocsSection>

  <DocsSection id="personnalisation" :title="t('section-custom')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('custom-a') }}
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >dsbj.css</code
      >{{ t('custom-b') }}
    </p>
    <DocsCode :code="customCssSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('custom-note') }}
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
      title: 'Utilisation',
      'section-structure-html': 'Structure HTML de base',
      'structure-html-intro':
        'Une page conforme au DSBJ repose sur une hiérarchie sémantique claire : en-tête de service, contenu principal identifiable, pied de page institutionnel. Les polices recommandées et les icônes peuvent être chargées depuis des réseaux de confiance, comme dans l’exemple ci-dessous.',
      'section-prefix': 'Préfixe CSS',
      'prefix-a': 'Toutes les classes livrées par le DSBJ sont préfixées par ',
      'prefix-b': ' (par exemple ',
      'prefix-c':
        '). Cette convention limite les collisions avec les feuilles de style existantes et facilite l’audit de conformité. Les variables de thème suivent le préfixe ',
      'prefix-d': '.',
      'section-theme': 'Thème sombre',
      'theme-a': 'Le jeu de couleurs sombre s’active en positionnant l’attribut ',
      'theme-b': ' sur l’élément racine ',
      'theme-c':
        '. Vous pouvez l’aligner sur la préférence système de l’utilisateur au moyen d’une requête média CSS.',
      'theme-pref-a':
        'Pour suivre la préférence « thème sombre » du système (',
      'theme-pref-b':
        '), adaptez l’attribut lors du chargement et lors des changements de préférence, par exemple :',
      'theme-user-a':
        'Lorsque l’utilisateur impose un mode dans les paramètres du site, conservez sa valeur (par exemple ',
      'theme-user-b':
        ') et n’écrasez pas ce choix avec la détection système.',
      'section-init': 'Initialisation JavaScript',
      'init-a': 'Lorsque le module ',
      'init-b':
        ' est chargé dans le navigateur, le script enregistre les comportements interactifs et exécute une initialisation globale au moment du ',
      'init-c':
        ' (ou immédiatement si le document est déjà prêt). Les composants concernés s’appuient sur des attributs ',
      'init-d':
        ' pour relier le balisage aux gestionnaires d’événements.',
      'init-label': 'Exemples d’attributs : ',
      'init-header-hint': ' (menu mobile de l’en-tête)',
      'init-tail':
        '. Référez-vous à la documentation des composants pour la liste exhaustive et les valeurs attendues.',
      'section-custom': 'Personnalisation',
      'custom-a':
        'Les couleurs, espacements et typographies sont exposés sous forme de variables CSS. Vous pouvez les redéfinir après l’import de ',
      'custom-b':
        ' pour adapter l’apparence tout en conservant la structure des composants.',
      'custom-note':
        'Pour des ajustements systématiques à la charte d’un ministère, la compilation depuis les sources SCSS et la surcharge des jetons en amont restent les approches recommandées.',
    },
    en: {
      title: 'Usage',
      'section-structure-html': 'Basic HTML structure',
      'structure-html-intro':
        'A DSBJ-compliant page relies on clear semantic hierarchy: a service header, identifiable main content, and an institutional footer. Recommended fonts and icons can be loaded from trusted networks, as in the example below.',
      'section-prefix': 'CSS prefix',
      'prefix-a': 'All classes shipped by DSBJ are prefixed with ',
      'prefix-b': ' (for example ',
      'prefix-c':
        '). This limits collisions with existing stylesheets and makes compliance audits easier. Theme variables use the ',
      'prefix-d': ' prefix.',
      'section-theme': 'Dark theme',
      'theme-a': 'The dark palette is enabled by setting the ',
      'theme-b': ' attribute on the root ',
      'theme-c':
        ' element. You can align it with the user’s system preference using a CSS media query.',
      'theme-pref-a': 'To follow the system’s “dark theme” preference (',
      'theme-pref-b':
        '), update the attribute on load and whenever the preference changes, for example:',
      'theme-user-a':
        'When the user sets a mode in site settings, keep that value (for example ',
      'theme-user-b':
        ') and do not override it with system detection.',
      'section-init': 'JavaScript initialization',
      'init-a': 'When the ',
      'init-b':
        ' module loads in the browser, the script registers interactive behaviors and runs a global initialization at ',
      'init-c':
        ' (or immediately if the document is already ready). Components rely on ',
      'init-d':
        ' attributes to connect markup to event handlers.',
      'init-label': 'Example attributes: ',
      'init-header-hint': ' (mobile header menu)',
      'init-tail':
        '. See each component’s docs for the full list and expected values.',
      'section-custom': 'Customization',
      'custom-a':
        'Colors, spacing, and typography are exposed as CSS variables. You can override them after importing ',
      'custom-b':
        ' to adjust look and feel while keeping component structure.',
      'custom-note':
        'For systematic adjustments to a ministry’s brand guidelines, compiling from SCSS sources and overriding tokens upstream remain the recommended approaches.',
    },
  },
})

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
