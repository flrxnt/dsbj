<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<nav class="bj-sidemenu">…</nav>`

const propsRows = [
  { name: 'bj-sidemenu', description: 'Conteneur.' },
  { name: 'bj-sidemenu__title', description: 'Titre.' },
  { name: 'bj-sidemenu__list / bj-sidemenu__item', description: 'Liste.' },
  {
    name: 'bj-sidemenu__link / bj-sidemenu__link--active',
    description: 'Liens.',
  },
  { name: 'bj-sidemenu__sublist', description: 'Sous-niveau.' },
  { name: 'bj-sidemenu__btn', description: 'Section repliable.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Menu latéral
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Navigation secondaire avec état actif et sous-niveaux ; bouton
    section optionnel.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <nav class="bj-sidemenu" aria-label="Sous-navigation">
        <p class="bj-sidemenu__title">Mon espace</p>
        <ul
          class="bj-sidemenu__list"
          style="list-style: none; margin: 0; padding: 0"
        >
          <li class="bj-sidemenu__item">
            <a
              class="bj-sidemenu__link bj-sidemenu__link--active"
              href="#"
              aria-current="page"
              >Tableau de bord</a
            >
          </li>
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link" href="#">Mes dossiers</a>
          </li>
          <li class="bj-sidemenu__item">
            <button
              type="button"
              class="bj-sidemenu__btn"
              aria-expanded="true"
              aria-controls="ex-sub"
            >
              Réglages
            </button>
            <ul
              class="bj-sidemenu__sublist"
              id="ex-sub"
              style="list-style: none; margin: 0; padding: 0"
            >
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link" href="#">Profil</a>
              </li>
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link" href="#">Sécurité</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Associer un script pour masquer le sous-menu lorsque
      <code>aria-expanded="false"</code> si nécessaire.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>aria-current="page"</code> sur le lien actif ; cohérence
      <code>aria-expanded</code> / visibilité du sous-menu.
    </DocsA11yNote>
  </DocsSection>
</template>
