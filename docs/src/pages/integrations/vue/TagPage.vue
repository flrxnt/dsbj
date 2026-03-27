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
      title: 'BjTag',
      desc: 'Composant Vue pour le tag DSBJ. Variantes, taille, élément sémantique (span, lien, bouton) et fermeture optionnelle.',
      'section-usage': 'Utilisation',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-tags': 'Éléments HTML',
      'section-dismissible': 'Tags fermables',
      'section-combo': 'Variantes × tailles × fermable',
      'section-slot': 'Slot par défaut',
      'section-events': 'Événements',
      'section-props': 'Props',
      'tag-label-span': 'Span',
      'tag-label-a': 'Lien',
      'tag-label-button': 'Bouton',
      'events-dismiss-desc':
        'Au clic sur le bouton de fermeture, le composant émet <code>dismiss</code> (sans retirer le nœud du DOM : gérez la liste côté parent).',
      'dismiss-hint':
        'Préférez <code>tag="span"</code> avec <code>dismissible</code> pour éviter du HTML invalide (pas de bouton dans un lien ou un autre bouton).',
      'prop-variant': 'Variante : default (défaut), action, info, success, warning ou error.',
      'prop-size': 'Taille : md (défaut) ou sm.',
      'prop-dismissible': 'Affiche le bouton de retrait et émet dismiss au clic.',
      'prop-tag': 'Élément racine : span (défaut), a ou button.',
    },
    en: {
      title: 'BjTag',
      desc: 'Vue component for the DSBJ tag. Variants, size, root element (span, link, button), and optional dismiss.',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-tags': 'HTML elements',
      'section-dismissible': 'Dismissible tags',
      'section-combo': 'Variants × sizes × dismissible',
      'section-slot': 'Default slot',
      'section-events': 'Events',
      'section-props': 'Props',
      'tag-label-span': 'Span',
      'tag-label-a': 'Link',
      'tag-label-button': 'Button',
      'events-dismiss-desc':
        'Clicking the close control emits <code>dismiss</code> (the node is not removed automatically—handle the list in the parent).',
      'dismiss-hint':
        'Prefer <code>tag="span"</code> with <code>dismissible</code> to avoid invalid HTML (no button inside a link or another button).',
      'prop-variant': 'Variant: default, action, info, success, warning, or error.',
      'prop-size': 'Size: md (default) or sm.',
      'prop-dismissible': 'Shows a remove control and emits dismiss when clicked.',
      'prop-tag': 'Root element: span (default), a, or button.',
    },
  },
})

const codeUsage = `<script setup>
import { BjTag } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjTag variant="default" size="md" tag="span">Étiquette</BjTag>
  <BjTag variant="info" :dismissible="true" @dismiss="onDismiss">Fermable</BjTag>
</template>`

const codeVariantDefault = `<BjTag variant="default" tag="span">Défaut</BjTag>`
const codeVariantAction = `<BjTag variant="action" tag="span">Action</BjTag>`
const codeVariantInfo = `<BjTag variant="info" tag="span">Info</BjTag>`
const codeVariantSuccess = `<BjTag variant="success" tag="span">Succès</BjTag>`
const codeVariantWarning = `<BjTag variant="warning" tag="span">Attention</BjTag>`
const codeVariantError = `<BjTag variant="error" tag="span">Erreur</BjTag>`

const codeSizes = `<BjTag size="sm" tag="span">Petit</BjTag>
<BjTag size="md" tag="span">Moyen</BjTag>`

const codeTags = `<BjTag tag="span">Span (défaut)</BjTag>
<BjTag tag="a" href="#">Lien tag</BjTag>
<BjTag tag="button" type="button">Bouton tag</BjTag>`

const codeDismissVariants = `<BjTag variant="default" dismissible @dismiss="onDismiss">Défaut</BjTag>
<BjTag variant="action" dismissible @dismiss="onDismiss">Action</BjTag>
<BjTag variant="info" dismissible @dismiss="onDismiss">Info</BjTag>
<BjTag variant="success" dismissible @dismiss="onDismiss">Succès</BjTag>
<BjTag variant="warning" dismissible @dismiss="onDismiss">Attention</BjTag>
<BjTag variant="error" dismissible @dismiss="onDismiss">Erreur</BjTag>`

