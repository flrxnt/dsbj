<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Médias responsives',
      desc:
        'Images fluides, conteneurs vidéo 16:9 et blocs à ratio fixe pour photos ou cartes médiatiques.',
      'section-img': 'Image responsive',
      'img-p':
        '{cls} - {mw}, hauteur automatique, affichage bloc.',
      'section-vid': 'Vidéo responsive',
      'vid-p':
        '{cls} conserve un ratio 16:9 ; placez {iframe} ou {video} comme enfant direct.',
      'section-ratio': 'Ratios d’aspect',
      'ratio-p':
        'Conteneur {ratio} + modificateur ({mods}). L’enfant direct remplit la zone avec {cover}.',
      'iframe-title': 'Démonstration du ratio 16:9 (conteneur vide)',
      'img-alt': 'Exemple d’image décorative',
    },
    en: {
      title: 'Responsive media',
      desc:
        'Fluid images, 16:9 video containers, and fixed-ratio blocks for photos or media cards.',
      'section-img': 'Responsive image',
      'img-p':
        '{cls} — {mw}, auto height, block display.',
      'section-vid': 'Responsive video',
      'vid-p':
        '{cls} keeps a 16:9 ratio; put {iframe} or {video} as the direct child.',
      'section-ratio': 'Aspect ratios',
      'ratio-p':
        '{ratio} container + modifier ({mods}). The direct child fills the area with {cover}.',
      'iframe-title': '16:9 ratio demo (empty container)',
      'img-alt': 'Decorative image example',
    },
  },
})

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
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt">
    {{ t('desc') }}
  </p>

  <DocsSection id="image-responsive" :title="t('section-img')">
    <p>
      <i18n-t keypath="img-p">
        <template #cls>
          <code>bj-responsive-img</code>
        </template>
        <template #mw>
          <code>max-width: 100%</code>
        </template>
      </i18n-t>
    </p>
    <DocsPreview>
      <img
        class="bj-responsive-img"
        src="https://picsum.photos/seed/benin-docs/800/400"
        width="800"
        height="400"
        :alt="t('img-alt')"
      />
    </DocsPreview>
    <DocsCode :code="codeImg" />
  </DocsSection>

  <DocsSection id="video-responsive" :title="t('section-vid')">
    <p>
      <i18n-t keypath="vid-p">
        <template #cls>
          <code>bj-responsive-vid</code>
        </template>
        <template #iframe>
          <code>iframe</code>
        </template>
        <template #video>
          <code>video</code>
        </template>
      </i18n-t>
    </p>
    <DocsPreview>
      <div class="bj-responsive-vid">
        <iframe
          :title="t('iframe-title')"
          :srcdoc="videoRatioSrcdoc"
        ></iframe>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVid" />
  </DocsSection>

  <DocsSection id="ratios-aspect" :title="t('section-ratio')">
    <p>
      <i18n-t keypath="ratio-p">
        <template #ratio>
          <code>bj-ratio</code>
        </template>
        <template #mods>
          <code>bj-ratio-16x9</code>, <code>bj-ratio-4x3</code>,
          <code>bj-ratio-1x1</code>, <code>bj-ratio-3x2</code>
        </template>
        <template #cover>
          <code>object-fit: cover</code>
        </template>
      </i18n-t>
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
