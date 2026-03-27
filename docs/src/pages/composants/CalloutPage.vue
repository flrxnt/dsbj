<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Mise en avant',
      desc:
        'Bloc éditorial : couleur de bordure (<code>default</code> sans modificateur, ou <code>bj-callout--green</code>, <code>--yellow</code>, <code>--red</code>), icône Remix optionnelle (<code>&lt;i class="bj-callout__icon …"&gt;</code>), titre (<code>&lt;p class="bj-callout__title"&gt;</code>), texte et emplacement <code>bj-callout__btn</code> pour le slot action (boutons).',
      'section-default': 'Couleur par défaut',
      'para-default':
        'Sans modificateur, la bordure gauche utilise la couleur d’action (vert institutionnel).',
      'section-exemple': 'Exemple complet',
      'section-action': 'Slot action (<code>bj-callout__btn</code>)',
      'para-action':
        'Placez un ou plusieurs boutons ou liens dans <code>bj-callout__btn</code> ; la zone n’apparaît que si le contenu est présent (équivalent du slot <code>action</code> en Vue).',
      'section-sans-titre': 'Sans titre',
      'para-sans-titre':
        'Omettez <code>bj-callout__title</code> : seuls icône, texte et action restent.',
      'section-icon-seul': 'Icône + texte',
      'section-variantes': 'Couleurs',
      'section-combo-color-action': 'Couleur × action',
      'para-combo':
        'Chaque couleur peut inclure un bloc <code>bj-callout__btn</code> pour un appel à l’action.',
      'section-color-icon-title-action':
        'Couleur × icône × titre × action',
      'para-color-icon-title-action':
        'Les trois modificateurs de bordure avec la même structure : <code>bj-callout__icon</code>, <code>bj-callout__title</code>, <code>bj-callout__text</code>, <code>bj-callout__btn</code>.',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-intro':
        'Modificateurs de bordure : <code>bj-callout--green</code>, <code>bj-callout--yellow</code>, <code>bj-callout--red</code>.',
      'prop-bj-callout':
        'Bloc avec fond alternatif et bordure gauche (vert action par défaut).',
      'prop-bj-callout__icon':
        'Icône Remix (<code>&lt;i&gt;</code>) au-dessus du titre.',
      'prop-bj-callout__title': 'Titre de section (<code>&lt;p&gt;</code>).',
      'prop-bj-callout__text': 'Paragraphe descriptif.',
      'prop-bj-callout__btn':
        'Conteneur pour le slot action Vue (<code>action</code>) ; en HTML statique utilisez <code>bj-callout__btn</code> (pas de classe <code>bj-callout__action</code>).',
      'prop-bj-callout--green': 'Bordure gauche vert Bénin.',
      'prop-bj-callout--yellow': 'Bordure jaune Bénin.',
      'prop-bj-callout--red': 'Bordure rouge Bénin.',
      'a11y-note':
        'Nommez la région avec <code>aria-labelledby</code> sur le titre lorsqu’un titre est présent. L’icône décorative doit être masquée aux technologies d’assistance (<code>aria-hidden="true"</code>). Le bouton d’action doit avoir un libellé explicite hors contexte si possible.',
    },
    en: {
      title: 'Callout',
      desc:
        'Editorial block: border colour (<code>default</code> with no modifier, or <code>bj-callout--green</code>, <code>--yellow</code>, <code>--red</code>), optional Remix icon (<code>&lt;i class="bj-callout__icon …"&gt;</code>), title (<code>&lt;p class="bj-callout__title"&gt;</code>), body text, and <code>bj-callout__btn</code> for the action slot (buttons).',
      'section-default': 'Default colour',
      'para-default':
        'With no colour modifier, the left border uses the institutional action green.',
      'section-exemple': 'Full example',
      'section-action': 'Action slot (<code>bj-callout__btn</code>)',
      'para-action':
        'Put one or more buttons or links inside <code>bj-callout__btn</code>; the block is only needed when you have actions (same as the Vue <code>action</code> slot).',
      'section-sans-titre': 'Without title',
      'para-sans-titre':
        'Omit <code>bj-callout__title</code>—icon, text, and action remain.',
      'section-icon-seul': 'Icon + text',
      'section-variantes': 'Colours',
      'section-combo-color-action': 'Colour × action',
      'para-combo':
        'Any colour variant can include a <code>bj-callout__btn</code> call-to-action.',
      'section-color-icon-title-action':
        'Colour × icon × title × action',
      'para-color-icon-title-action':
        'All three border modifiers with the same structure: <code>bj-callout__icon</code>, <code>bj-callout__title</code>, <code>bj-callout__text</code>, <code>bj-callout__btn</code>.',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-intro':
        'Border modifiers: <code>bj-callout--green</code>, <code>bj-callout--yellow</code>, <code>bj-callout--red</code>.',
      'prop-bj-callout':
        'Block with alternate background and left border (action green by default).',
      'prop-bj-callout__icon': 'Remix icon (<code>&lt;i&gt;</code>) above the title.',
      'prop-bj-callout__title': 'Section title (<code>&lt;p&gt;</code>).',
      'prop-bj-callout__text': 'Descriptive paragraph.',
      'prop-bj-callout__btn':
        'Wrapper for the Vue <code>action</code> slot; in static HTML use <code>bj-callout__btn</code> (there is no <code>bj-callout__action</code> class).',
      'prop-bj-callout--green': 'Left border Benin green.',
      'prop-bj-callout--yellow': 'Benin yellow border.',
      'prop-bj-callout--red': 'Benin red border.',
      'a11y-note':
        'Name the region with <code>aria-labelledby</code> on the title when a title exists. Decorative icons should be hidden from assistive tech (<code>aria-hidden="true"</code>). The action control should have a clear label out of context when possible.',
    },
  },
})

