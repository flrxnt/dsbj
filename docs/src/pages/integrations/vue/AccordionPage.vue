<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjAccordion',
      desc: 'Composants Vue pour un groupe d’accordéons. BjAccordion fournit le contexte ; BjAccordionItem définit id, titre et contenu par slot.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props-accordion': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'section-slots': 'Slots',
      'section-exclusive': 'exclusive : false et true',
      'section-combos': 'Combinaisons exclusive × nombre d’items',
      'section-attrs': 'Attributs sur la racine (BjAccordion)',
      'section-no-emits': 'Événements Vue',
      'section-no-vmodel': 'v-model',
      'combo-intro':
        'Même contenu Vue : faites varier exclusive et la liste d’items (ids uniques obligatoires).',
      'attrs-intro':
        'Les attributs non déclarés (class, data-*, aria-*) sont appliqués sur le conteneur .bj-accordions.',
      'no-emits-desc':
        'Pas d’emit : l’ouverture/fermeture est gérée en interne par le contexte injecté (toggle au clic sur l’en-tête).',
      'no-vmodel-desc':
        'Pas de v-model : l’état ouvert/fermé n’est pas synchronisé vers le parent ; utilisez plusieurs items pour le contenu statique ou contrôlé côté enfant.',
      'section-slot-content': 'Contenu riche dans l’item (slot par défaut)',
      'prop-exclusive': 'Si true, un seul panneau ouvert à la fois. Si false (défaut), plusieurs panneaux peuvent être ouverts.',
      'prop-item-id': 'Identifiant stable de l’item (clé d’état, aria).',
      'prop-item-title': 'Texte du bouton d’en-tête.',
      'slot-acc-default': 'Enfants : un ou plusieurs BjAccordionItem.',
      'slot-item-default': 'Corps du panneau (affiché quand l’item est ouvert).',
      'exclusive-intro':
        'Valeurs : false (défaut) ou true. Avec exclusive, l’ouverture d’un item ferme les autres.',
    },
    en: {
      title: 'BjAccordion',
      desc: 'Vue components for an accordion group. BjAccordion provides context; BjAccordionItem sets id, title, and default slot content.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props-accordion': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'section-slots': 'Slots',
      'section-exclusive': 'exclusive: false and true',
      'section-combos': 'exclusive × item count combinations',
      'section-attrs': 'Root attributes (BjAccordion)',
      'section-no-emits': 'Vue events',
      'section-no-vmodel': 'v-model',
      'combo-intro':
        'Same Vue pattern: vary exclusive and the item list (unique ids required).',
      'attrs-intro':
        'Undeclared attributes (class, data-*, aria-*) fall through to the .bj-accordions wrapper.',
      'no-emits-desc':
        'No emits: open/close is handled internally via injected context (toggle on header click).',
      'no-vmodel-desc':
        'No v-model: open state is not synced to the parent; use items for static or child-controlled content.',
      'section-slot-content': 'Rich content in the item (default slot)',
      'prop-exclusive':
        'If true, only one panel open at a time. If false (default), multiple panels may be open.',
      'prop-item-id': 'Stable item id (state key, aria).',
      'prop-item-title': 'Header button label.',
      'slot-acc-default': 'Children: one or more BjAccordionItem.',
      'slot-item-default': 'Panel body (shown when the item is open).',
      'exclusive-intro':
        'Values: false (default) or true. With exclusive, opening one item closes the others.',
    },
  },
})

const codeUsage = `<script setup>
import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjAccordion exclusive>
    <BjAccordionItem id="a1" title="Section 1">Contenu 1</BjAccordionItem>
    <BjAccordionItem id="a2" title="Section 2">Contenu 2</BjAccordionItem>
  </BjAccordion>
</template>`

const codeExclusiveFalse = `<BjAccordion :exclusive="false">
  <BjAccordionItem id="x1" title="Premier">Texte A</BjAccordionItem>
  <BjAccordionItem id="x2" title="Deuxième">Texte B</BjAccordionItem>
</BjAccordion>`

const codeExclusiveTrue = `<BjAccordion :exclusive="true">
  <BjAccordionItem id="y1" title="Onglet A">Un seul ouvert à la fois</BjAccordionItem>
  <BjAccordionItem id="y2" title="Onglet B">Ferme l’autre au clic</BjAccordionItem>
</BjAccordion>`

const codeSlotRich = `<BjAccordion>
  <BjAccordionItem id="doc" title="Pièces jointes">
    <ul class="bj-list">
      <li><a href="#">rapport.pdf</a></li>
      <li><a href="#">annexe.docx</a></li>
    </ul>
  </BjAccordionItem>
</BjAccordion>`

