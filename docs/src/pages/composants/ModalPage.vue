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
      title: 'Fenêtre modale',
      desc: 'Dialogue modal avec overlay, fermeture Échap, piège de focus et restauration du focus sur l’élément déclencheur.',
      'section-size-default': 'Taille par défaut (medium)',
      'size-default-intro':
        'Sans modificateur de largeur, la boîte suit la largeur standard du design system.',
      'section-size-sm': 'Petite (sm)',
      'size-sm-intro':
        'Idéal pour les confirmations courtes ou les messages légers.',
      'section-size-lg': 'Grande (lg)',
      'size-lg-intro':
        'Pour formulaires ou tableaux plus larges dans le corps du dialogue.',
      'section-size-full': 'Plein écran (full)',
      'size-full-intro':
        'Occupe presque toute la hauteur utile (visionneuse, assistant, contenu dense).',
      'section-variants': 'Attributs et état ouvert',
      'section-classes-css': 'Classes CSS',
      'section-react': 'React (BjModal)',
      'react-intro':
        "Le paquet <code>{'@'}flrxnt/dsbj/react</code> exporte <code>BjModal</code> : états <code>open</code> et <code>onClose</code>, <code>title</code>, <code>size</code>, <code>footer</code>, <code>closeLabel</code> pour le libellé accessible du bouton fermer (icône seule), avec les mêmes comportements que le script HTML (piège de focus, restauration du focus, <code>role=\"dialog\"</code>, <code>aria-modal=\"true\"</code>, <code>aria-labelledby=\"id-title\"</code>).",
      'section-a11y': 'Accessibilité',
      'variants-on': 'sur le',
      'variants-expanded':
        'Le script DSBJ ouvre la modale en posant',
      'variants-expanded-2':
        'sur le conteneur',
      'variants-expanded-3':
        '; le style affiche alors la boîte (',
      'variants-expanded-4':
        'équivaut à un état ouvert sans JS).',
      'prop-modal': 'Conteneur plein écran ; masqué par défaut, visible avec data-bj-expanded ou bj-modal--opened.',
      'prop-overlay': 'Fond cliquable pour fermer (souvent avec data-bj-modal-close).',
      'prop-dialog': 'Boîte de dialogue (largeur max selon la taille).',
      'prop-header': 'En-tête optionnel (titre + fermeture).',
      'prop-title': 'Titre de la modale ; cible de aria-labelledby.',
      'prop-close': 'Bouton de fermeture (icône seule ; aria-label requis).',
      'prop-body': 'Zone de contenu principale.',
      'prop-footer': 'Pied optionnel (actions).',
      'prop-widths': 'Largeurs : petite, grande, plein écran.',
      'prop-data-open': 'Sur le bouton d’ouverture : valeur = id de la modale.',
      'prop-data-close': 'Sur un contrôle qui ferme : overlay, bouton, liens du pied.',
      'prop-data-expanded':
        'État ouvert : posé par le script sur le conteneur bj-modal. Sans JS, bj-modal--opened joue le même rôle pour l’affichage.',
      'a11y-note':
        '<p>Le conteneur doit exposer <code>role="dialog"</code>, <code>aria-modal="true"</code> et <code>aria-labelledby</code> vers l’identifiant du titre de la modale, afin d’associer un nom accessible au dialogue.</p><p>Avec le script DSBJ ou les composants <code>BjModal</code> Vue/React, le focus est <strong>piégé</strong> dans la modale ouverte&nbsp;: <code>Tab</code> et <code>Maj+Tab</code> parcourent uniquement les éléments focalisables à l’intérieur du dialogue, sans retourner à la page de fond. À la fermeture, le focus est <strong>restauré</strong> sur l’élément qui a ouvert la modale (sélecteur <code>data-bj-modal-open</code> en HTML pur).</p><p>La touche <code>Échap</code> ferme la modale lorsque le comportement clavier est actif. Pour le bouton de fermeture à icône seule, fournissez un libellé accessible (<code>aria-label</code> en HTML)&nbsp;; les composants Vue et React exposent la prop <code>closeLabel</code> pour l’internationalisation.</p><p class="bj-text-sm" style="margin-top: var(--bj-spacing-2v)"><strong>Raccourcis clavier</strong></p><ul class="bj-text-sm" style="margin: var(--bj-spacing-1v) 0 0; padding-left: 1.25rem"><li><code>Tab</code>&nbsp;: élément focalisable suivant dans la modale.</li><li><code>Maj+Tab</code>&nbsp;: élément focalisable précédent&nbsp;; le cycle reste dans le dialogue.</li><li><code>Échap</code>&nbsp;: fermeture (script DSBJ ou composants).</li></ul>',
      'th-class-attr': 'Classe / attribut',
      'th-description': 'Description',
    },
    en: {
      title: 'Modal dialog',
      desc: 'Modal dialog with overlay, Escape to close, focus trap, and focus restoration to the opener.',
      'section-size-default': 'Default size (medium)',
      'size-default-intro':
        'Without a width modifier, the dialog uses the standard shell width from the design system.',
      'section-size-sm': 'Small (sm)',
      'size-sm-intro': 'Best for short confirmations or lightweight messages.',
      'section-size-lg': 'Large (lg)',
      'size-lg-intro': 'For wider forms or tables in the dialog body.',
      'section-size-full': 'Full screen (full)',
      'size-full-intro':
        'Uses most of the viewport height (viewer flows, assistants, dense content).',
      'section-variants': 'Attributes and open state',
      'section-classes-css': 'CSS classes',
      'section-react': 'React (BjModal)',
      'react-intro':
        'The <code>{"@"}flrxnt/dsbj/react</code> package exports <code>BjModal</code>.',
      'section-a11y': 'Accessibility',
      'variants-on': 'on the',
      'variants-expanded': 'The DSBJ script opens the modal by setting',
      'variants-expanded-2': 'on the',
      'variants-expanded-3':
        'container; styles then show the dialog (',
      'variants-expanded-4': 'is equivalent to an open state without JS).',
      'prop-modal':
        'Full-screen wrapper; hidden by default, shown with data-bj-expanded or bj-modal--opened.',
      'prop-overlay': 'Backdrop; click usually closes (often with data-bj-modal-close).',
      'prop-dialog': 'Dialog shell (max width depends on size).',
      'prop-header': 'Optional header (title + close).',
      'prop-title': 'Modal title; target of aria-labelledby.',
      'prop-close': 'Close control (icon-only; aria-label required).',
      'prop-body': 'Main content region.',
      'prop-footer': 'Optional footer (actions).',
      'prop-widths': 'Width modifiers: small, large, full screen.',
      'prop-data-open': 'On the opener button: value is the modal id.',
      'prop-data-close': 'On controls that close: overlay, button, footer actions.',
      'prop-data-expanded':
        'Open state: set by the script on the bj-modal root. Without JS, bj-modal--opened matches the same visible state.',
      'a11y-note':
        '<p>Use <code>role="dialog"</code>, <code>aria-modal="true"</code>, and <code>aria-labelledby</code> pointing at the modal title id so assistive technologies get an accessible name for the dialog.</p><p>With the DSBJ script or the Vue/React <code>BjModal</code> components, focus is <strong>trapped</strong> while the modal is open: <code>Tab</code> and <code>Shift+Tab</code> move only among focusable elements inside the dialog. On close, focus is <strong>restored</strong> to the element that opened the modal (the <code>data-bj-modal-open</code> control in plain HTML).</p><p>The <code>Escape</code> key dismisses the dialog when keyboard handling is active. For the icon-only close button, provide an accessible name (<code>aria-label</code> in HTML); Vue and React components offer a <code>closeLabel</code> prop for i18n.</p><p class="bj-text-sm" style="margin-top: var(--bj-spacing-2v)"><strong>Keyboard shortcuts</strong></p><ul class="bj-text-sm" style="margin: var(--bj-spacing-1v) 0 0; padding-left: 1.25rem"><li><code>Tab</code>: move focus to the next focusable control inside the modal.</li><li><code>Shift+Tab</code>: move to the previous focusable control; focus stays within the dialog.</li><li><code>Escape</code>: close the modal (DSBJ script or components).</li></ul>',
      'th-class-attr': 'Class / attribute',
      'th-description': 'Description',
    },
  },
})