const codeCombo = `<BjTag variant="info" size="sm" dismissible @dismiss="onDismiss">Info sm</BjTag>
<BjTag variant="info" size="md" dismissible @dismiss="onDismiss">Info md</BjTag>
<BjTag variant="warning" size="sm">Warning sm</BjTag>
<BjTag variant="warning" size="md">Warning md</BjTag>
<BjTag variant="error" size="sm" dismissible @dismiss="onDismiss">Err sm</BjTag>
<BjTag variant="error" size="md" dismissible @dismiss="onDismiss">Err md</BjTag>
<BjTag variant="action" size="sm">Action sm</BjTag>
<BjTag variant="action" size="md" dismissible @dismiss="onDismiss">Action md</BjTag>
<BjTag variant="success" size="sm" dismissible @dismiss="onDismiss">OK sm</BjTag>
<BjTag variant="success" size="md" dismissible @dismiss="onDismiss">OK md</BjTag>
<BjTag variant="default" size="sm" dismissible @dismiss="onDismiss">Def sm</BjTag>
<BjTag variant="default" size="md" dismissible @dismiss="onDismiss">Def md</BjTag>`

const codeSlotExample = `<BjTag variant="info" tag="span">
  <i class="ri-price-tag-3-line" aria-hidden="true" style="margin-right: 0.25rem" />
  Slot personnalisé
</BjTag>`

const codeEvents = `function onDismiss() {
  console.log('Tag dismissed')
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'dismissible', description: t('prop-dismissible') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tag-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag">Défaut</span>
    </DocsPreview>
    <DocsCode :code="codeVariantDefault" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-4v); display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--action">Action</span>
    </DocsPreview>
    <DocsCode :code="codeVariantAction" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-4v); display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--info">Info</span>
    </DocsPreview>
    <DocsCode :code="codeVariantInfo" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-4v); display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--success">Succès</span>
    </DocsPreview>
    <DocsCode :code="codeVariantSuccess" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-4v); display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--warning">Attention</span>
    </DocsPreview>
    <DocsCode :code="codeVariantWarning" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-4v); display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--error">Erreur</span>
    </DocsPreview>
    <DocsCode :code="codeVariantError" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--sm">Petit</span>
      <span class="bj-tag">Moyen</span>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-html" :title="t('section-tags')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag">{{ t('tag-label-span') }}</span>
      <a href="#" class="bj-tag" @click.prevent>{{ t('tag-label-a') }}</a>
      <button type="button" class="bj-tag">{{ t('tag-label-button') }}</button>
    </DocsPreview>
    <DocsCode :code="codeTags" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-dismiss" :title="t('section-dismissible')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('dismiss-hint')" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--dismiss">
        Défaut
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--action bj-tag--dismiss">
        Action
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--info bj-tag--dismiss">
        Info
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--success bj-tag--dismiss">
        Succès
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--warning bj-tag--dismiss">
        Attention
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--error bj-tag--dismiss">
        Erreur
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
    </DocsPreview>
    <DocsCode :code="codeDismissVariants" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-combo" :title="t('section-combo')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        gap: var(--bj-spacing-2v);
        align-items: start;
      "
    >
      <span class="bj-tag bj-tag--info bj-tag--sm bj-tag--dismiss">
        Info sm ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--info bj-tag--dismiss">
        Info md ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--warning bj-tag--sm">Warning sm</span>
      <span class="bj-tag bj-tag--warning">Warning md</span>
      <span class="bj-tag bj-tag--error bj-tag--sm bj-tag--dismiss">
        Err sm ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--error bj-tag--dismiss">
        Err md ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--action bj-tag--sm">Action sm</span>
      <span class="bj-tag bj-tag--action bj-tag--dismiss">
        Action md ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--success bj-tag--sm bj-tag--dismiss">
        OK sm ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--success bj-tag--dismiss">
        OK md ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--sm bj-tag--dismiss">
        Def sm ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
      <span class="bj-tag bj-tag--dismiss">
        Def md ×
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </span>
    </DocsPreview>
    <DocsCode :code="codeCombo" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-slot" :title="t('section-slot')">
    <DocsPreview>
      <span class="bj-tag bj-tag--info">
        <i class="ri-price-tag-3-line" aria-hidden="true" style="margin-right: 0.25rem" />
        Slot personnalisé
      </span>
    </DocsPreview>
    <DocsCode :code="codeSlotExample" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-events" :title="t('section-events')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('events-dismiss-desc')" />
    <DocsCode :code="codeEvents" lang="ts" />
  </DocsSection>

  <DocsSection id="vue-tag-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
