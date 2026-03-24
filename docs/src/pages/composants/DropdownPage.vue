<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

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

const variantesRows = [
  { name: 'bj-dropdown', description: 'Conteneur principal.' },
  { name: 'bj-dropdown__trigger', description: 'Bouton déclencheur.' },
  { name: 'bj-dropdown__menu', description: 'Liste déroulante.' },
  { name: 'bj-dropdown__item', description: 'Élément de menu.' },
  { name: 'bj-dropdown__divider', description: 'Séparateur horizontal.' },
  {
    name: 'bj-dropdown__header',
    description: 'Titre de groupe dans le menu.',
  },
  { name: 'bj-dropdown--right', description: 'Aligne le menu à droite.' },
  { name: 'bj-dropdown--up', description: 'Ouvre le menu vers le haut.' },
  { name: 'bj-dropdown--sm', description: 'Variante compacte.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Menu déroulant
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    Menu contextuel d'actions ou de liens, déclenché par un bouton. Navigation
    clavier complète avec <code>role="menu"</code> et
    <code>role="menuitem"</code>.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
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

  <DocsSection id="sec-variantes" title="Variantes">
    <DocsPropsTable :rows="variantesRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" title="Accessibilité">
    <DocsA11yNote>
      Le trigger porte <code>aria-haspopup="true"</code> et
      <code>aria-expanded</code>. Les items ont <code>role="menuitem"</code>.
      Navigation clavier : flèches Haut/Bas, Home/End, Échap pour fermer.
    </DocsA11yNote>
  </DocsSection>
</template>
