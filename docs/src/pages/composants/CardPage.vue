<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

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

const propsRows = [
  { name: 'bj-card', description: 'Carte verticale avec bordure et fond surélevé.' },
  {
    name: 'bj-card__img',
    description: 'Zone visuelle pleine largeur, ratio 16:9 (image ou fond).',
  },
  { name: 'bj-card__body', description: 'Zone principale (détail, titre, description).' },
  { name: 'bj-card__detail', description: 'Ligne de métadonnée en capitales.' },
  { name: 'bj-card__title', description: 'Titre de la carte.' },
  { name: 'bj-card__desc', description: 'Texte descriptif.' },
  { name: 'bj-card__footer', description: 'Barre sous le corps (date, liens, actions).' },
  {
    name: 'bj-card__start / bj-card__end',
    description: 'Alignement horizontal dans le footer.',
  },
  { name: 'bj-card--horizontal', description: 'Disposition visuel + contenu côte à côte.' },
  { name: 'bj-card--flat', description: 'Sans bordure ni ombre, fond transparent.' },
  { name: 'bj-card--highlight', description: 'Bordure gauche d’accent (couleur d’action).' },
  {
    name: 'bj-card--link',
    description:
      'Sur un lien (balise a), carte interactive avec ombre au survol.',
  },
  {
    name: 'bj-cards',
    description:
      'Grille auto-fill de cartes (alternative à la grille 12 colonnes).',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Carte
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Conteneur pour actualités, services ou fiches administratives :
    visuel 16:9, métadonnée optionnelle, titre, texte et pied de page
    pour date ou actions. Combinez les modificateurs pour
    l’orientation, le relief et la mise en avant.
  </p>

  <DocsSection id="sec-card-default" title="Carte par défaut">
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

  <DocsSection id="sec-card-horizontal" title="Carte horizontale">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <code>bj-card--horizontal</code> place le visuel à gauche et le
      contenu à droite - utile pour listes de résultats ou encarts
      larges.
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

  <DocsSection id="sec-card-flat" title="Carte sans bordure">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <code>bj-card--flat</code> retire bordure et fond : à utiliser
      sur une page déjà structurée (panneau, colonne avec fond).
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

  <DocsSection id="sec-card-highlight" title="Carte avec mise en avant">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <code>bj-card--highlight</code> ajoute une bordure gauche
      colorée pour signaler une offre prioritaire ou une action
      recommandée.
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

  <DocsSection id="sec-card-grid" title="Grille de cartes">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      Trois cartes sur une ligne desktop avec
      <code>bj-grid-row</code> et <code>bj-col-4</code> (se
      réorganisent sur petits écrans).
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

  <DocsSection id="classes-card" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-card" title="Accessibilité">
    <DocsA11yNote>
      Les visuels décoratifs doivent avoir un
      <code>role="img"</code> avec <code>aria-label</code> vide ou
      un <code>alt</code> vide sur une vraie image. Si le bloc
      apporte une information, décrivez-la dans le label ou
      l’attribut <code>alt</code>. Pour une carte entièrement
      cliquable (<code>bj-card--link</code>), l’intitulé visible
      doit suffire comme nom de lien. Respectez la hiérarchie des
      titres : un seul <code>h1</code> par page - utilisez
      <code>h2</code> ou <code>h3</code> dans les cartes selon le
      contexte.
    </DocsA11yNote>
  </DocsSection>
</template>
