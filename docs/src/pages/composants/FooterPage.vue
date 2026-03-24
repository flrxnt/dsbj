<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<footer class="bj-footer" role="contentinfo">…</footer>`

const propsRows = [
  { name: 'bj-footer', description: 'Conteneur.' },
  { name: 'bj-footer__top / bj-footer__top-row', description: 'Colonnes.' },
  { name: 'bj-footer__col-title', description: 'Titre de colonne.' },
  { name: 'bj-footer__list / bj-footer__link', description: 'Liens.' },
  { name: 'bj-footer__partners', description: 'Partenaires.' },
  {
    name: 'bj-footer__bottom / bj-footer__bottom-link / bj-footer__copy',
    description: 'Bas de page.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Pied de page
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Liens d’information, partenaires et mentions légales ; bande
    tricolore en bas.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview style="padding: 0; overflow: hidden">
      <footer class="bj-footer" role="contentinfo">
        <div class="bj-container">
          <div class="bj-footer__top">
            <div class="bj-footer__top-row">
              <div>
                <p class="bj-footer__col-title">Service</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="#">Contact</a>
                  <a class="bj-footer__link" href="#">FAQ</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Informations</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="#">Accessibilité</a>
                  <a class="bj-footer__link" href="#">Données personnelles</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bj-footer__partners">
            <p class="bj-footer__partners-title">Partenaires</p>
            <div class="bj-footer__partners-logos">
              <span class="bj-text-sm bj-text-mention">Logos</span>
            </div>
          </div>
          <div class="bj-footer__bottom">
            <div class="bj-footer__bottom-list">
              <a class="bj-footer__bottom-link" href="#">Mentions légales</a>
              <a class="bj-footer__bottom-link" href="#">Plan du site</a>
            </div>
            <p class="bj-footer__copy">
              <span data-i18n="footer.copy">République du Bénin</span>
            </p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Grille responsive de 1 à 4 colonnes. Bloc partenaires optionnel.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Textes alternatifs explicites pour les logos partenaires.
    </DocsA11yNote>
  </DocsSection>
</template>
