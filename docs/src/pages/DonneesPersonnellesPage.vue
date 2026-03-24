<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const dpoEmail = 'dpo@gouv.example'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Données personnelles',
      'section-processing': 'Traitement des données',
      'processing-p':
        'La République du Bénin s\'engage à protéger les données personnelles des utilisateurs de ce site conformément à la réglementation en vigueur en matière de protection des données.',
      'section-controller': 'Responsable du traitement',
      'controller-p':
        'Le responsable du traitement est l\'Agence des Services et Systèmes d\'Information (ASSI) de la République du Bénin.',
      'controller-li-address-label': 'Adresse :',
      'controller-li-address': 'Cotonou, République du Bénin',
      'controller-li-email-label': 'E-mail :',
      'section-collected': 'Données collectées',
      'collected-p': 'Ce site peut collecter les données suivantes :',
      'collected-li-nav-strong': 'Données de navigation :',
      'collected-li-nav':
        'adresse IP, type de navigateur, pages visitées, date et heure de visite (via cookies d\'analyse)',
      'collected-li-prefs-strong': 'Préférences utilisateur :',
      'collected-li-prefs':
        'choix du thème (clair/sombre) et de la langue, stockés localement dans votre navigateur (localStorage)',
      'collected-li-consent-strong': 'Consentement cookies :',
      'collected-li-consent':
        'votre choix d\'acceptation ou de refus des cookies, stocké localement',
      'section-purposes': 'Finalités du traitement',
      'purposes-p': 'Les données collectées sont utilisées uniquement pour :',
      'purposes-li-1': 'Mesurer l\'audience du site et améliorer son contenu',
      'purposes-li-2': 'Mémoriser vos préférences d\'affichage',
      'purposes-li-3': 'Assurer le bon fonctionnement technique du site',
      'section-cookies': 'Cookies',
      'cookies-p':
        'Ce site utilise des cookies. Vous pouvez à tout moment modifier vos préférences en matière de cookies via le bandeau de consentement ou en supprimant les cookies de votre navigateur.',
      'table-th-cookie': 'Cookie',
      'table-th-purpose': 'Finalité',
      'table-th-duration': 'Durée',
      'cookie-row-consent-purpose':
        'Mémoriser le choix de consentement cookies',
      'cookie-row-consent-duration': '12 mois',
      'cookie-row-theme-purpose':
        'Mémoriser la préférence de thème (clair/sombre)',
      'cookie-row-theme-duration': 'Permanente (localStorage)',
      'cookie-row-lang-purpose':
        'Mémoriser la préférence de langue (fr/en)',
      'cookie-row-lang-duration': 'Permanente (localStorage)',
      'cookie-row-sidebar-purpose':
        'Mémoriser l\'état de la sidebar (ouverte/fermée)',
      'cookie-row-sidebar-duration': 'Permanente (localStorage)',
      'section-retention': 'Durée de conservation',
      'retention-p':
        'Les données de navigation sont conservées pour une durée maximale de 13 mois. Les préférences utilisateur stockées localement persistent jusqu\'à leur suppression manuelle par l\'utilisateur.',
      'section-rights': 'Vos droits',
      'rights-p':
        'Conformément à la réglementation, vous disposez des droits suivants sur vos données personnelles :',
      'rights-li-1': 'Droit d\'accès',
      'rights-li-2': 'Droit de rectification',
      'rights-li-3': 'Droit d\'effacement',
      'rights-li-4': 'Droit de limitation du traitement',
      'rights-li-5': 'Droit d\'opposition',
      'rights-p2-before': 'Pour exercer ces droits, vous pouvez adresser votre demande à ',
      'rights-p2-after': '.',
    },
    en: {
      title: 'Personal data',
      'section-processing': 'Data processing',
      'processing-p':
        'The Republic of Benin is committed to protecting the personal data of users of this site in accordance with applicable data protection law.',
      'section-controller': 'Data controller',
      'controller-p':
        'The data controller is the Agency for Services and Information Systems (ASSI) of the Republic of Benin.',
      'controller-li-address-label': 'Address:',
      'controller-li-address': 'Cotonou, Republic of Benin',
      'controller-li-email-label': 'E-mail:',
      'section-collected': 'Data collected',
      'collected-p': 'This site may collect the following data:',
      'collected-li-nav-strong': 'Browsing data:',
      'collected-li-nav':
        'IP address, browser type, pages visited, date and time of visit (via analytics cookies)',
      'collected-li-prefs-strong': 'User preferences:',
      'collected-li-prefs':
        'theme (light/dark) and language choice, stored locally in your browser (localStorage)',
      'collected-li-consent-strong': 'Cookie consent:',
      'collected-li-consent':
        'your choice to accept or refuse cookies, stored locally',
      'section-purposes': 'Purposes of processing',
      'purposes-p': 'Collected data is used only to:',
      'purposes-li-1': 'Measure site traffic and improve content',
      'purposes-li-2': 'Remember your display preferences',
      'purposes-li-3': 'Ensure proper technical operation of the site',
      'section-cookies': 'Cookies',
      'cookies-p':
        'This site uses cookies. You may change your cookie preferences at any time via the consent banner or by deleting cookies in your browser.',
      'table-th-cookie': 'Cookie',
      'table-th-purpose': 'Purpose',
      'table-th-duration': 'Duration',
      'cookie-row-consent-purpose': 'Remember cookie consent choice',
      'cookie-row-consent-duration': '12 months',
      'cookie-row-theme-purpose': 'Remember theme preference (light/dark)',
      'cookie-row-theme-duration': 'Persistent (localStorage)',
      'cookie-row-lang-purpose': 'Remember language preference (fr/en)',
      'cookie-row-lang-duration': 'Persistent (localStorage)',
      'cookie-row-sidebar-purpose':
        'Remember sidebar state (open/closed)',
      'cookie-row-sidebar-duration': 'Persistent (localStorage)',
      'section-retention': 'Retention period',
      'retention-p':
        'Browsing data is kept for a maximum of 13 months. User preferences stored locally remain until you delete them manually.',
      'section-rights': 'Your rights',
      'rights-p':
        'Under applicable law, you have the following rights regarding your personal data:',
      'rights-li-1': 'Right of access',
      'rights-li-2': 'Right to rectification',
      'rights-li-3': 'Right to erasure',
      'rights-li-4': 'Right to restriction of processing',
      'rights-li-5': 'Right to object',
      'rights-p2-before':
        'To exercise these rights, you may contact ',
      'rights-p2-after': '.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>

  <div class="bj-content" style="max-width: 48rem">
    <h2>{{ t('section-processing') }}</h2>
    <p>{{ t('processing-p') }}</p>

    <h2>{{ t('section-controller') }}</h2>
    <p>{{ t('controller-p') }}</p>
    <ul>
      <li>
        <strong>{{ t('controller-li-address-label') }}</strong>
        {{ t('controller-li-address') }}
      </li>
      <li>
        <strong>{{ t('controller-li-email-label') }}</strong>
        {{ dpoEmail }}
      </li>
    </ul>

    <h2>{{ t('section-collected') }}</h2>
    <p>{{ t('collected-p') }}</p>
    <ul>
      <li>
        <strong>{{ t('collected-li-nav-strong') }}</strong>
        {{ t('collected-li-nav') }}
      </li>
      <li>
        <strong>{{ t('collected-li-prefs-strong') }}</strong>
        {{ t('collected-li-prefs') }}
      </li>
      <li>
        <strong>{{ t('collected-li-consent-strong') }}</strong>
        {{ t('collected-li-consent') }}
      </li>
    </ul>

    <h2>{{ t('section-purposes') }}</h2>
    <p>{{ t('purposes-p') }}</p>
    <ul>
      <li>{{ t('purposes-li-1') }}</li>
      <li>{{ t('purposes-li-2') }}</li>
      <li>{{ t('purposes-li-3') }}</li>
    </ul>

    <h2>{{ t('section-cookies') }}</h2>
    <p>{{ t('cookies-p') }}</p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('table-th-cookie') }}</th>
          <th>{{ t('table-th-purpose') }}</th>
          <th>{{ t('table-th-duration') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>bj-consent</code></td>
          <td>{{ t('cookie-row-consent-purpose') }}</td>
          <td>{{ t('cookie-row-consent-duration') }}</td>
        </tr>
        <tr>
          <td><code>bj-docs-theme</code></td>
          <td>{{ t('cookie-row-theme-purpose') }}</td>
          <td>{{ t('cookie-row-theme-duration') }}</td>
        </tr>
        <tr>
          <td><code>bj-docs-lang</code></td>
          <td>{{ t('cookie-row-lang-purpose') }}</td>
          <td>{{ t('cookie-row-lang-duration') }}</td>
        </tr>
        <tr>
          <td><code>bj-docs-sidebar</code></td>
          <td>{{ t('cookie-row-sidebar-purpose') }}</td>
          <td>{{ t('cookie-row-sidebar-duration') }}</td>
        </tr>
      </tbody>
    </table>

    <h2>{{ t('section-retention') }}</h2>
    <p>{{ t('retention-p') }}</p>

    <h2>{{ t('section-rights') }}</h2>
    <p>{{ t('rights-p') }}</p>
    <ul>
      <li>{{ t('rights-li-1') }}</li>
      <li>{{ t('rights-li-2') }}</li>
      <li>{{ t('rights-li-3') }}</li>
      <li>{{ t('rights-li-4') }}</li>
      <li>{{ t('rights-li-5') }}</li>
    </ul>
    <p>
      {{ t('rights-p2-before') }}<strong>{{ dpoEmail }}</strong
      >{{ t('rights-p2-after') }}
    </p>
  </div>
</template>
