<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Champ de saisie',
      desc: 'Libellé, texte d’aide, champ texte ou multiligne, états de validation et champ avec icône pour les formulaires des services publics.',
      'section-default-example': 'Exemple par défaut',
      'section-validation': 'États de validation',
      'section-icon': 'Champ avec icône',
      'section-textarea': 'Zone de texte',
      'section-disabled': 'Champ désactivé',
      'section-types': 'Types de champ (<code>type</code>)',
      'section-types-body':
        'Les classes <code>bj-input</code> s’appliquent à tout <code>input</code> ou <code>textarea</code> ; le comportement (clavier, validation native) vient de l’attribut <code>type</code> HTML.',
      'section-sizes': 'Tailles (<code>bj-input--sm</code>)',
      'section-sizes-body':
        'Par défaut, la taille correspond au gabarit médium (sans modificateur). <code>bj-input--sm</code> compacte le padding et la taille de police.',
      'section-info-message': 'Message informatif',
      'section-info-message-body':
        'Sans modificateur sur le groupe, un retour neutre utilise <code>bj-message bj-message--info</code> (équivalent à l’état <code>default</code> du composant Vue).',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-input-group':
        'Conteneur vertical (label, aide, champ, message).',
      'prop-label': 'Libellé du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-input': 'Champ input ou textarea.',
      'prop-input-sm': 'Variante compacte du champ.',
      'prop-input-group-state':
        'États de validation sur le groupe.',
      'prop-message':
        'Messages de retour sous le champ.',
      'prop-input-wrap': 'Conteneur pour champ avec icône.',
      'prop-input-wrap-icon':
        'À placer sur l’élément d’icône dans <code>bj-input-wrap</code> pour le positionnement à droite.',
      'prop-input-type':
        'Valeurs usuelles\u00a0: <code>text</code>, <code>email</code>, <code>number</code>, <code>password</code>, <code>tel</code>, <code>url</code>, <code>search</code>, etc. Pas de classe dédiée par type.',
      'a11y-note':
        'Associez toujours un <code>label</code> explicite au champ (<code>for</code> / <code>id</code>). Liez le texte d’aide et les messages de validation au champ avec <code>aria-describedby</code> (identifiants uniques sur les éléments décrits). En cas d’erreur, utilisez <code>aria-invalid="true"</code> et un message en <code>role="alert"</code> ou <code>role="status"</code> selon le contexte.',
    },
    en: {
      title: 'Text input',
      desc: 'Label, hint text, single-line or multiline field, validation states, and icon-prefixed field for public-sector forms.',
      'section-default-example': 'Default example',
      'section-validation': 'Validation states',
      'section-icon': 'Input with icon',
      'section-textarea': 'Text area',
      'section-disabled': 'Disabled field',
      'section-types': 'Input <code>type</code> values',
      'section-types-body':
        'Apply <code>bj-input</code> to any <code>input</code> or <code>textarea</code>; keyboard behavior and native validation come from the HTML <code>type</code> attribute.',
      'section-sizes': 'Sizes (<code>bj-input--sm</code>)',
      'section-sizes-body':
        'The default size is the medium layout (no modifier). <code>bj-input--sm</code> reduces padding and font size.',
      'section-info-message': 'Informational message',
      'section-info-message-body':
        'With no state modifier on the group, neutral feedback uses <code>bj-message bj-message--info</code> (same as the Vue component’s <code>default</code> state).',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-input-group':
        'Vertical wrapper (label, hint, field, message).',
      'prop-label': 'Field label.',
      'prop-hint': 'Help text below the label.',
      'prop-input': 'Input or textarea element.',
      'prop-input-sm': 'Compact field variant.',
      'prop-input-group-state': 'Validation state on the group.',
      'prop-message': 'Feedback messages below the field.',
      'prop-input-wrap': 'Wrapper for input with icon.',
      'prop-input-wrap-icon':
        'Apply to the icon element inside <code>bj-input-wrap</code> for right-aligned placement.',
      'prop-input-type':
        'Common values: <code>text</code>, <code>email</code>, <code>number</code>, <code>password</code>, <code>tel</code>, <code>url</code>, <code>search</code>, etc. There is no per-type CSS class.',
      'a11y-note':
        'Always associate an explicit <code>label</code> with the field (<code>for</code> / <code>id</code>). Link hint text and validation messages with <code>aria-describedby</code> (unique ids on the described elements). On error, use <code>aria-invalid="true"</code> and a message with <code>role="alert"</code> or <code>role="status"</code> as appropriate.',
    },
  },
})

const codeDefault = `<div class="bj-input-group">
  <label class="bj-label" for="ex1">Nom</label>
  <span class="bj-hint">Votre nom complet tel qu'il apparaît sur vos documents officiels</span>
  <input class="bj-input" type="text" id="ex1">
</div>`

