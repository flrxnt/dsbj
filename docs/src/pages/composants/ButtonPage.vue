<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bouton',
      desc:
        'Le bouton est l’élément interactif par excellence : il déclenche une action (soumission, ouverture d’une fenêtre, confirmation, etc.). Il doit rester lisible, reconnaissable et cohérent avec le ton institutionnel du design système.',
      'section-exemples': 'Exemples',
      'section-tailles': 'Tailles',
      'section-icones': 'Boutons avec icône',
      'section-groupe': 'Groupe de boutons',
      'section-etats': 'États',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'etats-hint-normal':
        'Normal et survol - les effets au survol et à l’activation s’affichent sur les boutons actifs ci-dessous.',
      'etats-hint-disabled': 'Désactivé',
      'etats-hint-lien': 'Lien stylé en bouton',
      'a11y-note':
        'Utilisez un vrai <code>&lt;button&gt;</code> pour les actions dans la page (ouvrir une modale, soumettre un formulaire avec <code>type="submit"</code>, etc.) et un lien <code>&lt;a&gt;</code> avec <code>href</code> valide pour la navigation vers une autre URL. Pour désactiver un bouton natif, préférez l’attribut <code>disabled</code> : il retire l’élément de l’ordre de tabulation et annonce l’état aux technologies d’assistance. Les boutons icône seuls doivent exposer un nom accessible, en général via <code>aria-label</code> (et <code>aria-hidden="true"</code> sur l’icône décorative).',
      'prop-bj-btn':
        'Base du bouton ; variante primaire (vert institutionnel).',
      'prop-bj-btn-secondary':
        'Fond transparent, bordure et texte d’action.',
      'prop-bj-btn-tertiary': 'Texte seul, fond discret au survol.',
      'prop-bj-btn-accent':
        'Fond rouge Bénin pour une mise en avant ponctuelle.',
      'prop-bj-btn-contrast': 'Fond sombre et texte clair (contextes contrastés).',
      'prop-bj-btn-sm': 'Petite taille (padding et corps réduits).',
      'prop-bj-btn-lg': 'Grande taille.',
      'prop-bj-btn-icon':
        'Bouton carré pour une icône seule ; combinable avec bj-btn--sm ou bj-btn--lg pour ajuster le padding.',
      'prop-bj-btn-full': 'Largeur 100 % du conteneur parent.',
      'prop-bj-btn-disabled':
        'Apparence désactivée sur un élément non button ; utiliser avec aria-disabled="true" et gérer l’interaction en JavaScript si besoin.',
      'prop-bj-btn-group': 'Conteneur flex en ligne avec espacement entre boutons.',
      'prop-bj-btn-group-vertical': 'Empile les boutons du groupe en colonne.',
      'prop-bj-btn-group-inline-sm':
        'Groupe avec un espacement réduit entre les boutons.',
      'prop-bj-btn-loading':
        'État de chargement : désactive le bouton et affiche un spinner animé à la place du texte.',
      'section-chargement': 'Chargement',
    },
    en: {
      title: 'Button',
      desc:
        'The button is the primary interactive control: it triggers an action (submit, open a dialog, confirm, etc.). It should stay readable, recognizable and aligned with the design system’s institutional tone.',
      'section-exemples': 'Examples',
      'section-tailles': 'Sizes',
      'section-icones': 'Buttons with icon',
      'section-groupe': 'Button group',
      'section-etats': 'States',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'etats-hint-normal':
        'Normal and hover — hover and active styles appear on the active buttons below.',
      'etats-hint-disabled': 'Disabled',
      'etats-hint-lien': 'Link styled as a button',
      'a11y-note':
        'Use a real <code>&lt;button&gt;</code> for in-page actions (open a modal, submit a form with <code>type="submit"</code>, etc.) and an <code>&lt;a&gt;</code> link with a valid <code>href</code> for navigation to another URL. To disable a native button, prefer the <code>disabled</code> attribute: it removes the element from tab order and exposes state to assistive tech. Icon-only buttons need an accessible name, usually <code>aria-label</code> (and <code>aria-hidden="true"</code> on decorative icons).',
      'prop-bj-btn': 'Button base; primary variant (institutional green).',
      'prop-bj-btn-secondary': 'Transparent background, border and action text.',
      'prop-bj-btn-tertiary': 'Text only, subtle background on hover.',
      'prop-bj-btn-accent': 'Benin red background for occasional emphasis.',
      'prop-bj-btn-contrast': 'Dark background and light text (high-contrast contexts).',
      'prop-bj-btn-sm': 'Small size (reduced padding and type).',
      'prop-bj-btn-lg': 'Large size.',
      'prop-bj-btn-icon':
        'Square button for icon only; combine with bj-btn--sm or bj-btn--lg to adjust padding.',
      'prop-bj-btn-full': '100% width of the parent container.',
      'prop-bj-btn-disabled':
        'Disabled look on a non-button element; use with aria-disabled="true" and handle interaction in JavaScript if needed.',
      'prop-bj-btn-group': 'Inline flex container with spacing between buttons.',
      'prop-bj-btn-group-vertical': 'Stacks group buttons in a column.',
      'prop-bj-btn-group-inline-sm': 'Group with tighter spacing between buttons.',
      'prop-bj-btn-loading':
        'Loading state: disables the button and displays an animated spinner instead of text.',
      'section-chargement': 'Loading',
    },
  },
})

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

