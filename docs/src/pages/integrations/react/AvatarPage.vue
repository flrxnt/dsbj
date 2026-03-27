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
      desc: 'Composant React pour l’avatar DSBJ : image, initiales, icône Remix ou enfants ; tailles, carré et pastille de statut.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'preview-initials': 'AK',
      'preview-img-alt': 'Photo de profil',
      'prop-size': 'Taille : sm, md (défaut), lg ou xl.',
      'prop-square': 'Variante carrée (bj-avatar--square).',
      'prop-src': 'URL de l’image ; si défini, affiche bj-avatar__img.',
      'prop-alt': 'Texte alternatif de l’image ; chaîne vide par défaut.',
      'prop-initials': 'Initiales si pas d’image ni d’icône (bj-avatar__initials).',
      'prop-icon': 'Classe d’icône Remix, par ex. ri-user-line, si pas d’image ni d’initiales.',
      'prop-status': 'Pastille de statut : online, away, busy ou offline.',
      'section-sizes': 'Tailles',
      'section-content': 'Contenu',
      'section-square': 'Carré',
      'section-status': 'Statut',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Callbacks',
      'desc-sizes': 'sm, md (défaut), lg et xl.',
      'desc-content': 'src (image), initials, icon (classe Remix) ou enfants si rien d’autre.',
      'desc-square': 'square sur les quatre tailles.',
      'desc-status': 'Quatre valeurs de statut sur une même base.',
      'desc-combinations':
        'Carré avec chaque statut, puis combinaisons taille + statut (ex. xl carré en ligne, initiales par taille).',
      'combo-square-status': 'Carré × statut',
      'combo-size-status': 'Taille × statut',
      'desc-callbacks': 'Les attributs du span racine (ex. onClick) peuvent compléter le comportement.',
      'avatar-status-online': 'En ligne',
      'avatar-status-away': 'Absent',
      'avatar-status-busy': 'Occupé',
      'avatar-status-offline': 'Hors ligne',
      'avatar-children-fallback': '?',
    },
    en: {
      title: 'BjAvatar',
      desc: 'React component for the DSBJ avatar: image, initials, Remix icon, or children; sizes, square shape, and status dot.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'preview-initials': 'AK',
      'preview-img-alt': 'Profile photo',
      'prop-size': 'Size: sm, md (default), lg, or xl.',
      'prop-square': 'Square variant (bj-avatar--square).',
      'prop-src': 'Image URL; when set, renders bj-avatar__img.',
      'prop-alt': 'Image alt text; empty string by default.',
      'prop-initials': 'Initials when no image or icon (bj-avatar__initials).',
      'prop-icon': 'Remix icon class, e.g. ri-user-line, when no image or initials.',
      'prop-status': 'Status dot: online, away, busy, or offline.',
      'section-sizes': 'Sizes',
      'section-content': 'Content',
      'section-square': 'Square',
      'section-status': 'Status',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Callbacks',
      'desc-sizes': 'sm, md (default), lg, and xl.',
      'desc-content': 'src (image), initials, icon (Remix class), or children when none apply.',
      'desc-square': 'square at all four sizes.',
      'desc-status': 'Four status values on the same base.',
      'desc-combinations':
        'Square with each status, then size + status pairs (e.g. xl square online, initials per size).',
      'combo-square-status': 'Square × status',
      'combo-size-status': 'Size × status',
      'desc-callbacks': 'Root span attributes (e.g. onClick) can extend behavior.',
      'avatar-status-online': 'Online',
      'avatar-status-away': 'Away',
      'avatar-status-busy': 'Busy',
      'avatar-status-offline': 'Offline',
      'avatar-children-fallback': '?',
    },
  },
})

const codeUsage = `import { BjAvatar } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjAvatar src="https://i.pravatar.cc/100?img=3" alt="Photo de profil" />
      <BjAvatar initials="AK" />
      <BjAvatar icon="ri-user-line" />
      <BjAvatar status="online" src="https://i.pravatar.cc/100?img=8" alt="" />
    </>
  )
}`

const codeSizes = `import { BjAvatar } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjAvatar size="sm" initials="SM" />
      <BjAvatar size="md" initials="MD" />
      <BjAvatar size="lg" initials="LG" />
      <BjAvatar size="xl" initials="XL" />
    </>
  )
}`

const codeContent = `import { BjAvatar } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjAvatar src="https://i.pravatar.cc/100?img=3" alt="Profile" />
      <BjAvatar initials="AB" />
      <BjAvatar icon="ri-user-line" />
      <BjAvatar>
        <span style={{ fontSize: '0.75rem' }}>?</span>
      </BjAvatar>
    </>
  )
}`

const codeSquare = `import { BjAvatar } from '@flrxnt/dsbj/react'

const sizes = ['sm', 'md', 'lg', 'xl'] as const

export default function App() {
  return (
    <>
      {sizes.map((size) => (
        <BjAvatar key={size} size={size} square initials={size.toUpperCase()} />
      ))}
    </>
  )
}`

