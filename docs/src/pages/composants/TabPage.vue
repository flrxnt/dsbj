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
      title: 'Onglet',
      desc:
        'Regroupement de panneaux affichés un à la fois, avec barre d’onglets et prise en charge clavier fournie par le script DSBJ.',
      'section-example': 'Exemple',
      'section-keyboard': 'Navigation clavier',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'th-class-attr': 'Classe / attribut',
      'th-description': 'Description',
      'keyboard-1': 'Lorsqu’un onglet a le focus, utilisez',
      'keyboard-2': 'et',
      'keyboard-3':
        'pour passer à l’onglet suivant ou précédent (le panneau affiché suit la sélection).',
      'keyboard-rest':
        'Début (Home) active le premier onglet, Fin (End) le dernier. Le script repositionne le focus sur l’onglet cible après ces raccourcis.',
      'kbd-right': 'Flèche droite',
      'kbd-left': 'Flèche gauche',
      'prop-root': 'Conteneur racine du composant.',
      'prop-list': 'Barre d’onglets (role="tablist").',
      'prop-tab': 'Bouton d’onglet (role="tab").',
      'prop-panel':
        'Panneau de contenu (role="tabpanel") ; visibilité pilotée par data-bj-expanded.',
      'prop-tab-active':
        'Modificateur CSS optionnel sur l’onglet sélectionné (équivalent visuel à aria-selected="true").',
      'prop-panel-active':
        'Modificateur CSS optionnel sur le panneau visible (équivalent à data-bj-expanded).',
      'section-many': 'Nombreux onglets (défilement)',
      'many-intro-before': 'La liste',
      'many-intro':
        'autorise le défilement horizontal lorsque les libellés dépassent la largeur (mobile ou intitulés longs).',
      'section-static': 'Marquage sans script',
      'static-intro':
        'Sans JavaScript, reproduisez l’état actif avec',
      'static-intro-2': 'sur l’onglet courant,',
      'static-intro-3': 'sur les autres, et',
      'static-intro-4': 'sur le panneau affiché.',
      'a11y-1': 'Utilisez',
      'a11y-2': 'sur la liste,',
      'a11y-3': 'sur chaque bouton et',
      'a11y-4': 'sur chaque panneau. Le script met à jour',
      'a11y-5': '(onglet actif à',
      'a11y-6':
        ') et la gestion du tabindex (onglet sélectionné en 0, les autres en -1) pour un parcours clavier prévisible. Un libellé sur la',
      'a11y-7': '(',
      'a11y-8': ') aide les lecteurs d’écran à comprendre le groupe d’onglets.',
      'code-true': 'true',
      'code-aria-label': 'aria-label',
    },
    en: {
      title: 'Tabs',
      desc:
        'Grouped panels shown one at a time, with a tab bar and keyboard support provided by the DSBJ script.',
      'section-example': 'Example',
      'section-keyboard': 'Keyboard navigation',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'th-class-attr': 'Class / attribute',
      'th-description': 'Description',
      'keyboard-1': 'When a tab has focus, use',
      'keyboard-2': 'and',
      'keyboard-3':
        'to move to the next or previous tab (the visible panel follows the selection).',
      'keyboard-rest':
        'Home activates the first tab, End the last. The script moves focus to the target tab after these shortcuts.',
      'kbd-right': 'Right Arrow',
      'kbd-left': 'Left Arrow',
      'prop-root': 'Root container of the component.',
      'prop-list': 'Tab bar (role="tablist").',
      'prop-tab': 'Tab button (role="tab").',
      'prop-panel':
        'Content panel (role="tabpanel"); visibility controlled by data-bj-expanded.',
      'prop-tab-active':
        'Optional CSS modifier on the selected tab (same look as aria-selected="true").',
      'prop-panel-active':
        'Optional CSS modifier on the visible panel (same as data-bj-expanded).',
      'section-many': 'Many tabs (horizontal scroll)',
      'many-intro-before': 'The tab bar',
      'many-intro':
        'scrolls horizontally when labels exceed the width (mobile or long titles).',
      'section-static': 'Markup without JavaScript',
      'static-intro': 'Without JavaScript, mirror the active state with',
      'static-intro-2': 'on the current tab,',
      'static-intro-3': 'on the others, and',
      'static-intro-4': 'on the visible panel.',
      'a11y-1': 'Use',
      'a11y-2': 'on the list,',
      'a11y-3': 'on each button and',
      'a11y-4': 'on each panel. The script updates',
      'a11y-5': '(active tab',
      'a11y-6':
        ') and tabindex handling (selected tab 0, others -1) for predictable keyboard traversal. A label on the',
      'a11y-7': '(',
      'a11y-8': ') helps screen readers understand the tab group.',
      'code-true': 'true',
      'code-aria-label': 'aria-label',
    },
  },
})

const codeExemple = `<div class="bj-tabs" data-bj-tabs>
  <div class="bj-tabs__list" role="tablist" aria-label="Exemple">
    <button type="button" class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="true" tabindex="0">Onglet 1</button>
    <button type="button" class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="false" tabindex="-1">Onglet 2</button>
    <button type="button" class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="false" tabindex="-1">Onglet 3</button>
  </div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel" data-bj-expanded><p>Contenu du premier onglet…</p></div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel"><p>Contenu du deuxième onglet…</p></div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel"><p>Contenu du troisième onglet…</p></div>
</div>`

