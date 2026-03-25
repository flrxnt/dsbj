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
      title: 'BjSearch',
      desc: 'Formulaire de recherche React : champ type search, envoi avec la valeur courante, taille md ou lg.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-value': 'Valeur contrôlée du champ, chaîne.',
      'prop-onChange': 'Gestionnaire de changement sur l’input search.',
      'prop-onSubmit': 'Appelé avec la chaîne courante lors de la soumission du formulaire (preventDefault appliqué).',
      'prop-placeholder': 'Placeholder du champ (défaut Rechercher…).',
      'prop-size': 'Taille : md (défaut) ou lg (bj-search--lg).',
      'prop-buttonLabel': 'Texte du bouton d’envoi (défaut Rechercher).',
      'prop-children': 'Contenu du bouton ; remplace l’icône et le libellé par défaut.',
      'prop-className': 'Classe CSS sur l’élément form.',
      'prop-rest': 'Autres attributs HTML natifs du form (onSubmit et children sont réservés par le composant).',
    },
    en: {
      title: 'BjSearch',
      desc: 'React search form: search input, submit with current value, md or lg size.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'Controlled input value, string.',
      'prop-onChange': 'Change handler on the search input.',
      'prop-onSubmit': 'Called with the current string on form submit (default submit is prevented).',
      'prop-placeholder': 'Input placeholder (component provides a default if omitted).',
      'prop-size': 'Size: md (default) or lg (bj-search--lg).',
      'prop-buttonLabel': 'Submit button text (default Search).',
      'prop-children': 'Button content; replaces default icon and label.',
      'prop-className': 'CSS class on the form element.',
      'prop-rest': 'Other native form HTML attributes (onSubmit and children are reserved by the component).',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjSearch } from '@flrxnt/dsbj/react'

export default function Example() {
  const [q, setQ] = useState('')
  function onSubmit(value: string) {
    console.log(value)
  }
  return (
    <BjSearch
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onSubmit={onSubmit}
      placeholder="Rechercher sur le site…"
    />
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'onSubmit', description: t('prop-onSubmit') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'size', description: t('prop-size') },
  { name: 'buttonLabel', description: t('prop-buttonLabel') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-search-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-search-preview" :title="t('section-preview')">
    <DocsPreview>
      <form class="bj-search" role="search" style="max-width: 28rem">
        <input
          class="bj-search__input"
          type="search"
          placeholder="Rechercher sur le site…"
          aria-label="Rechercher sur le site"
        />
        <button type="submit" class="bj-search__btn">
          <i class="ri-search-line" aria-hidden="true" />
          <span>Rechercher</span>
        </button>
      </form>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-search-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
