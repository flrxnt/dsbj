<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bandeau',
      desc:
        'Bandeau horizontal : variante <code>default</code> (classe <code>bj-notice</code> seule), <code>bj-notice--info</code>, <code>bj-notice--warning</code>, <code>bj-notice--alert</code>. Icône optionnelle (<code>&lt;i class="bj-notice__icon …"&gt;</code>), titre <code>bj-notice__title</code> dans <code>bj-notice__body</code>, contenu dans le corps, bouton <code>bj-notice__close</code> si fermable.',
      'section-default': 'Variante par défaut',
      'para-default':
        'Sans modificateur : fond et bordure neutres ; ajoutez une icône ou un titre selon le contexte.',
      'section-exemple': 'Exemple avec icône',
      'section-title': 'Titre dans le corps',
      'para-title':
        'Le titre est un <code>&lt;p class="bj-notice__title"&gt;</code> ; le reste du message suit dans le même <code>bj-notice__body</code> (équivalent du slot Vue).',
      'section-closable': 'Bandeau fermable',
      'para-closable':
        'Ajoutez <code>bj-notice__close</code> avec un <code>aria-label</code> explicite sur n’importe quelle variante.',
      'section-variantes': 'Variantes sémantiques',
      'section-combo': 'Variante × fermeture',
      'para-combo':
        'La combinaison <code>bj-notice--alert</code> et bouton fermer est courante pour les annonces critiques dismissibles.',
      'section-icon-variant': 'Icône × variante',
      'para-icon':
        'Chaque variante peut inclure ou non une icône Remix cohérente avec le ton du message.',
      'section-variant-close-matrix':
        'Toutes les variantes × fermeture',
      'para-variant-close-matrix':
        'Par défaut, info, warning et alert peuvent tous recevoir <code>bj-notice__close</code> ; choisissez <code>role="alert"</code> pour les messages urgents.',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'prop-bj-notice':
        'Bandeau flex ; style par défaut sans modificateur de variante.',
      'prop-bj-notice__icon':
        'Icône à gauche (<code>&lt;i&gt;</code>, classes Remix + <code>aria-hidden="true"</code>).',
      'prop-bj-notice__body':
        'Conteneur du titre optionnel et du contenu principal.',
      'prop-bj-notice__title':
        'Intitulé court ou préfixe en gras dans le corps.',
      'prop-bj-notice__close':
        'Bouton de fermeture à droite (aucune classe <code>bj-notice--closable</code> — le bouton suffit, comme pour l’alerte).',
      'prop-bj-notice--info':
        'Accent gauche information (bleu).',
      'prop-bj-notice--warning': 'Accent avertissement.',
      'prop-bj-notice--alert':
        'Accent critique (erreur / urgence).',
      'a11y-note':
        'Pour un message non critique et statique, <code>role="status"</code> convient. Pour une urgence immédiate, <code>role="alert"</code> peut être approprié. Le bouton « fermer » exige un libellé explicite ; si le bandeau disparaît, évitez de piéger le focus.',
    },
    en: {
      title: 'Notice bar',
      desc:
        'Horizontal bar: <code>default</code> (<code>bj-notice</code> only), <code>bj-notice--info</code>, <code>bj-notice--warning</code>, <code>bj-notice--alert</code>. Optional icon (<code>&lt;i class="bj-notice__icon …"&gt;</code>), <code>bj-notice__title</code> inside <code>bj-notice__body</code>, body content, and <code>bj-notice__close</code> when dismissible.',
      'section-default': 'Default variant',
      'para-default':
        'No modifier: neutral background and border; add icon or title as needed.',
      'section-exemple': 'Example with icon',
      'section-title': 'Title in the body',
      'para-title':
        'The title is a <code>&lt;p class="bj-notice__title"&gt;</code>; the rest of the message follows in the same <code>bj-notice__body</code> (Vue default slot).',
      'section-closable': 'Dismissible bar',
      'para-closable':
        'Add <code>bj-notice__close</code> with an explicit <code>aria-label</code> on any variant.',
      'section-variantes': 'Semantic variants',
      'section-combo': 'Variant × close',
      'para-combo':
        '<code>bj-notice--alert</code> plus a close button is common for dismissible critical notices.',
      'section-icon-variant': 'Icon × variant',
      'para-icon':
        'Any variant may include or omit a Remix icon that matches the message tone.',
      'section-variant-close-matrix':
        'All variants × dismiss',
      'para-variant-close-matrix':
        'Default, info, warning, and alert can all include <code>bj-notice__close</code>; use <code>role="alert"</code> for urgent messages.',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'prop-bj-notice':
        'Flex bar; default styling with no variant modifier.',
      'prop-bj-notice__icon':
        'Left icon (<code>&lt;i&gt;</code>, Remix classes + <code>aria-hidden="true"</code>).',
      'prop-bj-notice__body':
        'Wrapper for optional title and main content.',
      'prop-bj-notice__title':
        'Short label or bold prefix in the body.',
      'prop-bj-notice__close':
        'Close button on the right (no <code>bj-notice--closable</code> class—the button is enough, same pattern as alert).',
      'prop-bj-notice--info': 'Left accent for information (blue).',
      'prop-bj-notice--warning': 'Warning accent.',
      'prop-bj-notice--alert':
        'Critical accent (error / urgency).',
      'a11y-note':
        'For non-critical static messages, <code>role="status"</code> is appropriate. For immediate urgency, <code>role="alert"</code> may fit. The close button needs a clear label; if the bar is removed, avoid trapping focus.',
    },
  },
})