const codeDefault = `<div class="bj-callout" role="region" aria-labelledby="co-def">
  <p class="bj-callout__title" id="co-def">Titre</p>
  <p class="bj-callout__text">Texte avec bordure verte action par défaut.</p>
</div>`

const codeExemple = `<div class="bj-callout" role="region" aria-labelledby="co-title">
  <i class="bj-callout__icon ri-lightbulb-flash-line" aria-hidden="true"></i>
  <p class="bj-callout__title" id="co-title">Démarches en ligne</p>
  <p class="bj-callout__text">Plus de 200 services accessibles 24h/24.</p>
  <div class="bj-callout__btn">
    <a href="#" class="bj-btn bj-btn--secondary">Découvrir les services</a>
  </div>
</div>`

const codeActionSeul = `<div class="bj-callout bj-callout--green" role="region">
  <p class="bj-callout__text">Message court.</p>
  <div class="bj-callout__btn">
    <button type="button" class="bj-btn">Continuer</button>
  </div>
</div>`

const codeSansTitre = `<div class="bj-callout" role="region" aria-label="Information">
  <i class="bj-callout__icon ri-information-line" aria-hidden="true"></i>
  <p class="bj-callout__text">Bloc sans titre : utilisez <code>aria-label</code> sur le conteneur si besoin.</p>
</div>`

const codeVariantes = `<div class="bj-callout bj-callout--green" role="region">…</div>
<div class="bj-callout bj-callout--yellow" role="region">…</div>
<div class="bj-callout bj-callout--red" role="region">…</div>`

const codeCombo = `<div class="bj-callout bj-callout--yellow" role="region" aria-labelledby="co-y">
  <p class="bj-callout__title" id="co-y">Attention</p>
  <p class="bj-callout__text">Délai de traitement prolongé.</p>
  <div class="bj-callout__btn"><a href="#" class="bj-btn bj-btn--secondary">En savoir plus</a></div>
</div>`

const codeIconText = `<div class="bj-callout bj-callout--green" role="region" aria-labelledby="co-it">
  <i class="bj-callout__icon ri-checkbox-circle-line" aria-hidden="true"></i>
  <p class="bj-callout__title" id="co-it">Titre</p>
  <p class="bj-callout__text">Texte sous icône et titre.</p>
</div>`

const codeColorFullMatrix = `<!-- Vert -->
<div class="bj-callout bj-callout--green" role="region" aria-labelledby="g1">
  <i class="bj-callout__icon ri-leaf-line" aria-hidden="true"></i>
  <p class="bj-callout__title" id="g1">Titre vert</p>
  <p class="bj-callout__text">…</p>
  <div class="bj-callout__btn"><a href="#" class="bj-btn">Action</a></div>
</div>
<!-- Jaune / rouge : même schéma avec bj-callout--yellow / bj-callout--red -->`

