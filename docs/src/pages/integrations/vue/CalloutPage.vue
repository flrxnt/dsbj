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
      desc: 'Bloc de mise en avant avec couleur de bordure, icône et titre optionnels, slot par défaut pour le texte et slot action pour un bouton ou un lien.',
      'section-usage': 'Utilisation',
      'section-colors': 'Couleurs (color)',
      'section-icon-title': 'Icône et titre',
      'section-action': 'Slot action',
      'section-combos': 'Combinaisons',
      'section-slot': 'Slot par défaut',
      'section-props': 'Props',
      'prop-color': 'default (défaut), green, yellow ou red — accent de bordure gauche.',
      'prop-icon': 'Classe d’icône (ex. Remix) ; si absent, aucune icône.',
      'prop-title': 'Titre au-dessus du texte principal.',
      'prop-action': 'Slot nommé action : bouton ou lien aligné à droite sur grand écran.',
      'slot-desc': 'Le corps du message est dans le slot par défaut (paragraphes, listes, etc.).',
      'ex-title': 'Information',
      'ex-body': 'Ce bloc attire l’attention sur un message important pour l’utilisateur.',
      'ex-action': 'En savoir plus',
      'ex-no-icon': 'Sans icône',
      'ex-no-title': 'Texte seul avec action.',
    },
    en: {
      title: 'BjCallout',
      desc: 'Highlight block with border color, optional icon and title, default slot for copy, and named action slot for a button or link.',
      'section-usage': 'Usage',
      'section-colors': 'Colors (color)',
      'section-icon-title': 'Icon and title',
      'section-action': 'Action slot',
      'section-combos': 'Combinations',
      'section-slot': 'Default slot',
      'section-props': 'Props',
      'prop-color': 'default (default), green, yellow, or red — left border accent.',
      'prop-icon': 'Icon class (e.g. Remix); if omitted, no icon.',
      'prop-title': 'Title above the main text.',
      'prop-action': 'Named action slot: button or link, right-aligned on wide screens.',
      'slot-desc': 'The message body goes in the default slot (paragraphs, lists, etc.).',
      'ex-title': 'Information',
      'ex-body': 'This block draws attention to an important message for the user.',
      'ex-action': 'Learn more',
      'ex-no-icon': 'Without icon',
      'ex-no-title': 'Body only with action.',
    },
  },
})

const codeUsage = computed(() => {
  const title = t('ex-title').replace(/"/g, '&quot;')
  const body = t('ex-body').replace(/"/g, '&quot;')
  const action = t('ex-action').replace(/"/g, '&quot;')
  return `<script setup>
import { BjButton, BjCallout } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjCallout color="yellow" icon="ri-information-line" title="${title}">
    ${body}
    <template #action>
      <BjButton variant="secondary" size="sm">${action}</BjButton>
    </template>
  </BjCallout>
</template>`
})

const codeColors = `<BjCallout color="default">Défaut</BjCallout>
<BjCallout color="green" icon="ri-checkbox-circle-line" title="Vert">Message positif.</BjCallout>
<BjCallout color="yellow" icon="ri-alert-line" title="Jaune">Avertissement.</BjCallout>
<BjCallout color="red" icon="ri-error-warning-line" title="Rouge">Message critique.</BjCallout>`

const codeIconTitle = `<BjCallout icon="ri-lightbulb-line" title="Astuce">
  Texte avec icône et titre.
</BjCallout>
<BjCallout title="Sans icône">
  Titre seul.
</BjCallout>`

const codeAction = `<BjCallout color="green" title="OK" icon="ri-checkbox-circle-line">
  Opération réussie.
  <template #action>
    <BjButton variant="secondary" size="sm">Détails</BjButton>
  </template>
</BjCallout>`

const codeCombos = `<BjCallout color="red" icon="ri-alarm-warning-line" title="Erreur">
  Combinaison rouge + icône + titre.
  <template #action>
    <BjButton variant="secondary" size="sm">Corriger</BjButton>
  </template>
</BjCallout>`

const codeSlot = `<BjCallout>
  <p>Paragraphe dans le slot par défaut.</p>
  <ul class="bj-text-sm">
    <li>Premier point</li>
    <li>Deuxième point</li>
  </ul>
</BjCallout>`

const propsRows = computed(() => [
  { name: 'color', description: t('prop-color') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'title', description: t('prop-title') },
  { name: 'action (slot)', description: t('prop-action') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-callout-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-colors" :title="t('section-colors')">
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
    <DocsCode :code="codeColors" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-icon-title" :title="t('section-icon-title')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v)">
      <div class="bj-callout bj-callout--yellow">
        <i class="ri-lightbulb-line bj-callout__icon" aria-hidden="true" />
        <p class="bj-callout__title">Astuce</p>
        <div class="bj-callout__text"><p>Texte avec icône et titre.</p></div>
      </div>
      <div class="bj-callout">
        <p class="bj-callout__title">{{ t('ex-no-icon') }}</p>
        <div class="bj-callout__text"><p>Titre sans icône.</p></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIconTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-action" :title="t('section-action')">
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
    <DocsCode :code="codeAction" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-combos" :title="t('section-combos')">
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
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-slot" :title="t('section-slot')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('slot-desc') }}</p>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-callout-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop / slot', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
