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
      title: 'BjCallout',
      desc: 'Bloc de mise en avant avec bordure latérale, icône et titre optionnels ; la prop action accepte un nœud React pour un bouton ou un lien.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-color': 'default par défaut, green, yellow ou red.',
      'prop-icon': 'Classe d’icône Remix affichée à gauche.',
      'prop-title': 'Titre au-dessus du contenu enfant.',
      'prop-action': 'Zone d’action à droite (ex. bouton).',
      'ex-title': 'Information',
      'ex-body': 'Ce bloc attire l’attention sur un message important pour l’utilisateur.',
      'ex-action': 'En savoir plus',
    },
    en: {
      title: 'BjCallout',
      desc: 'Highlight block with optional icon and title; the action prop accepts a React node such as a button.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-color': 'default by default, green, yellow, or red.',
      'prop-icon': 'Remix icon class shown on the left.',
      'prop-title': 'Title above child content.',
      'prop-action': 'Right-side action slot (e.g. button).',
      'ex-title': 'Information',
      'ex-body': 'This block draws attention to an important message for the user.',
      'ex-action': 'Learn more',
    },
  },
})

const codeUsage = `import { BjButton, BjCallout } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjCallout
      color="yellow"
      icon="ri-information-line"
      title="Information"
      action={<BjButton variant="secondary" size="sm">En savoir plus</BjButton>}
    >
      <p>Ce bloc attire l’attention sur un message important pour l’utilisateur.</p>
    </BjCallout>
  )
}`

const propsRows = computed(() => [
  { name: 'color', description: t('prop-color') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'title', description: t('prop-title') },
  { name: 'action', description: t('prop-action') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-callout-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-callout bj-callout--yellow">
        <i class="ri-information-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">{{ t('ex-title') }}</p>
        <div class="bj-callout__text">
          <p>{{ t('ex-body') }}</p>
        </div>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn bj-btn--secondary bj-btn--sm">{{ t('ex-action') }}</a>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-callout-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
