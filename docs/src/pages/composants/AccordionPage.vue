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
      title: 'Accordéon',
      desc:
        'Bloc repliable pour organiser des réponses détaillées sans surcharger la page ; un groupe exclusif limite à une section ouverte à la fois.',
      'section-simple': 'Accordéon simple',
      'section-groupe': 'Groupe exclusif',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'group-intro-1':
        'Placez plusieurs accordéons dans un élément porteur de',
      'group-intro-2':
        ': l’ouverture d’un panneau referme les autres. La classe',
      'group-intro-3': 'encadre visuellement la liste.',
      'th-class-attr': 'Classe / attribut',
      'th-description': 'Description',
      'prop-bj-accordions':
        'Conteneur de liste (bordure, rayons) - optionnel mais recommandé pour un groupe.',
      'prop-bj-accordion':
        'Élément d’accordéon (une paire bouton + panneau).',
      'prop-bj-accordion-btn':
        'Bouton d’en-tête ; aria-expanded et aria-controls sont requis.',
      'prop-bj-accordion-body':
        'Panneau de contenu ; ouvert si data-bj-expanded est présent (mis à jour par le script).',
      'prop-data-bj-accordion-group':
        'Comportement exclusif : un seul panneau ouvert à la fois dans le groupe.',
      'prop-bj-accordion-expanded':
        'Variante statique possible sur l’item (sans script).',
      'a11y-1': 'Le bouton doit refléter l’état du panneau avec',
      'a11y-2': 'et pointer vers le panneau via',
      'a11y-3': 'et un',
      'a11y-4': 'unique sur le corps. Les touches',
      'a11y-5': 'et',
      'a11y-6':
        'activent le bouton natif et basculent l’accordéon. Pour les groupes, un',
      'a11y-7': 'sur le panneau avec',
      'a11y-8':
        'vers le bouton améliore l’annonce dans les lecteurs d’écran.',
      'kbd-enter': 'Entrée',
      'kbd-space': 'Espace',
      'section-static': 'État ouvert sans script',
      'static-intro':
        'Sans JavaScript, ajoutez la classe modificateur sur l’item et laissez le panneau ouvert avec',
      'section-group-open': 'Groupe avec premier panneau ouvert',
      'group-open-intro':
        'Combinez',
      'group-open-intro-2':
        'sur l’item initialement déployé avec',
      'group-open-intro-3':
        'sur le panneau : le script conserve le comportement exclusif tout en affichant une réponse par défaut.',
    },
    en: {
      title: 'Accordion',
      desc:
        'Collapsible block for detailed answers without cluttering the page; an exclusive group keeps only one section open at a time.',
      'section-simple': 'Simple accordion',
      'section-groupe': 'Exclusive group',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'group-intro-1': 'Place several accordions inside an element with',
      'group-intro-2':
        ': opening one panel closes the others. The',
      'group-intro-3': 'class visually frames the list.',
      'th-class-attr': 'Class / attribute',
      'th-description': 'Description',
      'prop-bj-accordions':
        'List container (border, radii)—optional but recommended for a group.',
      'prop-bj-accordion': 'Accordion item (one button + panel pair).',
      'prop-bj-accordion-btn':
        'Header button; aria-expanded and aria-controls are required.',
      'prop-bj-accordion-body':
        'Content panel; open when data-bj-expanded is present (updated by the script).',
      'prop-data-bj-accordion-group':
        'Exclusive behaviour: only one panel open at a time in the group.',
      'prop-bj-accordion-expanded':
        'Possible static variant on the item (without script).',
      'a11y-1': 'The button must reflect the panel state with',
      'a11y-2': 'and reference the panel via',
      'a11y-3': 'and a unique',
      'a11y-4': 'on the body. The',
      'a11y-5': 'and',
      'a11y-6':
        'keys activate the native button and toggle the accordion. For groups,',
      'a11y-7': 'on the panel with',
      'a11y-8': 'pointing to the button improves screen reader announcements.',
      'kbd-enter': 'Enter',
      'kbd-space': 'Space',
      'section-static': 'Open state without JavaScript',
      'static-intro':
        'Without JavaScript, add the modifier class on the item and keep the panel open with',
      'section-group-open': 'Group with first panel open',
      'group-open-intro': 'Combine',
      'group-open-intro-2': 'on the initially expanded item with',
      'group-open-intro-3':
        'on the panel: the script keeps exclusive behaviour while showing a default answer.',
    },
  },
})

const codeSimple = `<div class="bj-accordion">
  <button class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="true" aria-controls="acc-body">Titre de l'accordéon</button>
  <div id="acc-body" class="bj-accordion__body" data-bj-expanded><p>Contenu de l'accordéon. Peut contenir du texte, des listes, des images ou tout autre contenu HTML.</p></div>
</div>`

