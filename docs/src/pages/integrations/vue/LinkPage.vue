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
      title: 'BjLink',
      desc: 'Composant Vue pour le lien DSBJ. Rend une balise lien avec les classes .bj-link et des props typées.',
      'section-usage': 'Utilisation',
      'section-sizes': 'Tailles',
      'section-icons': 'Icônes',
      'section-icons-sizes': 'Icônes × tailles',
      'section-reset': 'Reset',
      'section-external': 'Lien externe',
      'section-slot': 'Slot par défaut',
      'section-events': 'Événements',
      'section-props': 'Props',
      'preview-default': 'Consulter la démarche',
      'preview-small': 'Petit lien',
      'preview-large': 'Grand lien',
      'preview-icon-left': 'Retour',
      'preview-icon-right': 'Continuer',
      'preview-external': 'Site externe',
      'preview-reset': 'Lien discret (reset)',
      'slot-desc':
        'Le libellé et les icônes passent par le slot par défaut à l’intérieur du <code>&lt;a&gt;</code>.',
      'events-desc':
        'Les écouteurs (ex. <code>{\'@\'}click</code>) s’appliquent à l’ancre via l’héritage des attributs. Utilisez les attributs natifs <code>target</code>, <code>rel</code>, etc. sur <code>BjLink</code>.',
      'prop-size': 'Taille du texte : sm, md (défaut) ou lg.',
      'prop-iconPosition': 'Disposition d’icône dans le slot : none (défaut), left ou right.',
      'prop-reset': 'Applique bj-link--reset : couleur héritée, soulignement au survol.',
    },
    en: {
      title: 'BjLink',
      desc: 'Vue component for the DSBJ link. Renders an anchor with .bj-link classes and typed props.',
      'section-usage': 'Usage',
      'section-sizes': 'Sizes',
      'section-icons': 'Icons',
      'section-icons-sizes': 'Icons × sizes',
      'section-reset': 'Reset',
      'section-external': 'External link',
      'section-slot': 'Default slot',
      'section-events': 'Events',
      'section-props': 'Props',
      'preview-default': 'View the procedure',
      'preview-small': 'Small link',
      'preview-large': 'Large link',
      'preview-icon-left': 'Back',
      'preview-icon-right': 'Continue',
      'preview-external': 'External site',
      'preview-reset': 'Subtle link (reset)',
      'slot-desc':
        'Label and icons go in the default slot inside the <code>&lt;a&gt;</code>.',
      'events-desc':
        'Listeners (e.g. <code>{\'@\'}click</code>) attach to the anchor via attribute fallthrough. Use native <code>target</code>, <code>rel</code>, etc. on <code>BjLink</code>.',
      'prop-size': 'Text size: sm, md (default), or lg.',
      'prop-iconPosition': 'Icon layout in the slot: none (default), left, or right.',
      'prop-reset': 'Applies bj-link--reset: inherited color, underline on hover.',
    },
  },
})

const codeUsage = `<script setup>
import { BjLink } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjLink href="#">Consulter la démarche</BjLink>
  <BjLink href="#" size="sm">Petit lien</BjLink>
  <BjLink href="#" iconPosition="left">
    <i class="ri-arrow-left-line" aria-hidden="true" />
    Retour
  </BjLink>
</template>`

const codeSizes = `<BjLink href="#" size="sm">Petit lien</BjLink>
<BjLink href="#">Lien taille md (défaut)</BjLink>
<BjLink href="#" size="lg">Grand lien</BjLink>`

const codeIcons = `<BjLink href="#" iconPosition="left">
  <i class="ri-arrow-left-line" aria-hidden="true" />
  Retour
</BjLink>
<BjLink href="#" iconPosition="right">
  Continuer
  <i class="ri-arrow-right-line" aria-hidden="true" />
</BjLink>`

const codeIconsSizes = `<BjLink href="#" size="sm" iconPosition="left">
  <i class="ri-arrow-left-line" aria-hidden="true" />
  Retour sm
</BjLink>
<BjLink href="#" iconPosition="left">
  <i class="ri-arrow-left-line" aria-hidden="true" />
  Retour md
</BjLink>
<BjLink href="#" size="lg" iconPosition="left">
  <i class="ri-arrow-left-line" aria-hidden="true" />
  Retour lg
</BjLink>
<BjLink href="#" size="sm" iconPosition="right">
  Continuer sm
  <i class="ri-arrow-right-line" aria-hidden="true" />
</BjLink>
<BjLink href="#" iconPosition="right">
  Continuer md
  <i class="ri-arrow-right-line" aria-hidden="true" />
</BjLink>
<BjLink href="#" size="lg" iconPosition="right">
  Continuer lg
  <i class="ri-arrow-right-line" aria-hidden="true" />
</BjLink>`

