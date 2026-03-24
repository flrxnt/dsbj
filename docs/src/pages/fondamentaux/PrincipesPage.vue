<script setup lang="ts">
import DocsSection from '@docs/components/DocsSection.vue'
</script>

<template>
  <h1 class="bj-h1">Principes de conception</h1>
  <p class="bj-text-md bj-text-alt">
    Les principes du DSBJ guident la conception des services
    numériques de l’État béninois.
  </p>

  <DocsSection id="accessibilite" title="Accessibilité">
    <p>
      Le DSBJ vise la conformité <strong>WCAG 2.1 niveau AA</strong> :
      contrastes suffisants entre texte et fond, cibles tactiles et
      focus visibles, structures sémantiques (titres, listes,
      landmarks).
    </p>
    <p>
      La <strong>navigation au clavier</strong> doit permettre
      d’utiliser tous les composants sans souris. Les états (hover,
      focus, actif, désactivé) sont distincts et annoncés
      visuellement.
    </p>
    <p>
      Les contenus dynamiques et les formulaires restent exploitables
      avec les <strong>lecteurs d’écran</strong> : textes alternatifs
      pertinents, associations étiquette/champ, messages d’erreur
      explicites, liens d’évitement vers le contenu principal.
    </p>
  </DocsSection>

  <DocsSection id="coherence" title="Cohérence">
    <p>
      Tous les composants et utilitaires utilisent le préfixe
      <code>bj-</code> pour éviter les collisions et clarifier
      l’origine du code.
    </p>
    <p>
      Les <strong>jetons CSS</strong> (<code>--bj-*</code>)
      centralisent couleurs, espacements, typographie et ombres :
      préférez-les aux valeurs brutes pour rester aligné avec les
      mises à jour du système.
    </p>
    <p>
      Les <strong>composants réutilisables</strong> (boutons, champs,
      en-tête, fil d’Ariane, etc.) assurent une expérience homogène
      d’un site ministériel à l’autre.
    </p>
  </DocsSection>

  <DocsSection id="sobriete" title="Sobriété">
    <p>
      L’interface reflète une <strong>identité étatique</strong> :
      hiérarchie claire, vocabulaire administratif compréhensible, pas
      d’effets superflus ni de surcharge visuelle.
    </p>
    <p>
      Chaque élément affiché doit avoir une utilité pour la tâche de
      l’usager ; le design privilégie la lisibilité et la confiance
      plutôt que l’originalité décorative.
    </p>
  </DocsSection>

  <DocsSection id="responsive" title="Responsive">
    <p>
      Le DSBJ adopte une approche <strong>mobile-first</strong> : les
      styles de base correspondent aux petits écrans, puis les media
      queries élargissent la mise en page.
    </p>
    <p>
      Quatre <strong>points de rupture</strong> structurent la grille
      et les utilitaires responsives :
    </p>
    <ul class="bj-text-md">
      <li><strong>SM</strong> - 576&nbsp;px</li>
      <li><strong>MD</strong> - 768&nbsp;px</li>
      <li><strong>LG</strong> - 992&nbsp;px</li>
      <li>
        <strong>XL</strong> - 1248&nbsp;px (largeur max. du conteneur
        principal)
      </li>
    </ul>
  </DocsSection>
</template>
