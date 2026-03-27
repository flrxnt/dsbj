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
      title: 'Menu latéral',
      desc:
        'Navigation secondaire avec titre optionnel, état actif (<code>bj-sidemenu__link--active</code> + <code>aria-current="page"</code>) et sous-niveaux <code>bj-sidemenu__sublist</code> (comme <code>BjSidemenu</code>).',
      'section-exemple': 'Exemple avec section repliable',
      'section-nested': 'Sous-menus imbriqués',
      'section-nested-p':
        'Chaque enfant reprend <code>bj-sidemenu__item</code> et <code>bj-sidemenu__link</code> ; l\u2019état actif peut être sur un sous-lien.',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-p':
        'La classe <code>bj-sidemenu__btn</code> stylise un bouton de section repliable ; associez un script si vous basculez <code>aria-expanded</code> et la visibilité du sous-menu.',
      'a11y-note':
        '<code>aria-current="page"</code> sur le lien actif ; cohérence <code>aria-expanded</code> / visibilité du sous-menu pour les boutons.',
      'prop-bj-sidemenu': 'Conteneur <code>nav</code>.',
      'prop-bj-sidemenu-title': 'Titre du menu (<code>p</code>).',
      'prop-bj-sidemenu-list': 'Liste principale <code>ul</code>.',
      'prop-bj-sidemenu-item': 'Élément <code>li</code> (niveau principal ou enfant).',
      'prop-bj-sidemenu-link': 'Lien ; modificateur <code>--active</code> pour la page courante.',
      'prop-bj-sidemenu-sublist': 'Liste imbriquée pour les enfants.',
      'prop-bj-sidemenu-btn': 'Bouton de section repliable (pattern optionnel, présent en CSS).',
    },
    en: {
      title: 'Side menu',
      desc:
        'Secondary navigation with optional title, active state (<code>bj-sidemenu__link--active</code> + <code>aria-current="page"</code>), and <code>bj-sidemenu__sublist</code> nesting (same as <code>BjSidemenu</code>).',
      'section-exemple': 'Example with collapsible section',
      'section-nested': 'Nested submenus',
      'section-nested-p':
        'Each child uses <code>bj-sidemenu__item</code> and <code>bj-sidemenu__link</code>; the active state may be on a child link.',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-p':
        '<code>bj-sidemenu__btn</code> styles a collapsible section button; wire a script if you toggle <code>aria-expanded</code> and submenu visibility.',
      'a11y-note':
        '<code>aria-current="page"</code> on the active link; keep <code>aria-expanded</code> consistent with submenu visibility.',
      'prop-bj-sidemenu': '<code>nav</code> container.',
      'prop-bj-sidemenu-title': 'Menu title (<code>p</code>).',
      'prop-bj-sidemenu-main': 'Main <code>ul</code>.',
      'prop-bj-sidemenu-item': '<code>li</code> item (top level or nested).',
      'prop-bj-sidemenu-link': 'Link; <code>--active</code> modifier for the current page.',
      'prop-bj-sidemenu-sublist': 'Nested list for children.',
      'prop-bj-sidemenu-btn': 'Optional collapsible section button (CSS pattern).',
    },
  },
})

const codeExemple = `<nav class="bj-sidemenu" aria-label="Menu latéral">
  <p class="bj-sidemenu__title">Mon espace</p>
  <ul class="bj-sidemenu__list">
    <li class="bj-sidemenu__item">
      <a class="bj-sidemenu__link bj-sidemenu__link--active" href="#" aria-current="page">Tableau de bord</a>
    </li>
    <li class="bj-sidemenu__item">
      <button type="button" class="bj-sidemenu__btn" aria-expanded="true" aria-controls="sub-reglages">Réglages</button>
      <ul class="bj-sidemenu__sublist" id="sub-reglages">
        <li class="bj-sidemenu__item">
          <a class="bj-sidemenu__link" href="#">Profil</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>`

const codeNested = `<nav class="bj-sidemenu" aria-label="Menu latéral">
  <p class="bj-sidemenu__title">Documentation</p>
  <ul class="bj-sidemenu__list">
    <li class="bj-sidemenu__item">
      <a class="bj-sidemenu__link" href="#">Vue d'ensemble</a>
      <ul class="bj-sidemenu__sublist">
        <li class="bj-sidemenu__item">
          <a class="bj-sidemenu__link bj-sidemenu__link--active" href="#" aria-current="page">Installation</a>
        </li>
        <li class="bj-sidemenu__item">
          <a class="bj-sidemenu__link" href="#">Configuration</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>`

const propsRows = computed(() => [
  { name: 'bj-sidemenu', description: t('prop-bj-sidemenu') },
  { name: 'bj-sidemenu__title', description: t('prop-bj-sidemenu-title') },
  {
    name: 'bj-sidemenu__list',
    description: t('prop-bj-sidemenu-list'),
  },
  {
    name: 'bj-sidemenu__item',
    description: t('prop-bj-sidemenu-item'),
  },
  {
    name: 'bj-sidemenu__link / bj-sidemenu__link--active',
    description: t('prop-bj-sidemenu-link'),
  },
  { name: 'bj-sidemenu__sublist', description: t('prop-bj-sidemenu-sublist') },
  { name: 'bj-sidemenu__btn', description: t('prop-bj-sidemenu-btn') },
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

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
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

  <DocsSection id="sec-nested" :title="t('section-nested')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-4v)"
      v-html="t('section-nested-p')"
    />
    <DocsPreview>
      <nav class="bj-sidemenu" aria-label="Sous-navigation">
        <p class="bj-sidemenu__title">Documentation</p>
        <ul
          class="bj-sidemenu__list"
          style="list-style: none; margin: 0; padding: 0"
        >
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link" href="#">Vue d\u2019ensemble</a>
            <ul
              class="bj-sidemenu__sublist"
              style="list-style: none; margin: 0; padding: 0"
            >
              <li class="bj-sidemenu__item">
                <a
                  class="bj-sidemenu__link bj-sidemenu__link--active"
                  href="#"
                  aria-current="page"
                  >Installation</a
                >
              </li>
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link" href="#">Configuration</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeNested" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-4v)"
      v-html="t('variantes-p')"
    />
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
