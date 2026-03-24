<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<button type="button" class="bj-nav__btn" data-bj-nav-btn
  aria-controls="mega-id" aria-expanded="false">…</button>
<div class="bj-nav__mega" id="mega-id">…</div>`

const propsRows = [
  { name: 'bj-nav', description: 'Conteneur.' },
  { name: 'bj-nav__list / bj-nav__item', description: 'Structure.' },
  { name: 'bj-nav__link', description: 'Lien.' },
  { name: 'bj-nav__btn', description: 'Bouton méga-menu.' },
  {
    name: 'bj-nav__mega / bj-nav__mega-content / bj-nav__mega-title',
    description: 'Panneau.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Navigation principale
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Barre avec liens et méga-menus déployables
    (<code>data-bj-nav-btn</code>).
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <nav class="bj-nav bj-container" aria-label="Navigation démo">
        <ul
          class="bj-nav__list"
          style="list-style: none; margin: 0; padding: 0"
        >
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">Accueil</a>
          </li>
          <li class="bj-nav__item">
            <button
              type="button"
              class="bj-nav__btn"
              data-bj-nav-btn
              aria-expanded="false"
              aria-controls="ex-mega"
            >
              Thématiques
            </button>
            <div class="bj-nav__mega" id="ex-mega">
              <div class="bj-nav__mega-content">
                <div>
                  <p class="bj-nav__mega-title">Citoyenneté</p>
                  <div class="bj-footer__list">
                    <a class="bj-footer__link" href="#">État civil</a>
                  </div>
                </div>
                <div>
                  <p class="bj-nav__mega-title">Économie</p>
                  <div class="bj-footer__list">
                    <a class="bj-footer__link" href="#">Entreprises</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Fermeture des autres méga-menus à l’ouverture d’un nouveau
      panneau ; clic extérieur referme (script DSBJ).
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>aria-expanded</code> sur le bouton ; focus clavier dans
      le panneau ouvert.
    </DocsA11yNote>
  </DocsSection>
</template>
