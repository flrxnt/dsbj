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
      desc: 'Bloc de mise en avant avec bordure latérale, icône et titre optionnels, zone d’action optionnelle (slot action).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-color': 'default (défaut), green, yellow ou red — couleur de la bordure gauche.',
      'prop-icon': 'Classe d’icône (ex. Remix Icon) affichée à gauche.',
      'prop-title': 'Titre au-dessus du contenu du slot par défaut.',
      'ex-title': 'Information',
      'ex-body': 'Ce bloc attire l’attention sur un message important pour l’utilisateur.',
      'ex-action': 'En savoir plus',
      'code-title': 'Information',
      'code-body': 'Ce bloc attire l’attention sur un message important pour l’utilisateur.',
      'code-action': 'En savoir plus',
    },
    en: {
      title: 'BjCallout',
      desc: 'Highlighted block with optional left accent, icon, title, and optional action area (action slot).',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-color': 'default (default), green, yellow, or red — left border color.',
      'prop-icon': 'Icon class (e.g. Remix Icon) shown on the left.',
      'prop-title': 'Title above the default slot content.',
      'ex-title': 'Information',
      'ex-body': 'This block draws attention to an important message for the user.',
      'ex-action': 'Learn more',
      'code-title': 'Information',
      'code-body': 'This block draws attention to an important message for the user.',
      'code-action': 'Learn more',
    },
  },
})

const codeUsage = computed(
  () => `<script setup>
import { BjCallout, BjButton } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjCallout color="yellow" icon="ri-information-line" :title="t('code-title')">
    {{ t('code-body') }}
    <template #action>
      <BjButton variant="secondary" size="sm">{{ t('code-action') }}</BjButton>
    </template>
  </BjCallout>
</template>`,
)

const propsRows = computed(() => [
  { name: 'color', description: t('prop-color') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'title', description: t('prop-title') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-callout-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-callout-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
