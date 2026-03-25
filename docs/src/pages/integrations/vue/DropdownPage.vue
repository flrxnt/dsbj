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
      title: 'BjDropdown',
      desc: 'Composant Vue pour le menu déroulant DSBJ. Déclencheur personnalisable (slot trigger), liste d’éléments dans le slot par défaut, alignement et direction configurables.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-align': 'Alignement du menu par rapport au déclencheur : left (défaut) ou right.',
      'prop-direction': 'Ouverture du menu : down (défaut) ou up.',
      'prop-size': 'Taille : md (défaut) ou sm.',
    },
    en: {
      title: 'BjDropdown',
      desc: 'Vue component for the DSBJ dropdown. Custom trigger slot (#trigger), menu items in the default slot, configurable alignment and direction.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-align': 'Menu alignment relative to the trigger: left (default) or right.',
      'prop-direction': 'Menu opens downward (default) or upward.',
      'prop-size': 'Size: md (default) or sm.',
    },
  },
})

const codeUsage = `<script setup>
import { BjButton, BjDropdown } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjDropdown align="left" direction="down" size="md">
    <template #trigger>
      <BjButton type="button">Options</BjButton>
    </template>
    <li class="bj-dropdown__item">
      <button type="button" role="menuitem">Modifier</button>
    </li>
    <li class="bj-dropdown__item">
      <button type="button" role="menuitem">Supprimer</button>
    </li>
  </BjDropdown>
</template>`

const propsRows = computed(() => [
  { name: 'align', description: t('prop-align') },
  { name: 'direction', description: t('prop-direction') },
  { name: 'size', description: t('prop-size') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-dropdown-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dropdown-preview" :title="t('section-preview')">
    <DocsPreview style="min-height: 14rem">
      <div class="bj-dropdown">
        <div class="bj-dropdown__trigger" aria-haspopup="true" aria-expanded="true">
          <button type="button" class="bj-btn">
            Options <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
          </button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block">
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Modifier</button>
          </li>
          <li class="bj-dropdown__divider" role="separator"></li>
          <li class="bj-dropdown__item">
            <button type="button" role="menuitem">Supprimer</button>
          </li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-dropdown-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
