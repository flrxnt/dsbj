<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import { pageFormulaireCode } from './snippets/pageFormulaireCode'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Modèle de page formulaire',
      'intro-1':
        'Les démarches administratives en ligne s’appuient sur des formulaires clairs, étape par étape lorsque la procédure est longue. Le composant ',
      'intro-2':
        ' matérialise la progression ; les champs sont regroupés par groupes accessibles (',
      'intro-3':
        ') et les actions principales sont regroupées dans un ',
      'intro-4': '.',
      'section-structure': 'Structure des sections',
      'struct-li-1-strong': 'En-tête et fil d’Ariane',
      'struct-li-1': 'Repères constants pour l’usager.',
      'struct-li-2-strong': 'Indicateur d’étapes',
      'struct-li-2-after': ' pour les formulaires multi-écrans.',
      'struct-li-3-strong': 'Titre et introduction',
      'struct-li-3':
        'Objet de la démarche, délais et documents requis.',
      'struct-li-4-strong': 'Champs',
      'struct-li-4':
        'Saisie texte, liste déroulante, cases à cocher, boutons radio, pièce jointe.',
      'struct-li-5-strong': 'Actions',
      'struct-li-5': 'Soumission, enregistrement brouillon, annulation.',
      'struct-li-6-strong': 'Pied de page',
      'struct-li-6': 'Liens d’aide et mentions légales.',
      'section-preview': 'Aperçu du gabarit',
    },
    en: {
      title: 'Form page template',
      'intro-1':
        'Online administrative procedures rely on clear forms, step by step when the process is long. The ',
      'intro-2':
        ' component shows progress; fields are grouped in accessible groups (',
      'intro-3':
        ') and primary actions are grouped in a ',
      'intro-4': '.',
      'section-structure': 'Section structure',
      'struct-li-1-strong': 'Header and breadcrumb',
      'struct-li-1': 'Consistent landmarks for the user.',
      'struct-li-2-strong': 'Step indicator',
      'struct-li-2-after': ' for multi-screen forms.',
      'struct-li-3-strong': 'Title and introduction',
      'struct-li-3':
        'Purpose of the procedure, deadlines and required documents.',
      'struct-li-4-strong': 'Fields',
      'struct-li-4':
        'Text input, dropdown, checkboxes, radio buttons, attachment.',
      'struct-li-5-strong': 'Actions',
      'struct-li-5': 'Submit, save draft, cancel.',
      'struct-li-6-strong': 'Footer',
      'struct-li-6': 'Help links and legal notices.',
      'section-preview': 'Template preview',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    {{ t('intro-1') }}<code>bj-stepper</code>{{ t('intro-2')
    }}<code>bj-input-group</code>, <code>bj-select-group</code>,
    <code>bj-checkbox-group</code>, <code>bj-radio-group</code>,
    <code>bj-upload-group</code>{{ t('intro-3')
    }}<code>bj-btn-group</code>{{ t('intro-4') }}
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('section-structure') }}
  </h2>
  <ul
    class="bj-content"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    <li>
      <strong>{{ t('struct-li-1-strong') }}</strong> -
      {{ t('struct-li-1') }}
    </li>
    <li>
      <strong>{{ t('struct-li-2-strong') }}</strong> -
      <code>bj-stepper</code>{{ t('struct-li-2-after') }}
    </li>
    <li>
      <strong>{{ t('struct-li-3-strong') }}</strong> -
      {{ t('struct-li-3') }}
    </li>
    <li>
      <strong>{{ t('struct-li-4-strong') }}</strong> -
      {{ t('struct-li-4') }}
    </li>
    <li>
      <strong>{{ t('struct-li-5-strong') }}</strong> -
      {{ t('struct-li-5') }}
    </li>
    <li>
      <strong>{{ t('struct-li-6-strong') }}</strong> -
      {{ t('struct-li-6') }}
    </li>
  </ul>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('section-preview') }}
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
