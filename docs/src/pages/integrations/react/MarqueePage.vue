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
      desc: 'Bandeau défilant React : les enfants sont dupliqués dans la piste pour une boucle visuelle ; vitesse, sens, bordure et bouton pause sont configurables.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-speed': 'Vitesse d’animation : slow, default (défaut) ou fast.',
      'prop-reverse': 'Inverse le sens du défilement.',
      'prop-bordered': 'Ajoute des bordures haut et bas.',
      'prop-pausable': 'Affiche le bouton pause ou reprise (true par défaut).',
      'prop-children': 'Contenu défilant (dupliqué dans la piste pour la boucle).',
      'prop-className': 'Classe sur la racine .bj-marquee.',
      'section-speed': 'speed : slow, default, fast',
      'section-reverse': 'reverse : sens inverse',
      'section-bordered': 'bordered : bordures',
      'section-pausable': 'pausable : avec ou sans bouton pause',
      'section-cross': 'Combinaisons (speed + reverse + bordered)',
    },
    en: {
      title: 'BjMarquee',
      desc: 'React scrolling marquee: children are duplicated in the track for a seamless loop; speed, direction, borders, and pause control are configurable.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-speed': 'Animation speed: slow, default (default), or fast.',
      'prop-reverse': 'Reverses scroll direction.',
      'prop-bordered': 'Adds top and bottom borders.',
      'prop-pausable': 'Shows the pause or resume control (true by default).',
      'prop-children': 'Scrolling content (duplicated in the track for the loop).',
      'prop-className': 'Class on the .bj-marquee root.',
      'section-speed': 'speed: slow, default, and fast',
      'section-reverse': 'reverse: opposite direction',
      'section-bordered': 'bordered: top and bottom rules',
      'section-pausable': 'pausable: with or without pause control',
      'section-cross': 'Combinations (speed, reverse, bordered)',
    },
  },
})

const codeUsage = `import { BjMarquee } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjMarquee speed="default" reverse={false} bordered={false} pausable>
      <span className="bj-marquee__item">Annonce importante — </span>
      <span className="bj-marquee__item">Nouveauté sur le portail — </span>
    </BjMarquee>
  )
}`

const codeSpeed = `<BjMarquee speed="slow">…</BjMarquee>
<BjMarquee speed="default">…</BjMarquee>
<BjMarquee speed="fast">…</BjMarquee>`

const codeReverse = `<BjMarquee reverse>
  <span className="bj-marquee__item">Sens inverse — </span>
</BjMarquee>`

const codeBordered = `<BjMarquee bordered>
  <span className="bj-marquee__item">Bandeau encadré — </span>
</BjMarquee>`

const codeNoPause = `<BjMarquee pausable={false}>
  <span className="bj-marquee__item">Sans bouton pause — </span>
</BjMarquee>`

const codeCross = `import { BjMarquee } from '@flrxnt/dsbj/react'

export function MarqueeCombo() {
  return (
    <BjMarquee speed="fast" reverse bordered className="my-marquee">
      <span className="bj-marquee__item">Urgent — </span>
      <span className="bj-marquee__item">Info — </span>
    </BjMarquee>
  )
}`

const propsRows = computed(() => [
  { name: 'speed', description: t('prop-speed') },
  { name: 'reverse', description: t('prop-reverse') },
  { name: 'bordered', description: t('prop-bordered') },
  { name: 'pausable', description: t('prop-pausable') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-marquee-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-speed" :title="t('section-speed')">
    <DocsPreview>
      <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bj-marquee--slow</p>
      <div class="bj-marquee bj-marquee--slow bj-marquee--bordered" aria-live="off" style="margin-bottom: var(--bj-spacing-3v)">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">slow — </span>
          <span class="bj-marquee__item">slow — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Pause"><i class="ri-pause-line" aria-hidden="true"></i></button>
      </div>
      <p class="bj-text-xs" style="margin: 0 0 var(--bj-spacing-2v); color: var(--bj-text-alt)">bj-marquee--fast</p>
      <div class="bj-marquee bj-marquee--fast bj-marquee--bordered" aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">fast — </span>
          <span class="bj-marquee__item">fast — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Pause"><i class="ri-pause-line" aria-hidden="true"></i></button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSpeed" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-reverse" :title="t('section-reverse')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--reverse bj-marquee--bordered" aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">reverse — </span>
          <span class="bj-marquee__item">reverse — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Pause"><i class="ri-pause-line" aria-hidden="true"></i></button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeReverse" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-bordered" :title="t('section-bordered')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--bordered" aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">bordered — </span>
          <span class="bj-marquee__item">bordered — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Pause"><i class="ri-pause-line" aria-hidden="true"></i></button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeBordered" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-pausable" :title="t('section-pausable')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--bordered" aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Sans bouton (aperçu statique) — </span>
          <span class="bj-marquee__item">Sans bouton — </span>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoPause" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-cross" :title="t('section-cross')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--fast bj-marquee--reverse bj-marquee--bordered my-marquee-preview" aria-live="off">
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Urgent — </span>
          <span class="bj-marquee__item">Info — </span>
          <span class="bj-marquee__item">Urgent — </span>
          <span class="bj-marquee__item">Info — </span>
        </div>
        <button type="button" class="bj-marquee__pause" aria-label="Pause"><i class="ri-pause-line" aria-hidden="true"></i></button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-marquee-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-marquee bj-marquee--bordered" aria-live="off">
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

  <DocsSection id="react-marquee-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
