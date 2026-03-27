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
      title: 'Bandeau défilant',
      'desc-before':
        'Bandeau horizontal à défilement continu pour annonces, actualités ou alertes. Bouton de pause obligatoire pour l’accessibilité (WCAG 2.2.2). Respecte ',
      'desc-after': '.',
      'section-example': 'Exemple',
      'section-combos': 'Combinaisons vitesse, sens, bordures, pause',
      'combos-intro':
        'Combinez les modificateurs sur le même conteneur. La durée par défaut est pilotée par la variable CSS',
      'combos-intro-2':
        '(20s) ; les classes lente / rapide la redéfinissent.',
      'combo-fast-reverse-title': 'Rapide + sens inverse',
      'combo-slow-rev-border-title': 'Lent + inverse + bordures',
      'combo-slow-rev-border-intro':
        'Annonce institutionnelle lisible avec cadre haut/bas.',
      'combo-fast-border-title': 'Rapide + bordures',
      'combo-fast-border-intro':
        'Bandeau urgent encadré, toujours avec bouton de pause.',
      'combo-paused-title': 'État figé (pausable)',
      'combo-paused-intro':
        'Classe',
      'combo-paused-intro-2':
        'fige l’animation (posée par le script au clic ou pour une capture). Le bouton',
      'combo-paused-intro-3':
        'reste obligatoire pour la reprise.',
      'combo-slow-only-title': 'Lent (vitesse seule)',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'th-class-attr': 'Classe',
      'th-description': 'Description',
      'prop-root': 'Conteneur principal.',
      'prop-track': 'Piste animée.',
      'prop-item': 'Élément individuel.',
      'prop-pause': 'Bouton pause/reprise (obligatoire).',
      'prop-reverse': 'Défilement en sens inverse.',
      'prop-slow': 'Vitesse lente (35s).',
      'prop-fast': 'Vitesse rapide (10s).',
      'prop-bordered': 'Bordures haut/bas.',
      'prop-paused': 'État pause (classe posée par le script ou à la main pour figer le défilement).',
      'prop-data': 'Initialisation du script sur le conteneur.',
      'prop-duration-var':
        'Durée d’un cycle ; surchargée par bj-marquee--slow (35s) et bj-marquee--fast (10s).',
      'a11y-1': 'Le bouton de pause est',
      'a11y-mandatory': 'obligatoire',
      'a11y-2': '(WCAG 2.2.2). Le conteneur bascule entre',
      'a11y-3': '(en mouvement) et',
      'a11y-4': '(en pause). L’animation s’arrête automatiquement si',
      'a11y-5': 'est actif.',
    },
    en: {
      title: 'Marquee',
      'desc-before':
        'Horizontally scrolling strip for announcements, news, or alerts. A pause control is required for accessibility (WCAG 2.2.2). Honors ',
      'desc-after': '.',
      'section-example': 'Example',
      'section-combos': 'Speed, reverse, borders, pause combinations',
      'combos-intro':
        'Stack modifiers on the same root. Default timing uses the CSS variable',
      'combos-intro-2':
        '(20s); slow/fast classes override it.',
      'combo-fast-reverse-title': 'Fast + reverse',
      'combo-slow-rev-border-title': 'Slow + reverse + bordered',
      'combo-slow-rev-border-intro':
        'Institutional copy with top/bottom framing.',
      'combo-fast-border-title': 'Fast + bordered',
      'combo-fast-border-intro':
        'Urgent strip with borders; keep the pause control.',
      'combo-paused-title': 'Frozen state (pausable)',
      'combo-paused-intro': 'Class',
      'combo-paused-intro-2':
        'freezes the animation (set by the script on click or for screenshots). The',
      'combo-paused-intro-3':
        'button is still required for resume.',
      'combo-slow-only-title': 'Slow (speed only)',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'th-class-attr': 'Class',
      'th-description': 'Description',
      'prop-root': 'Main container.',
      'prop-track': 'Animated track.',
      'prop-item': 'Single item.',
      'prop-pause': 'Pause/resume button (required).',
      'prop-reverse': 'Reverse scroll direction.',
      'prop-slow': 'Slow speed (35s).',
      'prop-fast': 'Fast speed (10s).',
      'prop-bordered': 'Top and bottom borders.',
      'prop-paused': 'Paused state (added by the script or manually to freeze scrolling).',
      'prop-data': 'Hook for initializing the marquee script on the root.',
      'prop-duration-var':
        'One loop duration; overridden by bj-marquee--slow (35s) and bj-marquee--fast (10s).',
      'a11y-1': 'The pause button is',
      'a11y-mandatory': 'required',
      'a11y-2': '(WCAG 2.2.2). The container switches between',
      'a11y-3': '(while moving) and',
      'a11y-4': '(when paused). Animation stops automatically when',
      'a11y-5': 'is set.',
    },
  },
})

