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
      title: 'Carte',
      desc: 'Conteneur pour actualités, services ou fiches administratives : visuel 16:9, métadonnée optionnelle, titre, texte et pied de page pour date ou actions. Combinez les modificateurs pour l’orientation, le relief et la mise en avant.',
      'section-default': 'Carte par défaut',
      'section-horizontal': 'Carte horizontale',
      'para-horizontal':
        '<code>bj-card--horizontal</code> place le visuel à gauche et le contenu à droite - utile pour listes de résultats ou encarts larges.',
      'section-flat': 'Carte sans bordure',
      'para-flat':
        '<code>bj-card--flat</code> retire bordure et fond : à utiliser sur une page déjà structurée (panneau, colonne avec fond).',
      'section-highlight': 'Carte avec mise en avant',
      'para-highlight':
        '<code>bj-card--highlight</code> ajoute une bordure gauche colorée pour signaler une offre prioritaire ou une action recommandée.',
      'section-grid': 'Grille de cartes',
      'para-grid':
        'Trois cartes sur une ligne desktop avec <code>bj-grid-row</code> et <code>bj-col-4</code> (se réorganisent sur petits écrans).',
      'section-link': 'Carte entièrement cliquable',
      'para-link':
        'Sur une balise <code>&lt;a&gt;</code>, ajoutez <code>bj-card bj-card--link</code> pour le survol et le curseur lien (équivalent Vue <code>link</code>).',
      'section-combo-modifiers': 'Combinaisons de modificateurs',
      'para-combo-modifiers':
        'Les modificateurs <code>bj-card--horizontal</code>, <code>bj-card--flat</code> et <code>bj-card--highlight</code> se cumulent : testez les paires et triplets selon la maquette.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Les visuels décoratifs doivent avoir un <code>role="img"</code> avec <code>aria-label</code> vide ou un <code>alt</code> vide sur une vraie image. Si le bloc apporte une information, décrivez-la dans le label ou l’attribut <code>alt</code>. Pour une carte entièrement cliquable (<code>bj-card--link</code>), l’intitulé visible doit suffire comme nom de lien. Respectez la hiérarchie des titres : un seul <code>h1</code> par page - utilisez <code>h2</code> ou <code>h3</code> dans les cartes selon le contexte.',
      'prop-bj-card':
        'Carte verticale avec bordure et fond surélevé.',
      'prop-bj-card-img':
        'Zone visuelle pleine largeur, ratio 16:9 (image ou fond).',
      'prop-bj-card-body':
        'Zone principale (détail, titre, description).',
      'prop-bj-card-detail': 'Ligne de métadonnée en capitales.',
      'prop-bj-card-title': 'Titre de la carte.',
      'prop-bj-card-desc': 'Texte descriptif.',
      'prop-bj-card-footer':
        'Barre sous le corps (date, liens, actions).',
      'prop-bj-card-start-end':
        'Alignement horizontal dans le footer.',
      'prop-bj-card-horizontal':
        'Disposition visuel + contenu côte à côte.',
      'prop-bj-card-flat':
        'Sans bordure ni ombre, fond transparent.',
      'prop-bj-card-highlight':
        'Bordure gauche d’accent (couleur d’action).',
      'prop-bj-card-link':
        'Sur un lien (balise a), carte interactive avec ombre au survol.',
      'prop-bj-cards':
        'Grille auto-fill de cartes (alternative à la grille 12 colonnes).',
    },
    en: {
      title: 'Card',
      desc: 'Container for news, services, or administrative sheets: 16:9 visual, optional metadata, title, text, and footer for dates or actions. Combine modifiers for layout, elevation, and emphasis.',
      'section-default': 'Default card',
      'section-horizontal': 'Horizontal card',
      'para-horizontal':
        '<code>bj-card--horizontal</code> puts the visual on the left and content on the right—useful for result lists or wide promos.',
      'section-flat': 'Borderless card',
      'para-flat':
        '<code>bj-card--flat</code> removes border and background: use on an already structured page (panel, column with background).',
      'section-highlight': 'Highlighted card',
      'para-highlight':
        '<code>bj-card--highlight</code> adds a coloured left border for a priority offer or recommended action.',
      'section-grid': 'Card grid',
      'para-grid':
        'Three cards per row on desktop with <code>bj-grid-row</code> and <code>bj-col-4</code> (they reflow on small screens).',
      'section-link': 'Fully clickable card',
      'para-link':
        'On an <code>&lt;a&gt;</code>, use <code>bj-card bj-card--link</code> for link hover and cursor (Vue <code>link</code> prop).',
      'section-combo-modifiers': 'Modifier combinations',
      'para-combo-modifiers':
        '<code>bj-card--horizontal</code>, <code>bj-card--flat</code>, and <code>bj-card--highlight</code> stack—use pairs and triplets as the layout needs.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Decorative visuals should use <code>role="img"</code> with an empty <code>aria-label</code> or an empty <code>alt</code> on a real image. If the block conveys information, describe it in the label or <code>alt</code>. For a fully clickable card (<code>bj-card--link</code>), the visible title should be enough as the link name. Respect heading hierarchy: one <code>h1</code> per page—use <code>h2</code> or <code>h3</code> inside cards as context requires.',
      'prop-bj-card': 'Vertical card with border and raised background.',
      'prop-bj-card-img':
        'Full-width visual area, 16:9 ratio (image or background).',
      'prop-bj-card-body':
        'Main area (detail, title, description).',
      'prop-bj-card-detail': 'Metadata line in capitals.',
      'prop-bj-card-title': 'Card title.',
      'prop-bj-card-desc': 'Descriptive text.',
      'prop-bj-card-footer':
        'Bar below the body (date, links, actions).',
      'prop-bj-card-start-end': 'Horizontal alignment in the footer.',
      'prop-bj-card-horizontal': 'Visual + content side by side.',
      'prop-bj-card-flat': 'No border or shadow, transparent background.',
      'prop-bj-card-highlight':
        'Left accent border (action colour).',
      'prop-bj-card-link':
        'On a link (a element), interactive card with hover shadow.',
      'prop-bj-cards':
        'Auto-fill card grid (alternative to the 12-column grid).',
    },
  },
})

