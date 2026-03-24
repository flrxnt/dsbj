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
      title: 'Interrupteur',
      desc: 'Paramètre binaire présenté comme interrupteur ; le script émet l’événement <code>bj:toggle</code>.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-toggle--border</code>, <code>bj-toggle--label-left</code>. Conteneur avec <code>data-bj-toggle</code>.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-toggle': 'Label conteneur.',
      'prop-toggle-input': 'Entrée stylée.',
      'prop-toggle-label': 'Texte.',
      'prop-toggle-hint': 'Aide.',
      'prop-data-toggle': 'Point d’ancrage JS.',
      'a11y-note':
        '<code>role="switch"</code> lorsque pertinent ; libellé explicite sur l’état ou l’action.',
    },
    en: {
      title: 'Toggle switch',
      desc: 'Binary setting shown as a switch; the script emits the <code>bj:toggle</code> event.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-toggle--border</code>, <code>bj-toggle--label-left</code>. Wrapper with <code>data-bj-toggle</code>.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-toggle': 'Container label.',
      'prop-toggle-input': 'Styled input.',
      'prop-toggle-label': 'Text.',
      'prop-toggle-hint': 'Hint.',
      'prop-data-toggle': 'JS hook attribute.',
      'a11y-note':
        '<code>role="switch"</code> when appropriate; explicit label for state or action.',
    },
  },
})

const codeExample = `<label class="bj-toggle" data-bj-toggle>
  <input class="bj-toggle__input" type="checkbox" role="switch">
  <span class="bj-toggle__label">…</span>
</label>`

const propsRows = computed(() => [
  { name: 'bj-toggle', description: t('prop-toggle') },
  { name: 'bj-toggle__input', description: t('prop-toggle-input') },
  { name: 'bj-toggle__label', description: t('prop-toggle-label') },
  { name: 'bj-toggle__hint', description: t('prop-toggle-hint') },
  { name: 'data-bj-toggle', description: t('prop-data-toggle') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
    v-html="t('desc')"
  />

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <label class="bj-toggle" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt1"
          checked
        />
        <span class="bj-toggle__label">Notifications push</span>
      </label>
      <label class="bj-toggle" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt2"
        />
        <span class="bj-toggle__label">Mode renforcé</span>
        <span class="bj-toggle__hint"
          >Contrastes accrus sur certaines pages.</span
        >
      </label>
      <label class="bj-toggle bj-toggle--border" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt3"
        />
        <span class="bj-toggle__label">Option encadrée</span>
      </label>
      <label class="bj-toggle bj-toggle--label-left" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt4"
        />
        <span class="bj-toggle__label">Libellé à gauche</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-variants-body')"
    />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