const codeModal = `<button type="button" class="bj-btn" data-bj-modal-open="id">Ouvrir</button>
<div class="bj-modal" id="id" role="dialog" aria-modal="true" aria-labelledby="id-t">
  <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
  <div class="bj-modal__dialog">
    <header class="bj-modal__header">
      <h2 class="bj-modal__title" id="id-t">Titre</h2>
      <button type="button" class="bj-modal__close" data-bj-modal-close aria-label="Fermer">
        <i class="ri-close-line" aria-hidden="true"></i>
      </button>
    </header>
    <div class="bj-modal__body">…</div>
    <footer class="bj-modal__footer">…</footer>
  </div>
</div>`

const codeSizeDefault = `<div class="bj-modal" id="id" role="dialog" aria-modal="true" aria-labelledby="id-t">…</div>`

const codeSizeSm = `<div class="bj-modal bj-modal--sm" id="ex-sm" role="dialog" aria-modal="true" aria-labelledby="ex-sm-t">…</div>`

const codeSizeLg = `<div class="bj-modal bj-modal--lg" id="ex-lg" role="dialog" aria-modal="true" aria-labelledby="ex-lg-t">…</div>`

const codeSizeFull = `<div class="bj-modal bj-modal--full" id="ex-full" role="dialog" aria-modal="true" aria-labelledby="ex-full-t">…</div>`

