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
        'Liste horizontale ou verticale de liens ; variante avec méga-menus (<code>data-bj-nav-btn</code>, <code>data-bj-expanded</code> sur le panneau). Le composant Vue <code>BjNavigation</code> ne fournit que <code>bj-nav</code> et <code>bj-nav__list</code> ; les entrées utilisent les classes ci-dessous en HTML.',
      'section-simple': 'Liste de liens',
      'section-megamenu': 'Méga-menu',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'simple-p':
        'L\u2019état actif d\u2019un lien repose sur <code>aria-current="page"</code> (styles dans <code>bj-nav__link</code>). Vous pouvez ajouter un modificateur BEM <code>bj-nav__link--active</code> en miroir si vos feuilles de style l\u2019exigent.',
      'variantes-desc':
        'Fermeture des autres méga-menus à l\u2019ouverture d\u2019un nouveau panneau ; clic extérieur referme (script DSBJ).',
      'prop-bj-nav': 'Conteneur <code>nav</code>.',
      'prop-bj-nav__list': 'Liste <code>ul</code> des entrées.',
      'prop-bj-nav__item': 'Élément <code>li</code>.',
      'prop-bj-nav__link': 'Lien de navigation.',
      'prop-bj-nav__link--active':
        'Modificateur optionnel pour l\u2019entrée courante (préférer <code>aria-current="page"</code>).',
      'prop-bj-nav__btn': 'Bouton qui ouvre un méga-menu.',
      'prop-bj-nav__mega': 'Panneau déroulant du méga-menu.',
      'prop-bj-nav__mega-content': 'Grille du contenu du panneau.',
      'prop-bj-nav__mega-title': 'Titre de colonne dans le panneau.',
      'prop-bj-nav__mega-list': 'Liste de liens dans une colonne du méga-menu.',
      'prop-bj-nav__mega-link': 'Lien dans le méga-menu.',
      'a11y-note':
        '<code>aria-expanded</code> sur le bouton ; focus clavier dans le panneau ouvert ; <code>aria-current="page"</code> sur le lien de la page courante.',
    },
    en: {
      title: 'Main navigation',
      desc:
        'Horizontal or vertical link list; variant with mega menus (<code>data-bj-nav-btn</code>, <code>data-bj-expanded</code> on the panel). The <code>BjNavigation</code> Vue component only renders <code>bj-nav</code> and <code>bj-nav__list</code>; entries use the classes below in HTML.',
      'section-simple': 'Link list',
      'section-megamenu': 'Mega menu',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'simple-p':
        'Active links rely on <code>aria-current="page"</code> (styled via <code>bj-nav__link</code>). You may add a BEM modifier <code>bj-nav__link--active</code> if your stylesheets expect it.',
      'variantes-desc':
        'Other mega menus close when a new panel opens; outside click closes (DSBJ script).',
      'prop-bj-nav': '<code>nav</code> container.',
      'prop-bj-nav__list': '<code>ul</code> list of entries.',
      'prop-bj-nav__item': '<code>li</code> item.',
      'prop-bj-nav__link': 'Navigation link.',
      'prop-bj-nav__link--active':
        'Optional modifier for the current entry (prefer <code>aria-current="page"</code>).',
      'prop-bj-nav__btn': 'Button that opens a mega menu.',
      'prop-bj-nav__mega': 'Mega menu panel.',
      'prop-bj-nav__mega-content': 'Panel content grid.',
      'prop-bj-nav__mega-title': 'Column title inside the panel.',
      'prop-bj-nav__mega-list': 'Link list in a mega menu column.',
      'prop-bj-nav__mega-link': 'Link inside the mega menu.',
      'a11y-note':
        '<code>aria-expanded</code> on the button; keyboard focus in the open panel; <code>aria-current="page"</code> on the current page link.',
    },
  },
})

const codeSimple = `<nav class="bj-nav bj-container" aria-label="Navigation">
  <ul class="bj-nav__list">
    <li class="bj-nav__item">
      <a class="bj-nav__link" href="/">Accueil</a>
    </li>
    <li class="bj-nav__item">
      <a class="bj-nav__link" href="/demarches">Démarches</a>
    </li>
    <li class="bj-nav__item">
      <a class="bj-nav__link bj-nav__link--active" href="/contact" aria-current="page">Contact</a>
    </li>
  </ul>
</nav>`

const codeMegamenu = `<nav class="bj-nav bj-container" aria-label="Navigation">
  <ul class="bj-nav__list">
    <li class="bj-nav__item">
      <a class="bj-nav__link" href="#">Accueil</a>
    </li>
    <li class="bj-nav__item">
      <button type="button" class="bj-nav__btn" data-bj-nav-btn aria-expanded="false" aria-controls="mega-id">Thématiques</button>
      <div class="bj-nav__mega" id="mega-id">
        <div class="bj-nav__mega-content">
          <div>
            <p class="bj-nav__mega-title">Citoyenneté</p>
            <ul class="bj-nav__mega-list">
              <li><a class="bj-nav__mega-link" href="#">État civil</a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</nav>`

const propsRows = computed(() => [
  { name: 'bj-nav', description: t('prop-bj-nav') },
  { name: 'bj-nav__list', description: t('prop-bj-nav__list') },
  { name: 'bj-nav__item', description: t('prop-bj-nav__item') },
  { name: 'bj-nav__link', description: t('prop-bj-nav__link') },
  {
    name: 'bj-nav__link--active',
    description: t('prop-bj-nav__link--active'),
  },
  { name: 'bj-nav__btn', description: t('prop-bj-nav__btn') },
  { name: 'bj-nav__mega', description: t('prop-bj-nav__mega') },
  {
    name: 'bj-nav__mega-content',
    description: t('prop-bj-nav__mega-content'),
  },
  {
    name: 'bj-nav__mega-title',
    description: t('prop-bj-nav__mega-title'),
  },
  {
    name: 'bj-nav__mega-list',
    description: t('prop-bj-nav__mega-list'),
  },
  {
    name: 'bj-nav__mega-link',
    description: t('prop-bj-nav__mega-link'),
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

  <DocsSection id="sec-simple" :title="t('section-simple')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-4v)"
      v-html="t('simple-p')"
    />
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
            <a class="bj-nav__link" href="#">Démarches</a>
          </li>
          <li class="bj-nav__item">
            <a
              class="bj-nav__link bj-nav__link--active"
              href="#"
              aria-current="page"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeSimple" />
  </DocsSection>

  <DocsSection id="sec-megamenu" :title="t('section-megamenu')">
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
                  <ul class="bj-nav__mega-list">
                    <li>
                      <a class="bj-nav__mega-link" href="#">État civil</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="bj-nav__mega-title">Économie</p>
                  <ul class="bj-nav__mega-list">
                    <li>
                      <a class="bj-nav__mega-link" href="#">Entreprises</a>
                    </li>
                  </ul>
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
    <DocsCode :code="codeMegamenu" />
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
