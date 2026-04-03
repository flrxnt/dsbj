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
      title: "Glisser-déposer (Draggable)",
      desc: "Liste réordonnables par glisser-déposer. Permet aux utilisateurs de réorganiser des éléments de manière intuitive.",
      "section-exemples": "Exemples",
      "section-variantes": "Variantes",
      "section-poignee": "Avec poignée",
      "section-simple": "Liste simple",
      "section-desactive": "État désactivé",
      "section-classes-css": "Classes CSS",
      "section-attributs": "Attributs data",
      "section-accessibilite": "Accessibilité",
      "a11y-note":
        'Chaque élément possède <code>role="listitem"</code> et un <code>tabindex</code>. Les touches <code>Flèche haut</code> et <code>Flèche bas</code> permettent de réordonner les éléments au clavier. L\'attribut <code>aria-label</code> identifie chaque élément.',
      "cls-base": "Conteneur principal de la liste réordonnable",
      "cls-item": "Élément individuel déplaçable",
      "cls-handle": "Poignée de glissement",
      "cls-content": "Zone de contenu de l'élément",
      "cls-dragging": "Élément en cours de déplacement",
      "cls-over": "Élément survolé lors du glissement",
      "cls-disabled": "Modificateur : liste désactivée",
      "attr-container": "Active le comportement draggable sur le conteneur",
      "attr-item": "Marque un enfant comme élément déplaçable",
      "attr-handle": "Sélecteur CSS de la poignée (optionnel)",
      "attr-disabled": "Désactive le glisser-déposer",
    },
    en: {
      title: "Draggable",
      desc: "Reorderable lists via drag and drop. Allows users to rearrange items intuitively.",
      "section-exemples": "Examples",
      "section-variantes": "Variants",
      "section-poignee": "With handle",
      "section-simple": "Simple list",
      "section-desactive": "Disabled state",
      "section-classes-css": "CSS Classes",
      "section-attributs": "Data attributes",
      "section-accessibilite": "Accessibility",
      "a11y-note":
        'Each item has <code>role="listitem"</code> and a <code>tabindex</code>. <code>Arrow Up</code> and <code>Arrow Down</code> keys allow keyboard reordering. The <code>aria-label</code> attribute identifies each item.',
      "cls-base": "Main reorderable list container",
      "cls-item": "Individual draggable item",
      "cls-handle": "Drag handle",
      "cls-content": "Item content area",
      "cls-dragging": "Item being dragged",
      "cls-over": "Item hovered during drag",
      "cls-disabled": "Modifier: disabled list",
      "attr-container": "Activates draggable behavior on the container",
      "attr-item": "Marks a child as a draggable item",
      "attr-handle": "CSS selector for the drag handle (optional)",
      "attr-disabled": "Disables drag and drop",
    },
  },
});

const codeExemple = `<div class="bj-draggable" data-bj-draggable>
  <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem">
    <span class="bj-draggable__handle" aria-hidden="true"></span>
    <span class="bj-draggable__content">Élément 1</span>
  </div>
  <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem">
    <span class="bj-draggable__handle" aria-hidden="true"></span>
    <span class="bj-draggable__content">Élément 2</span>
  </div>
  <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem">
    <span class="bj-draggable__handle" aria-hidden="true"></span>
    <span class="bj-draggable__content">Élément 3</span>
  </div>
</div>`;

const codeSimple = `<div class="bj-draggable" data-bj-draggable>
  <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem">
    <span class="bj-draggable__content">Sans poignée 1</span>
  </div>
  <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem">
    <span class="bj-draggable__content">Sans poignée 2</span>
  </div>
</div>`;

const codeDisabled = `<div class="bj-draggable bj-draggable--disabled" data-bj-draggable data-bj-draggable-disabled>
  <div class="bj-draggable__item" data-bj-draggable-item>
    <span class="bj-draggable__handle" aria-hidden="true"></span>
    <span class="bj-draggable__content">Élément non déplaçable</span>
  </div>
</div>`;

const cssRows = computed(() => [
  { name: ".bj-draggable", description: t("cls-base") },
  { name: ".bj-draggable__item", description: t("cls-item") },
  { name: ".bj-draggable__handle", description: t("cls-handle") },
  { name: ".bj-draggable__content", description: t("cls-content") },
  { name: ".bj-draggable__item--dragging", description: t("cls-dragging") },
  { name: ".bj-draggable__item--over", description: t("cls-over") },
  { name: ".bj-draggable--disabled", description: t("cls-disabled") },
]);

const attrRows = computed(() => [
  { name: "data-bj-draggable", description: t("attr-container") },
  { name: "data-bj-draggable-item", description: t("attr-item") },
  { name: "data-bj-draggable-handle", description: t("attr-handle") },
  { name: "data-bj-draggable-disabled", description: t("attr-disabled") },
]);
</script>

<template>
  <div class="docs-content">
    <h1>{{ t("title") }}</h1>
    <p class="docs-intro">{{ t("desc") }}</p>

    <DocsSection :title="t('section-poignee')">
      <DocsPreview>
        <div class="bj-draggable" data-bj-draggable>
          <div
            v-for="i in 4"
            :key="i"
            class="bj-draggable__item"
            data-bj-draggable-item
            tabindex="0"
            role="listitem"
          >
            <span class="bj-draggable__handle" aria-hidden="true"></span>
            <span class="bj-draggable__content">Élément {{ i }}</span>
          </div>
        </div>
      </DocsPreview>
      <DocsCode :code="codeExemple" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-simple')">
      <DocsPreview>
        <div class="bj-draggable" data-bj-draggable>
          <div
            v-for="i in 3"
            :key="i"
            class="bj-draggable__item"
            data-bj-draggable-item
            tabindex="0"
            role="listitem"
          >
            <span class="bj-draggable__content">Sans poignée {{ i }}</span>
          </div>
        </div>
      </DocsPreview>
      <DocsCode :code="codeSimple" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-desactive')">
      <DocsPreview>
        <div
          class="bj-draggable bj-draggable--disabled"
          data-bj-draggable
          data-bj-draggable-disabled
        >
          <div
            v-for="i in 2"
            :key="i"
            class="bj-draggable__item"
            data-bj-draggable-item
          >
            <span class="bj-draggable__handle" aria-hidden="true"></span>
            <span class="bj-draggable__content">Élément non déplaçable {{ i }}</span>
          </div>
        </div>
      </DocsPreview>
      <DocsCode :code="codeDisabled" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-classes-css')">
      <DocsPropsTable :rows="cssRows" />
    </DocsSection>

    <DocsSection :title="t('section-attributs')">
      <DocsPropsTable :rows="attrRows" />
    </DocsSection>

    <DocsSection id="a11y-draggable" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
