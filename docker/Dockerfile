FROM node:22.14.0-alpine AS base

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_PATH=/app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@10.5.2 --activate
RUN pnpm config set store-dir $PNPM_HOME

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch
RUN pnpm install --frozen-lockfile

COPY .. .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
