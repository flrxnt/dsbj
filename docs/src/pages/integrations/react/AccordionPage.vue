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
      desc: 'Composants React pour un groupe d’accordéons. BjAccordion fournit le contexte d’état (ensemble des panneaux ouverts) ; BjAccordionItem exige un id stable, un title et le contenu en enfants. Aucun callback externe : l’ouverture se fait via le bouton d’en-tête.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'section-exclusive-false': 'exclusive à false (défaut) — plusieurs panneaux ouverts',
      'section-exclusive-true': 'exclusive à true — un seul panneau ouvert',
      'section-item-children': 'BjAccordionItem : id, title et enfants riches',
      'section-prop-values': 'Valeurs de props (exclusive)',
      'section-cross': 'Combinaisons : exclusive + className',
      'section-callbacks': 'Callbacks',
      'section-callbacks-note':
        'Aucun callback utilisateur : BjAccordionItem appelle ctx.toggle(id) au clic sur l’en-tête ; l’état vit dans BjAccordion.',
      'section-preview-combo': 'Aperçu — className sur le groupe et les items',
      'prop-children-accordion': 'Enfants : uniquement des BjAccordionItem (ou fragments contenant des items).',
      'prop-exclusive': 'Si true, un seul panneau ouvert à la fois ; si false (défaut), plusieurs peuvent rester ouverts.',
      'prop-accordion-className': 'Classe CSS optionnelle sur le conteneur .bj-accordions.',
      'prop-item-id': 'Identifiant stable de l’item (clé d’état interne, passé à toggle).',
      'prop-item-title': 'Libellé du bouton d’en-tête.',
      'prop-item-children': 'Contenu du panneau (ReactNode).',
      'prop-item-className': 'Classe CSS optionnelle sur la racine .bj-accordion.',
    },
    en: {
      title: 'BjAccordion',
      desc: 'React components for an accordion group. BjAccordion holds open state (a Set of item ids); BjAccordionItem requires a stable id, title, and children for panel content. No external callbacks: panels toggle via the header button.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'section-exclusive-false': 'exclusive false (default) — multiple panels open',
      'section-exclusive-true': 'exclusive true — single panel open',
      'section-item-children': 'BjAccordionItem: id, title, and rich children',
      'section-prop-values': 'Prop values (exclusive)',
      'section-cross': 'Combinations: exclusive + className',
      'section-callbacks': 'Callbacks',
      'section-callbacks-note':
        'No user-facing callbacks: BjAccordionItem calls ctx.toggle(id) on header click; state lives in BjAccordion.',
      'section-preview-combo': 'Preview — className on group and items',
      'prop-children-accordion': 'Children: BjAccordionItem nodes only (or fragments wrapping items).',
      'prop-exclusive': 'If true, only one panel open at a time; if false (default), several may stay open.',
      'prop-accordion-className': 'Optional CSS class on the .bj-accordions wrapper.',
      'prop-item-id': 'Stable item id (internal state key, passed to toggle).',
      'prop-item-title': 'Header button label.',
      'prop-item-children': 'Panel body content (ReactNode).',
      'prop-item-className': 'Optional CSS class on the .bj-accordion root.',
    },
  },
})

const codeUsage = `import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjAccordion exclusive>
      <BjAccordionItem id="a1" title="Section 1">
        <p>Contenu 1</p>
      </BjAccordionItem>
      <BjAccordionItem id="a2" title="Section 2">
        <p>Contenu 2</p>
      </BjAccordionItem>
    </BjAccordion>
  )
}`

const codeExclusiveFalse = `import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/react'

/** exclusive omis ou false : plusieurs ids peuvent coexister dans l’état ouvert */
export function MultiOpen() {
  return (
    <BjAccordion exclusive={false}>
      <BjAccordionItem id="x" title="Premier">
        <p>Bloc A</p>
      </BjAccordionItem>
      <BjAccordionItem id="y" title="Deuxième">
        <p>Bloc B</p>
      </BjAccordionItem>
    </BjAccordion>
  )
}`

const codeExclusiveTrue = `import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/react'

/** exclusive true : ouvrir un item ferme les autres */
export function SingleOpen() {
  return (
    <BjAccordion exclusive>
      <BjAccordionItem id="one" title="Onglet 1">
        <p>Contenu 1</p>
      </BjAccordionItem>
      <BjAccordionItem id="two" title="Onglet 2">
        <p>Contenu 2</p>
      </BjAccordionItem>
    </BjAccordion>
  )
}`

const codeItemRich = `import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/react'

export function RichPanels() {
  return (
    <BjAccordion>
      <BjAccordionItem id="faq-1" title="Question fréquente" className="my-accordion-item">
        <ul>
          <li>Élément 1</li>
          <li>Élément 2</li>
        </ul>
      </BjAccordionItem>
      <BjAccordionItem id="faq-2" title="Autre section" className="my-accordion-item">
        <p>Texte et <strong>mise en forme</strong>.</p>
      </BjAccordionItem>
    </BjAccordion>
  )
}`