const codeValidation = `<!-- Succès -->
<div class="bj-input-group bj-input-group--valid">
  <label class="bj-label" for="ifu">N° IFU</label>
  <input class="bj-input" id="ifu" type="text" aria-describedby="msg-ok">
  <p class="bj-message bj-message--valid" id="msg-ok" role="status">Numéro vérifié.</p>
</div>

<!-- Erreur -->
<div class="bj-input-group bj-input-group--error">
  <label class="bj-label" for="dob">Date de naissance</label>
  <input class="bj-input" id="dob" type="text" aria-invalid="true" aria-describedby="msg-err">
  <p class="bj-message bj-message--error" id="msg-err" role="alert">Format attendu : JJ/MM/AAAA.</p>
</div>

<!-- États + taille compacte -->
<div class="bj-input-group bj-input-group--valid">
  <input class="bj-input bj-input--sm" type="text" value="OK" readonly aria-describedby="msg-ok-sm">
  <p class="bj-message bj-message--valid" id="msg-ok-sm" role="status">Validé.</p>
</div>
<div class="bj-input-group bj-input-group--error">
  <input class="bj-input bj-input--sm" type="text" aria-invalid="true" aria-describedby="msg-err-sm">
  <p class="bj-message bj-message--error" id="msg-err-sm" role="alert">Erreur.</p>
</div>`

const codeTypes = `<!-- Les classes restent identiques ; seul type change -->
<input class="bj-input" type="email" inputmode="email" autocomplete="email" placeholder="vous@exemple.bj">
<input class="bj-input" type="number" inputmode="decimal" placeholder="0">
<input class="bj-input" type="password" autocomplete="current-password" placeholder="Mot de passe">
<input class="bj-input" type="tel" inputmode="tel" autocomplete="tel" placeholder="+229 …">
<input class="bj-input" type="url" inputmode="url" autocomplete="url" placeholder="https://…">`

const codeSizes = `<!-- md (défaut) : classe bj-input seule -->
<input class="bj-input" type="text" placeholder="Taille par défaut">
<!-- sm -->
<input class="bj-input bj-input--sm" type="text" placeholder="Taille compacte">
<textarea class="bj-input bj-input--sm" rows="3" placeholder="Zone compacte"></textarea>`

const codeInfoMessage = `<div class="bj-input-group">
  <label class="bj-label" for="ex-info">Identifiant fiscal</label>
  <input class="bj-input" type="text" id="ex-info" aria-describedby="ex-info-msg">
  <p id="ex-info-msg" class="bj-message bj-message--info" role="status">Ce champ est prérempli à partir de votre profil.</p>
</div>`

const codeIcon = `<!-- Icône à droite (md) -->
<div class="bj-input-wrap">
  <i class="ri-search-line bj-input-wrap__icon" aria-hidden="true"></i>
  <input class="bj-input" type="search" placeholder="Rechercher…">
</div>
<!-- Même disposition, champ compact -->
<div class="bj-input-wrap">
  <i class="ri-mail-line bj-input-wrap__icon" aria-hidden="true"></i>
  <input class="bj-input bj-input--sm" type="email" placeholder="Courriel">
</div>`

const codeTextarea = `<div class="bj-input-group">
  <label class="bj-label" for="motif">Motif de la demande</label>
  <textarea class="bj-input" id="motif" rows="4" placeholder="Votre message…"></textarea>
</div>

<!-- Zone en erreur (bordure héritée du groupe) -->
<div class="bj-input-group bj-input-group--error">
  <label class="bj-label" for="just">Justification</label>
  <textarea class="bj-input" id="just" rows="3" aria-invalid="true" aria-describedby="just-msg"></textarea>
  <p id="just-msg" class="bj-message bj-message--error" role="alert">Minimum 20 caractères.</p>
</div>`

const codeDisabled =
  '<input class="bj-input" type="text" disabled value="BJ-2025-00442">'