const propsRows = computed(() => [
  {
    name: 'bj-callout',
    description: t('prop-bj-callout'),
  },
  {
    name: 'bj-callout__icon',
    description: t('prop-bj-callout__icon'),
  },
  {
    name: 'bj-callout__title',
    description: t('prop-bj-callout__title'),
  },
  {
    name: 'bj-callout__text',
    description: t('prop-bj-callout__text'),
  },
  {
    name: 'bj-callout__btn',
    description: t('prop-bj-callout__btn'),
  },
  {
    name: 'bj-callout--green',
    description: t('prop-bj-callout--green'),
  },
  {
    name: 'bj-callout--yellow',
    description: t('prop-bj-callout--yellow'),
  },
  {
    name: 'bj-callout--red',
    description: t('prop-bj-callout--red'),
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
    <span v-html="t('desc')" />
  </p>

  <DocsSection id="callout-default" :title="t('section-default')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-default')" />
    </p>
    <DocsPreview>
      <div class="bj-callout" role="region" aria-labelledby="doc-co-def">
        <p class="bj-callout__title" id="doc-co-def">
          Titre (défaut)
        </p>
        <p class="bj-callout__text">
          Texte avec bordure verte action par défaut.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDefault" />
  </DocsSection>

  <DocsSection id="exemple-callout" :title="t('section-exemple')">
    <DocsPreview>
      <div
        class="bj-callout"
        role="region"
        aria-labelledby="doc-co-title"
      >
        <i
          class="bj-callout__icon ri-lightbulb-flash-line"
          aria-hidden="true"
        ></i>
        <p class="bj-callout__title" id="doc-co-title">
          Démarches en ligne
        </p>
        <p class="bj-callout__text">
          Plus de 200 services sont accessibles 24h/24 depuis le
          portail national.
        </p>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn bj-btn--secondary"
            >Découvrir les services</a
          >
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="callout-action" :title="t('section-action')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-action')" />
    </p>
    <DocsPreview>
      <div class="bj-callout bj-callout--green" role="region">
        <p class="bj-callout__text">Message court.</p>
        <div class="bj-callout__btn">
          <button type="button" class="bj-btn">Continuer</button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeActionSeul" />
  </DocsSection>

  <DocsSection id="callout-sans-titre" :title="t('section-sans-titre')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-sans-titre')" />
    </p>
    <DocsPreview>
      <div
        class="bj-callout"
        role="region"
        aria-label="Information"
      >
        <i
          class="bj-callout__icon ri-information-line"
          aria-hidden="true"
        ></i>
        <p class="bj-callout__text">
          Bloc sans titre : utilisez <code>aria-label</code> sur le
          conteneur si besoin.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSansTitre" />
  </DocsSection>

  <DocsSection id="callout-icon-text" :title="t('section-icon-seul')">
    <DocsPreview>
      <div
        class="bj-callout bj-callout--green"
        role="region"
        aria-labelledby="doc-co-it"
      >
        <i
          class="bj-callout__icon ri-checkbox-circle-line"
          aria-hidden="true"
        ></i>
        <p class="bj-callout__title" id="doc-co-it">
          Icône et titre
        </p>
        <p class="bj-callout__text">
          Combinaison icône Remix, titre et texte.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIconText" />
  </DocsSection>

  <DocsSection id="variantes-callout" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-4v);
      "
      v-html="t('variantes-intro')"
    />
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div
        class="bj-callout bj-callout--green"
        role="region"
        aria-labelledby="doc-cog"
      >
        <p class="bj-callout__title" id="doc-cog">
          Variante verte
        </p>
        <p class="bj-callout__text">
          Pour les messages positifs ou liés à l’identité verte du
          Bénin.
        </p>
      </div>
      <div
        class="bj-callout bj-callout--yellow"
        role="region"
        aria-labelledby="doc-coy"
      >
        <p class="bj-callout__title" id="doc-coy">
          Variante jaune
        </p>
        <p class="bj-callout__text">
          Pour attirer l’attention sans niveau d’alerte critique.
        </p>
      </div>
      <div
        class="bj-callout bj-callout--red"
        role="region"
        aria-labelledby="doc-cor"
      >
        <p class="bj-callout__title" id="doc-cor">
          Variante rouge
        </p>
        <p class="bj-callout__text">
          Pour les messages forts ou les appels à l’action urgents.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="callout-combo" :title="t('section-combo-color-action')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-combo')" />
    </p>
    <DocsPreview>
      <div
        class="bj-callout bj-callout--yellow"
        role="region"
        aria-labelledby="doc-co-combo"
      >
        <p class="bj-callout__title" id="doc-co-combo">Attention</p>
        <p class="bj-callout__text">
          Délai de traitement prolongé pendant les travaux.
        </p>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn bj-btn--secondary"
            >En savoir plus</a
          >
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombo" />
  </DocsSection>

  <DocsSection
    id="callout-color-icon-matrix"
    :title="t('section-color-icon-title-action')"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-color-icon-title-action')" />
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div
        class="bj-callout bj-callout--green"
        role="region"
        aria-labelledby="doc-co-mg"
      >
        <i
          class="bj-callout__icon ri-leaf-line"
          aria-hidden="true"
        ></i>
        <p class="bj-callout__title" id="doc-co-mg">Écologie</p>
        <p class="bj-callout__text">
          Mesure prioritaire : vérifier les critères avant dépôt.
        </p>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn bj-btn--secondary">Consulter</a>
        </div>
      </div>
      <div
        class="bj-callout bj-callout--yellow"
        role="region"
        aria-labelledby="doc-co-my"
      >
        <i
          class="bj-callout__icon ri-time-line"
          aria-hidden="true"
        ></i>
        <p class="bj-callout__title" id="doc-co-my">Délais</p>
        <p class="bj-callout__text">
          Dépassement possible : anticipez les pièces manquantes.
        </p>
        <div class="bj-callout__btn">
          <button type="button" class="bj-btn bj-btn--tertiary">
            Voir le calendrier
          </button>
        </div>
      </div>
      <div
        class="bj-callout bj-callout--red"
        role="region"
        aria-labelledby="doc-co-mr"
      >
        <i
          class="bj-callout__icon ri-alarm-warning-line"
          aria-hidden="true"
        ></i>
        <p class="bj-callout__title" id="doc-co-mr">Urgence</p>
        <p class="bj-callout__text">
          Action requise avant la fin de la période légale.
        </p>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn">Corriger le dossier</a>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeColorFullMatrix" />
  </DocsSection>

  <DocsSection id="classes-callout" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-callout" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
