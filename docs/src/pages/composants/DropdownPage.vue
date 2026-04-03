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
      title: 'Menu déroulant',
      'desc-1':
        'Menu contextuel d’actions ou de liens, déclenché par un bouton. Navigation clavier complète avec ',
      'desc-2': ' et ',
      'desc-3': '.',
      'section-example': 'Vue d’ensemble',
      'example-intro':
        'Le composant Vue',
      'example-intro-2':
        'expose',
      'example-intro-3':
        'et',
      'example-intro-4':
        '(défaut',
      'example-intro-5':
        ') comme sur le HTML ci-dessous.',
      'section-align-left': 'Alignement à gauche (défaut)',
      'align-left-intro':
        'Le menu s’aligne sur le bord gauche du trigger ; ouverture vers le bas.',
      'section-align-right': 'Alignement à droite',
      'align-right-intro':
        'Classe',
      'align-right-intro-2':
        'pour ancrer le panneau au bord droit (barres d’outils, menus profil).',
      'section-dir-down': 'Ouverture vers le bas (défaut)',
      'dir-down-intro':
        'Sans',
      'dir-down-intro-2':
        ', le panneau s’ouvre sous le bouton (comportement attendu dans la majorité des formulaires).',
      'section-dir-up': 'Ouverture vers le haut',
      'dir-up-intro':
        'Utile lorsque le trigger est proche du bas de l’écran.',
      'section-cross-up-right': 'Combinaison haut + droite',
      'cross-up-right-intro':
        'Les modificateurs se cumulent sur',
      'section-size-sm': 'Taille compacte (sm)',
      'size-sm-intro':
        'Réduit la largeur minimale et le padding des entrées.',
      'section-size-md': 'Taille médiane (md)',
      'size-md-intro':
        'Comportement par défaut : aucune classe de taille (équivalent',
      'size-md-vue': 'sur le composant Vue',
      'section-size-lg': 'Taille large (lg)',
      'size-lg-intro':
        'Menu plus large et lignes plus confortables (formulaires denses, libellés longs).',
      'section-variants': 'Référence des classes',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'th-class-attr': 'Classe / attribut',
      'th-description': 'Description',
      'prop-root': 'Conteneur principal.',
      'prop-trigger': 'Bouton déclencheur.',
      'prop-menu': 'Liste déroulante.',
      'prop-menu-expanded':
        'Sur le menu ouvert : requis pour l’animation et display:block (posé par le script ou en démo statique).',
      'prop-item': 'Élément de menu.',
      'prop-divider': 'Séparateur horizontal.',
      'prop-header': 'Titre de groupe dans le menu.',
      'prop-right': 'Aligne le menu à droite.',
      'prop-up': 'Ouvre le menu vers le haut.',
      'prop-sm': 'Variante compacte.',
      'prop-md': 'Largeur et confort par défaut (aucune classe de taille).',
      'prop-md-name': '(aucune classe de taille)',
      'prop-lg': 'Variante large (min-width et padding accrus).',
      'section-keyboard': 'Navigation clavier',
      'th-key': 'Touche',
      'th-behavior': 'Comportement',
      'a11y-p1': 'Le déclencheur est un véritable bouton avec ',
      'a11y-p2': ', ',
      'a11y-p3': ', ',
      'a11y-p4': ' selon l’état ouvert ou fermé, et ',
      'a11y-p5': ' pointant vers l’',
      'a11y-p6': ' du menu lorsqu’il est ouvert. La liste a ',
      'a11y-p7': ' ; chaque entrée interactive a ',
      'a11y-p8': '. À l’ouverture, le focus est placé sur le premier élément du menu.',
      'kb-trigger':
        'Depuis le déclencheur lorsque le menu est fermé : ouvre le menu et place le focus sur le premier élément activable.',
      'kb-menu-arrows':
        'Dans le menu : déplace le focus vers l’élément suivant ou précédent (navigation cyclique).',
      'kb-home-end': 'Place le focus sur le premier ou le dernier élément du menu.',
      'kb-esc': 'Ferme le menu et renvoie le focus sur le déclencheur.',
      'kb-tab':
        'Ferme le menu ; le focus suit l’ordre de tabulation habituel (sans renvoi systématique sur le déclencheur).',
      'kb-activate':
        'Sur un élément du menu : déclenche l’action (comportement natif du bouton).',
      'code-vue': 'BjDropdown',
    },
    en: {
      title: 'Dropdown menu',
      'desc-1':
        'Context menu for actions or links, opened from a button. Full keyboard support with ',
      'desc-2': ' and ',
      'desc-3': '.',
      'section-example': 'Overview',
      'example-intro': 'The Vue',
      'example-intro-2': 'component exposes',
      'example-intro-3': 'and',
      'example-intro-4': '(default',
      'example-intro-5': ') just like the HTML below.',
      'section-align-left': 'Left alignment (default)',
      'align-left-intro':
        'The menu aligns to the trigger’s left edge; opens downward.',
      'section-align-right': 'Right alignment',
      'align-right-intro': 'Use',
      'align-right-intro-2':
        'to anchor the panel on the right (toolbars, profile menus).',
      'section-dir-down': 'Open downward (default)',
      'dir-down-intro': 'Without',
      'dir-down-intro-2':
        ', the panel opens below the button (expected in most forms).',
      'section-dir-up': 'Open upward',
      'dir-up-intro': 'Useful when the trigger sits near the bottom of the viewport.',
      'section-cross-up-right': 'Up + right combination',
      'cross-up-right-intro': 'Stack modifiers on',
      'section-size-sm': 'Small size (sm)',
      'size-sm-intro': 'Smaller min-width and tighter item padding.',
      'section-size-md': 'Medium size (md)',
      'size-md-intro':
        'Default behaviour: no size class (same as',
      'size-md-vue': 'on the Vue component',
      'section-size-lg': 'Large size (lg)',
      'size-lg-intro': 'Wider menu and roomier rows for long labels.',
      'section-variants': 'Class reference',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'th-class-attr': 'Class / attribute',
      'th-description': 'Description',
      'prop-root': 'Main container.',
      'prop-trigger': 'Trigger button.',
      'prop-menu': 'Dropdown list.',
      'prop-menu-expanded':
        'On the open menu: required for animation and display:block (set by the script or for static demos).',
      'prop-item': 'Menu item.',
      'prop-divider': 'Horizontal divider.',
      'prop-header': 'Group heading in the menu.',
      'prop-right': 'Aligns the menu to the right.',
      'prop-up': 'Opens the menu upward.',
      'prop-sm': 'Compact variant.',
      'prop-md': 'Default width and comfort (no size class).',
      'prop-md-name': '(no size class)',
      'prop-lg': 'Wide variant (larger min-width and padding).',
      'section-keyboard': 'Keyboard navigation',
      'th-key': 'Key',
      'th-behavior': 'Behavior',
      'a11y-p1': 'The trigger is a real button with ',
      'a11y-p2': ', ',
      'a11y-p3': ', ',
      'a11y-p4': ' reflecting open or closed state, and ',
      'a11y-p5': ' referencing the menu ',
      'a11y-p6': ' when it is open. The list has ',
      'a11y-p7': '; each interactive entry has ',
      'a11y-p8': '. When the menu opens, focus moves to the first menu item.',
      'kb-trigger':
        'From the trigger while the menu is closed: opens the menu and moves focus to the first enabled item.',
      'kb-menu-arrows':
        'Inside the menu: moves focus to the next or previous item (wraps at the ends).',
      'kb-home-end': 'Moves focus to the first or last menu item.',
      'kb-esc': 'Closes the menu and returns focus to the trigger.',
      'kb-tab':
        'Closes the menu; focus follows the normal tab order (not always back to the trigger).',
      'kb-activate':
        'On a menu item: activates the action (native button behaviour).',
      'code-vue': 'BjDropdown',
    },
  },
})

