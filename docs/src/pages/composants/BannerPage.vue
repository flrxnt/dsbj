<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

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

const propsRows = [
  { name: 'bj-banner', description: 'Conteneur principal pleine largeur.' },
  { name: 'bj-banner__img', description: 'Image de fond (balise <img>, object-fit cover).' },
  { name: 'bj-banner__overlay', description: 'Couche semi-transparente pour la lisibilité du texte.' },
  { name: 'bj-banner__body', description: 'Zone de contenu textuel (titre, texte, actions).' },
  { name: 'bj-banner__title', description: 'Titre principal de la bannière.' },
  { name: 'bj-banner__text', description: 'Sous-titre ou description.' },
  { name: 'bj-banner__actions', description: 'Zone de boutons CTA.' },
  { name: 'bj-banner--sm', description: 'Hauteur réduite (14 rem).' },
  { name: 'bj-banner--lg', description: 'Hauteur augmentée (28 rem).' },
  { name: 'bj-banner--center', description: 'Contenu centré horizontalement.' },
  { name: 'bj-banner--right', description: 'Contenu aligné à droite.' },
  { name: 'bj-banner--light', description: 'Overlay clair pour images sombres.' },
  { name: 'bj-banner--dark', description: 'Overlay sombre uniforme.' },
  { name: 'bj-banner--plain', description: 'Fond uni sans image (couleur action-high).' },
  {
    name: 'bj-banner--green / --yellow / --red',
    description: 'Bordure basse aux couleurs nationales.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Bannière
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Section hero pleine largeur avec image de fond, titre, description
    et appel à l'action. Idéale pour les pages d'accueil, les
    annonces et les mises en avant promotionnelles.
  </p>

  <DocsSection id="sec-exemples-banner" title="Exemple de base">
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

  <DocsSection id="sec-banner-sizes" title="Tailles">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      Les modificateurs <code>bj-banner--sm</code> et
      <code>bj-banner--lg</code> ajustent la hauteur minimale.
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

  <DocsSection id="sec-banner-align" title="Alignement centré">
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

  <DocsSection id="sec-banner-plain" title="Sans image">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      La variante <code>bj-banner--plain</code> utilise un fond uni
      et masque l'overlay. Combinable avec les couleurs nationales.
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

  <DocsSection id="classes-banner" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-banner" title="Accessibilité">
    <DocsA11yNote>
      L'image décorative de fond doit porter un attribut
      <code>alt=""</code> vide. Si l'image véhicule un sens,
      décrivez-la dans <code>alt</code>. Utilisez une balise
      sémantique <code>&lt;section&gt;</code> ou
      <code>role="banner"</code> avec un
      <code>aria-label</code> descriptif pour nommer la zone.
      Les boutons CTA doivent être des liens ou boutons natifs
      avec un texte explicite. Vérifiez le contraste entre le
      texte et l'overlay sur les images claires.
    </DocsA11yNote>
  </DocsSection>
</template>
