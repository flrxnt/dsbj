# @flrxnt/dsbj-mcp

Serveur [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) pour le **Design Système du Bénin (DSBJ)**. Il expose les composants, fondamentaux et règles d'accessibilité du DSBJ aux assistants IA (Cursor, Claude, etc.).

## Prérequis

- [Bun](https://bun.sh/) ≥ 1.0

## Installation

```bash
cd mcp
bun install
```

## Modes de transport

Le serveur MCP supporte deux modes de transport :

### Mode stdio (par défaut)

Communication par stdin/stdout, utilisé lorsqu'un client lance le serveur comme processus enfant (Cursor, Claude Desktop, etc.).

```bash
bun run start
```

#### Configuration dans Cursor

Ajoutez le fichier `.cursor/mcp.json` à la racine du projet :

```json
{
  "mcpServers": {
    "dsbj": {
      "command": "bun",
      "args": ["run", "mcp/src/index.ts"]
    }
  }
}
```

Redémarrez Cursor. Le serveur MCP sera automatiquement lancé.

### Mode serveur HTTP (Streamable HTTP)

Lance un serveur HTTP autonome qui expose le protocole MCP via le transport Streamable HTTP sur `/mcp`. Utile pour les déploiements distants, les architectures multi-clients, ou l'intégration avec des clients HTTP.

```bash
# Lancer le serveur HTTP (port 3001 par défaut)
bun run serve

# Lancer en mode watch
bun run serve:dev

# Personnaliser le port
PORT=8080 bun run serve
```

Le serveur est alors accessible à `http://localhost:3001/mcp`.

#### Configuration avec un client HTTP

Pour les clients MCP qui supportent le transport Streamable HTTP :

```json
{
  "mcpServers": {
    "dsbj": {
      "url": "http://localhost:3001/mcp"
    }
  }
}
```

#### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `PORT` | Port du serveur HTTP | `3001` |
| `MCP_TRANSPORT` | Forcer le transport (`http` ou `stdio`) | `stdio` |

## Outils disponibles (8)

| Outil | Description | Paramètres |
|-------|-------------|------------|
| `list-components` | Liste les 52 composants groupés par catégorie | - |
| `get-component` | Documentation complète d'un composant (classes, ARIA, markup) | `componentName` |
| `search-components` | Recherche par mot-clé dans les noms, descriptions et classes | `query` |
| `list-foundations` | Liste les fondamentaux (couleurs, typo, grille…) | - |
| `get-foundation` | Documentation d'un fondamental avec variables CSS | `foundationName` |
| `get-design-tokens` | Retourne tous les design tokens groupés par catégorie | - |
| `generate-markup` | Génère du HTML accessible pour un composant | `componentName`, `variant?`, `content?` |
| `check-accessibility` | Vérifie un snippet HTML contre les règles WCAG du DSBJ | `html` |

## Ressources exposées

| URI | Description |
|-----|-------------|
| `dsbj://docs/llms.txt` | Résumé structuré du design système (standard llmstxt.org) |
| `dsbj://docs/llms-full.txt` | Documentation complète avec markup pour chaque composant |
| `dsbj://components/{slug}` | Documentation d'un composant par son slug |
| `dsbj://foundations/{slug}` | Documentation d'un fondamental par son slug |

## Prompts pré-construits (3)

| Prompt | Description | Paramètres |
|--------|-------------|------------|
| `page-gouvernementale` | Génère une page d'accueil de service public | - |
| `formulaire-accessible` | Génère un formulaire accessible | `purpose` |
| `composant-dsbj` | Génère l'intégration d'un composant spécifique | `componentName` |

## Développement

```bash
# Lancer en mode watch (stdio)
bun run dev

# Lancer en mode watch (HTTP)
bun run serve:dev

# Tester manuellement via JSON-RPC (stdio)
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | bun run src/index.ts

# Tester le serveur HTTP
curl -X POST http://localhost:3001/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}}}'
```

## Structure

```
mcp/
├── src/
│   ├── index.ts              # Point d'entrée - outils, ressources, prompts
│   └── data/
│       ├── components.ts      # Catalogue des 52 composants
│       └── foundations.ts     # Catalogue des 10 fondamentaux
├── package.json
├── tsconfig.json
└── README.md
```

## Ajouter un composant

Ajoutez une entrée dans `src/data/components.ts` en respectant l'interface `ComponentData` :

```typescript
{
  name: 'MonComposant',
  slug: 'mon-composant',
  category: 'Base',  // Navigation | Base | Formulaires | Contenu | Interactifs | Réglementaire
  description: 'Description courte.',
  classes: ['bj-mon-composant', 'bj-mon-composant--variant'],
  aria: ['aria-label'],
  jsHooks: ['data-bj-mon-composant'],
  markup: `<div class="bj-mon-composant">…</div>`,
}
```

Le composant sera immédiatement disponible dans tous les outils MCP.
