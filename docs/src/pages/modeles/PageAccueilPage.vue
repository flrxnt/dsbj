<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { pageAccueilCode } from './snippets/pageAccueilCode'
</script>

<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    Modèle de page d’accueil
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    La page d’accueil d’un site gouvernemental oriente les usagers vers les
    informations et services essentiels. Elle combine identité de l’État (bande
    tricolore et en-tête), message d’accueil clair, actualités ou annonces,
    accès rapides par thématiques, et un bloc de mise en avant pour une
    démarche ou une campagne prioritaire.
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    Structure des sections
  </h2>
  <ul
    class="bj-content"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    <li>
      <strong>En-tête (Header)</strong> - Composant
      <code>bj-header</code> avec bande tricolore automatique, marque « République
      du Bénin », titre du service ou du ministère, et navigation principale.
    </li>
    <li>
      <strong>Hero</strong> - Zone d’introduction pleine largeur : titre
      d’accueil, court texte institutionnel et appels à l’action principaux.
    </li>
    <li>
      <strong>Actualités</strong> - Grille <code>bj-cards</code> de cartes
      <code>bj-card</code> pour communiqués, nouvelles ou avis aux citoyens.
    </li>
    <li>
      <strong>Services</strong> - Grille <code>bj-tiles</code> pour les liens
      vers démarches en ligne, annuaires et outils fréquents.
    </li>
    <li>
      <strong>Mise en avant</strong> - Bloc <code>bj-callout</code> pour une
      information urgente, une consultation publique ou une campagne nationale.
    </li>
    <li>
      <strong>Pied de page (Footer)</strong> - Composant
      <code>bj-footer</code> avec liens légaux et mention de licence étatique.
    </li>
  </ul>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    Aperçu du gabarit
  </h2>
  <p
    class="bj-text-md"
    style="margin-bottom: var(--bj-spacing-4v); max-width: 40rem"
  >
    Exemple visuel condensé des blocs centraux (sans dupliquer tout le code
    d’en-tête) :
  </p>

  <DocsPreview style="padding: var(--bj-spacing-4v)">
    <div
      class="bj-bg-contrast"
      style="
        padding: var(--bj-spacing-8v) var(--bj-spacing-4v);
        border-radius: var(--bj-radius-sm);
        margin-bottom: var(--bj-spacing-4v);
      "
    >
      <div class="bj-text-center">
        <h2
          class="bj-display-md bj-text-inverted"
          style="margin-bottom: var(--bj-spacing-2v)"
        >
          Bienvenue sur le portail
        </h2>
        <p
          class="bj-text-md"
          style="
            color: var(--bj-color-gris-850);
            max-width: 32rem;
            margin: 0 auto var(--bj-spacing-4v);
          "
        >
          Vos services publics en ligne, informations officielles et démarches
          simplifiées.
        </p>
        <div class="bj-btn-group" style="justify-content: center">
          <a
            href="#"
            class="bj-btn"
            style="
              background-color: var(--bj-color-vert-benin-main-491);
            "
            >Démarches</a
          >
          <a
            href="#"
            class="bj-btn bj-btn--secondary"
            style="color: #fff; border-color: #fff"
            >Contact</a
          >
        </div>
      </div>
    </div>
    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">
      Actualités
    </h3>
    <div class="bj-cards" style="margin-bottom: var(--bj-spacing-6v)">
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Communiqué</p>
          <h3 class="bj-card__title">
            Publication d’un rapport annuel
          </h3>
          <p class="bj-card__desc">
            Synthèse des indicateurs et perspectives pour l’année à venir.
          </p>
        </div>
      </article>
      <article class="bj-card">
        <div class="bj-card__body">
          <p class="bj-card__detail">Avis</p>
          <h3 class="bj-card__title">Consultation publique ouverte</h3>
          <p class="bj-card__desc">
            Participez avant le 30 du mois via le formulaire en ligne.
          </p>
        </div>
      </article>
    </div>
    <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-3v)">
      Accès rapides
    </h3>
    <div class="bj-tiles" style="margin-bottom: var(--bj-spacing-6v)">
      <a href="#" class="bj-tile">
        <i
          class="ri-file-list-3-line bj-tile__icon"
          aria-hidden="true"
        ></i>
        <span class="bj-tile__title">Télécharger un formulaire</span>
        <span class="bj-tile__desc">Modèles et notices</span>
      </a>
      <a href="#" class="bj-tile">
        <i
          class="ri-calendar-event-line bj-tile__icon"
          aria-hidden="true"
        ></i>
        <span class="bj-tile__title">Prendre rendez-vous</span>
        <span class="bj-tile__desc">Guichets et services</span>
      </a>
      <a href="#" class="bj-tile">
        <i
          class="ri-question-answer-line bj-tile__icon"
          aria-hidden="true"
        ></i>
        <span class="bj-tile__title">Foire aux questions</span>
        <span class="bj-tile__desc"
          >Réponses aux questions fréquentes</span
        >
      </a>
    </div>
    <div class="bj-callout bj-callout--green">
      <i
        class="ri-megaphone-line bj-callout__icon"
        aria-hidden="true"
      ></i>
      <h3 class="bj-callout__title">Campagne nationale</h3>
      <p class="bj-callout__text">
        Informations officielles et modalités de participation sont disponibles
        sur la page dédiée.
      </p>
      <div class="bj-callout__btn">
        <a href="#" class="bj-btn">En savoir plus</a>
      </div>
    </div>
  </DocsPreview>

  <DocsCode :code="pageAccueilCode" />
</template>
