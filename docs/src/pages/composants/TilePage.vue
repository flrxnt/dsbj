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
      desc: 'Tuile d’accès : racine <code>&lt;a class="bj-tile"&gt;</code> (défaut Vue) ou <code>&lt;div class="bj-tile"&gt;</code> pour un bloc non cliquable. Modificateur <code>bj-tile--horizontal</code> pour icône à gauche. Grille <code>bj-tiles</code> pour plusieurs tuiles.',
      'section-example': 'Exemple (lien)',
      'section-div': 'Tuile en <code>div</code> (non lien)',
      'para-div':
        'Utilisez <code>div.bj-tile</code> pour un regroupement visuel sans navigation ; le contenu interactif reste à l’intérieur (boutons, liens ciblés).',
      'section-variants': 'Grille et horizontale',
      'section-combo': 'Horizontal × balise (<code>a</code> / <code>div</code>)',
      'para-combo':
        'Le modificateur horizontal s’applique indifféremment sur lien ou sur conteneur statique.',
      'section-matrix-tag-orientation':
        'Matrice : lien ou bloc × vertical ou horizontal',
      'para-matrix-tag-orientation':
        'Quatre combinaisons utiles : <code>&lt;a class="bj-tile"&gt;</code>, <code>&lt;a class="bj-tile bj-tile--horizontal"&gt;</code>, <code>&lt;div class="bj-tile"&gt;</code>, <code>&lt;div class="bj-tile bj-tile--horizontal"&gt;</code>.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Sur un <code>&lt;a&gt;</code>, le titre et la description composent le contexte du lien : le libellé doit rester compréhensible hors grille. Marquez les icônes décoratives en <code>aria-hidden="true"</code>. Pour une image purement décorative dans la tuile, utilisez <code>alt=""</code>. Sur une <code>div</code>, ne simulez pas un lien : exposez les actions avec de vrais contrôles focalisables.',
      'prop-bj-tile':
        'Tuile verticale centrée, bordure et survol (sur lien).',
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
      desc: 'Quick-access tile: root <code>&lt;a class="bj-tile"&gt;</code> (Vue default) or <code>&lt;div class="bj-tile"&gt;</code> for a non-navigating block. <code>bj-tile--horizontal</code> puts the icon on the left. Use <code>bj-tiles</code> for multiple tiles.',
      'section-example': 'Example (link)',
      'section-div': 'Tile as <code>div</code> (non-link)',
      'para-div':
        'Use <code>div.bj-tile</code> for visual grouping without navigation; keep real controls inside (buttons, targeted links).',
      'section-variants': 'Grid and horizontal',
      'section-combo': 'Horizontal × tag (<code>a</code> / <code>div</code>)',
      'para-combo':
        'The horizontal modifier works on both anchor and static container.',
      'section-matrix-tag-orientation':
        'Matrix: link or block × vertical or horizontal',
      'para-matrix-tag-orientation':
        'Four useful combos: <code>&lt;a class="bj-tile"&gt;</code>, <code>&lt;a class="bj-tile bj-tile--horizontal"&gt;</code>, <code>&lt;div class="bj-tile"&gt;</code>, <code>&lt;div class="bj-tile bj-tile--horizontal"&gt;</code>.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'On an <code>&lt;a&gt;</code>, the title and description form the link context: the label must stay clear outside the grid. Mark decorative icons with <code>aria-hidden="true"</code>. For a purely decorative image in the tile, use <code>alt=""</code>. On a <code>div</code>, do not fake a link: expose actions with real focusable controls.',
      'prop-bj-tile': 'Centred vertical tile, border and hover (on links).',
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

const codeDiv = `<div class="bj-tile">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <span class="bj-tile__title">Titre informatif</span>
  <span class="bj-tile__desc">Détail sans navigation sur toute la carte.</span>
</div>`

const codeVariantes = `<a href="#" class="bj-tile bj-tile--horizontal">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <div>
    <div class="bj-tile__title">…</div>
    <div class="bj-tile__desc">…</div>
  </div>
</a>
<img class="bj-tile__img" src="…" alt="">
<div class="bj-tiles">…</div>`

const codeCombo = `<!-- Lien horizontal -->
<a href="#" class="bj-tile bj-tile--horizontal">…</a>
<!-- Bloc horizontal statique -->
<div class="bj-tile bj-tile--horizontal">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <div>
    <div class="bj-tile__title">…</div>
    <div class="bj-tile__desc">…</div>
  </div>
</div>`

const codeMatrix4 = `<a href="#" class="bj-tile">…</a>
<a href="#" class="bj-tile bj-tile--horizontal">…</a>
<div class="bj-tile">…</div>
<div class="bj-tile bj-tile--horizontal">…</div>`

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

  <DocsSection id="tile-div" :title="t('section-div')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-div')" />
    </p>
    <DocsPreview>
      <div class="bj-tile" style="max-width: 16rem; margin: 0 auto">
        <span class="bj-tile__icon" aria-hidden="true"
          ><i class="ri-building-line"></i
        ></span>
        <span class="bj-tile__title">Guichet</span>
        <span class="bj-tile__desc"
          >Bloc informatif sans lien sur toute la surface.</span
        >
      </div>
    </DocsPreview>
    <DocsCode :code="codeDiv" />
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

  <DocsSection id="tile-combo" :title="t('section-combo')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-combo')" />
    </p>
    <DocsPreview>
      <div class="bj-tiles">
        <a href="#" class="bj-tile bj-tile--horizontal">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-external-link-line"></i
          ></span>
          <div>
            <div class="bj-tile__title">Lien horizontal</div>
            <div class="bj-tile__desc">Balise &lt;a&gt;.</div>
          </div>
        </a>
        <div class="bj-tile bj-tile--horizontal">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-file-info-line"></i
          ></span>
          <div>
            <div class="bj-tile__title">Bloc horizontal</div>
            <div class="bj-tile__desc">Balise &lt;div&gt;.</div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombo" />
  </DocsSection>

  <DocsSection
    id="tile-matrix-tag-orientation"
    :title="t('section-matrix-tag-orientation')"
  >
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-matrix-tag-orientation')" />
    </p>
    <DocsPreview>
      <div
        class="bj-tiles"
        style="grid-template-columns: repeat(2, minmax(0, 1fr))"
      >
        <a href="#" class="bj-tile">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-home-line"></i
          ></span>
          <span class="bj-tile__title">Lien vertical</span>
          <span class="bj-tile__desc">&lt;a&gt; sans horizontal.</span>
        </a>
        <a href="#" class="bj-tile bj-tile--horizontal">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-links-line"></i
          ></span>
          <div>
            <div class="bj-tile__title">Lien horizontal</div>
            <div class="bj-tile__desc">&lt;a&gt; + --horizontal.</div>
          </div>
        </a>
        <div class="bj-tile">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-information-line"></i
          ></span>
          <span class="bj-tile__title">Bloc vertical</span>
          <span class="bj-tile__desc">&lt;div&gt; sans horizontal.</span>
        </div>
        <div class="bj-tile bj-tile--horizontal">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-layout-grid-line"></i
          ></span>
          <div>
            <div class="bj-tile__title">Bloc horizontal</div>
            <div class="bj-tile__desc">&lt;div&gt; + --horizontal.</div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMatrix4" />
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
