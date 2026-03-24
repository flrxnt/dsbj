<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeSimple = `<div class="bj-accordion">
  <button class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="true" aria-controls="acc-body">Titre de l'accordéon</button>
  <div id="acc-body" class="bj-accordion__body" data-bj-expanded><p>Contenu de l'accordéon. Peut contenir du texte, des listes, des images ou tout autre contenu HTML.</p></div>
</div>`

const codeGroupe = `<div data-bj-accordion-group>
  <div class="bj-accordion">
    <button class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="grp1">Question 1</button>
    <div id="grp1" class="bj-accordion__body"><p>Réponse 1...</p></div>
  </div>
  <div class="bj-accordion">...</div>
  <div class="bj-accordion">...</div>
</div>`

const propsRows = [
  {
    name: 'bj-accordions',
    description:
      'Conteneur de liste (bordure, rayons) - optionnel mais recommandé pour un groupe.',
  },
  { name: 'bj-accordion', description: 'Élément d’accordéon (une paire bouton + panneau).' },
  {
    name: 'bj-accordion__btn + data-bj-accordion-btn',
    description:
      'Bouton d’en-tête ; aria-expanded et aria-controls sont requis.',
  },
  {
    name: 'bj-accordion__body',
    description:
      'Panneau de contenu ; ouvert si data-bj-expanded est présent (mis à jour par le script).',
  },
  {
    name: 'data-bj-accordion-group',
    description:
      'Comportement exclusif : un seul panneau ouvert à la fois dans le groupe.',
  },
  {
    name: 'bj-accordion--expanded',
    description: 'Variante statique possible sur l’item (sans script).',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Accordéon
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Bloc repliable pour organiser des réponses détaillées sans
    surcharger la page ; un groupe exclusif limite à une section
    ouverte à la fois.
  </p>

  <DocsSection id="sec-simple" title="Accordéon simple">
    <DocsPreview>
      <div class="bj-accordion">
        <button
          type="button"
          class="bj-accordion__btn"
          data-bj-accordion-btn
          aria-expanded="true"
          aria-controls="doc-acc-body"
        >
          Titre de l’accordéon
        </button>
        <div
          id="doc-acc-body"
          class="bj-accordion__body"
          data-bj-expanded
        >
          <p class="bj-text-sm">
            Contenu de l’accordéon. Peut contenir du texte, des
            listes, des images ou tout autre contenu HTML.
          </p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSimple" />
  </DocsSection>

  <DocsSection id="sec-groupe" title="Groupe exclusif">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Placez plusieurs accordéons dans un élément porteur de
      <code>data-bj-accordion-group</code> : l’ouverture d’un panneau
      referme les autres. La classe <code>bj-accordions</code> encadre
      visuellement la liste.
    </p>
    <DocsPreview>
      <div class="bj-accordions" data-bj-accordion-group>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="true"
            aria-controls="doc-faq-grp1"
            id="doc-faq-btn1"
          >
            Comment obtenir un extrait du casier judiciaire en ligne ?
          </button>
          <div
            id="doc-faq-grp1"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="doc-faq-btn1"
            data-bj-expanded
          >
            <p class="bj-text-sm">
              Connectez-vous au portail du service concerné avec votre
              compte citoyen, complétez le formulaire et joignez une
              copie de votre pièce d’identité. Le document signé peut
              être retiré en guichet ou reçu par voie électronique
              selon les options proposées.
            </p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="false"
            aria-controls="doc-faq-grp2"
            id="doc-faq-btn2"
          >
            Quels frais s’appliquent à une demande de passeport ?
          </button>
          <div
            id="doc-faq-grp2"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="doc-faq-btn2"
          >
            <p class="bj-text-sm">
              Les tarifs en vigueur sont affichés sur le site du
              ministère et peuvent varier selon la durée de validité
              et l’urgence. Le paiement s’effectue aux guichets
              habilités ou via les canaux indiqués lors de la prise de
              rendez-vous.
            </p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="false"
            aria-controls="doc-faq-grp3"
            id="doc-faq-btn3"
          >
            Où suivre l’état de ma demande d’acte d’état civil ?
          </button>
          <div
            id="doc-faq-grp3"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="doc-faq-btn3"
          >
            <p class="bj-text-sm">
              Après dépôt, un numéro de suivi vous est communiqué.
              Saisissez-le dans la rubrique «&nbsp;Mes
              démarches&nbsp;» du portail national ou contactez la
              mairie ou l’officier d’état civil compétent en indiquant
              ce numéro.
            </p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroupe" />
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable
      :headers="['Classe / attribut', 'Description']"
      :rows="propsRows"
    />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Le bouton doit refléter l’état du panneau avec
      <code>aria-expanded</code> et pointer vers le panneau via
      <code>aria-controls</code> et un <code>id</code> unique sur le
      corps. Les touches <kbd>Entrée</kbd> et
      <kbd>Espace</kbd> activent le bouton natif et basculent
      l’accordéon. Pour les groupes, un
      <code>role="region"</code> sur le panneau avec
      <code>aria-labelledby</code> vers le bouton améliore l’annonce
      dans les lecteurs d’écran.
    </DocsA11yNote>
  </DocsSection>
</template>