const codeAlignLeft = `<div class="bj-dropdown" data-bj-dropdown>
  <button type="button" class="bj-btn bj-dropdown__trigger">Menu</button>
  <ul class="bj-dropdown__menu" role="menu">…</ul>
</div>`

const codeAlignRight = `<div class="bj-dropdown bj-dropdown--right" data-bj-dropdown>
  <button type="button" class="bj-btn bj-dropdown__trigger">Profil</button>
  <ul class="bj-dropdown__menu" role="menu">…</ul>
</div>`

const codeDirDown = `<div class="bj-dropdown" data-bj-dropdown>
  <!-- ouverture vers le bas : aucune classe de direction -->
</div>`

const codeDirUp = `<div class="bj-dropdown bj-dropdown--up" data-bj-dropdown>
  <button type="button" class="bj-btn bj-dropdown__trigger">Vers le haut</button>
  <ul class="bj-dropdown__menu" role="menu">…</ul>
</div>`

const codeComboUpRight = `<div class="bj-dropdown bj-dropdown--up bj-dropdown--right" data-bj-dropdown>
  …
</div>`

const codeSizeSm = `<div class="bj-dropdown bj-dropdown--sm" data-bj-dropdown>…</div>`

const codeSizeMd = `<div class="bj-dropdown" data-bj-dropdown>
  <!-- md = défaut, pas de classe de taille -->
</div>`

