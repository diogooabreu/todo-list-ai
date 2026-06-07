# TodoList

A full-stack task management application built as a study in **AI-assisted engineering** and **Spec-Driven Development (SDD)**.

In this project, the implementation is driven by specification documents — the [PRD](./docs/prd.md) defines *what* to build, and the [SDD](./docs/sdd.md) defines *how* to build it. An AI agent reads these documents and generates the code accordingly.

---

## Tech Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Backend    | NestJS, TypeScript, Prisma ORM |
| Database   | PostgreSQL                     |
| Frontend   | React                          |
| Container  | Docker Compose                 |

## Architecture

```
todo-list-ai/
├── apps/
│   ├── backend/      # NestJS API
│   └── frontend/     # React SPA
├── docs/
│   ├── prd.md        # Product Requirements Document
│   └── sdd.md        # Software Design Document
├── README.md
└── docker-compose.yml
```

## Features

- User registration and authentication (`POST /auth/register`, `POST /auth/login`)
- Full CRUD for tasks (`GET /tasks`, `POST /tasks`, `PATCH /tasks/:id`, `DELETE /tasks/:id`)
- Each task has a **title** (required), **description** (optional), and **completed** status
- Users can only view and manage their own tasks (data isolation)

## Entity Model

- **User:** `id`, `email`, `password`
- **Task:** `id`, `title`, `description`, `completed`, `userId` (foreign key)

---

> **Status:** Early development — documentation phase complete, implementation starting.