const codeDefault = `<div class="bj-notice" role="status">
  <div class="bj-notice__body">
    Message sur la variante par défaut (sans modificateur).
  </div>
</div>`

const codeExemple = `<div class="bj-notice" role="status">
  <i class="bj-notice__icon ri-megaphone-line" aria-hidden="true"></i>
  <div class="bj-notice__body">
    Le guichet physique est fermé le vendredi après-midi.
  </div>
</div>`

const codeTitle = `<div class="bj-notice bj-notice--info" role="status">
  <i class="bj-notice__icon ri-information-line bj-icon bj-icon--info" aria-hidden="true"></i>
  <div class="bj-notice__body">
    <p class="bj-notice__title">Info — </p>
    Nouvelle version du portail disponible.
  </div>
</div>`

const codeClosable = `<div class="bj-notice bj-notice--info" role="status">
  <div class="bj-notice__body">Bandeau fermable sur variante info.</div>
  <button type="button" class="bj-notice__close" aria-label="Fermer le bandeau">
    <i class="ri-close-line" aria-hidden="true"></i>
  </button>
</div>`

const codeVariantes = `<div class="bj-notice bj-notice--info" role="status">…</div>
<div class="bj-notice bj-notice--warning" role="status">…</div>
<div class="bj-notice bj-notice--alert" role="alert">…</div>`

const codeCombo = `<div class="bj-notice bj-notice--alert" role="alert">
  <i class="bj-notice__icon ri-error-warning-line bj-icon bj-icon--error" aria-hidden="true"></i>
  <div class="bj-notice__body">
    <p class="bj-notice__title">Urgent — </p>
    Interruption ce soir de 22h à 2h.
  </div>
  <button type="button" class="bj-notice__close" aria-label="Fermer le bandeau">
    <i class="ri-close-line" aria-hidden="true"></i>
  </button>
</div>`

const codeCloseMatrix = `<!-- Défaut + fermeture -->
<div class="bj-notice" role="status">
  <div class="bj-notice__body">Message</div>
  <button type="button" class="bj-notice__close" aria-label="Fermer">…</button>
</div>
<!-- Répéter avec bj-notice--info, bj-notice--warning, bj-notice--alert -->`

