import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';
import { COMPONENTS, CATEGORIES } from './data/components.js';
import { FOUNDATIONS } from './data/foundations.js';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = process.env.DOCS_DIR || resolve(__dirname, '../docs');

function readDocsFile(filename: string): string {
  try {
    return readFileSync(resolve(DOCS_DIR, filename), 'utf-8');
  } catch {
    return `Fichier ${filename} introuvable.`;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function findComponent(name: string) {
  const q = name.toLowerCase().trim();
  return COMPONENTS.find(c => c.slug === q || c.name.toLowerCase() === q);
}

function findFoundation(name: string) {
  const q = name.toLowerCase().trim();
  return FOUNDATIONS.find(fd => fd.slug === q || fd.name.toLowerCase() === q);
}

function formatComponentDoc(comp: typeof COMPONENTS[number]): string {
  return [
    `# ${comp.name}`,
    `**Catégorie** : ${comp.category}`,
    `**Description** : ${comp.description}`,
    '',
    '## Classes CSS',
    comp.classes.map(c => `- \`${c}\``).join('\n'),
    '',
    '## Attributs ARIA',
    comp.aria.length ? comp.aria.map(a => `- \`${a}\``).join('\n') : 'Aucun attribut ARIA spécifique.',
    '',
    '## Hooks JavaScript (data-bj-*)',
    comp.jsHooks.length ? comp.jsHooks.map(h => `- \`${h}\``).join('\n') : 'Aucun hook JS.',
    '',
    '## Markup d\'exemple',
    '```html',
    comp.markup,
    '```',
  ].join('\n');
}

function formatFoundationDoc(f: typeof FOUNDATIONS[number]): string {
  return [
    `# ${f.name}`,
    f.description,
    '',
    '## Variables CSS',
    f.variables.length ? f.variables.map(v => `- \`${v}\``).join('\n') : 'Aucune variable spécifique.',
    '',
    '## Classes CSS',
    f.classes.length ? f.classes.map(c => `- \`${c}\``).join('\n') : 'Aucune classe spécifique.',
    '',
    '## Utilisation',
    f.usage,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// MCP Server factory
// ---------------------------------------------------------------------------

function createMcpServer(): McpServer {
  const server = new McpServer({
    name: 'dsbj',
    version: '1.0.0',
    description: 'Serveur MCP du Design Système du Bénin - composants, fondamentaux, génération de markup et vérification d\'accessibilité.',
  });

  // -------------------------------------------------------------------------
  // Resources
  // -------------------------------------------------------------------------

  server.resource('llms-txt', 'dsbj://docs/llms.txt', async (uri) => ({
    contents: [{ uri: uri.href, mimeType: 'text/markdown', text: readDocsFile('llms.txt') }],
  }));

  server.resource('llms-full-txt', 'dsbj://docs/llms-full.txt', async (uri) => ({
    contents: [{ uri: uri.href, mimeType: 'text/markdown', text: readDocsFile('llms-full.txt') }],
  }));

  server.resource(
    'component-doc',
    new ResourceTemplate('dsbj://components/{slug}', { list: undefined }),
    async (uri, { slug }) => {
      const comp = COMPONENTS.find(c => c.slug === slug);
      if (!comp) return { contents: [{ uri: uri.href, text: `Composant "${slug}" non trouvé.` }] };
      const doc = formatComponentDoc(comp);
      return { contents: [{ uri: uri.href, mimeType: 'text/markdown', text: doc }] };
    },
  );

  server.resource(
    'foundation-doc',
    new ResourceTemplate('dsbj://foundations/{slug}', { list: undefined }),
    async (uri, { slug }) => {
      const f = FOUNDATIONS.find(fd => fd.slug === slug);
      if (!f) return { contents: [{ uri: uri.href, text: `Fondamental "${slug}" non trouvé.` }] };
      const doc = formatFoundationDoc(f);
      return { contents: [{ uri: uri.href, mimeType: 'text/markdown', text: doc }] };
    },
  );

  // -------------------------------------------------------------------------
  // Prompts
  // -------------------------------------------------------------------------

  server.prompt('page-gouvernementale', 'Génère une page d\'accueil de service public conforme DSBJ', {}, () => ({
    messages: [{
      role: 'user',
      content: {
        type: 'text',
        text: `En utilisant le Design Système du Bénin (DSBJ), génère une page d'accueil pour un portail de service public. La page doit inclure :
- Le header institutionnel (bj-header) avec logo République du Bénin et navigation
- Un hero avec titre et bouton d'action
- Une grille de 4 tuiles (bj-tile) pour les services principaux
- Un pied de page (bj-footer) avec mentions légales
Utilise les classes bj-* et les variables CSS --bj-*. Respecte WCAG 2.1 AA.`,
      },
    }],
  }));

  server.prompt(
    'formulaire-accessible',
    'Génère un formulaire accessible conforme DSBJ',
    { purpose: z.string().describe('Objectif du formulaire (ex: contact, inscription, demande)') },
    ({ purpose }) => ({
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Crée un formulaire "${purpose}" accessible avec le DSBJ :
- bj-input-group pour les champs texte avec label + hint
- bj-select-group pour les listes déroulantes
- bj-checkbox / bj-radio pour les choix
- bj-btn pour la soumission
- Messages d'erreur avec bj-message--error et aria-describedby
- Validation avec aria-invalid="true" sur les champs en erreur
- Chaque champ doit avoir un <label for="…"> associé`,
        },
      }],
    }),
  );

  server.prompt(
    'composant-dsbj',
    'Génère l\'intégration d\'un composant DSBJ spécifique',
    { componentName: z.string().describe('Nom du composant (ex: modal, accordion, card)') },
    ({ componentName }) => {
      const comp = COMPONENTS.find(c => c.slug === componentName.toLowerCase() || c.name.toLowerCase() === componentName.toLowerCase());
      const context = comp
        ? `\n\nVoici la documentation du composant :\n${formatComponentDoc(comp)}`
        : '';
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Génère l'intégration du composant "${componentName}" du DSBJ dans ma page.
Respecte les classes CSS bj-*, les attributs ARIA et les hooks data-bj-*.
Le HTML doit être accessible (WCAG 2.1 AA) et sémantique.${context}`,
          },
        }],
      };
    },
  );

  // -------------------------------------------------------------------------
  // Tools
  // -------------------------------------------------------------------------

  server.tool('list-components', 'Liste les 51 composants du DSBJ groupés par catégorie', {}, async () => {
    const grouped: Record<string, { name: string; slug: string; description: string }[]> = {};
    for (const cat of CATEGORIES) grouped[cat] = [];
    for (const c of COMPONENTS) {
      grouped[c.category]?.push({ name: c.name, slug: c.slug, description: c.description });
    }
    return { content: [{ type: 'text', text: JSON.stringify(grouped, null, 2) }] };
  });

  server.tool(
    'get-component',
    'Documentation complète d\'un composant DSBJ : classes CSS, ARIA, markup d\'exemple',
    { componentName: z.string().describe('Nom ou slug du composant (ex: "button", "Bouton", "modal")') },
    async ({ componentName }) => {
      const comp = findComponent(componentName);
      if (!comp) {
        const available = COMPONENTS.map(c => c.slug).join(', ');
        return { content: [{ type: 'text', text: `Composant "${componentName}" non trouvé. Disponibles : ${available}` }] };
      }
      return { content: [{ type: 'text', text: formatComponentDoc(comp) }] };
    },
  );

  server.tool(
    'search-components',
    'Recherche des composants DSBJ par mot-clé dans le nom, la description ou les classes CSS',
    { query: z.string().describe('Mot-clé de recherche (ex: "menu", "formulaire", "navigation")') },
    async ({ query }) => {
      const q = query.toLowerCase();
      const results = COMPONENTS.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.classes.some(cls => cls.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q),
      );
      if (results.length === 0) {
        return { content: [{ type: 'text', text: `Aucun composant trouvé pour "${query}". Essayez un autre terme.` }] };
      }
      const text = results.map(c =>
        `- **${c.name}** (\`${c.slug}\`) - ${c.category} - ${c.description}`,
      ).join('\n');
      return { content: [{ type: 'text', text: `## ${results.length} résultat(s) pour "${query}"\n\n${text}` }] };
    },
  );

  server.tool('list-foundations', 'Liste les fondamentaux du DSBJ (couleurs, typo, grille, etc.)', {}, async () => {
    const list = FOUNDATIONS.map(f => ({ name: f.name, slug: f.slug, description: f.description }));
    return { content: [{ type: 'text', text: JSON.stringify(list, null, 2) }] };
  });

  server.tool(
    'get-foundation',
    'Documentation d\'un fondamental DSBJ avec variables CSS et exemples',
    { foundationName: z.string().describe('Nom ou slug du fondamental (ex: "grille", "typographie", "couleurs-palette")') },
    async ({ foundationName }) => {
      const f = findFoundation(foundationName);
      if (!f) {
        const available = FOUNDATIONS.map(fd => fd.slug).join(', ');
        return { content: [{ type: 'text', text: `Fondamental "${foundationName}" non trouvé. Disponibles : ${available}` }] };
      }
      return { content: [{ type: 'text', text: formatFoundationDoc(f) }] };
    },
  );

  server.tool(
    'get-design-tokens',
    'Retourne tous les design tokens (variables CSS) du DSBJ groupés par catégorie',
    {},
    async () => {
      const tokens: Record<string, string[]> = {};
      for (const f of FOUNDATIONS) {
        if (f.variables.length > 0) {
          tokens[f.name] = f.variables;
        }
      }
      return { content: [{ type: 'text', text: JSON.stringify(tokens, null, 2) }] };
    },
  );

  server.tool(
    'generate-markup',
    'Génère du HTML accessible pour un composant DSBJ donné',
    {
      componentName: z.string().describe('Nom ou slug du composant'),
      variant: z.string().optional().describe('Variante optionnelle (ex: "secondary", "error", "horizontal")'),
      content: z.string().optional().describe('Texte personnalisé à injecter dans le composant'),
    },
    async ({ componentName, variant, content }) => {
      const comp = findComponent(componentName);
      if (!comp) {
        const available = COMPONENTS.map(c => `${c.slug} (${c.name})`).join(', ');
        return { content: [{ type: 'text', text: `Composant "${componentName}" non trouvé.\n\nDisponibles : ${available}` }] };
      }
      let markup = comp.markup;
      if (content) {
        markup = markup.replace(/Titre|Contenu|Description|Texte/g, content);
      }
      if (variant) {
        const baseClass = comp.classes[0];
        if (baseClass) {
          const variantClass = `${baseClass}--${variant}`;
          markup = markup.replace(baseClass, `${baseClass} ${variantClass}`);
        }
      }
      return { content: [{ type: 'text', text: `<!-- ${comp.name} (DSBJ) -->\n${markup}` }] };
    },
  );

  server.tool(
    'check-accessibility',
    'Vérifie un snippet HTML contre les règles d\'accessibilité du DSBJ',
    { html: z.string().describe('Le snippet HTML à vérifier') },
    async ({ html }) => {
      const issues: string[] = [];

      if (/<i\s+class="ri-[^"]*"(?!\s*aria-hidden)/g.test(html)) {
        issues.push('Icônes ri-* sans aria-hidden="true" détectées. Ajoutez aria-hidden="true" sur les icônes décoratives.');
      }
      if (/<img(?![^>]*alt=)/g.test(html)) {
        issues.push('Images sans attribut alt détectées. Toutes les images doivent avoir un alt (vide si décorative).');
      }
      if (/role="dialog"/.test(html) && !/aria-modal="true"/.test(html)) {
        issues.push('Dialog sans aria-modal="true". Les modales DSBJ nécessitent role="dialog" + aria-modal="true" + aria-labelledby.');
      }
      if (/role="dialog"/.test(html) && !/aria-labelledby/.test(html)) {
        issues.push('Dialog sans aria-labelledby. Liez le titre de la modale via aria-labelledby.');
      }
      if (/data-bj-accordion-btn/.test(html) && !/aria-expanded/.test(html)) {
        issues.push('Bouton accordéon sans aria-expanded. Ajoutez aria-expanded="false" et aria-controls="id-du-panel".');
      }
      if (/role="tablist"/.test(html) && !/role="tab"/.test(html)) {
        issues.push('tablist sans role="tab". Chaque onglet doit avoir role="tab" et les panneaux role="tabpanel".');
      }
      if (/<button[^>]*class="[^"]*bj-btn--icon[^"]*"(?![^>]*aria-label)/g.test(html)) {
        issues.push('Bouton icône sans aria-label. Les boutons sans texte visible nécessitent un aria-label.');
      }
      const h1Count = (html.match(/<h1[\s>]/g) || []).length;
      if (h1Count > 1) {
        issues.push(`${h1Count} balises <h1> détectées. Une seule <h1> par page.`);
      }
      if (/<input|<select|<textarea/.test(html)) {
        const inputs = html.match(/<(input|select|textarea)[^>]*id="([^"]+)"/g) || [];
        for (const input of inputs) {
          const idMatch = input.match(/id="([^"]+)"/);
          if (idMatch && !html.includes(`for="${idMatch[1]}"`)) {
            issues.push(`Champ "${idMatch[1]}" sans <label for="${idMatch[1]}">. Chaque champ de formulaire doit avoir un label associé.`);
          }
        }
      }
      if (/<a\s[^>]*(?!href)[^>]*>/g.test(html) && !/<a\s[^>]*href/g.test(html)) {
        issues.push('Liens <a> sans attribut href détectés.');
      }
      if (/<button(?![^>]*type=)/g.test(html)) {
        issues.push('Boutons sans attribut type détectés. Ajoutez type="button" ou type="submit".');
      }

      if (issues.length === 0) {
        return { content: [{ type: 'text', text: '✅ Aucun problème d\'accessibilité détecté dans ce snippet.' }] };
      }
      return {
        content: [{
          type: 'text',
          text: `## ⚠️ Problèmes d'accessibilité détectés (${issues.length})\n\n${issues.map((issue, i) => `${i + 1}. ${issue}`).join('\n')}`,
        }],
      };
    },
  );

  return server;
}

