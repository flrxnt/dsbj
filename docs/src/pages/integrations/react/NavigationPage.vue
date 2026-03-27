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
      title: 'BjNavigation',
      desc: 'Conteneur de navigation React : liste de liens via children (structure .bj-nav__item / .bj-nav__link).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-children': 'Éléments li.bj-nav__item à placer dans le ul interne.',
      'prop-nav': 'Attributs nav natifs supplémentaires.',
      'nav-aria': 'Navigation',
      'nav-home': 'Accueil',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
    },
    en: {
      title: 'BjNavigation',
      desc: 'React navigation wrapper: link list via children (.bj-nav__item / .bj-nav__link structure).',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-children': 'li.bj-nav__item nodes inside the internal ul.',
      'prop-nav': 'Extra native nav attributes are forwarded.',
      'nav-aria': 'Navigation',
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
    },
  },
})

const codeUsage = `import { BjNavigation } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjNavigation>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="#">Accueil</a>
      </li>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="#">Services</a>
      </li>
    </BjNavigation>
  )
}`

const propsRows = computed(() => [
  { name: 'children', description: t('prop-children') },
  { name: '(nav props)', description: t('prop-nav') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-navigation-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-navigation-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-nav" :aria-label="t('nav-aria')">
        <ul class="bj-nav__list">
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">{{ t('nav-home') }}</a>
          </li>
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">{{ t('nav-services') }}</a>
          </li>
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">{{ t('nav-contact') }}</a>
          </li>
        </ul>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-navigation-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
