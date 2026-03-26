# Build context: project root (docker build -f mcp/Dockerfile .)
FROM oven/bun:1-alpine AS deps

WORKDIR /app/mcp
COPY mcp/package.json mcp/bun.lock* ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1-alpine

WORKDIR /app/mcp

COPY --from=deps /app/mcp/node_modules ./node_modules
COPY mcp/package.json ./
COPY mcp/src ./src
COPY docs/public/llms.txt docs/public/llms-full.txt /app/docs/public/

ENV NODE_ENV=production
ENV MCP_TRANSPORT=http
ENV PORT=3001

EXPOSE 3001

CMD ["bun", "run", "src/index.ts", "--http"]
