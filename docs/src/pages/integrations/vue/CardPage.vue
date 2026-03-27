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
      title: 'BjCard',
      desc: 'Carte Vue composable : BjCard (modificateurs et balise racine), BjCardImg (fond et label), BjCardBody et BjCardFooter (slots).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu complet',
      'section-card-img': 'BjCardImg',
      'section-body-footer': 'BjCardBody et BjCardFooter',
      'section-horizontal': 'horizontal',
      'section-flat': 'flat',
      'section-highlight': 'highlight',
      'section-link': 'link et tag="a"',
      'section-tag': 'Balise racine (tag)',
      'section-combos': 'Combinaisons',
      'section-props-card': 'Props — BjCard',
      'section-props-img': 'Props — BjCardImg',
      'prop-horizontal': 'Image à gauche, texte à droite (layout carte horizontale).',
      'prop-flat': 'Supprime bordure et ombre.',
      'prop-highlight': 'Bordure gauche d’accent.',
      'prop-link': 'Style carte interactive (souvent avec tag="a" et href).',
      'prop-tag': 'article (défaut), div ou a — élément racine du composant dynamique.',
      'prop-img-background': 'Valeur CSS pour background (ex. couleur ou gradient).',
      'prop-img-label': 'Texte pour aria-label sur le conteneur role="img".',
      'prop-img-slot': 'Contenu optionnel à l’intérieur de la zone image (illustration, icône).',
      'body-footer-desc':
        'Corps et pied sont de simples conteneurs : slot par défaut pour titres, texte, boutons ; attributs HTML transmis via v-bind sur la racine.',
      'combo-desc': 'Les modificateurs se cumulent (horizontal + highlight, link + tag a, etc.).',
      'detail': 'Actualité',
      'card-title': 'Titre',
      'card-desc': 'Résumé de l’article.',
      'footer': '12 mars 2025',
      'img-label-ex': 'Illustration de l’article',
    },
    en: {
      title: 'BjCard',
      desc: 'Composable Vue card: BjCard (modifiers and root tag), BjCardImg (background and label), BjCardBody and BjCardFooter (slots).',
      'section-usage': 'Usage',
      'section-preview': 'Full preview',
      'section-card-img': 'BjCardImg',
      'section-body-footer': 'BjCardBody and BjCardFooter',
      'section-horizontal': 'horizontal',
      'section-flat': 'flat',
      'section-highlight': 'highlight',
      'section-link': 'link and tag="a"',
      'section-tag': 'Root tag',
      'section-combos': 'Combinations',
      'section-props-card': 'Props — BjCard',
      'section-props-img': 'Props — BjCardImg',
      'prop-horizontal': 'Image left, text right (horizontal card layout).',
      'prop-flat': 'Removes border and shadow.',
      'prop-highlight': 'Accent left border.',
      'prop-link': 'Interactive card styling (often with tag="a" and href).',
      'prop-tag': 'article (default), div, or a — dynamic root element.',
      'prop-img-background': 'CSS value for background (color or gradient).',
      'prop-img-label': 'Text for aria-label on the role="img" container.',
      'prop-img-slot': 'Optional content inside the image area (illustration, icon).',
      'body-footer-desc':
        'Body and footer are simple containers: default slot for titles, text, buttons; native attributes via v-bind on the root.',
      'combo-desc': 'Modifiers stack (horizontal + highlight, link + tag a, etc.).',
      'detail': 'News',
      'card-title': 'Title',
      'card-desc': 'Article summary.',
      'footer': '12 March 2025',
      'img-label-ex': 'Article illustration',
    },
  },
})

const codeUsage = `<script setup>
import { BjCard, BjCardBody, BjCardFooter, BjCardImg } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjCard>
    <BjCardImg background="var(--bj-surface-alt)" />
    <BjCardBody>
      <p class="bj-card__detail">Actualité</p>
      <h3 class="bj-card__title">Titre</h3>
      <p class="bj-card__desc">Résumé de l’article.</p>
    </BjCardBody>
    <BjCardFooter>
      <span class="bj-card__start">12 mars 2025</span>
    </BjCardFooter>
  </BjCard>
</template>`

const codeCardImg = `<BjCardImg
  background="linear-gradient(135deg, var(--bj-action-high), var(--bj-action))"
  label="Illustration de l’article"
>
  <span class="bj-text-sm" style="color: #fff; padding: var(--bj-spacing-3v)">Slot image</span>
</BjCardImg>`

const codeHorizontal = `<BjCard horizontal>
  <BjCardImg background="var(--bj-surface-alt)" />
  <BjCardBody>
    <h3 class="bj-card__title">Titre</h3>
    <p class="bj-card__desc">Texte à droite de l’image.</p>
  </BjCardBody>
</BjCard>`

const codeFlat = `<BjCard flat>
  <BjCardBody>
    <h3 class="bj-card__title">Carte plate</h3>
  </BjCardBody>
</BjCard>`

const codeHighlight = `<BjCard highlight>
  <BjCardBody>
    <h3 class="bj-card__title">Mise en avant</h3>
  </BjCardBody>
</BjCard>`

