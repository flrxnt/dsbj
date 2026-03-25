<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-6v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-6v)">
    {{ t('intro') }}
  </p>

  <DocsSection id="override-css" :title="t('section-css')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('css-desc')" />
    <DocsCode :code="codeCssOverride" />
  </DocsSection>

  <DocsSection id="couleurs-semantiques" :title="t('section-semantic')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('semantic-desc')" />
    <DocsPropsTable :rows="semanticRows" :headers="['Variable', 'Description']" />
  </DocsSection>

  <DocsSection id="couleurs-action" :title="t('section-action')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('action-desc')" />
    <DocsPropsTable :rows="actionRows" :headers="['Variable', 'Description']" />
    <DocsCode :code="codeMinistry" />
  </DocsSection>

  <DocsSection id="couleurs-fonctionnelles" :title="t('section-functional')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('functional-desc') }}
    </p>
    <DocsPropsTable :rows="functionalRows" :headers="['Variable', 'Description']" />
  </DocsSection>

  <DocsSection id="typographie-espacement" :title="t('section-typo')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('typo-desc') }}
    </p>
    <DocsPropsTable :rows="typoRows" :headers="['Variable', 'Description']" />
    <DocsCode :code="codeTypo" />
  </DocsSection>

  <DocsSection id="theme-sombre" :title="t('section-dark')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('dark-desc')" />
    <DocsCode :code="codeDarkOverride" />
    <p style="margin-top: var(--bj-spacing-3v); max-width: 40rem" v-html="t('dark-auto')" />
  </DocsSection>

  <DocsSection id="theme-scope" :title="t('section-scoped')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('scoped-desc')" />
    <DocsCode :code="codeScopedTheme" />
  </DocsSection>

  <DocsSection id="scss-avance" :title="t('section-scss')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('scss-desc')" />
    <DocsCode :code="codeScssOverride" lang="scss" />
    <p style="margin-top: var(--bj-spacing-3v); max-width: 40rem" v-html="t('scss-build')" />
    <DocsCode :code="codeScssEntry" lang="scss" />
  </DocsSection>

  <DocsSection id="palette-complete" :title="t('section-palette')">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem" v-html="t('palette-desc')" />
    <DocsPropsTable :rows="paletteRows" :headers="['Famille', 'Description']" />
  </DocsSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Personnalisation',
      intro: 'Le DSBJ expose toutes ses couleurs, espacements et typographies sous forme de variables CSS. Vous pouvez les surcharger pour adapter le design system \u00e0 la charte de votre minist\u00e8re ou organisation.',
      'section-css': 'Surcharge CSS simple',
      'css-desc': 'Red\u00e9finissez les variables sur <code>:root</code> <strong>apr\u00e8s</strong> l\u2019import de <code>dsbj.css</code>. Tous les composants h\u00e9riteront automatiquement des nouvelles valeurs.',
      'section-semantic': 'Tokens s\u00e9mantiques de couleur',
      'semantic-desc': 'Ces variables contr\u00f4lent les couleurs de texte, fond et bordure utilis\u00e9es par tous les composants. Elles r\u00e9f\u00e9rencent la palette brute (<code>--bj-color-*</code>) mais peuvent \u00eatre remplac\u00e9es par toute valeur CSS valide.',
      'section-action': 'Couleurs d\u2019action',
      'action-desc': 'La couleur d\u2019action principale (<code>--bj-action-high</code>) est utilis\u00e9e par les boutons, liens, focus, et tout \u00e9l\u00e9ment interactif. C\u2019est la variable la plus impactante \u00e0 surcharger.',
      'section-functional': 'Couleurs fonctionnelles',
      'functional-desc': 'Ces couleurs indiquent les \u00e9tats syst\u00e8me (alerte, erreur, succ\u00e8s, info). Chaque \u00e9tat poss\u00e8de une couleur principale et un fond associ\u00e9.',
      'section-typo': 'Typographie et espacement',
      'typo-desc': 'Les variables de typographie et d\u2019espacement sont \u00e9galement surchargeables pour ajuster la densit\u00e9 visuelle du design system.',
      'section-dark': 'Th\u00e8me sombre personnalis\u00e9',
      'dark-desc': 'Pour modifier les couleurs <strong>uniquement en th\u00e8me sombre</strong>, ciblez le s\u00e9lecteur <code>[data-bj-theme="dark"]</code>. Vos surcharges n\u2019affecteront pas le th\u00e8me clair.',
      'dark-auto': 'Le th\u00e8me sombre s\u2019active \u00e9galement automatiquement si le syst\u00e8me de l\u2019utilisateur pr\u00e9f\u00e8re le mode sombre, sauf si <code>data-bj-theme="light"</code> est explicitement d\u00e9fini.',
      'section-scoped': 'Th\u00e8me cibl\u00e9 (par section)',
      'scoped-desc': 'Vous pouvez surcharger les variables sur un conteneur sp\u00e9cifique au lieu de <code>:root</code>. Cela permet d\u2019avoir des sections avec des couleurs diff\u00e9rentes sur la m\u00eame page.',
      'section-scss': 'Personnalisation avanc\u00e9e (SCSS)',
      'scss-desc': 'Pour une personnalisation compl\u00e8te, importez les sources SCSS et surchargez la palette ou les tokens s\u00e9mantiques en amont de la compilation. Cette approche est recommand\u00e9e pour les refontes minist\u00e9rielles.',
      'scss-build': 'Cr\u00e9ez ensuite votre propre fichier d\u2019entr\u00e9e SCSS pour compiler un th\u00e8me custom :',
      'section-palette': 'R\u00e9f\u00e9rence palette compl\u00e8te',
      'palette-desc': 'Voici les familles de couleurs brutes disponibles via <code>--bj-color-*</code>. Chaque famille poss\u00e8de plusieurs nuances allant du plus sombre (50) au plus clair (1000).',
    },
    en: {
      title: 'Customization',
      intro: 'DSBJ exposes all its colors, spacing, and typography as CSS variables. You can override them to adapt the design system to your ministry or organization\u2019s brand guidelines.',
      'section-css': 'Simple CSS override',
      'css-desc': 'Redefine variables on <code>:root</code> <strong>after</strong> importing <code>dsbj.css</code>. All components will automatically inherit the new values.',
      'section-semantic': 'Semantic color tokens',
      'semantic-desc': 'These variables control the text, background, and border colors used by all components. They reference the raw palette (<code>--bj-color-*</code>) but can be replaced with any valid CSS value.',
      'section-action': 'Action colors',
      'action-desc': 'The primary action color (<code>--bj-action-high</code>) is used by buttons, links, focus rings, and every interactive element. It\u2019s the most impactful variable to override.',
      'section-functional': 'Functional colors',
      'functional-desc': 'These colors indicate system states (alert, error, success, info). Each state has a main color and an associated background.',
      'section-typo': 'Typography and spacing',
      'typo-desc': 'Typography and spacing variables are also overridable to adjust the visual density of the design system.',
      'section-dark': 'Custom dark theme',
      'dark-desc': 'To change colors <strong>only in dark theme</strong>, target the <code>[data-bj-theme="dark"]</code> selector. Your overrides will not affect the light theme.',
      'dark-auto': 'The dark theme also activates automatically when the user\u2019s system prefers dark mode, unless <code>data-bj-theme="light"</code> is explicitly set.',
      'section-scoped': 'Scoped theming (per section)',
      'scoped-desc': 'You can override variables on a specific container instead of <code>:root</code>. This lets you have sections with different colors on the same page.',
      'section-scss': 'Advanced customization (SCSS)',
      'scss-desc': 'For complete customization, import the SCSS sources and override the palette or semantic tokens before compilation. This approach is recommended for ministry-level rebrands.',
      'scss-build': 'Then create your own SCSS entry file to compile a custom theme:',
      'section-palette': 'Full palette reference',
      'palette-desc': 'Here are the raw color families available via <code>--bj-color-*</code>. Each family has multiple shades ranging from darkest (50) to lightest (1000).',
    },
  },
})

