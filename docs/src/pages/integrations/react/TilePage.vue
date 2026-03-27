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
      desc: 'Tuile React avec forwardRef : lien par défaut (as a) ou conteneur div ; horizontal optionnel.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-horizontal': 'horizontal',
      'section-as': 'Prop as (a ou div)',
      'section-combos': 'Combinaisons',
      'section-children': 'Children',
      'section-props': 'Props',
      'prop-horizontal': 'Alignement horizontal icône / texte.',
      'prop-as': 'a (défaut) ou div — ancre ou bloc statique.',
      'children-desc': 'Structure avec bj-tile__icon, bj-tile__title, bj-tile__desc.',
      'ex-title': 'Démarches en ligne',
      'ex-desc': 'Accédez aux formulaires et suivis administratifs.',
    },
    en: {
      title: 'BjTile',
      desc: 'React tile with forwardRef: default link (as a) or static div; optional horizontal.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-horizontal': 'horizontal',
      'section-as': 'as prop (a or div)',
      'section-combos': 'Combinations',
      'section-children': 'Children',
      'section-props': 'Props',
      'prop-horizontal': 'Horizontal icon / text layout.',
      'prop-as': 'a (default) or div — anchor or static block.',
      'children-desc': 'Structure with bj-tile__icon, bj-tile__title, bj-tile__desc.',
      'ex-title': 'Online procedures',
      'ex-desc': 'Access forms and administrative tracking.',
    },
  },
})

const codeUsage = `import { BjTile } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjTile href="#">
      <i className="ri-file-list-3-line bj-tile__icon" aria-hidden />
      <span className="bj-tile__title">Démarches en ligne</span>
      <span className="bj-tile__desc">Accédez aux formulaires et suivis administratifs.</span>
    </BjTile>
  )
}`

const codeHorizontal = `<BjTile href="#" horizontal>
  <i className="ri-file-list-3-line bj-tile__icon" aria-hidden />
  <span className="bj-tile__title">Horizontal</span>
  <span className="bj-tile__desc">Icône et texte alignés.</span>
</BjTile>`

const codeAs = `{/* Lien (défaut as="a") */}
<BjTile href="/demarches">…</BjTile>

{/* Statique */}
<BjTile as="div" role="group" aria-label="Tuiles">…</BjTile>`

const codeCombos = `<BjTile href="#" horizontal>
  <i className="ri-government-line bj-tile__icon" aria-hidden />
  <span className="bj-tile__title">horizontal + a</span>
  <span className="bj-tile__desc">Combinaison</span>
</BjTile>

<BjTile as="div" horizontal>
  <i className="ri-settings-3-line bj-tile__icon" aria-hidden />
  <span className="bj-tile__title">horizontal + div</span>
  <span className="bj-tile__desc">Statique</span>
</BjTile>`

const codeChildren = `<BjTile href="#">
  <i className="ri-star-line bj-tile__icon" aria-hidden />
  <span className="bj-tile__title">Favoris</span>
  <span className="bj-tile__desc">Accès rapide</span>
  <span className="bj-badge bj-badge--sm">3</span>
</BjTile>`

const propsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'as', description: t('prop-as') },
  { name: 'children', description: t('children-desc') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-tile-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tile-preview" :title="t('section-preview')">
    <DocsPreview>
      <a href="#" class="bj-tile">
        <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">{{ t('ex-title') }}</span>
        <span class="bj-tile__desc">{{ t('ex-desc') }}</span>
      </a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-tile-horizontal" :title="t('section-horizontal')">
    <DocsPreview>
      <a href="#" class="bj-tile bj-tile--horizontal" style="max-width: 28rem">
        <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">{{ t('ex-title') }}</span>
        <span class="bj-tile__desc">{{ t('ex-desc') }}</span>
      </a>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tile-as" :title="t('section-as')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); align-items: flex-start">
      <a href="#" class="bj-tile" style="max-width: 20rem">
        <i class="ri-links-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">as a</span>
        <span class="bj-tile__desc">Lien</span>
      </a>
      <div class="bj-tile" style="max-width: 20rem" role="group">
        <i class="ri-layout-grid-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">as div</span>
        <span class="bj-tile__desc">Statique</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeAs" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tile-combos" :title="t('section-combos')">
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
    <DocsCode :code="codeCombos" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tile-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tile-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
