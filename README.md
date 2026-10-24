# Finova

**Finova** is a Kite-inspired stock market **paper-trading simulator**. It lets you practice trading strategies, track a virtual portfolio, and study the market — all without risking real capital.

> ⚠️ **Disclaimer** — Finova is a learning tool. It does **not** execute real trades or connect to real brokerage accounts.

---

## Technology Stack

| Layer        | Technology                                         |
| ------------ | -------------------------------------------------- |
| Frontend     | React 19, TypeScript, Vite, Tailwind CSS v4        |
| State        | Redux Toolkit, React-Redux                         |
| Charts       | Lightweight Charts (TradingView)                   |
| Backend      | Node.js, Express 5, TypeScript                     |
| Real-time    | Socket.IO                                          |
| Database     | PostgreSQL 16                                      |
| ORM          | Prisma 6                                           |
| Auth (planned) | bcrypt, JSON Web Tokens                          |
| Monorepo     | npm workspaces                                     |

---

## Folder Structure

```text
Finova/
├── client/                     # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/         # Shared UI components
│   │   ├── features/           # Feature-sliced modules
│   │   │   ├── watchlist/
│   │   │   ├── market/
│   │   │   ├── orders/
│   │   │   ├── portfolio/
│   │   │   └── journal/
│   │   ├── pages/              # Route-level pages
│   │   ├── services/           # API clients & sockets
│   │   ├── store/              # Redux store & slices
│   │   ├── types/              # Shared TypeScript types
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── modules/            # Domain modules
│   │   │   ├── auth/
│   │   │   ├── instruments/
│   │   │   ├── market-data/
│   │   │   ├── orders/
│   │   │   ├── execution/
│   │   │   ├── portfolio/
│   │   │   └── ledger/
│   │   ├── middleware/
│   │   ├── websocket/
│   │   ├── lib/                # Shared utilities
│   │   ├── app.ts              # Express application setup
│   │   └── server.ts           # HTTP server entry point
│   ├── package.json
│   └── tsconfig.json
│
├── prisma/
│   └── schema.prisma           # Database schema
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json                # Root — npm workspaces
└── README.md
```

---

## Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10
- **Docker** & **Docker Compose** (for PostgreSQL)
- **Git**

---

## Installation

```bash
# 1. Clone the repository
git clone <repo-url> Finova
cd Finova

# 2. Install all dependencies (root + client + server)
npm install
```

---

## Environment Setup

```bash
# Copy the example env and edit it with your values
cp .env.example .env
```

Update `DATABASE_URL`, `JWT_SECRET`, and the Postgres credentials as needed.

---

## Running the Project

### 1. Start PostgreSQL

```bash
docker compose up -d
```

Verify it's healthy:

```bash
docker compose ps
```

### 2. Generate the Prisma Client

```bash
npm run db:generate
```

### 3. Start Development Servers

```bash
# Start both client & server concurrently
npm run dev
```

Or run them individually:

```bash
npm run dev:client   # Vite dev server
npm run dev:server   # Express API (tsx watch)
```

---

## Local Development URLs

| Service          | URL                                   |
| ---------------- | ------------------------------------- |
| Frontend (Vite)  | http://localhost:5173                  |
| Backend (API)    | http://localhost:3001                  |
| Health Check     | http://localhost:3001/api/health      |

The Vite dev server proxies `/api` requests to the backend automatically.

---

## Available Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start client & server concurrently           |
| `npm run dev:client`| Start only the Vite frontend                 |
| `npm run dev:server`| Start only the Express backend               |
| `npm run build`     | Build frontend & compile backend             |
| `npm run typecheck` | TypeScript check across all workspaces       |
| `npm run db:generate`| Generate the Prisma client                  |
| `npm run db:migrate`| Run Prisma migrations                        |

---

## License

This project is for educational and personal use.