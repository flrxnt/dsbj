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
      desc: 'Dialogue modal avec overlay, fermeture Échap et piège de focus.',
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
      'a11y-1':
        'aria-labelledby vers le titre ; focus piégé dans la modale ouverte ; Échap ferme lorsque le script est chargé.',
      'th-class-attr': 'Classe / attribut',
      'th-description': 'Description',
    },
    en: {
      title: 'Modal dialog',
      desc: 'Modal dialog with overlay, Escape to close and focus trap.',
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
      'a11y-1':
        'aria-labelledby pointing to the title; focus trapped while open; Escape closes when the script is loaded.',
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
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-taille-defaut" :title="t('section-size-default')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('size-default-intro') }}
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
        <div
          class="bj-modal__overlay"
          data-bj-modal-close
          tabindex="-1"
        ></div>
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
      {{ t('size-sm-intro') }}
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
            <p class="bj-text-sm">
              Classe <code>bj-modal--sm</code>.
            </p>
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
      {{ t('size-lg-intro') }}
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
            <p class="bj-text-sm">
              Classe <code>bj-modal--lg</code>.
            </p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>Fermer</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeLg" />
  </DocsSection>

  <DocsSection id="sec-taille-full" :title="t('section-size-full')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('size-full-intro') }}
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
            <p class="bj-text-sm">
              Classe <code>bj-modal--full</code>.
            </p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>Fermer</button>
          </footer>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeFull" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>data-bj-modal-open</code> / <code>data-bj-modal-close</code> ;
      <code>bj-modal-open</code> {{ t('variants-on') }}
      <code>body</code>. {{ t('variants-expanded') }}
      <code>data-bj-expanded</code>
      {{ t('variants-expanded-2') }}
      <code>bj-modal</code>{{ t('variants-expanded-3') }}
      <code>bj-modal--opened</code>{{ t('variants-expanded-4') }}
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
    </DocsA11yNote>
  </DocsSection>
</template>
