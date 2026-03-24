<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { pageArticleCode } from './snippets/pageArticleCode'
</script>

<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    Modèle de page article
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    Les pages de contenu (textes réglementaires, communiqués, fiches
    explicatives) privilégient la lisibilité et la hiérarchie de l’information.
    Le fil d’Ariane situe l’usager dans le site ; le corps de page utilise la
    zone de prose <code>bj-content</code> ; la colonne latérale regroupe le
    sommaire des titres et les liens vers des pages connexes du même service.
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    Structure des sections
  </h2>
  <ul
    class="bj-content"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    <li>
      <strong>En-tête</strong> - Identique aux autres pages :
      <code>bj-header</code> avec navigation principale.
    </li>
    <li>
      <strong>Fil d’Ariane</strong> - <code>bj-breadcrumb</code> depuis l’accueil
      jusqu’au titre courant.
    </li>
    <li>
      <strong>Article</strong> - Titre, méta-informations (date, service), puis
      <code>bj-content</code> pour le texte riche (titres, listes, tableaux).
    </li>
    <li>
      <strong>Sommaire</strong> - <code>bj-summary</code> avec ancres vers les
      intertitres de l’article.
    </li>
    <li>
      <strong>Pages liées</strong> - <code>bj-sidemenu</code> pour la navigation
      contextuelle (rubrique, dossier thématique).
    </li>
    <li>
      <strong>Pied de page</strong> - <code>bj-footer</code> institutionnel.
    </li>
  </ul>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    Aperçu du gabarit
  </h2>
  <DocsPreview style="padding: var(--bj-spacing-4v)">
    <nav
      class="bj-breadcrumb"
      aria-label="Exemple fil d'Ariane"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <ol class="bj-breadcrumb__list">
        <li class="bj-breadcrumb__item">
          <a class="bj-breadcrumb__link" href="#">Accueil</a>
        </li>
        <li class="bj-breadcrumb__item">
          <a class="bj-breadcrumb__link" href="#">Publications</a>
        </li>
        <li class="bj-breadcrumb__item" aria-current="page">
          Note de service
        </li>
      </ol>
    </nav>
    <div class="bj-grid-row bj-grid-row--gutters">
      <div class="bj-col-12 bj-col-lg-8">
        <article>
          <header style="margin-bottom: var(--bj-spacing-4v)">
            <h2
              class="bj-h2"
              style="margin-bottom: var(--bj-spacing-2v)"
            >
              Note de service n° 2025-04
            </h2>
            <p class="bj-text-sm" style="color: var(--bj-text-mention)">
              Publié le 12 mars 2025 - Direction générale
            </p>
          </header>
          <div class="bj-content">
            <h3 id="demo-contexte">Contexte</h3>
            <p>
              Le présent document fixe les modalités de mise en œuvre
              applicables aux services déconcentrés.
            </p>
            <h3 id="demo-dispositions">Dispositions</h3>
            <p>
              Les agents concernés doivent respecter le calendrier officiel et
              conserver les traces des décisions.
            </p>
          </div>
        </article>
      </div>
      <div class="bj-col-12 bj-col-lg-4">
        <nav
          class="bj-summary"
          aria-label="Sommaire"
          style="margin-bottom: var(--bj-spacing-4v)"
        >
          <p class="bj-summary__title">Sommaire</p>
          <div class="bj-summary__list">
            <a class="bj-summary__link" href="#demo-contexte"
              >Contexte</a
            >
            <a class="bj-summary__link" href="#demo-dispositions"
              >Dispositions</a
            >
          </div>
        </nav>
        <nav class="bj-sidemenu" aria-label="Dans cette rubrique">
          <p class="bj-sidemenu__title">Publications</p>
          <ul class="bj-sidemenu__list">
            <li class="bj-sidemenu__item">
              <a
                class="bj-sidemenu__link bj-sidemenu__link--active"
                href="#"
                aria-current="page"
                >Note de service</a
              >
            </li>
            <li class="bj-sidemenu__item">
              <a class="bj-sidemenu__link" href="#">Circulaires</a>
            </li>
            <li class="bj-sidemenu__item">
              <a class="bj-sidemenu__link" href="#">Rapports annuels</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </DocsPreview>

  <DocsCode :code="pageArticleCode" />
</template>
