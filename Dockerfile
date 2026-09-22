FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build && pnpm prune --prod

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/main.js"]
