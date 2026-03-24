<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Mise en avant',
      desc:
        'Bloc éditorial pour attirer l’attention sur une démarche, un service ou une campagne : icône optionnelle, titre, texte et bouton d’action.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-intro':
        'Couleurs de bordure gauche alignées sur la palette nationale : <code>bj-callout--green</code>, <code>bj-callout--yellow</code>, <code>bj-callout--red</code>.',
      'prop-bj-callout':
        'Bloc avec fond alternatif et bordure gauche (vert action par défaut).',
      'prop-bj-callout__icon':
        'Icône ou pictogramme au-dessus du titre.',
      'prop-bj-callout__title': 'Titre de section.',
      'prop-bj-callout__text': 'Paragraphe descriptif.',
      'prop-bj-callout__btn':
        'Conteneur pour un ou plusieurs boutons.',
      'prop-bj-callout--green': 'Bordure gauche vert Bénin.',
      'prop-bj-callout--yellow': 'Bordure jaune Bénin.',
      'prop-bj-callout--red': 'Bordure rouge Bénin.',
      'a11y-note':
        'Nommez la région avec <code>aria-labelledby</code> sur le titre. L’icône décorative doit être masquée aux technologies d’assistance. Le bouton d’action doit avoir un libellé explicite hors contexte si possible.',
    },
    en: {
      title: 'Callout',
      desc:
        'Editorial block to highlight a procedure, service or campaign: optional icon, title, text and action button.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-intro':
        'Left border colors aligned with the national palette: <code>bj-callout--green</code>, <code>bj-callout--yellow</code>, <code>bj-callout--red</code>.',
      'prop-bj-callout':
        'Block with alternate background and left border (action green by default).',
      'prop-bj-callout__icon': 'Icon or pictogram above the title.',
      'prop-bj-callout__title': 'Section title.',
      'prop-bj-callout__text': 'Descriptive paragraph.',
      'prop-bj-callout__btn': 'Container for one or more buttons.',
      'prop-bj-callout--green': 'Left border Benin green.',
      'prop-bj-callout--yellow': 'Benin yellow border.',
      'prop-bj-callout--red': 'Benin red border.',
      'a11y-note':
        'Name the region with <code>aria-labelledby</code> on the title. Decorative icons should be hidden from assistive tech. The action button should have a clear label out of context when possible.',
    },
  },
})

const codeExemple = `<div class="bj-callout" role="region" aria-labelledby="co-title">
  <div class="bj-callout__icon" aria-hidden="true">…</div>
  <div class="bj-callout__title" id="co-title">…</div>
  <p class="bj-callout__text">…</p>
  <div class="bj-callout__btn"><a href="#" class="bj-btn bj-btn--secondary">…</a></div>
</div>`

const codeVariantes = `<div class="bj-callout bj-callout--green">…</div>
<div class="bj-callout bj-callout--yellow">…</div>
<div class="bj-callout bj-callout--red">…</div>`

const propsRows = computed(() => [
  {
    name: 'bj-callout',
    description: t('prop-bj-callout'),
  },
  {
    name: 'bj-callout__icon',
    description: t('prop-bj-callout__icon'),
  },
  {
    name: 'bj-callout__title',
    description: t('prop-bj-callout__title'),
  },
  {
    name: 'bj-callout__text',
    description: t('prop-bj-callout__text'),
  },
  {
    name: 'bj-callout__btn',
    description: t('prop-bj-callout__btn'),
  },
  {
    name: 'bj-callout--green',
    description: t('prop-bj-callout--green'),
  },
  {
    name: 'bj-callout--yellow',
    description: t('prop-bj-callout--yellow'),
  },
  {
    name: 'bj-callout--red',
    description: t('prop-bj-callout--red'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-callout" :title="t('section-exemple')">
    <DocsPreview>
      <div
        class="bj-callout"
        role="region"
        aria-labelledby="doc-co-title"
      >
        <div class="bj-callout__icon" aria-hidden="true">
          <i
            class="ri-lightbulb-flash-line bj-icon bj-icon--xl bj-icon--action"
          ></i>
        </div>
        <div class="bj-callout__title" id="doc-co-title">
          Démarches en ligne
        </div>
        <p class="bj-callout__text">
          Plus de 200 services sont accessibles 24h/24 depuis le
          portail national.
        </p>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn bj-btn--secondary"
            >Découvrir les services</a
          >
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-callout" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-4v);
      "
      v-html="t('variantes-intro')"
    />
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div
        class="bj-callout bj-callout--green"
        role="region"
        aria-labelledby="doc-cog"
      >
        <div class="bj-callout__title" id="doc-cog">
          Variante verte
        </div>
        <p class="bj-callout__text">
          Pour les messages positifs ou liés à l’identité verte du
          Bénin.
        </p>
      </div>
      <div
        class="bj-callout bj-callout--yellow"
        role="region"
        aria-labelledby="doc-coy"
      >
        <div class="bj-callout__title" id="doc-coy">
          Variante jaune
        </div>
        <p class="bj-callout__text">
          Pour attirer l’attention sans niveau d’alerte critique.
        </p>
      </div>
      <div
        class="bj-callout bj-callout--red"
        role="region"
        aria-labelledby="doc-cor"
      >
        <div class="bj-callout__title" id="doc-cor">
          Variante rouge
        </div>
        <p class="bj-callout__text">
          Pour les messages forts ou les appels à l’action urgents.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-callout" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-callout" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
