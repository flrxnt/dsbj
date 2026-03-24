<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<header class="bj-header" role="banner">…</header>`

const propsRows = [
  { name: 'bj-header', description: 'En-tête (bande tricolore).' },
  { name: 'bj-header__body', description: 'Ligne marque / outils.' },
  { name: 'bj-header__brand', description: 'Lien d’accueil.' },
  { name: 'bj-header__service', description: 'Bloc titre service.' },
  {
    name: 'bj-header__tools / bj-header__tools-link',
    description: 'Raccourcis.',
  },
  { name: 'bj-header__menu-btn', description: 'Menu mobile.' },
  {
    name: 'bj-header__nav / bj-header__nav-list / bj-header__nav-link',
    description: 'Navigation.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    En-tête de page
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Identité de l’État, service ou portail, raccourcis et navigation ;
    bande tricolore en haut.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview style="padding: 0; overflow: hidden">
      <header class="bj-header" role="banner">
        <div class="bj-container">
          <div class="bj-header__body">
            <a href="#" class="bj-header__brand">
              <div class="bj-logo">
                <p>République<br />du Bénin</p>
              </div>
              <div class="bj-header__service">
                <span class="bj-header__service-title">Portail démo</span>
                <span class="bj-header__service-tagline"
                  >Démarches en ligne</span
                >
              </div>
            </a>
            <div class="bj-header__tools">
              <a href="#" class="bj-header__tools-link"
                ><i class="ri-user-line" aria-hidden="true"></i> Mon
                compte</a
              >
              <button
                type="button"
                class="bj-header__menu-btn"
                data-bj-header-menu
                aria-controls="ex-hnav"
                aria-expanded="false"
              >
                <i class="ri-menu-line" aria-hidden="true"></i> Menu
              </button>
            </div>
          </div>
          <nav
            class="bj-header__nav"
            id="ex-hnav"
            role="navigation"
            aria-label="Navigation principale"
          >
            <ul class="bj-header__nav-list">
              <li class="bj-header__nav-item">
                <a
                  class="bj-header__nav-link bj-header__nav-link--active"
                  href="#"
                  aria-current="page"
                  ><span data-i18n="nav.home">Accueil</span></a
                >
              </li>
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">Démarches</a>
              </li>
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">Aide</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Sur mobile, <code>data-bj-header-menu</code> avec
      <code>aria-controls</code> vers l’<code>id</code> du
      <code>nav</code> ouvre le menu (<code>data-bj-expanded</code>
      sur le nav).
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Synchronisez <code>aria-expanded</code> du bouton burger avec
      l’ouverture du panneau.
    </DocsA11yNote>
  </DocsSection>
</template>
