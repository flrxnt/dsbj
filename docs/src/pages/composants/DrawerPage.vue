<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsSection from "@docs/components/DocsSection.vue";
import DocsA11yNote from "@docs/components/DocsA11yNote.vue";
import DocsPropsTable from "@docs/components/DocsPropsTable.vue";

const { t } = useI18n({
  messages: {
    fr: {
      title: "Tiroir (Drawer)",
      desc: "Panneau latéral glissant depuis le bord de l'écran, idéal pour la navigation, les filtres ou le contenu complémentaire.",
      "section-exemples": "Exemples",
      "section-variantes": "Variantes",
      "section-positions": "Positions",
      "section-tailles": "Tailles",
      "section-etats": "États",
      "section-classes-css": "Classes CSS",
      "section-accessibilite": "Accessibilité",
      "a11y-note":
        'Le tiroir utilise <code>role="dialog"</code> et <code>aria-modal="true"</code>. Le focus est piégé à l\'intérieur lorsque le tiroir est ouvert. <code>aria-labelledby</code> pointe vers le titre du tiroir. La touche <code>Escape</code> ferme le tiroir.',
      "cls-base": "Conteneur principal du tiroir",
      "cls-overlay": "Fond semi-transparent derrière le panneau",
      "cls-panel": "Panneau glissant contenant le contenu",
      "cls-header": "En-tête avec titre et bouton de fermeture",
      "cls-title": "Titre du tiroir",
      "cls-close": "Bouton de fermeture",
      "cls-body": "Zone de contenu défilable",
      "cls-footer": "Pied de panneau avec actions",
      "cls-right": "Glisse depuis la droite",
      "cls-sm": "Panneau étroit (18 rem)",
      "cls-lg": "Panneau large (36 rem)",
      "cls-full": "Panneau pleine largeur",
    },
    en: {
      title: "Drawer",
      desc: "A sliding side panel from the edge of the screen, ideal for navigation, filters, or supplementary content.",
      "section-exemples": "Examples",
      "section-variantes": "Variants",
      "section-positions": "Positions",
      "section-tailles": "Sizes",
      "section-etats": "States",
      "section-classes-css": "CSS Classes",
      "section-accessibilite": "Accessibility",
      "a11y-note":
        'The drawer uses <code>role="dialog"</code> and <code>aria-modal="true"</code>. Focus is trapped inside when the drawer is open. <code>aria-labelledby</code> points to the drawer title. The <code>Escape</code> key closes the drawer.',
      "cls-base": "Main drawer container",
      "cls-overlay": "Semi-transparent backdrop behind the panel",
      "cls-panel": "Sliding panel containing the content",
      "cls-header": "Header with title and close button",
      "cls-title": "Drawer title",
      "cls-close": "Close button",
      "cls-body": "Scrollable content area",
      "cls-footer": "Panel footer with actions",
      "cls-right": "Slides from the right",
      "cls-sm": "Narrow panel (18 rem)",
      "cls-lg": "Wide panel (36 rem)",
      "cls-full": "Full-width panel",
    },
  },
});

const showDrawer = ref(false);
const showDrawerRight = ref(false);
const showDrawerSm = ref(false);
const showDrawerLg = ref(false);

const codeExemple = `<button type="button" class="bj-btn" data-bj-drawer-open="my-drawer">
  Ouvrir le tiroir
</button>

<div class="bj-drawer" id="my-drawer" role="dialog" aria-modal="true" aria-labelledby="my-drawer-t">
  <div class="bj-drawer__overlay" data-bj-drawer-close></div>
  <div class="bj-drawer__panel">
    <header class="bj-drawer__header">
      <h2 class="bj-drawer__title" id="my-drawer-t">Titre du tiroir</h2>
      <button type="button" class="bj-drawer__close" data-bj-drawer-close aria-label="Fermer">
        <i class="ri-close-line" aria-hidden="true"></i>
      </button>
    </header>
    <div class="bj-drawer__body">
      <p>Contenu du tiroir.</p>
    </div>
    <footer class="bj-drawer__footer">
      <button type="button" class="bj-btn bj-btn--tertiary" data-bj-drawer-close>Annuler</button>
      <button type="button" class="bj-btn">Valider</button>
    </footer>
  </div>
</div>`;

const codeRight = `<div class="bj-drawer bj-drawer--right" id="drawer-right" ...>
  ...
</div>`;

const codeSizes = `<!-- Petit -->
<div class="bj-drawer bj-drawer--sm" ...>...</div>

<!-- Grand -->
<div class="bj-drawer bj-drawer--lg" ...>...</div>

<!-- Pleine largeur -->
<div class="bj-drawer bj-drawer--full" ...>...</div>`;

