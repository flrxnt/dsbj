<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjButton',
      desc: 'Composant Vue réactif pour le bouton DSBJ. Encapsule les classes .bj-btn avec des props typées.',
      'section-usage': 'Utilisation',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-props': 'Props',
      'prop-variant': 'Variante visuelle du bouton.',
      'prop-size': 'Taille du bouton.',
      'prop-icon': 'Bouton carré pour icône seule.',
      'prop-full': 'Largeur 100% du conteneur.',
      'prop-disabled': 'Désactive le bouton.',
      'prop-loading': 'Affiche un spinner et désactive le bouton.',
      'prop-tag': 'Élément HTML rendu (button ou a).',
      'section-loading': 'Chargement',
      'section-variantes-tailles': 'Variantes × tailles',
      'section-icon-button': 'Bouton icône',
      'section-full-width': 'Pleine largeur',
      'section-disabled': 'Désactivé',
      'section-link-button': 'Lien bouton',
      'section-full-combo': 'Combinaison complète',
      'section-slot': 'Slot par défaut',
      'section-events': 'Événements',
      'slot-desc':
        'Le contenu du bouton passe par le slot par défaut (texte, icônes, ou les deux).',
      'events-desc':
        'Les écouteurs natifs (ex. <code>{\'@\'}click</code>) sont appliqués à l’élément racine (<code>&lt;button&gt;</code> ou <code>&lt;a&gt;</code>) via l’héritage des attributs Vue 3.',
      'label-primary': 'Primaire',
      'label-secondary': 'Secondaire',
      'label-tertiary': 'Tertiaire',
      'label-accent': 'Accent',
      'label-contrast': 'Contraste',
      'label-sm': 'sm',
      'label-md': 'md',
      'label-lg': 'lg',
    },
    en: {
      title: 'BjButton',
      desc: 'Reactive Vue component for the DSBJ button. Wraps .bj-btn classes with typed props.',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-props': 'Props',
      'section-loading': 'Loading',
      'prop-variant': 'Visual variant of the button.',
      'prop-size': 'Button size.',
      'prop-icon': 'Square button for icon only.',
      'prop-full': '100% width of the container.',
      'prop-disabled': 'Disables the button.',
      'prop-loading': 'Shows a spinner and disables the button.',
      'prop-tag': 'Rendered HTML element (button or a).',
      'section-variantes-tailles': 'Variants × sizes',
      'section-icon-button': 'Icon button',
      'section-full-width': 'Full width',
      'section-disabled': 'Disabled',
      'section-link-button': 'Link button',
      'section-full-combo': 'Full combination',
      'section-slot': 'Default slot',
      'section-events': 'Events',
      'slot-desc':
        'Button content goes in the default slot (text, icons, or both).',
      'events-desc':
        'Native listeners (e.g. <code>{\'@\'}click</code>) are forwarded to the root element (<code>&lt;button&gt;</code> or <code>&lt;a&gt;</code>) via Vue 3 attribute fallthrough.',
      'label-primary': 'Primary',
      'label-secondary': 'Secondary',
      'label-tertiary': 'Tertiary',
      'label-accent': 'Accent',
      'label-contrast': 'Contrast',
      'label-sm': 'sm',
      'label-md': 'md',
      'label-lg': 'lg',
    },
  },
})

const codeUsage = `<script setup>
import { BjButton } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjButton>Valider</BjButton>
  <BjButton variant="secondary">Annuler</BjButton>
  <BjButton variant="tertiary">Retour</BjButton>
</template>`

const codeVariants = `<BjButton variant="primary">Primaire</BjButton>
<BjButton variant="secondary">Secondaire</BjButton>
<BjButton variant="tertiary">Tertiaire</BjButton>
<BjButton variant="accent">Accent</BjButton>
<BjButton variant="contrast">Contraste</BjButton>`

const codeSizes = `<BjButton size="sm">Petit</BjButton>
<BjButton>Par défaut</BjButton>
<BjButton size="lg">Grand</BjButton>`

const codeVariantesTailles = `<!-- Primaire -->
<BjButton variant="primary" size="sm">Primaire sm</BjButton>
<BjButton variant="primary">Primaire md</BjButton>
<BjButton variant="primary" size="lg">Primaire lg</BjButton>
<!-- Secondaire -->
<BjButton variant="secondary" size="sm">Secondaire sm</BjButton>
<BjButton variant="secondary">Secondaire md</BjButton>
<BjButton variant="secondary" size="lg">Secondaire lg</BjButton>
<!-- Tertiaire -->
<BjButton variant="tertiary" size="sm">Tertiaire sm</BjButton>
<BjButton variant="tertiary">Tertiaire md</BjButton>
<BjButton variant="tertiary" size="lg">Tertiaire lg</BjButton>
<!-- Accent -->
<BjButton variant="accent" size="sm">Accent sm</BjButton>
<BjButton variant="accent">Accent md</BjButton>
<BjButton variant="accent" size="lg">Accent lg</BjButton>
<!-- Contraste -->
<BjButton variant="contrast" size="sm">Contraste sm</BjButton>
<BjButton variant="contrast">Contraste md</BjButton>
<BjButton variant="contrast" size="lg">Contraste lg</BjButton>`

