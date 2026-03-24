<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<div class="bj-callout" role="region" aria-labelledby="co-title">
  <div class="bj-callout__icon" aria-hidden="true">…</div>
  <div class="bj-callout__title" id="co-title">…</div>
  <p class="bj-callout__text">…</p>
  <div class="bj-callout__btn"><a href="#" class="bj-btn bj-btn--secondary">…</a></div>
</div>`

const codeVariantes = `<div class="bj-callout bj-callout--green">…</div>
<div class="bj-callout bj-callout--yellow">…</div>
<div class="bj-callout bj-callout--red">…</div>`

const propsRows = [
  {
    name: 'bj-callout',
    description:
      'Bloc avec fond alternatif et bordure gauche (vert action par défaut).',
  },
  { name: 'bj-callout__icon', description: 'Icône ou pictogramme au-dessus du titre.' },
  { name: 'bj-callout__title', description: 'Titre de section.' },
  { name: 'bj-callout__text', description: 'Paragraphe descriptif.' },
  { name: 'bj-callout__btn', description: 'Conteneur pour un ou plusieurs boutons.' },
  { name: 'bj-callout--green', description: 'Bordure gauche vert Bénin.' },
  { name: 'bj-callout--yellow', description: 'Bordure jaune Bénin.' },
  { name: 'bj-callout--red', description: 'Bordure rouge Bénin.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Mise en avant
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Bloc éditorial pour attirer l’attention sur une démarche, un
    service ou une campagne : icône optionnelle, titre, texte et
    bouton d’action.
  </p>

  <DocsSection id="exemple-callout" title="Exemple">
    <DocsPreview>
      <div
        class="bj-callout"
        role="region"
        aria-labelledby="doc-co-title"
      >
        <div class="bj-callout__icon" aria-hidden="true">
          <i
            class="ri-lightbulb-flash-line bj-icon bj-icon--xl bj-icon--action"
          ></i>
        </div>
        <div class="bj-callout__title" id="doc-co-title">
          Démarches en ligne
        </div>
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

  <DocsSection id="variantes-callout" title="Variantes">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-4v);
      "
    >
      Couleurs de bordure gauche alignées sur la palette nationale :
      <code>bj-callout--green</code>, <code>bj-callout--yellow</code>,
      <code>bj-callout--red</code>.
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
        aria-labelledby="doc-cog"
      >
        <div class="bj-callout__title" id="doc-cog">
          Variante verte
        </div>
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
        <div class="bj-callout__title" id="doc-coy">
          Variante jaune
        </div>
        <p class="bj-callout__text">
          Pour attirer l’attention sans niveau d’alerte critique.
        </p>
      </div>
      <div
        class="bj-callout bj-callout--red"
        role="region"
        aria-labelledby="doc-cor"
      >
        <div class="bj-callout__title" id="doc-cor">
          Variante rouge
        </div>
        <p class="bj-callout__text">
          Pour les messages forts ou les appels à l’action urgents.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-callout" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-callout" title="Accessibilité">
    <DocsA11yNote>
      Nommez la région avec <code>aria-labelledby</code> sur le
      titre. L’icône décorative doit être masquée aux technologies
      d’assistance. Le bouton d’action doit avoir un libellé
      explicite hors contexte si possible.
    </DocsA11yNote>
  </DocsSection>
</template>
