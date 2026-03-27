<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjFooter',
      desc:
        'Pied de page React : zone supérieure optionnelle dans un conteneur, puis bloc principal avec conteneur pour le bas de page.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-bottom-only': 'bottom seul (sans top)',
      'section-top-bottom': 'top et bottom',
      'section-children': 'bottom et children',
      'section-full': 'Composition complète',
      'section-rest': 'Attributs natifs du footer',
      'desc-bottom-only': 'Si top est absent, la bande bj-footer__top n’est pas rendue.',
      'desc-top-bottom': 'Bande utile pour liens secondaires ou rappels.',
      'desc-children': 'children s’affiche après bottom dans le même conteneur du bas.',
      'desc-full': 'Les trois zones : bande haute, contenu principal, contenu additionnel.',
      'desc-rest': 'id, className, role, data-* et autres attributs HTML du <footer> sont fusionnés sur la racine.',
      'prop-top': 'Contenu de la bande supérieure (bj-footer__top), optionnel.',
      'prop-bottom': 'Contenu principal du bas (copyright, liens légaux, etc.).',
      'prop-children': 'Contenu additionnel rendu dans le conteneur du bas après bottom.',
      'prop-rest': 'Attributs natifs du footer et className fusionnés sur l’élément racine.',
      'preview-top': 'Liens utiles',
      'preview-bottom': '© République du Bénin',
    },
    en: {
      title: 'BjFooter',
      desc:
        'React footer: optional top band in a container, then a main bottom block with container for legal links and copy.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-bottom-only': 'bottom only (no top)',
      'section-top-bottom': 'top and bottom',
      'section-children': 'bottom and children',
      'section-full': 'Full composition',
      'section-rest': 'Native footer attributes',
      'desc-bottom-only': 'When top is omitted, the bj-footer__top section is not rendered.',
      'desc-top-bottom': 'Upper band for secondary links or notices.',
      'desc-children': 'children render after bottom inside the same bottom container.',
      'desc-full': 'All three areas: top band, main bottom block, extra content.',
      'desc-rest': 'id, className, role, data-*, and other <footer> HTML attributes merge on the root.',
      'prop-top': 'Upper band content (bj-footer__top), optional.',
      'prop-bottom': 'Main bottom content (legal links, copyright, etc.).',
      'prop-children': 'Extra content rendered in the bottom container after bottom.',
      'prop-rest': 'Native footer attributes and className merged on the root element.',
      'preview-top': 'Useful links',
      'preview-bottom': '© Republic of Benin',
    },
  },
})

const codeUsage = `import { BjFooter } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjFooter
      top={<p className="bj-text-sm">Liens utiles</p>}
      bottom={
        <ul className="bj-footer__bottom-list">
          <li>
            <a className="bj-footer__bottom-link" href="/mentions-legales">
              Mentions légales
            </a>
          </li>
          <li>
            <a className="bj-footer__bottom-link" href="/accessibilite">
              Accessibilité
            </a>
          </li>
        </ul>
      }
    />
  )
}`

const codeBottomOnly = `import { BjFooter } from '@flrxnt/dsbj/react'

export function BottomOnly() {
  return (
    <BjFooter
      bottom={<p className="bj-text-sm">© 2025 République du Bénin</p>}
    />
  )
}`

const codeTopBottom = `import { BjFooter } from '@flrxnt/dsbj/react'

export function TopAndBottom() {
  return (
    <BjFooter
      top={
        <ul className="bj-footer__bottom-list">
          <li><a className="bj-footer__bottom-link" href="/plan">Plan du site</a></li>
          <li><a className="bj-footer__bottom-link" href="/faq">FAQ</a></li>
        </ul>
      }
      bottom={
        <p className="bj-text-sm">Service public — Tous droits réservés</p>
      }
    />
  )
}`

const codeChildren = `import { BjFooter } from '@flrxnt/dsbj/react'

export function BottomPlusChildren() {
  return (
    <BjFooter
      bottom={
        <ul className="bj-footer__bottom-list">
          <li><a className="bj-footer__bottom-link" href="/legal">Mentions</a></li>
        </ul>
      }
    >
      <p className="bj-text-sm" style={{ marginTop: '1rem' }}>
        Version 2.1 — Dernière mise à jour : mars 2025
      </p>
    </BjFooter>
  )
}`

const codeFull = `import { BjFooter } from '@flrxnt/dsbj/react'

export function FullFooter() {
  return (
    <BjFooter
      top={<p className="bj-text-sm">Contacts institutionnels</p>}
      bottom={<p>© République du Bénin</p>}
    >
      <nav aria-label="Liens pied de page">
        <a href="/accessibilite">Accessibilité : partiellement conforme</a>
      </nav>
    </BjFooter>
  )
}`

const codeRest = `import { BjFooter } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjFooter
      id="site-footer"
      className="app-footer"
      role="contentinfo"
      data-testid="footer"
      bottom={<p>© Bénin</p>}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'top', description: t('prop-top') },
  { name: 'bottom', description: t('prop-bottom') },
  { name: 'children', description: t('prop-children') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-footer-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-footer-preview" :title="t('section-preview')">
    <DocsPreview>
      <footer class="bj-footer">
        <div class="bj-footer__top">
          <div class="bj-container">
            <p class="bj-text-sm">{{ t('preview-top') }}</p>
          </div>
        </div>
        <div class="bj-footer__bottom">
          <div class="bj-container">
            <p class="bj-text-sm">{{ t('preview-bottom') }}</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-footer-bottom-only" :title="t('section-bottom-only')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-bottom-only') }}</p>
    <DocsCode :code="codeBottomOnly" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-footer-top-bottom" :title="t('section-top-bottom')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-top-bottom') }}</p>
    <DocsCode :code="codeTopBottom" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-footer-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-footer-full" :title="t('section-full')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-full') }}</p>
    <DocsCode :code="codeFull" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-footer-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-footer-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
