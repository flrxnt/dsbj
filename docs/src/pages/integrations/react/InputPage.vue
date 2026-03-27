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
      desc: 'Champ React contrôlé avec libellé, aide, états de validation, variante textarea et champ avec icône Remix.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-value': 'Valeur contrôlée du champ, chaîne.',
      'prop-onChange': 'Gestionnaire de changement sur l’input ou la textarea.',
      'prop-label': 'Libellé accessible au-dessus du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-state': 'État visuel : default, valid ou error.',
      'prop-message': 'Message sous le champ (couleur selon l’état).',
      'prop-size': 'Taille : sm ou md (défaut md).',
      'prop-textarea': 'Si vrai, rend une textarea au lieu d’un input.',
      'prop-rows': 'Nombre de lignes de la textarea (défaut 4).',
      'prop-icon': 'Classe d’icône Remix ; enveloppe le input dans bj-input-wrap.',
      'prop-id': 'Identifiant du champ ; sinon généré automatiquement.',
      'prop-className': 'Classe CSS sur l’input ou la textarea.',
      'prop-rest': 'Autres attributs HTML natifs de input ou textarea (hors size, value, defaultValue, onChange et id réservés).',
    },
    en: {
      title: 'BjInput',
      desc: 'Controlled React text field with label, hint, validation states, optional textarea mode, and optional Remix icon slot.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'Controlled field value, string.',
      'prop-onChange': 'Change handler for the input or textarea.',
      'prop-label': 'Accessible label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-state': 'Visual state: default, valid, or error.',
      'prop-message': 'Message below the field (styling follows state).',
      'prop-size': 'Size: sm or md (default md).',
      'prop-textarea': 'When true, renders a textarea instead of an input.',
      'prop-rows': 'Textarea row count (default 4).',
      'prop-icon': 'Remix icon class; wraps the input in bj-input-wrap.',
      'prop-id': 'Field id; auto-generated when omitted.',
      'prop-className': 'CSS class on the input or textarea element.',
      'prop-rest': 'Other native input or textarea HTML attributes (size, value, defaultValue, onChange, and id are reserved).',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [name, setName] = useState('')
  return (
    <BjInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      label="Nom"
      hint="Tel qu’indiqué sur vos documents"
      placeholder="Dupont"
    />
  )
}`

const codeStates = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [a, setA] = useState('')
  const [b, setB] = useState('ok@example.com')
  const [c, setC] = useState('')
  return (
    <>
      <BjInput value={a} onChange={(e) => setA(e.target.value)} label="Défaut" state="default" message="Message informatif" />
      <BjInput value={b} onChange={(e) => setB(e.target.value)} label="Valide" state="valid" message="Format accepté" />
      <BjInput value={c} onChange={(e) => setC(e.target.value)} label="Erreur" state="error" message="Champ obligatoire" />
    </>
  )
}`

const codeSizes = `import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  return (
    <>
      <BjInput size="sm" label="Petit" placeholder="sm" />
      <BjInput size="md" label="Moyen (défaut)" placeholder="md" />
    </>
  )
}`

const codeTypes = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [v, setV] = useState({ email: '', num: '', pass: '', tel: '', url: '' })
  return (
    <>
      <BjInput type="email" label="E-mail" value={v.email} onChange={(e) => setV((s) => ({ ...s, email: e.target.value }))} />
      <BjInput type="number" label="Nombre" value={v.num} onChange={(e) => setV((s) => ({ ...s, num: e.target.value }))} />
      <BjInput type="password" label="Mot de passe" value={v.pass} onChange={(e) => setV((s) => ({ ...s, pass: e.target.value }))} />
      <BjInput type="tel" label="Téléphone" value={v.tel} onChange={(e) => setV((s) => ({ ...s, tel: e.target.value }))} />
      <BjInput type="url" label="URL" value={v.url} onChange={(e) => setV((s) => ({ ...s, url: e.target.value }))} />
    </>
  )
}`

const codeTextarea = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [text, setText] = useState('')
  return (
    <BjInput
      textarea
      rows={6}
      value={text}
      onChange={(e) => setText(e.target.value)}
      label="Commentaire"
      placeholder="Votre message…"
    />
  )
}`

const codeIcon = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [q, setQ] = useState('')
  return (
    <BjInput
      icon="ri-mail-line"
      type="email"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      label="Courriel"
      placeholder="vous@exemple.com"
    />
  )
}`

const codeDisabled = `import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  return <BjInput label="Lecture seule" value="Non modifiable" disabled />
}`

const codeCombinations = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [v, setV] = useState('')
  return (
    <BjInput
      size="sm"
      icon="ri-user-line"
      state="error"
      message="Identifiant requis"
      label="Identifiant"
      value={v}
      onChange={(e) => setV(e.target.value)}
      placeholder="min. 3 caractères"
    />
  )
}`

