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

  <DocsSection id="react-banner-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