const codeCrossClass = `import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/react'

export function StyledGroup() {
  return (
    <BjAccordion exclusive className="my-accordions">
      <BjAccordionItem id="a" title="Panneau A" className="my-item">
        <p>Corps A</p>
      </BjAccordionItem>
      <BjAccordionItem id="b" title="Panneau B" className="my-item">
        <p>Corps B</p>
      </BjAccordionItem>
    </BjAccordion>
  )
}`

const accordionProps = computed(() => [
  { name: 'exclusive', description: t('prop-exclusive') },
  { name: 'children', description: t('prop-children-accordion') },
  { name: 'className', description: t('prop-accordion-className') },
])

const itemProps = computed(() => [
  { name: 'id', description: t('prop-item-id') },
  { name: 'title', description: t('prop-item-title') },
  { name: 'children', description: t('prop-item-children') },
  { name: 'className', description: t('prop-item-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-accordion-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-accordions">
        <div class="bj-accordion bj-accordion--expanded">
          <button
            type="button"
            class="bj-accordion__btn"
            aria-expanded="true"
            aria-controls="react-acc-p1"
            id="react-acc-b1"
          >
            Section 1
          </button>
          <div
            id="react-acc-p1"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="react-acc-b1"
            data-bj-expanded
          >
            <p class="bj-text-sm">Contenu 1</p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            aria-expanded="false"
            aria-controls="react-acc-p2"
            id="react-acc-b2"
          >
            Section 2
          </button>
          <div id="react-acc-p2" class="bj-accordion__body" role="region" aria-labelledby="react-acc-b2">
            <p class="bj-text-sm">Contenu 2</p>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-accordion-exclusive-false" :title="t('section-exclusive-false')">
    <DocsCode :code="codeExclusiveFalse" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-exclusive-true" :title="t('section-exclusive-true')">
    <DocsCode :code="codeExclusiveTrue" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-item-children" :title="t('section-item-children')">
    <DocsPreview>
      <div class="bj-accordions my-accordions-preview">
        <div class="bj-accordion my-accordion-item bj-accordion--expanded">
          <button type="button" class="bj-accordion__btn" aria-expanded="true">Question fréquente</button>
          <div class="bj-accordion__body" role="region" data-bj-expanded>
            <ul class="bj-text-sm">
              <li>Élément 1</li>
              <li>Élément 2</li>
            </ul>
          </div>
        </div>
        <div class="bj-accordion my-accordion-item">
          <button type="button" class="bj-accordion__btn" aria-expanded="false">Autre section</button>
          <div class="bj-accordion__body" role="region">
            <p class="bj-text-sm">Texte et <strong>mise en forme</strong>.</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeItemRich" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-prop-values" :title="t('section-prop-values')">
    <DocsPreview>
      <div class="bj-accordions">
        <div class="bj-accordion bj-accordion--expanded">
          <button type="button" class="bj-accordion__btn" aria-expanded="true">exclusive false — plusieurs ouverts possibles</button>
          <div class="bj-accordion__body" role="region" data-bj-expanded>
            <p class="bj-text-sm">Prop : exclusive={false} ou omise</p>
          </div>
        </div>
        <div class="bj-accordion bj-accordion--expanded">
          <button type="button" class="bj-accordion__btn" aria-expanded="true">Deuxième ouvert en même temps</button>
          <div class="bj-accordion__body" role="region" data-bj-expanded>
            <p class="bj-text-sm">Même groupe</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExclusiveFalse" lang="tsx" />
    <DocsPreview style="margin-top: var(--bj-spacing-4v)">
      <div class="bj-accordions">
        <div class="bj-accordion bj-accordion--expanded">
          <button type="button" class="bj-accordion__btn" aria-expanded="true">exclusive true — seul cet onglet</button>
          <div class="bj-accordion__body" role="region" data-bj-expanded>
            <p class="bj-text-sm">Prop : attribut <code>exclusive</code> (booléen true)</p>
          </div>
        </div>
        <div class="bj-accordion">
          <button type="button" class="bj-accordion__btn" aria-expanded="false">Autre (fermé)</button>
          <div class="bj-accordion__body" role="region">
            <p class="bj-text-sm">…</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExclusiveTrue" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-cross" :title="t('section-cross')">
    <DocsPreview>
      <div class="bj-accordions my-accordions-preview">
        <div class="bj-accordion my-accordion-item">
          <button type="button" class="bj-accordion__btn" aria-expanded="false">Panneau A</button>
          <div class="bj-accordion__body" role="region"><p class="bj-text-sm">Corps A</p></div>
        </div>
        <div class="bj-accordion my-accordion-item bj-accordion--expanded">
          <button type="button" class="bj-accordion__btn" aria-expanded="true">Panneau B</button>
          <div class="bj-accordion__body" role="region" data-bj-expanded><p class="bj-text-sm">Corps B</p></div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCrossClass" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-callbacks" :title="t('section-callbacks')">
    <p class="bj-text-sm" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('section-callbacks-note') }}</p>
  </DocsSection>

  <DocsSection id="react-accordion-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="accordionProps" />
  </DocsSection>

  <DocsSection id="react-accordion-props-item" :title="t('section-props-item')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="itemProps" />
  </DocsSection>
</template>
