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
      title: 'Tuile',
      desc: 'Tuile d’accès rapide centrée (icône ou image, titre, courte description). Souvent utilisée comme lien ; la grille <code class="bj-text-sm">bj-tiles</code> adapte les colonnes au viewport.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Sur un <code>&lt;a&gt;</code>, le titre et la description composent le contexte du lien : le libellé doit rester compréhensible hors grille. Marquez les icônes décoratives en <code>aria-hidden="true"</code>. Pour une image purement décorative dans la tuile, utilisez <code>alt=""</code>.',
      'prop-bj-tile':
        'Tuile verticale centrée, bordure et survol.',
      'prop-bj-tile-icon':
        'Grande icône Remix au-dessus du titre.',
      'prop-bj-tile-img':
        'Image 4rem × 4rem sous le même rôle que l’icône.',
      'prop-bj-tile-title': 'Libellé principal.',
      'prop-bj-tile-desc': 'Description secondaire.',
      'prop-bj-tile-horizontal':
        'Icône à gauche, texte aligné à gauche.',
      'prop-bj-tiles': 'Grille responsive de tuiles.',
    },
    en: {
      title: 'Tile',
      desc: 'Centred quick-access tile (icon or image, title, short description). Often used as a link; the <code class="bj-text-sm">bj-tiles</code> grid adapts columns to the viewport.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'On an <code>&lt;a&gt;</code>, the title and description form the link context: the label must stay clear outside the grid. Mark decorative icons with <code>aria-hidden="true"</code>. For a purely decorative image in the tile, use <code>alt=""</code>.',
      'prop-bj-tile': 'Centred vertical tile, border and hover.',
      'prop-bj-tile-icon': 'Large Remix icon above the title.',
      'prop-bj-tile-img':
        '4rem × 4rem image serving the same role as the icon.',
      'prop-bj-tile-title': 'Primary label.',
      'prop-bj-tile-desc': 'Secondary description.',
      'prop-bj-tile-horizontal': 'Icon on the left, text left-aligned.',
      'prop-bj-tiles': 'Responsive tile grid.',
    },
  },
})

const codeExemple = `<a href="#" class="bj-tile">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <span class="bj-tile__title">…</span>
  <span class="bj-tile__desc">…</span>
</a>`

const codeVariantes = `<a href="#" class="bj-tile bj-tile--horizontal">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <div>
    <div class="bj-tile__title">…</div>
    <div class="bj-tile__desc">…</div>
  </div>
</a>
<img class="bj-tile__img" src="…" alt="">
<div class="bj-tiles">…</div>`

const propsRows = computed(() => [
  { name: 'bj-tile', description: t('prop-bj-tile') },
  {
    name: 'bj-tile__icon',
    description: t('prop-bj-tile-icon'),
  },
  {
    name: 'bj-tile__img',
    description: t('prop-bj-tile-img'),
  },
  {
    name: 'bj-tile__title',
    description: t('prop-bj-tile-title'),
  },
  {
    name: 'bj-tile__desc',
    description: t('prop-bj-tile-desc'),
  },
  {
    name: 'bj-tile--horizontal',
    description: t('prop-bj-tile-horizontal'),
  },
  { name: 'bj-tiles', description: t('prop-bj-tiles') },
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

  <DocsSection id="exemple-tile" :title="t('section-example')">
    <DocsPreview>
      <a
        href="#"
        class="bj-tile"
        style="max-width: 14rem; margin: 0 auto"
      >
        <span class="bj-tile__icon" aria-hidden="true"
          ><i class="ri-file-list-3-line"></i
        ></span>
        <span class="bj-tile__title">Mes démarches</span>
        <span class="bj-tile__desc"
          >Suivre l’état de vos dossiers en cours.</span
        >
      </a>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-tile" :title="t('section-variants')">
    <DocsPreview>
      <div class="bj-tiles">
        <a href="#" class="bj-tile bj-tile--horizontal">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-customer-service-2-line"></i
          ></span>
          <div>
            <div class="bj-tile__title">Aide</div>
            <div class="bj-tile__desc">
              FAQ et contact du support.
            </div>
          </div>
        </a>
        <a href="#" class="bj-tile">
          <img
            class="bj-tile__img"
            src="https://picsum.photos/seed/tileicon/128/128"
            width="64"
            height="64"
            alt=""
          />
          <span class="bj-tile__title">Tuile avec image</span>
          <span class="bj-tile__desc"
            >Logo ou pictogramme personnalisé.</span
          >
        </a>
        <a href="#" class="bj-tile">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-calendar-event-line"></i
          ></span>
          <span class="bj-tile__title">Rendez-vous</span>
          <span class="bj-tile__desc"
            >Prendre un créneau en ligne.</span
          >
        </a>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-tile" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tile" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
