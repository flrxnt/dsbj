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
      title: 'BjLink',
      desc: 'Composant React pour le lien DSBJ. forwardRef sur une ancre avec classes bj-link et props typées.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'preview-default': 'Consulter la démarche',
      'preview-small': 'Petit lien',
      'preview-icon-left': 'Retour',
      'preview-external': 'Site externe',
      'preview-reset': 'Lien discret (reset)',
      'prop-size': 'Taille du texte : sm, md (défaut) ou lg.',
      'prop-iconPosition': 'Icône dans le contenu : none (défaut), left ou right.',
      'prop-reset': 'Applique bj-link--reset : couleur héritée, soulignement au survol.',
      'section-sizes': 'Tailles',
      'section-icons': 'Icônes',
      'section-icon-size-grid': 'Icônes × tailles',
      'section-reset': 'Reset',
      'section-external': 'Lien externe',
      'section-callbacks': 'Callbacks',
      'desc-sizes': 'Prop size : sm, md (défaut) et lg.',
      'desc-icons': 'iconPosition left ou right avec une icône Remix en enfant.',
      'desc-icon-size-grid': 'Combinaisons left/right × sm/md/lg.',
      'desc-reset': 'reset : classe bj-link--reset pour un lien discret.',
      'desc-external': 'Attributs target="_blank" et rel recommandés pour les liens externes.',
      'desc-callbacks': 'onClick et autres gestionnaires sont transmis sur l’élément <a>.',
      'link-sample-md': 'Lien md',
      'link-sample-sm': 'Lien sm',
      'link-sample-lg': 'Lien lg',
      'link-back': 'Retour',
      'link-next': 'Suite',
    },
    en: {
      title: 'BjLink',
      desc: 'React component for the DSBJ link. forwardRef on an anchor with bj-link classes and typed props.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'preview-default': 'View the procedure',
      'preview-small': 'Small link',
      'preview-icon-left': 'Back',
      'preview-external': 'External site',
      'preview-reset': 'Subtle link (reset)',
      'prop-size': 'Text size: sm, md (default), or lg.',
      'prop-iconPosition': 'Icon layout: none (default), left, or right.',
      'prop-reset': 'Applies bj-link--reset: inherited color, underline on hover.',
      'section-sizes': 'Sizes',
      'section-icons': 'Icons',
      'section-icon-size-grid': 'Icons × sizes',
      'section-reset': 'Reset',
      'section-external': 'External link',
      'section-callbacks': 'Callbacks',
      'desc-sizes': 'size prop: sm, md (default), and lg.',
      'desc-icons': 'iconPosition left or right with a Remix icon child.',
      'desc-icon-size-grid': 'left/right × sm/md/lg combinations.',
      'desc-reset': 'reset: bj-link--reset for a subtle link.',
      'desc-external': 'Use target="_blank" and rel on external links.',
      'desc-callbacks': 'onClick and other handlers are passed to the <a> element.',
      'link-sample-md': 'Md link',
      'link-sample-sm': 'Sm link',
      'link-sample-lg': 'Lg link',
      'link-back': 'Back',
      'link-next': 'Next',
    },
  },
})

const codeUsage = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjLink href="#">Consulter la démarche</BjLink>
      <BjLink href="#" size="sm">
        Petit lien
      </BjLink>
      <BjLink href="#" iconPosition="left">
        <i className="ri-arrow-left-line" aria-hidden />
        Retour
      </BjLink>
    </>
  )
}`

const codeSizes = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjLink href="#" size="sm">
        Small link
      </BjLink>
      <BjLink href="#" size="md">
        Medium link
      </BjLink>
      <BjLink href="#" size="lg">
        Large link
      </BjLink>
    </>
  )
}`

const codeIcons = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjLink href="#" iconPosition="left">
        <i className="ri-arrow-left-line" aria-hidden />
        Back
      </BjLink>
      <BjLink href="#" iconPosition="right">
        Next
        <i className="ri-arrow-right-line" aria-hidden />
      </BjLink>
    </>
  )
}`

const codeIconSizeGrid = `import { BjLink } from '@flrxnt/dsbj/react'

