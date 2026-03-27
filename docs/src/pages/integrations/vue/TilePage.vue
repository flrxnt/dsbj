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
      title: 'BjTile',
      desc: 'Tuile cliquable (tag a par défaut) ou statique (tag div) ; disposition horizontale optionnelle. Contenu avec classes bj-tile__icon, bj-tile__title, bj-tile__desc.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-horizontal': 'horizontal',
      'section-tag': 'Balise tag (a ou div)',
      'section-combos': 'Combinaisons',
      'section-slot': 'Slot par défaut',
      'section-props': 'Props',
      'prop-horizontal': 'Si vrai, icône et textes sur une ligne.',
      'prop-tag': 'a (défaut) pour lien ; div pour bloc non navigable.',
      'slot-desc': 'Structure libre : en général icône Remix, titre et description.',
      'ex-title': 'Démarches en ligne',
      'ex-desc': 'Accédez aux formulaires et suivis administratifs.',
      'code-title': 'Démarches en ligne',
      'code-desc': 'Accédez aux formulaires et suivis administratifs.',
    },
    en: {
      title: 'BjTile',
      desc: 'Clickable tile (tag a by default) or static (tag div); optional horizontal layout. Inner markup uses bj-tile__icon, bj-tile__title, bj-tile__desc.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-horizontal': 'horizontal',
      'section-tag': 'tag (a or div)',
      'section-combos': 'Combinations',
      'section-slot': 'Default slot',
      'section-props': 'Props',
      'prop-horizontal': 'If true, icon and text sit in one row.',
      'prop-tag': 'a (default) for links; div for a non-navigable block.',
      'slot-desc': 'Free structure: typically Remix icon, title, and description.',
      'ex-title': 'Online procedures',
      'ex-desc': 'Access forms and administrative tracking.',
      'code-title': 'Online procedures',
      'code-desc': 'Access forms and administrative tracking.',
    },
  },
})

const codeUsage = computed(() => {
  const title = t('code-title').replace(/"/g, '&quot;')
  const desc = t('code-desc').replace(/"/g, '&quot;')
  return `<script setup>
import { BjTile } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjTile href="#" tag="a">
    <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
    <span class="bj-tile__title">${title}</span>
    <span class="bj-tile__desc">${desc}</span>
  </BjTile>
</template>`
})

const codeHorizontal = `<BjTile href="#" horizontal tag="a">
  <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
  <span class="bj-tile__title">Horizontal</span>
  <span class="bj-tile__desc">Icône et texte alignés.</span>
</BjTile>`

const codeTag = `<!-- Lien (défaut tag="a") -->
<BjTile href="/demarches" tag="a">…</BjTile>

<!-- Conteneur statique -->
<BjTile tag="div" role="group" aria-label="Tuiles">…</BjTile>`

const codeCombos = `<BjTile href="#" horizontal tag="a">
  <i class="ri-government-line bj-tile__icon" aria-hidden="true" />
  <span class="bj-tile__title">horizontal + lien</span>
  <span class="bj-tile__desc">Combinaison fréquente.</span>
</BjTile>

<BjTile tag="div" horizontal>
  <i class="ri-settings-3-line bj-tile__icon" aria-hidden="true" />
  <span class="bj-tile__title">horizontal + div</span>
  <span class="bj-tile__desc">Bloc non cliquable.</span>
</BjTile>`

const codeSlot = `<BjTile href="#" tag="a">
  <i class="ri-star-line bj-tile__icon" aria-hidden="true" />
  <span class="bj-tile__title">Favoris</span>
  <span class="bj-tile__desc">Accès rapide</span>
  <span class="bj-badge bj-badge--sm">3</span>
</BjTile>`

const propsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tile-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tile-preview" :title="t('section-preview')">
    <DocsPreview>
      <a href="#" class="bj-tile">
        <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">{{ t('ex-title') }}</span>
        <span class="bj-tile__desc">{{ t('ex-desc') }}</span>
      </a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tile-horizontal" :title="t('section-horizontal')">
    <DocsPreview>
      <a href="#" class="bj-tile bj-tile--horizontal" style="max-width: 28rem">
        <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">{{ t('ex-title') }}</span>
        <span class="bj-tile__desc">{{ t('ex-desc') }}</span>
      </a>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tile-tag" :title="t('section-tag')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); align-items: flex-start">
      <a href="#" class="bj-tile" style="max-width: 20rem">
        <i class="ri-links-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">tag a</span>
        <span class="bj-tile__desc">Lien cliquable</span>
      </a>
      <div class="bj-tile" style="max-width: 20rem" role="group">
        <i class="ri-layout-grid-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">tag div</span>
        <span class="bj-tile__desc">Bloc statique</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTag" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tile-combos" :title="t('section-combos')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <a href="#" class="bj-tile bj-tile--horizontal" style="max-width: 28rem">
        <i class="ri-government-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">horizontal + a</span>
        <span class="bj-tile__desc">Combinaison</span>
      </a>
      <div class="bj-tile bj-tile--horizontal" style="max-width: 28rem">
        <i class="ri-settings-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">horizontal + div</span>
        <span class="bj-tile__desc">Statique</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tile-slot" :title="t('section-slot')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('slot-desc') }}</p>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tile-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
