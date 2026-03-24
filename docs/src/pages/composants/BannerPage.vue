<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bannière',
      desc:
        'Section hero pleine largeur avec image de fond, titre, description et appel à l’action. Idéale pour les pages d’accueil, les annonces et les mises en avant promotionnelles.',
      'sec-base': 'Exemple de base',
      'sec-sizes': 'Tailles',
      'sec-sizes-p-1': 'Les modificateurs ',
      'sec-sizes-p-2': ' et ',
      'sec-sizes-p-3': ' ajustent la hauteur minimale.',
      'sec-align': 'Alignement centré',
      'sec-plain': 'Sans image',
      'sec-plain-p-1': 'La variante ',
      'sec-plain-p-2':
        ' utilise un fond uni et masque l’overlay. Combinable avec les couleurs nationales.',
      'sec-classes': 'Classes CSS',
      'sec-a11y': 'Accessibilité',
      'prop-banner': 'Conteneur principal pleine largeur.',
      'prop-img':
        'Image de fond (balise <img>, object-fit cover).',
      'prop-overlay':
        'Couche semi-transparente pour la lisibilité du texte.',
      'prop-body': 'Zone de contenu textuel (titre, texte, actions).',
      'prop-title': 'Titre principal de la bannière.',
      'prop-text': 'Sous-titre ou description.',
      'prop-actions': 'Zone de boutons CTA.',
      'prop-sm': 'Hauteur réduite (14 rem).',
      'prop-lg': 'Hauteur augmentée (28 rem).',
      'prop-center': 'Contenu centré horizontalement.',
      'prop-right': 'Contenu aligné à droite.',
      'prop-light': 'Overlay clair pour images sombres.',
      'prop-dark': 'Overlay sombre uniforme.',
      'prop-plain': 'Fond uni sans image (couleur action-high).',
      'prop-colors':
        'Bordure basse aux couleurs nationales.',
      'a11y-1': 'L’image décorative de fond doit porter un attribut ',
      'a11y-alt-mid':
        ' vide. Si l’image véhicule un sens, décrivez-la dans ',
      'a11y-2a': '. Utilisez une balise sémantique ',
      'a11y-2b':
        ' ou role="banner" avec un aria-label descriptif pour nommer la zone. Les boutons CTA doivent être des liens ou boutons natifs avec un texte explicite. Vérifiez le contraste entre le texte et l’overlay sur les images claires.',
    },
    en: {
      title: 'Banner',
      desc:
        'Full-width hero with background image, title, description, and call to action. Suited to home pages, announcements, and promotional highlights.',
      'sec-base': 'Basic example',
      'sec-sizes': 'Sizes',
      'sec-sizes-p-1': 'The ',
      'sec-sizes-p-2': ' and ',
      'sec-sizes-p-3': ' modifiers adjust the minimum height.',
      'sec-align': 'Centered alignment',
      'sec-plain': 'Without image',
      'sec-plain-p-1': 'The ',
      'sec-plain-p-2':
        ' variant uses a solid background and hides the overlay. Combine with national colour accents.',
      'sec-classes': 'CSS classes',
      'sec-a11y': 'Accessibility',
      'prop-banner': 'Main full-width container.',
      'prop-img': 'Background image (<img>, object-fit cover).',
      'prop-overlay': 'Semi-transparent layer for text contrast.',
      'prop-body': 'Text area (title, copy, actions).',
      'prop-title': 'Main banner title.',
      'prop-text': 'Subtitle or description.',
      'prop-actions': 'CTA button area.',
      'prop-sm': 'Reduced height (14 rem).',
      'prop-lg': 'Taller height (28 rem).',
      'prop-center': 'Horizontally centered content.',
      'prop-right': 'Right-aligned content.',
      'prop-light': 'Light overlay for dark images.',
      'prop-dark': 'Uniform dark overlay.',
      'prop-plain': 'Solid background without image (action-high colour).',
      'prop-colors': 'Bottom border in national colours.',
      'a11y-1': 'Decorative background images should use an empty ',
      'a11y-alt-mid':
        ' attribute. If the image conveys meaning, describe it in ',
      'a11y-2a': '. Use a semantic ',
      'a11y-2b':
        ' element or role="banner" with a descriptive aria-label to name the region. CTAs should be native links or buttons with clear text. Check contrast between text and overlay on light images.',
    },
  },
})

