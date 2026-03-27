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
      title: 'Liste déroulante',
      desc: 'Choix d\u2019une option dans une liste fermée, avec styles homogènes aux autres champs.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-select--error</code> pour l\u2019état d\u2019erreur. Désactivation native <code>disabled</code>.',
      'section-searchable': 'Variante avec recherche',
      'section-searchable-body':
        'Les classes <code>bj-select-custom*</code> remplacent le select natif par un panneau déroulant avec champ de recherche intégré.',
      'section-native-full-body':
        'Le premier bloc combine <code>bj-label</code>, <code>bj-hint</code>, une option vide désactivée comme <code>placeholder</code>, et un message <code>bj-message--info</code>.',
      'section-searchable-closed':
        'Recherche : fermé et libellé du placeholder',
      'section-searchable-closed-body':
        'Sans valeur sélectionnée, le déclencheur utilise <code>bj-select-custom__trigger--placeholder</code>. Ouvrir le panneau en ajoutant <code>bj-select-custom--open</code> sur le conteneur.',
      'section-searchable-open':
        'Recherche : panneau ouvert',
      'section-searchable-open-body':
        'Option active\u00a0: <code>bj-select-custom__option--active</code>. Option grisée\u00a0: <code>aria-disabled="true"</code> sur le <code>li</code>.',
      'section-searchable-empty':
        'Recherche : aucun résultat',
      'section-searchable-empty-body':
        'Afficher <code>bj-select-custom__no-results</code> lorsque le filtre ne renvoie aucune option.',
      'section-searchable-error':
        'Recherche : erreur',
      'section-searchable-error-body':
        'Avec la recherche, <code>bj-select--error</code> se place sur <code>bj-select-group</code> pour la bordure du déclencheur.',
      'section-search-placeholder':
        'Placeholder du champ de recherche',
      'section-search-placeholder-body':
        'Personnalisez le filtre via <code>placeholder</code> sur <code>bj-select-custom__search</code> (ex.\u00a0«\u00a0Filtrer les communes…\u00a0»).',
      'section-searchable-recap': 'Marquage complet (recherche)',
      'section-searchable-disabled': 'Recherche : désactivé',
      'section-searchable-disabled-body':
        'Comme pour le select natif, utilisez l’attribut <code>disabled</code> sur le déclencheur.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-label-desc': 'Libellé du champ.',
      'prop-hint-desc': 'Texte d’aide sous le libellé.',
      'prop-select-group': 'Groupe label + select.',
      'prop-select': 'Liste déroulante.',
      'prop-select-error': 'Bordure d\u2019erreur.',
      'prop-select-group-error':
        'Variante recherche\u00a0: <code>bj-select--error</code> sur le groupe pour l’état d’erreur du déclencheur.',
      'prop-message-select':
        'Sous le champ\u00a0: <code>bj-message--info</code> ou <code>bj-message--error</code>.',
      'prop-custom-open':
        'État ouvert (chevron, panneau affiché).',
      'prop-trigger-placeholder':
        'Style du texte du déclencheur sans valeur sélectionnée.',
      'prop-option-active':
        'Surbrillance d’option (clavier ou survol).',
      'prop-no-results':
        'Texte lorsque la recherche est vide.',
      'prop-custom': 'Conteneur du select custom.',
      'prop-custom-trigger': 'Bouton déclencheur.',
      'prop-custom-panel': 'Panneau déroulant.',
      'prop-custom-search': 'Champ de recherche dans le panneau.',
      'prop-custom-listbox': 'Liste des options.',
      'prop-custom-option': 'Élément d\u2019option.',
      'a11y-note':
        'Liez le <code>label</code> au <code>select</code>. En erreur\u00a0: <code>aria-invalid</code> et message relié par <code>aria-describedby</code>. En mode recherche, le trigger porte <code>role="combobox"</code> et la liste <code>role="listbox"</code>.',
    },
    en: {
      title: 'Select (dropdown)',
      desc: 'Pick one option from a closed list, with styling consistent with other fields.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-select--error</code> for the error state. Native disable with <code>disabled</code>.',
      'section-searchable': 'Searchable variant',
      'section-searchable-body':
        'The <code>bj-select-custom*</code> classes replace the native select with a dropdown panel featuring a built-in search field.',
      'section-native-full-body':
        'The first block combines <code>bj-label</code>, <code>bj-hint</code>, a disabled empty <code>option</code> as the placeholder, and a <code>bj-message--info</code> message.',
      'section-searchable-closed':
        'Searchable: closed and placeholder label',
      'section-searchable-closed-body':
        'With no value selected, the trigger uses <code>bj-select-custom__trigger--placeholder</code>. Add <code>bj-select-custom--open</code> on the wrapper when the panel is visible.',
      'section-searchable-open':
        'Searchable: open panel',
      'section-searchable-open-body':
        'Active option: <code>bj-select-custom__option--active</code>. Disabled option: <code>aria-disabled="true"</code> on the <code>li</code>.',
      'section-searchable-empty':
        'Searchable: no results',
      'section-searchable-empty-body':
        'Render <code>bj-select-custom__no-results</code> when the filter matches no option.',
      'section-searchable-error':
        'Searchable: error state',
      'section-searchable-error-body':
        'For the searchable variant, put <code>bj-select--error</code> on <code>bj-select-group</code> to style the trigger border.',
      'section-search-placeholder':
        'Search field placeholder',
      'section-search-placeholder-body':
        'Customize the filter via the <code>placeholder</code> on <code>bj-select-custom__search</code> (e.g. “Filter municipalities…”).',
      'section-searchable-recap': 'Full searchable markup',
      'section-searchable-disabled': 'Searchable: disabled',
      'section-searchable-disabled-body':
        'Like the native select, set <code>disabled</code> on the trigger button.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-label-desc': 'Field label.',
      'prop-hint-desc': 'Help text below the label.',
      'prop-select-group': 'Label + select group.',
      'prop-select': 'Dropdown list.',
      'prop-select-error': 'Error border.',
      'prop-select-group-error':
        'Searchable variant: <code>bj-select--error</code> on the group for the trigger error border.',
      'prop-message-select':
        'Below the field: <code>bj-message--info</code> or <code>bj-message--error</code>.',
      'prop-custom-open':
        'Open state (chevron, visible panel).',
      'prop-trigger-placeholder':
        'Trigger text style when nothing is selected.',
      'prop-option-active':
        'Highlighted option (keyboard or hover).',
      'prop-no-results':
        'Copy when the search matches nothing.',
      'prop-custom': 'Custom select container.',
      'prop-custom-trigger': 'Trigger button.',
      'prop-custom-panel': 'Dropdown panel.',
      'prop-custom-search': 'Search field inside the panel.',
      'prop-custom-listbox': 'Options list.',
      'prop-custom-option': 'Option element.',
      'a11y-note':
        'Link the <code>label</code> to the <code>select</code>. On error: <code>aria-invalid</code> and message linked via <code>aria-describedby</code>. In searchable mode the trigger has <code>role="combobox"</code> and the list <code>role="listbox"</code>.',
    },
  },
})

