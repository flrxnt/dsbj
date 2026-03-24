<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Espacement',
      desc:
        'L’unité de base est {strong4} (0,25\u00a0rem), notée {strong1v}. Les jetons {spacing} garantissent un rythme vertical et horizontal cohérent.',
      strong4: '4\u00a0px',
      strong1v: '1v',
      spacing: '--bj-spacing-*',
      'section-jetons': 'Jetons d’espacement',
      thToken: 'Jeton',
      thRem: 'rem',
      thPx: 'px',
      thGuide: 'Repère',
      'section-classes': 'Classes utilitaires',
      'classes-p':
        'Marges et paddings : {m}, {p}, avec variantes directionnelles {dirs} ({dirsExplain}).',
      dirsExplain:
        't, r, b, l pour haut, droite, bas, gauche ; x et y pour les axes',
      thSuffix: 'Suffixe',
      thMarginEx: 'Exemple marge',
      thPaddingEx: 'Exemple padding',
      rowCenter: 'Centrage horizontal',
    },
    en: {
      title: 'Spacing',
      desc:
        'The base unit is {strong4} (0.25\u00a0rem), written {strong1v}. {spacing} tokens keep vertical and horizontal rhythm consistent.',
      strong4: '4\u00a0px',
      strong1v: '1v',
      spacing: '--bj-spacing-*',
      'section-jetons': 'Spacing tokens',
      thToken: 'Token',
      thRem: 'rem',
      thPx: 'px',
      thGuide: 'Visual',
      'section-classes': 'Utility classes',
      'classes-p':
        'Margins and paddings: {m}, {p}, with directional variants {dirs} ({dirsExplain}).',
      dirsExplain:
        't, r, b, l for top, right, bottom, left; x and y for axes',
      thSuffix: 'Suffix',
      thMarginEx: 'Margin example',
      thPaddingEx: 'Padding example',
      rowCenter: 'Horizontal centering',
    },
  },
})

const codeSpacing = `<div class="bj-m-4v bj-p-6v">…</div>
<div class="bj-mt-2v bj-mb-8v">…</div>`
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt">
    <i18n-t keypath="desc">
      <template #strong4>
        <strong>4&nbsp;px</strong>
      </template>
      <template #strong1v>
        <strong>1v</strong>
      </template>
      <template #spacing>
        <code>--bj-spacing-*</code>
      </template>
    </i18n-t>
  </p>

  <DocsSection id="jetons-espacement" :title="t('section-jetons')">
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('thToken') }}</th>
          <th>{{ t('thRem') }}</th>
          <th>{{ t('thPx') }}</th>
          <th>{{ t('thGuide') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--bj-spacing-0v5</code></td>
          <td>0,125</td>
          <td>2</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-0v5); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-1v</code></td>
          <td>0,25</td>
          <td>4</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-1v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-1v5</code></td>
          <td>0,375</td>
          <td>6</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-1v5); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-2v</code></td>
          <td>0,5</td>
          <td>8</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-2v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-3v</code></td>
          <td>0,75</td>
          <td>12</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-3v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-4v</code></td>
          <td>1</td>
          <td>16</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-4v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-5v</code></td>
          <td>1,25</td>
          <td>20</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-5v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-6v</code></td>
          <td>1,5</td>
          <td>24</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-6v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-7v</code></td>
          <td>1,75</td>
          <td>28</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-7v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-8v</code></td>
          <td>2</td>
          <td>32</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-8v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-9v</code></td>
          <td>2,25</td>
          <td>36</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-9v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-10v</code></td>
          <td>2,5</td>
          <td>40</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-10v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-12v</code></td>
          <td>3</td>
          <td>48</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-12v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-14v</code></td>
          <td>3,5</td>
          <td>56</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-14v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-16v</code></td>
          <td>4</td>
          <td>64</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-16v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-20v</code></td>
          <td>5</td>
          <td>80</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-20v); height: 0.75rem"
            ></div>
          </td>
        </tr>
        <tr>
          <td><code>--bj-spacing-24v</code></td>
          <td>6</td>
          <td>96</td>
          <td>
            <div
              class="docs-spacing-block"
              style="width: var(--bj-spacing-24v); height: 0.75rem"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </DocsSection>

  <DocsSection id="classes-marges-padding" :title="t('section-classes')">
    <p>
      <i18n-t keypath="classes-p">
        <template #m>
          <code>bj-m-*</code>
        </template>
        <template #p>
          <code>bj-p-*</code>
        </template>
        <template #dirs>
          <code>t</code>, <code>r</code>, <code>b</code>, <code>l</code>,
          <code>x</code>, <code>y</code>
        </template>
        <template #dirsExplain>{{ t('dirsExplain') }}</template>
      </i18n-t>
    </p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>{{ t('thSuffix') }}</th>
          <th>{{ t('thMarginEx') }}</th>
          <th>{{ t('thPaddingEx') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>0</code></td>
          <td><code>bj-m-0</code></td>
          <td><code>bj-p-0</code></td>
        </tr>
        <tr>
          <td><code>0v5</code> … <code>16v</code></td>
          <td><code>bj-m-4v</code>, <code>bj-mt-2v</code></td>
          <td><code>bj-p-6v</code>, <code>bj-px-4v</code></td>
        </tr>
        <tr>
          <td>{{ t('rowCenter') }}</td>
          <td colspan="2"><code>bj-mx-auto</code></td>
        </tr>
      </tbody>
    </table>
    <DocsPreview>
      <div class="bj-bg-alt bj-p-4v" style="max-width: 20rem">
        <span class="bj-bg-default bj-p-2v bj-d-inline-block"
          >bj-p-2v</span
        >
      </div>
    </DocsPreview>
    <DocsCode :code="codeSpacing" />
  </DocsSection>
</template>
