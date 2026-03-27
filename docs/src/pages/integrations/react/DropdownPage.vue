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
      desc: 'Menu déroulant React : trigger (ReactNode obligatoire), enfants rendus dans le menu. align left|right, direction down|up, size sm|md. Fermeture au clic extérieur et Escape.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-defaults': 'Valeurs par défaut : align left, direction down, size md',
      'section-align': 'align : left et right',
      'section-direction': 'direction : down et up',
      'section-size': 'size : md et sm',
      'section-trigger': 'trigger : types de ReactNode',
      'section-grid': 'Combinaisons align × direction × size',
      'section-children': 'children : éléments de menu',
      'section-preview-cross': 'Aperçu — right + up + sm',
      'prop-align': 'left (défaut) ou right — modifie bj-dropdown--right.',
      'prop-direction': 'down (défaut) ou up — modifie bj-dropdown--up.',
      'prop-size': 'md (défaut) ou sm — modifie bj-dropdown--sm.',
      'prop-trigger': 'ReactNode cliquable (bouton, lien stylé, etc.).',
      'prop-children': 'Contenu du menu (souvent des li ou boutons role="menuitem").',
      'prop-className': 'Classe sur la racine .bj-dropdown.',
    },
    en: {
      title: 'BjDropdown',
      desc: 'React dropdown: required trigger ReactNode; children render inside the menu. align left|right, direction down|up, size sm|md. Closes on outside click and Escape.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-defaults': 'Defaults: align left, direction down, size md',
      'section-align': 'align: left and right',
      'section-direction': 'direction: down and up',
      'section-size': 'size: md and sm',
      'section-trigger': 'trigger: ReactNode patterns',
      'section-grid': 'Cross combinations: align × direction × size',
      'section-children': 'children: menu items',
      'section-preview-cross': 'Preview — right, up, and sm',
      'prop-align': 'left (default) or right — toggles bj-dropdown--right.',
      'prop-direction': 'down (default) or up — toggles bj-dropdown--up.',
      'prop-size': 'md (default) or sm — toggles bj-dropdown--sm.',
      'prop-trigger': 'Clickable ReactNode (button, styled link, etc.).',
      'prop-children': 'Menu body (often li or button elements with role="menuitem").',
      'prop-className': 'Class on the .bj-dropdown root.',
    },
  },
})

const codeUsage = `import { BjDropdown } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjDropdown trigger={<button type="button" className="bj-btn">Menu</button>}>
      <li className="bj-dropdown__item" role="menuitem">Action 1</li>
      <li className="bj-dropdown__item" role="menuitem">Action 2</li>
      <li className="bj-dropdown__item" role="menuitem">Action 3</li>
    </BjDropdown>
  )
}`

const codeDefaults = `/* align="left" direction="down" size="md" — rien à passer */
<BjDropdown trigger={<button type="button" className="bj-btn">Défauts</button>}>
  <li className="bj-dropdown__item" role="menuitem">Item</li>
</BjDropdown>`

const codeAlignLeft = `<BjDropdown align="left" trigger={<button type="button" className="bj-btn">Gauche</button>}>
  <li className="bj-dropdown__item" role="menuitem">A</li>
</BjDropdown>`

const codeAlignRight = `<BjDropdown align="right" trigger={<button type="button" className="bj-btn">Droite</button>}>
  <li className="bj-dropdown__item" role="menuitem">A</li>
</BjDropdown>`

const codeDirDown = `<BjDropdown direction="down" trigger={<button type="button" className="bj-btn">Vers le bas</button>}>
  <li className="bj-dropdown__item" role="menuitem">A</li>
</BjDropdown>`

const codeDirUp = `<BjDropdown direction="up" trigger={<button type="button" className="bj-btn">Vers le haut</button>}>
  <li className="bj-dropdown__item" role="menuitem">A</li>
</BjDropdown>`

const codeSizeMd = `<BjDropdown size="md" trigger={<button type="button" className="bj-btn">Taille MD</button>}>
  <li className="bj-dropdown__item" role="menuitem">A</li>
</BjDropdown>`

const codeSizeSm = `<BjDropdown size="sm" trigger={<button type="button" className="bj-btn bj-btn--sm">Taille SM</button>}>
  <li className="bj-dropdown__item" role="menuitem">A</li>
</BjDropdown>`