const codeDefault = `<article class="bj-card">
  <div class="bj-card__img" role="img" aria-label="…"></div>
  <div class="bj-card__body">
    <div class="bj-card__detail">Service public</div>
    <h2 class="bj-card__title">Démarches en ligne</h2>
    <p class="bj-card__desc">…</p>
  </div>
  <div class="bj-card__footer">…</div>
</article>`

const codeHorizontal = `<article class="bj-card bj-card--horizontal">
  <div class="bj-card__img" role="img" aria-label="…"></div>
  <div class="bj-card__body">…</div>
</article>`

const codeFlat = `<article class="bj-card bj-card--flat">
  <div class="bj-card__body">…</div>
</article>`

const codeHighlight = `<article class="bj-card bj-card--highlight">
  <div class="bj-card__body">…</div>
</article>`

const codeGrid = `<div class="bj-grid-row bj-grid-row--gutters">
  <div class="bj-col-4"><article class="bj-card">…</article></div>
  <div class="bj-col-4"><article class="bj-card">…</article></div>
  <div class="bj-col-4"><article class="bj-card">…</article></div>
</div>`

const codeLink = `<a href="#" class="bj-card bj-card--link">
  <div class="bj-card__body">
    <div class="bj-card__title">Titre du lien</div>
    <p class="bj-card__desc">Toute la carte est cliquable.</p>
  </div>
</a>`

const codeCombosCard = `<!-- horizontal + flat -->
<article class="bj-card bj-card--horizontal bj-card--flat">…</article>
<!-- horizontal + highlight -->
<article class="bj-card bj-card--horizontal bj-card--highlight">…</article>
<!-- flat + highlight -->
<article class="bj-card bj-card--flat bj-card--highlight">…</article>
<!-- horizontal + flat + highlight -->
<article class="bj-card bj-card--horizontal bj-card--flat bj-card--highlight">…</article>
<!-- lien + horizontal -->
<a href="#" class="bj-card bj-card--link bj-card--horizontal">…</a>`

