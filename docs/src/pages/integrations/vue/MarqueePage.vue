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
      title: 'BjMarquee',
      desc: 'Composant Vue pour le bandeau défilant DSBJ. Le slot par défaut est dupliqué en interne pour une boucle ; speed, reverse, bordered et pausable modulent le rendu et le comportement.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'section-speed': 'speed : slow, default, fast',
      'section-boolean': 'reverse, bordered, pausable',
      'section-combos': 'Exemples croisés',
      'section-slot': 'Slot par défaut',
      'section-matrix': 'Matrice speed × reverse × bordered × pausable',
      'section-emits': 'Événements Vue',
      'section-no-vmodel': 'v-model',
      'matrix-intro':
        'Toutes les booléennes sont indépendantes ; pausable=false masque le bouton pause (le défilement reste géré par CSS).',
      'no-emits-desc':
        'Pas d’emit : la pause est locale (classe bj-marquee--paused) ; pas d’événement vers le parent.',
      'no-vmodel-desc': 'Pas de v-model : vitesse et sens sont des props, pas un état bidirectionnel.',
      'prop-speed': 'Vitesse : slow, default (défaut), fast → bj-marquee--slow | --fast.',
      'prop-reverse': 'Sens inversé (bj-marquee--reverse).',
      'prop-bordered': 'Bordures haut/bas (bj-marquee--bordered).',
      'prop-pausable': 'Affiche le bouton pause/reprise (défaut true) ; false masque le contrôle.',
      'slot-default': 'Contenu défilant (répété deux fois dans le track pour la boucle).',
    },
    en: {
      title: 'BjMarquee',
      desc:
        'Vue component for the DSBJ scrolling marquee. The default slot is duplicated internally for looping; speed, reverse, bordered, and pausable tune layout and behavior.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'section-speed': 'speed: slow, default, fast',
      'section-boolean': 'reverse, bordered, pausable',
      'section-combos': 'Cross examples',
      'section-slot': 'Default slot',
      'section-matrix': 'speed × reverse × bordered × pausable matrix',
      'section-emits': 'Vue events',
      'section-no-vmodel': 'v-model',
      'matrix-intro':
        'Booleans are independent; pausable=false hides the pause button (scrolling still CSS-driven).',
      'no-emits-desc':
        'No emits: pause is local (bj-marquee--paused); nothing is emitted to the parent.',
      'no-vmodel-desc': 'No v-model: speed and direction are props, not two-way state.',
      'prop-speed': 'Speed: slow, default (default), fast → bj-marquee--slow | --fast.',
      'prop-reverse': 'Reversed direction (bj-marquee--reverse).',
      'prop-bordered': 'Top/bottom borders (bj-marquee--bordered).',
      'prop-pausable': 'Shows pause/resume control (default true); false hides the button.',
      'slot-default': 'Scrolling content (rendered twice in the track for seamless loop).',
    },
  },
})

const codeUsage = `<script setup>
import { BjMarquee } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjMarquee speed="default" :reverse="false" :bordered="false" :pausable="true">
    <span class="bj-marquee__item">Annonce importante — </span>
    <span class="bj-marquee__item">Nouveauté sur le portail — </span>
  </BjMarquee>
</template>`

const codeSpeed = `<BjMarquee speed="slow">…</BjMarquee>
<BjMarquee speed="default">…</BjMarquee>
<BjMarquee speed="fast">…</BjMarquee>`

const codeBools = `<!-- reverse : false (défaut) ou true -->
<BjMarquee :reverse="false">…</BjMarquee>
<BjMarquee :reverse="true">…</BjMarquee>

<!-- bordered -->
<BjMarquee :bordered="true">…</BjMarquee>

<!-- Sans bouton pause -->
<BjMarquee :pausable="false">…</BjMarquee>`

const codeCombos = `<!-- Vitesses × sens × bordure (extraits) -->
<BjMarquee speed="fast" :reverse="true" :bordered="true">
  <span class="bj-marquee__item">Flash inverse encadré — </span>
</BjMarquee>

<BjMarquee speed="slow" :bordered="true" :pausable="false">
  <span class="bj-marquee__item">Bandeau discret sans pause — </span>
</BjMarquee>`

const codeMatrix = `<!-- slow / default / fast × reverse × bordered × pausable -->
<BjMarquee speed="slow" :reverse="false" :bordered="false" :pausable="true">…</BjMarquee>
<BjMarquee speed="slow" :reverse="true" :bordered="true" :pausable="false">…</BjMarquee>
<BjMarquee speed="default" :reverse="false" :bordered="true" :pausable="true">…</BjMarquee>
<BjMarquee speed="fast" :reverse="true" :bordered="false" :pausable="true">…</BjMarquee>`

const propsRows = computed(() => [
  { name: 'speed', description: t('prop-speed') },
  { name: 'reverse', description: t('prop-reverse') },
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'pausable', description: t('prop-pausable') },
])

const slotRows = computed(() => [{ name: 'default', description: t('slot-default') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-marquee-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-marquee-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--bordered" data-bj-marquee aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Annonce importante — </span>
          <span class="bj-marquee__item">Nouveauté sur le portail — </span>
          <span class="bj-marquee__item">Annonce importante — </span>
          <span class="bj-marquee__item">Nouveauté sur le portail — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Mettre en pause le défilement">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-marquee-speed" :title="t('section-speed')">
    <DocsCode :code="codeSpeed" lang="html" />
  </DocsSection>

  <DocsSection id="vue-marquee-bool" :title="t('section-boolean')">
    <DocsCode :code="codeBools" lang="html" />
  </DocsSection>

  <DocsSection id="vue-marquee-combos" :title="t('section-combos')">
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-marquee-matrix" :title="t('section-matrix')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('matrix-intro') }}</p>
    <DocsCode :code="codeMatrix" lang="html" />
    <DocsPreview style="margin-top: var(--bj-spacing-3v)">
      <div class="bj-marquee bj-marquee--fast bj-marquee--reverse bj-marquee--bordered" data-bj-marquee aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Fast reverse — </span>
          <span class="bj-marquee__item">Fast reverse — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Pause"><i class="ri-pause-line" aria-hidden="true"></i></button>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-marquee-emits" :title="t('section-emits')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-emits-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-marquee-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-marquee-slot" :title="t('section-slot')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
  </DocsSection>

  <DocsSection id="vue-marquee-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
