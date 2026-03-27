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
      title: 'BjLogo',
      desc: 'Bloc logo institutionnel React : taille, lien, image, devise, tagline et contenu enfant.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-size': 'size (md, lg, xl)',
      'section-href': 'href (lien)',
      'section-src-alt': 'src et alt',
      'section-children': 'children à la place de l’image',
      'section-motto-tagline': 'motto et tagline',
      'section-full': 'Combinaison complète',
      'section-rest': 'Attributs natifs du conteneur',
      'desc-size': 'md est la valeur par défaut ; lg et xl ajoutent bj-logo--lg et bj-logo--xl.',
      'desc-href': 'Avec href, le sigle est enveloppé dans a.bj-logo__link ; sans href, image ou children seuls.',
      'desc-src-alt': 'Si src est défini, un img.bj-logo__img est rendu ; alt vaut « Logo » par défaut.',
      'desc-children': 'Sans src, children devient le contenu du bloc visuel (texte, SVG, etc.).',
      'desc-motto-tagline': 'motto utilise .bj-logo__motto, tagline utilise .bj-logo__tagline sous le sigle.',
      'desc-full': 'Lien + image + devise + baseline institutionnelle.',
      'desc-rest': 'className, id, data-* sur la div racine .bj-logo.',
      'prop-size': 'md (défaut), lg ou xl.',
      'prop-href': 'Si défini, enveloppe le sigle dans un lien.',
      'prop-motto': 'Courte devise sous le bloc.',
      'prop-tagline': 'Sous-ligne descriptive.',
      'prop-src': 'URL de l\'image du sigle.',
      'prop-alt': 'Texte alternatif de l\'image (défaut : « Logo »).',
      'prop-children': 'Contenu à la place de l\'image si src est absent.',
      'prop-rest': 'Attributs natifs du div et className fusionnés sur l’élément racine.',
      'logo-motto': 'Fraternité — Justice — Travail',
      'logo-tagline': 'Portail des démarches',
    },
    en: {
      title: 'BjLogo',
      desc: 'React institutional logo block: size, link, image, motto, tagline, and children content.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-size': 'size (md, lg, xl)',
      'section-href': 'href (link)',
      'section-src-alt': 'src and alt',
      'section-children': 'children instead of image',
      'section-motto-tagline': 'motto and tagline',
      'section-full': 'Full combination',
      'section-rest': 'Native container attributes',
      'desc-size': 'md is default; lg and xl add bj-logo--lg and bj-logo--xl.',
      'desc-href': 'With href, the mark is wrapped in a.bj-logo__link; without href, image or children only.',
      'desc-src-alt': 'When src is set, an img.bj-logo__img is rendered; alt defaults to "Logo".',
      'desc-children': 'Without src, children becomes the visual mark (text, SVG, etc.).',
      'desc-motto-tagline': 'motto uses .bj-logo__motto; tagline uses .bj-logo__tagline below the mark.',
      'desc-full': 'Link + image + motto + institutional tagline.',
      'desc-rest': 'className, id, data-* on the root .bj-logo div.',
      'prop-size': 'md (default), lg, or xl.',
      'prop-href': 'When set, wraps the mark in a link.',
      'prop-motto': 'Short motto below the block.',
      'prop-tagline': 'Descriptive subline.',
      'prop-src': 'Coat of arms or mark image URL.',
      'prop-alt': 'Image alt text (default: "Logo").',
      'prop-children': 'Content instead of the image when src is omitted.',
      'prop-rest': 'Native div attributes and className merged on the root element.',
      'logo-motto': 'Fraternity — Justice — Labor',
      'logo-tagline': 'Procedures portal',
    },
  },
})

const codeUsage = `import { BjLogo } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjLogo
      size="md"
      href="/"
      src="/sigle.svg"
      alt="République du Bénin"
      tagline="Portail des démarches"
    />
  )
}`

const codeSize = `import { BjLogo } from '@flrxnt/dsbj/react'

export function Sizes() {
  return (
    <>
      <BjLogo size="md" src="/sigle.svg" alt="" />
      <BjLogo size="lg" src="/sigle.svg" alt="" />
      <BjLogo size="xl" src="/sigle.svg" alt="" />
    </>
  )
}`

const codeHref = `import { BjLogo } from '@flrxnt/dsbj/react'

export function WithAndWithoutLink() {
  return (
    <>
      <BjLogo href="/" src="/sigle.svg" alt="Accueil" />
      <BjLogo src="/sigle.svg" alt="Logo statique" />
    </>
  )
}`

const codeSrcAlt = `import { BjLogo } from '@flrxnt/dsbj/react'

export function ImageAlt() {
  return (
    <BjLogo
      src="https://example.com/armoiries.png"
      alt="Armoiries — République du Bénin"
    />
  )
}`

const codeChildren = `import { BjLogo } from '@flrxnt/dsbj/react'

export function TextMark() {
  return (
    <BjLogo href="/" motto="République du Bénin">
      <p>
        RB
        <br />
        <span className="bj-text-sm">Institution</span>
      </p>
    </BjLogo>
  )
}`

const codeMottoTagline = `import { BjLogo } from '@flrxnt/dsbj/react'

export function MottoTagline() {
  return (
    <BjLogo
      src="/sigle.svg"
      alt="Bénin"
      motto="Fraternité — Justice — Travail"
      tagline="Plateforme nationale"
    />
  )
}`

const codeFull = `import { BjLogo } from '@flrxnt/dsbj/react'

export function FullLogo() {
  return (
    <BjLogo
      size="lg"
      href="/"
      src="/sigle.svg"
      alt="République du Bénin"
      motto="Devise nationale"
      tagline="Services en ligne"
      className="site-header__logo"
    />
  )
}`

const codeRest = `import { BjLogo } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjLogo
      id="institution-logo"
      data-testid="logo"
      src="/sigle.svg"
      alt="Logo"
    />
  )
}`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'href', description: t('prop-href') },
  { name: 'motto', description: t('prop-motto') },
  { name: 'tagline', description: t('prop-tagline') },
  { name: 'src', description: t('prop-src') },
  { name: 'alt', description: t('prop-alt') },
  { name: 'children', description: t('prop-children') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-logo-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-logo">
        <a href="#" class="bj-logo__link">
          <img src="/sigle.svg" alt="" class="bj-logo__img" />
        </a>
        <p class="bj-logo__motto">{{ t('logo-motto') }}</p>
        <p class="bj-logo__tagline">{{ t('logo-tagline') }}</p>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-logo-size" :title="t('section-size')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-size') }}</p>
    <DocsCode :code="codeSize" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-href" :title="t('section-href')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-href') }}</p>
    <DocsCode :code="codeHref" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-src-alt" :title="t('section-src-alt')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-src-alt') }}</p>
    <DocsCode :code="codeSrcAlt" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-motto-tagline" :title="t('section-motto-tagline')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-motto-tagline') }}</p>
    <DocsCode :code="codeMottoTagline" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-full" :title="t('section-full')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-full') }}</p>
    <DocsCode :code="codeFull" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-logo-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