const codeCallbacks = `import { useState, type ChangeEvent } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [value, setValue] = useState('')
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value)
  }
  return (
    <BjInput id="login-field" value={value} onChange={handleChange} label="Login" hint="Sensible à la casse" />
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onChange', description: t('prop-onChange') },
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
  { name: 'id', description: t('prop-id') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-input-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-input-group" style="max-width: 24rem">
        <label class="bj-label" for="react-in-prev">Nom</label>
        <span class="bj-hint">Votre nom complet tel qu’il apparaît sur vos documents officiels</span>
        <input id="react-in-prev" class="bj-input" type="text" placeholder="Dupont" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-input-states" :title="t('section-states')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-states') }}</p>
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); max-width: 24rem">
        <div class="bj-input-group">
          <label class="bj-label" for="react-in-st-def">Défaut</label>
          <input id="react-in-st-def" class="bj-input" type="text" aria-describedby="react-in-st-def-msg" />
          <p id="react-in-st-def-msg" class="bj-message bj-message--info" role="status">Message informatif</p>
        </div>
        <div class="bj-input-group bj-input-group--valid">
          <label class="bj-label" for="react-in-st-ok">Valide</label>
          <input id="react-in-st-ok" class="bj-input" type="email" value="ok@example.com" aria-describedby="react-in-st-ok-msg" />
          <p id="react-in-st-ok-msg" class="bj-message bj-message--valid" role="status">Format accepté</p>
        </div>
        <div class="bj-input-group bj-input-group--error">
          <label class="bj-label" for="react-in-st-err">Erreur</label>
          <input id="react-in-st-err" class="bj-input" type="text" aria-invalid="true" aria-describedby="react-in-st-err-msg" />
          <p id="react-in-st-err-msg" class="bj-message bj-message--error" role="alert">Champ obligatoire</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStates" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-sizes" :title="t('section-sizes')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-sizes') }}</p>
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 24rem">
        <div class="bj-input-group">
          <label class="bj-label" for="react-in-sz-sm">Petit</label>
          <input id="react-in-sz-sm" class="bj-input bj-input--sm" type="text" placeholder="sm" />
        </div>
        <div class="bj-input-group">
          <label class="bj-label" for="react-in-sz-md">Moyen</label>
          <input id="react-in-sz-md" class="bj-input" type="text" placeholder="md" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-types" :title="t('section-types')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-types') }}</p>
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 24rem">
        <div class="bj-input-group"><label class="bj-label" for="react-in-t-email">E-mail</label><input id="react-in-t-email" class="bj-input" type="email" /></div>
        <div class="bj-input-group"><label class="bj-label" for="react-in-t-num">Nombre</label><input id="react-in-t-num" class="bj-input" type="number" /></div>
        <div class="bj-input-group"><label class="bj-label" for="react-in-t-pass">Mot de passe</label><input id="react-in-t-pass" class="bj-input" type="password" /></div>
        <div class="bj-input-group"><label class="bj-label" for="react-in-t-tel">Téléphone</label><input id="react-in-t-tel" class="bj-input" type="tel" /></div>
        <div class="bj-input-group"><label class="bj-label" for="react-in-t-url">URL</label><input id="react-in-t-url" class="bj-input" type="url" /></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTypes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-textarea" :title="t('section-textarea')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-textarea') }}</p>
    <DocsPreview>
      <div class="bj-input-group" style="max-width: 24rem">
        <label class="bj-label" for="react-in-ta">Commentaire</label>
        <textarea id="react-in-ta" class="bj-input" rows="6" placeholder="Votre message…"></textarea>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTextarea" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-icon" :title="t('section-icon')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-icon') }}</p>
    <DocsPreview>
      <div class="bj-input-group" style="max-width: 24rem">
        <label class="bj-label" for="react-in-ic">Courriel</label>
        <div class="bj-input-wrap">
          <i class="ri-mail-line" aria-hidden="true"></i>
          <input id="react-in-ic" class="bj-input" type="email" placeholder="vous@exemple.com" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIcon" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-disabled" :title="t('section-disabled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled') }}</p>
    <DocsPreview>
      <div class="bj-input-group" style="max-width: 24rem">
        <label class="bj-label" for="react-in-dis">Lecture seule</label>
        <input id="react-in-dis" class="bj-input" type="text" value="Non modifiable" disabled />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <div class="bj-input-group bj-input-group--error" style="max-width: 24rem">
        <label class="bj-label" for="react-in-combo">Identifiant</label>
        <div class="bj-input-wrap">
          <i class="ri-user-line" aria-hidden="true"></i>
          <input id="react-in-combo" class="bj-input bj-input--sm" type="text" placeholder="min. 3 caractères" aria-invalid="true" aria-describedby="react-in-combo-msg" />
        </div>
        <p id="react-in-combo-msg" class="bj-message bj-message--error" role="alert">Identifiant requis</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
