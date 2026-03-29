<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const editorContactEmail = 'contact@gouv.example'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Mentions légales',
      'section-editor': 'Éditeur du site',
      'editor-p1-before': 'Le site ',
      'editor-p1-after':
        ' est édité par la République du Bénin, à travers l\'Agence des Services et Systèmes d\'Information (ASSI).',
      'editor-li-address-label': 'Adresse :',
      'editor-li-address': 'Cotonou, République du Bénin',
      'editor-li-phone-label': 'Téléphone :',
      'editor-li-phone': '+229 21 XX XX XX',
      'editor-li-email-label': 'E-mail :',
      'section-director': 'Directeur de la publication',
      'director-p':
        'Le directeur de la publication est le Directeur Général de l\'ASSI.',
      'section-hosting': 'Hébergement',
      'hosting-p': 'Ce site est hébergé par :',
      'hosting-li-name-label': 'Hébergeur :',
      'hosting-li-name': '[Nom de l\'hébergeur]',
      'hosting-li-address-label': 'Adresse :',
      'hosting-li-address': '[Adresse de l\'hébergeur]',
      'section-ip': 'Propriété intellectuelle',
      'ip-p1':
        'Sauf mention contraire, tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes, sons, logiciels) sont la propriété de la République du Bénin et sont protégés par les lois en vigueur sur la propriété intellectuelle.',
      'ip-p2-before':
        'Le code source du Design Système du Bénin (DSBJ) est distribué sous ',
      'ip-p2-strong': 'licence MIT',
      'ip-p2-after':
        '. Vous êtes libre de l\'utiliser, le modifier et le redistribuer dans le respect de cette licence.',
      'section-liability': 'Limitation de responsabilité',
      'liability-p':
        'Les informations diffusées sur ce site sont fournies à titre indicatif et sont susceptibles d\'être modifiées à tout moment. La République du Bénin ne saurait être tenue pour responsable de l\'utilisation qui pourrait être faite de ces informations, ni des dommages directs ou indirects pouvant résulter de l\'accès ou de l\'utilisation du site.',
      'section-links': 'Liens hypertextes',
      'links-p':
        'Le site peut contenir des liens vers d\'autres sites. La République du Bénin ne peut être tenue responsable du contenu de ces sites externes ni de l\'utilisation qui en est faite.',
    },
    en: {
      title: 'Legal notices',
      'section-editor': 'Site publisher',
      'editor-p1-before': 'The site ',
      'editor-p1-after':
        ' is published by the Republic of Benin, through the Agency for Services and Information Systems (ASSI).',
      'editor-li-address-label': 'Address:',
      'editor-li-address': 'Cotonou, Republic of Benin',
      'editor-li-phone-label': 'Phone:',
      'editor-li-phone': '+229 21 XX XX XX',
      'editor-li-email-label': 'E-mail:',
      'section-director': 'Publication director',
      'director-p':
        'The publication director is the Director General of ASSI.',
      'section-hosting': 'Hosting',
      'hosting-p': 'This site is hosted by:',
      'hosting-li-name-label': 'Host:',
      'hosting-li-name': '[Host name]',
      'hosting-li-address-label': 'Address:',
      'hosting-li-address': '[Host address]',
      'section-ip': 'Intellectual property',
      'ip-p1':
        'Unless otherwise stated, all content on this site (text, images, graphics, logo, icons, sound, software) is owned by the Republic of Benin and protected by applicable intellectual property law.',
      'ip-p2-before':
        'The Benin Design System (DSBJ) source code is distributed under the ',
      'ip-p2-strong': 'MIT licence',
      'ip-p2-after':
        '. You may use, modify and redistribute it in accordance with that licence.',
      'section-liability': 'Limitation of liability',
      'liability-p':
        'Information on this site is provided for guidance only and may change at any time. The Republic of Benin shall not be liable for any use made of this information, nor for direct or indirect damage arising from access to or use of the site.',
      'section-links': 'Hyperlinks',
      'links-p':
        'This site may contain links to other sites. The Republic of Benin is not responsible for the content of those external sites or how they are used.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>

  <div class="bj-content" style="max-width: 48rem">
    <h2>{{ t('section-editor') }}</h2>
    <p>
      {{ t('editor-p1-before') }}<strong>dsbj.site</strong
      >{{ t('editor-p1-after') }}
    </p>

    <ul>
      <li>
        <strong>{{ t('editor-li-address-label') }}</strong>
        {{ t('editor-li-address') }}
      </li>
      <li>
        <strong>{{ t('editor-li-phone-label') }}</strong>
        {{ t('editor-li-phone') }}
      </li>
      <li>
        <strong>{{ t('editor-li-email-label') }}</strong>
        {{ editorContactEmail }}
      </li>
    </ul>

    <h2>{{ t('section-director') }}</h2>
    <p>{{ t('director-p') }}</p>

    <h2>{{ t('section-hosting') }}</h2>
    <p>{{ t('hosting-p') }}</p>
    <ul>
      <li>
        <strong>{{ t('hosting-li-name-label') }}</strong>
        {{ t('hosting-li-name') }}
      </li>
      <li>
        <strong>{{ t('hosting-li-address-label') }}</strong>
        {{ t('hosting-li-address') }}
      </li>
    </ul>

    <h2>{{ t('section-ip') }}</h2>
    <p>{{ t('ip-p1') }}</p>
    <p>
      {{ t('ip-p2-before') }}<strong>{{ t('ip-p2-strong') }}</strong
      >{{ t('ip-p2-after') }}
    </p>

    <h2>{{ t('section-liability') }}</h2>
    <p>{{ t('liability-p') }}</p>

    <h2>{{ t('section-links') }}</h2>
    <p>{{ t('links-p') }}</p>
  </div>
</template>