// ---------------------------------------------------------------------------
// HTTP Server (Streamable HTTP transport)
// ---------------------------------------------------------------------------

async function startHttpServer() {
  const port = parseInt(process.env.PORT || '3001', 10);
  const sessions = new Map<string, { transport: StreamableHTTPServerTransport; server: McpServer }>();

  function setCorsHeaders(res: ServerResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id');
    res.setHeader('Access-Control-Expose-Headers', 'mcp-session-id');
  }

  const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
    if (url.pathname !== '/mcp') {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found. Use /mcp endpoint.' }));
      return;
    }

    const sessionId = req.headers['mcp-session-id'] as string | undefined;

    if (sessionId && sessions.has(sessionId)) {
      const session = sessions.get(sessionId)!;
      await session.transport.handleRequest(req, res);
      return;
    }

    if (req.method === 'GET' || req.method === 'DELETE') {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No valid session. Send an initialize request first (POST).' }));
      return;
    }

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
    });

    const mcpServer = createMcpServer();

    transport.onclose = () => {
      const sid = transport.sessionId;
      if (sid) sessions.delete(sid);
    };

    await mcpServer.connect(transport);
    await transport.handleRequest(req, res);

    if (transport.sessionId) {
      sessions.set(transport.sessionId, { transport, server: mcpServer });
    }
  });

  httpServer.listen(port, () => {
    console.log(`MCP DSBJ HTTP server running at http://localhost:${port}/mcp`);
  });
}

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

async function main() {
  const isHttpMode = process.argv.includes('--http') || process.env.MCP_TRANSPORT === 'http';

  if (isHttpMode) {
    await startHttpServer();
  } else {
    const server = createMcpServer();
    const transport = new StdioServerTransport();
    await server.connect(transport);
  }
}

main().catch(console.error);
