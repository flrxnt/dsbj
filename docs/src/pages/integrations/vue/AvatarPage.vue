<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjAvatar',
      desc: 'Composant Vue pour l’avatar DSBJ : image, initiales, icône Remix ou slot ; tailles, carré et pastille de statut.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'preview-initials': 'AK',
      'preview-img-alt': 'Photo de profil',
      'prop-size': 'Taille : sm, md (défaut), lg ou xl.',
      'prop-square': 'Variante carrée (bj-avatar--square).',
      'prop-src': 'URL de l’image ; si défini, affiche bj-avatar__img.',
      'prop-alt': 'Texte alternatif de l’image (défaut chaîne vide).',
      'prop-initials': 'Initiales affichées si pas d’image ni d’icône (bj-avatar__initials).',
      'prop-icon': 'Classe d’icône Remix (ex. ri-user-line) si pas d’image ni d’initiales.',
      'prop-status': 'Pastille de statut : online, away, busy ou offline.',
    },
    en: {
      title: 'BjAvatar',
      desc: 'Vue component for the DSBJ avatar: image, initials, Remix icon, or slot; sizes, square shape, and status dot.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'preview-initials': 'AK',
      'preview-img-alt': 'Profile photo',
      'prop-size': 'Size: sm, md (default), lg, or xl.',
      'prop-square': 'Square variant (bj-avatar--square).',
      'prop-src': 'Image URL; when set, renders bj-avatar__img.',
      'prop-alt': 'Image alt text (defaults to empty string).',
      'prop-initials': 'Initials when no image or icon (bj-avatar__initials).',
      'prop-icon': 'Remix icon class (e.g. ri-user-line) when no image or initials.',
      'prop-status': 'Status dot: online, away, busy, or offline.',
    },
  },
})

const codeUsage = `<script setup>
import { BjAvatar } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjAvatar src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />
  <BjAvatar initials="AK" />
  <BjAvatar icon="ri-user-line" />
  <BjAvatar status="online" src="https://i.pravatar.cc/100?img=8" alt="" />
</template>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'square', description: t('prop-square') },
  { name: 'src', description: t('prop-src') },
  { name: 'alt', description: t('prop-alt') },
  { name: 'initials', description: t('prop-initials') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'status', description: t('prop-status') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-avatar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar">
        <img
          class="bj-avatar__img"
          src="https://i.pravatar.cc/100?img=3"
          :alt="t('preview-img-alt')"
        />
      </span>
      <span class="bj-avatar">
        <span class="bj-avatar__initials">{{ t('preview-initials') }}</span>
      </span>
      <span class="bj-avatar">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true" />
      </span>
      <span class="bj-avatar bj-avatar--sm">
        <span class="bj-avatar__initials">{{ t('preview-initials') }}</span>
      </span>
      <span class="bj-avatar bj-avatar--lg">
        <span class="bj-avatar__initials">{{ t('preview-initials') }}</span>
      </span>
      <span class="bj-avatar bj-avatar--square">
        <img
          class="bj-avatar__img"
          src="https://i.pravatar.cc/100?img=5"
          :alt="t('preview-img-alt')"
        />
      </span>
      <span class="bj-avatar">
        <img
          class="bj-avatar__img"
          src="https://i.pravatar.cc/100?img=8"
          alt=""
        />
        <span class="bj-avatar__status bj-avatar__status--online" />
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-avatar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
