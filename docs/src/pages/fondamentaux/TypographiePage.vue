<script setup lang="ts">
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsSection from "@docs/components/DocsSection.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    fr: {
      title: "Typographie",
      intro:
        "Le DSBJ s’appuie sur {sans} pour l’interface, {serif} pour le contenu éditorial ou les citations, et une pile {mono} pour le code.",
      introSans: "Montserrat",
      introSerif: "Spectral",
      introMono: "monospace",
      "section-familles": "Familles de polices",
      thRole: "Rôle",
      thVar: "Variable CSS",
      thExample: "Exemple",
      roleSans: "Sans-serif (corps)",
      roleSerif: "Serif",
      roleMono: "Monospace",
      "section-display": "Titres d’affichage",
      "display-note":
        "Classes {xl} à {sm} - tailles renforcées à partir du breakpoint LG.",
      "section-headings": "Niveaux de titre",
      "headings-note":
        "Balises {hTags} ou classes {bjh}.",
      "section-sizes": "Tailles de texte courant",
      "section-weights": "Graisses",
      thName: "Nom",
      thToken: "Jeton",
      thValue: "Valeur",
      thClasses: "Classes",
      weightRegular: "Regular",
      weightMedium: "Medium",
      weightSemibold: "Semibold",
      weightBold: "Bold",
      "section-scale": "Variables d’échelle",
      "scale-note":
        "Tailles de police ({fs}), interlignes ({lh}) et graisses ({fw}) sont définies sur {root}.",
      thCategory: "Catégorie",
      thTokens: "Jetons",
      catSizes: "Tailles",
      catLineHeight: "Interligne",
      catWeight: "Graisse",
    },
    en: {
      title: "Typography",
      intro:
        "DSBJ uses {sans} for the UI, {serif} for editorial content or quotes, and a {mono} stack for code.",
      introSans: "Montserrat",
      introSerif: "Spectral",
      introMono: "monospace",
      "section-familles": "Type families",
      thRole: "Role",
      thVar: "CSS variable",
      thExample: "Example",
      roleSans: "Sans-serif (body)",
      roleSerif: "Serif",
      roleMono: "Monospace",
      "section-display": "Display headings",
      "display-note":
        "From {xl} to {sm} — stronger sizes from the LG breakpoint.",
      "section-headings": "Heading levels",
      "headings-note":
        "Use {hTags} tags or {bjh} classes.",
      "section-sizes": "Body text sizes",
      "section-weights": "Weights",
      thName: "Name",
      thToken: "Token",
      thValue: "Value",
      thClasses: "Classes",
      weightRegular: "Regular",
      weightMedium: "Medium",
      weightSemibold: "Semibold",
      weightBold: "Bold",
      "section-scale": "Scale variables",
      "scale-note":
        "Font sizes ({fs}), line heights ({lh}), and weights ({fw}) are defined on {root}.",
      thCategory: "Category",
      thTokens: "Tokens",
      catSizes: "Sizes",
      catLineHeight: "Line height",
      catWeight: "Weight",
    },
  },
});

const codeDisplay = `<p class="bj-display-xl">…</p>
<p class="bj-display-lg">…</p>
<p class="bj-display-md">…</p>
<p class="bj-display-sm">…</p>`;

const codeHeadings = `<h1 class="bj-h1">…</h1>
<h2 class="bj-h2">…</h2>
<!-- … -->`;

const codeTextSizes = `<p class="bj-text-lg">…</p>
<p class="bj-text-md">…</p>
<p class="bj-text-sm">…</p>
<p class="bj-text-xs">…</p>`;
</script>

