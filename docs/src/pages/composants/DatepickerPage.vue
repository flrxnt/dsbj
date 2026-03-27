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
      title: 'Sélecteur de date',
      desc: 'Champ de saisie de date avec calendrier intégré, adapté au format administratif <code>jj/mm/aaaa</code>. Émet l’événement <code>bj:datepicker</code>.',
      'section-example': 'Exemple',
      'section-minmax': 'Avec bornes min/max',
      'section-label-hint':
        'Libellé, aide et placeholder',
      'section-label-hint-body':
        'Comme dans le composant Vue, placez <code>bj-label</code> et <code>bj-hint</code> dans le conteneur <code>bj-datepicker</code>. Le placeholder du champ est l’attribut <code>placeholder</code> de <code>bj-datepicker__input</code> (ex.\u00a0<code>JJ/MM/AAAA</code>, <code>MM/AAAA</code>, <code>AAAA</code> selon le mode).',
      'section-size-sm': 'Taille compacte',
      'section-size-sm-body':
        'Ajoutez <code>bj-datepicker--sm</code> sur le conteneur pour réduire champ et calendrier.',
      'section-disabled-dp': 'Champ désactivé',
      'section-disabled-dp-body':
        'Attribut <code>disabled</code> sur <code>bj-datepicker__input</code> et sur <code>bj-datepicker__trigger</code>.',
      'section-calendar':
        'Calendrier ouvert (grille des jours)',
      'section-calendar-body':
        'Affichez le panneau avec <code>data-bj-expanded</code> sur <code>bj-datepicker__calendar</code>. Classes de cellule\u00a0: <code>bj-datepicker__day--outside</code>, <code>bj-datepicker__day--today</code>, <code>bj-datepicker__day--selected</code> ; jours hors plage\u00a0: <code>disabled</code> sur le <code>button</code>.',
      'section-month-year':
        'Vues mois et année',
      'section-month-year-body':
        'Pour les modes <code>month</code> et <code>year</code> du composant Vue, les grilles utilisent <code>bj-datepicker__month-cell</code> / <code>bj-datepicker__year-cell</code> avec <code>--today</code>, <code>--selected</code> et pour les années hors décennie <code>bj-datepicker__year-cell--outside</code>.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-datepicker': 'Conteneur principal.',
      'prop-datepicker-field':
        'Ligne champ + bouton calendrier.',
      'prop-datepicker-input': 'Champ de saisie de la date.',
      'prop-datepicker-grid': 'Grille 7×n des jours.',
      'prop-datepicker-day': 'Bouton jour (état de base).',
      'prop-datepicker-trigger': 'Bouton d’ouverture du calendrier.',
      'prop-datepicker-calendar':
        'Panneau calendrier (généré par JS).',
      'prop-datepicker-day-today': 'Jour actuel.',
      'prop-datepicker-day-selected': 'Jour sélectionné.',
      'prop-datepicker-sm': 'Variante compacte.',
      'prop-datepicker-nav':
        'Barre de navigation du calendrier.',
      'prop-datepicker-nav-btn': 'Bouton précédent / suivant.',
      'prop-datepicker-nav-title':
        'Titre cliquable (mois/année ou année).',
      'prop-datepicker-weekday': 'Libellé de jour de la semaine.',
      'prop-datepicker-day-outside':
        'Jour hors mois affiché (grisé).',
      'prop-datepicker-month-cell': 'Cellule de mois.',
      'prop-datepicker-year-cell': 'Cellule d’année.',
      'prop-datepicker-year-outside':
        'Année hors plage de la décennie affichée.',
      'prop-label-hint-dp': 'Libellé et aide (même usage que les autres champs).',
      'a11y-note':
        'Le calendrier a <code>role="dialog"</code>. Le champ en lecture seule dans le composant Vue s’ouvre au clic ; côté HTML statique, branchez votre script (<code>data-bj-datepicker</code>) ou reproduisez le comportement attendu. Prévoir fermeture au clavier (<kbd>Échap</kbd>).',
    },
    en: {
      title: 'Date picker',
      desc: 'Date field with built-in calendar, suited to the administrative <code>dd/mm/yyyy</code> format. Emits the <code>bj:datepicker</code> event.',
      'section-example': 'Example',
      'section-minmax': 'With min/max bounds',
      'section-label-hint':
        'Label, hint, and placeholder',
      'section-label-hint-body':
        'As in the Vue component, put <code>bj-label</code> and <code>bj-hint</code> inside the <code>bj-datepicker</code> wrapper. The field placeholder is the <code>placeholder</code> on <code>bj-datepicker__input</code> (e.g. <code>DD/MM/YYYY</code>, <code>MM/YYYY</code>, <code>YYYY</code> by mode).',
      'section-size-sm': 'Compact size',
      'section-size-sm-body':
        'Add <code>bj-datepicker--sm</code> on the wrapper to shrink the field and calendar.',
      'section-disabled-dp': 'Disabled field',
      'section-disabled-dp-body':
        'Set <code>disabled</code> on both <code>bj-datepicker__input</code> and <code>bj-datepicker__trigger</code>.',
      'section-calendar':
        'Open calendar (day grid)',
      'section-calendar-body':
        'Show the panel with <code>data-bj-expanded</code> on <code>bj-datepicker__calendar</code>. Day modifiers: <code>bj-datepicker__day--outside</code>, <code>bj-datepicker__day--today</code>, <code>bj-datepicker__day--selected</code>; out-of-range days use <code>disabled</code> on the <code>button</code>.',
      'section-month-year':
        'Month and year views',
      'section-month-year-body':
        'For Vue <code>month</code> / <code>year</code> modes, grids use <code>bj-datepicker__month-cell</code> / <code>bj-datepicker__year-cell</code> with <code>--today</code>, <code>--selected</code>, and <code>bj-datepicker__year-cell--outside</code> for years outside the decade.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-datepicker': 'Main container.',
      'prop-datepicker-field':
        'Row with input + calendar button.',
      'prop-datepicker-input': 'Date input field.',
      'prop-datepicker-grid': '7×n day grid.',
      'prop-datepicker-day': 'Day button (base state).',
      'prop-datepicker-trigger': 'Button to open the calendar.',
      'prop-datepicker-calendar':
        'Calendar panel (generated by JS).',
      'prop-datepicker-day-today': 'Current day.',
      'prop-datepicker-day-selected': 'Selected day.',
      'prop-datepicker-sm': 'Compact variant.',
      'prop-datepicker-nav':
        'Calendar navigation bar.',
      'prop-datepicker-nav-btn': 'Previous / next control.',
      'prop-datepicker-nav-title':
        'Clickable title (month/year or year).',
      'prop-datepicker-weekday': 'Weekday header label.',
      'prop-datepicker-day-outside':
        'Day outside the displayed month (muted).',
      'prop-datepicker-month-cell': 'Month grid cell.',
      'prop-datepicker-year-cell': 'Year grid cell.',
      'prop-datepicker-year-outside':
        'Year outside the displayed decade.',
      'prop-label-hint-dp': 'Label and hint (same as other fields).',
      'a11y-note':
        'The calendar uses <code>role="dialog"</code>. The Vue component uses a read-only field opened on click; for static HTML, wire your script (<code>data-bj-datepicker</code>) or match the intended behavior. Support closing with the keyboard (<kbd>Escape</kbd>).',
    },
  },
})

