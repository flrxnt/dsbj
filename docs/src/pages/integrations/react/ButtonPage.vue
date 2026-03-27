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
      title: 'BjButton',
      desc: 'Composant React pour le bouton DSBJ. Utilise forwardRef et des props typées.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-variant-size-grid': 'Variantes × tailles',
      'section-icon-button': 'Bouton icône',
      'section-full-width': 'Pleine largeur',
      'section-disabled': 'Désactivé',
      'section-link-button': 'Lien bouton',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Callbacks',
      'grid-col-sm': 'sm',
      'grid-col-md': 'md',
      'grid-col-lg': 'lg',
      'desc-variants': 'Chaque valeur de variant (primary est la base sans modificateur CSS).',
      'desc-sizes': 'sm, md (défaut) et lg via la prop size.',
      'desc-variant-size-grid': 'Toutes les paires variant × size.',
      'desc-icon-button': 'Prop icon : bouton carré bj-btn--icon pour chaque variante et taille.',
      'desc-full-width': 'Prop full : classe bj-btn--full pour chaque variante.',
      'desc-disabled': 'Attribut disabled natif sur chaque variante.',
      'desc-link-button': 'as="a" avec href : rend une ancre avec les styles bouton.',
      'desc-combinations': 'Exemple combinant accent, lg, icon, loading et aria-label.',
      'desc-callbacks': 'Les gestionnaires natifs du bouton ou du lien (ex. onClick) sont transmis via les props HTML.',
      'prop-variant': 'Variante visuelle : primary, secondary, tertiary, accent ou contrast.',
      'prop-size': 'Taille : sm, md (défaut) ou lg.',
      'prop-icon': 'Mode bouton carré pour une icône seule (bj-btn--icon).',
      'prop-full': 'Largeur 100 % du conteneur (bj-btn--full).',
      'prop-as': 'Élément rendu : button (défaut) ou a pour un lien stylé comme bouton.',
      'prop-loading': 'Affiche un spinner et désactive le bouton.',
      'section-loading': 'Chargement',
      'label-primary': 'Primary',
      'label-secondary': 'Secondary',
      'label-tertiary': 'Tertiary',
      'label-accent': 'Accent',
      'label-contrast': 'Contrast',
      'btn-open-page': 'Ouvrir',
      'link-external-preview': 'Externe',
    },
    en: {
      title: 'BjButton',
      desc: 'React component for the DSBJ button. Uses forwardRef and typed props.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-variant-size-grid': 'Variants × sizes',
      'section-icon-button': 'Icon button',
      'section-full-width': 'Full width',
      'section-disabled': 'Disabled',
      'section-link-button': 'Link as button',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Callbacks',
      'grid-col-sm': 'sm',
      'grid-col-md': 'md',
      'grid-col-lg': 'lg',
      'desc-variants': 'Each variant value (primary is the base without an extra CSS modifier).',
      'desc-sizes': 'sm, md (default), and lg via the size prop.',
      'desc-variant-size-grid': 'Every variant × size pair.',
      'desc-icon-button': 'icon prop: square bj-btn--icon for each variant and size.',
      'desc-full-width': 'full prop: bj-btn--full for each variant.',
      'desc-disabled': 'Native disabled attribute on each variant.',
      'desc-link-button': 'as="a" with href: renders an anchor with button styles.',
      'desc-combinations': 'Example combining accent, lg, icon, loading, and aria-label.',
      'desc-callbacks': 'Native button or anchor handlers (e.g. onClick) are passed through HTML props.',
      'section-loading': 'Loading',
      'prop-variant': 'Visual variant: primary, secondary, tertiary, accent, or contrast.',
      'prop-size': 'Size: sm, md (default), or lg.',
      'prop-icon': 'Square icon-only button (bj-btn--icon).',
      'prop-full': 'Full width of the container (bj-btn--full).',
      'prop-as': 'Rendered element: button (default) or a for a link styled as a button.',
      'prop-loading': 'Shows a spinner and disables the button.',
      'label-primary': 'Primary',
      'label-secondary': 'Secondary',
      'label-tertiary': 'Tertiary',
      'label-accent': 'Accent',
      'label-contrast': 'Contrast',
      'btn-open-page': 'Open',
      'link-external-preview': 'External',
    },
  },
})

const codeUsage = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton>Valider</BjButton>
      <BjButton variant="secondary">Annuler</BjButton>
    </>
  )
}`

const codeLoading = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton loading>Envoi en cours</BjButton>
      <BjButton variant="secondary" loading>Chargement</BjButton>
      <BjButton variant="tertiary" loading>Patientez</BjButton>
      <BjButton variant="accent" loading>Accent</BjButton>
      <BjButton variant="contrast" loading>Contraste</BjButton>
      <BjButton size="sm" loading>Petit</BjButton>
      <BjButton size="lg" loading>Grand</BjButton>
    </>
  )
}`