<template>
  <h1 class="bj-h1">{{ t("title") }}</h1>
  <p class="bj-text-md bj-text-alt">
    <i18n-t keypath="intro">
      <template #sans>
        <strong>{{ t("introSans") }}</strong>
      </template>
      <template #serif>
        <strong>{{ t("introSerif") }}</strong>
      </template>
      <template #mono>
        <strong>{{ t("introMono") }}</strong>
      </template>
    </i18n-t>
  </p>

  <DocsSection id="familles-polices" :title="t('section-familles')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t("thRole") }}</th>
          <th>{{ t("thVar") }}</th>
          <th>{{ t("thExample") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ t("roleSans") }}</td>
          <td><code>--bj-font-sans</code></td>
          <td class="bj-text-md">Montserrat - Services en ligne</td>
        </tr>
        <tr>
          <td>{{ t("roleSerif") }}</td>
          <td><code>--bj-font-serif</code></td>
          <td class="bj-text-md bj-text-serif">
            Spectral - Texte institutionnel
          </td>
        </tr>
        <tr>
          <td>{{ t("roleMono") }}</td>
          <td><code>--bj-font-mono</code></td>
          <td class="bj-text-mono bj-text-sm">npm install @flrxnt/dsbj</td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="titres-affichage" :title="t('section-display')">
    <p class="bj-text-sm bj-text-alt">
      <i18n-t keypath="display-note">
        <template #xl>
          <code>bj-display-xl</code>
        </template>
        <template #sm>
          <code>bj-display-sm</code>
        </template>
      </i18n-t>
    </p>
    <DocsPreview>
      <p class="bj-display-xl">bj-display-xl</p>
      <p class="bj-display-lg">bj-display-lg</p>
      <p class="bj-display-md">bj-display-md</p>
      <p class="bj-display-sm">bj-display-sm</p>
    </DocsPreview>
    <DocsCode :code="codeDisplay" />
  </DocsSection>

  <DocsSection id="niveaux-titre" :title="t('section-headings')">
    <p class="bj-text-sm bj-text-alt">
      <i18n-t keypath="headings-note">
        <template #hTags>
          <code>h1</code>–<code>h6</code>
        </template>
        <template #bjh>
          <code>bj-h1</code>–<code>bj-h6</code>
        </template>
      </i18n-t>
    </p>
    <DocsPreview>
      <p class="bj-h1" style="margin-bottom: 0.5rem">Titre niveau 1</p>
      <h2 class="bj-h2" style="margin-bottom: 0.5rem">Titre niveau 2</h2>
      <h3 class="bj-h3" style="margin-bottom: 0.5rem">Titre niveau 3</h3>
      <h4 class="bj-h4" style="margin-bottom: 0.5rem">Titre niveau 4</h4>
      <h5 class="bj-h5" style="margin-bottom: 0.5rem">Titre niveau 5</h5>
      <h6 class="bj-h6" style="margin-bottom: 0">Titre niveau 6</h6>
    </DocsPreview>
    <DocsCode :code="codeHeadings" />
  </DocsSection>

  <DocsSection id="tailles-texte" :title="t('section-sizes')">
    <DocsPreview>
      <p class="bj-text-lg">
        bj-text-lg - Texte d’introduction ou mise en avant.
      </p>
      <p class="bj-text-md">
        bj-text-md - Taille par défaut du corps (équivalent au
        <code>body</code>).
      </p>
      <p class="bj-text-sm">
        bj-text-sm - Métadonnées, légendes, aides de formulaire.
      </p>
      <p class="bj-text-xs">
        bj-text-xs - Mentions légales, précisions discrètes.
      </p>
    </DocsPreview>
    <DocsCode :code="codeTextSizes" />
  </DocsSection>

  <DocsSection id="graisses" :title="t('section-weights')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t("thName") }}</th>
          <th>{{ t("thToken") }}</th>
          <th>{{ t("thValue") }}</th>
          <th>{{ t("thClasses") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ t("weightRegular") }}</td>
          <td><code>--bj-fw-regular</code></td>
          <td>400</td>
          <td><code>bj-text-regular</code></td>
        </tr>
        <tr>
          <td>{{ t("weightMedium") }}</td>
          <td><code>--bj-fw-medium</code></td>
          <td>500</td>
          <td><code>bj-text-medium</code></td>
        </tr>
        <tr>
          <td>{{ t("weightSemibold") }}</td>
          <td><code>--bj-fw-semibold</code></td>
          <td>600</td>
          <td><code>bj-text-semibold</code></td>
        </tr>
        <tr>
          <td>{{ t("weightBold") }}</td>
          <td><code>--bj-fw-bold</code></td>
          <td>700</td>
          <td><code>bj-text-bold</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="variables-echelle" :title="t('section-scale')">
    <p class="bj-text-sm bj-text-alt">
      <i18n-t keypath="scale-note">
        <template #fs>
          <code>--bj-fs-*</code>
        </template>
        <template #lh>
          <code>--bj-lh-*</code>
        </template>
        <template #fw>
          <code>--bj-fw-*</code>
        </template>
        <template #root>
          <code>:root</code>
        </template>
      </i18n-t>
    </p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t("thCategory") }}</th>
          <th>{{ t("thTokens") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ t("catSizes") }}</td>
          <td><code>--bj-fs-xs</code> à <code>--bj-fs-6xl</code></td>
        </tr>
        <tr>
          <td>{{ t("catLineHeight") }}</td>
          <td>
            <code>--bj-lh-tight</code>, <code>--bj-lh-normal</code>,
            <code>--bj-lh-loose</code>
          </td>
        </tr>
        <tr>
          <td>{{ t("catWeight") }}</td>
          <td>
            <code>--bj-fw-regular</code>, <code>--bj-fw-medium</code>,
            <code>--bj-fw-semibold</code>, <code>--bj-fw-bold</code>
          </td>
        </tr>
      </tbody>
    </table>
  </DocsSection>
</template>