const codeExample = `<div class="bj-datepicker" data-bj-datepicker>
  <div class="bj-datepicker__field">
    <input type="text" class="bj-datepicker__input" placeholder="jj/mm/aaaa" />
    <button type="button" class="bj-datepicker__trigger" aria-label="Ouvrir le calendrier">
      <i class="ri-calendar-line" aria-hidden="true"></i>
    </button>
  </div>
</div>`

const codeMinMax = `<div class="bj-datepicker" data-bj-datepicker
     data-bj-datepicker-min="01/01/2024"
     data-bj-datepicker-max="31/12/2026">
  <div class="bj-datepicker__field">…</div>
</div>`

const codeLabelHint = `<div class="bj-datepicker">
  <label class="bj-label" for="dp1">Date de naissance</label>
  <span id="dp1-h" class="bj-hint">Format JJ/MM/AAAA</span>
  <div class="bj-datepicker__field">
    <input id="dp1" class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" aria-describedby="dp1-h" />
    <button type="button" class="bj-datepicker__trigger" aria-label="Ouvrir le calendrier">…</button>
  </div>
</div>`

const codeCalendarDemo = `<div class="bj-datepicker__calendar" data-bj-expanded role="dialog" aria-label="Calendrier">
  <div class="bj-datepicker__nav">…</div>
  <div class="bj-datepicker__weekdays">…</div>
  <div class="bj-datepicker__grid" role="grid">
    <button type="button" class="bj-datepicker__day bj-datepicker__day--outside">28</button>
    <button type="button" class="bj-datepicker__day bj-datepicker__day--today">15</button>
    <button type="button" class="bj-datepicker__day bj-datepicker__day--selected">20</button>
    <button type="button" class="bj-datepicker__day" disabled>1</button>
  </div>
</div>`

