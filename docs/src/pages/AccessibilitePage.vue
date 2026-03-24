<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Déclaration d'accessibilité
  </h1>

  <div class="bj-content" style="max-width: 48rem">
    <p class="bj-text-lg" style="color: var(--bj-text-alt)">
      La République du Bénin s'engage à rendre ses sites internet accessibles
      conformément aux standards internationaux d'accessibilité numérique.
    </p>

    <h2>État de conformité</h2>
    <div
      class="bj-callout bj-callout--warning"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <div class="bj-callout__body">
        <p class="bj-callout__title">Partiellement conforme</p>
        <p class="bj-callout__text">
          Le site <strong>design.gouv.example</strong> est partiellement
          conforme aux critères WCAG 2.1 niveau AA.
        </p>
      </div>
    </div>

    <h2>Résultats des tests</h2>
    <p>
      Un audit d'accessibilité a été réalisé sur un échantillon de pages
      représentatives. Le taux de conformité global est en cours d'évaluation.
    </p>

    <h2>Contenus non accessibles</h2>
    <p>Les contenus listés ci-dessous ne sont pas encore accessibles :</p>
    <ul>
      <li>
        Certains contrastes de couleurs peuvent être insuffisants dans des cas
        spécifiques
      </li>
      <li>
        Quelques composants interactifs complexes peuvent manquer d'indications
        ARIA complémentaires
      </li>
    </ul>

    <h2>Technologies utilisées</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS3 (SCSS)</li>
      <li>JavaScript (TypeScript)</li>
      <li>Vue.js 3</li>
      <li>WAI-ARIA 1.2</li>
    </ul>

    <h2>Environnement de test</h2>
    <p>Les tests ont été réalisés avec les combinaisons suivantes :</p>
    <table class="docs-props">
      <thead>
        <tr>
          <th>Navigateur</th>
          <th>Technologie d'assistance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Firefox (dernière version)</td>
          <td>NVDA</td>
        </tr>
        <tr>
          <td>Chrome (dernière version)</td>
          <td>JAWS</td>
        </tr>
        <tr>
          <td>Safari (dernière version)</td>
          <td>VoiceOver</td>
        </tr>
      </tbody>
    </table>

    <h2>Droit à la compensation</h2>
    <p>
      Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un
      contenu ou une fonctionnalité du site, vous pouvez nous contacter pour
      obtenir une alternative accessible.
    </p>
    <ul>
      <li><strong>E-mail :</strong> accessibilite@gouv.bj</li>
      <li><strong>Adresse :</strong> ASSI, Cotonou, République du Bénin</li>
    </ul>

    <h2>Voie de recours</h2>
    <p>
      Si vous n'obtenez pas de réponse satisfaisante, vous pouvez adresser une
      réclamation à l'autorité compétente en matière d'accessibilité numérique
      de la République du Bénin.
    </p>
  </div>
</template>
