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
        'Navigation secondaire avec état actif et sous-niveaux ; bouton section optionnel.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-p':
        'Associer un script pour masquer le sous-menu lorsque <code>aria-expanded="false"</code> si nécessaire.',
      'a11y-note':
        '<code>aria-current="page"</code> sur le lien actif ; cohérence <code>aria-expanded</code> / visibilité du sous-menu.',
      'prop-bj-sidemenu': 'Conteneur.',
      'prop-bj-sidemenu-title': 'Titre.',
      'prop-bj-sidemenu-list': 'Liste.',
      'prop-bj-sidemenu-link': 'Liens.',
      'prop-bj-sidemenu-sublist': 'Sous-niveau.',
      'prop-bj-sidemenu-btn': 'Section repliable.',
    },
    en: {
      title: 'Side menu',
      desc:
        'Secondary navigation with active state and sub-levels; optional section button.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-p':
        'Wire a script to hide the submenu when <code>aria-expanded="false"</code> if needed.',
      'a11y-note':
        '<code>aria-current="page"</code> on the active link; keep <code>aria-expanded</code> consistent with submenu visibility.',
      'prop-bj-sidemenu': 'Container.',
      'prop-bj-sidemenu-title': 'Title.',
      'prop-bj-sidemenu-list': 'List.',
      'prop-bj-sidemenu-link': 'Links.',
      'prop-bj-sidemenu-sublist': 'Sub-level.',
      'prop-bj-sidemenu-btn': 'Collapsible section.',
    },
  },
})

const codeExemple = `<nav class="bj-sidemenu">…</nav>`

const propsRows = computed(() => [
  { name: 'bj-sidemenu', description: t('prop-bj-sidemenu') },
  { name: 'bj-sidemenu__title', description: t('prop-bj-sidemenu-title') },
  {
    name: 'bj-sidemenu__list / bj-sidemenu__item',
    description: t('prop-bj-sidemenu-list'),
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

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
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
