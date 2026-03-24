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
      title: 'Logo',
      desc:
        'Signature visuelle « République du Bénin » : bande tricolore (vert, jaune, rouge) et libellé institutionnel. Utilisez les modificateurs de taille ou une sous-ligne de service pour les portails et applications.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-intro':
        'Tailles <code class="bj-text-sm">bj-logo--lg</code> et <code class="bj-text-sm">bj-logo--xl</code>, lien cliquable, sous-titre (tagline).',
      'variantes-footnote':
        'La barre tricolore en pseudo-élément évoque les couleurs nationales ; combinez-la toujours avec le texte officiel pour l’identification.',
      'prop-bj-logo':
        'Bloc principal : bande tricolore et texte en capitales.',
      'prop-bj-logo--lg':
        'Taille intermédiaire (image et texte agrandis).',
      'prop-bj-logo--xl':
        'Grande taille pour hero ou pages d’accueil.',
      'prop-bj-logo__link':
        'Enveloppe lien conservant la mise en page du logo.',
      'prop-bj-logo__img':
        'Image du sigle (armoiries) remplaçant la bande tricolore CSS.',
      'prop-bj-logo__tagline':
        'Sous-ligne descriptive (non en capitales, couleur secondaire).',
      'a11y-note':
        'Lorsque le logo est un lien vers l’accueil, renseignez un intitulé explicite (<code>aria-label</code> sur le lien ou texte visible adjacent). La bande tricolore est décorative ; le texte « République du Bénin » porte l’information. Vérifiez le contraste du tagline sur le fond choisi.',
    },
    en: {
      title: 'Logo',
      desc:
        '“Republic of Benin” visual signature: tricolor band (green, yellow, red) and institutional wording. Use size modifiers or a service tagline for portals and apps.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-intro':
        'Sizes <code class="bj-text-sm">bj-logo--lg</code> and <code class="bj-text-sm">bj-logo--xl</code>, clickable link, subtitle (tagline).',
      'variantes-footnote':
        'The tricolor bar as a pseudo-element evokes national colors; always pair it with the official text for identification.',
      'prop-bj-logo':
        'Main block: tricolor band and uppercase text.',
      'prop-bj-logo--lg':
        'Medium size (larger image and text).',
      'prop-bj-logo--xl':
        'Large size for heroes or home pages.',
      'prop-bj-logo__link':
        'Link wrapper preserving logo layout.',
      'prop-bj-logo__img':
        'Coat of arms image replacing the CSS tricolor band.',
      'prop-bj-logo__tagline':
        'Descriptive subline (not uppercase, secondary color).',
      'a11y-note':
        'When the logo links home, provide a clear accessible name (<code>aria-label</code> on the link or adjacent visible text). The tricolor band is decorative; “République du Bénin” carries the information. Check tagline contrast on the chosen background.',
    },
  },
})

const codeExemple = `<div class="bj-logo">
  <img src="/sigle.svg" alt="" class="bj-logo__img">
  <p>République<br>du Bénin</p>
</div>`

const codeVariantes = `<div class="bj-logo bj-logo--lg">
  <img src="/sigle.svg" alt="" class="bj-logo__img">
  <p>République<br>du Bénin</p>
</div>
<div class="bj-logo bj-logo--xl">
  <img src="/sigle.svg" alt="" class="bj-logo__img">
  <p>République<br>du Bénin</p>
</div>
<a href="/" class="bj-logo__link">
  <div class="bj-logo">
    <img src="/sigle.svg" alt="" class="bj-logo__img">
    <p>République<br>du Bénin</p>
  </div>
</a>
<div class="bj-logo bj-logo--lg">
  <img src="/sigle.svg" alt="" class="bj-logo__img">
  <p>République<br>du Bénin</p>
  <span class="bj-logo__tagline">Portail des démarches</span>
</div>`

const propsRows = computed(() => [
  {
    name: 'bj-logo',
    description: t('prop-bj-logo'),
  },
  {
    name: 'bj-logo--lg',
    description: t('prop-bj-logo--lg'),
  },
  {
    name: 'bj-logo--xl',
    description: t('prop-bj-logo--xl'),
  },
  {
    name: 'bj-logo__link',
    description: t('prop-bj-logo__link'),
  },
  {
    name: 'bj-logo__img',
    description: t('prop-bj-logo__img'),
  },
  {
    name: 'bj-logo__tagline',
    description: t('prop-bj-logo__tagline'),
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
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-logo" :title="t('section-exemple')">
    <DocsPreview>
      <div class="bj-logo">
        <img src="/sigle.svg" alt="" class="bj-logo__img">
        <p>République<br />du Bénin</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-logo" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-4v);
      "
      v-html="t('variantes-intro')"
    />
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-6v);
        align-items: flex-start;
      "
    >
      <div class="bj-logo bj-logo--lg">
        <img src="/sigle.svg" alt="" class="bj-logo__img">
        <p>République<br />du Bénin</p>
      </div>
      <div class="bj-logo bj-logo--xl">
        <img src="/sigle.svg" alt="" class="bj-logo__img">
        <p>République<br />du Bénin</p>
      </div>
      <a href="#" class="bj-logo__link">
        <div class="bj-logo">
          <img src="/sigle.svg" alt="" class="bj-logo__img">
          <p>République<br />du Bénin</p>
        </div>
      </a>
      <div class="bj-logo bj-logo--lg">
        <img src="/sigle.svg" alt="" class="bj-logo__img">
        <p>République<br />du Bénin</p>
        <span class="bj-logo__tagline">Portail des démarches</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
    <p
      class="bj-text-sm"
      style="
        color: var(--bj-text-mention);
        margin-top: var(--bj-spacing-3v);
      "
    >
      {{ t('variantes-footnote') }}
    </p>
  </DocsSection>

  <DocsSection id="classes-logo" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-logo" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
