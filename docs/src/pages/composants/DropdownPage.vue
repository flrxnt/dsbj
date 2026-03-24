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
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-a11y': 'Accessibilité',
      'prop-root': 'Conteneur principal.',
      'prop-trigger': 'Bouton déclencheur.',
      'prop-menu': 'Liste déroulante.',
      'prop-item': 'Élément de menu.',
      'prop-divider': 'Séparateur horizontal.',
      'prop-header': 'Titre de groupe dans le menu.',
      'prop-right': 'Aligne le menu à droite.',
      'prop-up': 'Ouvre le menu vers le haut.',
      'prop-sm': 'Variante compacte.',
      'a11y-1': 'Le trigger porte',
      'a11y-2': 'et',
      'a11y-3': '. Les items ont',
      'a11y-4':
        '. Navigation clavier : flèches Haut/Bas, Home/End,',
      'a11y-5': 'pour fermer.',
      'kbd-esc': 'Échap',
    },
    en: {
      title: 'Dropdown menu',
      'desc-1':
        'Context menu for actions or links, opened from a button. Full keyboard support with ',
      'desc-2': ' and ',
      'desc-3': '.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-a11y': 'Accessibility',
      'prop-root': 'Main container.',
      'prop-trigger': 'Trigger button.',
      'prop-menu': 'Dropdown list.',
      'prop-item': 'Menu item.',
      'prop-divider': 'Horizontal divider.',
      'prop-header': 'Group heading in the menu.',
      'prop-right': 'Aligns the menu to the right.',
      'prop-up': 'Opens the menu upward.',
      'prop-sm': 'Compact variant.',
      'a11y-1': 'The trigger has',
      'a11y-2': 'and',
      'a11y-3': '. Items use',
      'a11y-4': '. Keyboard: Up/Down arrows, Home/End,',
      'a11y-5': 'to close.',
      'kbd-esc': 'Escape',
    },
  },
})

const codeDropdown = `<div class="bj-dropdown" data-bj-dropdown>
  <button class="bj-btn bj-dropdown__trigger">
    Actions <i class="ri-arrow-down-s-line"></i>
  </button>
  <ul class="bj-dropdown__menu" role="menu">
    <li class="bj-dropdown__item">
      <button role="menuitem">Modifier</button>
    </li>
    <li class="bj-dropdown__divider"></li>
    <li class="bj-dropdown__item">
      <button role="menuitem">Supprimer</button>
    </li>
  </ul>
</div>`

const variantesRows = computed(() => [
  { name: 'bj-dropdown', description: t('prop-root') },
  { name: 'bj-dropdown__trigger', description: t('prop-trigger') },
  { name: 'bj-dropdown__menu', description: t('prop-menu') },
  { name: 'bj-dropdown__item', description: t('prop-item') },
  { name: 'bj-dropdown__divider', description: t('prop-divider') },
  {
    name: 'bj-dropdown__header',
    description: t('prop-header'),
  },
  { name: 'bj-dropdown--right', description: t('prop-right') },
  { name: 'bj-dropdown--up', description: t('prop-up') },
  { name: 'bj-dropdown--sm', description: t('prop-sm') },
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

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview style="min-height: 14rem">
      <div class="bj-dropdown" data-bj-dropdown>
        <button type="button" class="bj-btn bj-dropdown__trigger">
          Actions <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">
              <i class="ri-edit-line" aria-hidden="true"></i> Modifier
            </button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">
              <i class="ri-file-copy-line" aria-hidden="true"></i> Dupliquer
            </button>
          </li>
          <li class="bj-dropdown__divider"></li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">
              <i class="ri-delete-bin-line" aria-hidden="true"></i> Supprimer
            </button>
          </li>
        </ul>
      </div>

      <div
        class="bj-dropdown bj-dropdown--right"
        data-bj-dropdown
        style="margin-left: auto"
      >
        <button
          type="button"
          class="bj-btn bj-btn--secondary bj-dropdown__trigger"
        >
          Profil <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
        </button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__header">Mon compte</li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Paramètres</button>
          </li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Notifications</button>
          </li>
          <li class="bj-dropdown__divider"></li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Déconnexion</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDropdown" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <DocsPropsTable :rows="variantesRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <code>aria-haspopup="true"</code>
      {{ t('a11y-2') }}
      <code>aria-expanded</code>
      {{ t('a11y-3') }}
      <code>role="menuitem"</code>
      {{ t('a11y-4') }}
      <kbd>{{ t('kbd-esc') }}</kbd>
      {{ t('a11y-5') }}
    </DocsA11yNote>
  </DocsSection>
</template>
