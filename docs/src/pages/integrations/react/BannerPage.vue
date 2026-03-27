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
      title: 'BjBanner',
      desc:
        'Bannière hero avec taille, alignement, thème, image de fond optionnelle, titre, texte et zone d’actions. Les modificateurs de classe suivent les props.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-size': 'size (sm, md, lg)',
      'section-align': 'align (left, center, right)',
      'section-theme': 'theme (light, dark, green, yellow, red, plain)',
      'section-theme-size': 'Grille theme × size',
      'section-image': 'image (fond)',
      'section-text-only': 'title, text sans image',
      'section-actions': 'actions',
      'section-children': 'children',
      'section-combo': 'Combinaison complète',
      'section-rest': 'Attributs natifs du conteneur',
      'desc-size': 'md est la valeur par défaut (pas de modificateur de taille). sm et lg ajoutent bj-banner--sm et bj-banner--lg.',
      'desc-align': 'left est la valeur par défaut ; center et right ajoutent bj-banner--center et bj-banner--right.',
      'desc-theme':
        'dark par défaut. light, green, yellow, red et plain ajoutent bj-banner--{theme}. plain masque l’overlay image.',
      'desc-theme-size': 'Parcourir chaque thème avec une taille autre que md pour vérifier le rendu.',
      'desc-image': 'Si image est défini, un bloc .bj-banner__img reçoit background-image. Sans image, seuls overlay et corps restent.',
      'desc-text-only': 'title et text sont optionnels ; vous pouvez n’afficher que des actions ou des children.',
      'desc-actions': 'actions est rendu dans .bj-banner__actions (boutons, liens).',
      'desc-children': 'children suit title, text et actions dans .bj-banner__body.',
      'desc-combo': 'Exemple large : lg, center, light, image, titre, texte, boutons et contenu additionnel.',
      'desc-rest': 'className, id, role, data-* sur la div racine .bj-banner.',
      'prop-size': 'Hauteur visuelle : sm, md par défaut ou lg.',
      'prop-align': 'Alignement du contenu : left par défaut, center ou right.',
      'prop-theme': 'Thème couleur : light, dark par défaut, green, yellow, red ou plain.',
      'prop-image': 'URL d’image : rendue en arrière-plan sur bj-banner__img.',
      'prop-title': 'Titre principal (h1).',
      'prop-text': 'Paragraphe sous le titre.',
      'prop-actions': 'Nœuds React pour les boutons ou liens dans bj-banner__actions.',
      'prop-children': 'Contenu additionnel dans bj-banner__body après actions.',
      'prop-rest': 'Attributs natifs du div et className fusionnés sur l’élément racine.',
    },
    en: {
      title: 'BjBanner',
      desc:
        'Hero banner with size, alignment, theme, optional background image URL, title, body text, and actions slot. Class modifiers follow the props.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-size': 'size (sm, md, lg)',
      'section-align': 'align (left, center, right)',
      'section-theme': 'theme (light, dark, green, yellow, red, plain)',
      'section-theme-size': 'theme × size grid',
      'section-image': 'image (background)',
      'section-text-only': 'title and text without image',
      'section-actions': 'actions',
      'section-children': 'children',
      'section-combo': 'Full combination',
      'section-rest': 'Native container attributes',
      'desc-size': 'md is the default (no extra size modifier). sm and lg add bj-banner--sm and bj-banner--lg.',
      'desc-align': 'left is default; center and right add bj-banner--center and bj-banner--right.',
      'desc-theme':
        'dark is default. light, green, yellow, red, and plain add bj-banner--{theme}. plain hides the image overlay.',
      'desc-theme-size': 'Walk each theme with a non-md size to verify layout.',
      'desc-image': 'When image is set, .bj-banner__img gets background-image. Without it, overlay and body still render.',
      'desc-text-only': 'title and text are optional; you can show only actions or children.',
      'desc-actions': 'actions render inside .bj-banner__actions (buttons, links).',
      'desc-children': 'children follow title, text, and actions inside .bj-banner__body.',
      'desc-combo': 'Large example: lg, center, light, image, title, copy, buttons, and extra content.',
      'desc-rest': 'className, id, role, data-* on the root .bj-banner div.',
      'prop-size': 'Visual height: sm, md (default), or lg.',
      'prop-align': 'Content alignment: left (default), center, or right.',
      'prop-theme': 'Color theme: light, dark (default), green, yellow, red, or plain.',
      'prop-image': 'Image URL rendered as background on bj-banner__img.',
      'prop-title': 'Main title (h1).',
      'prop-text': 'Paragraph below the title.',
      'prop-actions': 'React nodes for buttons or links in bj-banner__actions.',
      'prop-children': 'Extra content in bj-banner__body after actions.',
      'prop-rest': 'Native div attributes and className merged on the root element.',
    },
  },
})

const codeUsage = `import { BjBanner } from '@flrxnt/dsbj/react'
import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjBanner
      size="lg"
      theme="dark"
      align="center"
      image="https://picsum.photos/1200/500"
      title="Bienvenue sur le portail"
      text="Accédez aux services publics numériques."
      actions={
        <>
          <BjButton>Démarrer</BjButton>
          <BjButton variant="secondary">En savoir plus</BjButton>
        </>
      }
    />
  )
}`

const codeSize = `import { BjBanner } from '@flrxnt/dsbj/react'

export function Sizes() {
  return (
    <>
      <BjBanner size="sm" title="Petite bannière" text="size=&quot;sm&quot;" />
      <BjBanner size="md" title="Moyenne (défaut)" text="size omis ou md" />
      <BjBanner size="lg" title="Grande bannière" text="size=&quot;lg&quot;" />
    </>
  )
}`

