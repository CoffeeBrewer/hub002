# React + Express Full-Stack Starter

This workspace provides a minimal full-stack setup featuring a React frontend (Vite) and an Express backend. Use it as a starting point for prototypes or small applications.

## Structure
- `client/`: React app bootstrapped with Vite. Fetches data from the API and offers a simple task dashboard UI.
- `server/`: Express API server with example task endpoints.
- `package.json`: Root scripts to run both services together.

## Getting started
1. Install dependencies
   ```bash
   npm install
   npm run install:all
   ```

2. Run the dev servers (starts both API and Vite with a proxy to the API)
   ```bash
   npm run dev
   ```
   - API: http://localhost:5174/api/health
   - Vite dev server: http://localhost:5173/

3. Run frontend checks or build
   ```bash
   npm run lint
   npm run build
   ```

## API routes
- `GET /api/health` – health/status check.
- `GET /api/tasks` – list in-memory tasks.
- `POST /api/tasks` – create a task `{ "title": string }`.
- `PATCH /api/tasks/:id` – update task status `{ "status": "pending" | "in-progress" | "done" }`.

Feel free to extend the API and React components to suit your project.
