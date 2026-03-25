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

  <DocsSection id="react-footer-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