const propsRows = computed(() => [
  {
    name: 'bj-input-group',
    description: t('prop-input-group'),
  },
  { name: 'bj-label', description: t('prop-label') },
  { name: 'bj-hint', description: t('prop-hint') },
  {
    name: 'bj-input',
    description: t('prop-input'),
  },
  { name: 'bj-input--sm', description: t('prop-input-sm') },
  {
    name: 'bj-input-group--valid / bj-input-group--error',
    description: t('prop-input-group-state'),
  },
  {
    name: 'bj-message, bj-message--valid, bj-message--error, bj-message--info',
    description: t('prop-message'),
  },
  { name: 'bj-input-wrap', description: t('prop-input-wrap') },
  {
    name: 'bj-input-wrap__icon',
    description: t('prop-input-wrap-icon'),
  },
  {
    name: '(attribut type)',
    description: t('prop-input-type'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection
    id="sec-exemple-defaut"
    :title="t('section-default-example')"
  >
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

  <DocsSection id="sec-types" :title="t('section-types')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-types-body')"
    />
    <DocsPreview>
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: var(--bj-spacing-4v);
          max-width: 28rem;
        "
      >
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-t-email">Courriel</label>
          <input
            id="input-t-email"
            class="bj-input"
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="vous@exemple.bj"
          />
        </div>
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-t-num">Montant</label>
          <input
            id="input-t-num"
            class="bj-input"
            type="number"
            inputmode="decimal"
            placeholder="0"
          />
        </div>
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-t-pass">Mot de passe</label>
          <input
            id="input-t-pass"
            class="bj-input"
            type="password"
            autocomplete="current-password"
            placeholder="••••••••"
          />
        </div>
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-t-tel">Téléphone</label>
          <input
            id="input-t-tel"
            class="bj-input"
            type="tel"
            inputmode="tel"
            autocomplete="tel"
            placeholder="+229 …"
          />
        </div>
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-t-url">Site web</label>
          <input
            id="input-t-url"
            class="bj-input"
            type="url"
            inputmode="url"
            autocomplete="url"
            placeholder="https://…"
          />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTypes" />
  </DocsSection>

  <DocsSection id="sec-tailles" :title="t('section-sizes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-sizes-body')"
    />
    <DocsPreview>
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: var(--bj-spacing-4v);
          max-width: 28rem;
        "
      >
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-sz-md">Par défaut (md)</label>
          <input
            id="input-sz-md"
            class="bj-input"
            type="text"
            placeholder="Taille standard"
          />
        </div>
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-sz-sm">Compact (sm)</label>
          <input
            id="input-sz-sm"
            class="bj-input bj-input--sm"
            type="text"
            placeholder="Taille compacte"
          />
        </div>
        <div class="bj-input-group" style="margin-bottom: 0">
          <label class="bj-label" for="input-sz-ta">Textarea sm</label>
          <textarea
            id="input-sz-ta"
            class="bj-input bj-input--sm"
            rows="3"
            placeholder="Zone multiligne compacte"
          ></textarea>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" />
  </DocsSection>

  <DocsSection id="sec-message-info" :title="t('section-info-message')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-info-message-body')"
    />
    <DocsPreview>
      <div class="bj-input-group">
        <label class="bj-label" for="input-info">Identifiant fiscal</label>
        <input
          id="input-info"
          class="bj-input"
          type="text"
          aria-describedby="input-info-msg"
        />
        <p
          id="input-info-msg"
          class="bj-message bj-message--info"
          role="status"
        >
          Ce champ est prérempli à partir de votre profil.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeInfoMessage" />
  </DocsSection>

  <DocsSection id="sec-validation" :title="t('section-validation')">
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
      <div class="bj-input-group bj-input-group--valid">
        <label class="bj-label" for="input-val-ok-sm">Code (compact)</label>
        <input
          id="input-val-ok-sm"
          class="bj-input bj-input--sm"
          type="text"
          value="OK"
          readonly
          aria-describedby="input-val-ok-sm-msg"
        />
        <p
          id="input-val-ok-sm-msg"
          class="bj-message bj-message--valid"
          role="status"
        >
          Validé.
        </p>
      </div>
      <div class="bj-input-group bj-input-group--error">
        <label class="bj-label" for="input-val-err-sm">Champ (compact)</label>
        <input
          id="input-val-err-sm"
          class="bj-input bj-input--sm"
          type="text"
          aria-invalid="true"
          aria-describedby="input-val-err-sm-msg"
        />
        <p
          id="input-val-err-sm-msg"
          class="bj-message bj-message--error"
          role="alert"
        >
          Saisie invalide.
        </p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeValidation" />
  </DocsSection>

  <DocsSection id="sec-icone" :title="t('section-icon')">
    <DocsPreview>
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: var(--bj-spacing-3v);
          max-width: 28rem;
        "
      >
        <div class="bj-input-wrap">
          <i
            class="ri-search-line bj-input-wrap__icon"
            aria-hidden="true"
          ></i>
          <input
            class="bj-input"
            type="search"
            placeholder="Rechercher…"
          />
        </div>
        <div class="bj-input-wrap">
          <i
            class="ri-mail-line bj-input-wrap__icon"
            aria-hidden="true"
          ></i>
          <input
            class="bj-input bj-input--sm"
            type="email"
            placeholder="Courriel"
          />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeIcon" />
  </DocsSection>

  <DocsSection id="sec-textarea" :title="t('section-textarea')">
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

  <DocsSection id="sec-desactive" :title="t('section-disabled')">
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

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