const codeExample = `<div class="bj-select-group">
  <label class="bj-label" for="s1">Commune</label>
  <span class="bj-hint">Choisissez la commune de résidence.</span>
  <select class="bj-select" id="s1">
    <option value="" disabled selected hidden>Sélectionner\u2026</option>
    <option value="cotonou">Cotonou</option>
  </select>
  <p class="bj-message bj-message--info" role="status">Modifiable jusqu’à validation.</p>
</div>`

const codeNativeError = `<select class="bj-select bj-select--error" aria-invalid="true" aria-describedby="s-err">
  <option value="">Choisir\u2026</option>
</select>
<p id="s-err" class="bj-message bj-message--error" role="alert">Champ obligatoire.</p>`

const codeSearchableClosed = `<div class="bj-select-group">
  <label class="bj-label" for="sc-closed">Commune</label>
  <div class="bj-select-custom">
    <button id="sc-closed" type="button" class="bj-select-custom__trigger bj-select-custom__trigger--placeholder"
      role="combobox" aria-expanded="false" aria-haspopup="listbox">
      <span>Sélectionner une commune\u2026</span>
      <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
    </button>
  </div>
</div>`

const codeSearchableOpen = `<div class="bj-select-custom bj-select-custom--open">
  <button type="button" class="bj-select-custom__trigger" role="combobox" aria-expanded="true" aria-haspopup="listbox">
    <span>Cotonou</span>
    <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
  </button>
  <div class="bj-select-custom__panel">
    <input class="bj-select-custom__search" type="text" placeholder="Filtrer\u2026" />
    <ul class="bj-select-custom__listbox" role="listbox">
      <li class="bj-select-custom__option" role="option" aria-selected="true">Cotonou</li>
      <li class="bj-select-custom__option bj-select-custom__option--active" role="option">Porto-Novo</li>
      <li class="bj-select-custom__option" role="option" aria-disabled="true">Indisponible</li>
    </ul>
  </div>
</div>`