const codeCombos = `<!-- exclusive false : plusieurs panneaux ouverts possible -->
<BjAccordion :exclusive="false">
  <BjAccordionItem id="c1" title="A">…</BjAccordionItem>
  <BjAccordionItem id="c2" title="B">…</BjAccordionItem>
  <BjAccordionItem id="c3" title="C">…</BjAccordionItem>
</BjAccordion>

<!-- exclusive true : un seul ouvert ; ids toujours uniques -->
<BjAccordion exclusive>
  <BjAccordionItem id="c1" title="A">…</BjAccordionItem>
  <BjAccordionItem id="c2" title="B">…</BjAccordionItem>
  <BjAccordionItem id="c3" title="C">…</BjAccordionItem>
</BjAccordion>`

const codeAttrs = `<BjAccordion class="bj-stack" data-testid="faq" aria-label="FAQ">
  <BjAccordionItem id="f1" title="Question 1">Réponse 1</BjAccordionItem>
</BjAccordion>`

const accordionProps = computed(() => [
  { name: 'exclusive', description: t('prop-exclusive') },
])

const itemProps = computed(() => [
  { name: 'id', description: t('prop-item-id') },
  { name: 'title', description: t('prop-item-title') },
])

const slotRows = computed(() => [
  { name: 'BjAccordion (default)', description: t('slot-acc-default') },
  { name: 'BjAccordionItem (default)', description: t('slot-item-default') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-acc-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-acc-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-accordions" data-bj-accordion-group>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="true"
            aria-controls="int-vue-acc-1"
            id="int-vue-acc-btn-1"
          >
            Section 1
          </button>
          <div
            id="int-vue-acc-1"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="int-vue-acc-btn-1"
            data-bj-expanded
          >
            <p class="bj-text-sm">Contenu 1</p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="false"
            aria-controls="int-vue-acc-2"
            id="int-vue-acc-btn-2"
          >
            Section 2
          </button>
          <div
            id="int-vue-acc-2"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="int-vue-acc-btn-2"
          >
            <p class="bj-text-sm">Contenu 2</p>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-acc-exclusive" :title="t('section-exclusive')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">
      {{ t('exclusive-intro') }}
    </p>
    <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)"><strong>exclusive="false"</strong></p>
    <DocsCode :code="codeExclusiveFalse" lang="html" />
    <p class="bj-text-sm" style="margin: var(--bj-spacing-3v) 0 var(--bj-spacing-1v)">
      <strong>exclusive="true"</strong>
    </p>
    <DocsCode :code="codeExclusiveTrue" lang="html" />
  </DocsSection>

  <DocsSection id="vue-acc-slot-content" :title="t('section-slot-content')">
    <DocsCode :code="codeSlotRich" lang="html" />
  </DocsSection>

  <DocsSection id="vue-acc-combos" :title="t('section-combos')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('combo-intro') }}</p>
    <DocsCode :code="codeCombos" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-3v)">
      <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-2v)">exclusive=false (deux corps ouverts)</p>
      <div class="bj-accordions" data-bj-accordion-group>
        <div class="bj-accordion">
          <button type="button" class="bj-accordion__btn" aria-expanded="true" aria-controls="int-vue-acc-m1" id="int-vue-acc-mb1">
            A
          </button>
          <div id="int-vue-acc-m1" class="bj-accordion__body" role="region" aria-labelledby="int-vue-acc-mb1" data-bj-expanded>
            <p class="bj-text-sm">Panneau A</p>
          </div>
        </div>
        <div class="bj-accordion">
          <button type="button" class="bj-accordion__btn" aria-expanded="true" aria-controls="int-vue-acc-m2" id="int-vue-acc-mb2">
            B
          </button>
          <div id="int-vue-acc-m2" class="bj-accordion__body" role="region" aria-labelledby="int-vue-acc-mb2" data-bj-expanded>
            <p class="bj-text-sm">Panneau B</p>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-acc-attrs" :title="t('section-attrs')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('attrs-intro') }}</p>
    <DocsCode :code="codeAttrs" lang="html" />
  </DocsSection>

  <DocsSection id="vue-acc-emits" :title="t('section-no-emits')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-emits-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-acc-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-acc-props-root" :title="t('section-props-accordion')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="accordionProps" />
  </DocsSection>

  <DocsSection id="vue-acc-props-item" :title="t('section-props-item')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="itemProps" />
  </DocsSection>

  <DocsSection id="vue-acc-slots" :title="t('section-slots')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
  </DocsSection>
</template>