const codeMarquee = `<div class="bj-marquee bj-marquee--bordered" data-bj-marquee>
  <div class="bj-marquee__track">
    <span class="bj-marquee__item">Annonce 1</span>
    <span class="bj-marquee__item">Annonce 2</span>
  </div>
  <button class="bj-marquee__pause" type="button">
    <i class="ri-pause-line"></i>
  </button>
</div>`

const codeMarqueeFastReverse = `<div class="bj-marquee bj-marquee--fast bj-marquee--reverse" data-bj-marquee>…</div>`

const codeMarqueeSlowRevBorder = `<div class="bj-marquee bj-marquee--slow bj-marquee--reverse bj-marquee--bordered" data-bj-marquee>…</div>`

const codeMarqueeFastBorder = `<div class="bj-marquee bj-marquee--fast bj-marquee--bordered" data-bj-marquee>…</div>`

const codeMarqueePaused = `<div class="bj-marquee bj-marquee--paused" data-bj-marquee>
  <div class="bj-marquee__track">…</div>
  <button class="bj-marquee__pause" type="button" aria-label="Pause">…</button>
</div>`

const codeMarqueeSlow = `<div class="bj-marquee bj-marquee--slow" data-bj-marquee>…</div>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  { name: 'bj-marquee', description: t('prop-root') },
  { name: 'data-bj-marquee', description: t('prop-data') },
  { name: 'bj-marquee__track', description: t('prop-track') },
  { name: 'bj-marquee__item', description: t('prop-item') },
  {
    name: 'bj-marquee__pause',
    description: t('prop-pause'),
  },
  { name: 'bj-marquee--reverse', description: t('prop-reverse') },
  { name: 'bj-marquee--slow', description: t('prop-slow') },
  { name: 'bj-marquee--fast', description: t('prop-fast') },
  { name: 'bj-marquee--bordered', description: t('prop-bordered') },
  { name: 'bj-marquee--paused', description: t('prop-paused') },
  {
    name: '--bj-marquee-duration',
    description: t('prop-duration-var'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t('desc-before') }}<code>prefers-reduced-motion</code>{{ t('desc-after') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--bordered" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item"
            ><i class="ri-megaphone-line" aria-hidden="true"></i> Ouverture du
            guichet unique le 1er avril 2025</span
          >
          <span class="bj-marquee__item"
            ><i class="ri-calendar-event-line" aria-hidden="true"></i> Journée
            nationale de l’administration : 15 avril</span
          >
          <span class="bj-marquee__item"
            ><i class="ri-information-line" aria-hidden="true"></i> Nouveau
            portail e-services disponible</span
          >
        </div>
        <button class="bj-marquee__pause" type="button">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarquee" />
  </DocsSection>

  <DocsSection id="sec-combos" :title="t('section-combos')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('combos-intro') }}
      <code>--bj-marquee-duration</code>
      {{ t('combos-intro-2') }}
    </p>

    <p
      class="bj-text-sm"
      style="
        padding: var(--bj-spacing-2v) var(--bj-spacing-3v) 0;
        font-weight: var(--bj-fw-semibold);
      "
    >
      {{ t('combo-fast-reverse-title') }}
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--fast bj-marquee--reverse" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Sens inverse — démonstration</span>
          <span class="bj-marquee__item">Vitesse rapide (10s)</span>
        </div>
        <button class="bj-marquee__pause" type="button" aria-label="Pause">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarqueeFastReverse" />

    <p
      class="bj-text-sm"
      style="
        padding: var(--bj-spacing-2v) var(--bj-spacing-3v) 0;
        margin-top: var(--bj-spacing-4v);
        font-weight: var(--bj-fw-semibold);
      "
    >
      {{ t('combo-slow-rev-border-title') }}
    </p>
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('combo-slow-rev-border-intro') }}
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <div
        class="bj-marquee bj-marquee--slow bj-marquee--reverse bj-marquee--bordered"
        data-bj-marquee
      >
        <div class="bj-marquee__track">
          <span class="bj-marquee__item"
            ><i class="ri-government-line" aria-hidden="true"></i> Service public
            — horaires d’été</span
          >
          <span class="bj-marquee__item"
            ><i class="ri-mail-line" aria-hidden="true"></i> Contact
            citoyen</span
          >
        </div>
        <button class="bj-marquee__pause" type="button" aria-label="Pause">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarqueeSlowRevBorder" />

    <p
      class="bj-text-sm"
      style="
        padding: var(--bj-spacing-2v) var(--bj-spacing-3v) 0;
        margin-top: var(--bj-spacing-4v);
        font-weight: var(--bj-fw-semibold);
      "
    >
      {{ t('combo-fast-border-title') }}
    </p>
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('combo-fast-border-intro') }}
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--fast bj-marquee--bordered" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item"
            ><i class="ri-alarm-warning-line" aria-hidden="true"></i> Alerte
            technique — maintenance ce soir</span
          >
          <span class="bj-marquee__item">Suivez le statut sur le portail</span>
        </div>
        <button class="bj-marquee__pause" type="button" aria-label="Pause">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarqueeFastBorder" />

    <p
      class="bj-text-sm"
      style="
        padding: var(--bj-spacing-2v) var(--bj-spacing-3v) 0;
        margin-top: var(--bj-spacing-4v);
        font-weight: var(--bj-fw-semibold);
      "
    >
      {{ t('combo-paused-title') }}
    </p>
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('combo-paused-intro') }}
      <code>bj-marquee--paused</code>
      {{ t('combo-paused-intro-2') }}
      <code>bj-marquee__pause</code>
      {{ t('combo-paused-intro-3') }}
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--bordered bj-marquee--paused" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Texte figé pour accessibilité ou capture</span>
          <span class="bj-marquee__item">Deuxième segment (non animé ici)</span>
        </div>
        <button class="bj-marquee__pause" type="button" aria-label="Pause">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarqueePaused" />

    <p
      class="bj-text-sm"
      style="
        padding: var(--bj-spacing-2v) var(--bj-spacing-3v) 0;
        margin-top: var(--bj-spacing-4v);
        font-weight: var(--bj-fw-semibold);
      "
    >
      {{ t('combo-slow-only-title') }}
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--slow" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Cycle long (35s) pour lectures détaillées</span>
          <span class="bj-marquee__item">Texte d’exemple</span>
        </div>
        <button class="bj-marquee__pause" type="button" aria-label="Pause">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMarqueeSlow" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <strong>{{ t('a11y-mandatory') }}</strong>
      {{ t('a11y-2') }}
      <code>aria-live="off"</code>
      {{ t('a11y-3') }}
      <code>aria-live="polite"</code>
      {{ t('a11y-4') }}
      <code>prefers-reduced-motion: reduce</code>
      {{ t('a11y-5') }}
    </DocsA11yNote>
  </DocsSection>
</template>
