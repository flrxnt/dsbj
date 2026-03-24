<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeDefault = `<div class="bj-input-group">
  <label class="bj-label" for="ex1">Nom</label>
  <span class="bj-hint">Votre nom complet tel qu'il apparaît sur vos documents officiels</span>
  <input class="bj-input" type="text" id="ex1">
</div>`

const codeValidation = `<!-- Succès -->
<div class="bj-input-group bj-input-group--valid">
  …
  <p class="bj-message bj-message--valid" id="msg-ok" role="status">…</p>
</div>

<!-- Erreur -->
<div class="bj-input-group bj-input-group--error">
  …
  <p class="bj-message bj-message--error" id="msg-err" role="alert">…</p>
</div>`

const codeIcon =
  '<div class="bj-input-wrap"><i class="ri-search-line"></i><input class="bj-input" type="search" placeholder="Rechercher..."></div>'

const codeTextarea = `<div class="bj-input-group">
  <label class="bj-label" for="motif">Motif de la demande</label>
  <textarea class="bj-input" id="motif" rows="4"></textarea>
</div>`

const codeDisabled =
  '<input class="bj-input" type="text" disabled value="BJ-2025-00442">'

const propsRows = [
  {
    name: 'bj-input-group',
    description: 'Conteneur vertical (label, aide, champ, message).',
  },
  { name: 'bj-label', description: 'Libellé du champ.' },
  { name: 'bj-hint', description: 'Texte d’aide sous le libellé.' },
  {
    name: 'bj-input',
    description: 'Champ input ou textarea.',
  },
  { name: 'bj-input--sm', description: 'Variante compacte du champ.' },
  {
    name: 'bj-input-group--valid / bj-input-group--error',
    description: 'États de validation sur le groupe.',
  },
  {
    name: 'bj-message, bj-message--valid, bj-message--error, bj-message--info',
    description: 'Messages de retour sous le champ.',
  },
  { name: 'bj-input-wrap', description: 'Conteneur pour champ avec icône.' },
  {
    name: 'bj-input-wrap__icon',
    description:
      'Icône positionnée (alternative au marquage avec élément i).',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Champ de saisie
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Libellé, texte d’aide, champ texte ou multiligne, états de
    validation et champ avec icône pour les formulaires des services
    publics.
  </p>

  <DocsSection id="sec-exemple-defaut" title="Exemple par défaut">
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-ex1">Nom</label>
        <span id="input-ex1-hint" class="bj-hint"
          >Votre nom complet tel qu’il apparaît sur vos documents
          officiels</span
        >
        <input
          id="input-ex1"
          class="bj-input"
          type="text"
          autocomplete="name"
          aria-describedby="input-ex1-hint"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDefault" />
  </DocsSection>

  <DocsSection id="sec-validation" title="États de validation">
    <DocsPreview>
      <div class="bj-input-group bj-input-group--valid">
        <label class="bj-label" for="input-val-ok">N° IFU</label>
        <input
          id="input-val-ok"
          class="bj-input"
          type="text"
          value="1234567890123"
          readonly
          aria-describedby="input-val-ok-msg"
        />
        <p
          id="input-val-ok-msg"
          class="bj-message bj-message--valid"
          role="status"
        >
          <i class="ri-checkbox-circle-line" aria-hidden="true"></i>
          Numéro enregistré et vérifié.
        </p>
      </div>
      <div class="bj-input-group bj-input-group--error">
        <label class="bj-label" for="input-val-err"
          >Date de naissance</label
        >
        <input
          id="input-val-err"
          class="bj-input"
          type="text"
          placeholder="JJ/MM/AAAA"
          aria-invalid="true"
          aria-describedby="input-val-err-msg"
        />
        <p
          id="input-val-err-msg"
          class="bj-message bj-message--error"
          role="alert"
        >
          Format attendu&nbsp;: JJ/MM/AAAA.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeValidation" />
  </DocsSection>

  <DocsSection id="sec-icone" title="Champ avec icône">
    <DocsPreview>
      <div class="bj-input-wrap">
        <i class="ri-search-line" aria-hidden="true"></i>
        <input
          class="bj-input"
          type="search"
          placeholder="Rechercher…"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeIcon" />
  </DocsSection>

  <DocsSection id="sec-textarea" title="Zone de texte">
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-ta"
          >Motif de la demande</label
        >
        <span id="input-ta-hint" class="bj-hint"
          >Décrivez brièvement votre situation (facultatif).</span
        >
        <textarea
          id="input-ta"
          class="bj-input"
          rows="4"
          aria-describedby="input-ta-hint"
          placeholder="Votre message…"
        ></textarea>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTextarea" />
  </DocsSection>

  <DocsSection id="sec-desactive" title="Champ désactivé">
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-dis"
          >Référence dossier</label
        >
        <input
          id="input-dis"
          class="bj-input"
          type="text"
          disabled
          value="BJ-2025-00442"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" />
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Associez toujours un <code>label</code> explicite au champ
      (<code>for</code> / <code>id</code>). Liez le texte d’aide et
      les messages de validation au champ avec
      <code>aria-describedby</code> (identifiants uniques sur les
      éléments décrits). En cas d’erreur, utilisez
      <code>aria-invalid="true"</code> et un message en
      <code>role="alert"</code> ou <code>role="status"</code> selon
      le contexte.
    </DocsA11yNote>
  </DocsSection>
</template>