const codeManyTabs = `<div class="bj-tabs" data-bj-tabs>
  <div class="bj-tabs__list" role="tablist" aria-label="Étapes">
    <button type="button" class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="true" tabindex="0">Étape 1 — Identité</button>
    <button type="button" class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="false" tabindex="-1">Étape 2 — Coordonnées</button>
    <!-- … jusqu’à 6–8 onglets selon le parcours -->
  </div>
  <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel" data-bj-expanded>…</div>
  …
</div>`

const codeStatic = `<div class="bj-tabs">
  <div class="bj-tabs__list" role="tablist" aria-label="Sans script">
    <button type="button" class="bj-tabs__tab bj-tabs__tab--active" role="tab" aria-selected="true" tabindex="0">Actif</button>
    <button type="button" class="bj-tabs__tab" role="tab" aria-selected="false" tabindex="-1">Inactif</button>
  </div>
  <div class="bj-tabs__panel bj-tabs__panel--active" role="tabpanel" data-bj-expanded><p>Panneau visible</p></div>
  <div class="bj-tabs__panel" role="tabpanel"><p>Masqué</p></div>
</div>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  {
    name: 'bj-tabs + data-bj-tabs',
    description: t('prop-root'),
  },
  { name: 'bj-tabs__list', description: t('prop-list') },
  {
    name: 'bj-tabs__tab + data-bj-tab',
    description: t('prop-tab'),
  },
  {
    name: 'bj-tabs__panel + data-bj-tab-panel',
    description: t('prop-panel'),
  },
  {
    name: 'bj-tabs__tab--active',
    description: t('prop-tab-active'),
  },
  {
    name: 'bj-tabs__panel--active',
    description: t('prop-panel-active'),
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
    <DocsPreview>
      <div class="bj-tabs" data-bj-tabs>
        <div
          class="bj-tabs__list"
          role="tablist"
          aria-label="Démonstration des onglets"
        >
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="true"
            tabindex="0"
          >
            Onglet 1
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            Onglet 2
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            Onglet 3
          </button>
        </div>
        <div
          class="bj-tabs__panel"
          data-bj-tab-panel
          role="tabpanel"
          data-bj-expanded
        >
          <p class="bj-text-sm">Contenu du premier onglet…</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu du deuxième onglet…</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu du troisième onglet…</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-nombreux" :title="t('section-many')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('many-intro-before') }} <code>bj-tabs__list</code> {{ t('many-intro') }}
    </p>
    <DocsPreview style="max-width: 22rem">
      <div class="bj-tabs" data-bj-tabs>
        <div
          class="bj-tabs__list"
          role="tablist"
          aria-label="Parcours démarche"
        >
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="true"
            tabindex="0"
          >
            1. Identité
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            2. Domicile
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            3. Pièces
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            4. Récapitulatif
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            5. Signature
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            data-bj-tab
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            6. Envoi
          </button>
        </div>
        <div
          class="bj-tabs__panel"
          data-bj-tab-panel
          role="tabpanel"
          data-bj-expanded
        >
          <p class="bj-text-sm">Première étape du formulaire multi-onglets.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Étape suivante.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Pièces jointes.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Récapitulatif.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Signature.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Confirmation d’envoi.</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeManyTabs" />
  </DocsSection>

  <DocsSection id="sec-statique" :title="t('section-static')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('static-intro') }}
      <code>aria-selected="true"</code>
      {{ t('static-intro-2') }}
      <code>tabindex="0"</code> /
      <code>tabindex="-1"</code>
      {{ t('static-intro-3') }}
      <code>data-bj-expanded</code>
      {{ t('static-intro-4') }}
      Les classes
      <code>bj-tabs__tab--active</code> et
      <code>bj-tabs__panel--active</code> reprennent le même style que le script.
    </p>
    <DocsPreview>
      <div class="bj-tabs">
        <div class="bj-tabs__list" role="tablist" aria-label="Onglets statiques">
          <button
            type="button"
            class="bj-tabs__tab bj-tabs__tab--active"
            role="tab"
            aria-selected="true"
            tabindex="0"
          >
            Actif
          </button>
          <button
            type="button"
            class="bj-tabs__tab"
            role="tab"
            aria-selected="false"
            tabindex="-1"
          >
            Inactif
          </button>
        </div>
        <div
          class="bj-tabs__panel bj-tabs__panel--active"
          role="tabpanel"
          data-bj-expanded
        >
          <p class="bj-text-sm">Panneau visible sans data-bj-tabs.</p>
        </div>
        <div class="bj-tabs__panel" role="tabpanel">
          <p class="bj-text-sm">Ce panneau reste masqué par le CSS.</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStatic" />
  </DocsSection>

  <DocsSection id="sec-clavier" :title="t('section-keyboard')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('keyboard-1') }}
      <kbd>{{ t('kbd-right') }}</kbd>
      {{ t('keyboard-2') }}
      <kbd>{{ t('kbd-left') }}</kbd>
      {{ t('keyboard-3') }}
      {{ t('keyboard-rest') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <code>role="tablist"</code>
      {{ t('a11y-2') }}
      <code>role="tab"</code>
      {{ t('a11y-3') }}
      <code>role="tabpanel"</code>
      {{ t('a11y-4') }}
      <code>aria-selected</code>
      {{ t('a11y-5') }}
      <code>{{ t('code-true') }}</code>
      {{ t('a11y-6') }}
      <code>tablist</code>
      {{ t('a11y-7') }}
      <code>{{ t('code-aria-label') }}</code>
      {{ t('a11y-8') }}
    </DocsA11yNote>
  </DocsSection>
</template>
