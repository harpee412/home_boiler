# React Python Home Assistant Add-on Boilerplate

A working Home Assistant add-on boilerplate using:

- React
- Vite
- TypeScript
- FastAPI
- Docker
- Home Assistant Ingress

This project provides a clean starting point for building modern Home Assistant add-ons with a React frontend and Python backend.

---

# Features

- Home Assistant add-on compatible
- FastAPI backend
- React frontend
- TypeScript support
- Vite build system
- Dockerized
- Ingress-compatible UI
- API-ready structure
- Expandable architecture

---

# Project Structure

```txt
react_python_boilerplate/
├── backend/
│   ├── api/
│   │   └── routes.py
│   └── main.py
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── build.yaml
├── config.yaml
├── Dockerfile
├── requirements.txt
└── run.sh
```

---

# Requirements

- Home Assistant OS
- Home Assistant Supervisor
- GitHub repository
- Docker support

---

# Installation

## Add Repository to Home Assistant

Navigate to:

```txt
Settings → Add-ons → Add-on Store → Repositories
```

Add:

```txt
https://github.com/harpee412/home_boiler
```

---

# Install Add-on

Install:

```txt
React Python Boilerplate
```

Start the add-on.

Open the Web UI.

---

# Local Development

## Frontend

```bash
cd react_python_boilerplate/frontend

npm install

npm run dev
```

Frontend development server:

```txt
http://localhost:5173
```

---

## Backend

```bash
cd react_python_boilerplate

python -m venv .venv

source .venv/bin/activate
```

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8099
```

Backend API:

```txt
http://localhost:8099/api/hello
```

---

# API Example

Example endpoint:

```python
@app.get("/api/hello")
async def hello():
    return {
        "message": "Hello from backend!"
    }
```

---

# Frontend Example

Example API fetch:

```ts
const response = await fetch("./api/hello");

const data = await response.json();
```

---

# Build Process

The add-on Docker build will:

1. Install Python dependencies
2. Install frontend dependencies
3. Build React frontend
4. Serve frontend through FastAPI

---

# Home Assistant Ingress

Vite requires relative asset paths for ingress compatibility.

Configured in:

```ts
base: "./"
```

inside:

```txt
frontend/vite.config.ts
```

---

# Future Expansion Ideas

- Zustand state management
- TailwindCSS
- WebSockets
- MQTT
- Home Assistant Supervisor API
- Camera streaming
- Object detection
- Postgres
- Grafana dashboards

---

# Troubleshooting

## Blank White Screen

Usually caused by incorrect Vite asset paths.

Verify:

```ts
base: "./"
```

in `vite.config.ts`.

---

## Docker Build Fails

Verify:

- `Dockerfile` is not empty
- `build.yaml` exists
- `requirements.txt` is valid

---

## Frontend Dependency Issues

Delete:

```txt
node_modules/
package-lock.json
```

Then reinstall:

```bash
npm install
```

---

# License

MIT