const propsRows = computed(() => [
  { name: ".bj-drawer", description: t("cls-base") },
  { name: ".bj-drawer__overlay", description: t("cls-overlay") },
  { name: ".bj-drawer__panel", description: t("cls-panel") },
  { name: ".bj-drawer__header", description: t("cls-header") },
  { name: ".bj-drawer__title", description: t("cls-title") },
  { name: ".bj-drawer__close", description: t("cls-close") },
  { name: ".bj-drawer__body", description: t("cls-body") },
  { name: ".bj-drawer__footer", description: t("cls-footer") },
  { name: ".bj-drawer--right", description: t("cls-right") },
  { name: ".bj-drawer--sm", description: t("cls-sm") },
  { name: ".bj-drawer--lg", description: t("cls-lg") },
  { name: ".bj-drawer--full", description: t("cls-full") },
]);
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t("title") }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t("desc") }}
  </p>

  <DocsSection id="exemples-drawer" :title="t('section-exemples')">
    <DocsPreview>
      <button type="button" class="bj-btn" @click="showDrawer = true">
        Ouvrir le tiroir
      </button>
      <div
        v-if="showDrawer"
        class="bj-drawer"
        data-bj-expanded
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-drawer-t"
        style="display: block"
      >
        <div class="bj-drawer__overlay" @click="showDrawer = false" />
        <div class="bj-drawer__panel">
          <header class="bj-drawer__header">
            <h2 class="bj-drawer__title" id="demo-drawer-t">Titre du tiroir</h2>
            <button
              type="button"
              class="bj-drawer__close"
              aria-label="Fermer"
              @click="showDrawer = false"
            >
              <i class="ri-close-line" aria-hidden="true" />
            </button>
          </header>
          <div class="bj-drawer__body"><p>Contenu du tiroir.</p></div>
          <footer class="bj-drawer__footer">
            <button
              type="button"
              class="bj-btn bj-btn--tertiary"
              @click="showDrawer = false"
            >
              Annuler
            </button>
            <button type="button" class="bj-btn">Valider</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="positions-drawer" :title="t('section-positions')">
    <DocsPreview>
      <button
        type="button"
        class="bj-btn bj-btn--secondary"
        @click="showDrawerRight = true"
      >
        Tiroir à droite
      </button>
      <div
        v-if="showDrawerRight"
        class="bj-drawer bj-drawer--right"
        data-bj-expanded
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-drawer-right-t"
        style="display: block"
      >
        <div class="bj-drawer__overlay" @click="showDrawerRight = false" />
        <div class="bj-drawer__panel">
          <header class="bj-drawer__header">
            <h2 class="bj-drawer__title" id="demo-drawer-right-t">
              Tiroir droit
            </h2>
            <button
              type="button"
              class="bj-drawer__close"
              aria-label="Fermer"
              @click="showDrawerRight = false"
            >
              <i class="ri-close-line" aria-hidden="true" />
            </button>
          </header>
          <div class="bj-drawer__body"><p>Contenu à droite.</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeRight" />
  </DocsSection>

  <DocsSection id="tailles-drawer" :title="t('section-tailles')">
    <DocsPreview>
      <div style="display: flex; gap: var(--bj-spacing-2v); flex-wrap: wrap">
        <button
          type="button"
          class="bj-btn bj-btn--secondary bj-btn--sm"
          @click="showDrawerSm = true"
        >
          Petit
        </button>
        <button
          type="button"
          class="bj-btn bj-btn--secondary bj-btn--sm"
          @click="showDrawerLg = true"
        >
          Grand
        </button>
      </div>
      <div
        v-if="showDrawerSm"
        class="bj-drawer bj-drawer--sm"
        data-bj-expanded
        role="dialog"
        aria-modal="true"
        style="display: block"
      >
        <div class="bj-drawer__overlay" @click="showDrawerSm = false" />
        <div class="bj-drawer__panel">
          <header class="bj-drawer__header">
            <h2 class="bj-drawer__title">Petit tiroir</h2>
            <button
              type="button"
              class="bj-drawer__close"
              aria-label="Fermer"
              @click="showDrawerSm = false"
            >
              <i class="ri-close-line" aria-hidden="true" />
            </button>
          </header>
          <div class="bj-drawer__body"><p>Contenu étroit.</p></div>
        </div>
      </div>
      <div
        v-if="showDrawerLg"
        class="bj-drawer bj-drawer--lg"
        data-bj-expanded
        role="dialog"
        aria-modal="true"
        style="display: block"
      >
        <div class="bj-drawer__overlay" @click="showDrawerLg = false" />
        <div class="bj-drawer__panel">
          <header class="bj-drawer__header">
            <h2 class="bj-drawer__title">Grand tiroir</h2>
            <button
              type="button"
              class="bj-drawer__close"
              aria-label="Fermer"
              @click="showDrawerLg = false"
            >
              <i class="ri-close-line" aria-hidden="true" />
            </button>
          </header>
          <div class="bj-drawer__body"><p>Contenu large.</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" />
  </DocsSection>

  <DocsSection id="classes-drawer" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-drawer" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
