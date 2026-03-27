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
      desc: 'Barre de recherche Vue : formulaire role="search", champ type search, v-model, taille md (défaut) ou lg (bj-search--lg), libellé du bouton, slot pour le contenu du bouton d’envoi et événement submit.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (md)',
      'section-size-lg': 'Taille lg',
      'section-size-compare': 'md × lg',
      'section-button-label': 'buttonLabel',
      'section-slot': 'Slot du bouton',
      'section-submit': 'Événement submit',
      'section-props': 'Props',
      'prop-modelValue': 'Texte saisi (v-model).',
      'prop-placeholder': 'Placeholder du champ (défaut « Rechercher… »).',
      'prop-size': 'Taille du bloc : md (défaut) ou lg (classe bj-search--lg).',
      'prop-buttonLabel': 'Texte du bouton lorsque le slot par défaut est utilisé.',
      'event-submit': 'Émis à la soumission du formulaire avec la valeur courante du champ (chaîne).',
      'slot-desc':
        'Le slot par défaut remplace uniquement le contenu du <code>&lt;button type="submit"&gt;</code> (icône + texte par défaut), pas le bouton lui-même.',
    },
    en: {
      title: 'BjSearch',
      desc: 'Vue search bar: form with role="search", search input, v-model, md (default) or lg size (bj-search--lg), button label, slot for submit button inner content, and submit event.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (md)',
      'section-size-lg': 'lg size',
      'section-size-compare': 'md × lg',
      'section-button-label': 'buttonLabel',
      'section-slot': 'Button slot',
      'section-submit': 'submit event',
      'section-props': 'Props',
      'prop-modelValue': 'Typed text (v-model).',
      'prop-placeholder': 'Input placeholder (default "Rechercher…").',
      'prop-size': 'Block size: md (default) or lg (bj-search--lg class).',
      'prop-buttonLabel': 'Button text when using the default slot content.',
      'event-submit': 'Emitted on form submit with the current field value (string).',
      'slot-desc':
        'The default slot replaces only the inner content of <code>&lt;button type="submit"&gt;</code> (default icon + text), not the button element.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjSearch } from '@flrxnt/dsbj/vue'

const q = ref('')
function onSubmit(value: string) {
  console.log(value)
}
<\/script>

<template>
  <BjSearch v-model="q" placeholder="Rechercher sur le site…" @submit="onSubmit" />
</template>`

const codeLg = `<BjSearch v-model="q" size="lg" placeholder="Recherche large…" />`

const codeButtonLabel = `<BjSearch v-model="q" button-label="Lancer la recherche" />`

const codeSlot = `<!-- Contenu à l'intérieur du bouton submit (pas de second <button>) -->
<BjSearch v-model="q" placeholder="Rechercher…">
  <i class="ri-arrow-right-line" aria-hidden="true" />
  <span class="bj-sr-only">Envoyer</span>
</BjSearch>`

const codeSubmit = `<BjSearch v-model="query" @submit="onSearch" />

<script setup lang="ts">
function onSearch(value: string) {
  console.log(value)
}
<\/script>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'size', description: t('prop-size') },
  { name: 'buttonLabel', description: t('prop-buttonLabel') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-search-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-search-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-search-lg" :title="t('section-size-lg')">
    <DocsPreview>
      <form class="bj-search bj-search--lg" role="search" style="max-width: 32rem">
        <input class="bj-search__input" type="search" placeholder="Recherche large…" />
        <button type="submit" class="bj-search__btn">
          <i class="ri-search-line" aria-hidden="true" />
          <span>Rechercher</span>
        </button>
      </form>
    </DocsPreview>
    <DocsCode :code="codeLg" lang="html" />
  </DocsSection>

  <DocsSection id="vue-search-compare" :title="t('section-size-compare')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); align-items: start">
      <form class="bj-search" role="search" style="max-width: 28rem">
        <input class="bj-search__input" type="search" placeholder="md" />
        <button type="submit" class="bj-search__btn">
          <i class="ri-search-line" aria-hidden="true" />
          <span>OK</span>
        </button>
      </form>
      <form class="bj-search bj-search--lg" role="search" style="max-width: 32rem">
        <input class="bj-search__input" type="search" placeholder="lg" />
        <button type="submit" class="bj-search__btn">
          <i class="ri-search-line" aria-hidden="true" />
          <span>OK</span>
        </button>
      </form>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-search-button-label" :title="t('section-button-label')">
    <DocsPreview>
      <form class="bj-search" role="search" style="max-width: 28rem">
        <input class="bj-search__input" type="search" placeholder="Rechercher…" />
        <button type="submit" class="bj-search__btn">
          <i class="ri-search-line" aria-hidden="true" />
          <span>Lancer la recherche</span>
        </button>
      </form>
    </DocsPreview>
    <DocsCode :code="codeButtonLabel" lang="html" />
  </DocsSection>

  <DocsSection id="vue-search-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-desc')" />
    <DocsPreview>
      <form class="bj-search" role="search" style="max-width: 28rem">
        <input class="bj-search__input" type="search" placeholder="Rechercher…" />
        <button type="submit" class="bj-search__btn">
          <i class="ri-arrow-right-line" aria-hidden="true" />
          <span class="bj-sr-only">Envoyer</span>
        </button>
      </form>
    </DocsPreview>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-search-submit" :title="t('section-submit')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('event-submit')" />
    <DocsCode :code="codeSubmit" lang="html" />
  </DocsSection>

  <DocsSection id="vue-search-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
