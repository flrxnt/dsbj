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
        'active le premier onglet,',
      'keyboard-rest-mid': 'le dernier. Le script repositionne le focus sur l’onglet cible.',
      'kbd-right': 'Flèche droite',
      'kbd-left': 'Flèche gauche',
      'prop-root':
        'Conteneur racine ; data-bj-tabs est requis pour que le script initialise le groupe. Un id optionnel sur ce nœud sert de préfixe aux id générés (suffixes -tab-0, -tab-1, … et -panel-0, -panel-1, …) ; sinon le script utilise un préfixe du type bj-tabs-1, bj-tabs-2, etc.',
      'prop-list': 'Barre d’onglets (role="tablist").',
      'prop-tab':
        'Bouton d’onglet (role="tab", data-bj-tab) ; le script renseigne aria-controls vers le panneau associé.',
      'prop-panel':
        'Panneau (role="tabpanel", data-bj-tab-panel) ; visibilité par data-bj-expanded. Le script renseigne aria-labelledby vers l’onglet correspondant et tabindex="0" sur le panneau actif.',
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
      'a11y-intro':
        'Pour le HTML « vanilla », le script repère le groupe via data-bj-tabs sur le conteneur, data-bj-tab sur chaque bouton d’onglet et data-bj-tab-panel sur chaque panneau. Les rôles role="tablist", role="tab" et role="tabpanel" structurent le motif ARIA des onglets.',
      'a11y-ids':
        "Le script attribue des identifiants stables si vous n’en fournissez pas : chaque onglet id=\"{'{'}groupId{'}'}-tab-{'{'}n{'}'}\" et chaque panneau id=\"{'{'}groupId{'}'}-panel-{'{'}n{'}'}\", où groupId est l’attribut id du conteneur data-bj-tabs s’il est présent, sinon une valeur générée du type bj-tabs-1.",
      'a11y-wiring':
        'Chaque onglet reçoit aria-controls référençant l’id de son panneau ; chaque panneau reçoit aria-labelledby référençant l’id de son onglet, ce qui lie explicitement la barre d’onglets au contenu affiché.',
      'a11y-state':
        'Le script met à jour aria-selected avec une valeur booléenne (true pour l’onglet actif, false pour les autres). Le tabindex suit le motif attendu : 0 sur l’onglet sélectionné, -1 sur les autres. Le panneau visible reçoit tabindex="0" pour pouvoir recevoir le focus clavier ; les panneaux masqués n’ont pas de tabindex.',
      'a11y-keyboard':
        'Navigation clavier lorsque le focus est sur un onglet : les flèches gauche et droite activent l’onglet précédent ou suivant (parcours circulaire) et déplacent le focus sur cet onglet ; les touches Début (Home) et Fin (End) activent respectivement le premier et le dernier onglet et repositionnent le focus sur l’onglet correspondant. Le panneau affiché suit la sélection.',
      'a11y-tablist-label':
        'Prévoyez un libellé accessible sur la tablist (aria-label ou aria-labelledby) pour que le groupe d’onglets soit correctement annoncé.',
      'kbd-home': 'Début (Home)',
      'kbd-end': 'Fin (End)',
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
      'keyboard-rest': 'activates the first tab,',
      'keyboard-rest-mid': 'the last. The script moves focus to the target tab.',
      'kbd-right': 'Right Arrow',
      'kbd-left': 'Left Arrow',
      'prop-root':
        "Root container; data-bj-tabs is required for the script to initialize the group. An optional id on this node prefixes generated tab and panel ids ({'{'}id{'}'}-tab-n, {'{'}id{'}'}-panel-n); otherwise the script uses bj-tabs-1, bj-tabs-2, etc.",
      'prop-list': 'Tab bar (role="tablist").',
      'prop-tab':
        'Tab button (role="tab", data-bj-tab); the script sets aria-controls to the associated panel.',
      'prop-panel':
        'Panel (role="tabpanel", data-bj-tab-panel); visibility via data-bj-expanded. The script sets aria-labelledby to the matching tab and tabindex="0" on the active panel.',
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
      'a11y-intro':
        'For vanilla HTML, the script finds the group with data-bj-tabs on the container, data-bj-tab on each tab button, and data-bj-tab-panel on each panel. The roles role="tablist", role="tab", and role="tabpanel" implement the ARIA tabs pattern.',
      'a11y-ids':
        'When you do not provide ids, the script assigns stable ones: each tab id uses the data-bj-tabs container’s id attribute as the prefix when set, otherwise a generated value (bj-tabs-1, bj-tabs-2, …), followed by -tab- and the index; each panel follows the same pattern with -panel- and the same index.',
      'a11y-wiring':
        'Each tab receives aria-controls pointing to its panel id; each panel receives aria-labelledby pointing to its tab id, explicitly wiring the tab bar to the visible content.',
      'a11y-state':
        'The script updates aria-selected with a boolean value (true for the active tab, false for others). Tabindex follows the expected pattern: 0 on the selected tab, -1 on the others. The visible panel gets tabindex="0" so it can receive keyboard focus; hidden panels have no tabindex.',
      'a11y-keyboard':
        'Keyboard behavior when focus is on a tab: Left Arrow and Right Arrow activate the previous or next tab (wrapping) and move focus to that tab; Home and End activate the first and last tab respectively and move focus to the matching tab. The visible panel follows the selection.',
      'a11y-tablist-label':
        'Provide an accessible name for the tablist (aria-label or aria-labelledby) so the tab group is announced correctly.',
      'kbd-home': 'Home',
      'kbd-end': 'End',
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
      <kbd>{{ t('kbd-home') }}</kbd>
      {{ t('keyboard-rest') }}
      <kbd>{{ t('kbd-end') }}</kbd>
      {{ t('keyboard-rest-mid') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <p class="bj-text-md">{{ t('a11y-intro') }}</p>
      <p class="bj-text-md">{{ t('a11y-ids') }}</p>
      <p class="bj-text-md">{{ t('a11y-wiring') }}</p>
      <p class="bj-text-md">{{ t('a11y-state') }}</p>
      <p class="bj-text-md">{{ t('a11y-keyboard') }}</p>
      <p class="bj-text-md">{{ t('a11y-tablist-label') }}</p>
    </DocsA11yNote>
  </DocsSection>
</template>
