<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Infobulle',
      desc:
        'Texte court au survol ou au focus ; positions haut, bas, gauche, droite.',
      'section-overview': 'Aperçu',
      'overview-intro':
        'Chaque position correspond à une classe modificateur sur',
      'section-top': 'Position haut (défaut)',
      'top-intro':
        'Sans modificateur : le contenu s’affiche au-dessus du libellé.',
      'section-bottom': 'Position bas',
      'bottom-intro': 'Classe',
      'section-left': 'Position gauche',
      'left-intro': 'Classe',
      'section-right': 'Position droite',
      'right-intro': 'Classe',
      'section-variants': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'variants-p-1': 'Sur le contenu pour affichage programmatique.',
      'th-class-attr': 'Classe',
      'th-description': 'Description',
      'prop-container': 'Conteneur (position par défaut : haut, sans modificateur).',
      'prop-content-row':
        'Texte de l’infobulle sur l’élément enfant ; y placer role="tooltip".',
      'prop-position-row':
        'bj-tooltip--bottom, bj-tooltip--left, bj-tooltip--right ; sans classe = position haut.',
      'a11y-note':
        'Le contenu de l’infobulle a <code>role="tooltip"</code> et un <code>id</code> stable ; le déclencheur reçoit <code>aria-describedby</code> vers cet id pour lier la description à l’élément focalisé. <code>aria-hidden</code> suit la visibilité (masqué quand l’infobulle n’est pas affichée). Affichage au survol (<code>mouseenter</code>) et au focus (<code>focusin</code>) ; masquage à la sortie du survol (<code>mouseleave</code>) et à la perte de focus (<code>focusout</code>). <kbd>Échap</kbd> ferme l’infobulle lorsque le focus est sur le déclencheur. Ne réservez pas une information indispensable au seul survol ou à l’infobulle : exposez aussi ce contenu ailleurs dans la page.',
    },
    en: {
      title: 'Tooltip',
      desc:
        'Short text on hover or focus; top, bottom, left, and right positions.',
      'section-overview': 'Overview',
      'overview-intro': 'Each position maps to a modifier on',
      'section-top': 'Top (default)',
      'top-intro': 'No modifier: content appears above the label.',
      'section-bottom': 'Bottom position',
      'bottom-intro': 'Use',
      'section-left': 'Left position',
      'left-intro': 'Use',
      'section-right': 'Right position',
      'right-intro': 'Use',
      'section-variants': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'variants-p-1': 'on the content for programmatic display.',
      'th-class-attr': 'Class',
      'th-description': 'Description',
      'prop-container': 'Wrapper (default position is top, no modifier).',
      'prop-content-row':
        'Tooltip copy on the child element; add role="tooltip" there.',
      'prop-position-row':
        'bj-tooltip--bottom, bj-tooltip--left, bj-tooltip--right; omit modifier for top.',
      'a11y-note':
        'Tooltip content uses <code>role="tooltip"</code> and a stable <code>id</code>; the trigger gets <code>aria-describedby</code> pointing to that id so the description is associated with the focused element. <code>aria-hidden</code> tracks visibility (hidden when the tooltip is not shown). Shown on <code>mouseenter</code> and <code>focusin</code>; hidden on <code>mouseleave</code> and <code>focusout</code>. <kbd>Escape</kbd> dismisses the tooltip while focus is on the trigger. Do not put essential information only in a tooltip—surface critical content elsewhere on the page as well.',
    },
  },
})

const codeTop = `<span class="bj-tooltip">
  Libellé
  <span class="bj-tooltip__content" role="tooltip">Texte au-dessus</span>
</span>`

const codeBottom = `<span class="bj-tooltip bj-tooltip--bottom">
  Libellé
  <span class="bj-tooltip__content" role="tooltip">Texte en dessous</span>
</span>`

const codeLeft = `<span class="bj-tooltip bj-tooltip--left">
  Libellé
  <span class="bj-tooltip__content" role="tooltip">À gauche</span>
</span>`

const codeRight = `<span class="bj-tooltip bj-tooltip--right">
  Libellé
  <span class="bj-tooltip__content" role="tooltip">À droite</span>
</span>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  { name: 'bj-tooltip', description: t('prop-container') },
  {
    name: 'bj-tooltip__content + role="tooltip"',
    description: t('prop-content-row'),
  },
  {
    name: 'bj-tooltip--bottom / bj-tooltip--left / bj-tooltip--right',
    description: t('prop-position-row'),
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
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-apercu" :title="t('section-overview')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('overview-intro') }}
      <code>bj-tooltip</code>.
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-6v);
        align-items: center;
        min-height: 6rem;
      "
    >
      <span class="bj-tooltip">
        Haut
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--bottom">
        Bas
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--left">
        Gauche
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--right">
        Droite
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-top" :title="t('section-top')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('top-intro') }}
    </p>
    <DocsPreview style="padding: var(--bj-spacing-6v) 0">
      <span class="bj-tooltip">
        Survoler ou focus
        <span class="bj-tooltip__content" role="tooltip">Infobulle en haut</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeTop" />
  </DocsSection>

  <DocsSection id="sec-bottom" :title="t('section-bottom')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('bottom-intro') }}
      <code>bj-tooltip--bottom</code>.
    </p>
    <DocsPreview style="padding: var(--bj-spacing-6v) 0">
      <span class="bj-tooltip bj-tooltip--bottom">
        Bas
        <span class="bj-tooltip__content" role="tooltip">Sous le libellé</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeBottom" />
  </DocsSection>

  <DocsSection id="sec-left" :title="t('section-left')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('left-intro') }}
      <code>bj-tooltip--left</code>.
    </p>
    <DocsPreview
      style="
        padding: var(--bj-spacing-4v) var(--bj-spacing-10v);
        min-height: 4rem;
      "
    >
      <span class="bj-tooltip bj-tooltip--left">
        Gauche
        <span class="bj-tooltip__content" role="tooltip">À côté</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeLeft" />
  </DocsSection>

  <DocsSection id="sec-right" :title="t('section-right')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('right-intro') }}
      <code>bj-tooltip--right</code>.
    </p>
    <DocsPreview
      style="
        padding: var(--bj-spacing-4v) var(--bj-spacing-10v);
        min-height: 4rem;
      "
    >
      <span class="bj-tooltip bj-tooltip--right">
        Droite
        <span class="bj-tooltip__content" role="tooltip">À côté</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeRight" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>data-bj-expanded</code>
      {{ t('variants-p-1') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