const codeBase = `<div class="bj-banner">
  <img class="bj-banner__img" src="https://picsum.photos/1200/500" alt="">
  <div class="bj-banner__overlay"></div>
  <div class="bj-banner__body">
    <h1 class="bj-banner__title">Bienvenue sur le portail du Bénin</h1>
    <p class="bj-banner__text">Accédez aux services publics numériques de la République du Bénin.</p>
    <div class="bj-banner__actions">
      <a href="#" class="bj-btn bj-btn--inverse">Découvrir</a>
    </div>
  </div>
</div>`

const codeSizes = `<div class="bj-banner bj-banner--sm">
  <img class="bj-banner__img" src="https://picsum.photos/1200/300" alt="">
  <div class="bj-banner__overlay"></div>
  <div class="bj-banner__body">
    <h2 class="bj-banner__title">Bannière compacte</h2>
    <p class="bj-banner__text">Variante réduite pour les sous-pages.</p>
  </div>
</div>

<div class="bj-banner bj-banner--lg">
  <img class="bj-banner__img" src="https://picsum.photos/1200/700" alt="">
  <div class="bj-banner__overlay"></div>
  <div class="bj-banner__body">
    <h2 class="bj-banner__title">Bannière grande</h2>
    <p class="bj-banner__text">Variante haute pour les pages d'accueil.</p>
    <div class="bj-banner__actions">
      <a href="#" class="bj-btn bj-btn--inverse">Action principale</a>
      <a href="#" class="bj-btn bj-btn--tertiary-inverse">En savoir plus</a>
    </div>
  </div>
</div>`

const codeAlign = `<div class="bj-banner bj-banner--center">
  <img class="bj-banner__img" src="https://picsum.photos/1200/500?random=2" alt="">
  <div class="bj-banner__overlay"></div>
  <div class="bj-banner__body">
    <h2 class="bj-banner__title">Contenu centré</h2>
    <p class="bj-banner__text">Texte et actions alignés au centre.</p>
    <div class="bj-banner__actions">
      <a href="#" class="bj-btn bj-btn--inverse">Commencer</a>
    </div>
  </div>
</div>`