const codeReset = `<BjLink href="#" reset>Lien reset sans icône</BjLink>
<BjLink href="#" reset iconPosition="left">
  <i class="ri-file-list-line" aria-hidden="true" />
  Reset + icône gauche
</BjLink>
<BjLink href="#" reset iconPosition="right">
  Reset + icône droite
  <i class="ri-external-link-line" aria-hidden="true" />
</BjLink>`

const codeExternal = `<BjLink href="https://example.org" target="_blank" rel="noopener noreferrer">
  Site externe
</BjLink>
<BjLink
  href="https://example.org/doc.pdf"
  target="_blank"
  rel="noopener noreferrer"
  iconPosition="right"
>
  PDF
  <i class="ri-external-link-line" aria-hidden="true" />
</BjLink>`

const codeEvents = `<BjLink href="/profil" @click.prevent="onNavigate">Mon profil</BjLink>`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'iconPosition', description: t('prop-iconPosition') },
  { name: 'reset', description: t('prop-reset') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-link-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link bj-link--sm" @click.prevent>{{ t('preview-small') }}</a>
      <a href="#" class="bj-link" @click.prevent>{{ t('preview-default') }}</a>
      <a href="#" class="bj-link bj-link--lg" @click.prevent>{{ t('preview-large') }}</a>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-icons" :title="t('section-icons')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('preview-icon-left') }}
      </a>
      <a href="#" class="bj-link bj-link--icon-right" @click.prevent>
        {{ t('preview-icon-right') }}
        <i class="ri-arrow-right-line" aria-hidden="true" />
      </a>
    </DocsPreview>
    <DocsCode :code="codeIcons" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-icons-sizes" :title="t('section-icons-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); align-items: flex-start;">
      <a href="#" class="bj-link bj-link--sm bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('preview-icon-left') }} sm
      </a>
      <a href="#" class="bj-link bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('preview-icon-left') }} md
      </a>
      <a href="#" class="bj-link bj-link--lg bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('preview-icon-left') }} lg
      </a>
      <a href="#" class="bj-link bj-link--sm bj-link--icon-right" @click.prevent>
        {{ t('preview-icon-right') }} sm
        <i class="ri-arrow-right-line" aria-hidden="true" />
      </a>
      <a href="#" class="bj-link bj-link--icon-right" @click.prevent>
        {{ t('preview-icon-right') }} md
        <i class="ri-arrow-right-line" aria-hidden="true" />
      </a>
      <a href="#" class="bj-link bj-link--lg bj-link--icon-right" @click.prevent>
        {{ t('preview-icon-right') }} lg
        <i class="ri-arrow-right-line" aria-hidden="true" />
      </a>
    </DocsPreview>
    <DocsCode :code="codeIconsSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-reset" :title="t('section-reset')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); align-items: flex-start;">
      <a href="#" class="bj-link bj-link--reset" @click.prevent>{{ t('preview-reset') }}</a>
      <a href="#" class="bj-link bj-link--reset bj-link--icon-left" @click.prevent>
        <i class="ri-file-list-line" aria-hidden="true" />
        Reset + icône gauche
      </a>
      <a href="#" class="bj-link bj-link--reset bj-link--icon-right" @click.prevent>
        Reset + icône droite
        <i class="ri-external-link-line" aria-hidden="true" />
      </a>
    </DocsPreview>
    <DocsCode :code="codeReset" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-external" :title="t('section-external')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a
        href="#"
        class="bj-link"
        target="_blank"
        rel="noopener noreferrer"
        @click.prevent
      >{{ t('preview-external') }}</a>
      <a
        href="#"
        class="bj-link bj-link--icon-right"
        target="_blank"
        rel="noopener noreferrer"
        @click.prevent
      >
        PDF
        <i class="ri-external-link-line" aria-hidden="true" />
      </a>
    </DocsPreview>
    <DocsCode :code="codeExternal" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-desc')" />
    <DocsPreview>
      <a href="#" class="bj-link bj-link--icon-left" @click.prevent>
        <i class="ri-information-line" aria-hidden="true" />
        {{ t('preview-default') }}
      </a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-link-events" :title="t('section-events')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('events-desc')" />
    <DocsCode :code="codeEvents" lang="html" />
  </DocsSection>

  <DocsSection id="vue-link-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
