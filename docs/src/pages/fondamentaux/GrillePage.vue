<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Grille',
      desc:
        'Le contenu est centré dans un {container} (largeur max. 1248\u00a0px) avec marges latérales responsives. La grille comporte {cols} et des gouttières basées sur {gap}.',
      'section-breakpoints': 'Points de rupture',
      thName: 'Nom',
      thMinWidth: 'Largeur min.',
      thColPrefix: 'Préfixe de colonne',
      'section-demo': '12 colonnes (démo)',
      'demo-note':
        'Ligne classique avec marges négatives sur le rang - chaque colonne a un padding latéral.',
      'gouttieres-title': 'Gouttières : {code}',
      'gouttieres-note':
        'Utilise la propriété {gap} ; les colonnes n’ont pas de padding supplémentaire à l’intérieur du rang.',
      'section-responsive': 'Colonnes responsives',
      'responsive-p':
        'Combinez {mobile} avec {sm}, {md}, {lg}, {xl}. Utilisez {col} pour une colonne flexible ({flex}).',
      colsStrong: '12 colonnes',
    },
    en: {
      title: 'Grid',
      desc:
        'Content is centered in a {container} (max width 1248\u00a0px) with responsive side margins. The grid has {cols} and gutters based on {gap}.',
      'section-breakpoints': 'Breakpoints',
      thName: 'Name',
      thMinWidth: 'Min width',
      thColPrefix: 'Column prefix',
      'section-demo': '12 columns (demo)',
      'demo-note':
        'Classic row with negative margins—each column has horizontal padding.',
      'gouttieres-title': 'Gutters: {code}',
      'gouttieres-note':
        'Uses the {gap} property; columns have no extra padding inside the row.',
      'section-responsive': 'Responsive columns',
      'responsive-p':
        'Combine {mobile} with {sm}, {md}, {lg}, {xl}. Use {col} for a flexible column ({flex}).',
      colsStrong: '12 columns',
    },
  },
})

const codeGutters = `<div class="bj-grid-row bj-grid-row--gutters">
  <div class="bj-col-12 bj-col-md-6 bj-col-lg-4">…</div>
</div>`
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt">
    <i18n-t keypath="desc">
      <template #container>
        <code>bj-container</code>
      </template>
      <template #cols>
        <strong>12 colonnes</strong>
      </template>
      <template #gap>
        <code>--bj-spacing-4v</code>
      </template>
    </i18n-t>
  </p>

  <DocsSection id="points-rupture" :title="t('section-breakpoints')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('thName') }}</th>
          <th>{{ t('thMinWidth') }}</th>
          <th>{{ t('thColPrefix') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SM</td>
          <td>576&nbsp;px</td>
          <td><code>bj-col-sm-*</code></td>
        </tr>
        <tr>
          <td>MD</td>
          <td>768&nbsp;px</td>
          <td><code>bj-col-md-*</code></td>
        </tr>
        <tr>
          <td>LG</td>
          <td>992&nbsp;px</td>
          <td><code>bj-col-lg-*</code></td>
        </tr>
        <tr>
          <td>XL</td>
          <td>1248&nbsp;px</td>
          <td><code>bj-col-xl-*</code></td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="demo-12-colonnes" :title="t('section-demo')">
    <p class="bj-text-sm bj-text-alt">
      {{ t('demo-note') }}
    </p>
    <DocsPreview style="overflow-x: auto">
      <div class="bj-grid-row">
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            1
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            2
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            3
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            4
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            5
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            6
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            7
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            8
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            9
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-vert-benin-925);
              min-height: 3rem;
            "
          >
            10
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-bleu-horizon-925);
              min-height: 3rem;
            "
          >
            11
          </div>
        </div>
        <div class="bj-col-1">
          <div
            class="bj-text-center bj-text-xs bj-p-2v"
            style="
              background: var(--bj-color-ocre-terre-925);
              min-height: 3rem;
            "
          >
            12
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <section class="docs-section" id="gouttieres" aria-labelledby="gouttieres-title">
    <h2 id="gouttieres-title" class="docs-section__title">
      <i18n-t keypath="gouttieres-title">
        <template #code>
          <code>bj-grid-row--gutters</code>
        </template>
      </i18n-t>
    </h2>
    <p class="bj-text-sm bj-text-alt">
      <i18n-t keypath="gouttieres-note">
        <template #gap>
          <code>gap</code>
        </template>
      </i18n-t>
    </p>
    <DocsPreview>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-md-4">
          <div
            class="bj-p-3v bj-text-sm bj-text-center"
            style="background: var(--bj-color-info-925)"
          >
            bj-col-12 bj-col-md-4
          </div>
        </div>
        <div class="bj-col-12 bj-col-md-4">
          <div
            class="bj-p-3v bj-text-sm bj-text-center"
            style="background: var(--bj-color-succes-925)"
          >
            bj-col-12 bj-col-md-4
          </div>
        </div>
        <div class="bj-col-12 bj-col-md-4">
          <div
            class="bj-p-3v bj-text-sm bj-text-center"
            style="background: var(--bj-color-alerte-925)"
          >
            bj-col-12 bj-col-md-4
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGutters" />
  </section>

  <DocsSection id="colonnes-responsives" :title="t('section-responsive')">
    <p>
      <i18n-t keypath="responsive-p">
        <template #mobile>
          <code>bj-col-*</code>
        </template>
        <template #sm>
          <code>bj-col-sm-*</code>
        </template>
        <template #md>
          <code>bj-col-md-*</code>
        </template>
        <template #lg>
          <code>bj-col-lg-*</code>
        </template>
        <template #xl>
          <code>bj-col-xl-*</code>
        </template>
        <template #col>
          <code>bj-col</code>
        </template>
        <template #flex>
          <code>flex: 1 1 0%</code>
        </template>
      </i18n-t>
    </p>
  </DocsSection>
</template>
