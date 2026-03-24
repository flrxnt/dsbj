<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

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

const propsRows = [
  {
    name: 'bj-table-wrapper',
    description:
      'Conteneur avec défilement horizontal - à utiliser pour le responsive sans réduire la lisibilité des colonnes.',
  },
  { name: 'bj-table', description: 'Tableau de base du design system.' },
  { name: 'bj-table--bordered', description: 'Bordures visibles sur cellules et en-têtes.' },
  { name: 'bj-table--striped', description: 'Lignes du corps en alternance de fond.' },
  {
    name: 'bj-table--layout-fixed',
    description: 'Largeurs de colonnes fixes (table-layout: fixed).',
  },
  {
    name: 'bj-table--no-caption',
    description:
      'Masque visuellement la légende tout en la conservant pour l’accessibilité (équivalent sr-only).',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Tableau
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Présentation tabulaire pour suivis de dossiers, listes
    réglementaires et données chiffrées. Encapsulez le tableau dans
    <code>bj-table-wrapper</code> pour autoriser le défilement
    horizontal sur mobile sans casser la mise en page.
  </p>

  <DocsSection id="sec-table-default" title="Tableau par défaut">
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

  <DocsSection id="sec-table-bordered" title="Tableau bordé">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <code>bj-table--bordered</code> encadre cellules et en-têtes
      pour une lecture plus nette sur fond clair.
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

  <DocsSection id="sec-table-striped" title="Tableau rayé">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <code>bj-table--striped</code> alterne le fond des lignes du
      corps pour faciliter le repérage des lignes sur de longues
      listes.
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

  <DocsSection id="sec-table-caption" title="Tableau avec légende">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      La balise <code>&lt;caption&gt;</code> résume le contenu du
      tableau pour tous les utilisateurs, y compris ceux qui naviguent
      au lecteur d’écran.
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
    title="Tableau interactif (tri, filtre, pagination)"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      Ajoutez <code>data-bj-table</code> sur le wrapper,
      <code>data-bj-table-sort</code> sur les en-têtes triables,
      <code>data-bj-table-filter</code> sur un champ de recherche, et
      <code>data-bj-table-paginate="5"</code> pour paginer.
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

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Fournissez une <code>&lt;caption&gt;</code> pertinente ou un
      titre proche dans le flux. Sur chaque <code>&lt;th&gt;</code>,
      utilisez <code>scope="col"</code> ou
      <code>scope="row"</code> selon le cas. Enrobez les tableaux
      larges dans <code>bj-table-wrapper</code> pour le défilement
      horizontal au clavier et au tactile. Pour les tableaux
      complexes, reliez cellules et en-têtes avec
      <code>headers</code> et <code>id</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
