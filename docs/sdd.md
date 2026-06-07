# Software Design Document (SDD) - TodoList
**Project:** TodoList  
**Version:** 0.1  
**Status:** started  
**Main Stack:** NestJS, TypeScript, PostgreSQL, Prisma ORM.

---

## System Archicteture (monorepo)
The project uses a monorepo archicteture. The AI agent must be adhere to the following folder structure:
```
/todo-list-pro
├── /apps
│   ├── /backend (NestJS API)
│   └── /frontend (React)
├── /docs (PRD, SDD)
├── README.md
└── docker-compose.yml
```

### Technologies
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM

### Entities
- user
- task

### API routes
- `POST /auth/register` e `POST /auth/login`
- `GET /tasks`, `POST /tasks`, `PATCH /tasks/:id`, `DELETE /tasks/:id`

## Data modeling
```
erDiagram
    USER ||--o{ TASK : "possui"
    USER {
        string id
        string email
        string password
    }
    TASK {
        string id
        string title
        string description
        boolean completed
        string userId
    }
```
