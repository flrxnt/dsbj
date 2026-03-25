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
      desc: 'Conteneur de navigation : liste de liens via le slot par défaut (structure .bj-nav__item / .bj-nav__link).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-default':
        'Slot par défaut : éléments li.bj-nav__item à placer dans le ul interne.',
      'nav-aria': 'Navigation',
      'nav-home': 'Accueil',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
    },
    en: {
      title: 'BjNavigation',
      desc: 'Navigation wrapper: link list via the default slot (.bj-nav__item / .bj-nav__link structure).',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-default': 'Default slot: li.bj-nav__item nodes inside the internal ul.',
      'nav-aria': 'Navigation',
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
    },
  },
})

const codeUsage = `<script setup>
import { BjNavigation } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjNavigation>
    <li class="bj-nav__item">
      <a class="bj-nav__link" href="#">Accueil</a>
    </li>
    <li class="bj-nav__item">
      <a class="bj-nav__link" href="#">Services</a>
    </li>
  </BjNavigation>
</template>`

const propsRows = computed(() => [{ name: 'default', description: t('prop-default') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-navigation-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-navigation-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-navigation-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
