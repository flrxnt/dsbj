<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const demoImg = 'https://i.pravatar.cc/100?img=3'
const demoImg2 = 'https://i.pravatar.cc/100?img=5'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjAvatar',
      desc: 'Composant Vue pour l’avatar DSBJ : image, initiales, icône Remix ou slot ; tailles, carré et pastille de statut.',
      'section-usage': 'Utilisation',
      'section-sizes': 'Tailles',
      'section-content': 'Contenu',
      'section-square': 'Carré',
      'section-status': 'Statut',
      'section-combo': 'Combinaisons',
      'section-slot': 'Slot par défaut',
      'section-events': 'Événements',
      'section-props': 'Props',
      'preview-initials': 'AK',
      'preview-img-alt': 'Photo de profil',
      'slot-desc':
        'Si aucune image, initiales ni prop <code>icon</code> ne sont fournis, le slot par défaut remplit l’avatar (ex. logo ou initiales personnalisées).',
      'events-desc':
        'Pas d’événement personnalisé : utilisez les écouteurs natifs sur la racine (ex. <code>{\'@\'}click</code> sur <code>BjAvatar</code>, propagés sur le <code>&lt;span&gt;</code>).',
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
      'section-sizes': 'Sizes',
      'section-content': 'Content',
      'section-square': 'Square',
      'section-status': 'Status',
      'section-combo': 'Combinations',
      'section-slot': 'Default slot',
      'section-events': 'Events',
      'section-props': 'Props',
      'preview-initials': 'AK',
      'preview-img-alt': 'Profile photo',
      'slot-desc':
        'If no image, initials, or <code>icon</code> is set, the default slot fills the avatar (e.g. custom logo or initials).',
      'events-desc':
        'No custom emits: use native listeners on the root (e.g. <code>{\'@\'}click</code> on <code>BjAvatar</code>, forwarded to the <code>&lt;span&gt;</code>).',
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

const codeSizes = `<BjAvatar size="sm" initials="SM" />
<BjAvatar size="md" initials="MD" />
<BjAvatar size="lg" initials="LG" />
<BjAvatar size="xl" initials="XL" />`

const codeContentSrc = `<BjAvatar src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />`
const codeContentInitials = `<BjAvatar initials="AK" />`
const codeContentIcon = `<BjAvatar icon="ri-user-line" />`
const codeContentSlot = `<BjAvatar>
  <span class="bj-text" style="font-size: 0.65rem; font-weight: 700">AB</span>
</BjAvatar>`

const codeSquare = `<BjAvatar square size="sm" src="https://i.pravatar.cc/100?img=5" alt="Photo de profil" />
<BjAvatar square size="md" src="https://i.pravatar.cc/100?img=5" alt="Photo de profil" />
<BjAvatar square size="lg" src="https://i.pravatar.cc/100?img=5" alt="Photo de profil" />
<BjAvatar square size="xl" src="https://i.pravatar.cc/100?img=5" alt="Photo de profil" />`

const codeStatus = `<BjAvatar status="online" src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />
<BjAvatar status="away" src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />
<BjAvatar status="busy" src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />
<BjAvatar status="offline" src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />`

const codeCombo = `<BjAvatar square status="online" size="lg" src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />
<BjAvatar square status="busy" size="md" initials="BK" />
<BjAvatar status="away" size="sm" icon="ri-user-line" />
<BjAvatar status="offline" size="xl" initials="XL" />`

const codeSlotDefault = `<BjAvatar>
  <span class="bj-text" style="font-size: 0.65rem; font-weight: 700">AB</span>
</BjAvatar>`

const codeEvents = `<BjAvatar initials="AK" role="button" tabindex="0" @click="openMenu" />`

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

  <DocsSection id="vue-avatar-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar bj-avatar--sm">
        <span class="bj-avatar__initials">SM</span>
      </span>
      <span class="bj-avatar">
        <span class="bj-avatar__initials">MD</span>
      </span>
      <span class="bj-avatar bj-avatar--lg">
        <span class="bj-avatar__initials">LG</span>
      </span>
      <span class="bj-avatar bj-avatar--xl">
        <span class="bj-avatar__initials">XL</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-content" :title="t('section-content')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar">
        <img class="bj-avatar__img" :src="demoImg" :alt="t('preview-img-alt')" />
      </span>
      <span class="bj-avatar">
        <span class="bj-avatar__initials">{{ t('preview-initials') }}</span>
      </span>
      <span class="bj-avatar">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true" />
      </span>
      <span class="bj-avatar">
        <span class="bj-text" style="font-size: 0.65rem; font-weight: 700">AB</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeContentSrc" lang="html" />
    <DocsCode :code="codeContentInitials" lang="html" />
    <DocsCode :code="codeContentIcon" lang="html" />
    <DocsCode :code="codeContentSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-square" :title="t('section-square')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar bj-avatar--square bj-avatar--sm">
        <img class="bj-avatar__img" :src="demoImg2" :alt="t('preview-img-alt')" />
      </span>
      <span class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" :src="demoImg2" :alt="t('preview-img-alt')" />
      </span>
      <span class="bj-avatar bj-avatar--square bj-avatar--lg">
        <img class="bj-avatar__img" :src="demoImg2" :alt="t('preview-img-alt')" />
      </span>
      <span class="bj-avatar bj-avatar--square bj-avatar--xl">
        <img class="bj-avatar__img" :src="demoImg2" :alt="t('preview-img-alt')" />
      </span>
    </DocsPreview>
    <DocsCode :code="codeSquare" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-status" :title="t('section-status')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar">
        <img class="bj-avatar__img" :src="demoImg" :alt="t('preview-img-alt')" />
        <span class="bj-avatar__status bj-avatar__status--online" />
      </span>
      <span class="bj-avatar">
        <img class="bj-avatar__img" :src="demoImg" :alt="t('preview-img-alt')" />
        <span class="bj-avatar__status bj-avatar__status--away" />
      </span>
      <span class="bj-avatar">
        <img class="bj-avatar__img" :src="demoImg" :alt="t('preview-img-alt')" />
        <span class="bj-avatar__status bj-avatar__status--busy" />
      </span>
      <span class="bj-avatar">
        <img class="bj-avatar__img" :src="demoImg" :alt="t('preview-img-alt')" />
        <span class="bj-avatar__status bj-avatar__status--offline" />
      </span>
    </DocsPreview>
    <DocsCode :code="codeStatus" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-combo" :title="t('section-combo')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar bj-avatar--square bj-avatar--lg">
        <img class="bj-avatar__img" :src="demoImg" :alt="t('preview-img-alt')" />
        <span class="bj-avatar__status bj-avatar__status--online" />
      </span>
      <span class="bj-avatar bj-avatar--square">
        <span class="bj-avatar__initials">BK</span>
        <span class="bj-avatar__status bj-avatar__status--busy" />
      </span>
      <span class="bj-avatar bj-avatar--sm">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true" />
        <span class="bj-avatar__status bj-avatar__status--away" />
      </span>
      <span class="bj-avatar bj-avatar--xl">
        <span class="bj-avatar__initials">XL</span>
        <span class="bj-avatar__status bj-avatar__status--offline" />
      </span>
    </DocsPreview>
    <DocsCode :code="codeCombo" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-desc')" />
    <DocsPreview>
      <span class="bj-avatar">
        <span class="bj-text" style="font-size: 0.65rem; font-weight: 700">AB</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeSlotDefault" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-events" :title="t('section-events')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('events-desc')" />
    <DocsCode :code="codeEvents" lang="html" />
  </DocsSection>

  <DocsSection id="vue-avatar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