const codeLink = `<BjCard tag="a" href="#" link>
  <BjCardBody>
    <h3 class="bj-card__title">Lien carte</h3>
    <p class="bj-card__desc">Toute la carte est cliquable.</p>
  </BjCardBody>
</BjCard>`

const codeTag = `<BjCard tag="article">…</BjCard>
<BjCard tag="div" role="group" aria-label="Groupe">…</BjCard>
<BjCard tag="a" href="/page" link>…</BjCard>`

const codeCombos = `<BjCard horizontal highlight>
  <BjCardImg background="var(--bj-surface-alt)" label="Visuel" />
  <BjCardBody>
    <h3 class="bj-card__title">Horizontal + highlight</h3>
  </BjCardBody>
</BjCard>

<BjCard tag="a" href="#" link flat>
  <BjCardBody>
    <h3 class="bj-card__title">Lien + flat</h3>
  </BjCardBody>
</BjCard>`

const cardPropsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'flat', description: t('prop-flat') },
  { name: 'highlight', description: t('prop-highlight') },
  { name: 'link', description: t('prop-link') },
  { name: 'tag', description: t('prop-tag') },
])

const imgPropsRows = computed(() => [
  { name: 'background', description: t('prop-img-background') },
  { name: 'label', description: t('prop-img-label') },
  { name: '(default slot)', description: t('prop-img-slot') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-card-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-preview" :title="t('section-preview')">
    <DocsPreview>
      <article class="bj-card" style="max-width: 22rem">
        <div
          class="bj-card__img"
          style="background: linear-gradient(135deg, var(--bj-action-high) 0%, var(--bj-action) 100%); min-height: 8rem"
          role="img"
          :aria-label="t('img-label-ex')"
        />
        <div class="bj-card__body">
          <p class="bj-card__detail">{{ t('detail') }}</p>
          <h3 class="bj-card__title">{{ t('card-title') }}</h3>
          <p class="bj-card__desc">{{ t('card-desc') }}</p>
        </div>
        <div class="bj-card__footer">
          <span class="bj-card__start bj-text-sm">{{ t('footer') }}</span>
        </div>
      </article>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-card-img" :title="t('section-card-img')">
    <DocsPreview>
      <div
        class="bj-card__img"
        style="background: linear-gradient(135deg, var(--bj-action-high) 0%, var(--bj-action) 100%); min-height: 6rem; max-width: 20rem"
        role="img"
        :aria-label="t('img-label-ex')"
      >
        <span class="bj-text-sm" style="color: #fff; padding: var(--bj-spacing-3v); display: inline-block">Slot</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCardImg" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-body-footer" :title="t('section-body-footer')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('body-footer-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-card-horizontal" :title="t('section-horizontal')">
    <DocsPreview>
      <article class="bj-card bj-card--horizontal" style="max-width: 28rem">
        <div class="bj-card__img" style="background: var(--bj-surface-alt); min-height: 6rem; min-width: 8rem" role="img" aria-label="" />
        <div class="bj-card__body">
          <h3 class="bj-card__title">{{ t('card-title') }}</h3>
          <p class="bj-card__desc">{{ t('card-desc') }}</p>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-flat" :title="t('section-flat')">
    <DocsPreview>
      <article class="bj-card bj-card--flat" style="max-width: 20rem">
        <div class="bj-card__body">
          <h3 class="bj-card__title">flat</h3>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeFlat" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-highlight" :title="t('section-highlight')">
    <DocsPreview>
      <article class="bj-card bj-card--highlight" style="max-width: 20rem">
        <div class="bj-card__body">
          <h3 class="bj-card__title">highlight</h3>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeHighlight" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-link" :title="t('section-link')">
    <DocsPreview>
      <a href="#" class="bj-card bj-card--link" style="max-width: 20rem; text-decoration: none; color: inherit">
        <div class="bj-card__body">
          <h3 class="bj-card__title">link</h3>
          <p class="bj-card__desc bj-text-sm">Carte lien</p>
        </div>
      </a>
    </DocsPreview>
    <DocsCode :code="codeLink" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-tag" :title="t('section-tag')">
    <DocsCode :code="codeTag" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-combos" :title="t('section-combos')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('combo-desc') }}</p>
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)">
      <article class="bj-card bj-card--horizontal bj-card--highlight" style="max-width: 28rem">
        <div class="bj-card__img" style="background: var(--bj-surface-alt); min-height: 5rem; min-width: 7rem" role="img" aria-label="" />
        <div class="bj-card__body">
          <h3 class="bj-card__title">horizontal + highlight</h3>
        </div>
      </article>
      <a href="#" class="bj-card bj-card--link bj-card--flat" style="max-width: 20rem; text-decoration: none; color: inherit">
        <div class="bj-card__body">
          <h3 class="bj-card__title">link + flat</h3>
        </div>
      </a>
    </DocsPreview>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-card-props" :title="t('section-props-card')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="cardPropsRows" />
  </DocsSection>

  <DocsSection id="vue-card-props-img" :title="t('section-props-img')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="imgPropsRows" />
  </DocsSection>
</template>
