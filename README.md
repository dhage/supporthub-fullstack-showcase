# SupportHub Fullstack Showcase

Eine moderne Fullstack-Supportplattform als Portfolio- und Lernprojekt.

## Projektziele

Dieses Projekt dient dazu, moderne Fullstack- und DevSecOps-Praktiken in einer realitätsnahen Anwendung umzusetzen.

Geplant sind unter anderem:

- Ticketverwaltung
- Benutzerverwaltung
- Rollen- und Rechtesystem
- Knowledge Base
- Authentifizierung und Autorisierung
- REST API
- Automated Testing
- CI/CD Pipelines
- Security Scans

## Tech Stack

### Frontend

- Angular
- TypeScript
- Tailwind CSS (geplant)
- Angular Material (geplant)

### Backend

- NestJS
- TypeScript
- Prisma ORM (geplant)

### Datenbank

- PostgreSQL (geplant)

### Qualität & Testing

- ESLint
- Jest
- Playwright

### DevSecOps

- Docker
- GitHub Actions
- Dependabot
- CodeQL
- Trivy

## Workspace Struktur

```text
web/        Angular Frontend
web-e2e/    Playwright Tests

api/        NestJS Backend
api-e2e/    Backend Integration Tests

docs/               Projektdokumentation
docker/             Docker-Konfiguration
infrastructure/     Infrastruktur und Deployment
```

## Lokale Entwicklung

Frontend starten:

```bash
npx nx serve web
```

Backend starten:

```bash
npx nx serve api
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

### Phase 1

- [x] GitHub Repository
- [x] Nx Workspace
- [x] Angular Frontend
- [x] NestJS Backend
- [ ] PostgreSQL
- [ ] Prisma

### Phase 2

- [ ] Benutzerverwaltung
- [ ] Authentifizierung
- [ ] Rollen & Rechte

### Phase 3

- [ ] Ticketsystem
- [ ] Kommentare
- [ ] Dashboard

### Phase 4

- [ ] CI/CD
- [ ] DevSecOps
- [ ] Security Scanning

## Lizenz

MIT License