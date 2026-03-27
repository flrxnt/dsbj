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
      title: 'BjInput',
      desc: 'Champ de saisie Vue avec libellé, aide, états de validation (default / valid / error), tailles sm et md, types HTML natifs, textarea avec rows, icône préfixe et v-model.',
      'section-usage': 'Utilisation',
      'section-states': 'États (state)',
      'section-sizes': 'Tailles',
      'section-state-size': 'État × taille',
      'section-types': 'Types d’input',
      'section-textarea': 'Textarea et rows',
      'section-disabled-textarea': 'Textarea désactivée',
      'section-icon': 'Champ avec icône',
      'section-placeholder-rows': 'Placeholder et rows',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur du champ (v-model).',
      'prop-label': 'Libellé accessible.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-state': 'État visuel : default, valid, error.',
      'prop-message': 'Message sous le champ (couleur selon state).',
      'prop-size': 'Taille : sm ou md (défaut md).',
      'prop-disabled': 'Désactive le champ.',
      'prop-type': 'Type HTML de l’input (text, email, number, password, tel, url, etc.). Ignoré si textarea.',
      'prop-placeholder': 'Placeholder du champ.',
      'prop-textarea': 'Rend une textarea au lieu d’un input.',
      'prop-rows': 'Nombre de lignes de la textarea (défaut 4).',
      'prop-icon': 'Classe d’icône Remix affichée dans .bj-input-wrap (input uniquement).',
      'label-default': 'Par défaut',
      'label-valid': 'Valide',
      'label-error': 'Erreur',
      'label-sm': 'sm',
      'label-md': 'md',
    },
    en: {
      title: 'BjInput',
      desc: 'Vue text field with label, hint, validation states (default / valid / error), sm and md sizes, native HTML types, textarea with rows, leading icon, and v-model.',
      'section-usage': 'Usage',
      'section-states': 'States (state)',
      'section-sizes': 'Sizes',
      'section-state-size': 'State × size',
      'section-types': 'Input types',
      'section-textarea': 'Textarea and rows',
      'section-disabled-textarea': 'Disabled textarea',
      'section-icon': 'Input with icon',
      'section-placeholder-rows': 'Placeholder and rows',
      'section-props': 'Props',
      'prop-modelValue': 'Field value (v-model).',
      'prop-label': 'Accessible label.',
      'prop-hint': 'Help text below the label.',
      'prop-state': 'Visual state: default, valid, error.',
      'prop-message': 'Message below the field (styling follows state).',
      'prop-size': 'Size: sm or md (default md).',
      'prop-disabled': 'Disables the field.',
      'prop-type': 'HTML input type (text, email, number, password, tel, url, etc.). Ignored when textarea.',
      'prop-placeholder': 'Field placeholder.',
      'prop-textarea': 'Renders a textarea instead of an input.',
      'prop-rows': 'Textarea row count (default 4).',
      'prop-icon': 'Remix icon class inside .bj-input-wrap (input only).',
      'label-default': 'Default',
      'label-valid': 'Valid',
      'label-error': 'Error',
      'label-sm': 'sm',
      'label-md': 'md',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjInput } from '@flrxnt/dsbj/vue'

const name = ref('')
<\/script>

<template>
  <BjInput
    v-model="name"
    label="Nom"
    hint="Tel qu’indiqué sur vos documents"
    placeholder="Dupont"
  />
</template>`

const codeStates = `<BjInput v-model="a" label="Neutre" state="default" message="Information" />
<BjInput v-model="b" label="OK" state="valid" message="Format accepté" />
<BjInput v-model="c" label="Problème" state="error" message="Ce champ est requis" />`

const codeSizes = `<BjInput v-model="x" label="Petit" size="sm" placeholder="sm" />
<BjInput v-model="y" label="Moyen" size="md" placeholder="md (défaut)" />`

const codeStateSize = `<!-- error × sm -->
<BjInput v-model="e1" label="Email" size="sm" type="email" state="error" message="Adresse invalide" />
<!-- valid × md -->
<BjInput v-model="e2" label="Email" size="md" type="email" state="valid" message="Adresse valide" />`

const codeTypes = `<BjInput v-model="t1" label="Texte" type="text" />
<BjInput v-model="t2" label="E-mail" type="email" />
<BjInput v-model="t3" label="Nombre" type="number" />
<BjInput v-model="t4" label="Mot de passe" type="password" />
<BjInput v-model="t5" label="Téléphone" type="tel" />
<BjInput v-model="t6" label="URL" type="url" />`

const codeTextarea = `<BjInput v-model="bio" label="Bio" :textarea="true" :rows="6" placeholder="Quelques lignes…" />`

const codeDisabledTextarea = `<BjInput
  v-model="note"
  label="Note (lecture seule)"
  :textarea="true"
  :rows="3"
  :disabled="true"