const codeIconButtons = `<BjButton icon variant="primary" size="sm" aria-label="Rechercher sm">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="primary" aria-label="Rechercher md">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="primary" size="lg" aria-label="Rechercher lg">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="secondary" size="sm" aria-label="Secondary sm">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="secondary" aria-label="Secondary md">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="secondary" size="lg" aria-label="Secondary lg">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="tertiary" size="sm" aria-label="Tertiary sm">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="tertiary" aria-label="Tertiary md">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="tertiary" size="lg" aria-label="Tertiary lg">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="accent" size="sm" aria-label="Accent sm">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="accent" aria-label="Accent md">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="accent" size="lg" aria-label="Accent lg">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="contrast" size="sm" aria-label="Contrast sm">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="contrast" aria-label="Contrast md">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>
<BjButton icon variant="contrast" size="lg" aria-label="Contrast lg">
  <i class="ri-search-line" aria-hidden="true" />
</BjButton>`

const codeFullWidth = `<BjButton variant="primary" :full="true">Primaire pleine largeur</BjButton>
<BjButton variant="secondary" :full="true">Secondaire pleine largeur</BjButton>
<BjButton variant="tertiary" :full="true">Tertiaire pleine largeur</BjButton>
<BjButton variant="accent" :full="true">Accent pleine largeur</BjButton>
<BjButton variant="contrast" :full="true">Contraste pleine largeur</BjButton>`

const codeDisabled = `<BjButton variant="primary" :disabled="true">Primaire</BjButton>
<BjButton variant="secondary" :disabled="true">Secondaire</BjButton>
<BjButton variant="tertiary" :disabled="true">Tertiaire</BjButton>
<BjButton variant="accent" :disabled="true">Accent</BjButton>
<BjButton variant="contrast" :disabled="true">Contraste</BjButton>`

const codeLinkButton = `<BjButton tag="a" href="#" variant="primary">Primaire</BjButton>
<BjButton tag="a" href="#" variant="secondary">Secondaire</BjButton>
<BjButton tag="a" href="#" variant="tertiary">Tertiaire</BjButton>
<BjButton tag="a" href="#" variant="accent">Accent</BjButton>
<BjButton tag="a" href="#" variant="contrast">Contraste</BjButton>`

const codeLoading = `<BjButton :loading="true">Envoi en cours</BjButton>
<BjButton variant="secondary" :loading="true">Chargement</BjButton>
<BjButton variant="tertiary" :loading="true">Patientez</BjButton>
<BjButton variant="accent" :loading="true">Accent</BjButton>
<BjButton variant="contrast" :loading="true">Contraste</BjButton>
<BjButton size="sm" :loading="true">Petit</BjButton>
<BjButton size="lg" :loading="true">Grand</BjButton>`

const codeFullCombo = `<BjButton
  variant="accent"
  size="lg"
  icon
  :loading="true"
  aria-label="Envoi en cours"
>
  <i class="ri-send-plane-line" aria-hidden="true" />
</BjButton>`

const codeSlot = `<BjButton variant="secondary">
  <i class="ri-download-line" aria-hidden="true" />
  Télécharger
</BjButton>
<BjButton variant="tertiary">
  Suivant
  <i class="ri-arrow-right-line" aria-hidden="true" />
</BjButton>`