const codeVariants = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton variant="primary">Primary</BjButton>
      <BjButton variant="secondary">Secondary</BjButton>
      <BjButton variant="tertiary">Tertiary</BjButton>
      <BjButton variant="accent">Accent</BjButton>
      <BjButton variant="contrast">Contrast</BjButton>
    </>
  )
}`

const codeSizes = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton size="sm">Small</BjButton>
      <BjButton size="md">Medium</BjButton>
      <BjButton size="lg">Large</BjButton>
    </>
  )
}`

const codeVariantSizeGrid = `import { BjButton } from '@flrxnt/dsbj/react'

const variants = ['primary', 'secondary', 'tertiary', 'accent', 'contrast'] as const
const sizes = ['sm', 'md', 'lg'] as const

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {sizes.map((size) => (
            <BjButton key={size} variant={variant} size={size}>
              {variant} {size}
            </BjButton>
          ))}
        </div>
      ))}
    </div>
  )
}`

const codeIconButtons = `import { BjButton } from '@flrxnt/dsbj/react'

const variants = ['primary', 'secondary', 'tertiary', 'accent', 'contrast'] as const
const sizes = ['sm', 'md', 'lg'] as const

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {sizes.map((size) => (
            <BjButton
              key={size}
              variant={variant}
              size={size}
              icon
              aria-label={\`Add \${variant} \${size}\`}
            >
              <i className="ri-add-line" aria-hidden />
            </BjButton>
          ))}
        </div>
      ))}
    </div>
  )
}`

const codeFullWidth = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <div style={{ maxWidth: 280 }}>
      <BjButton full variant="primary" style={{ marginBottom: 8 }}>
        Primary full
      </BjButton>
      <BjButton full variant="secondary" style={{ marginBottom: 8 }}>
        Secondary full
      </BjButton>
      <BjButton full variant="tertiary" style={{ marginBottom: 8 }}>
        Tertiary full
      </BjButton>
      <BjButton full variant="accent" style={{ marginBottom: 8 }}>
        Accent full
      </BjButton>
      <BjButton full variant="contrast">Contrast full</BjButton>
    </div>
  )
}`

const codeDisabled = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton disabled variant="primary">
        Primary
      </BjButton>
      <BjButton disabled variant="secondary">
        Secondary
      </BjButton>
      <BjButton disabled variant="tertiary">
        Tertiary
      </BjButton>
      <BjButton disabled variant="accent">
        Accent
      </BjButton>
      <BjButton disabled variant="contrast">
        Contrast
      </BjButton>
    </>
  )
}`

const codeLinkButton = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton as="a" href="/dashboard" variant="primary">
        Dashboard
      </BjButton>
      <BjButton as="a" href="https://example.com" variant="secondary" target="_blank" rel="noopener noreferrer">
        External
      </BjButton>
    </>
  )
}`

const codeCombinations = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjButton variant="accent" size="lg" icon loading aria-label="Ajouter">
      <i className="ri-add-line" aria-hidden />
    </BjButton>
  )
}`

const codeCallbacks = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjButton
      type="button"
      onClick={() => {
        console.log('clicked')
      }}
    >
      Submit
    </BjButton>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'full', description: t('prop-full') },
  { name: 'loading', description: t('prop-loading') },
  { name: 'as', description: t('prop-as') },
])

const reactBtnVariantsForPreview = [
  { cls: '', labelKey: 'label-primary' as const },
  { cls: 'bj-btn--secondary', labelKey: 'label-secondary' as const },
  { cls: 'bj-btn--tertiary', labelKey: 'label-tertiary' as const },
  { cls: 'bj-btn--accent', labelKey: 'label-accent' as const },
  { cls: 'bj-btn--contrast', labelKey: 'label-contrast' as const },
]