const codeTrigger = `import { BjDropdown } from '@flrxnt/dsbj/react'

export function Triggers() {
  return (
    <>
      <BjDropdown trigger={<button type="button" className="bj-btn">Bouton</button>}>
        <li className="bj-dropdown__item" role="menuitem">Un</li>
      </BjDropdown>
      <BjDropdown
        trigger={
          <span className="bj-link" role="button" tabIndex={0}>
            Lien factice
          </span>
        }
      >
        <li className="bj-dropdown__item" role="menuitem">Deux</li>
      </BjDropdown>
    </>
  )
}`

const codeGrid = `import { BjDropdown } from '@flrxnt/dsbj/react'

/** Exemples de toutes les combinaisons align × direction × size (2×2×2) */
export function DropdownMatrix() {
  const align = ['left', 'right'] as const
  const direction = ['down', 'up'] as const
  const size = ['md', 'sm'] as const
  return (
    <>
      {align.map((a) =>
        direction.map((d) =>
          size.map((s) => (
            <BjDropdown
              key={\`\${a}-\${d}-\${s}\`}
              align={a}
              direction={d}
              size={s}
              trigger={
                <button type="button" className="bj-btn">
                  {a} / {d} / {s}
                </button>
              }
            >
              <li className="bj-dropdown__item" role="menuitem">Action</li>
            </BjDropdown>
          )),
        ),
      )}
    </>
  )
}`

const codeCrossHtml = `<BjDropdown align="right" direction="up" size="sm" trigger={<button type="button" className="bj-btn bj-btn--sm">Menu</button>}>
  <li className="bj-dropdown__item" role="menuitem">Action</li>
</BjDropdown>`

const codeChildren = `import { BjDropdown } from '@flrxnt/dsbj/react'

export function MenuItems() {
  return (
    <BjDropdown trigger={<button type="button" className="bj-btn">Options</button>}>
      <li className="bj-dropdown__item" role="menuitem">
        <button type="button" className="bj-dropdown__item-btn">Sous-action</button>
      </li>
      <li className="bj-dropdown__item" role="menuitem">Texte seul</li>
    </BjDropdown>
  )
}`

const propsRows = computed(() => [
  { name: 'align', description: t('prop-align') },
  { name: 'direction', description: t('prop-direction') },
  { name: 'size', description: t('prop-size') },
  { name: 'trigger', description: t('prop-trigger') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-dropdown-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-dropdown" style="position: relative;">
        <div class="bj-dropdown__trigger">
          <button type="button" class="bj-btn">Menu</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block; position: relative;">
          <li class="bj-dropdown__item" role="menuitem">Action 1</li>
          <li class="bj-dropdown__item" role="menuitem">Action 2</li>
          <li class="bj-dropdown__item" role="menuitem">Action 3</li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-dropdown-defaults" :title="t('section-defaults')">
    <DocsCode :code="codeDefaults" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-align" :title="t('section-align')">
    <DocsPreview>
      <div class="bj-dropdown bj-dropdown--right" style="position: relative; display: inline-block">
        <div class="bj-dropdown__trigger">
          <button type="button" class="bj-btn">Droite</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block; position: relative">
          <li class="bj-dropdown__item" role="menuitem">Align right</li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeAlignLeft + '\n\n' + codeAlignRight" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-direction" :title="t('section-direction')">
    <DocsPreview>
      <div class="bj-dropdown bj-dropdown--up" style="position: relative; display: inline-block">
        <div class="bj-dropdown__trigger">
          <button type="button" class="bj-btn">Vers le haut</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block; position: relative">
          <li class="bj-dropdown__item" role="menuitem">Menu au-dessus</li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDirDown + '\n\n' + codeDirUp" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-size" :title="t('section-size')">
    <DocsPreview>
      <div class="bj-dropdown bj-dropdown--sm" style="position: relative; display: inline-block">
        <div class="bj-dropdown__trigger">
          <button type="button" class="bj-btn bj-btn--sm">SM</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block; position: relative">
          <li class="bj-dropdown__item" role="menuitem">Petit menu</li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeMd + '\n\n' + codeSizeSm" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-preview-cross" :title="t('section-preview-cross')">
    <DocsPreview>
      <div
        class="bj-dropdown bj-dropdown--right bj-dropdown--up bj-dropdown--sm"
        style="position: relative; display: inline-block"
      >
        <div class="bj-dropdown__trigger">
          <button type="button" class="bj-btn bj-btn--sm">right · up · sm</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block; position: relative">
          <li class="bj-dropdown__item" role="menuitem">Combinaison</li>
        </ul>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCrossHtml" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-trigger" :title="t('section-trigger')">
    <DocsCode :code="codeTrigger" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-grid" :title="t('section-grid')">
    <DocsCode :code="codeGrid" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-children" :title="t('section-children')">
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
