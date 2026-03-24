<script setup lang="ts">
import DocsCard from '@docs/components/DocsCard.vue'
</script>

<template>
  <h1
    class="bj-h1"
    style="
      margin-top: var(--bj-spacing-4v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Composants
  </h1>
  <p
    class="bj-text-lg"
    style="
      max-width: 44rem;
      color: var(--bj-text-alt);
      margin-bottom: var(--bj-spacing-2v);
    "
  >
    Bibliothèque de 42 composants HTML/CSS du Design Système du Bénin :
    navigation, formulaires, contenu, éléments interactifs et blocs
    réglementaires. Chaque fiche détaille les variantes, les classes et
    les bonnes pratiques d’accessibilité.
  </p>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Navigation
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/header"
      icon="ri-layout-top-line"
      title="Header"
      description="En-tête institutionnel avec marque, service et menu principal."
    />
    <DocsCard
      to="/composants/footer"
      icon="ri-layout-bottom-line"
      title="Footer"
      description="Pied de page avec liens et mentions légales."
    />
    <DocsCard
      to="/composants/navigation"
      icon="ri-menu-line"
      title="Navigation"
      description="Menus et listes de liens de navigation."
    />
    <DocsCard
      to="/composants/breadcrumb"
      icon="ri-git-branch-line"
      title="Breadcrumb"
      description="Fil d’Ariane pour situer la page dans l’arborescence."
    />
    <DocsCard
      to="/composants/sidemenu"
      icon="ri-side-bar-line"
      title="Sidemenu"
      description="Menu latéral pour sous-sections et pages liées."
    />
    <DocsCard
      to="/composants/skiplink"
      icon="ri-skip-forward-line"
      title="Skiplink"
      description="Lien d’évitement vers le contenu principal."
    />
    <DocsCard
      to="/composants/pagination"
      icon="ri-pages-line"
      title="Pagination"
      description="Parcours de listes paginées."
    />
    <DocsCard
      to="/composants/summary"
      icon="ri-list-unordered"
      title="Sommaire"
      description="Sommaire de page ou d’article avec ancres."
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Base
  </h2>
  <div class="docs-cards">
    <RouterLink to="/composants/logo" class="docs-card">
      <div class="docs-card__preview">
        <div class="bj-logo bj-logo--lg">
          <p>République<br />du Bénin</p>
        </div>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">Logo</div>
        <div class="docs-card__desc">
          Signature République du Bénin avec bande tricolore.
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/button" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-btn bj-btn--sm">Bouton</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">Bouton</div>
        <div class="docs-card__desc">
          Actions primaires, secondaires et tertiaires.
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/link" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-link">Lien</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">Lien</div>
        <div class="docs-card__desc">
          Liens de texte, tailles et liens externes.
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/badge" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-badge bj-badge--new">Nouveau</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">Badge</div>
        <div class="docs-card__desc">
          Pastilles de statut et d’étiquette courte.
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/tag" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-tag bj-tag--action">Tag</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">Tag</div>
        <div class="docs-card__desc">
          Étiquettes cliquables, filtres et listes de tags.
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Formulaires
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/input"
      icon="ri-input-method-line"
      title="Champ de saisie"
      description="Champs texte, zones et états de validation."
    />
    <DocsCard
      to="/composants/select"
      icon="ri-list-check-2"
      title="Liste déroulante"
      description="Sélecteur natif stylé."
    />
    <DocsCard
      to="/composants/checkbox"
      icon="ri-checkbox-line"
      title="Case à cocher"
      description="Choix multiples et cases indéterminées."
    />
    <DocsCard
      to="/composants/radio"
      icon="ri-radio-button-line"
      title="Bouton radio"
      description="Choix exclusif dans un groupe."
    />
    <DocsCard
      to="/composants/toggle"
      icon="ri-toggle-line"
      title="Interrupteur"
      description="Activation binaire on/off."
    />
    <DocsCard
      to="/composants/upload"
      icon="ri-upload-cloud-line"
      title="Téléversement"
      description="Envoi de fichiers et pièces jointes."
    />
    <DocsCard
      to="/composants/search"
      icon="ri-search-line"
      title="Recherche"
      description="Champ et bouton de recherche."
    />
    <DocsCard
      to="/composants/datepicker"
      icon="ri-calendar-line"
      title="Sélecteur de date"
      description="Calendrier intégré au format jj/mm/aaaa."
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Contenu
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/alert"
      icon="ri-alarm-warning-line"
      title="Alerte"
      description="Messages contextuels dans le flux de page."
    />
    <DocsCard
      to="/composants/notice"
      icon="ri-notification-3-line"
      title="Bandeau"
      description="Annonces en tête de page ou de section."
    />
    <DocsCard
      to="/composants/callout"
      icon="ri-megaphone-line"
      title="Mise en avant"
      description="Bloc d’information ou d’appel à l’action."
    />
    <DocsCard
      to="/composants/highlight"
      icon="ri-double-quotes-l"
      title="Mise en exergue"
      description="Paragraphe ou extrait mis en valeur."
    />
    <DocsCard
      to="/composants/quote"
      icon="ri-chat-quote-line"
      title="Citation"
      description="Citation avec auteur et source."
    />
    <DocsCard
      to="/composants/card"
      icon="ri-layout-4-line"
      title="Carte"
      description="Cartes média, liens et grilles de cartes."
    />
    <DocsCard
      to="/composants/tile"
      icon="ri-apps-2-line"
      title="Tuile"
      description="Accès rapide avec icône ou image."
    />
    <DocsCard
      to="/composants/table"
      icon="ri-table-line"
      title="Tableau"
      description="Tableaux de données accessibles."
    />
    <DocsCard
      to="/composants/content"
      icon="ri-article-line"
      title="Contenu éditorial"
      description="Typographie et blocs pour articles et pages."
    />
    <DocsCard
      to="/composants/banner"
      icon="ri-slideshow-line"
      title="Bannière"
      description="Section hero avec image de fond, titre et appel à l'action."
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Interactifs
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/accordion"
      icon="ri-arrow-down-s-line"
      title="Accordéon"
      description="Sections repliables."
    />
    <DocsCard
      to="/composants/tab"
      icon="ri-layout-column-line"
      title="Onglet"
      description="Panneaux accessibles par onglets."
    />
    <DocsCard
      to="/composants/modal"
      icon="ri-window-line"
      title="Modale"
      description="Fenêtres dialog et focus piégé."
    />
    <DocsCard
      to="/composants/tooltip"
      icon="ri-chat-1-line"
      title="Infobulle"
      description="Aide contextuelle au survol ou au focus."
    />
    <DocsCard
      to="/composants/stepper"
      icon="ri-footprint-line"
      title="Indicateur d’étapes"
      description="Parcours multi-étapes et formulaires."
    />
    <DocsCard
      to="/composants/toast"
      icon="ri-notification-4-line"
      title="Notification toast"
      description="Messages éphémères de confirmation ou d'alerte."
    />
    <DocsCard
      to="/composants/dropdown"
      icon="ri-arrow-down-s-fill"
      title="Menu déroulant"
      description="Menu contextuel d'actions déclenché par un bouton."
    />
    <DocsCard
      to="/composants/marquee"
      icon="ri-text-direction-l"
      title="Bandeau défilant"
      description="Annonces en défilement continu avec pause."
    />
    <DocsCard
      to="/composants/gallery"
      icon="ri-image-2-line"
      title="Galerie d'images"
      description="Grille d'images avec visionneuse plein écran."
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    Réglementaire
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/consent"
      icon="ri-shield-check-line"
      title="Consentement"
      description="Bandeau cookies et choix utilisateur."
    />
  </div>
</template>