const codeAlign = `import { BjBanner } from '@flrxnt/dsbj/react'

export function Alignments() {
  return (
    <>
      <BjBanner align="left" title="Gauche" text="align par défaut" />
      <BjBanner align="center" title="Centre" text="align=&quot;center&quot;" />
      <BjBanner align="right" title="Droite" text="align=&quot;right&quot;" />
    </>
  )
}`

const codeTheme = `import { BjBanner } from '@flrxnt/dsbj/react'

export function Themes() {
  return (
    <>
      <BjBanner theme="light" title="Light" />
      <BjBanner theme="dark" title="Dark (défaut)" />
      <BjBanner theme="green" title="Green" />
      <BjBanner theme="yellow" title="Yellow" />
      <BjBanner theme="red" title="Red" />
      <BjBanner theme="plain" title="Plain" text="Sans overlay sur image" />
    </>
  )
}`

const codeThemeSize = `import { BjBanner } from '@flrxnt/dsbj/react'

const themes = ['light', 'dark', 'green', 'yellow', 'red', 'plain'] as const
const sizes = ['sm', 'lg'] as const

export function ThemeSizeGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {themes.map((theme) => (
        <div key={theme} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {sizes.map((size) => (
            <BjBanner key={\`\${theme}-\${size}\`} theme={theme} size={size} title={\`\${theme} / \${size}\`} />
          ))}
        </div>
      ))}
    </div>
  )
}`

const codeImage = `import { BjBanner } from '@flrxnt/dsbj/react'

export function WithBackground() {
  return (
    <BjBanner
      image="https://picsum.photos/1400/600"
      theme="dark"
      title="Titre sur photo"
      text="L’image remplit .bj-banner__img en fond."
    />
  )
}`

const codeTextOnly = `import { BjBanner } from '@flrxnt/dsbj/react'

export function TextOnly() {
  return (
    <BjBanner
      theme="light"
      title="Sans image"
      text="Overlay et corps uniquement."
    />
  )
}`

const codeActions = `import { BjBanner } from '@flrxnt/dsbj/react'
import { BjButton } from '@flrxnt/dsbj/react'

export function ActionsOnly() {
  return (
    <BjBanner
      theme="plain"
      actions={
        <>
          <BjButton variant="accent">Principal</BjButton>
          <a className="bj-link" href="/doc">Documentation</a>
        </>
      }
    />
  )
}`

const codeChildren = `import { BjBanner } from '@flrxnt/dsbj/react'

export function WithChildren() {
  return (
    <BjBanner title="Titre" text="Sous-titre">
      <p className="bj-text-sm">Bloc additionnel sous les actions (badges, métadonnées).</p>
    </BjBanner>
  )
}`

const codeCombo = `import { BjBanner } from '@flrxnt/dsbj/react'
import { BjButton } from '@flrxnt/dsbj/react'

export function FullBanner() {
  return (
    <BjBanner
      size="lg"
      align="center"
      theme="light"
      image="https://picsum.photos/1200/480"
      title="Portail citoyen"
      text="Une entrée unique pour vos démarches."
      actions={
        <>
          <BjButton>Créer un compte</BjButton>
          <BjButton variant="secondary">Se connecter</BjButton>
        </>
      }
    >
      <ul className="bj-text-sm" style={{ marginTop: '1rem' }}>
        <li>Service 24h/24</li>
        <li>Données hébergées au Bénin</li>
      </ul>
    </BjBanner>
  )
}`

const codeRest = `import { BjBanner } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjBanner
      id="hero"
      role="region"
      aria-label="Mise en avant"
      data-analytics="home-hero"
      title="Accueil"
    />
  )
}`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'align', description: t('prop-align') },
  { name: 'theme', description: t('prop-theme') },
  { name: 'image', description: t('prop-image') },
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: 'actions', description: t('prop-actions') },
  { name: 'children', description: t('prop-children') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-banner-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-preview" :title="t('section-preview')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-banner bj-banner--lg bj-banner--center bj-banner--dark">
        <div
          class="bj-banner__img"
          style="background-image: url(https://picsum.photos/1200/500)"
          role="img"
          aria-hidden="true"
        ></div>
        <div class="bj-banner__overlay"></div>
        <div class="bj-banner__body">
          <h1 class="bj-banner__title">Bienvenue sur le portail</h1>
          <p class="bj-banner__text">Accédez aux services publics numériques.</p>
          <div class="bj-banner__actions">
            <button type="button" class="bj-btn">Démarrer</button>
            <button type="button" class="bj-btn bj-btn--secondary">En savoir plus</button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-banner-size" :title="t('section-size')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-size') }}</p>
    <DocsCode :code="codeSize" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-align" :title="t('section-align')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-align') }}</p>
    <DocsCode :code="codeAlign" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-theme" :title="t('section-theme')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-theme') }}</p>
    <DocsCode :code="codeTheme" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-theme-size" :title="t('section-theme-size')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-theme-size') }}</p>
    <DocsCode :code="codeThemeSize" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-image" :title="t('section-image')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-image') }}</p>
    <DocsCode :code="codeImage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-text-only" :title="t('section-text-only')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-text-only') }}</p>
    <DocsCode :code="codeTextOnly" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-actions" :title="t('section-actions')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-actions') }}</p>
    <DocsCode :code="codeActions" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-combo" :title="t('section-combo')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combo') }}</p>
    <DocsCode :code="codeCombo" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-banner-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
