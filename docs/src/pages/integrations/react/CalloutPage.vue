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
      title: 'BjCallout',
      desc: 'Bloc de mise en avant React : prop color, icon et title optionnels, children pour le corps, prop action pour un nœud React (bouton, lien).',
      'section-usage': 'Utilisation',
      'section-colors': 'Couleurs (color)',
      'section-icon-title': 'Icône et titre',
      'section-action': 'Prop action',
      'section-combos': 'Combinaisons',
      'section-children': 'Children',
      'section-props': 'Props',
      'prop-color': 'default (défaut), green, yellow ou red.',
      'prop-icon': 'Classe Remix affichée à gauche si fournie.',
      'prop-title': 'Titre au-dessus des children.',
      'prop-action': 'Nœud React rendu dans bj-callout__btn (ex. BjButton).',
      'children-desc': 'Le contenu principal est passé en children ; si absent, seuls titre / action peuvent apparaître.',
      'ex-title': 'Information',
      'ex-body': 'Ce bloc attire l’attention sur un message important pour l’utilisateur.',
      'ex-action': 'En savoir plus',
    },
    en: {
      title: 'BjCallout',
      desc: 'React callout: color prop, optional icon and title, children for body, action prop for a React node.',
      'section-usage': 'Usage',
      'section-colors': 'Colors (color)',
      'section-icon-title': 'Icon and title',
      'section-action': 'action prop',
      'section-combos': 'Combinations',
      'section-children': 'Children',
      'section-props': 'Props',
      'prop-color': 'default (default), green, yellow, or red.',
      'prop-icon': 'Remix class on the left when set.',
      'prop-title': 'Title above children.',
      'prop-action': 'React node rendered in bj-callout__btn (e.g. BjButton).',
      'children-desc': 'Main content is passed as children; title/action can still show without body text.',
      'ex-title': 'Information',
      'ex-body': 'This block draws attention to an important message for the user.',
      'ex-action': 'Learn more',
    },
  },
})

const codeUsage = `import { BjButton, BjCallout } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjCallout
      color="yellow"
      icon="ri-information-line"
      title="Information"
      action={<BjButton variant="secondary" size="sm">En savoir plus</BjButton>}
    >
      <p>Ce bloc attire l’attention sur un message important pour l’utilisateur.</p>
    </BjCallout>
  )
}`

const codeColors = `<BjCallout color="default">Défaut</BjCallout>
<BjCallout color="green" icon="ri-checkbox-circle-line" title="Vert">
  <p>Message positif.</p>
</BjCallout>
<BjCallout color="yellow" icon="ri-alert-line" title="Jaune">
  <p>Avertissement.</p>
</BjCallout>
<BjCallout color="red" icon="ri-error-warning-line" title="Rouge">
  <p>Message critique.</p>
</BjCallout>`

const codeIconTitle = `<BjCallout icon="ri-lightbulb-line" title="Astuce">
  <p>Texte avec icône et titre.</p>
</BjCallout>
<BjCallout title="Sans icône">
  <p>Titre seul.</p>
</BjCallout>`

const codeAction = `<BjCallout
  color="green"
  title="OK"
  icon="ri-checkbox-circle-line"
  action={<BjButton variant="secondary" size="sm">Détails</BjButton>}
>
  Opération réussie.
</BjCallout>`

const codeCombos = `<BjCallout
  color="red"
  icon="ri-alarm-warning-line"
  title="Erreur"
  action={<BjButton variant="secondary" size="sm">Corriger</BjButton>}
>
  <p>Combinaison rouge + icône + titre + action.</p>
</BjCallout>`

const codeChildren = `<BjCallout>
  <p>Paragraphe.</p>
  <ul className="bj-text-sm">
    <li>Premier point</li>
    <li>Deuxième point</li>
  </ul>
</BjCallout>`

const propsRows = computed(() => [
  { name: 'color', description: t('prop-color') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'title', description: t('prop-title') },
  { name: 'action', description: t('prop-action') },
  { name: 'children', description: t('children-desc') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-callout-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-colors" :title="t('section-colors')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-callout">
        <div class="bj-callout__text"><p>default</p></div>
      </div>
      <div class="bj-callout bj-callout--green">
        <i class="ri-checkbox-circle-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">green</p>
        <div class="bj-callout__text"><p>Message positif.</p></div>
      </div>
      <div class="bj-callout bj-callout--yellow">
        <i class="ri-alert-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">yellow</p>
        <div class="bj-callout__text"><p>Avertissement.</p></div>
      </div>
      <div class="bj-callout bj-callout--red">
        <i class="ri-error-warning-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">red</p>
        <div class="bj-callout__text"><p>Message critique.</p></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeColors" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-icon-title" :title="t('section-icon-title')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-callout bj-callout--yellow">
        <i class="ri-lightbulb-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">Astuce</p>
        <div class="bj-callout__text"><p>Texte avec icône et titre.</p></div>
      </div>
      <div class="bj-callout">
        <p class="bj-callout__title">Sans icône</p>
        <div class="bj-callout__text"><p>Titre seul.</p></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIconTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-action" :title="t('section-action')">
    <DocsPreview>
      <div class="bj-callout bj-callout--yellow">
        <i class="ri-information-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">{{ t('ex-title') }}</p>
        <div class="bj-callout__text">
          <p>{{ t('ex-body') }}</p>
        </div>
        <div class="bj-callout__btn">
          <a href="#" class="bj-btn bj-btn--secondary bj-btn--sm">{{ t('ex-action') }}</a>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeAction" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-combos" :title="t('section-combos')">
    <DocsPreview>
      <div class="bj-callout bj-callout--red">
        <i class="ri-alarm-warning-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">Erreur</p>
        <div class="bj-callout__text"><p>Combinaison rouge + icône + titre + action.</p></div>
        <div class="bj-callout__btn">
          <button type="button" class="bj-btn bj-btn--secondary bj-btn--sm">Corriger</button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombos" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-children" :title="t('section-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('children-desc') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-callout-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
