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
      desc: 'Interrupteur Vue (case à cocher stylée) avec v-model booléen, libellé, aide, bordure optionnelle, libellé à gauche et état désactivé.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-off': 'Désactivé (v-model false)',
      'section-border': 'Avec bordure (border)',
      'section-label-left': 'Libellé à gauche (labelLeft)',
      'section-border-label-left': 'Bordure × libellé à gauche',
      'section-disabled': 'Interrupteur désactivé',
      'section-hint': 'Avec hint',
      'section-props': 'Props',
      'prop-modelValue': 'État activé (v-model), booléen.',
      'prop-label': 'Texte du libellé (contenu par défaut du slot).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive l’interrupteur.',
      'prop-border': 'Ajoute une bordure autour du contrôle (bj-toggle--border).',
      'prop-labelLeft': 'Affiche le libellé à gauche du curseur (bj-toggle--label-left).',
    },
    en: {
      title: 'BjToggle',
      desc: 'Vue switch (styled checkbox) with boolean v-model, label, hint, optional border, label-on-left layout, and disabled state.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-off': 'Off (v-model false)',
      'section-border': 'With border (border)',
      'section-label-left': 'Label on the left (labelLeft)',
      'section-border-label-left': 'Border × label left',
      'section-disabled': 'Disabled toggle',
      'section-hint': 'With hint',
      'section-props': 'Props',
      'prop-modelValue': 'On state (v-model), boolean.',
      'prop-label': 'Label text (default slot content).',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables the toggle.',
      'prop-border': 'Adds a border around the control (bj-toggle--border).',
      'prop-labelLeft': 'Places the label to the left of the thumb (bj-toggle--label-left).',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjToggle } from '@flrxnt/dsbj/vue'

const notify = ref(true)
<\/script>

<template>
  <BjToggle v-model="notify" label="Notifications par e-mail" hint="Résumé quotidien" border />
</template>`

const codeOff = `<BjToggle v-model="push" label="Notifications push" />`

const codeBorder = `<BjToggle v-model="dark" label="Mode sombre" border />`

const codeLabelLeft = `<BjToggle v-model="sync" label="Synchronisation" label-left />`

const codeCombo = `<BjToggle v-model="beta" label="Fonctionnalités bêta" border label-left hint="Peut être instable" />`

const codeDisabled = `<BjToggle v-model="on" label="Verrouillé par l’admin" :disabled="true" />`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'border', description: t('prop-border') },
  { name: 'labelLeft', description: t('prop-labelLeft') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-toggle-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-preview" :title="t('section-preview')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="vue-tog-prev">
        <input
          id="vue-tog-prev"
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

  <DocsSection id="vue-toggle-off" :title="t('section-off')">
    <DocsPreview>
      <label class="bj-toggle" for="vue-tog-off">
        <input id="vue-tog-off" type="checkbox" class="bj-toggle__input" role="switch" aria-checked="false" />
        <span class="bj-toggle__label">Notifications push</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeOff" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-border" :title="t('section-border')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="vue-tog-bd">
        <input id="vue-tog-bd" type="checkbox" class="bj-toggle__input" role="switch" checked aria-checked="true" />
        <span class="bj-toggle__label">Mode sombre</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeBorder" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-label-left" :title="t('section-label-left')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--label-left" for="vue-tog-ll">
        <input id="vue-tog-ll" type="checkbox" class="bj-toggle__input" role="switch" checked aria-checked="true" />
        <span class="bj-toggle__label">Synchronisation</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeLabelLeft" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-combo" :title="t('section-border-label-left')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border bj-toggle--label-left" for="vue-tog-cb">
        <input id="vue-tog-cb" type="checkbox" class="bj-toggle__input" role="switch" aria-checked="false" />
        <span class="bj-toggle__label">
          Fonctionnalités bêta
          <span class="bj-toggle__hint">Peut être instable</span>
        </span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeCombo" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-disabled" :title="t('section-disabled')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="vue-tog-dis">
        <input id="vue-tog-dis" type="checkbox" class="bj-toggle__input" role="switch" checked disabled aria-checked="true" />
        <span class="bj-toggle__label">Verrouillé par l’admin</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-toggle-hint" :title="t('section-hint')">
    <DocsPreview>
      <label class="bj-toggle" for="vue-tog-hint">
        <input id="vue-tog-hint" type="checkbox" class="bj-toggle__input" role="switch" aria-checked="false" />
        <span class="bj-toggle__label">
          Analytics
          <span class="bj-toggle__hint">Données agrégées uniquement</span>
        </span>
      </label>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-toggle-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