const codeCssOverride = `/* Charger le DSBJ d'abord */
@import '@flrxnt/dsbj';

/* Puis surcharger les variables */
:root {
  /* Couleur d'action principale */
  --bj-action-high: #1a5f3c;
  --bj-action-high-hover: #14493d;
  --bj-action-high-active: #0f3a30;

  /* Fond et bordures */
  --bj-bg-alt: #f0f4f1;
  --bj-border-default: #c8d6cc;

  /* Arrondis */
  --bj-radius-sm: 6px;
  --bj-radius-md: 10px;

  /* Accent */
  --bj-accent: #e8a500;
}`

const codeMinistry = `/* Exemple : charte du Minist\u00e8re de la Sant\u00e9 */
:root {
  --bj-action-high: #0077b6;
  --bj-action-high-hover: #005f92;
  --bj-action-high-active: #004a73;
  --bj-action-low: #e0f0fa;
  --bj-action-low-hover: #c8e3f5;
  --bj-accent: #ff6b35;
  --bj-accent-text: #c44d1e;
}`

const codeDarkOverride = `/* Surcharges sp\u00e9cifiques au mode sombre */
[data-bj-theme="dark"] {
  --bj-action-high: #4da3c9;
  --bj-action-high-hover: #6bb8da;
  --bj-bg-default: #0a1628;
  --bj-bg-alt: #101e33;
  --bj-bg-elevated: #162640;
  --bj-border-default: #253d5c;
}

/* Les m\u00eames couleurs s'appliquent aussi
   quand le syst\u00e8me est en mode sombre */
@media (prefers-color-scheme: dark) {
  :root:not([data-bj-theme="light"]) {
    --bj-action-high: #4da3c9;
    --bj-bg-default: #0a1628;
  }
}`

