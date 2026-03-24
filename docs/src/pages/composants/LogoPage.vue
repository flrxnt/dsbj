<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<div class="bj-logo">
  <p>République<br>du Bénin</p>
</div>`

const codeVariantes = `<div class="bj-logo bj-logo--lg">…</div>
<div class="bj-logo bj-logo--xl">…</div>
<a href="/" class="bj-logo__link">
  <div class="bj-logo">…</div>
</a>
<div class="bj-logo bj-logo--lg">
  <p>République<br>du Bénin</p>
  <span class="bj-logo__tagline">Portail des démarches</span>
</div>`

const propsRows = [
  {
    name: 'bj-logo',
    description:
      'Bloc principal : bande tricolore et texte en capitales.',
  },
  {
    name: 'bj-logo--lg',
    description: 'Taille intermédiaire (image et texte agrandis).',
  },
  {
    name: 'bj-logo--xl',
    description: 'Grande taille pour hero ou pages d’accueil.',
  },
  {
    name: 'bj-logo__link',
    description: 'Enveloppe lien conservant la mise en page du logo.',
  },
  {
    name: 'bj-logo__tagline',
    description:
      'Sous-ligne descriptive (non en capitales, couleur secondaire).',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">Logo</h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Signature visuelle « République du Bénin » : bande tricolore
    (vert, jaune, rouge) et libellé institutionnel. Utilisez les
    modificateurs de taille ou une sous-ligne de service pour les
    portails et applications.
  </p>

  <DocsSection id="exemple-logo" title="Exemple">
    <DocsPreview>
      <div class="bj-logo">
        <p>République<br />du Bénin</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-logo" title="Variantes">
    <p
      class="bj-text-md"
      style="
        color: var(--bj-text-alt);
        margin-bottom: var(--bj-spacing-4v);
      "
    >
      Tailles <code class="bj-text-sm">bj-logo--lg</code> et
      <code class="bj-text-sm">bj-logo--xl</code>, lien cliquable,
      sous-titre (tagline).
    </p>
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-6v);
        align-items: flex-start;
      "
    >
      <div class="bj-logo bj-logo--lg">
        <p>République<br />du Bénin</p>
      </div>
      <div class="bj-logo bj-logo--xl">
        <p>République<br />du Bénin</p>
      </div>
      <a href="#" class="bj-logo__link">
        <div class="bj-logo">
          <p>République<br />du Bénin</p>
        </div>
      </a>
      <div class="bj-logo bj-logo--lg">
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
      La barre tricolore en pseudo-élément évoque les couleurs
      nationales ; combinez-la toujours avec le texte officiel pour
      l’identification.
    </p>
  </DocsSection>

  <DocsSection id="classes-logo" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-logo" title="Accessibilité">
    <DocsA11yNote>
      Lorsque le logo est un lien vers l’accueil, renseignez un
      intitulé explicite (<code>aria-label</code> sur le lien ou
      texte visible adjacent). La bande tricolore est décorative ;
      le texte « République du Bénin » porte l’information. Vérifiez
      le contraste du tagline sur le fond choisi.
    </DocsA11yNote>
  </DocsSection>
</template>
