<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemples = `<div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v);">
  <button class="bj-btn">Libellé</button>
  <button class="bj-btn bj-btn--secondary">Libellé</button>
  <button class="bj-btn bj-btn--tertiary">Libellé</button>
  <button class="bj-btn bj-btn--accent">Libellé</button>
  <button class="bj-btn bj-btn--contrast">Libellé</button>
</div>`

const codeTailles = `<button class="bj-btn bj-btn--sm">Petit</button>
<button class="bj-btn">Par défaut</button>
<button class="bj-btn bj-btn--lg">Grand</button>
<button class="bj-btn bj-btn--full">Pleine largeur</button>`

const codeIcones = `<button class="bj-btn"><i class="ri-download-line"></i> Télécharger</button>
<button class="bj-btn">Suivant <i class="ri-arrow-right-line"></i></button>
<button class="bj-btn bj-btn--icon" aria-label="Rechercher"><i class="ri-search-line"></i></button>`

const codeGroupe = `<div class="bj-btn-group">
  <button class="bj-btn">Principal</button>
  <button class="bj-btn bj-btn--secondary">Secondaire</button>
  <button class="bj-btn bj-btn--tertiary">Annuler</button>
</div>`

const codeEtats = `<button class="bj-btn">Normal</button>
<button class="bj-btn" disabled>Désactivé</button>
<a class="bj-btn" href="#">Lien bouton</a>`

const propsRows = [
  {
    name: 'bj-btn',
    description:
      'Base du bouton ; variante primaire (vert institutionnel).',
  },
  {
    name: 'bj-btn--secondary',
    description: 'Fond transparent, bordure et texte d’action.',
  },
  {
    name: 'bj-btn--tertiary',
    description: 'Texte seul, fond discret au survol.',
  },
  {
    name: 'bj-btn--accent',
    description: 'Fond rouge Bénin pour une mise en avant ponctuelle.',
  },
  {
    name: 'bj-btn--contrast',
    description: 'Fond sombre et texte clair (contextes contrastés).',
  },
  { name: 'bj-btn--sm', description: 'Petite taille (padding et corps réduits).' },
  { name: 'bj-btn--lg', description: 'Grande taille.' },
  {
    name: 'bj-btn--icon',
    description:
      'Bouton carré pour une icône seule ; combinable avec bj-btn--sm ou bj-btn--lg pour ajuster le padding.',
  },
  { name: 'bj-btn--full', description: 'Largeur 100 % du conteneur parent.' },
  {
    name: 'bj-btn--disabled',
    description:
      'Apparence désactivée sur un élément non button ; utiliser avec aria-disabled="true" et gérer l’interaction en JavaScript si besoin.',
  },
  {
    name: 'bj-btn-group',
    description: 'Conteneur flex en ligne avec espacement entre boutons.',
  },
  {
    name: 'bj-btn-group--vertical',
    description: 'Empile les boutons du groupe en colonne.',
  },
  {
    name: 'bj-btn-group--inline-sm',
    description: 'Groupe avec un espacement réduit entre les boutons.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Bouton
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Le bouton est l’élément interactif par excellence : il déclenche
    une action (soumission, ouverture d’une fenêtre, confirmation,
    etc.). Il doit rester lisible, reconnaissable et cohérent avec le
    ton institutionnel du design système.
  </p>

  <DocsSection id="exemples-btn" title="Exemples">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <button type="button" class="bj-btn">Libellé</button>
      <button type="button" class="bj-btn bj-btn--secondary">
        Libellé
      </button>
      <button type="button" class="bj-btn bj-btn--tertiary">
        Libellé
      </button>
      <button type="button" class="bj-btn bj-btn--accent">
        Libellé
      </button>
      <button type="button" class="bj-btn bj-btn--contrast">
        Libellé
      </button>
    </DocsPreview>
    <DocsCode :code="codeExemples" />
  </DocsSection>

  <DocsSection id="tailles-btn" title="Tailles">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
        align-items: flex-start;
        width: 100%;
      "
    >
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: var(--bj-spacing-3v);
          align-items: center;
        "
      >
        <button type="button" class="bj-btn bj-btn--sm">Petit</button>
        <button type="button" class="bj-btn">Par défaut</button>
        <button type="button" class="bj-btn bj-btn--lg">Grand</button>
      </div>
      <div style="width: 100%; max-width: 22rem">
        <button type="button" class="bj-btn bj-btn--full">
          Pleine largeur
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTailles" />
  </DocsSection>

  <DocsSection id="icones-btn" title="Boutons avec icône">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <button type="button" class="bj-btn">
        <i class="ri-download-line" aria-hidden="true"></i>
        Télécharger
      </button>
      <button type="button" class="bj-btn">
        Suivant
        <i class="ri-arrow-right-line" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        class="bj-btn bj-btn--icon"
        aria-label="Rechercher"
      >
        <i class="ri-search-line" aria-hidden="true"></i>
      </button>
    </DocsPreview>
    <DocsCode :code="codeIcones" />
  </DocsSection>

  <DocsSection id="groupe-btn" title="Groupe de boutons">
    <DocsPreview>
      <div class="bj-btn-group">
        <button type="button" class="bj-btn">Principal</button>
        <button type="button" class="bj-btn bj-btn--secondary">
          Secondaire
        </button>
        <button type="button" class="bj-btn bj-btn--tertiary">
          Annuler
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroupe" />
  </DocsSection>

  <DocsSection id="etats-btn" title="États">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-5v);
      "
    >
      <div>
        <p
          class="bj-text-sm"
          style="
            margin: 0 0 var(--bj-spacing-2v);
            color: var(--bj-text-alt);
          "
        >
          Normal et survol - les effets au survol et à l’activation
          s’affichent sur les boutons actifs ci-dessous.
        </p>
        <div
          style="
            display: flex;
            flex-wrap: wrap;
            gap: var(--bj-spacing-3v);
            align-items: center;
          "
        >
          <button type="button" class="bj-btn">Normal</button>
          <button type="button" class="bj-btn bj-btn--secondary">
            Secondaire (survol)
          </button>
        </div>
      </div>
      <div>
        <p
          class="bj-text-sm"
          style="
            margin: 0 0 var(--bj-spacing-2v);
            color: var(--bj-text-alt);
          "
        >
          Désactivé
        </p>
        <button type="button" class="bj-btn" disabled>
          Désactivé
        </button>
      </div>
      <div>
        <p
          class="bj-text-sm"
          style="
            margin: 0 0 var(--bj-spacing-2v);
            color: var(--bj-text-alt);
          "
        >
          Lien stylé en bouton
        </p>
        <a class="bj-btn" href="#">Lien bouton</a>
      </div>
    </DocsPreview>
    <DocsCode :code="codeEtats" />
  </DocsSection>

  <DocsSection id="classes-btn" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-btn" title="Accessibilité">
    <DocsA11yNote>
      Utilisez un vrai <code>&lt;button&gt;</code> pour les actions
      dans la page (ouvrir une modale, soumettre un formulaire avec
      <code>type="submit"</code>, etc.) et un lien
      <code>&lt;a&gt;</code> avec <code>href</code> valide pour la
      navigation vers une autre URL. Pour désactiver un bouton
      natif, préférez l’attribut <code>disabled</code> : il retire
      l’élément de l’ordre de tabulation et annonce l’état aux
      technologies d’assistance. Les boutons icône seuls doivent
      exposer un nom accessible, en général via
      <code>aria-label</code> (et <code>aria-hidden="true"</code>
      sur l’icône décorative).
    </DocsA11yNote>
  </DocsSection>
</template>
