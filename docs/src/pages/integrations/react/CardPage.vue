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
      title: 'BjCard',
      desc: 'Conteneur carte React avec forwardRef, modificateurs horizontal, flat, highlight et lien ; la balise racine est article par défaut, ou div ou lien via la prop as.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-horizontal': 'Disposition image à gauche, contenu à droite.',
      'prop-flat': 'Sans bordure ni ombre.',
      'prop-highlight': 'Bordure gauche d’accent.',
      'prop-link': 'Style carte interactive.',
      'prop-as': 'Élément racine : article par défaut, div ou a.',
      'detail': 'Actualité',
      'card-title': 'Titre',
      'card-desc': 'Résumé de l’article.',
      'footer': '12 mars 2025',
    },
    en: {
      title: 'BjCard',
      desc: 'React card shell with forwardRef and horizontal, flat, highlight, and link modifiers; root is article by default, or div or anchor via the as prop.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-horizontal': 'Image left, content right.',
      'prop-flat': 'No border or shadow.',
      'prop-highlight': 'Accent left border.',
      'prop-link': 'Interactive card styling.',
      'prop-as': 'Root element: article by default, div, or a.',
      'detail': 'News',
      'card-title': 'Title',
      'card-desc': 'Article summary.',
      'footer': '12 March 2025',
    },
  },
})

const codeUsage = `import { BjCard, BjCardBody, BjCardFooter, BjCardImg } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjCard>
      <BjCardImg background="var(--bj-surface-alt)" />
      <BjCardBody>
        <p className="bj-card__detail">Actualité</p>
        <h3 className="bj-card__title">Titre</h3>
        <p className="bj-card__desc">Résumé de l’article.</p>
      </BjCardBody>
      <BjCardFooter>
        <span className="bj-card__start">12 mars 2025</span>
      </BjCardFooter>
    </BjCard>
  )
}`

const propsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'flat', description: t('prop-flat') },
  { name: 'highlight', description: t('prop-highlight') },
  { name: 'link', description: t('prop-link') },
  { name: 'as', description: t('prop-as') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-card-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-card-preview" :title="t('section-preview')">
    <DocsPreview>
      <article class="bj-card" style="max-width: 22rem">
        <div
          class="bj-card__img"
          style="background: linear-gradient(135deg, var(--bj-action-high) 0%, var(--bj-action) 100%); min-height: 8rem"
          role="img"
          aria-label=""
        />
        <div class="bj-card__body">
          <p class="bj-card__detail">{{ t('detail') }}</p>
          <h3 class="bj-card__title">{{ t('card-title') }}</h3>
          <p class="bj-card__desc">{{ t('card-desc') }}</p>
        </div>
        <footer class="bj-card__footer">
          <span class="bj-card__start bj-text-sm">{{ t('footer') }}</span>
        </footer>
      </article>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-card-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
