# Project-Level Agents Config

## Overview

Monorepo for a full-stack task management app following **Spec-Driven Development (SDD)**. The AI agent reads the PRD (`docs/prd.md`) and SDD (`docs/sdd.md`) to generate code.

## Directory Structure

```
/
├── apps/
│   ├── backend/      # NestJS API (TypeScript)
│   └── frontend/     # React SPA (not yet implemented)
├── docs/
│   ├── prd.md        # Product Requirements Document
│   └── sdd.md        # Software Design Document
├── agents.md         # This file
└── README.md
```

## Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Backend    | NestJS 11, TypeScript, Prisma |
| Database   | PostgreSQL                     |
| Frontend   | React                          |

## Entity Model

```
User    (id, email, password)
  ├── Task      (id, title, description, completed, userId, categoryId)
  └── Category  (id, name, userId)
```

- `User` has many `Task`s and many `Category`s
- `Category` has many `Task`s
- Each user can only access their own records (data isolation by `userId`)

## API Routes

- `POST /auth/register`, `POST /auth/login`
- `GET|POST /tasks`, `PATCH|DELETE /tasks/:id`
- `GET|POST /categories`, `PATCH|DELETE /categories/:id`

Global prefix: `app/v1` (defined in `main.ts`)

## Architecture Decisions

- Monorepo with independent modules per domain (`users/`, `tasks/`, `categories/`)
- Data isolation via `userId` foreign key
- Relative imports only (no `baseUrl` / path aliases)
- Comments must not be added to generated code
- Services contain business logic; controllers handle HTTP concerns
- DTOs for input validation; entities/interfaces for data shape

## Git Workflow

- `main` — production
- `develop` — integration
- `feature/*` — feature branches
- `feat/*` — alternative feature branch prefix

## Commands

```bash
# Backend
npm run start:dev    # watch mode
npm run build        # compile
npm run test         # unit tests
npm run lint         # lint & fix
```