const propsRows = computed(() => [
  {
    name: 'bj-notice',
    description: t('prop-bj-notice'),
  },
  {
    name: 'bj-notice__icon',
    description: t('prop-bj-notice__icon'),
  },
  {
    name: 'bj-notice__body',
    description: t('prop-bj-notice__body'),
  },
  {
    name: 'bj-notice__title',
    description: t('prop-bj-notice__title'),
  },
  {
    name: 'bj-notice__close',
    description: t('prop-bj-notice__close'),
  },
  {
    name: 'bj-notice--info',
    description: t('prop-bj-notice--info'),
  },
  {
    name: 'bj-notice--warning',
    description: t('prop-bj-notice--warning'),
  },
  {
    name: 'bj-notice--alert',
    description: t('prop-bj-notice--alert'),
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
    <span v-html="t('desc')" />
  </p>

  <DocsSection id="notice-default" :title="t('section-default')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-default')" />
    </p>
    <DocsPreview style="padding: 0">
      <div class="bj-notice" role="status">
        <div class="bj-notice__body">
          Message sur la variante par défaut (sans modificateur).
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDefault" />
  </DocsSection>

  <DocsSection id="exemple-notice" :title="t('section-exemple')">
    <DocsPreview style="padding: 0">
      <div class="bj-notice" role="status">
        <i
          class="bj-notice__icon ri-megaphone-line bj-icon"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          Le guichet physique est fermé le vendredi après-midi.
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="notice-title" :title="t('section-title')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-title')" />
    </p>
    <DocsPreview style="padding: 0">
      <div class="bj-notice bj-notice--info" role="status">
        <i
          class="bj-notice__icon ri-information-line bj-icon bj-icon--info"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          <p class="bj-notice__title">Info —</p>
          Nouvelle version du portail disponible.
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTitle" />
  </DocsSection>

  <DocsSection id="notice-closable" :title="t('section-closable')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-closable')" />
    </p>
    <DocsPreview style="padding: 0">
      <div class="bj-notice bj-notice--info" role="status">
        <div class="bj-notice__body">
          Bandeau fermable sur variante info.
        </div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeClosable" />
  </DocsSection>

  <DocsSection id="variantes-notice" :title="t('section-variantes')">
    <DocsPreview
      style="
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
      "
    >
      <div class="bj-notice bj-notice--info" role="status">
        <i
          class="bj-notice__icon ri-information-line bj-icon bj-icon--info"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          <span class="bj-notice__title">Info — </span>Nouvelle
          version du portail disponible.
        </div>
      </div>
      <div class="bj-notice bj-notice--warning" role="status">
        <i
          class="bj-notice__icon ri-alert-line bj-icon bj-icon--warning"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          Délai de réponse allongé pendant les travaux.
        </div>
      </div>
      <div class="bj-notice bj-notice--alert" role="alert">
        <i
          class="bj-notice__icon ri-error-warning-line bj-icon bj-icon--error"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          Interruption programmée ce soir de 22h à 2h.
        </div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="notice-combo" :title="t('section-combo')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-combo')" />
    </p>
    <DocsPreview style="padding: 0">
      <div class="bj-notice bj-notice--alert" role="alert">
        <i
          class="bj-notice__icon ri-error-warning-line bj-icon bj-icon--error"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          <p class="bj-notice__title">Urgent —</p>
          Interruption ce soir de 22h à 2h.
        </div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombo" />
  </DocsSection>

  <DocsSection
    id="notice-variant-close-matrix"
    :title="t('section-variant-close-matrix')"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-variant-close-matrix')" />
    </p>
    <DocsPreview
      style="
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
      "
    >
      <div class="bj-notice" role="status">
        <div class="bj-notice__body">
          Variante par défaut avec bouton fermer.
        </div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bj-notice bj-notice--info" role="status">
        <div class="bj-notice__body">Info avec fermeture.</div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bj-notice bj-notice--warning" role="status">
        <div class="bj-notice__body">Warning avec fermeture.</div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bj-notice bj-notice--alert" role="alert">
        <div class="bj-notice__body">Alert avec fermeture.</div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCloseMatrix" />
  </DocsSection>

  <DocsSection id="notice-icon-variant" :title="t('section-icon-variant')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-icon')" />
    </p>
    <DocsPreview
      style="
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
      "
    >
      <div class="bj-notice bj-notice--warning" role="status">
        <div class="bj-notice__body">
          Variante warning sans icône (texte seul).
        </div>
      </div>
      <div class="bj-notice bj-notice--warning" role="status">
        <i
          class="bj-notice__icon ri-alert-line bj-icon bj-icon--warning"
          aria-hidden="true"
        ></i>
        <div class="bj-notice__body">
          Même variante avec icône alignée sur le ton d’avertissement.
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="classes-notice" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-notice" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
