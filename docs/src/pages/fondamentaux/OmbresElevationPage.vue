<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Ombres et élévation',
      desc:
        'Jetons d’ombre, de rayon et de transition pour hiérarchiser l’interface sans excès.',
      'section-ombres': 'Ombres',
      'section-rayons': 'Rayons de bordure',
      thToken: 'Jeton',
      'section-transitions': 'Transitions',
      thValue: 'Valeur',
      thUsage: 'Usage',
      usageFast: 'Hover, focus légers',
      usageNormal: 'Ouvertures, panneaux',
      usageSlow: 'Transitions plus visibles',
      usageEasing: 'Courbe standard matérielle',
      'radius-row':
        '{xs} à {xl}, {full}, {pill}',
    },
    en: {
      title: 'Shadows and elevation',
      desc:
        'Shadow, radius, and transition tokens to layer the UI without excess.',
      'section-ombres': 'Shadows',
      'section-rayons': 'Border radii',
      thToken: 'Token',
      'section-transitions': 'Transitions',
      thValue: 'Value',
      thUsage: 'Usage',
      usageFast: 'Light hover and focus',
      usageNormal: 'Open states, panels',
      usageSlow: 'More noticeable transitions',
      usageEasing: 'Standard material easing curve',
      'radius-row':
        '{xs} to {xl}, {full}, {pill}',
    },
  },
})

const codeTransition =
  'transition: color var(--bj-duration-fast) var(--bj-easing);'
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt">
    {{ t('desc') }}
  </p>

  <DocsSection id="ombres" :title="t('section-ombres')">
    <DocsPreview>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-xs);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-xs</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-sm);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-sm</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-md);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-md</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-lg);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-lg</code>
          </div>
        </div>
        <div class="bj-col-12 bj-col-sm-6 bj-col-lg-4">
          <div
            class="bj-p-4v bj-text-sm bj-text-center"
            style="
              box-shadow: var(--bj-shadow-xl);
              background: var(--bj-bg-default);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <code>--bj-shadow-xl</code>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="rayons-bordure" :title="t('section-rayons')">
    <DocsPreview
      class="bj-d-flex bj-flex-wrap bj-gap-4v bj-items-end"
    >
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-xs);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">xs</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-sm);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">sm</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-md);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">md</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-lg);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">lg</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-xl);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">xl</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 4rem;
            height: 4rem;
            border-radius: var(--bj-radius-full);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">full</code>
      </div>
      <div class="bj-text-center">
        <div
          class="bj-bg-alt"
          style="
            width: 5rem;
            height: 2rem;
            border-radius: var(--bj-radius-pill);
            border: 1px solid var(--bj-border-subtle);
          "
        ></div>
        <code class="bj-text-xs">pill</code>
      </div>
    </DocsPreview>
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('thToken') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <i18n-t keypath="radius-row">
              <template #xs>
                <code>--bj-radius-xs</code>
              </template>
              <template #xl>
                <code>--bj-radius-xl</code>
              </template>
              <template #full>
                <code>--bj-radius-full</code>
              </template>
              <template #pill>
                <code>--bj-radius-pill</code>
              </template>
            </i18n-t>
          </td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="transitions" :title="t('section-transitions')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('thToken') }}</th>
          <th>{{ t('thValue') }}</th>
          <th>{{ t('thUsage') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-duration-fast</code></td>
          <td>150&nbsp;ms</td>
          <td>{{ t('usageFast') }}</td>
        </tr>
        <tr>
          <td><code>--bj-duration-normal</code></td>
          <td>250&nbsp;ms</td>
          <td>{{ t('usageNormal') }}</td>
        </tr>
        <tr>
          <td><code>--bj-duration-slow</code></td>
          <td>400&nbsp;ms</td>
          <td>{{ t('usageSlow') }}</td>
        </tr>
        <tr>
          <td><code>--bj-easing</code></td>
          <td><code>cubic-bezier(0.4, 0, 0.2, 1)</code></td>
          <td>{{ t('usageEasing') }}</td>
        </tr>
      </tbody>
    </table>
    <DocsCode :code="codeTransition" />
  </DocsSection>
</template>
