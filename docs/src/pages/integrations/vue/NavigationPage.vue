<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjNavigation } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjNavigation',
      desc: 'Conteneur de navigation : le slot par défaut doit fournir des éléments li.bj-nav__item contenant des liens .bj-nav__link (liste ul gérée par le composant).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-one-item': 'Un lien',
      'section-multi': 'Plusieurs liens',
      'section-current': 'Lien courant (aria-current)',
      'prop-default':
        'Slot par défaut : uniquement des li avec les classes DSBJ ; pas de ul à ajouter manuellement.',
      'nav-aria': 'Navigation',
      'nav-home': 'Accueil',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
      'nav-about': 'À propos',
    },
    en: {
      title: 'BjNavigation',
      desc: 'Navigation wrapper: the default slot must provide li.bj-nav__item elements with .bj-nav__link anchors (the ul is rendered by the component).',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-one-item': 'Single link',
      'section-multi': 'Multiple links',
      'section-current': 'Current link (aria-current)',
      'prop-default': 'Default slot: only li nodes with DSBJ classes; do not add a ul manually.',
      'nav-aria': 'Navigation',
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
      'nav-about': 'About',
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

const codeOne = `<BjNavigation>
  <li class="bj-nav__item">
    <a class="bj-nav__link" href="#">Accueil</a>
  </li>
</BjNavigation>`

const codeMulti = `<BjNavigation>
  <li class="bj-nav__item"><a class="bj-nav__link" href="#">Accueil</a></li>
  <li class="bj-nav__item"><a class="bj-nav__link" href="#">Services</a></li>
  <li class="bj-nav__item"><a class="bj-nav__link" href="#">Contact</a></li>
  <li class="bj-nav__item"><a class="bj-nav__link" href="#">À propos</a></li>
</BjNavigation>`

const codeCurrent = `<BjNavigation>
  <li class="bj-nav__item">
    <a class="bj-nav__link" href="/">Accueil</a>
  </li>
  <li class="bj-nav__item">
    <a class="bj-nav__link" href="/ici" aria-current="page">Page courante</a>
  </li>
</BjNavigation>`

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
      <BjNavigation :aria-label="t('nav-aria')">
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-home') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-services') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-contact') }}</a>
        </li>
      </BjNavigation>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-navigation-one" :title="t('section-one-item')">
    <DocsPreview>
      <BjNavigation>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-home') }}</a>
        </li>
      </BjNavigation>
    </DocsPreview>
    <DocsCode :code="codeOne" lang="html" />
  </DocsSection>

  <DocsSection id="vue-navigation-multi" :title="t('section-multi')">
    <DocsPreview>
      <BjNavigation>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-home') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-services') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-contact') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-about') }}</a>
        </li>
      </BjNavigation>
    </DocsPreview>
    <DocsCode :code="codeMulti" lang="html" />
  </DocsSection>

  <DocsSection id="vue-navigation-current" :title="t('section-current')">
    <DocsPreview>
      <BjNavigation>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-home') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" aria-current="page" @click.prevent>{{ t('nav-services') }}</a>
        </li>
        <li class="bj-nav__item">
          <a class="bj-nav__link" href="#" @click.prevent>{{ t('nav-contact') }}</a>
        </li>
      </BjNavigation>
    </DocsPreview>
    <DocsCode :code="codeCurrent" lang="html" />
  </DocsSection>

  <DocsSection id="vue-navigation-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
