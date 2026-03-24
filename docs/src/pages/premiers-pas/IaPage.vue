<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-3v)">
    Utiliser le DSBJ avec l'IA
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    Le DSBJ est conçu pour fonctionner avec les assistants IA et les
    modèles de langage (LLM). Cette page fournit les fichiers, règles et
    configurations nécessaires pour que l'IA génère du code conforme au
    Design Système du Bénin.
  </p>

  <DocsSection id="llms-txt" title="Fichier llms.txt">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Le fichier
      <a href="/llms.txt" class="bj-link"
        ><code
          style="
            font-family: var(--bj-font-mono);
            font-size: var(--bj-fs-sm);
          "
          >llms.txt</code
        ></a
      >
      suit le standard
      <a
        href="https://llmstxt.org/"
        class="bj-link"
        target="_blank"
        rel="noopener"
        >llmstxt.org</a
      >. Il fournit un résumé structuré du design système que les LLM
      peuvent consommer pour comprendre les composants, les classes CSS
      et les règles d'accessibilité du DSBJ.
    </p>
    <div
      class="bj-alert bj-alert--info"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <div class="bj-alert__body">
        <p class="bj-alert__title">Deux versions disponibles</p>
        <p class="bj-alert__text">
          <strong><a href="/llms.txt" class="bj-link">llms.txt</a></strong>
          : résumé concis avec liens vers chaque page de documentation.
          <br />
          <strong
            ><a href="/llms-full.txt" class="bj-link">llms-full.txt</a></strong
          >
          : documentation complète avec markup d'exemple pour chaque
          composant (~40 Ko).
        </p>
      </div>
    </div>
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Copiez l'URL du fichier et collez-la dans votre assistant IA
      favori pour lui donner le contexte du DSBJ :
    </p>
    <DocsCode :code="iaCodeLlmsUrl" />
    <p
      style="
        margin-top: var(--bj-spacing-3v);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 40rem;
      "
    >
      Ou pour la version complète avec tous les exemples de markup :
    </p>
    <DocsCode :code="iaCodeLlmsFullUrl" />
  </DocsSection>

  <DocsSection id="regles-cursor" title="Règles pour éditeurs IA">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Ajoutez ces règles dans votre éditeur (Cursor, Windsurf, etc.)
      pour que l'IA respecte automatiquement les conventions du DSBJ.
      Créez un dossier
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >.cursor/rules/</code
      >
      à la racine de votre projet et copiez-y les fichiers suivants.
    </p>

    <h3
      style="
        margin-top: var(--bj-spacing-6v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Conventions générales
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      Fichier :
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >.cursor/rules/dsbj-general.mdc</code
      >
    </p>
    <DocsCode :code="iaMdcGeneral" />

    <h3
      style="
        margin-top: var(--bj-spacing-6v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Accessibilité
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      Fichier :
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >.cursor/rules/dsbj-accessibility.mdc</code
      >
    </p>
    <DocsCode :code="iaMdcAccessibility" />

    <h3
      style="
        margin-top: var(--bj-spacing-6v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      SEO
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      Fichier :
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >.cursor/rules/dsbj-seo.mdc</code
      >
    </p>
    <DocsCode :code="iaMdcSeo" />
  </DocsSection>

  <DocsSection id="mcp" title="Serveur MCP">
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      Le DSBJ fournit un serveur
      <a
        href="https://modelcontextprotocol.io/"
        class="bj-link"
        target="_blank"
        rel="noopener"
        >MCP (Model Context Protocol)</a
      >
      qui permet aux assistants IA d'accéder directement à la
      documentation des composants, de générer du markup accessible et
      de vérifier la conformité de votre code.
    </p>
    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Installation
    </h3>
    <DocsCode :code="iaCodeMcpInstall" />
    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Configuration Cursor
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      Fichier :
      <code
        style="
          font-family: var(--bj-font-mono);
          font-size: var(--bj-fs-sm);
        "
        >.cursor/mcp.json</code
      >
    </p>
    <DocsCode :code="iaCodeMcpJson" />
    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Outils disponibles (8)
    </h3>
    <div
      class="bj-table-wrapper"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <table class="bj-table bj-table--bordered">
        <thead>
          <tr>
            <th scope="col">Outil</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >list-components</code
              >
            </td>
            <td>Liste les 40 composants groupés par catégorie</td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >get-component</code
              >
            </td>
            <td>
              Documentation complète d'un composant : classes CSS, ARIA,
              markup
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >search-components</code
              >
            </td>
            <td>
              Recherche par mot-clé dans les noms, descriptions et
              classes CSS
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >list-foundations</code
              >
            </td>
            <td>
              Liste les fondamentaux (couleurs, typo, grille, etc.)
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >get-foundation</code
              >
            </td>
            <td>
              Documentation d'un fondamental avec variables CSS et
              exemples
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >get-design-tokens</code
              >
            </td>
            <td>
              Retourne tous les design tokens (variables CSS) groupés
              par catégorie
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >generate-markup</code
              >
            </td>
            <td>Génère du HTML accessible pour un composant donné</td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >check-accessibility</code
              >
            </td>
            <td>
              Valide un snippet HTML contre les règles d'accessibilité
              DSBJ
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Ressources exposées
    </h3>
    <p style="margin-bottom: var(--bj-spacing-2v); max-width: 40rem">
      Le serveur MCP expose également des ressources que l'IA peut lire
      directement pour obtenir le contexte complet du DSBJ :
    </p>
    <div
      class="bj-table-wrapper"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <table class="bj-table bj-table--bordered">
        <thead>
          <tr>
            <th scope="col">URI</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >dsbj://docs/llms.txt</code
              >
            </td>
            <td>
              Résumé structuré du design système (standard llmstxt.org)
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >dsbj://docs/llms-full.txt</code
              >
            </td>
            <td>
              Documentation complète avec markup pour chaque composant
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >dsbj://components/{slug}</code
              >
            </td>
            <td>Documentation d'un composant par son slug</td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >dsbj://foundations/{slug}</code
              >
            </td>
            <td>Documentation d'un fondamental par son slug</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Prompts pré-construits
    </h3>
    <p style="margin-bottom: var(--bj-spacing-2v); max-width: 40rem">
      Le serveur fournit des prompts prêts à l'emploi que l'assistant IA
      peut utiliser directement :
    </p>
    <div
      class="bj-table-wrapper"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <table class="bj-table bj-table--bordered">
        <thead>
          <tr>
            <th scope="col">Prompt</th>
            <th scope="col">Description</th>
            <th scope="col">Paramètres</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >page-gouvernementale</code
              >
            </td>
            <td>Génère une page d'accueil de service public</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >formulaire-accessible</code
              >
            </td>
            <td>Génère un formulaire accessible</td>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >purpose</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >composant-dsbj</code
              >
            </td>
            <td>Génère l'intégration d'un composant spécifique</td>
            <td>
              <code
                style="
                  font-family: var(--bj-font-mono);
                  font-size: var(--bj-fs-sm);
                "
                >componentName</code
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DocsSection>

  <DocsSection id="prompts" title="Exemples de prompts">
    <p style="margin-bottom: var(--bj-spacing-4v); max-width: 40rem">
      Voici des prompts prêts à l'emploi pour générer du code
      DSBJ-conforme avec votre assistant IA. Copiez-les et adaptez-les à
      votre besoin.
    </p>

    <h3 style="margin-bottom: var(--bj-spacing-2v)">
      Page d'accueil gouvernementale
    </h3>
    <DocsCode :code="iaPromptPageGouv" />

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Formulaire de contact
    </h3>
    <DocsCode :code="iaPromptForm" />

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Dashboard avec onglets
    </h3>
    <DocsCode :code="iaPromptDashboard" />

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      Contexte LLM complet
    </h3>
    <DocsCode :code="iaPromptContexteLlm" />
  </DocsSection>
</template>

<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import {
  iaCodeLlmsFullUrl,
  iaCodeLlmsUrl,
  iaCodeMcpInstall,
  iaCodeMcpJson,
  iaMdcAccessibility,
  iaMdcGeneral,
  iaMdcSeo,
  iaPromptContexteLlm,
  iaPromptDashboard,
  iaPromptForm,
  iaPromptPageGouv,
} from './iaSnippets'
</script>
