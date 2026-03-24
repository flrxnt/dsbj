<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Badge',
      desc:
        'Étiquette compacte en capitales pour un statut, une catégorie ou une nouveauté. Peut inclure une icône via la classe utilitaire <code class="bj-text-sm">bj-icon</code>.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note':
        'Les badges portent souvent une information ; si l’icône est purement décorative, utilisez <code>aria-hidden="true"</code> sur l’icône. Pour un statut critique (erreur, obligation), associez le badge à un texte explicite à proximité ou à un attribut ARIA sur le bloc parent.',
      'prop-bj-badge': 'Style neutre : fond gris léger, texte par défaut.',
      'prop-bj-badge-info': 'Fond et texte sémantiques « information ».',
      'prop-bj-badge-success': 'Validation ou état positif.',
      'prop-bj-badge-warning': 'Mise en garde.',
      'prop-bj-badge-error': 'Erreur ou rejet.',
      'prop-bj-badge-new':
        'Mise en avant forte (fond vert action, texte blanc).',
      'prop-bj-badge-sm': 'Taille réduite pour zones denses.',
      'prop-bj-badge-no-icon': 'Masque les enfants bj-icon si présents.',
    },
    en: {
      title: 'Badge',
      desc:
        'Compact uppercase label for status, category or what’s new. Can include an icon via the <code class="bj-text-sm">bj-icon</code> utility.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note':
        'Badges often carry information; if the icon is decorative, use <code>aria-hidden="true"</code> on it. For critical status (error, required), pair the badge with nearby explicit text or an ARIA attribute on the parent block.',
      'prop-bj-badge': 'Neutral style: light gray background, default text.',
      'prop-bj-badge-info': 'Semantic “information” background and text.',
      'prop-bj-badge-success': 'Validation or positive state.',
      'prop-bj-badge-warning': 'Warning.',
      'prop-bj-badge-error': 'Error or rejection.',
      'prop-bj-badge-new': 'Strong emphasis (action green background, white text).',
      'prop-bj-badge-sm': 'Smaller size for dense UI.',
      'prop-bj-badge-no-icon': 'Hides bj-icon children when present.',
    },
  },
})

const codeExemple = `<span class="bj-badge">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm"></i> En vigueur
</span>`

const codeVariantes = `<span class="bj-badge bj-badge--info">…</span>
<span class="bj-badge bj-badge--success">…</span>
<span class="bj-badge bj-badge--new">Nouveau</span>
<span class="bj-badge bj-badge--sm">…</span>`

const propsRows = computed(() => [
  {
    name: 'bj-badge',
    description: t('prop-bj-badge'),
  },
  {
    name: 'bj-badge--info',
    description: t('prop-bj-badge-info'),
  },
  { name: 'bj-badge--success', description: t('prop-bj-badge-success') },
  { name: 'bj-badge--warning', description: t('prop-bj-badge-warning') },
  { name: 'bj-badge--error', description: t('prop-bj-badge-error') },
  {
    name: 'bj-badge--new',
    description: t('prop-bj-badge-new'),
  },
  { name: 'bj-badge--sm', description: t('prop-bj-badge-sm') },
  {
    name: 'bj-badge--no-icon',
    description: t('prop-bj-badge-no-icon'),
  },
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

  <DocsSection id="exemple-badge" :title="t('section-exemple')">
    <DocsPreview>
      <span class="bj-badge"
        ><i class="ri-price-tag-3-line bj-icon bj-icon--sm"></i> En
        vigueur</span
      >
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-badge" :title="t('section-variantes')">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <span class="bj-badge">Neutre</span>
      <span class="bj-badge bj-badge--info"
        ><i class="ri-information-line bj-icon bj-icon--sm"></i>
        Info</span
      >
      <span class="bj-badge bj-badge--success">Succès</span>
      <span class="bj-badge bj-badge--warning">Attention</span>
      <span class="bj-badge bj-badge--error">Erreur</span>
      <span class="bj-badge bj-badge--new">Nouveau</span>
      <span class="bj-badge bj-badge--sm">Très petit</span>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-badge" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-badge" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
