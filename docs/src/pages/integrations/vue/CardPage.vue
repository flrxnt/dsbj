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
      desc: 'Conteneur carte Vue avec modificateurs horizontal, flat, highlight et lien. Utilisez BjCardImg, BjCardBody et BjCardFooter dans le slot par défaut.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-horizontal': 'Disposition image à gauche, contenu à droite.',
      'prop-flat': 'Sans bordure ni ombre.',
      'prop-highlight': 'Bordure gauche d’accent.',
      'prop-link': 'Style carte interactive (à utiliser avec tag="a").',
      'prop-tag': 'Élément racine : article, div ou a.',
    },
    en: {
      title: 'BjCard',
      desc: 'Vue card container with horizontal, flat, highlight, and link modifiers. Use BjCardImg, BjCardBody, and BjCardFooter inside the default slot.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-horizontal': 'Image left, content right.',
      'prop-flat': 'No border or shadow.',
      'prop-highlight': 'Accent left border.',
      'prop-link': 'Interactive card look (use with tag="a").',
      'prop-tag': 'Root element: article, div, or a.',
    },
  },
})

const codeUsage = `<script setup>
import { BjCard, BjCardBody, BjCardFooter, BjCardImg } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjCard>
    <BjCardImg background="var(--bj-surface-alt)" />
    <BjCardBody>
      <p class="bj-card__detail">Actualité</p>
      <h3 class="bj-card__title">Titre</h3>
      <p class="bj-card__desc">Résumé de l’article.</p>
    </BjCardBody>
    <BjCardFooter>
      <span class="bj-card__start">12 mars 2025</span>
    </BjCardFooter>
  </BjCard>
</template>`

const propsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'flat', description: t('prop-flat') },
  { name: 'highlight', description: t('prop-highlight') },
  { name: 'link', description: t('prop-link') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-card-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-preview" :title="t('section-preview')">
    <DocsPreview>
      <article class="bj-card" style="max-width: 22rem">
        <div
          class="bj-card__img"
          style="background: linear-gradient(135deg, var(--bj-action-high) 0%, var(--bj-action) 100%); min-height: 8rem"
          role="img"
          aria-label=""
        />
        <div class="bj-card__body">
          <p class="bj-card__detail">Actualité</p>
          <h3 class="bj-card__title">Titre</h3>
          <p class="bj-card__desc">Résumé de l’article.</p>
        </div>
        <footer class="bj-card__footer">
          <span class="bj-card__start bj-text-sm">12 mars 2025</span>
        </footer>
      </article>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-card-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