const codeGroupe = `<div class="bj-accordions" data-bj-accordion-group>
  <div class="bj-accordion">
    <button type="button" class="bj-accordion__btn" id="btn-grp1" data-bj-accordion-btn aria-expanded="false" aria-controls="grp1">Question 1</button>
    <div id="grp1" class="bj-accordion__body" role="region" aria-labelledby="btn-grp1"><p>Réponse 1…</p></div>
  </div>
  <div class="bj-accordion">…</div>
</div>`

const codeStaticExpanded = `<div class="bj-accordion bj-accordion--expanded">
  <button type="button" id="btn-static" class="bj-accordion__btn" aria-expanded="true" aria-controls="acc-static">Titre</button>
  <div id="acc-static" class="bj-accordion__body" data-bj-expanded role="region" aria-labelledby="btn-static">
    <p>Contenu visible sans script.</p>
  </div>
</div>`

const codeGroupFirstOpen = `<div class="bj-accordions" data-bj-accordion-group>
  <div class="bj-accordion bj-accordion--expanded">
    <button type="button" class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="true" aria-controls="g1">Déployé par défaut</button>
    <div id="g1" class="bj-accordion__body" data-bj-expanded role="region">…</div>
  </div>
  <div class="bj-accordion">
    <button type="button" class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="g2">Fermé</button>
    <div id="g2" class="bj-accordion__body" role="region">…</div>
  </div>
</div>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  {
    name: 'bj-accordions',
    description: t('prop-bj-accordions'),
  },
  { name: 'bj-accordion', description: t('prop-bj-accordion') },
  {
    name: 'bj-accordion__btn + data-bj-accordion-btn',
    description: t('prop-bj-accordion-btn'),
  },
  {
    name: 'bj-accordion__body',
    description: t('prop-bj-accordion-body'),
  },
  {
    name: 'data-bj-accordion-group',
    description: t('prop-data-bj-accordion-group'),
  },
  {
    name: 'bj-accordion--expanded',
    description: t('prop-bj-accordion-expanded'),
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

  <DocsSection id="sec-simple" :title="t('section-simple')">
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

  <DocsSection id="sec-groupe" :title="t('section-groupe')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('group-intro-1') }}
      <code>data-bj-accordion-group</code>
      {{ t('group-intro-2') }}
      <code>bj-accordions</code>
      {{ t('group-intro-3') }}
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

  <DocsSection id="sec-groupe-ouvert" :title="t('section-group-open')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('group-open-intro') }}
      <code>bj-accordion--expanded</code>
      {{ t('group-open-intro-2') }}
      <code>data-bj-expanded</code>
      {{ t('group-open-intro-3') }}
    </p>
    <DocsPreview>
      <div class="bj-accordions" data-bj-accordion-group>
        <div class="bj-accordion bj-accordion--expanded">
          <button
            type="button"
            class="bj-accordion__btn"
            id="doc-grp-open-btn1"
            data-bj-accordion-btn
            aria-expanded="true"
            aria-controls="doc-grp-open-1"
          >
            Section ouverte au chargement
          </button>
          <div
            id="doc-grp-open-1"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="doc-grp-open-btn1"
            data-bj-expanded
          >
            <p class="bj-text-sm">
              Utile pour une FAQ où la première réponse doit être visible tout
              de suite tout en gardant un seul panneau ouvert.
            </p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            id="doc-grp-open-btn2"
            data-bj-accordion-btn
            aria-expanded="false"
            aria-controls="doc-grp-open-2"
          >
            Autre question
          </button>
          <div
            id="doc-grp-open-2"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="doc-grp-open-btn2"
          >
            <p class="bj-text-sm">Contenu masqué jusqu’au clic.</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroupFirstOpen" />
  </DocsSection>

  <DocsSection id="sec-statique" :title="t('section-static')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('static-intro') }}
      <code>data-bj-expanded</code>
      .
    </p>
    <DocsPreview>
      <div class="bj-accordion bj-accordion--expanded">
        <button
          type="button"
          id="doc-acc-static-btn"
          class="bj-accordion__btn"
          aria-expanded="true"
          aria-controls="doc-acc-static-body"
        >
          Section toujours déployée (démo)
        </button>
        <div
          id="doc-acc-static-body"
          class="bj-accordion__body"
          data-bj-expanded
          role="region"
          aria-labelledby="doc-acc-static-btn"
        >
          <p class="bj-text-sm">
            Utile pour du contenu statique ou en attendant l’hydratation du
            script accordéon.
          </p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStaticExpanded" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <code>aria-expanded</code>
      {{ t('a11y-2') }}
      <code>aria-controls</code>
      {{ t('a11y-3') }}
      <code>id</code>
      {{ t('a11y-4') }}
      <kbd>{{ t('kbd-enter') }}</kbd>
      {{ t('a11y-5') }}
      <kbd>{{ t('kbd-space') }}</kbd>
      {{ t('a11y-6') }}
      <code>role="region"</code>
      {{ t('a11y-7') }}
      <code>aria-labelledby</code>
      {{ t('a11y-8') }}
    </DocsA11yNote>
  </DocsSection>
</template>