const codeSearchableNoResults = `<div class="bj-select-custom bj-select-custom--open">
  <button type="button" class="bj-select-custom__trigger" role="combobox" aria-expanded="true" aria-haspopup="listbox">
    <span>Commune</span>
    <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
  </button>
  <div class="bj-select-custom__panel">
    <input class="bj-select-custom__search" type="text" placeholder="Rechercher\u2026" value="zzz" />
    <p class="bj-select-custom__no-results">Aucun résultat</p>
  </div>
</div>`

const codeSearchableError = `<div class="bj-select-group bj-select--error">
  <label class="bj-label" for="sc-err">Statut</label>
  <div class="bj-select-custom">
    <button id="sc-err" type="button" class="bj-select-custom__trigger bj-select-custom__trigger--placeholder"
      role="combobox" aria-invalid="true" aria-expanded="false" aria-haspopup="listbox" aria-describedby="sc-err-msg">
      <span>Choisir\u2026</span>
      <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
    </button>
  </div>
  <p id="sc-err-msg" class="bj-message bj-message--error" role="alert">Sélection requise.</p>
</div>`

const codeSearchable = `<div class="bj-select-group">
  <label class="bj-label" for="sc1">Commune</label>
  <div class="bj-select-custom">
    <button id="sc1" type="button" class="bj-select-custom__trigger"
      role="combobox" aria-expanded="true" aria-haspopup="listbox">
      <span>Cotonou</span>
      <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
    </button>
    <div class="bj-select-custom__panel">
      <input class="bj-select-custom__search"
        type="text" placeholder="Rechercher\u2026" />
      <ul class="bj-select-custom__listbox" role="listbox">
        <li class="bj-select-custom__option"
          role="option" aria-selected="true">Cotonou</li>
        <li class="bj-select-custom__option"
          role="option">Porto-Novo</li>
      </ul>
    </div>
  </div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-label', description: t('prop-label-desc') },
  { name: 'bj-hint', description: t('prop-hint-desc') },
  { name: 'bj-select-group', description: t('prop-select-group') },
  {
    name: 'bj-select-group.bj-select--error',
    description: t('prop-select-group-error'),
  },
  { name: 'bj-select', description: t('prop-select') },
  { name: 'bj-select--error', description: t('prop-select-error') },
  {
    name: 'bj-message--info / bj-message--error',
    description: t('prop-message-select'),
  },
  { name: 'bj-select-custom', description: t('prop-custom') },
  { name: 'bj-select-custom--open', description: t('prop-custom-open') },
  { name: 'bj-select-custom__trigger', description: t('prop-custom-trigger') },
  {
    name: 'bj-select-custom__trigger--placeholder',
    description: t('prop-trigger-placeholder'),
  },
  { name: 'bj-select-custom__panel', description: t('prop-custom-panel') },
  { name: 'bj-select-custom__search', description: t('prop-custom-search') },
  { name: 'bj-select-custom__listbox', description: t('prop-custom-listbox') },
  { name: 'bj-select-custom__option', description: t('prop-custom-option') },
  {
    name: 'bj-select-custom__option--active',
    description: t('prop-option-active'),
  },
  {
    name: 'bj-select-custom__no-results',
    description: t('prop-no-results'),
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

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)"
      v-html="t('section-native-full-body')"
    />
    <DocsPreview>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s1">Commune</label>
        <span id="ex-s1-hint" class="bj-hint"
          >Choisissez la commune de résidence.</span
        >
        <select
          id="ex-s1"
          class="bj-select"
          aria-describedby="ex-s1-hint ex-s1-msg"
        >
          <option value="" disabled selected hidden>Sélectionner…</option>
          <option value="cotonou">Cotonou</option>
          <option value="porto">Porto-Novo</option>
        </select>
        <p id="ex-s1-msg" class="bj-message bj-message--info" role="status">
          Modifiable jusqu’à validation.
        </p>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s2">Statut (erreur)</label>
        <select
          id="ex-s2"
          class="bj-select bj-select--error"
          aria-invalid="true"
          aria-describedby="ex-s2-e"
        >
          <option value="">Choisir…</option>
        </select>
        <p id="ex-s2-e" class="bj-message bj-message--error" role="alert">
          Champ obligatoire.
        </p>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s3">Désactivé</label>
        <select id="ex-s3" class="bj-select" disabled>
          <option>Non modifiable</option>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-variants-body')"
    />
    <DocsCode :code="codeNativeError" />
  </DocsSection>

  <DocsSection id="sec-searchable" :title="t('section-searchable')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)"
      v-html="t('section-searchable-body')"
    />
  </DocsSection>

  <DocsSection
    id="sec-searchable-ferme"
    :title="t('section-searchable-closed')"
  >
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-searchable-closed-body')"
    />
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="ex-sc-closed">Commune</label>
        <div class="bj-select-custom">
          <button
            id="ex-sc-closed"
            type="button"
            class="bj-select-custom__trigger bj-select-custom__trigger--placeholder"
            role="combobox"
            aria-expanded="false"
            aria-haspopup="listbox"
          >
            <span>Sélectionner une commune…</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchableClosed" />
  </DocsSection>

  <DocsSection
    id="sec-searchable-disabled"
    :title="t('section-searchable-disabled')"
  >
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-searchable-disabled-body')"
    />
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="ex-sc-dis">Période</label>
        <div class="bj-select-custom">
          <button
            id="ex-sc-dis"
            type="button"
            class="bj-select-custom__trigger"
            disabled
            role="combobox"
            aria-expanded="false"
            aria-haspopup="listbox"
          >
            <span>2024</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-searchable-ouvert" :title="t('section-searchable-open')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-searchable-open-body')"
    />
    <DocsPreview style="min-height: 16rem">
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="ex-sc-open">Commune</label>
        <div class="bj-select-custom bj-select-custom--open">
          <button
            id="ex-sc-open"
            type="button"
            class="bj-select-custom__trigger"
            role="combobox"
            aria-expanded="true"
            aria-haspopup="listbox"
          >
            <span>Cotonou</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
          <div class="bj-select-custom__panel" style="position: relative">
            <input
              class="bj-select-custom__search"
              type="text"
              placeholder="Filtrer les communes…"
              value="Porto"
            />
            <ul class="bj-select-custom__listbox" role="listbox">
              <li
                class="bj-select-custom__option"
                role="option"
                aria-selected="true"
              >
                Cotonou
              </li>
              <li
                class="bj-select-custom__option bj-select-custom__option--active"
                role="option"
              >
                Porto-Novo
              </li>
              <li
                class="bj-select-custom__option"
                role="option"
                aria-disabled="true"
              >
                Indisponible
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchableOpen" />
  </DocsSection>

  <DocsSection
    id="sec-searchable-vide"
    :title="t('section-searchable-empty')"
  >
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-searchable-empty-body')"
    />
    <DocsPreview style="min-height: 14rem">
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="ex-sc-empty">Commune</label>
        <div class="bj-select-custom bj-select-custom--open">
          <button
            id="ex-sc-empty"
            type="button"
            class="bj-select-custom__trigger"
            role="combobox"
            aria-expanded="true"
            aria-haspopup="listbox"
          >
            <span>Commune</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
          <div class="bj-select-custom__panel" style="position: relative">
            <input
              class="bj-select-custom__search"
              type="text"
              placeholder="Rechercher…"
              value="zzz"
            />
            <p class="bj-select-custom__no-results">Aucun résultat</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchableNoResults" />
  </DocsSection>

  <DocsSection
    id="sec-searchable-erreur"
    :title="t('section-searchable-error')"
  >
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-searchable-error-body')"
    />
    <DocsPreview>
      <div
        class="bj-select-group bj-select--error"
        style="max-width: 24rem"
      >
        <label class="bj-label" for="ex-sc-err">Statut</label>
        <div class="bj-select-custom">
          <button
            id="ex-sc-err"
            type="button"
            class="bj-select-custom__trigger bj-select-custom__trigger--placeholder"
            role="combobox"
            aria-invalid="true"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-describedby="ex-sc-err-msg"
          >
            <span>Choisir…</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
        </div>
        <p id="ex-sc-err-msg" class="bj-message bj-message--error" role="alert">
          Sélection requise.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchableError" />
  </DocsSection>

  <DocsSection
    id="sec-searchable-placeholder-search"
    :title="t('section-search-placeholder')"
  >
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-search-placeholder-body')"
    />
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <div class="bj-select-custom bj-select-custom--open">
          <button
            type="button"
            class="bj-select-custom__trigger"
            role="combobox"
            aria-expanded="true"
            aria-haspopup="listbox"
          >
            <span>Ville</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
          <div class="bj-select-custom__panel" style="position: relative">
            <input
              class="bj-select-custom__search"
              type="text"
              placeholder="Filtrer les communes…"
            />
            <ul class="bj-select-custom__listbox" role="listbox">
              <li class="bj-select-custom__option" role="option">
                Parakou
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection
    id="sec-searchable-recap"
    :title="t('section-searchable-recap')"
  >
    <DocsCode :code="codeSearchable" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