const codeEvents = `<BjButton type="button" @click="onSave">Enregistrer</BjButton>
<BjButton tag="a" href="/compte" @click="onNav">Mon compte</BjButton>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'full', description: t('prop-full') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'loading', description: t('prop-loading') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-btn-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn">Primaire</button>
      <button type="button" class="bj-btn bj-btn--secondary">Secondaire</button>
      <button type="button" class="bj-btn bj-btn--tertiary">Tertiaire</button>
      <button type="button" class="bj-btn bj-btn--accent">Accent</button>
      <button type="button" class="bj-btn bj-btn--contrast">Contraste</button>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn bj-btn--sm">Petit</button>
      <button type="button" class="bj-btn">Par défaut</button>
      <button type="button" class="bj-btn bj-btn--lg">Grand</button>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-variantes-tailles" :title="t('section-variantes-tailles')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: var(--bj-spacing-3v);
        align-items: center;
        justify-content: start;
      "
    >
      <template v-for="row in ['primary', 'secondary', 'tertiary', 'accent', 'contrast']" :key="row">
        <button
          v-for="sz in ['sm', 'md', 'lg']"
          :key="`${row}-${sz}`"
          type="button"
          :class="[
            'bj-btn',
            row !== 'primary' && `bj-btn--${row}`,
            sz !== 'md' && `bj-btn--${sz}`,
          ]"
        >
          {{ t(`label-${row}`) }} {{ t(`label-${sz}`) }}
        </button>
      </template>
    </DocsPreview>
    <DocsCode :code="codeVariantesTailles" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-icon" :title="t('section-icon-button')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <template v-for="row in ['primary', 'secondary', 'tertiary', 'accent', 'contrast']" :key="`i-${row}`">
        <button
          v-for="sz in ['sm', 'md', 'lg']"
          :key="`${row}-i-${sz}`"
          type="button"
          :class="[
            'bj-btn',
            'bj-btn--icon',
            row !== 'primary' && `bj-btn--${row}`,
            sz !== 'md' && `bj-btn--${sz}`,
          ]"
          aria-label="search"
        >
          <i class="ri-search-line" aria-hidden="true" />
        </button>
      </template>
    </DocsPreview>
    <DocsCode :code="codeIconButtons" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-full" :title="t('section-full-width')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); max-width: 24rem">
      <button type="button" class="bj-btn bj-btn--full">Primaire pleine largeur</button>
      <button type="button" class="bj-btn bj-btn--secondary bj-btn--full">Secondaire pleine largeur</button>
      <button type="button" class="bj-btn bj-btn--tertiary bj-btn--full">Tertiaire pleine largeur</button>
      <button type="button" class="bj-btn bj-btn--accent bj-btn--full">Accent pleine largeur</button>
      <button type="button" class="bj-btn bj-btn--contrast bj-btn--full">Contraste pleine largeur</button>
    </DocsPreview>
    <DocsCode :code="codeFullWidth" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-disabled" :title="t('section-disabled')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn" disabled>Primaire</button>
      <button type="button" class="bj-btn bj-btn--secondary" disabled>Secondaire</button>
      <button type="button" class="bj-btn bj-btn--tertiary" disabled>Tertiaire</button>
      <button type="button" class="bj-btn bj-btn--accent" disabled>Accent</button>
      <button type="button" class="bj-btn bj-btn--contrast" disabled>Contraste</button>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-link" :title="t('section-link-button')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-btn" @click.prevent>Primaire</a>
      <a href="#" class="bj-btn bj-btn--secondary" @click.prevent>Secondaire</a>
      <a href="#" class="bj-btn bj-btn--tertiary" @click.prevent>Tertiaire</a>
      <a href="#" class="bj-btn bj-btn--accent" @click.prevent>Accent</a>
      <a href="#" class="bj-btn bj-btn--contrast" @click.prevent>Contraste</a>
    </DocsPreview>
    <DocsCode :code="codeLinkButton" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-loading" :title="t('section-loading')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn bj-btn--loading" aria-busy="true">Envoi en cours</button>
      <button type="button" class="bj-btn bj-btn--secondary bj-btn--loading" aria-busy="true">Chargement</button>
      <button type="button" class="bj-btn bj-btn--tertiary bj-btn--loading" aria-busy="true">Patientez</button>
      <button type="button" class="bj-btn bj-btn--accent bj-btn--loading" aria-busy="true">Accent</button>
      <button type="button" class="bj-btn bj-btn--contrast bj-btn--loading" aria-busy="true">Contraste</button>
      <button type="button" class="bj-btn bj-btn--sm bj-btn--loading" aria-busy="true">Petit</button>
      <button type="button" class="bj-btn bj-btn--lg bj-btn--loading" aria-busy="true">Grand</button>
    </DocsPreview>
    <DocsCode :code="codeLoading" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-combo" :title="t('section-full-combo')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button
        type="button"
        class="bj-btn bj-btn--accent bj-btn--lg bj-btn--icon bj-btn--loading"
        aria-busy="true"
        aria-label="Envoi en cours"
      >
        <i class="ri-send-plane-line" aria-hidden="true" />
      </button>
    </DocsPreview>
    <DocsCode :code="codeFullCombo" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-desc')" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn bj-btn--secondary">
        <i class="ri-download-line" aria-hidden="true" />
        Télécharger
      </button>
      <button type="button" class="bj-btn bj-btn--tertiary">
        Suivant
        <i class="ri-arrow-right-line" aria-hidden="true" />
      </button>
    </DocsPreview>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-events" :title="t('section-events')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('events-desc')" />
    <DocsCode :code="codeEvents" lang="html" />
  </DocsSection>

  <DocsSection id="vue-btn-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
