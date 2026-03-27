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
      title: 'BjTab',
      desc: 'Onglets Vue : la prop tabs fournit les libellés ; chaque BjTabPanel correspond à un panneau dans l’ordre d’apparition. v-model lie l’index actif (0-based).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props — BjTab',
      'section-props-panel': 'BjTabPanel',
      'section-vmodel': 'modelValue : index initial et liaison',
      'section-tabs-values': 'tabs : longueurs et libellés',
      'section-slots': 'Slots',
      'section-emit': 'Émission',
      'section-combos': 'Combinaisons tabs × panneaux × index initial',
      'section-keyboard': 'Clavier (flèches, Home, End)',
      'section-slot-rich': 'Slots : contenu riche dans BjTabPanel',
      'section-preview-active': 'Aperçu : onglet actif (HTML)',
      'prop-modelValue': 'Index de l’onglet actif (v-model), défaut 0.',
      'prop-tabs': 'Tableau de chaînes : une entrée par onglet, dans l’ordre des BjTabPanel.',
      'prop-panel-slot': 'Contenu du panneau (slot par défaut). Un panneau par item de tabs.',
      'emit-update': 'update:modelValue(index) lors d’un clic ou navigation clavier (flèches, Home, End).',
      'slot-tab-default': 'Les BjTabPanel enfants, dans le même ordre que tabs[].',
      'combo-intro':
        'Le nombre de chaînes dans tabs doit égaler le nombre de BjTabPanel ; l’index v-model doit rester entre 0 et tabs.length - 1.',
      'keyboard-desc':
        'Sur un onglet focalisé : ← → changent l’onglet (boucle), Home va au premier, End au dernier ; le focus suit l’onglet activé.',
      'slot-rich-desc': 'Chaque panneau accepte tout marquage (listes, formulaires, composants) dans son slot par défaut.',
    },
    en: {
      title: 'BjTab',
      desc:
        'Vue tabs: the tabs prop supplies labels; each BjTabPanel is a panel in DOM order. v-model binds the active zero-based index.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props — BjTab',
      'section-props-panel': 'BjTabPanel',
      'section-vmodel': 'modelValue: initial index and binding',
      'section-tabs-values': 'tabs: length and labels',
      'section-slots': 'Slots',
      'section-emit': 'Emit',
      'section-combos': 'tabs × panels × initial index',
      'section-keyboard': 'Keyboard (arrows, Home, End)',
      'section-slot-rich': 'Slots: rich BjTabPanel content',
      'section-preview-active': 'Preview: active tab (HTML)',
      'prop-modelValue': 'Active tab index (v-model), default 0.',
      'prop-tabs': 'String array: one entry per tab, same order as BjTabPanel children.',
      'prop-panel-slot': 'Panel content (default slot). One panel per tabs entry.',
      'emit-update': 'update:modelValue(index) on click or keyboard (arrows, Home, End).',
      'slot-tab-default': 'BjTabPanel children, same order as tabs[].',
      'combo-intro':
        'tabs length must match BjTabPanel count; v-model index must stay between 0 and tabs.length - 1.',
      'keyboard-desc':
        'On a focused tab: ← → move selection (wrap), Home first tab, End last tab; focus moves to the activated tab.',
      'slot-rich-desc': 'Each panel default slot can contain lists, forms, or nested components.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/vue'

const active = ref(0)
<\/script>

<template>
  <BjTab v-model="active" :tabs="['Général', 'Pièces']">
    <BjTabPanel>
      <p>Contenu de l’onglet général.</p>
    </BjTabPanel>
    <BjTabPanel>
      <p>Liste des pièces jointes.</p>
    </BjTabPanel>
  </BjTab>
</template>`

const codeVModel = `<script setup>
import { ref } from 'vue'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/vue'

const idx = ref(2)
<\/script>

<template>
  <!-- Index initial 2 (troisième onglet) -->
  <BjTab v-model="idx" :tabs="['A', 'B', 'C', 'D']">
    <BjTabPanel><p>Onglet A</p></BjTabPanel>
    <BjTabPanel><p>Onglet B</p></BjTabPanel>
    <BjTabPanel><p>Onglet C (actif au montage)</p></BjTabPanel>
    <BjTabPanel><p>Onglet D</p></BjTabPanel>
  </BjTab>
</template>`

const codeTabsLengths = `<!-- Deux onglets -->
<BjTab :tabs="['Résumé', 'Détails']">...</BjTab>

<!-- Un seul onglet (cas limite) -->
<BjTab :tabs="['Unique']">
  <BjTabPanel>Contenu unique</BjTabPanel>
</BjTab>`

const codeEmit = `<script setup>
import { ref } from 'vue'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/vue'

const active = ref(0)
<\/script>

<template>
  <BjTab
    v-model="active"
    :tabs="['Un', 'Deux']"
    @update:modelValue="(i) => console.log('Onglet', i)"
  >
    <BjTabPanel>…</BjTabPanel>
    <BjTabPanel>…</BjTabPanel>
  </BjTab>
</template>`

const codeCombos = `<!-- 2 onglets, premier actif -->
<BjTab v-model="i" :tabs="['Résumé', 'Détails']">
  <BjTabPanel><p>Résumé</p></BjTabPanel>
  <BjTabPanel><p>Détails</p></BjTabPanel>
</BjTab>

<!-- 4 onglets, dernier actif au montage -->
<BjTab v-model="j" :tabs="['A', 'B', 'C', 'D']">
  <BjTabPanel>…</BjTabPanel>
  <BjTabPanel>…</BjTabPanel>
  <BjTabPanel>…</BjTabPanel>
  <BjTabPanel>…</BjTabPanel>
</BjTab>
<!-- script: const j = ref(3) -->`

const codeSlotRich = `<BjTab v-model="t" :tabs="['Liste', 'Formulaire']">
  <BjTabPanel>
    <ul class="bj-list">
      <li>Élément</li>
    </ul>
  </BjTabPanel>
  <BjTabPanel>
    <label class="bj-label">Nom</label>
    <input class="bj-input" type="text" />
  </BjTabPanel>
</BjTab>`

const tabProps = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'tabs', description: t('prop-tabs') },
])

const panelProps = computed(() => [{ name: '(default slot)', description: t('prop-panel-slot') }])

const slotRows = computed(() => [{ name: 'BjTab (default)', description: t('slot-tab-default') }])

const emitRows = computed(() => [{ name: 'update:modelValue', description: t('emit-update') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tab-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-tabs" data-bj-tabs>
        <div class="bj-tabs__list" role="tablist" aria-label="Exemple">
          <button class="bj-tabs__tab" data-bj-tab role="tab" type="button">Général</button>
          <button class="bj-tabs__tab" data-bj-tab role="tab" type="button">Pièces</button>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Contenu de l’onglet général.</p>
        </div>
        <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
          <p class="bj-text-sm">Liste des pièces jointes.</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tab-preview-active" :title="t('section-preview-active')">
    <DocsPreview>
      <div class="bj-tabs" data-bj-tabs>
        <div class="bj-tabs__list" role="tablist" aria-label="Actif">
          <button class="bj-tabs__tab" type="button" role="tab" aria-selected="false" tabindex="-1">Étape 1</button>
          <button class="bj-tabs__tab" type="button" role="tab" aria-selected="true" tabindex="0">Étape 2</button>
          <button class="bj-tabs__tab" type="button" role="tab" aria-selected="false" tabindex="-1">Étape 3</button>
        </div>
        <div class="bj-tabs__panel" role="tabpanel" style="display: none"></div>
        <div class="bj-tabs__panel" role="tabpanel" data-bj-expanded style="display: block">
          <p class="bj-text-sm">Panneau visible (équivalent index 1 en Vue).</p>
        </div>
        <div class="bj-tabs__panel" role="tabpanel" style="display: none"></div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tab-vmodel" :title="t('section-vmodel')">
    <DocsCode :code="codeVModel" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-tabs-values" :title="t('section-tabs-values')">
    <DocsCode :code="codeTabsLengths" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-combos" :title="t('section-combos')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('combo-intro') }}</p>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-keyboard" :title="t('section-keyboard')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('keyboard-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-tab-slot-rich" :title="t('section-slot-rich')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('slot-rich-desc') }}</p>
    <DocsCode :code="codeSlotRich" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-slots" :title="t('section-slots')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
  </DocsSection>

  <DocsSection id="vue-tab-emit" :title="t('section-emit')">
    <DocsPropsTable :headers="['Événement', 'Description']" :rows="emitRows" />
    <DocsCode :code="codeEmit" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tab-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="tabProps" />
  </DocsSection>

  <DocsSection id="vue-tab-props-panel" :title="t('section-props-panel')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="panelProps" />
  </DocsSection>
</template>
