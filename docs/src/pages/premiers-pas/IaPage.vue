<script setup lang="ts">
import { useI18n } from 'vue-i18n'
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

const codeMono =
  'font-family: var(--bj-font-mono); font-size: var(--bj-fs-sm);'

const { t } = useI18n({
  messages: {
    fr: {
      title: "Utiliser le DSBJ avec l'IA",
      desc:
        "Le DSBJ est conçu pour fonctionner avec les assistants IA et les modèles de langage (LLM). Cette page fournit les fichiers, règles et configurations nécessaires pour que l'IA génère du code conforme au Design Système du Bénin.",
      'section-llms': 'Fichier llms.txt',
      'section-rules': 'Règles pour éditeurs IA',
      'section-mcp': 'Serveur MCP',
      'section-prompts': 'Exemples de prompts',
      'llms-p1': `Le fichier <a href="/llms.txt" class="bj-link"><code style="${codeMono}">llms.txt</code></a> suit le standard <a href="https://llmstxt.org/" class="bj-link" target="_blank" rel="noopener">llmstxt.org</a>. Il fournit un résumé structuré du design système que les LLM peuvent consommer pour comprendre les composants, les classes CSS et les règles d'accessibilité du DSBJ.`,
      'alert-title': 'Deux versions disponibles',
      'alert-body': `<strong><a href="/llms.txt" class="bj-link">llms.txt</a></strong> : résumé concis avec liens vers chaque page de documentation.<br /><strong><a href="/llms-full.txt" class="bj-link">llms-full.txt</a></strong> : documentation complète avec markup d'exemple pour chaque composant (~40 Ko).`,
      'llms-copy-hint':
        "Copiez l'URL du fichier et collez-la dans votre assistant IA favori pour lui donner le contexte du DSBJ :",
      'llms-full-hint':
        'Ou pour la version complète avec tous les exemples de markup :',
      'rules-intro': `Ajoutez ces règles dans votre éditeur (Cursor, Windsurf, etc.) pour que l'IA respecte automatiquement les conventions du DSBJ. Créez un dossier <code style="${codeMono}">.cursor/rules/</code> à la racine de votre projet et copiez-y les fichiers suivants.`,
      'h3-general': 'Conventions générales',
      'h3-a11y': 'Accessibilité',
      'h3-seo': 'SEO',
      'file-label': 'Fichier :',
      'mcp-intro': `Le DSBJ fournit un serveur <a href="https://modelcontextprotocol.io/" class="bj-link" target="_blank" rel="noopener">MCP (Model Context Protocol)</a> qui permet aux assistants IA d'accéder directement à la documentation des composants, de générer du markup accessible et de vérifier la conformité de votre code.`,
      'h3-install': 'Installation',
      'h3-cursor': 'Configuration Cursor',
      'h3-tools': 'Outils disponibles (8)',
      'h3-resources': 'Ressources exposées',
      'resources-p1': `Le serveur MCP expose également des ressources que l'IA peut lire directement pour obtenir le contexte complet du DSBJ :`,
      'h3-built-prompts': 'Prompts pré-construits',
      'built-prompts-p1': `Le serveur fournit des prompts prêts à l'emploi que l'assistant IA peut utiliser directement :`,
      'th-tool': 'Outil',
      'th-desc': 'Description',
      'th-uri': 'URI',
      'th-prompt': 'Prompt',
      'th-params': 'Paramètres',
      'mcp-list-components':
        'Liste les 51 composants groupés par catégorie',
      'mcp-get-component':
        "Documentation complète d'un composant : classes CSS, ARIA, markup",
      'mcp-search-components':
        'Recherche par mot-clé dans les noms, descriptions et classes CSS',
      'mcp-list-foundations':
        'Liste les fondamentaux (couleurs, typo, grille, etc.)',
      'mcp-get-foundation':
        "Documentation d'un fondamental avec variables CSS et exemples",
      'mcp-get-tokens':
        'Retourne tous les design tokens (variables CSS) groupés par catégorie',
      'mcp-generate-markup':
        'Génère du HTML accessible pour un composant donné',
      'mcp-check-a11y':
        "Valide un snippet HTML contre les règles d'accessibilité DSBJ",
      'res-llms-txt':
        'Résumé structuré du design système (standard llmstxt.org)',
      'res-llms-full':
        'Documentation complète avec markup pour chaque composant',
      'res-component-slug': "Documentation d'un composant par son slug",
      'res-foundation-slug': "Documentation d'un fondamental par son slug",
      'prompt-page-gouv': "Génère une page d'accueil de service public",
      'prompt-form-accessible': 'Génère un formulaire accessible',
      'prompt-composant': "Génère l'intégration d'un composant spécifique",
      'prompts-intro': `Voici des prompts prêts à l'emploi pour générer du code DSBJ-conforme avec votre assistant IA. Copiez-les et adaptez-les à votre besoin.`,
      'prompt-h3-gouv': "Page d'accueil gouvernementale",
      'prompt-h3-form': 'Formulaire de contact',
      'prompt-h3-dashboard': 'Dashboard avec onglets',
      'prompt-h3-llm': 'Contexte LLM complet',
    },
    en: {
      title: 'Using the DSBJ with AI',
      desc:
        'The DSBJ is built to work with AI assistants and large language models (LLMs). This page provides the files, rules and configuration so AI can generate code that conforms to the Benin Design System.',
      'section-llms': 'llms.txt file',
      'section-rules': 'Rules for AI editors',
      'section-mcp': 'MCP server',
      'section-prompts': 'Example prompts',
      'llms-p1': `The <a href="/llms.txt" class="bj-link"><code style="${codeMono}">llms.txt</code></a> file follows the <a href="https://llmstxt.org/" class="bj-link" target="_blank" rel="noopener">llmstxt.org</a> standard. It offers a structured summary of the design system that LLMs can use to understand components, CSS classes and DSBJ accessibility rules.`,
      'alert-title': 'Two versions available',
      'alert-body': `<strong><a href="/llms.txt" class="bj-link">llms.txt</a></strong>: concise summary with links to each documentation page.<br /><strong><a href="/llms-full.txt" class="bj-link">llms-full.txt</a></strong>: full documentation with sample markup for every component (~40 KB).`,
      'llms-copy-hint':
        'Copy the file URL and paste it into your preferred AI assistant to give it DSBJ context:',
      'llms-full-hint':
        'Or use the full version with all markup examples:',
      'rules-intro': `Add these rules in your editor (Cursor, Windsurf, etc.) so AI follows DSBJ conventions automatically. Create a <code style="${codeMono}">.cursor/rules/</code> folder at your project root and copy the following files into it.`,
      'h3-general': 'General conventions',
      'h3-a11y': 'Accessibility',
      'h3-seo': 'SEO',
      'file-label': 'File:',
      'mcp-intro': `The DSBJ provides an <a href="https://modelcontextprotocol.io/" class="bj-link" target="_blank" rel="noopener">MCP (Model Context Protocol)</a> server so AI assistants can read component docs, generate accessible markup and check code compliance.`,
      'h3-install': 'Installation',
      'h3-cursor': 'Cursor configuration',
      'h3-tools': 'Available tools (8)',
      'h3-resources': 'Exposed resources',
      'resources-p1': `The MCP server also exposes resources the AI can read to get full DSBJ context:`,
      'h3-built-prompts': 'Built-in prompts',
      'built-prompts-p1': `The server provides ready-made prompts your AI assistant can use directly:`,
      'th-tool': 'Tool',
      'th-desc': 'Description',
      'th-uri': 'URI',
      'th-prompt': 'Prompt',
      'th-params': 'Parameters',
      'mcp-list-components':
        'Lists 40 components grouped by category',
      'mcp-get-component':
        'Full documentation for a component: CSS classes, ARIA, markup',
      'mcp-search-components':
        'Keyword search across names, descriptions and CSS classes',
      'mcp-list-foundations':
        'Lists foundations (colors, typography, grid, etc.)',
      'mcp-get-foundation':
        'Foundation documentation with CSS variables and examples',
      'mcp-get-tokens':
        'Returns all design tokens (CSS variables) grouped by category',
      'mcp-generate-markup':
        'Generates accessible HTML for a given component',
      'mcp-check-a11y':
        'Validates an HTML snippet against DSBJ accessibility rules',
      'res-llms-txt':
        'Structured design system summary (llmstxt.org standard)',
      'res-llms-full':
        'Full documentation with markup for each component',
      'res-component-slug': 'Component documentation by slug',
      'res-foundation-slug': 'Foundation documentation by slug',
      'prompt-page-gouv': 'Generates a public service home page',
      'prompt-form-accessible': 'Generates an accessible form',
      'prompt-composant': 'Generates integration for a specific component',
      'prompts-intro': `Ready-made prompts to generate DSBJ-compliant code with your AI assistant. Copy and adapt them to your needs.`,
      'prompt-h3-gouv': 'Government home page',
      'prompt-h3-form': 'Contact form',
      'prompt-h3-dashboard': 'Dashboard with tabs',
      'prompt-h3-llm': 'Full LLM context',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="llms-txt" :title="t('section-llms')">
    <p
      style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem"
      v-html="t('llms-p1')"
    />
    <div
      class="bj-alert bj-alert--info"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <div class="bj-alert__body">
        <p class="bj-alert__title">{{ t('alert-title') }}</p>
        <p class="bj-alert__text" v-html="t('alert-body')" />
      </div>
    </div>
    <p style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem">
      {{ t('llms-copy-hint') }}
    </p>
    <DocsCode :code="iaCodeLlmsUrl" />
    <p
      style="
        margin-top: var(--bj-spacing-3v);
        margin-bottom: var(--bj-spacing-3v);
        max-width: 40rem;
      "
    >
      {{ t('llms-full-hint') }}
    </p>
    <DocsCode :code="iaCodeLlmsFullUrl" />
  </DocsSection>

  <DocsSection id="regles-cursor" :title="t('section-rules')">
    <p
      style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem"
      v-html="t('rules-intro')"
    />

    <h3
      style="
        margin-top: var(--bj-spacing-6v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('h3-general') }}
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      {{ t('file-label') }}
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
      {{ t('h3-a11y') }}
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      {{ t('file-label') }}
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
      {{ t('h3-seo') }}
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      {{ t('file-label') }}
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

  <DocsSection id="mcp" :title="t('section-mcp')">
    <p
      style="margin-bottom: var(--bj-spacing-3v); max-width: 40rem"
      v-html="t('mcp-intro')"
    />
    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('h3-install') }}
    </h3>
    <DocsCode :code="iaCodeMcpInstall" />
    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('h3-cursor') }}
    </h3>
    <p
      style="
        margin-bottom: var(--bj-spacing-2v);
        max-width: 40rem;
        font-size: var(--bj-fs-sm);
        color: var(--bj-text-alt);
      "
    >
      {{ t('file-label') }}
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
      {{ t('h3-tools') }}
    </h3>
    <div
      class="bj-table-wrapper"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <table class="bj-table bj-table--bordered">
        <thead>
          <tr>
            <th scope="col">{{ t('th-tool') }}</th>
            <th scope="col">{{ t('th-desc') }}</th>
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
            <td>{{ t('mcp-list-components') }}</td>
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
            <td>{{ t('mcp-get-component') }}</td>
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
            <td>{{ t('mcp-search-components') }}</td>
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
            <td>{{ t('mcp-list-foundations') }}</td>
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
            <td>{{ t('mcp-get-foundation') }}</td>
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
            <td>{{ t('mcp-get-tokens') }}</td>
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
            <td>{{ t('mcp-generate-markup') }}</td>
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
            <td>{{ t('mcp-check-a11y') }}</td>
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
      {{ t('h3-resources') }}
    </h3>
    <p style="margin-bottom: var(--bj-spacing-2v); max-width: 40rem">
      {{ t('resources-p1') }}
    </p>
    <div
      class="bj-table-wrapper"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <table class="bj-table bj-table--bordered">
        <thead>
          <tr>
            <th scope="col">{{ t('th-uri') }}</th>
            <th scope="col">{{ t('th-desc') }}</th>
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
            <td>{{ t('res-llms-txt') }}</td>
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
            <td>{{ t('res-llms-full') }}</td>
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
            <td>{{ t('res-component-slug') }}</td>
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
            <td>{{ t('res-foundation-slug') }}</td>
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
      {{ t('h3-built-prompts') }}
    </h3>
    <p style="margin-bottom: var(--bj-spacing-2v); max-width: 40rem">
      {{ t('built-prompts-p1') }}
    </p>
    <div
      class="bj-table-wrapper"
      style="margin-bottom: var(--bj-spacing-4v)"
    >
      <table class="bj-table bj-table--bordered">
        <thead>
          <tr>
            <th scope="col">{{ t('th-prompt') }}</th>
            <th scope="col">{{ t('th-desc') }}</th>
            <th scope="col">{{ t('th-params') }}</th>
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
            <td>{{ t('prompt-page-gouv') }}</td>
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
            <td>{{ t('prompt-form-accessible') }}</td>
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
            <td>{{ t('prompt-composant') }}</td>
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

  <DocsSection id="prompts" :title="t('section-prompts')">
    <p style="margin-bottom: var(--bj-spacing-4v); max-width: 40rem">
      {{ t('prompts-intro') }}
    </p>

    <h3 style="margin-bottom: var(--bj-spacing-2v)">
      {{ t('prompt-h3-gouv') }}
    </h3>
    <DocsCode :code="iaPromptPageGouv" />

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('prompt-h3-form') }}
    </h3>
    <DocsCode :code="iaPromptForm" />

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('prompt-h3-dashboard') }}
    </h3>
    <DocsCode :code="iaPromptDashboard" />

    <h3
      style="
        margin-top: var(--bj-spacing-4v);
        margin-bottom: var(--bj-spacing-2v);
      "
    >
      {{ t('prompt-h3-llm') }}
    </h3>
    <DocsCode :code="iaPromptContexteLlm" />
  </DocsSection>
</template>