const codeMonthYearDemo = `<div class="bj-datepicker__months-grid">
  <button type="button" class="bj-datepicker__month-cell bj-datepicker__month-cell--today">Jan</button>
  <button type="button" class="bj-datepicker__month-cell bj-datepicker__month-cell--selected">Fév</button>
</div>
<div class="bj-datepicker__years-grid">
  <button type="button" class="bj-datepicker__year-cell bj-datepicker__year-cell--outside">2019</button>
  <button type="button" class="bj-datepicker__year-cell bj-datepicker__year-cell--selected">2024</button>
</div>`

const propsRows = computed(() => [
  { name: 'bj-label', description: t('prop-label-hint-dp') },
  { name: 'bj-hint', description: t('prop-label-hint-dp') },
  { name: 'bj-datepicker', description: t('prop-datepicker') },
  { name: 'bj-datepicker--sm', description: t('prop-datepicker-sm') },
  {
    name: 'bj-datepicker__field',
    description: t('prop-datepicker-field'),
  },
  {
    name: 'bj-datepicker__input',
    description: t('prop-datepicker-input'),
  },
  {
    name: 'bj-datepicker__trigger',
    description: t('prop-datepicker-trigger'),
  },
  {
    name: 'bj-datepicker__calendar',
    description: t('prop-datepicker-calendar'),
  },
  { name: 'bj-datepicker__nav', description: t('prop-datepicker-nav') },
  {
    name: 'bj-datepicker__nav-btn',
    description: t('prop-datepicker-nav-btn'),
  },
  {
    name: 'bj-datepicker__nav-title',
    description: t('prop-datepicker-nav-title'),
  },
  {
    name: 'bj-datepicker__weekdays / bj-datepicker__weekday',
    description: t('prop-datepicker-weekday'),
  },
  { name: 'bj-datepicker__grid', description: t('prop-datepicker-grid') },
  { name: 'bj-datepicker__day', description: t('prop-datepicker-day') },
  {
    name: 'bj-datepicker__day--outside',
    description: t('prop-datepicker-day-outside'),
  },
  {
    name: 'bj-datepicker__day--today',
    description: t('prop-datepicker-day-today'),
  },
  {
    name: 'bj-datepicker__day--selected',
    description: t('prop-datepicker-day-selected'),
  },
  {
    name: 'bj-datepicker__month-cell (+ --today, --selected)',
    description: t('prop-datepicker-month-cell'),
  },
  {
    name: 'bj-datepicker__year-cell (+ --outside, --today, --selected)',
    description: t('prop-datepicker-year-cell'),
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
    v-html="t('desc')"
  />

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <div class="bj-datepicker" data-bj-datepicker>
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            placeholder="jj/mm/aaaa"
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-label-hint" :title="t('section-label-hint')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-label-hint-body')"
    />
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label" for="dp-demo-lh">Date de naissance</label>
        <span id="dp-demo-lh-h" class="bj-hint">Format JJ/MM/AAAA</span>
        <div class="bj-datepicker__field">
          <input
            id="dp-demo-lh"
            type="text"
            class="bj-datepicker__input"
            readonly
            placeholder="JJ/MM/AAAA"
            aria-describedby="dp-demo-lh-h"
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeLabelHint" />
  </DocsSection>

  <DocsSection id="sec-taille-sm" :title="t('section-size-sm')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-size-sm-body')"
    />
    <DocsPreview>
      <div class="bj-datepicker bj-datepicker--sm" style="max-width: 14rem">
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            placeholder="JJ/MM/AAAA"
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-desactive-dp" :title="t('section-disabled-dp')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-disabled-dp-body')"
    />
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            value="15/03/2025"
            disabled
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            disabled
            aria-label="Calendrier indisponible"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-bornes" :title="t('section-minmax')">
    <DocsPreview>
      <div
        class="bj-datepicker"
        data-bj-datepicker
        data-bj-datepicker-min="01/01/2024"
        data-bj-datepicker-max="31/12/2026"
      >
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            placeholder="jj/mm/aaaa"
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMinMax" />
  </DocsSection>

  <DocsSection id="sec-calendrier" :title="t('section-calendar')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-calendar-body')"
    />
    <DocsPreview style="min-height: 18rem">
      <div class="bj-datepicker" style="max-width: 18rem">
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            value="20/03/2025"
            readonly
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
        <div
          class="bj-datepicker__calendar"
          data-bj-expanded
          role="dialog"
          aria-label="Calendrier"
          style="position: relative"
        >
          <div class="bj-datepicker__nav">
            <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois précédent">
              <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
            </button>
            <button type="button" class="bj-datepicker__nav-title">
              Mars 2025
            </button>
            <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois suivant">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-datepicker__weekdays">
            <span
              v-for="d in ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']"
              :key="d"
              class="bj-datepicker__weekday"
              >{{ d }}</span
            >
          </div>
          <div class="bj-datepicker__grid" role="grid">
            <button
              type="button"
              class="bj-datepicker__day bj-datepicker__day--outside"
            >
              24
            </button>
            <button type="button" class="bj-datepicker__day">1</button>
            <button type="button" class="bj-datepicker__day">2</button>
            <button type="button" class="bj-datepicker__day">3</button>
            <button type="button" class="bj-datepicker__day">4</button>
            <button type="button" class="bj-datepicker__day">5</button>
            <button type="button" class="bj-datepicker__day">6</button>
            <button type="button" class="bj-datepicker__day">7</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--today">
              15
            </button>
            <button
              type="button"
              class="bj-datepicker__day bj-datepicker__day--selected"
            >
              20
            </button>
            <button type="button" class="bj-datepicker__day" disabled>
              31
            </button>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCalendarDemo" />
  </DocsSection>

  <DocsSection id="sec-mois-annee" :title="t('section-month-year')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-month-year-body')"
    />
    <DocsPreview>
      <div
        class="bj-datepicker__calendar"
        data-bj-expanded
        role="dialog"
        aria-label="Mois"
        style="position: relative; max-width: 18rem"
      >
        <div class="bj-datepicker__months-grid">
          <button
            type="button"
            class="bj-datepicker__month-cell bj-datepicker__month-cell--today"
          >
            Jan
          </button>
          <button
            type="button"
            class="bj-datepicker__month-cell bj-datepicker__month-cell--selected"
          >
            Fév
          </button>
          <button type="button" class="bj-datepicker__month-cell">
            Mar
          </button>
          <button type="button" class="bj-datepicker__month-cell">
            Avr
          </button>
        </div>
      </div>
      <div
        class="bj-datepicker__calendar"
        data-bj-expanded
        role="dialog"
        aria-label="Années"
        style="position: relative; max-width: 18rem; margin-top: var(--bj-spacing-3v)"
      >
        <div class="bj-datepicker__years-grid">
          <button
            type="button"
            class="bj-datepicker__year-cell bj-datepicker__year-cell--outside"
          >
            2019
          </button>
          <button type="button" class="bj-datepicker__year-cell">2023</button>
          <button
            type="button"
            class="bj-datepicker__year-cell bj-datepicker__year-cell--selected"
          >
            2024
          </button>
          <button type="button" class="bj-datepicker__year-cell">2025</button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMonthYearDemo" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
