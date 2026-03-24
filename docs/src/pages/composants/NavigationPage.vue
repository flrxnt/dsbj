<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Navigation principale',
      desc:
        'Barre avec liens et méga-menus déployables (<code>data-bj-nav-btn</code>).',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-desc':
        'Fermeture des autres méga-menus à l’ouverture d’un nouveau panneau ; clic extérieur referme (script DSBJ).',
      'prop-bj-nav': 'Conteneur.',
      'prop-bj-nav__list': 'Structure.',
      'prop-bj-nav__link': 'Lien.',
      'prop-bj-nav__btn': 'Bouton méga-menu.',
      'prop-bj-nav__mega': 'Panneau.',
      'a11y-note':
        '<code>aria-expanded</code> sur le bouton ; focus clavier dans le panneau ouvert.',
    },
    en: {
      title: 'Main navigation',
      desc:
        'Bar with links and expandable mega menus (<code>data-bj-nav-btn</code>).',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-desc':
        'Other mega menus close when a new panel opens; outside click closes (DSBJ script).',
      'prop-bj-nav': 'Container.',
      'prop-bj-nav__list': 'Structure.',
      'prop-bj-nav__link': 'Link.',
      'prop-bj-nav__btn': 'Mega menu button.',
      'prop-bj-nav__mega': 'Panel.',
      'a11y-note':
        '<code>aria-expanded</code> on the button; keyboard focus in the open panel.',
    },
  },
})

const codeExemple = `<button type="button" class="bj-nav__btn" data-bj-nav-btn
  aria-controls="mega-id" aria-expanded="false">…</button>
<div class="bj-nav__mega" id="mega-id">…</div>`

const propsRows = computed(() => [
  { name: 'bj-nav', description: t('prop-bj-nav') },
  {
    name: 'bj-nav__list / bj-nav__item',
    description: t('prop-bj-nav__list'),
  },
  { name: 'bj-nav__link', description: t('prop-bj-nav__link') },
  { name: 'bj-nav__btn', description: t('prop-bj-nav__btn') },
  {
    name: 'bj-nav__mega / bj-nav__mega-content / bj-nav__mega-title',
    description: t('prop-bj-nav__mega'),
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
    v-html="t('desc')"
  />

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
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

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('variantes-desc') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
