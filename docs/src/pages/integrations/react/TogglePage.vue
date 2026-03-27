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
      title: 'BjToggle',
      desc: 'Interrupteur React (case à cocher stylée avec role switch), libellé optionnel, bordure et libellé à gauche.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-checked': 'État activé contrôlé, booléen.',
      'prop-onChange': 'Gestionnaire de changement sur l’input natif.',
      'prop-label': 'Texte du libellé si aucun enfant n’est fourni.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive l’interrupteur.',
      'prop-border': 'Si vrai, ajoute la classe bj-toggle--border.',
      'prop-labelLeft': 'Si vrai, ajoute bj-toggle--label-left.',
      'prop-id': 'Identifiant du input ; sinon généré automatiquement.',
      'prop-children': 'Contenu du libellé ; remplace label si présent.',
      'prop-className': 'Classe CSS sur l’élément label racine.',
      'prop-rest': 'Autres attributs HTML natifs du input (type, size et role sont réservés).',
      'section-label-left': 'Libellé à gauche',
      'section-children': 'Enfants comme libellé',
      'section-disabled': 'Désactivé',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Contrôle et callbacks',
      'desc-label-left': 'labelLeft applique bj-toggle--label-left (interrupteur à droite).',
      'desc-children': 'children remplace label.',
      'desc-disabled': 'checked et disabled sur le switch.',
      'desc-combinations': 'border + labelLeft + hint sur le même composant.',
      'desc-callbacks': 'checked et onChange avec e.target.checked ; id explicite pour l’accessibilité.',
    },
    en: {
      title: 'BjToggle',
      desc: 'React switch (styled checkbox with switch role), optional label, border, and label-on-left layout.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-checked': 'Controlled on state, boolean.',
      'prop-onChange': 'Change handler on the native input.',
      'prop-label': 'Label text when no children are passed.',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables the toggle.',
      'prop-border': 'When true, adds bj-toggle--border.',
      'prop-labelLeft': 'When true, adds bj-toggle--label-left.',
      'prop-id': 'Input id; auto-generated when omitted.',
      'prop-children': 'Label content; overrides label when provided.',
      'prop-className': 'CSS class on the root label element.',
      'prop-rest': 'Other native input HTML attributes (type, size, and role are reserved).',
      'section-label-left': 'Label on the left',
      'section-children': 'Children as label',
      'section-disabled': 'Disabled',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Controlled and callbacks',
      'desc-label-left': 'labelLeft adds bj-toggle--label-left (switch on the right).',
      'desc-children': 'children replaces label.',
      'desc-disabled': 'checked and disabled on the switch.',
      'desc-combinations': 'border, labelLeft, and hint together.',
      'desc-callbacks': 'checked and onChange with e.target.checked; explicit id for a11y.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  const [notify, setNotify] = useState(true)
  return (
    <BjToggle
      checked={notify}
      onChange={(e) => setNotify(e.target.checked)}
      label="Notifications par e-mail"
      hint="Résumé quotidien"
      border
    />
  )
}`

const codeLabelLeft = `import { useState } from 'react'
import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  const [on, setOn] = useState(false)
  return (
    <BjToggle
      labelLeft
      border
      checked={on}
      onChange={(e) => setOn(e.target.checked)}
      label="Mode sombre"
    />
  )
}`

const codeChildren = `import { useState } from 'react'
import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  const [on, setOn] = useState(true)
  return (
    <BjToggle checked={on} onChange={(e) => setOn(e.target.checked)} border>
      Activer les <strong>alertes</strong>
    </BjToggle>
  )
}`

const codeDisabled = `import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  return <BjToggle checked label="Fonctionnalité verrouillée" disabled border />
}`

const codeCombinations = `import { useState } from 'react'
import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  const [v, setV] = useState(true)
  return (
    <BjToggle
      id="notify-toggle"
      border
      labelLeft
      checked={v}
      onChange={(e) => setV(e.target.checked)}
      label="Notifications push"
      hint="Uniquement sur cet appareil"
    />
  )
}`

const codeCallbacks = `import { useState } from 'react'
import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)
  return (
    <BjToggle
      id="feature-flag"
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
      label="Fonction expérimentale"
    />
  )
}`

const propsRows = computed(() => [
  { name: 'checked', description: t('prop-checked') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'border', description: t('prop-border') },
  { name: 'labelLeft', description: t('prop-labelLeft') },
  { name: 'id', description: t('prop-id') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-toggle-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-preview" :title="t('section-preview')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="react-tog-prev">
        <input
          id="react-tog-prev"
          type="checkbox"
          class="bj-toggle__input"
          role="switch"
          checked
          aria-checked="true"
        />
        <span class="bj-toggle__label">
          Notifications par e-mail
          <span class="bj-toggle__hint">Résumé quotidien</span>
        </span>
      </label>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-toggle-label-left" :title="t('section-label-left')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-label-left') }}</p>
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border bj-toggle--label-left" for="react-tog-ll">
        <input id="react-tog-ll" type="checkbox" class="bj-toggle__input" role="switch" checked aria-checked="true" />
        <span class="bj-toggle__label">Mode sombre</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeLabelLeft" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="react-tog-ch">
        <input id="react-tog-ch" type="checkbox" class="bj-toggle__input" role="switch" checked aria-checked="true" />
        <span class="bj-toggle__label">Activer les <strong>alertes</strong></span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-disabled" :title="t('section-disabled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled') }}</p>
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="react-tog-dis">
        <input id="react-tog-dis" type="checkbox" class="bj-toggle__input" role="switch" checked disabled aria-checked="true" />
        <span class="bj-toggle__label">Fonctionnalité verrouillée</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border bj-toggle--label-left" for="react-tog-combo">
        <input id="react-tog-combo" type="checkbox" class="bj-toggle__input" role="switch" checked aria-checked="true" />
        <span class="bj-toggle__label">
          Notifications push
          <span class="bj-toggle__hint">Uniquement sur cet appareil</span>
        </span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