const codeStatus = `import { BjAvatar } from '@flrxnt/dsbj/react'

const statuses = ['online', 'away', 'busy', 'offline'] as const

export default function App() {
  return (
    <>
      {statuses.map((status) => (
        <BjAvatar
          key={status}
          status={status}
          src="https://i.pravatar.cc/100?img=8"
          alt=""
        />
      ))}
    </>
  )
}`

const codeCombinations = `import { BjAvatar } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjAvatar size="xl" square status="online" src="https://i.pravatar.cc/100?img=12" alt="" />
      <BjAvatar size="sm" status="online" initials="S" />
      <BjAvatar size="md" status="away" initials="M" />
      <BjAvatar size="lg" status="busy" initials="L" />
      <BjAvatar size="xl" status="offline" initials="X" />
    </>
  )
}`

const codeCallbacks = `import { BjAvatar } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjAvatar
      initials="JD"
      role="button"
      tabIndex={0}
      onClick={() => {
        console.log('avatar click')
      }}
    />
  )
}`

const reactAvatarSizesForPreview = [
  { key: 'sm', cls: 'bj-avatar--sm' },
  { key: 'md', cls: '' },
  { key: 'lg', cls: 'bj-avatar--lg' },
  { key: 'xl', cls: 'bj-avatar--xl' },
]

const reactAvatarStatusForPreview = [
  { key: 'online', cls: 'bj-avatar__status--online', labelKey: 'avatar-status-online' as const },
  { key: 'away', cls: 'bj-avatar__status--away', labelKey: 'avatar-status-away' as const },
  { key: 'busy', cls: 'bj-avatar__status--busy', labelKey: 'avatar-status-busy' as const },
  { key: 'offline', cls: 'bj-avatar__status--offline', labelKey: 'avatar-status-offline' as const },
]

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

  <DocsSection id="react-avatar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-preview" :title="t('section-preview')">
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

  <DocsSection id="react-avatar-sizes" :title="t('section-sizes')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-sizes') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <template v-for="s in reactAvatarSizesForPreview" :key="s.key">
        <span class="bj-avatar" :class="s.cls">
          <span class="bj-avatar__initials">{{ s.key.toUpperCase() }}</span>
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-content" :title="t('section-content')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-content') }}
    </p>
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
      <span class="bj-avatar">{{ t('avatar-children-fallback') }}</span>
    </DocsPreview>
    <DocsCode :code="codeContent" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-square" :title="t('section-square')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-square') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <template v-for="s in reactAvatarSizesForPreview" :key="'sq-' + s.key">
        <span class="bj-avatar bj-avatar--square" :class="s.cls">
          <span class="bj-avatar__initials">{{ s.key.toUpperCase() }}</span>
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeSquare" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-status" :title="t('section-status')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-status') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: flex-end;">
      <template v-for="st in reactAvatarStatusForPreview" :key="st.key">
        <div style="display: inline-flex; flex-direction: column; align-items: center; gap: 4px">
          <span class="bj-avatar">
            <img
              class="bj-avatar__img"
              src="https://i.pravatar.cc/100?img=8"
              alt=""
            />
            <span class="bj-avatar__status" :class="st.cls" />
          </span>
          <span class="bj-text-xs" style="color: var(--bj-text-alt)">{{ t(st.labelKey) }}</span>
        </div>
      </template>
    </DocsPreview>
    <DocsCode :code="codeStatus" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-combos" :title="t('section-combinations')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-combinations') }}
    </p>
    <p class="bj-text-sm" style="font-weight: var(--bj-fw-semibold); margin-bottom: var(--bj-spacing-2v)">
      {{ t('combo-square-status') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <template v-for="st in reactAvatarStatusForPreview" :key="'cs-' + st.key">
        <span class="bj-avatar bj-avatar--square bj-avatar--lg">
          <img
            class="bj-avatar__img"
            src="https://i.pravatar.cc/100?img=12"
            alt=""
          />
          <span class="bj-avatar__status" :class="st.cls" />
        </span>
      </template>
    </DocsPreview>
    <p
      class="bj-text-sm"
      style="
        font-weight: var(--bj-fw-semibold);
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('combo-size-status') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <span class="bj-avatar bj-avatar--square bj-avatar--xl">
        <img
          class="bj-avatar__img"
          src="https://i.pravatar.cc/100?img=12"
          alt=""
        />
        <span class="bj-avatar__status bj-avatar__status--online" />
      </span>
      <span class="bj-avatar bj-avatar--sm">
        <span class="bj-avatar__initials">S</span>
        <span class="bj-avatar__status bj-avatar__status--online" />
      </span>
      <span class="bj-avatar">
        <span class="bj-avatar__initials">M</span>
        <span class="bj-avatar__status bj-avatar__status--away" />
      </span>
      <span class="bj-avatar bj-avatar--lg">
        <span class="bj-avatar__initials">L</span>
        <span class="bj-avatar__status bj-avatar__status--busy" />
      </span>
      <span class="bj-avatar bj-avatar--xl">
        <span class="bj-avatar__initials">X</span>
        <span class="bj-avatar__status bj-avatar__status--offline" />
      </span>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-callbacks" :title="t('section-callbacks')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-callbacks') }}
    </p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-avatar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
