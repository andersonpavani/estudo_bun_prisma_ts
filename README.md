# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Comandos de Prompt utilizados:

Criar Projeto
```bash
bun create elysia backend
```

Adicionar Lib Prisma em escopo de desenvolvimento
```bash
bun install -d prisma
```

Inicializar Prisma no projeto com PostgreSQL (Lembrar de ajustar a String de configuração em .env)
```bash
bunx prisma init --datasource-provider postgresql
```

Gerar Schema Prisma após models criados<br />
Obs.: Talvez não precise da flag --schema se definir o schema no package.json (... "prisma": {"schema": "./src/external/prisma/schema.prisma"} ...)
```bash
bunx prisma generate --schema=./src/external/prisma/schema.prisma
```

Persistir Schema criado na base de dados com o comando Migrate
```bash
bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma
```