const codeScopedTheme = `/* Section h\u00e9ro avec un fond contrast\u00e9 */
.hero-section {
  --bj-bg-default: var(--bj-bg-contrast);
  --bj-text-default: var(--bj-text-inverted);
  --bj-action-high: var(--bj-accent);
  --bj-border-default: rgba(255, 255, 255, 0.2);

  background-color: var(--bj-bg-default);
  color: var(--bj-text-default);
}

/* Les composants DSBJ \u00e0 l'int\u00e9rieur de .hero-section
   utiliseront automatiquement ces couleurs */`

const codeScssOverride = `// mon-theme/_palette.scss
// Remplacer les couleurs primaires
$palette: (
  'vert-benin': (
    975: #e0f2f1,
    925: #b2dfdb,
    850: #4db6ac,
    main-491: #00796b,
    425: #00695c,
    sun-340: #004d40,
    moon-680: #26a69a,
  ),
  // ... les autres familles restent inchang\u00e9es
  // sauf celles que vous souhaitez modifier
);`

const codeScssEntry = `// mon-theme.scss
@use '@flrxnt/dsbj/src/core/color/settings' with (
  $palette: (/* votre palette personnalis\u00e9e */)
);
@use '@flrxnt/dsbj/src/dsbj';

// Ou si vous voulez tout contr\u00f4ler :
@use '@flrxnt/dsbj/src/core/color/tokens';

:root {
  @include tokens.generate-palette-tokens;
  @include tokens.generate-semantic-tokens-light;

  // Surcharges s\u00e9mantiques suppl\u00e9mentaires
  --bj-action-high: #00796b;
}

[data-bj-theme="dark"] {
  @include tokens.generate-semantic-tokens-dark;
  --bj-action-high: #26a69a;
}`

