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
      title: 'BjTab',
      desc: 'Onglets Vue : la prop tabs fournit les libellés ; chaque BjTabPanel correspond à un panneau dans l’ordre. v-model lie l’index actif.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props — BjTab',
      'section-props-panel': 'BjTabPanel',
      'prop-modelValue': 'Index de l’onglet actif (v-model).',
      'prop-tabs': 'Tableau de chaînes pour les libellés des onglets.',
      'prop-panel-slot': 'Contenu du panneau (slot par défaut).',
    },
    en: {
      title: 'BjTab',
      desc: 'Vue tabs: the tabs prop supplies labels; each BjTabPanel is a panel in order. v-model binds the active index.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props — BjTab',
      'section-props-panel': 'BjTabPanel',
      'prop-modelValue': 'Active tab index (v-model).',
      'prop-tabs': 'Array of strings for tab labels.',
      'prop-panel-slot': 'Panel content (default slot).',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/vue'

const active = ref(0)
<\/script>

<template>
  <BjTab v-model="active" :tabs="['Général', 'Pièces']">
    <BjTabPanel>
      <p>Contenu de l’onglet général.</p>
    </BjTabPanel>
    <BjTabPanel>
      <p>Liste des pièces jointes.</p>
    </BjTabPanel>
  </BjTab>
</template>`

const tabProps = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'tabs', description: t('prop-tabs') },
])

const panelProps = computed(() => [{ name: '(default slot)', description: t('prop-panel-slot') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tab-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-tabs" data-bj-tabs>
        <div class="bj-tabs__list" role="tablist" aria-label="Exemple">
          <button class="bj-tabs__tab" data-bj-tab role="tab" type="button">Général</button>
          <button class="bj-tabs__tab" data-bj-tab role="tab" type="button">Pièces</button>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu de l’onglet général.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Liste des pièces jointes.</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tab-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="tabProps" />
  </DocsSection>

  <DocsSection id="vue-tab-props-panel" :title="t('section-props-panel')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="panelProps" />
  </DocsSection>
</template>
