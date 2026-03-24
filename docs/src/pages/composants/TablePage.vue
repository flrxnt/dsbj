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
      title: 'Tableau',
      desc: 'Présentation tabulaire pour suivis de dossiers, listes réglementaires et données chiffrées. Encapsulez le tableau dans <code>bj-table-wrapper</code> pour autoriser le défilement horizontal sur mobile sans casser la mise en page.',
      'section-default': 'Tableau par défaut',
      'section-bordered': 'Tableau bordé',
      'para-bordered':
        '<code>bj-table--bordered</code> encadre cellules et en-têtes pour une lecture plus nette sur fond clair.',
      'section-striped': 'Tableau rayé',
      'para-striped':
        '<code>bj-table--striped</code> alterne le fond des lignes du corps pour faciliter le repérage des lignes sur de longues listes.',
      'section-caption': 'Tableau avec légende',
      'para-caption':
        'La balise <code>&lt;caption&gt;</code> résume le contenu du tableau pour tous les utilisateurs, y compris ceux qui naviguent au lecteur d’écran.',
      'section-interactive':
        'Tableau interactif (tri, filtre, pagination)',
      'para-interactive':
        'Ajoutez <code>data-bj-table</code> sur le wrapper, <code>data-bj-table-sort</code> sur les en-têtes triables, <code>data-bj-table-filter</code> sur un champ de recherche, et <code>data-bj-table-paginate="5"</code> pour paginer.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Fournissez une <code>&lt;caption&gt;</code> pertinente ou un titre proche dans le flux. Sur chaque <code>&lt;th&gt;</code>, utilisez <code>scope="col"</code> ou <code>scope="row"</code> selon le cas. Enrobez les tableaux larges dans <code>bj-table-wrapper</code> pour le défilement horizontal au clavier et au tactile. Pour les tableaux complexes, reliez cellules et en-têtes avec <code>headers</code> et <code>id</code>.',
      'prop-bj-table-wrapper':
        'Conteneur avec défilement horizontal - à utiliser pour le responsive sans réduire la lisibilité des colonnes.',
      'prop-bj-table': 'Tableau de base du design system.',
      'prop-bj-table-bordered':
        'Bordures visibles sur cellules et en-têtes.',
      'prop-bj-table-striped':
        'Lignes du corps en alternance de fond.',
      'prop-bj-table-layout-fixed':
        'Largeurs de colonnes fixes (table-layout: fixed).',
      'prop-bj-table-no-caption':
        'Masque visuellement la légende tout en la conservant pour l’accessibilité (équivalent sr-only).',
    },
    en: {
      title: 'Table',
      desc: 'Tabular layout for case tracking, regulatory lists, and numeric data. Wrap the table in <code>bj-table-wrapper</code> so horizontal scrolling works on small screens without breaking the layout.',
      'section-default': 'Default table',
      'section-bordered': 'Bordered table',
      'para-bordered':
        '<code>bj-table--bordered</code> adds borders to cells and headers for clearer reading on light backgrounds.',
      'section-striped': 'Striped table',
      'para-striped':
        '<code>bj-table--striped</code> alternates body row backgrounds to make long lists easier to scan.',
      'section-caption': 'Table with caption',
      'para-caption':
        'The <code>&lt;caption&gt;</code> element summarises the table for everyone, including screen reader users.',
      'section-interactive':
        'Interactive table (sort, filter, pagination)',
      'para-interactive':
        'Add <code>data-bj-table</code> on the wrapper, <code>data-bj-table-sort</code> on sortable headers, <code>data-bj-table-filter</code> on a search field, and <code>data-bj-table-paginate="5"</code> to paginate.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Provide a meaningful <code>&lt;caption&gt;</code> or a nearby heading in the flow. On each <code>&lt;th&gt;</code>, use <code>scope="col"</code> or <code>scope="row"</code> as appropriate. Wrap wide tables in <code>bj-table-wrapper</code> for horizontal scrolling with keyboard and touch. For complex tables, tie cells and headers with <code>headers</code> and <code>id</code>.',
      'prop-bj-table-wrapper':
        'Container with horizontal scroll—use for responsive layouts without shrinking column readability.',
      'prop-bj-table': 'Base table in the design system.',
      'prop-bj-table-bordered':
        'Visible borders on cells and headers.',
      'prop-bj-table-striped': 'Alternating body row backgrounds.',
      'prop-bj-table-layout-fixed':
        'Fixed column widths (table-layout: fixed).',
      'prop-bj-table-no-caption':
        'Hides the caption visually while keeping it for accessibility (sr-only equivalent).',
    },
  },
})