const codeReact = `import { useState } from 'react'
import { BjModal } from '@flrxnt/dsbj/react'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>Ouvrir</button>
      <BjModal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
        closeLabel="Fermer"
      >
        <p>Contenu de la modale.</p>
      </BjModal>
    </>
  )
}`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  { name: 'bj-modal', description: t('prop-modal') },
  { name: 'data-bj-expanded', description: t('prop-data-expanded') },
  { name: 'bj-modal__overlay', description: t('prop-overlay') },
  { name: 'bj-modal__dialog', description: t('prop-dialog') },
  { name: 'bj-modal__header', description: t('prop-header') },
  { name: 'bj-modal__title', description: t('prop-title') },
  { name: 'bj-modal__close', description: t('prop-close') },
  { name: 'bj-modal__body', description: t('prop-body') },
  { name: 'bj-modal__footer', description: t('prop-footer') },
  {
    name: 'bj-modal--sm / bj-modal--lg / bj-modal--full',
    description: t('prop-widths'),
  },
  { name: 'data-bj-modal-open', description: t('prop-data-open') },
  { name: 'data-bj-modal-close', description: t('prop-data-close') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t("title") }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t("desc") }}
  </p>

  <DocsSection id="sec-taille-defaut" :title="t('section-size-default')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t("size-default-intro") }}
    </p>
    <DocsPreview>
      <button type="button" class="bj-btn" data-bj-modal-open="ex-modal">
        Ouvrir
      </button>
      <div
        class="bj-modal"
        id="ex-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ex-modal-t"
      >
        <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
        <div class="bj-modal__dialog">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title" id="ex-modal-t">Confirmation</h2>
            <button
              type="button"
              class="bj-modal__close"
              data-bj-modal-close
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p class="bj-text-sm">Confirmer l’envoi du dossier&nbsp;?</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>
              Annuler
            </button>
            <button
              type="button"
              class="bj-btn bj-btn--secondary"
              data-bj-modal-close
            >
              Valider
            </button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeModal" />
    <DocsCode :code="codeSizeDefault" />
  </DocsSection>

  <DocsSection id="sec-taille-sm" :title="t('section-size-sm')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t("size-sm-intro") }}
    </p>
    <DocsPreview>
      <button type="button" class="bj-btn" data-bj-modal-open="doc-modal-sm">
        Ouvrir (sm)
      </button>
      <div
        class="bj-modal bj-modal--sm"
        id="doc-modal-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doc-modal-sm-t"
      >
        <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
        <div class="bj-modal__dialog">
          <header class="bj-modal__header">
            <h2 id="doc-modal-sm-t" class="bj-modal__title">Modale compacte</h2>
            <button
              type="button"
              class="bj-modal__close"
              data-bj-modal-close
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p class="bj-text-sm">Classe <code>bj-modal--sm</code>.</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>OK</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeSm" />
  </DocsSection>

  <DocsSection id="sec-taille-lg" :title="t('section-size-lg')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t("size-lg-intro") }}
    </p>
    <DocsPreview>
      <button type="button" class="bj-btn" data-bj-modal-open="doc-modal-lg">
        Ouvrir (lg)
      </button>
      <div
        class="bj-modal bj-modal--lg"
        id="doc-modal-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doc-modal-lg-t"
      >
        <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
        <div class="bj-modal__dialog">
          <header class="bj-modal__header">
            <h2 id="doc-modal-lg-t" class="bj-modal__title">Modale large</h2>
            <button
              type="button"
              class="bj-modal__close"
              data-bj-modal-close
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p class="bj-text-sm">Classe <code>bj-modal--lg</code>.</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>
              Fermer
            </button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeLg" />
  </DocsSection>

  <DocsSection id="sec-taille-full" :title="t('section-size-full')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t("size-full-intro") }}
    </p>
    <DocsPreview>
      <button type="button" class="bj-btn" data-bj-modal-open="doc-modal-full">
        Ouvrir (full)
      </button>
      <div
        class="bj-modal bj-modal--full"
        id="doc-modal-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doc-modal-full-t"
      >
        <div class="bj-modal__overlay" data-bj-modal-close tabindex="-1"></div>
        <div class="bj-modal__dialog">
          <header class="bj-modal__header">
            <h2 id="doc-modal-full-t" class="bj-modal__title">Plein écran</h2>
            <button
              type="button"
              class="bj-modal__close"
              data-bj-modal-close
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p class="bj-text-sm">Classe <code>bj-modal--full</code>.</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>
              Fermer
            </button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeFull" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>data-bj-modal-open</code> / <code>data-bj-modal-close</code> ;
      <code>bj-modal-open</code> {{ t("variants-on") }} <code>body</code>.
      {{ t("variants-expanded") }}
      <code>data-bj-expanded</code>
      {{ t("variants-expanded-2") }}
      <code>bj-modal</code>{{ t("variants-expanded-3") }}
      <code>bj-modal--opened</code>{{ t("variants-expanded-4") }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-react" :title="t('section-react')">
    <p
      class="bj-text-md"
      style="
        max-width: 44rem;
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-3v);
      "
    >
      <span v-html="t('react-intro')" />
    </p>
    <DocsCode :code="codeReact" lang="tsx" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <div v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
