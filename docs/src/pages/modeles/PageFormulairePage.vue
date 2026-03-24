<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { pageFormulaireCode } from './snippets/pageFormulaireCode'
</script>

<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    Modèle de page formulaire
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    Les démarches administratives en ligne s’appuient sur des formulaires
    clairs, étape par étape lorsque la procédure est longue. Le composant
    <code>bj-stepper</code> matérialise la progression ; les champs sont
    regroupés par groupes accessibles (<code>bj-input-group</code>,
    <code>bj-select-group</code>, <code>bj-checkbox-group</code>,
    <code>bj-radio-group</code>, <code>bj-upload-group</code>) et les actions
    principales sont regroupées dans un <code>bj-btn-group</code>.
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    Structure des sections
  </h2>
  <ul
    class="bj-content"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    <li>
      <strong>En-tête et fil d’Ariane</strong> - Repères constants pour
      l’usager.
    </li>
    <li>
      <strong>Indicateur d’étapes</strong> - <code>bj-stepper</code> pour les
      formulaires multi-écrans.
    </li>
    <li>
      <strong>Titre et introduction</strong> - Objet de la démarche, délais et
      documents requis.
    </li>
    <li>
      <strong>Champs</strong> - Saisie texte, liste déroulante, cases à cocher,
      boutons radio, pièce jointe.
    </li>
    <li>
      <strong>Actions</strong> - Soumission, enregistrement brouillon,
      annulation.
    </li>
    <li>
      <strong>Pied de page</strong> - Liens d’aide et mentions légales.
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
          <a class="bj-breadcrumb__link" href="#">Démarches</a>
        </li>
        <li class="bj-breadcrumb__item" aria-current="page">
          Demande d’attestation
        </li>
      </ol>
    </nav>
    <div class="bj-stepper" style="margin-bottom: var(--bj-spacing-6v)">
      <p class="bj-stepper__header">Étape 2 sur 3</p>
      <h2 class="bj-stepper__title">Votre situation</h2>
      <div class="bj-stepper__steps" role="presentation">
        <span class="bj-stepper__step bj-stepper__step--done"></span>
        <span class="bj-stepper__step bj-stepper__step--current"></span>
        <span class="bj-stepper__step"></span>
      </div>
      <p class="bj-stepper__detail">
        Complétez les informations demandées avant de joindre les
        justificatifs.
      </p>
    </div>
    <form action="#" method="post" novalidate>
      <div class="bj-input-group">
        <label class="bj-label" for="demo-nom">Nom complet</label>
        <input
          class="bj-input"
          type="text"
          id="demo-nom"
          name="nom"
          autocomplete="name"
          placeholder="Nom et prénom"
        />
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="demo-commune">Commune</label>
        <select class="bj-select" id="demo-commune" name="commune">
          <option value="">Sélectionner…</option>
          <option value="cotonou">Cotonou</option>
          <option value="porto">Porto-Novo</option>
        </select>
      </div>
      <fieldset class="bj-checkbox-group">
        <legend class="bj-checkbox-group__legend">
          Documents déjà fournis
        </legend>
        <label class="bj-checkbox">
          <input type="checkbox" name="doc_id" value="1" />
          <span class="bj-checkbox__label"
            >Copie de la pièce d’identité</span
          >
        </label>
      </fieldset>
      <fieldset class="bj-radio-group">
        <legend class="bj-radio-group__legend">Type de demande</legend>
        <label class="bj-radio">
          <input type="radio" name="type_demande" value="nouvelle" />
          <span class="bj-radio__label">Nouvelle demande</span>
        </label>
        <label class="bj-radio">
          <input
            type="radio"
            name="type_demande"
            value="renouvellement"
          />
          <span class="bj-radio__label">Renouvellement</span>
        </label>
      </fieldset>
      <div class="bj-upload-group">
        <span class="bj-label" id="demo-upload-lbl"
          >Justificatif de domicile</span
        >
        <label
          class="bj-upload"
          style="position: relative"
          aria-labelledby="demo-upload-lbl"
        >
          <input
            type="file"
            name="justificatif"
            accept=".pdf,.jpg,.jpeg,.png"
            aria-labelledby="demo-upload-lbl"
          />
          <i
            class="ri-upload-cloud-2-line bj-upload__icon"
            aria-hidden="true"
          ></i>
          <span class="bj-upload__text"
            >Glissez un fichier ou cliquez pour parcourir</span
          >
          <span class="bj-upload__hint"
            >PDF ou image - 5 Mo maximum</span
          >
        </label>
      </div>
      <div
        class="bj-btn-group"
        style="margin-top: var(--bj-spacing-4v)"
      >
        <button type="submit" class="bj-btn">Continuer</button>
        <button type="button" class="bj-btn bj-btn--secondary">
          Enregistrer le brouillon
        </button>
      </div>
    </form>
  </DocsPreview>

  <DocsCode :code="pageFormulaireCode" />
</template>
