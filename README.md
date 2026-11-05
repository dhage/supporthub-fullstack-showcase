# SupportHub Fullstack Showcase

A modern full-stack support platform built as a portfolio and learning project.

## Project Goals

The purpose of this project is to implement modern full-stack development and DevSecOps practices in a realistic application.

Planned features include:

- Ticket Management
- User Management
- Role-Based Access Control
- Knowledge Base
- Authentication and Authorization
- REST API
- Automated Testing
- CI/CD Pipelines
- Security Scanning

## Tech Stack

### Frontend

- Angular
- TypeScript
- Tailwind CSS (planned)
- Angular Material (planned)

### Backend

- NestJS
- Prisma ORM

### Database

- PostgreSQL
- Docker Compose

### Quality & Testing

- ESLint
- Jest
- Playwright

### DevSecOps

- Docker
- GitHub Actions
- Dependabot
- CodeQL
- Trivy

## Workspace Structure

```text
web/                Angular frontend
web-e2e/            Playwright tests

api/                NestJS backend
api-e2e/            Backend integration tests

prisma/             Prisma schema & migrations

docker/             Docker infrastructure
docs/               Project documentation
infrastructure/     Deployment & infrastructure
```

## Architecture

```text
Angular
   ↓
NestJS
   ↓
Prisma ORM
   ↓
PostgreSQL
```

## Local Development

Start the frontend:

```bash
npx nx serve web
```

Start the backend:

```bash
npx nx serve api
```

Start PostgreSQL:

```bash
docker compose -f docker/docker-compose.yml up -d
```

Frontend:

```text
http://localhost:4200
```

Backend:

```text
http://localhost:3000/api
```

## Roadmap

### Phase 1 - Foundation

- [x] GitHub Repository
- [x] Nx Workspace
- [x] Angular Frontend
- [x] NestJS Backend
- [x] PostgreSQL via Docker
- [x] Prisma ORM
- [x] Initial Database Migration

### Phase 2 - Domain Model

- [ ] User Management
- [ ] Ticket Entity
- [ ] Comment Entity
- [ ] Shared Types Library

### Phase 3 - Authentication & Authorization

- [ ] Login
- [ ] JWT Authentication
- [ ] Role-Based Access Control

### Phase 4 - Support Features

- [ ] Ticket Management
- [ ] Comments
- [ ] Dashboard
- [ ] Knowledge Base

### Phase 5 - DevSecOps

- [ ] GitHub Actions
- [ ] Dependabot
- [ ] CodeQL
- [ ] Trivy
- [ ] SonarQube

## License

MIT License