const codePlain = `<div class="bj-banner bj-banner--plain bj-banner--green">
  <div class="bj-banner__body">
    <h2 class="bj-banner__title">Sans image</h2>
    <p class="bj-banner__text">Bannière avec couleur de fond unie et bordure nationale.</p>
    <div class="bj-banner__actions">
      <a href="#" class="bj-btn bj-btn--inverse">Accéder au service</a>
    </div>
  </div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-banner', description: t('prop-banner') },
  { name: 'bj-banner__img', description: t('prop-img') },
  { name: 'bj-banner__overlay', description: t('prop-overlay') },
  { name: 'bj-banner__body', description: t('prop-body') },
  { name: 'bj-banner__title', description: t('prop-title') },
  { name: 'bj-banner__text', description: t('prop-text') },
  { name: 'bj-banner__actions', description: t('prop-actions') },
  { name: 'bj-banner--sm', description: t('prop-sm') },
  { name: 'bj-banner--lg', description: t('prop-lg') },
  { name: 'bj-banner--center', description: t('prop-center') },
  { name: 'bj-banner--right', description: t('prop-right') },
  { name: 'bj-banner--light', description: t('prop-light') },
  { name: 'bj-banner--dark', description: t('prop-dark') },
  { name: 'bj-banner--plain', description: t('prop-plain') },
  {
    name: 'bj-banner--green / --yellow / --red',
    description: t('prop-colors'),
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

  <DocsSection id="sec-exemples-banner" :title="t('sec-base')">
    <DocsPreview>
      <div class="bj-banner">
        <img
          class="bj-banner__img"
          src="https://picsum.photos/1200/500"
          alt=""
        />
        <div class="bj-banner__overlay"></div>
        <div class="bj-banner__body">
          <h2 class="bj-banner__title">
            Bienvenue sur le portail du Bénin
          </h2>
          <p class="bj-banner__text">
            Accédez aux services publics numériques de la République
            du Bénin.
          </p>
          <div class="bj-banner__actions">
            <a href="#" class="bj-btn bj-btn--inverse">Découvrir</a>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeBase" />
  </DocsSection>

  <DocsSection id="sec-banner-sizes" :title="t('sec-sizes')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      {{ t('sec-sizes-p-1') }}<code>bj-banner--sm</code>{{ t('sec-sizes-p-2')
      }}<code>bj-banner--lg</code>{{ t('sec-sizes-p-3') }}
    </p>
    <DocsPreview
      style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)"
    >
      <div class="bj-banner bj-banner--sm">
        <img
          class="bj-banner__img"
          src="https://picsum.photos/1200/300"
          alt=""
        />
        <div class="bj-banner__overlay"></div>
        <div class="bj-banner__body">
          <h2 class="bj-banner__title">Bannière compacte</h2>
          <p class="bj-banner__text">
            Variante réduite pour les sous-pages.
          </p>
        </div>
      </div>
      <div class="bj-banner bj-banner--lg">
        <img
          class="bj-banner__img"
          src="https://picsum.photos/1200/700"
          alt=""
        />
        <div class="bj-banner__overlay"></div>
        <div class="bj-banner__body">
          <h2 class="bj-banner__title">Bannière grande</h2>
          <p class="bj-banner__text">
            Variante haute pour les pages d'accueil.
          </p>
          <div class="bj-banner__actions">
            <a href="#" class="bj-btn bj-btn--inverse"
              >Action principale</a
            >
            <a href="#" class="bj-btn bj-btn--tertiary-inverse"
              >En savoir plus</a
            >
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" />
  </DocsSection>

  <DocsSection id="sec-banner-align" :title="t('sec-align')">
    <DocsPreview>
      <div class="bj-banner bj-banner--center">
        <img
          class="bj-banner__img"
          src="https://picsum.photos/1200/500?random=2"
          alt=""
        />
        <div class="bj-banner__overlay"></div>
        <div class="bj-banner__body">
          <h2 class="bj-banner__title">Contenu centré</h2>
          <p class="bj-banner__text">
            Texte et actions alignés au centre.
          </p>
          <div class="bj-banner__actions">
            <a href="#" class="bj-btn bj-btn--inverse">Commencer</a>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeAlign" />
  </DocsSection>

  <DocsSection id="sec-banner-plain" :title="t('sec-plain')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      {{ t('sec-plain-p-1') }}<code>bj-banner--plain</code>{{ t('sec-plain-p-2') }}
    </p>
    <DocsPreview>
      <div class="bj-banner bj-banner--plain bj-banner--green">
        <div class="bj-banner__body">
          <h2 class="bj-banner__title">Sans image</h2>
          <p class="bj-banner__text">
            Bannière avec couleur de fond unie et bordure nationale.
          </p>
          <div class="bj-banner__actions">
            <a href="#" class="bj-btn bj-btn--inverse"
              >Accéder au service</a
            >
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codePlain" />
  </DocsSection>

  <DocsSection id="classes-banner" :title="t('sec-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-banner" :title="t('sec-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <code>alt=""</code>
      {{ t('a11y-alt-mid') }}
      <code>alt</code>
      {{ t('a11y-2a') }}
      <code>&lt;section&gt;</code>
      {{ t('a11y-2b') }}
    </DocsA11yNote>
  </DocsSection>
</template>
