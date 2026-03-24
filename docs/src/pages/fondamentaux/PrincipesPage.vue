<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Principes de conception',
      desc:
        'Les principes du DSBJ guident la conception des services numériques de l’État béninois.',
      'section-a11y': 'Accessibilité',
      'section-coherence': 'Cohérence',
      'section-sobriete': 'Sobriété',
      'section-responsive': 'Responsive',
      'a11y-p1':
        'Le DSBJ vise la conformité <strong>WCAG 2.1 niveau AA</strong> : contrastes suffisants entre texte et fond, cibles tactiles et focus visibles, structures sémantiques (titres, listes, landmarks).',
      'a11y-p2':
        'La <strong>navigation au clavier</strong> doit permettre d’utiliser tous les composants sans souris. Les états (hover, focus, actif, désactivé) sont distincts et annoncés visuellement.',
      'a11y-p3':
        'Les contenus dynamiques et les formulaires restent exploitables avec les <strong>lecteurs d’écran</strong> : textes alternatifs pertinents, associations étiquette/champ, messages d’erreur explicites, liens d’évitement vers le contenu principal.',
      'coh-p1':
        'Tous les composants et utilitaires utilisent le préfixe <code>bj-</code> pour éviter les collisions et clarifier l’origine du code.',
      'coh-p2':
        'Les <strong>jetons CSS</strong> (<code>--bj-*</code>) centralisent couleurs, espacements, typographie et ombres : préférez-les aux valeurs brutes pour rester aligné avec les mises à jour du système.',
      'coh-p3':
        'Les <strong>composants réutilisables</strong> (boutons, champs, en-tête, fil d’Ariane, etc.) assurent une expérience homogène d’un site ministériel à l’autre.',
      'sob-p1':
        'L’interface reflète une <strong>identité étatique</strong> : hiérarchie claire, vocabulaire administratif compréhensible, pas d’effets superflus ni de surcharge visuelle.',
      'sob-p2':
        'Chaque élément affiché doit avoir une utilité pour la tâche de l’usager ; le design privilégie la lisibilité et la confiance plutôt que l’originalité décorative.',
      'resp-p1':
        'Le DSBJ adopte une approche <strong>mobile-first</strong> : les styles de base correspondent aux petits écrans, puis les media queries élargissent la mise en page.',
      'resp-p2':
        'Quatre <strong>points de rupture</strong> structurent la grille et les utilitaires responsives :',
      'resp-li-sm': '<strong>SM</strong> - 576&nbsp;px',
      'resp-li-md': '<strong>MD</strong> - 768&nbsp;px',
      'resp-li-lg': '<strong>LG</strong> - 992&nbsp;px',
      'resp-li-xl':
        '<strong>XL</strong> - 1248&nbsp;px (largeur max. du conteneur principal)',
    },
    en: {
      title: 'Design principles',
      desc:
        'DSBJ principles guide the design of digital services for the Beninese public sector.',
      'section-a11y': 'Accessibility',
      'section-coherence': 'Consistency',
      'section-sobriete': 'Restraint',
      'section-responsive': 'Responsive',
      'a11y-p1':
        'The DSBJ targets <strong>WCAG 2.1 Level AA</strong>: sufficient text/background contrast, visible touch targets and focus, semantic structure (headings, lists, landmarks).',
      'a11y-p2':
        '<strong>Keyboard navigation</strong> must let users operate every component without a mouse. States (hover, focus, active, disabled) are distinct and visibly clear.',
      'a11y-p3':
        'Dynamic content and forms must work with <strong>screen readers</strong>: meaningful alt text, label/control pairing, clear error messages, skip links to main content.',
      'coh-p1':
        'All components and utilities use the <code>bj-</code> prefix to avoid collisions and clarify origin.',
      'coh-p2':
        '<strong>CSS tokens</strong> (<code>--bj-*</code>) centralize color, spacing, typography and shadows: prefer them over raw values to stay aligned with system updates.',
      'coh-p3':
        '<strong>Reusable components</strong> (buttons, fields, header, breadcrumb, etc.) keep experience consistent across ministerial sites.',
      'sob-p1':
        'The UI reflects <strong>government identity</strong>: clear hierarchy, understandable administrative vocabulary, no gratuitous effects or visual clutter.',
      'sob-p2':
        'Everything on screen should support the user’s task; the design favors readability and trust over decorative novelty.',
      'resp-p1':
        'The DSBJ is <strong>mobile-first</strong>: base styles target small screens, then media queries expand the layout.',
      'resp-p2':
        'Four <strong>breakpoints</strong> structure the grid and responsive utilities:',
      'resp-li-sm': '<strong>SM</strong> - 576&nbsp;px',
      'resp-li-md': '<strong>MD</strong> - 768&nbsp;px',
      'resp-li-lg': '<strong>LG</strong> - 992&nbsp;px',
      'resp-li-xl':
        '<strong>XL</strong> - 1248&nbsp;px (max width of the main container)',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt">
    {{ t('desc') }}
  </p>

  <DocsSection id="accessibilite" :title="t('section-a11y')">
    <p v-html="t('a11y-p1')" />
    <p v-html="t('a11y-p2')" />
    <p v-html="t('a11y-p3')" />
  </DocsSection>

  <DocsSection id="coherence" :title="t('section-coherence')">
    <p v-html="t('coh-p1')" />
    <p v-html="t('coh-p2')" />
    <p v-html="t('coh-p3')" />
  </DocsSection>

  <DocsSection id="sobriete" :title="t('section-sobriete')">
    <p v-html="t('sob-p1')" />
    <p v-html="t('sob-p2')" />
  </DocsSection>

  <DocsSection id="responsive" :title="t('section-responsive')">
    <p v-html="t('resp-p1')" />
    <p v-html="t('resp-p2')" />
    <ul class="bj-text-md">
      <li v-html="t('resp-li-sm')" />
      <li v-html="t('resp-li-md')" />
      <li v-html="t('resp-li-lg')" />
      <li v-html="t('resp-li-xl')" />
    </ul>
  </DocsSection>
</template>
