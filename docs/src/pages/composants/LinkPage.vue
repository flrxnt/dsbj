<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Lien',
      desc:
        'Liens de texte soulignés aux couleurs d’action du DSBJ, avec variantes de taille et disposition d’icônes. Un lien ouvrant un nouvel onglet affiche automatiquement une icône « externe » lorsque <code class="bj-text-sm">target="_blank"</code> est utilisé.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'classes-footnote':
        'Avec <code>target="_blank"</code>, le DSBJ ajoute une glyphe externe via pseudo-élément (police Remix Icon).',
      'a11y-note':
        'Les liens vers un nouvel onglet doivent l’indiquer dans le libellé ou un texte masqué, en complément de <code>rel="noopener noreferrer"</code>. Le focus visible natif du navigateur doit rester actif ; évitez <code>outline: none</code> sans alternative.',
      'prop-bj-link':
        'Lien standard : couleur d’action, soulignement, survol renforcé.',
      'prop-bj-link-sizes': 'Corps de texte plus petit ou plus grand.',
      'prop-bj-link-icon-left': 'Flex avec icône avant le libellé.',
      'prop-bj-link-icon-right': 'Flex avec icône après le libellé.',
      'prop-bj-link-reset':
        'Hérite de la couleur du texte ; soulignement au survol.',
    },
    en: {
      title: 'Link',
      desc:
        'Underlined text links in DSBJ action colors, with size variants and icon placement. Links that open a new tab automatically show an “external” icon when <code class="bj-text-sm">target="_blank"</code> is used.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'classes-footnote':
        'With <code>target="_blank"</code>, DSBJ adds an external glyph via a pseudo-element (Remix Icon font).',
      'a11y-note':
        'Links that open a new tab should say so in the label or visually hidden text, along with <code>rel="noopener noreferrer"</code>. Keep the browser’s native visible focus; avoid <code>outline: none</code> without a replacement.',
      'prop-bj-link':
        'Standard link: action color, underline, stronger hover.',
      'prop-bj-link-sizes': 'Smaller or larger body text.',
      'prop-bj-link-icon-left': 'Flex with icon before the label.',
      'prop-bj-link-icon-right': 'Flex with icon after the label.',
      'prop-bj-link-reset':
        'Inherits text color; underline on hover.',
    },
  },
})

const codeExemple = `<a href="#" class="bj-link">Consulter la démarche</a>`

const codeVariantes = `<a href="#" class="bj-link bj-link--sm">…</a>
<a href="#" class="bj-link bj-link--icon-left"><i class="ri-arrow-left-line"></i> …</a>
<a href="https://…" class="bj-link" target="_blank" rel="noopener noreferrer">…</a>`

const propsRows = computed(() => [
  {
    name: 'bj-link',
    description: t('prop-bj-link'),
  },
  {
    name: 'bj-link--sm / bj-link--lg',
    description: t('prop-bj-link-sizes'),
  },
  {
    name: 'bj-link--icon-left',
    description: t('prop-bj-link-icon-left'),
  },
  {
    name: 'bj-link--icon-right',
    description: t('prop-bj-link-icon-right'),
  },
  {
    name: 'bj-link--reset',
    description: t('prop-bj-link-reset'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
    v-html="t('desc')"
  />

  <DocsSection id="exemple-link" :title="t('section-exemple')">
    <DocsPreview>
      <a href="#" class="bj-link">Consulter la démarche</a>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-link" :title="t('section-variantes')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
        align-items: flex-start;
      "
    >
      <a href="#" class="bj-link bj-link--sm">Lien petit</a>
      <a href="#" class="bj-link bj-link--lg">Lien grand</a>
      <a href="#" class="bj-link bj-link--icon-left"
        ><i class="ri-arrow-left-line"></i> Retour à la liste</a
      >
      <a href="#" class="bj-link bj-link--icon-right"
        >Suite <i class="ri-arrow-right-line"></i
      ></a>
      <p class="bj-text-md" style="margin: 0">
        Dans un paragraphe :
        <a href="#" class="bj-link bj-link--reset">lien reset</a>
        reprend la couleur du texte.
      </p>
      <a
        href="https://www.gouv.example"
        class="bj-link"
        target="_blank"
        rel="noopener noreferrer"
        >Site officiel (nouvel onglet)</a
      >
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-link" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
    <p
      class="bj-text-sm"
      style="color: var(--bj-text-mention); margin-top: var(--bj-spacing-2v)"
      v-html="t('classes-footnote')"
    />
  </DocsSection>

  <DocsSection id="a11y-link" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
