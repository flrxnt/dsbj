<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-6v)">
    {{ t('title') }}
  </h1>

  <DocsSection id="integration" :title="t('section-integration')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('integration-a') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >.bj-*</code
      >{{ t('integration-b') }}
    </p>
    <DocsCode :code="integrationSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('integration-reset-a') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >@flrxnt/dsbj/reset</code
      >{{ t('integration-reset-b') }}
    </p>
    <DocsCode :code="resetSnippet" />
  </DocsSection>

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
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >bj-</code
      >{{ t('prefix-b') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >bj-btn</code
      >,
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >bj-card</code
      >,
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >bj-header</code
      >{{ t('prefix-c') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >--bj-</code
      >{{ t('prefix-d') }}
    </p>
    <p style="max-width: 40rem">
      {{ t('prefix-scope') }}
    </p>
  </DocsSection>

  <DocsSection id="polices" :title="t('section-fonts')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('fonts-intro') }}
    </p>
    <DocsCode :code="fontsSnippet" />
  </DocsSection>

  <DocsSection id="theme-sombre" :title="t('section-theme')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('theme-a') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-theme</code
      >{{ t('theme-b') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >&lt;html&gt;</code
      >{{ t('theme-c') }}
    </p>
    <DocsCode code='<html lang="fr" data-bj-theme="dark">' />
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('theme-pref-a') }}<code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >prefers-color-scheme: dark</code
      >{{ t('theme-pref-b') }}
    </p>
    <DocsCode :code="themeOsSnippet" />
    <p style="margin-top: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('theme-user-a') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-theme="light"</code
      >{{ t('theme-user-b') }}
    </p>
  </DocsSection>

  <DocsSection id="init-js" :title="t('section-init')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('init-a') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >dsbj.es.js</code
      >{{ t('init-b') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >DOMContentLoaded</code
      >{{ t('init-c') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-*</code
      >{{ t('init-d') }}
    </p>
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('init-label') }}<code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-header-menu</code
      >{{ t('init-header-hint') }},
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-accordion-btn</code
      >,
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-modal-open</code
      >,
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-tabs</code
      >,
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
        >data-bj-toggle</code
      >{{ t('init-tail') }}
    </p>
  </DocsSection>

  <DocsSection id="personnalisation" :title="t('section-custom')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('custom-a') }}
      <code
        style="font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm)"
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
      'section-integration': 'Int\u00e9gration',
      'integration-a':
        "Le DSBJ s'int\u00e8gre dans n'importe quel projet sans affecter les styles existants. Les styles sont scop\u00e9s aux classes ",
      'integration-b':
        " : seuls les \u00e9l\u00e9ments utilisant ces classes (et leurs enfants) re\u00e7oivent les styles du design syst\u00e8me.",
      'integration-reset-a':
        "Pour les sites institutionnels o\u00f9 le DSBJ est le framework principal, ajoutez le reset global via ",
      'integration-reset-b':
        " pour styliser \u00e9galement body, h1-h6, p, a, table, etc.",
      'section-structure-html': 'Structure HTML de base',
      'structure-html-intro':
        "Une page conforme au DSBJ repose sur une hi\u00e9rarchie s\u00e9mantique claire : en-t\u00eate de service, contenu principal identifiable, pied de page institutionnel. Les polices recommand\u00e9es et les ic\u00f4nes peuvent \u00eatre charg\u00e9es depuis des r\u00e9seaux de confiance, comme dans l\u2019exemple ci-dessous.",
      'section-prefix': 'Pr\u00e9fixe CSS',
      'prefix-a': 'Toutes les classes livr\u00e9es par le DSBJ sont pr\u00e9fix\u00e9es par ',
      'prefix-b': ' (par exemple ',
      'prefix-c':
        "). Cette convention limite les collisions avec les feuilles de style existantes et facilite l\u2019audit de conformit\u00e9. Les variables de th\u00e8me suivent le pr\u00e9fixe ",
      'prefix-d': '.',
      'prefix-scope':
        "Gr\u00e2ce au syst\u00e8me de scoping, le DSBJ ne modifie aucun \u00e9l\u00e9ment HTML qui ne porte pas de classe .bj-*. Vous pouvez l\u2019int\u00e9grer en toute s\u00e9curit\u00e9 dans un projet existant utilisant Bootstrap, Tailwind ou tout autre framework CSS.",
      'section-fonts': 'Polices',
      'fonts-intro':
        "Le DSBJ utilise Open Sans comme police principale. Ajoutez-la dans votre <head> si elle n'est pas d\u00e9j\u00e0 charg\u00e9e :",
      'section-theme': 'Th\u00e8me sombre',
      'theme-a': "Le jeu de couleurs sombre s\u2019active en positionnant l\u2019attribut ",
      'theme-b': " sur l\u2019\u00e9l\u00e9ment racine ",
      'theme-c':
        ". Vous pouvez l\u2019aligner sur la pr\u00e9f\u00e9rence syst\u00e8me de l\u2019utilisateur au moyen d\u2019une requ\u00eate m\u00e9dia CSS.",
      'theme-pref-a':
        "Pour suivre la pr\u00e9f\u00e9rence \u00ab th\u00e8me sombre \u00bb du syst\u00e8me (",
      'theme-pref-b':
        "), adaptez l\u2019attribut lors du chargement et lors des changements de pr\u00e9f\u00e9rence, par exemple :",
      'theme-user-a':
        "Lorsque l\u2019utilisateur impose un mode dans les param\u00e8tres du site, conservez sa valeur (par exemple ",
      'theme-user-b':
        ") et n\u2019\u00e9crasez pas ce choix avec la d\u00e9tection syst\u00e8me.",
      'section-init': 'Initialisation JavaScript',
      'init-a': 'Lorsque le module ',
      'init-b':
        " est charg\u00e9 dans le navigateur, le script enregistre les comportements interactifs et ex\u00e9cute une initialisation globale au moment du ",
      'init-c':
        " (ou imm\u00e9diatement si le document est d\u00e9j\u00e0 pr\u00eat). Les composants concern\u00e9s s\u2019appuient sur des attributs ",
      'init-d':
        " pour relier le balisage aux gestionnaires d\u2019\u00e9v\u00e9nements.",
      'init-label': "Exemples d\u2019attributs : ",
      'init-header-hint': " (menu mobile de l\u2019en-t\u00eate)",
      'init-tail':
        ". R\u00e9f\u00e9rez-vous \u00e0 la documentation des composants pour la liste exhaustive et les valeurs attendues.",
      'section-custom': 'Personnalisation',
      'custom-a':
        "Les couleurs, espacements et typographies sont expos\u00e9s sous forme de variables CSS. Vous pouvez les red\u00e9finir apr\u00e8s l\u2019import de ",
      'custom-b':
        " pour adapter l\u2019apparence tout en conservant la structure des composants.",
      'custom-note':
        "Pour des ajustements syst\u00e9matiques \u00e0 la charte d\u2019un minist\u00e8re, la compilation depuis les sources SCSS et la surcharge des jetons en amont restent les approches recommand\u00e9es.",
    },
    en: {
      title: 'Usage',
      'section-integration': 'Integration',
      'integration-a':
        'DSBJ integrates into any project without affecting existing styles. Styles are scoped to ',
      'integration-b':
        ' classes: only elements using these classes (and their children) receive design system styles.',
      'integration-reset-a':
        'For institutional sites where DSBJ is the primary framework, add the global reset via ',
      'integration-reset-b':
        ' to also style body, h1-h6, p, a, table, etc.',
      'section-structure-html': 'Basic HTML structure',
      'structure-html-intro':
        "A DSBJ-compliant page relies on clear semantic hierarchy: a service header, identifiable main content, and an institutional footer. Recommended fonts and icons can be loaded from trusted networks, as in the example below.",
      'section-prefix': 'CSS prefix',
      'prefix-a': 'All classes shipped by DSBJ are prefixed with ',
      'prefix-b': ' (for example ',
      'prefix-c':
        '). This limits collisions with existing stylesheets and makes compliance audits easier. Theme variables use the ',
      'prefix-d': ' prefix.',
      'prefix-scope':
        'Thanks to the scoping system, DSBJ does not modify any HTML element that does not carry a .bj-* class. You can safely integrate it into an existing project using Bootstrap, Tailwind, or any other CSS framework.',
      'section-fonts': 'Fonts',
      'fonts-intro':
        "DSBJ uses Open Sans as its primary font. Add it to your <head> if it's not already loaded:",
      'section-theme': 'Dark theme',
      'theme-a': 'The dark palette is enabled by setting the ',
      'theme-b': ' attribute on the root ',
      'theme-c':
        " element. You can align it with the user\u2019s system preference using a CSS media query.",
      'theme-pref-a': "To follow the system\u2019s \u201cdark theme\u201d preference (",
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
        ". See each component\u2019s docs for the full list and expected values.",
      'section-custom': 'Customization',
      'custom-a':
        'Colors, spacing, and typography are exposed as CSS variables. You can override them after importing ',
      'custom-b':
        ' to adjust look and feel while keeping component structure.',
      'custom-note':
        "For systematic adjustments to a ministry\u2019s brand guidelines, compiling from SCSS sources and overriding tokens upstream remain the recommended approaches.",
    },
  },
})

const integrationSnippet = `// Dans votre fichier JS/TS principal
import '@flrxnt/dsbj';

// Le CSS est automatiquement charg\u00e9.
// Utilisez les composants avec les classes .bj-*`

const resetSnippet = `import '@flrxnt/dsbj/reset';`

const fontsSnippet = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">`

const structureHtmlSnippet = `<!DOCTYPE html>
<html lang="fr" data-bj-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon service - R\u00e9publique du B\u00e9nin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet">
  <link rel="stylesheet" href="chemin/vers/dsbj.css">
  <!-- Optionnel : reset global pour projets 100% DSBJ -->
  <!-- <link rel="stylesheet" href="chemin/vers/dsbj-reset.css"> -->
</head>
<body>
  <header class="bj-header" role="banner">
    <!-- Marque de l'\u00c9tat et navigation -->
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