const codeChargement = `<button class="bj-btn bj-btn--loading" aria-busy="true">Chargement</button>
<button class="bj-btn bj-btn--secondary bj-btn--loading" aria-busy="true">Chargement</button>
<button class="bj-btn bj-btn--tertiary bj-btn--loading" aria-busy="true">Chargement</button>
<button class="bj-btn bj-btn--accent bj-btn--loading" aria-busy="true">Chargement</button>
<button class="bj-btn bj-btn--contrast bj-btn--loading" aria-busy="true">Chargement</button>
<button class="bj-btn bj-btn--sm bj-btn--loading" aria-busy="true">Petit</button>
<button class="bj-btn bj-btn--lg bj-btn--loading" aria-busy="true">Grand</button>`

const codeEtats = `<button class="bj-btn">Normal</button>
<button class="bj-btn" disabled>Désactivé</button>
<a class="bj-btn" href="#">Lien bouton</a>`

const propsRows = computed(() => [
  {
    name: 'bj-btn',
    description: t('prop-bj-btn'),
  },
  {
    name: 'bj-btn--secondary',
    description: t('prop-bj-btn-secondary'),
  },
  {
    name: 'bj-btn--tertiary',
    description: t('prop-bj-btn-tertiary'),
  },
  {
    name: 'bj-btn--accent',
    description: t('prop-bj-btn-accent'),
  },
  {
    name: 'bj-btn--contrast',
    description: t('prop-bj-btn-contrast'),
  },
  { name: 'bj-btn--sm', description: t('prop-bj-btn-sm') },
  { name: 'bj-btn--lg', description: t('prop-bj-btn-lg') },
  {
    name: 'bj-btn--icon',
    description: t('prop-bj-btn-icon'),
  },
  { name: 'bj-btn--full', description: t('prop-bj-btn-full') },
  {
    name: 'bj-btn--disabled',
    description: t('prop-bj-btn-disabled'),
  },
  {
    name: 'bj-btn--loading',
    description: t('prop-bj-btn-loading'),
  },
  {
    name: 'bj-btn-group',
    description: t('prop-bj-btn-group'),
  },
  {
    name: 'bj-btn-group--vertical',
    description: t('prop-bj-btn-group-vertical'),
  },
  {
    name: 'bj-btn-group--inline-sm',
    description: t('prop-bj-btn-group-inline-sm'),
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

  <DocsSection id="exemples-btn" :title="t('section-exemples')">
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

  <DocsSection id="tailles-btn" :title="t('section-tailles')">
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

  <DocsSection id="icones-btn" :title="t('section-icones')">
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

  <DocsSection id="groupe-btn" :title="t('section-groupe')">
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

  <DocsSection id="chargement-btn" :title="t('section-chargement')">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <button type="button" class="bj-btn bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--secondary bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--tertiary bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--accent bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--contrast bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--sm bj-btn--loading" aria-busy="true">Petit</button>
      <button type="button" class="bj-btn bj-btn--lg bj-btn--loading" aria-busy="true">Grand</button>
    </DocsPreview>
    <DocsCode :code="codeChargement" />
  </DocsSection>

  <DocsSection id="etats-btn" :title="t('section-etats')">
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
          {{ t('etats-hint-normal') }}
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
          {{ t('etats-hint-disabled') }}
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
          {{ t('etats-hint-lien') }}
        </p>
        <a class="bj-btn" href="#">Lien bouton</a>
      </div>
    </DocsPreview>
    <DocsCode :code="codeEtats" />
  </DocsSection>

  <DocsSection id="classes-btn" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-btn" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