/>`

const codeIcon = `<BjInput
  v-model="q"
  label="Recherche"
  icon="ri-search-line"
  placeholder="Mots-clés…"
/>`

const codePlaceholderRows = `<BjInput v-model="msg" label="Message" :textarea="true" :rows="8" placeholder="Votre message (8 lignes visibles)" />`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'state', description: t('prop-state') },
  { name: 'message', description: t('prop-message') },
  { name: 'size', description: t('prop-size') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'type', description: t('prop-type') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'textarea', description: t('prop-textarea') },
  { name: 'rows', description: t('prop-rows') },
  { name: 'icon', description: t('prop-icon') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-input-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-states" :title="t('section-states')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-st-1">{{ t('label-default') }}</label>
        <input id="vue-in-st-1" class="bj-input" type="text" />
        <p id="vue-in-st-1-msg" class="bj-message bj-message--info" role="status">Information</p>
      </div>
      <div class="bj-input-group bj-input-group--valid">
        <label class="bj-label" for="vue-in-st-2">{{ t('label-valid') }}</label>
        <input id="vue-in-st-2" class="bj-input" type="text" />
        <p id="vue-in-st-2-msg" class="bj-message bj-message--valid" role="status">Format accepté</p>
      </div>
      <div class="bj-input-group bj-input-group--error">
        <label class="bj-label" for="vue-in-st-3">{{ t('label-error') }}</label>
        <input id="vue-in-st-3" class="bj-input" type="text" aria-invalid="true" />
        <p id="vue-in-st-3-msg" class="bj-message bj-message--error" role="alert">Ce champ est requis</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStates" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-sz-sm">{{ t('label-sm') }}</label>
        <input id="vue-in-sz-sm" class="bj-input bj-input--sm" type="text" placeholder="sm" />
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-sz-md">{{ t('label-md') }}</label>
        <input id="vue-in-sz-md" class="bj-input" type="text" placeholder="md" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-state-size" :title="t('section-state-size')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 24rem">
      <div class="bj-input-group bj-input-group--error">
        <label class="bj-label" for="vue-in-c1">Email</label>
        <input id="vue-in-c1" class="bj-input bj-input--sm" type="email" aria-invalid="true" />
        <p class="bj-message bj-message--error" role="alert">Adresse invalide</p>
      </div>
      <div class="bj-input-group bj-input-group--valid">
        <label class="bj-label" for="vue-in-c2">Email</label>
        <input id="vue-in-c2" class="bj-input" type="email" />
        <p class="bj-message bj-message--valid" role="status">Adresse valide</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStateSize" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-types" :title="t('section-types')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ty-t">Texte</label>
        <input id="vue-in-ty-t" class="bj-input" type="text" />
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ty-e">E-mail</label>
        <input id="vue-in-ty-e" class="bj-input" type="email" />
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ty-n">Nombre</label>
        <input id="vue-in-ty-n" class="bj-input" type="number" />
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ty-p">Mot de passe</label>
        <input id="vue-in-ty-p" class="bj-input" type="password" />
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ty-tel">Téléphone</label>
        <input id="vue-in-ty-tel" class="bj-input" type="tel" />
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ty-u">URL</label>
        <input id="vue-in-ty-u" class="bj-input" type="url" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeTypes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-textarea" :title="t('section-textarea')">
    <DocsPreview style="max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ta">Bio</label>
        <textarea id="vue-in-ta" class="bj-input" rows="6" placeholder="Quelques lignes…" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeTextarea" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-disabled-textarea" :title="t('section-disabled-textarea')">
    <DocsPreview style="max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-dta">Note (lecture seule)</label>
        <textarea id="vue-in-dta" class="bj-input" rows="3" disabled>Lecture seule</textarea>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabledTextarea" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-icon" :title="t('section-icon')">
    <DocsPreview style="max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-ic">Recherche</label>
        <div class="bj-input-wrap">
          <i class="ri-search-line" aria-hidden="true" />
          <input id="vue-in-ic" class="bj-input" type="text" placeholder="Mots-clés…" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIcon" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-placeholder-rows" :title="t('section-placeholder-rows')">
    <DocsPreview style="max-width: 24rem">
      <div class="bj-input-group">
        <label class="bj-label" for="vue-in-pr">Message</label>
        <textarea id="vue-in-pr" class="bj-input" rows="8" placeholder="Votre message (8 lignes visibles)" />
      </div>
    </DocsPreview>
    <DocsCode :code="codePlaceholderRows" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
