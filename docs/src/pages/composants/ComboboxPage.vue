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
      title: 'Combobox',
      desc: 'Champ de saisie avec autocomplétion : l\u2019utilisateur tape pour filtrer une liste déroulante d\u2019options.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        'Le combobox supporte les états d\u2019erreur et de désactivation, ainsi qu\u2019un message « aucun résultat » configurable.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-combobox': 'Conteneur principal.',
      'prop-input-wrap': 'Enveloppe de l\u2019input et de l\u2019icône.',
      'prop-input': 'Champ texte avec role="combobox".',
      'prop-icon': 'Flèche d\u2019indication d\u2019ouverture.',
      'prop-listbox': 'Liste déroulante des options.',
      'prop-option': 'Élément de la liste.',
      'prop-option-active': 'Option survolée / navigée au clavier.',
      'prop-no-results': 'Message quand aucune option ne correspond.',
      'prop-error': 'État d\u2019erreur.',
      'prop-open': 'État ouvert (rotation de l\u2019icône).',
      'a11y-note':
        'L\u2019input porte <code>role="combobox"</code>, <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> et <code>aria-activedescendant</code>. La liste utilise <code>role="listbox"</code> avec des <code>role="option"</code>. Navigation clavier : flèches, <kbd>Entrée</kbd> pour sélectionner, <kbd>Échap</kbd> pour fermer.',
    },
    en: {
      title: 'Combobox',
      desc: 'Autocomplete input: the user types to filter a dropdown list of options.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        'The combobox supports error and disabled states, along with a configurable "no results" message.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-combobox': 'Main container.',
      'prop-input-wrap': 'Input + icon wrapper.',
      'prop-input': 'Text input with role="combobox".',
      'prop-icon': 'Arrow open indicator.',
      'prop-listbox': 'Options dropdown list.',
      'prop-option': 'List item.',
      'prop-option-active': 'Hovered / keyboard-focused option.',
      'prop-no-results': 'Message when no option matches.',
      'prop-error': 'Error state.',
      'prop-open': 'Open state (rotates icon).',
      'a11y-note':
        'The input has <code>role="combobox"</code>, <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> and <code>aria-activedescendant</code>. The list uses <code>role="listbox"</code> with <code>role="option"</code> children. Keyboard: arrows, <kbd>Enter</kbd> to select, <kbd>Escape</kbd> to close.',
    },
  },
})

const codeExample = `<div class="bj-combobox">
  <label class="bj-label" for="cb1">Ville</label>
  <div class="bj-combobox__input-wrap">
    <input id="cb1" class="bj-combobox__input" type="text"
      role="combobox" aria-autocomplete="list"
      aria-expanded="true" placeholder="Rechercher une ville…" />
    <i class="ri-arrow-down-s-line bj-combobox__icon"></i>
  </div>
  <ul class="bj-combobox__listbox" role="listbox">
    <li class="bj-combobox__option" role="option">Cotonou</li>
    <li class="bj-combobox__option bj-combobox__option--active"
        role="option">Porto-Novo</li>
  </ul>
</div>`

const propsRows = computed(() => [
  { name: 'bj-combobox', description: t('prop-combobox') },
  { name: 'bj-combobox__input-wrap', description: t('prop-input-wrap') },
  { name: 'bj-combobox__input', description: t('prop-input') },
  { name: 'bj-combobox__icon', description: t('prop-icon') },
  { name: 'bj-combobox__listbox', description: t('prop-listbox') },
  { name: 'bj-combobox__option', description: t('prop-option') },
  { name: 'bj-combobox__option--active', description: t('prop-option-active') },
  { name: 'bj-combobox__no-results', description: t('prop-no-results') },
  { name: 'bj-combobox--error', description: t('prop-error') },
  { name: 'bj-combobox--open', description: t('prop-open') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview style="min-height: 16rem">
      <div class="bj-combobox bj-combobox--open" style="max-width: 24rem">
        <label class="bj-label" for="demo-cb1">Ville</label>
        <span class="bj-hint">Commune de résidence</span>
        <div class="bj-combobox__input-wrap">
          <input
            id="demo-cb1"
            class="bj-combobox__input"
            type="text"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="true"
            placeholder="Rechercher une ville…"
            value="Porto"
          />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <ul class="bj-combobox__listbox" role="listbox" style="position: relative">
          <li class="bj-combobox__option bj-combobox__option--active" role="option" aria-selected="true">Porto-Novo</li>
          <li class="bj-combobox__option" role="option">Porto (autre)</li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('section-variants-body') }}
    </p>
    <DocsPreview>
      <div class="bj-combobox bj-combobox--error" style="max-width: 24rem">
        <label class="bj-label" for="demo-cb2">Commune (erreur)</label>
        <div class="bj-combobox__input-wrap">
          <input id="demo-cb2" class="bj-combobox__input" type="text" placeholder="Rechercher…" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <p class="bj-message bj-message--error" role="alert">Champ obligatoire.</p>
      </div>
      <div class="bj-combobox" style="max-width: 24rem">
        <label class="bj-label" for="demo-cb3">Désactivé</label>
        <div class="bj-combobox__input-wrap">
          <input id="demo-cb3" class="bj-combobox__input" type="text" disabled placeholder="Non modifiable" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
