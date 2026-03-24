<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const videoRatioSrcdoc =
  '<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><style>body{margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bj-bg-alt, #f6f6f6);font:600 1rem system-ui;color:#585858}</style></head><body>16:9</body></html>'

const codeImg =
  '<img class="bj-responsive-img" src="…" width="800" height="400" alt="…">'

const codeVid = `<div class="bj-responsive-vid">
  <iframe src="…" title="…"></iframe>
</div>`

const codeRatio = `<div class="bj-ratio bj-ratio-4x3">
  <img src="…" alt="…">
</div>`
</script>

<template>
  <h1 class="bj-h1">Médias responsives</h1>
  <p class="bj-text-md bj-text-alt">
    Images fluides, conteneurs vidéo 16:9 et blocs à ratio fixe pour
    photos ou cartes médiatiques.
  </p>

  <DocsSection id="image-responsive" title="Image responsive">
    <p>
      <code>bj-responsive-img</code> - <code>max-width: 100%</code>,
      hauteur automatique, affichage bloc.
    </p>
    <DocsPreview>
      <img
        class="bj-responsive-img"
        src="https://picsum.photos/seed/benin-docs/800/400"
        width="800"
        height="400"
        alt="Exemple d’image décorative"
      />
    </DocsPreview>
    <DocsCode :code="codeImg" />
  </DocsSection>

  <DocsSection id="video-responsive" title="Vidéo responsive">
    <p>
      <code>bj-responsive-vid</code> conserve un ratio 16:9 ; placez
      <code>iframe</code> ou <code>video</code> comme enfant direct.
    </p>
    <DocsPreview>
      <div class="bj-responsive-vid">
        <iframe
          title="Démonstration du ratio 16:9 (conteneur vide)"
          :srcdoc="videoRatioSrcdoc"
        ></iframe>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVid" />
  </DocsSection>

  <DocsSection id="ratios-aspect" title="Ratios d’aspect">
    <p>
      Conteneur <code>bj-ratio</code> + modificateur (<code
        >bj-ratio-16x9</code>, <code>bj-ratio-4x3</code>, <code
        >bj-ratio-1x1</code>, <code>bj-ratio-3x2</code>). L’enfant
      direct remplit la zone avec <code>object-fit: cover</code>.
    </p>
    <DocsPreview>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-md-6">
          <div
            class="bj-ratio bj-ratio-16x9"
            style="
              background: var(--bj-bg-alt);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <img
              src="https://picsum.photos/seed/ratio169/400/225"
              alt=""
            />
          </div>
          <p class="bj-text-xs bj-text-mention bj-mt-2v">16:9</p>
        </div>
        <div class="bj-col-12 bj-col-md-6">
          <div
            class="bj-ratio bj-ratio-1x1"
            style="
              max-width: 12rem;
              background: var(--bj-bg-alt);
              border: 1px solid var(--bj-border-subtle);
            "
          >
            <img
              src="https://picsum.photos/seed/ratio11/300/300"
              alt=""
            />
          </div>
          <p class="bj-text-xs bj-text-mention bj-mt-2v">1:1</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeRatio" />
  </DocsSection>
</template>