const reactBtnSizesForPreview = [
  { key: 'sm', cls: 'bj-btn--sm' },
  { key: 'md', cls: '' },
  { key: 'lg', cls: 'bj-btn--lg' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-btn-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn">Valider</button>
      <button type="button" class="bj-btn bj-btn--secondary">Annuler</button>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-btn-variants" :title="t('section-variants')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-variants') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn">{{ t('label-primary') }}</button>
      <button type="button" class="bj-btn bj-btn--secondary">{{ t('label-secondary') }}</button>
      <button type="button" class="bj-btn bj-btn--tertiary">{{ t('label-tertiary') }}</button>
      <button type="button" class="bj-btn bj-btn--accent">{{ t('label-accent') }}</button>
      <button type="button" class="bj-btn bj-btn--contrast">{{ t('label-contrast') }}</button>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-sizes" :title="t('section-sizes')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-sizes') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn bj-btn--sm">Small</button>
      <button type="button" class="bj-btn">Medium</button>
      <button type="button" class="bj-btn bj-btn--lg">Large</button>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-variant-size-grid" :title="t('section-variant-size-grid')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-variant-size-grid') }}
    </p>
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div
        style="
          display: grid;
          grid-template-columns: minmax(5.5rem, auto) repeat(3, minmax(0, 1fr));
          gap: var(--bj-spacing-2v);
          align-items: center;
        "
      >
        <span />
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">{{ t('grid-col-sm') }}</span>
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">{{ t('grid-col-md') }}</span>
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">{{ t('grid-col-lg') }}</span>
        <template v-for="v in reactBtnVariantsForPreview" :key="v.labelKey">
          <span class="bj-text-sm">{{ t(v.labelKey) }}</span>
          <template v-for="s in reactBtnSizesForPreview" :key="v.labelKey + s.key">
            <button
              type="button"
              class="bj-btn"
              :class="[v.cls, s.cls].filter(Boolean).join(' ')"
            >
              {{ t(v.labelKey) }}-{{ s.key }}
            </button>
          </template>
        </template>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantSizeGrid" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-icon" :title="t('section-icon-button')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-icon-button') }}
    </p>
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div
        style="
          display: grid;
          grid-template-columns: minmax(5.5rem, auto) repeat(3, minmax(0, 1fr));
          gap: var(--bj-spacing-2v);
          align-items: center;
        "
      >
        <span />
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">{{ t('grid-col-sm') }}</span>
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">{{ t('grid-col-md') }}</span>
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">{{ t('grid-col-lg') }}</span>
        <template v-for="v in reactBtnVariantsForPreview" :key="'i-' + v.labelKey">
          <span class="bj-text-sm">{{ t(v.labelKey) }}</span>
          <template v-for="s in reactBtnSizesForPreview" :key="'i-' + v.labelKey + s.key">
            <button
              type="button"
              class="bj-btn bj-btn--icon"
              :class="[v.cls, s.cls].filter(Boolean).join(' ')"
              aria-label="Add"
            >
              <i class="ri-add-line" aria-hidden="true" />
            </button>
          </template>
        </template>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIconButtons" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-full" :title="t('section-full-width')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-full-width') }}
    </p>
    <DocsPreview style="max-width: 280px; display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
      <button type="button" class="bj-btn bj-btn--full">{{ t('label-primary') }}</button>
      <button type="button" class="bj-btn bj-btn--secondary bj-btn--full">{{ t('label-secondary') }}</button>
      <button type="button" class="bj-btn bj-btn--tertiary bj-btn--full">{{ t('label-tertiary') }}</button>
      <button type="button" class="bj-btn bj-btn--accent bj-btn--full">{{ t('label-accent') }}</button>
      <button type="button" class="bj-btn bj-btn--contrast bj-btn--full">{{ t('label-contrast') }}</button>
    </DocsPreview>
    <DocsCode :code="codeFullWidth" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-disabled" :title="t('section-disabled')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-disabled') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn" disabled>{{ t('label-primary') }}</button>
      <button type="button" class="bj-btn bj-btn--secondary" disabled>{{ t('label-secondary') }}</button>
      <button type="button" class="bj-btn bj-btn--tertiary" disabled>{{ t('label-tertiary') }}</button>
      <button type="button" class="bj-btn bj-btn--accent" disabled>{{ t('label-accent') }}</button>
      <button type="button" class="bj-btn bj-btn--contrast" disabled>{{ t('label-contrast') }}</button>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-as-link" :title="t('section-link-button')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-link-button') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-btn" @click.prevent>{{ t('btn-open-page') }}</a>
      <a href="#" class="bj-btn bj-btn--secondary" @click.prevent>{{ t('link-external-preview') }}</a>
    </DocsPreview>
    <DocsCode :code="codeLinkButton" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-combos" :title="t('section-combinations')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-combinations') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button
        type="button"
        class="bj-btn bj-btn--accent bj-btn--lg bj-btn--icon bj-btn--loading"
        aria-busy="true"
        aria-label="Ajouter"
      >
        <i class="ri-add-line" aria-hidden="true" />
      </button>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-loading" :title="t('section-loading')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn bj-btn--loading" aria-busy="true">Envoi en cours</button>
      <button type="button" class="bj-btn bj-btn--secondary bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--tertiary bj-btn--loading" aria-busy="true">Patientez</button>
      <button type="button" class="bj-btn bj-btn--accent bj-btn--loading" aria-busy="true">Accent</button>
      <button type="button" class="bj-btn bj-btn--contrast bj-btn--loading" aria-busy="true">Contraste</button>
      <button type="button" class="bj-btn bj-btn--sm bj-btn--loading" aria-busy="true">Petit</button>
      <button type="button" class="bj-btn bj-btn--lg bj-btn--loading" aria-busy="true">Grand</button>
    </DocsPreview>
    <DocsCode :code="codeLoading" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-callbacks" :title="t('section-callbacks')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-callbacks') }}
    </p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
