FROM oven/bun:1-alpine AS deps

WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1-alpine

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY src ./src

ENV NODE_ENV=production
ENV MCP_TRANSPORT=http
ENV PORT=3001

EXPOSE 3001

CMD ["bun", "run", "src/index.ts", "--http"]