const codeDefault = `<div class="bj-table-wrapper">
  <table class="bj-table">
    <thead>
      <tr>
        <th scope="col">Référence</th>
        <th scope="col">Intitulé</th>
        <th scope="col">Statut</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>…</tbody>
  </table>
</div>`

const codeBordered = `<table class="bj-table bj-table--bordered">…</table>`

const codeStriped = `<table class="bj-table bj-table--striped">…</table>`

const codeCaption = `<table class="bj-table">
  <caption>Dossiers déposés au guichet unique - mars 2025</caption>
  <thead>…</thead>
  <tbody>…</tbody>
</table>`

const codeInteractive = `<div data-bj-table data-bj-table-paginate="5">
  <div class="bj-table__header">
    <input type="text" class="bj-table__search" data-bj-table-filter placeholder="Rechercher…" />
    <span class="bj-table__count"></span>
  </div>
  <table class="bj-table bj-table--sortable">
    <thead>
      <tr>
        <th scope="col" data-bj-table-sort>Référence</th>
        <th scope="col" data-bj-table-sort>Intitulé</th>
        …
      </tr>
    </thead>
    <tbody>…</tbody>
  </table>
  <div class="bj-table__footer"></div>
</div>`

const propsRows = computed(() => [
  {
    name: 'bj-table-wrapper',
    description: t('prop-bj-table-wrapper'),
  },
  { name: 'bj-table', description: t('prop-bj-table') },
  {
    name: 'bj-table--bordered',
    description: t('prop-bj-table-bordered'),
  },
  {
    name: 'bj-table--striped',
    description: t('prop-bj-table-striped'),
  },
  {
    name: 'bj-table--layout-fixed',
    description: t('prop-bj-table-layout-fixed'),
  },
  {
    name: 'bj-table--no-caption',
    description: t('prop-bj-table-no-caption'),
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

  <DocsSection id="sec-table-default" :title="t('section-default')">
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table">
          <thead>
            <tr>
              <th scope="col">Référence</th>
              <th scope="col">Intitulé</th>
              <th scope="col">Statut</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BJ-2025-0142</td>
              <td>Demande de passeport biométrique</td>
              <td>En instruction</td>
              <td>20/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0189</td>
              <td>Autorisation d’occupation du domaine public</td>
              <td>Complété</td>
              <td>17/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0201</td>
              <td>Certificat de non-gage</td>
              <td>En attente de pièces</td>
              <td>14/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0167</td>
              <td>Extrait du bulletin n°2 du casier judiciaire</td>
              <td>Refusé</td>
              <td>09/03/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDefault" />
  </DocsSection>

  <DocsSection id="sec-table-bordered" :title="t('section-bordered')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-bordered')" />
    </p>
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--bordered">
          <thead>
            <tr>
              <th scope="col">Référence</th>
              <th scope="col">Intitulé</th>
              <th scope="col">Statut</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BJ-2025-0142</td>
              <td>Demande de passeport biométrique</td>
              <td>En instruction</td>
              <td>20/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0189</td>
              <td>Autorisation d’occupation du domaine public</td>
              <td>Complété</td>
              <td>17/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0201</td>
              <td>Certificat de non-gage</td>
              <td>En attente de pièces</td>
              <td>14/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0167</td>
              <td>Extrait du bulletin n°2 du casier judiciaire</td>
              <td>Refusé</td>
              <td>09/03/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
    <DocsCode :code="codeBordered" />
  </DocsSection>

  <DocsSection id="sec-table-striped" :title="t('section-striped')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-striped')" />
    </p>
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--striped">
          <thead>
            <tr>
              <th scope="col">Référence</th>
              <th scope="col">Intitulé</th>
              <th scope="col">Statut</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BJ-2025-0142</td>
              <td>Demande de passeport biométrique</td>
              <td>En instruction</td>
              <td>20/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0189</td>
              <td>Autorisation d’occupation du domaine public</td>
              <td>Complété</td>
              <td>17/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0201</td>
              <td>Certificat de non-gage</td>
              <td>En attente de pièces</td>
              <td>14/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0167</td>
              <td>Extrait du bulletin n°2 du casier judiciaire</td>
              <td>Refusé</td>
              <td>09/03/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStriped" />
  </DocsSection>

  <DocsSection id="sec-table-caption" :title="t('section-caption')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-caption')" />
    </p>
    <DocsPreview>
      <div class="bj-table-wrapper">
        <table class="bj-table bj-table--bordered bj-table--striped">
          <caption>
            Dossiers déposés au guichet unique - mars 2025
          </caption>
          <thead>
            <tr>
              <th scope="col">Référence</th>
              <th scope="col">Intitulé</th>
              <th scope="col">Statut</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BJ-2025-0142</td>
              <td>Demande de passeport biométrique</td>
              <td>En instruction</td>
              <td>20/03/2025</td>
            </tr>
            <tr>
              <td>BJ-2025-0189</td>
              <td>Autorisation d’occupation du domaine public</td>
              <td>Complété</td>
              <td>17/03/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCaption" />
  </DocsSection>

  <DocsSection
    id="sec-table-interactive"
    :title="t('section-interactive')"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-interactive')" />
    </p>
    <DocsPreview>
      <div data-bj-table data-bj-table-paginate="5">
        <div class="bj-table__header">
          <input
            type="text"
            class="bj-table__search"
            data-bj-table-filter
            placeholder="Rechercher…"
          />
          <span class="bj-table__count"></span>
        </div>
        <div class="bj-table-wrapper">
          <table class="bj-table bj-table--sortable bj-table--striped">
            <thead>
              <tr>
                <th scope="col" data-bj-table-sort>Référence</th>
                <th scope="col" data-bj-table-sort>Intitulé</th>
                <th scope="col" data-bj-table-sort>Statut</th>
                <th scope="col" data-bj-table-sort>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>BJ-2025-0142</td><td>Demande de passeport biométrique</td><td>En instruction</td><td>20/03/2025</td></tr>
              <tr><td>BJ-2025-0189</td><td>Autorisation d'occupation du domaine public</td><td>Complété</td><td>17/03/2025</td></tr>
              <tr><td>BJ-2025-0201</td><td>Certificat de non-gage</td><td>En attente</td><td>14/03/2025</td></tr>
              <tr><td>BJ-2025-0167</td><td>Extrait du bulletin n°2 du casier judiciaire</td><td>Refusé</td><td>09/03/2025</td></tr>
              <tr><td>BJ-2025-0210</td><td>Demande de permis de construire</td><td>En instruction</td><td>22/03/2025</td></tr>
              <tr><td>BJ-2025-0215</td><td>Inscription au registre du commerce</td><td>Complété</td><td>23/03/2025</td></tr>
              <tr><td>BJ-2025-0220</td><td>Demande de carte nationale d'identité</td><td>En attente</td><td>18/03/2025</td></tr>
              <tr><td>BJ-2025-0225</td><td>Certificat de naissance</td><td>Complété</td><td>15/03/2025</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bj-table__footer"></div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeInteractive" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
