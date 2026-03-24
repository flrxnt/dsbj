<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeMarquee = `<div class="bj-marquee bj-marquee--bordered" data-bj-marquee>
  <div class="bj-marquee__track">
    <span class="bj-marquee__item">Annonce 1</span>
    <span class="bj-marquee__item">Annonce 2</span>
  </div>
  <button class="bj-marquee__pause" type="button">
    <i class="ri-pause-line"></i>
  </button>
</div>`

const propsRows = [
  { name: 'bj-marquee', description: 'Conteneur principal.' },
  { name: 'bj-marquee__track', description: 'Piste animée.' },
  { name: 'bj-marquee__item', description: 'Élément individuel.' },
  {
    name: 'bj-marquee__pause',
    description: 'Bouton pause/reprise (obligatoire).',
  },
  { name: 'bj-marquee--reverse', description: 'Défilement en sens inverse.' },
  { name: 'bj-marquee--slow', description: 'Vitesse lente (35s).' },
  { name: 'bj-marquee--fast', description: 'Vitesse rapide (10s).' },
  { name: 'bj-marquee--bordered', description: 'Bordures haut/bas.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Bandeau défilant
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    Bandeau horizontal à défilement continu pour annonces, actualités ou
    alertes. Bouton de pause obligatoire pour l'accessibilité (WCAG 2.2.2).
    Respecte <code>prefers-reduced-motion</code>.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview style="padding: 0; overflow: hidden">
      <div class="bj-marquee bj-marquee--bordered" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item"
            ><i class="ri-megaphone-line" aria-hidden="true"></i> Ouverture du
            guichet unique le 1er avril 2025</span
          >
          <span class="bj-marquee__item"
            ><i class="ri-calendar-event-line" aria-hidden="true"></i> Journée
            nationale de l'administration : 15 avril</span
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

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" title="Accessibilité">
    <DocsA11yNote>
      Le bouton de pause est <strong>obligatoire</strong> (WCAG 2.2.2). Le
      conteneur bascule entre <code>aria-live="off"</code> (en mouvement) et
      <code>aria-live="polite"</code> (en pause). L'animation s'arrête
      automatiquement si <code>prefers-reduced-motion: reduce</code> est actif.
    </DocsA11yNote>
  </DocsSection>
</template>