const iconPositions = ['left', 'right'] as const
const sizes = ['sm', 'md', 'lg'] as const

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {iconPositions.map((iconPosition) => (
        <div key={iconPosition} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {sizes.map((size) => (
            <BjLink key={size} href="#" iconPosition={iconPosition} size={size}>
              {iconPosition === 'left' ? (
                <>
                  <i className="ri-arrow-left-line" aria-hidden />
                  {iconPosition}-{size}
                </>
              ) : (
                <>
                  {iconPosition}-{size}
                  <i className="ri-arrow-right-line" aria-hidden />
                </>
              )}
            </BjLink>
          ))}
        </div>
      ))}
    </div>
  )
}`

const codeReset = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjLink href="#" reset>
      Subtle reset link
    </BjLink>
  )
}`

const codeExternal = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjLink href="https://example.com" target="_blank" rel="noopener noreferrer">
      External site
    </BjLink>
  )
}`

const codeCallbacks = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjLink
      href="#"
      onClick={(e) => {
        e.preventDefault()
        console.log('navigate')
      }}
    >
      In-app navigation
    </BjLink>
  )
}`

const reactLinkIconRows = [
  { pos: 'left' as const, cls: 'bj-link--icon-left', icon: 'ri-arrow-left-line', labelKey: 'link-back' as const },
  { pos: 'right' as const, cls: 'bj-link--icon-right', icon: 'ri-arrow-right-line', labelKey: 'link-next' as const },
]

const reactLinkSizesForPreview = [
  { key: 'sm', cls: 'bj-link--sm', labelKey: 'link-sample-sm' as const },
  { key: 'md', cls: '', labelKey: 'link-sample-md' as const },
  { key: 'lg', cls: 'bj-link--lg', labelKey: 'link-sample-lg' as const },
]

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'iconPosition', description: t('prop-iconPosition') },
  { name: 'reset', description: t('prop-reset') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-link-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link" @click.prevent>{{ t('preview-default') }}</a>
      <a href="#" class="bj-link bj-link--sm" @click.prevent>{{ t('preview-small') }}</a>
      <a href="#" class="bj-link bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('preview-icon-left') }}
      </a>
      <a
        href="#"
        class="bj-link"
        target="_blank"
        rel="noopener noreferrer"
        @click.prevent
      >{{ t('preview-external') }}</a>
      <a href="#" class="bj-link bj-link--reset" @click.prevent>{{ t('preview-reset') }}</a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-link-sizes" :title="t('section-sizes')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-sizes') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link bj-link--sm" @click.prevent>{{ t('link-sample-sm') }}</a>
      <a href="#" class="bj-link" @click.prevent>{{ t('link-sample-md') }}</a>
      <a href="#" class="bj-link bj-link--lg" @click.prevent>{{ t('link-sample-lg') }}</a>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-icons" :title="t('section-icons')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-icons') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('link-back') }}
      </a>
      <a href="#" class="bj-link bj-link--icon-right" @click.prevent>
        {{ t('link-next') }}
        <i class="ri-arrow-right-line" aria-hidden="true" />
      </a>
    </DocsPreview>
    <DocsCode :code="codeIcons" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-icon-sizes" :title="t('section-icon-size-grid')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-icon-size-grid') }}
    </p>
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div
        v-for="row in reactLinkIconRows"
        :key="row.pos"
        style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;"
      >
        <template v-for="s in reactLinkSizesForPreview" :key="row.pos + s.key">
          <a
            href="#"
            class="bj-link"
            :class="[row.cls, s.cls].filter(Boolean).join(' ')"
            @click.prevent
          >
            <template v-if="row.pos === 'left'">
              <i :class="row.icon" aria-hidden="true" />
              {{ t(row.labelKey) }}-{{ s.key }}
            </template>
            <template v-else>
              {{ t(row.labelKey) }}-{{ s.key }}
              <i :class="row.icon" aria-hidden="true" />
            </template>
          </a>
        </template>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIconSizeGrid" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-reset" :title="t('section-reset')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-reset') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link bj-link--reset" @click.prevent>{{ t('preview-reset') }}</a>
    </DocsPreview>
    <DocsCode :code="codeReset" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-external" :title="t('section-external')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-external') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a
        href="#"
        class="bj-link"
        target="_blank"
        rel="noopener noreferrer"
        @click.prevent
      >{{ t('preview-external') }}</a>
    </DocsPreview>
    <DocsCode :code="codeExternal" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-callbacks" :title="t('section-callbacks')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-callbacks') }}
    </p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
