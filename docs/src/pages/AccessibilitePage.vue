<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const accessibiliteEmail = 'accessibilite@gouv.example'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Déclaration d\'accessibilité',
      lead:
        'La République du Bénin s\'engage à rendre ses sites internet accessibles conformément aux standards internationaux d\'accessibilité numérique.',
      'section-status': 'État de conformité',
      'callout-title': 'Partiellement conforme',
      'callout-text-before': 'Le site ',
      'callout-text-after':
        ' est partiellement conforme aux critères WCAG 2.1 niveau AA.',
      'section-results': 'Résultats des tests',
      'results-p':
        'Un audit d\'accessibilité a été réalisé sur un échantillon de pages représentatives. Le taux de conformité global est en cours d\'évaluation.',
      'section-not-accessible': 'Contenus non accessibles',
      'not-accessible-p':
        'Les contenus listés ci-dessous ne sont pas encore accessibles :',
      'not-accessible-li-1':
        'Certains contrastes de couleurs peuvent être insuffisants dans des cas spécifiques',
      'not-accessible-li-2':
        'Quelques composants interactifs complexes peuvent manquer d\'indications ARIA complémentaires',
      'section-tech': 'Technologies utilisées',
      'section-test-env': 'Environnement de test',
      'test-env-p': 'Les tests ont été réalisés avec les combinaisons suivantes :',
      'table-th-browser': 'Navigateur',
      'table-th-at': 'Technologie d\'assistance',
      'test-row-1-browser': 'Firefox (dernière version)',
      'test-row-2-browser': 'Chrome (dernière version)',
      'test-row-3-browser': 'Safari (dernière version)',
      'section-compensation': 'Droit à la compensation',
      'compensation-p':
        'Si vous constatez un défaut d\'accessibilité vous empêchant d\'accéder à un contenu ou une fonctionnalité du site, vous pouvez nous contacter pour obtenir une alternative accessible.',
      'compensation-li-email-label': 'E-mail :',
      'compensation-li-address-label': 'Adresse :',
      'compensation-li-address': 'ASSI, Cotonou, République du Bénin',
      'section-recourse': 'Voie de recours',
      'recourse-p':
        'Si vous n\'obtenez pas de réponse satisfaisante, vous pouvez adresser une réclamation à l\'autorité compétente en matière d\'accessibilité numérique de la République du Bénin.',
    },
    en: {
      title: 'Accessibility statement',
      lead:
        'The Republic of Benin is committed to making its websites accessible in line with international digital accessibility standards.',
      'section-status': 'Conformance status',
      'callout-title': 'Partially conformant',
      'callout-text-before': 'The site ',
      'callout-text-after':
        ' is partially conformant with WCAG 2.1 Level AA criteria.',
      'section-results': 'Test results',
      'results-p':
        'An accessibility audit was carried out on a sample of representative pages. Overall conformance is still being assessed.',
      'section-not-accessible': 'Non-accessible content',
      'not-accessible-p':
        'The following content is not yet fully accessible:',
      'not-accessible-li-1':
        'Some colour contrasts may be insufficient in specific cases',
      'not-accessible-li-2':
        'Some complex interactive components may lack sufficient supplementary ARIA',
      'section-tech': 'Technologies used',
      'section-test-env': 'Test environment',
      'test-env-p': 'Tests were run with the following combinations:',
      'table-th-browser': 'Browser',
      'table-th-at': 'Assistive technology',
      'test-row-1-browser': 'Firefox (latest version)',
      'test-row-2-browser': 'Chrome (latest version)',
      'test-row-3-browser': 'Safari (latest version)',
      'section-compensation': 'Right to reasonable accommodation',
      'compensation-p':
        'If you encounter an accessibility barrier that prevents you from using part of the site, you can contact us to request an accessible alternative.',
      'compensation-li-email-label': 'E-mail:',
      'compensation-li-address-label': 'Address:',
      'compensation-li-address': 'ASSI, Cotonou, Republic of Benin',
      'section-recourse': 'Complaints',
      'recourse-p':
        'If you do not receive a satisfactory response, you may file a complaint with the competent authority for digital accessibility in the Republic of Benin.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>

  <div class="bj-content" style="max-width: 48rem">
    <p class="bj-text-lg" style="color: var(--bj-text-alt)">
      {{ t('lead') }}
    </p>

    <h2>{{ t('section-status') }}</h2>
    <div
      class="bj-callout bj-callout--warning"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <div class="bj-callout__body">
        <p class="bj-callout__title">{{ t('callout-title') }}</p>
        <p class="bj-callout__text">
          {{ t('callout-text-before') }}<strong>design.gouv.example</strong
          >{{ t('callout-text-after') }}
        </p>
      </div>
    </div>

    <h2>{{ t('section-results') }}</h2>
    <p>{{ t('results-p') }}</p>

    <h2>{{ t('section-not-accessible') }}</h2>
    <p>{{ t('not-accessible-p') }}</p>
    <ul>
      <li>{{ t('not-accessible-li-1') }}</li>
      <li>{{ t('not-accessible-li-2') }}</li>
    </ul>

    <h2>{{ t('section-tech') }}</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS3 (SCSS)</li>
      <li>JavaScript (TypeScript)</li>
      <li>Vue.js 3</li>
      <li>WAI-ARIA 1.2</li>
    </ul>

    <h2>{{ t('section-test-env') }}</h2>
    <p>{{ t('test-env-p') }}</p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('table-th-browser') }}</th>
          <th>{{ t('table-th-at') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ t('test-row-1-browser') }}</td>
          <td>NVDA</td>
        </tr>
        <tr>
          <td>{{ t('test-row-2-browser') }}</td>
          <td>JAWS</td>
        </tr>
        <tr>
          <td>{{ t('test-row-3-browser') }}</td>
          <td>VoiceOver</td>
        </tr>
      </tbody>
    </table>

    <h2>{{ t('section-compensation') }}</h2>
    <p>{{ t('compensation-p') }}</p>
    <ul>
      <li>
        <strong>{{ t('compensation-li-email-label') }}</strong>
        {{ accessibiliteEmail }}
      </li>
      <li>
        <strong>{{ t('compensation-li-address-label') }}</strong>
        {{ t('compensation-li-address') }}
      </li>
    </ul>

    <h2>{{ t('section-recourse') }}</h2>
    <p>{{ t('recourse-p') }}</p>
  </div>
</template>