const propsRows = computed(() => [
  { name: 'bj-card', description: t('prop-bj-card') },
  {
    name: 'bj-card__img',
    description: t('prop-bj-card-img'),
  },
  {
    name: 'bj-card__body',
    description: t('prop-bj-card-body'),
  },
  {
    name: 'bj-card__detail',
    description: t('prop-bj-card-detail'),
  },
  { name: 'bj-card__title', description: t('prop-bj-card-title') },
  { name: 'bj-card__desc', description: t('prop-bj-card-desc') },
  {
    name: 'bj-card__footer',
    description: t('prop-bj-card-footer'),
  },
  {
    name: 'bj-card__start / bj-card__end',
    description: t('prop-bj-card-start-end'),
  },
  {
    name: 'bj-card--horizontal',
    description: t('prop-bj-card-horizontal'),
  },
  {
    name: 'bj-card--flat',
    description: t('prop-bj-card-flat'),
  },
  {
    name: 'bj-card--highlight',
    description: t('prop-bj-card-highlight'),
  },
  {
    name: 'bj-card--link',
    description: t('prop-bj-card-link'),
  },
  {
    name: 'bj-cards',
    description: t('prop-bj-cards'),
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

  <DocsSection id="sec-card-default" :title="t('section-default')">
    <DocsPreview>
      <article class="bj-card" style="max-width: 22rem">
        <div
          class="bj-card__img"
          style="
            background: linear-gradient(
              135deg,
              var(--bj-action-high) 0%,
              #0a4d2e 100%
            );
          "
          role="img"
          aria-label="Illustration de substitution (placeholder)"
        ></div>
        <div class="bj-card__body">
          <div class="bj-card__detail">Service public</div>
          <h2 class="bj-card__title" style="margin-top: 0">
            Démarches en ligne
          </h2>
          <p class="bj-card__desc">
            Retrouvez les formulaires officiels et suivez l’état de
            vos demandes depuis votre espace citoyen.
          </p>
        </div>
        <div class="bj-card__footer">
          <span class="bj-text-sm bj-text-alt"
            >Mis à jour le 18 mars 2025</span
          >
          <a href="#" class="bj-link bj-link--icon-right"
            >En savoir plus <i class="ri-arrow-right-line"></i
          ></a>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeDefault" />
  </DocsSection>

  <DocsSection id="sec-card-horizontal" :title="t('section-horizontal')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-horizontal')" />
    </p>
    <DocsPreview>
      <article class="bj-card bj-card--horizontal">
        <div
          class="bj-card__img"
          style="
            background: linear-gradient(120deg, #1e3a5f, #2d5a87);
          "
          role="img"
          aria-label="Visuel décoratif"
        ></div>
        <div class="bj-card__body">
          <div class="bj-card__title">Permis de construire</div>
          <p class="bj-card__desc">
            Dépôt et suivi dématérialisés : pièces obligatoires,
            délais légaux et contacts du service instructeur.
          </p>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" />
  </DocsSection>

  <DocsSection id="sec-card-flat" :title="t('section-flat')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-flat')" />
    </p>
    <DocsPreview>
      <article class="bj-card bj-card--flat">
        <div class="bj-card__body">
          <div class="bj-card__title">Foire aux questions</div>
          <p class="bj-card__desc">
            Réponses aux questions les plus fréquentes sur les délais,
            les pièces à fournir et les recours.
          </p>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeFlat" />
  </DocsSection>

  <DocsSection id="sec-card-highlight" :title="t('section-highlight')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-highlight')" />
    </p>
    <DocsPreview>
      <article
        class="bj-card bj-card--highlight"
        style="max-width: 24rem"
      >
        <div class="bj-card__body">
          <div class="bj-card__detail">Priorité</div>
          <div class="bj-card__title">Guichet unique entreprise</div>
          <p class="bj-card__desc">
            Un seul interlocuteur pour cinq formalités de création ou
            de modification d’entreprise.
          </p>
        </div>
      </article>
    </DocsPreview>
    <DocsCode :code="codeHighlight" />
  </DocsSection>

  <DocsSection id="sec-card-grid" :title="t('section-grid')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-grid')" />
    </p>
    <DocsPreview>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-4">
          <article class="bj-card" style="height: 100%">
            <div
              class="bj-card__img"
              style="background: #c4a35a"
              role="img"
              aria-label=""
            ></div>
            <div class="bj-card__body">
              <div class="bj-card__title">État civil</div>
              <p class="bj-card__desc">
                Actes de naissance, mariage, décès.
              </p>
            </div>
          </article>
        </div>
        <div class="bj-col-4">
          <article class="bj-card" style="height: 100%">
            <div
              class="bj-card__img"
              style="background: #8b4513"
              role="img"
              aria-label=""
            ></div>
            <div class="bj-card__body">
              <div class="bj-card__title">Urbanisme</div>
              <p class="bj-card__desc">
                Permis, déclarations préalables, documents
                d’urbanisme.
              </p>
            </div>
          </article>
        </div>
        <div class="bj-col-4">
          <article class="bj-card" style="height: 100%">
            <div
              class="bj-card__img"
              style="background: #2f4f4f"
              role="img"
              aria-label=""
            ></div>
            <div class="bj-card__body">
              <div class="bj-card__title">Impôts &amp; taxes</div>
              <p class="bj-card__desc">
                Déclarations, paiement et attestations fiscales.
              </p>
            </div>
          </article>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGrid" />
  </DocsSection>

  <DocsSection id="sec-card-link" :title="t('section-link')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-link')" />
    </p>
    <DocsPreview>
      <a
        href="#"
        class="bj-card bj-card--link"
        style="max-width: 20rem; text-decoration: none; color: inherit"
      >
        <div class="bj-card__body">
          <div class="bj-card__title">Portail des démarches</div>
          <p class="bj-card__desc">
            Accéder au catalogue : toute la surface de la carte est
            un lien unique.
          </p>
        </div>
      </a>
    </DocsPreview>
    <DocsCode :code="codeLink" />
  </DocsSection>

  <DocsSection
    id="sec-card-combo-modifiers"
    :title="t('section-combo-modifiers')"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-combo-modifiers')" />
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
        align-items: flex-start;
      "
    >
      <article class="bj-card bj-card--horizontal bj-card--flat">
        <div
          class="bj-card__img"
          style="background: #3d5a80"
          role="img"
          aria-label=""
        ></div>
        <div class="bj-card__body">
          <div class="bj-card__title">Horizontal + plat</div>
          <p class="bj-card__desc">
            Visuel à gauche, sans ombre ni bordure pleine.
          </p>
        </div>
      </article>
      <article
        class="bj-card bj-card--horizontal bj-card--highlight"
        style="max-width: 36rem"
      >
        <div
          class="bj-card__img"
          style="background: #5c4d3c"
          role="img"
          aria-label=""
        ></div>
        <div class="bj-card__body">
          <div class="bj-card__title">Horizontal + mise en avant</div>
          <p class="bj-card__desc">
            Bandeau d’accent à gauche sur une carte horizontale.
          </p>
        </div>
      </article>
      <article
        class="bj-card bj-card--flat bj-card--highlight"
        style="max-width: 22rem"
      >
        <div class="bj-card__body">
          <div class="bj-card__detail">À la une</div>
          <div class="bj-card__title">Plat + surligné</div>
          <p class="bj-card__desc">
            Sans relief de carte, avec bordure gauche colorée.
          </p>
        </div>
      </article>
      <article
        class="bj-card bj-card--horizontal bj-card--flat bj-card--highlight"
        style="max-width: 38rem"
      >
        <div
          class="bj-card__img"
          style="background: #2a6f4a"
          role="img"
          aria-label=""
        ></div>
        <div class="bj-card__body">
          <div class="bj-card__title">Triple modificateur</div>
          <p class="bj-card__desc">
            Horizontal, plat et highlight combinés.
          </p>
        </div>
      </article>
      <a
        href="#"
        class="bj-card bj-card--link bj-card--horizontal"
        style="
          max-width: 36rem;
          text-decoration: none;
          color: inherit;
        "
      >
        <div
          class="bj-card__img"
          style="background: #4a3728"
          role="img"
          aria-label=""
        ></div>
        <div class="bj-card__body">
          <div class="bj-card__title">Lien + horizontal</div>
          <p class="bj-card__desc">
            <code>bj-card--link</code> avec disposition horizontale.
          </p>
        </div>
      </a>
    </DocsPreview>
    <DocsCode :code="codeCombosCard" />
  </DocsSection>

  <DocsSection id="classes-card" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-card" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
