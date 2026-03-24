<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<a href="#" class="bj-tile">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <span class="bj-tile__title">…</span>
  <span class="bj-tile__desc">…</span>
</a>`

const codeVariantes = `<a href="#" class="bj-tile bj-tile--horizontal">
  <span class="bj-tile__icon" aria-hidden="true">…</span>
  <div>
    <div class="bj-tile__title">…</div>
    <div class="bj-tile__desc">…</div>
  </div>
</a>
<img class="bj-tile__img" src="…" alt="">
<div class="bj-tiles">…</div>`

const propsRows = [
  { name: 'bj-tile', description: 'Tuile verticale centrée, bordure et survol.' },
  { name: 'bj-tile__icon', description: 'Grande icône Remix au-dessus du titre.' },
  { name: 'bj-tile__img', description: 'Image 4rem × 4rem sous le même rôle que l’icône.' },
  { name: 'bj-tile__title', description: 'Libellé principal.' },
  { name: 'bj-tile__desc', description: 'Description secondaire.' },
  { name: 'bj-tile--horizontal', description: 'Icône à gauche, texte aligné à gauche.' },
  { name: 'bj-tiles', description: 'Grille responsive de tuiles.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Tuile
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Tuile d’accès rapide centrée (icône ou image, titre, courte
    description). Souvent utilisée comme lien ; la grille
    <code class="bj-text-sm">bj-tiles</code> adapte les colonnes au
    viewport.
  </p>

  <DocsSection id="exemple-tile" title="Exemple">
    <DocsPreview>
      <a
        href="#"
        class="bj-tile"
        style="max-width: 14rem; margin: 0 auto"
      >
        <span class="bj-tile__icon" aria-hidden="true"
          ><i class="ri-file-list-3-line"></i
        ></span>
        <span class="bj-tile__title">Mes démarches</span>
        <span class="bj-tile__desc"
          >Suivre l’état de vos dossiers en cours.</span
        >
      </a>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-tile" title="Variantes">
    <DocsPreview>
      <div class="bj-tiles">
        <a href="#" class="bj-tile bj-tile--horizontal">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-customer-service-2-line"></i
          ></span>
          <div>
            <div class="bj-tile__title">Aide</div>
            <div class="bj-tile__desc">
              FAQ et contact du support.
            </div>
          </div>
        </a>
        <a href="#" class="bj-tile">
          <img
            class="bj-tile__img"
            src="https://picsum.photos/seed/tileicon/128/128"
            width="64"
            height="64"
            alt=""
          />
          <span class="bj-tile__title">Tuile avec image</span>
          <span class="bj-tile__desc"
            >Logo ou pictogramme personnalisé.</span
          >
        </a>
        <a href="#" class="bj-tile">
          <span class="bj-tile__icon" aria-hidden="true"
            ><i class="ri-calendar-event-line"></i
          ></span>
          <span class="bj-tile__title">Rendez-vous</span>
          <span class="bj-tile__desc"
            >Prendre un créneau en ligne.</span
          >
        </a>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-tile" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tile" title="Accessibilité">
    <DocsA11yNote>
      Sur un <code>&lt;a&gt;</code>, le titre et la description
      composent le contexte du lien : le libellé doit rester
      compréhensible hors grille. Marquez les icônes décoratives en
      <code>aria-hidden="true"</code>. Pour une image purement
      décorative dans la tuile, utilisez <code>alt=""</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
