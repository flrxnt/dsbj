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
      title: 'Tag',
      desc:
        'Mot-clé ou filtre affiché comme une pastille ; peut être statique, lien ou bouton. Variantes sémantiques et tag fermable pour les facettes de recherche.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note':
        'Le bouton de fermeture doit avoir un <code>aria-label</code> décrivant l’action et le filtre retiré. Pour une liste de tags, un rôle <code>list</code> / <code>listitem</code> ou une structure de groupe avec titre visible améliore la navigation au lecteur d’écran.',
      'prop-bj-tag': 'Tag neutre ; peut être span, a ou button.',
      'prop-bj-tag-action': 'Style lié à la couleur d’action.',
      'prop-bj-tag-semantic':
        'Variantes sémantiques (info, succès, avertissement, erreur).',
      'prop-bj-tag-sm': 'Tag compact.',
      'prop-bj-tag-dismiss':
        'Ajuste le padding pour accueillir le bouton de fermeture.',
      'prop-bj-tag-close': 'Bouton icône pour retirer le tag.',
      'prop-bj-tags': 'Conteneur flex wrap pour une liste de tags.',
    },
    en: {
      title: 'Tag',
      desc:
        'Keyword or filter shown as a pill; can be static, link or button. Semantic variants and dismissible tag for search facets.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note':
        'The close button needs an <code>aria-label</code> describing the action and the removed filter. For a tag list, <code>list</code> / <code>listitem</code> roles or a titled group improve screen reader navigation.',
      'prop-bj-tag': 'Neutral tag; may be span, a or button.',
      'prop-bj-tag-action': 'Style tied to the action color.',
      'prop-bj-tag-semantic':
        'Semantic variants (info, success, warning, error).',
      'prop-bj-tag-sm': 'Compact tag.',
      'prop-bj-tag-dismiss': 'Adjusts padding for the close button.',
      'prop-bj-tag-close': 'Icon button to remove the tag.',
      'prop-bj-tags': 'Flex wrap container for a list of tags.',
    },
  },
})

const codeExemple = `<span class="bj-tag">Administration</span>`

const codeVariantes = `<div class="bj-tags">
  <span class="bj-tag bj-tag--action">…</span>
</div>
<span class="bj-tag bj-tag--dismiss">
  Filtre
  <button type="button" class="bj-tag__close" aria-label="Retirer le filtre">…</button>
</span>`

const propsRows = computed(() => [
  {
    name: 'bj-tag',
    description: t('prop-bj-tag'),
  },
  { name: 'bj-tag--action', description: t('prop-bj-tag-action') },
  {
    name: 'bj-tag--info … bj-tag--error',
    description: t('prop-bj-tag-semantic'),
  },
  { name: 'bj-tag--sm', description: t('prop-bj-tag-sm') },
  {
    name: 'bj-tag--dismiss',
    description: t('prop-bj-tag-dismiss'),
  },
  { name: 'bj-tag__close', description: t('prop-bj-tag-close') },
  { name: 'bj-tags', description: t('prop-bj-tags') },
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
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-tag" :title="t('section-exemple')">
    <DocsPreview>
      <span class="bj-tag">Administration</span>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-tag" :title="t('section-variantes')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-6v);
      "
    >
      <div class="bj-tags" role="list">
        <span class="bj-tag" role="listitem">Défaut</span>
        <a href="#" class="bj-tag bj-tag--action" role="listitem"
          >Action (lien)</a
        >
        <span class="bj-tag bj-tag--info" role="listitem">Info</span>
        <span class="bj-tag bj-tag--success" role="listitem">Succès</span>
        <span class="bj-tag bj-tag--warning" role="listitem">Attention</span>
        <span class="bj-tag bj-tag--error" role="listitem">Erreur</span>
        <span class="bj-tag bj-tag--sm" role="listitem">Petit</span>
      </div>
      <div>
        <span class="bj-tag bj-tag--dismiss bj-tag--info">
          Filtre actif
          <button
            type="button"
            class="bj-tag__close"
            aria-label="Retirer le filtre Filtre actif"
          >
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-tag" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tag" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