const codeSizeLg = `<div class="bj-dropdown bj-dropdown--lg" data-bj-dropdown>…</div>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const keyboardTableHeaders = computed((): [string, string] => [
  t('th-key'),
  t('th-behavior'),
])

const keyboardRows = computed(() => [
  {
    name: 'ArrowDown, ArrowUp, Enter, Space',
    description: t('kb-trigger'),
  },
  {
    name: 'ArrowDown, ArrowUp',
    description: t('kb-menu-arrows'),
  },
  {
    name: 'Home, End',
    description: t('kb-home-end'),
  },
  {
    name: 'Escape',
    description: t('kb-esc'),
  },
  {
    name: 'Tab',
    description: t('kb-tab'),
  },
  {
    name: 'Enter, Space',
    description: t('kb-activate'),
  },
])

const variantesRows = computed(() => [
  { name: 'bj-dropdown', description: t('prop-root') },
  { name: 'bj-dropdown__trigger', description: t('prop-trigger') },
  { name: 'bj-dropdown__menu', description: t('prop-menu') },
  { name: 'data-bj-expanded', description: t('prop-menu-expanded') },
  { name: 'bj-dropdown__item', description: t('prop-item') },
  { name: 'bj-dropdown__divider', description: t('prop-divider') },
  {
    name: 'bj-dropdown__header',
    description: t('prop-header'),
  },
  { name: 'bj-dropdown--right', description: t('prop-right') },
  { name: 'bj-dropdown--up', description: t('prop-up') },
  { name: 'bj-dropdown--sm', description: t('prop-sm') },
  { name: t('prop-md-name'), description: t('prop-md') },
  { name: 'bj-dropdown--lg', description: t('prop-lg') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t('desc-1') }}<code>role="menu"</code>{{ t('desc-2')
    }}<code>role="menuitem"</code>{{ t('desc-3') }}
  </p>

  <DocsSection id="sec-apercu" :title="t('section-example')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('example-intro') }}
      <code>{{ t('code-vue') }}</code>
      {{ t('example-intro-2') }}
      <code>align: 'left' | 'right'</code>,
      <code>direction: 'down' | 'up'</code>,
      <code>size: 'sm' | 'md' | 'lg'</code>
      {{ t('example-intro-3') }}
      <code>md</code>
      {{ t('example-intro-4') }}
      <code>down</code>
      {{ t('example-intro-5') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-align-left" :title="t('section-align-left')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('align-left-intro') }}
    </p>
    <DocsPreview style="min-height: 12rem">
      <div class="bj-dropdown" data-bj-dropdown>
        <button type="button" class="bj-btn bj-dropdown__trigger">
          Actions
          <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Ouvrir</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Archiver</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeAlignLeft" />
  </DocsSection>

  <DocsSection id="sec-align-right" :title="t('section-align-right')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('align-right-intro') }}
      <code>bj-dropdown--right</code>
      {{ t('align-right-intro-2') }}
    </p>
    <DocsPreview
      style="
        min-height: 12rem;
        display: flex;
        justify-content: flex-end;
      "
    >
      <div class="bj-dropdown bj-dropdown--right" data-bj-dropdown>
        <button type="button" class="bj-btn bj-btn--secondary bj-dropdown__trigger">
          Compte
          <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Préférences</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Déconnexion</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeAlignRight" />
  </DocsSection>

  <DocsSection id="sec-dir-down" :title="t('section-dir-down')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('dir-down-intro') }}
      <code>bj-dropdown--up</code>
      {{ t('dir-down-intro-2') }}
    </p>
    <DocsPreview style="min-height: 12rem">
      <div class="bj-dropdown" data-bj-dropdown>
        <button type="button" class="bj-btn bj-btn--tertiary bj-dropdown__trigger">
          Bas (défaut)
          <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Option 1</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Option 2</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDirDown" />
  </DocsSection>

  <DocsSection id="sec-dir-up" :title="t('section-dir-up')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('dir-up-intro') }}
    </p>
    <DocsPreview style="min-height: 12rem; padding-top: 6rem">
      <div class="bj-dropdown bj-dropdown--up" data-bj-dropdown>
        <button type="button" class="bj-btn bj-dropdown__trigger">
          Vers le haut
          <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Option A</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Option B</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDirUp" />
  </DocsSection>

  <DocsSection id="sec-cross-up-right" :title="t('section-cross-up-right')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('cross-up-right-intro') }}
      <code>bj-dropdown</code>.
    </p>
    <DocsPreview
      style="
        min-height: 12rem;
        padding-top: 6rem;
        display: flex;
        justify-content: flex-end;
      "
    >
      <div class="bj-dropdown bj-dropdown--up bj-dropdown--right" data-bj-dropdown>
        <button type="button" class="bj-btn bj-btn--secondary bj-dropdown__trigger">
          Haut + droite
          <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Un</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Deux</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeComboUpRight" />
  </DocsSection>

  <DocsSection id="sec-size-sm" :title="t('section-size-sm')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('size-sm-intro') }}
    </p>
    <DocsPreview style="min-height: 12rem">
      <div class="bj-dropdown bj-dropdown--sm" data-bj-dropdown>
        <button type="button" class="bj-btn bj-btn--sm bj-dropdown__trigger">
          Compact
          <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Oui</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Non</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeSm" />
  </DocsSection>

  <DocsSection id="sec-size-md" :title="t('section-size-md')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('size-md-intro') }}
      <code>size: 'md'</code>
      {{ t('size-md-vue') }}).
    </p>
    <DocsPreview style="min-height: 12rem">
      <div class="bj-dropdown" data-bj-dropdown>
        <button type="button" class="bj-btn bj-dropdown__trigger">
          Standard
          <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Action principale</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Action secondaire</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeMd" />
  </DocsSection>

  <DocsSection id="sec-size-lg" :title="t('section-size-lg')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('size-lg-intro') }}
    </p>
    <DocsPreview style="min-height: 12rem">
      <div class="bj-dropdown bj-dropdown--lg" data-bj-dropdown>
        <button type="button" class="bj-btn bj-dropdown__trigger">
          Menu large
          <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">
              Libellé d’action plus long dans le menu
            </button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Autre entrée</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeLg" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="variantesRows" />
  </DocsSection>

  <DocsSection id="sec-clavier" :title="t('section-keyboard')">
    <DocsPropsTable :headers="keyboardTableHeaders" :rows="keyboardRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-p1') }}
      <code>type="button"</code>
      {{ t('a11y-p2') }}
      <code>aria-haspopup="menu"</code>
      {{ t('a11y-p3') }}
      <code>aria-expanded</code>
      {{ t('a11y-p4') }}
      <code>aria-controls</code>
      {{ t('a11y-p5') }}
      <code>id</code>
      {{ t('a11y-p6') }}
      <code>role="menu"</code>
      {{ t('a11y-p7') }}
      <code>role="menuitem"</code>
      {{ t('a11y-p8') }}
    </DocsA11yNote>
  </DocsSection>
</template>