const semanticRows = computed(() => [
  { name: '--bj-text-default', description: 'Texte principal' },
  { name: '--bj-text-title', description: 'Titres' },
  { name: '--bj-text-alt', description: 'Texte secondaire' },
  { name: '--bj-text-mention', description: 'Texte discret (placeholders, l\u00e9gendes)' },
  { name: '--bj-text-disabled', description: 'Texte d\u00e9sactiv\u00e9' },
  { name: '--bj-text-inverted', description: 'Texte sur fond contrast\u00e9' },
  { name: '--bj-bg-default', description: 'Fond principal' },
  { name: '--bj-bg-alt', description: 'Fond alternatif (sections, bandes)' },
  { name: '--bj-bg-contrast', description: 'Fond contrast\u00e9 (sombre en light, clair en dark)' },
  { name: '--bj-bg-elevated', description: 'Fond sur\u00e9lev\u00e9 (cartes, modales)' },
  { name: '--bj-bg-disabled', description: 'Fond d\u00e9sactiv\u00e9' },
  { name: '--bj-border-default', description: 'Bordure standard' },
  { name: '--bj-border-strong', description: 'Bordure appuy\u00e9e' },
  { name: '--bj-border-subtle', description: 'Bordure l\u00e9g\u00e8re (s\u00e9parateurs)' },
])

const actionRows = computed(() => [
  { name: '--bj-action-high', description: 'Couleur principale (boutons, liens, focus)' },
  { name: '--bj-action-high-hover', description: '\u00c9tat survol de l\u2019action' },
  { name: '--bj-action-high-active', description: '\u00c9tat actif / clic' },
  { name: '--bj-action-low', description: 'Fond d\u2019action secondaire' },
  { name: '--bj-action-low-hover', description: 'Fond secondaire au survol' },
  { name: '--bj-accent', description: 'Couleur d\u2019accent (badges, highlights)' },
  { name: '--bj-accent-text', description: 'Texte accent lisible' },
])

const functionalRows = computed(() => [
  { name: '--bj-info / --bj-info-bg', description: 'Information' },
  { name: '--bj-success / --bj-success-bg', description: 'Succ\u00e8s' },
  { name: '--bj-warning / --bj-warning-bg', description: 'Avertissement' },
  { name: '--bj-error / --bj-error-bg', description: 'Erreur' },
])

const typoRows = computed(() => [
  { name: '--bj-font-base', description: 'Police principale (Montserrat)' },
  { name: '--bj-font-alt', description: 'Police alternative (Spectral)' },
  { name: '--bj-font-mono', description: 'Police monospace' },
  { name: '--bj-fs-xs \u2026 --bj-fs-3xl', description: '\u00c9chelle de tailles de texte' },
  { name: '--bj-fw-regular / semibold / bold', description: 'Graisses' },
  { name: '--bj-spacing-1v \u2026 --bj-spacing-16v', description: '\u00c9chelle d\u2019espacement (multiples de 4px)' },
  { name: '--bj-radius-xs / sm / md / lg / full', description: 'Arrondis' },
  { name: '--bj-shadow-sm / md / lg', description: 'Ombres port\u00e9es' },
  { name: '--bj-duration-fast / normal / slow', description: 'Dur\u00e9es d\u2019animation' },
  { name: '--bj-easing', description: 'Courbe d\u2019acc\u00e9l\u00e9ration' },
])

const paletteRows = computed(() => [
  { name: '--bj-color-vert-benin-*', description: 'Vert B\u00e9nin (7 nuances : 975, 925, 850, main-491, 425, sun-340, moon-680)' },
  { name: '--bj-color-jaune-benin-*', description: 'Jaune B\u00e9nin (6 nuances : 975, 925, main-822, 750, sun-600, moon-850)' },
  { name: '--bj-color-rouge-benin-*', description: 'Rouge B\u00e9nin (7 nuances)' },
  { name: '--bj-color-ocre-terre-*', description: 'Ocre terre (5 nuances)' },
  { name: '--bj-color-bleu-horizon-*', description: 'Bleu horizon (7 nuances)' },
  { name: '--bj-color-info-*', description: 'Bleu information (5 nuances)' },
  { name: '--bj-color-succes-*', description: 'Vert succ\u00e8s (5 nuances)' },
  { name: '--bj-color-alerte-*', description: 'Orange avertissement (5 nuances)' },
  { name: '--bj-color-erreur-*', description: 'Rouge erreur (5 nuances)' },
  { name: '--bj-color-gris-*', description: 'Gris neutre (13 nuances : 50 \u2026 1000)' },
])
</script>
