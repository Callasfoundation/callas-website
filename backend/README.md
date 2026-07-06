# Callas Foundation Backend

FastAPI + SQLite backend for the Callas Foundation website. Provides:

- JWT authentication via **httpOnly cookies** (secure, no token in JS/localStorage)
- Full CRUD for `posts`, `events`, `team`, `gallery`, `messages`
- Public contact form endpoint (`POST /api/messages` is open; all other writes require admin)
- SQLite file DB (`callas.db`) — zero setup, easy to back up

## Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate       # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # then edit .env
uvicorn main:app --reload --port 8000
```

Backend runs at `http://localhost:8000`. Frontend expects `VITE_API_URL=http://localhost:8000` (default when unset).

On first startup the admin user is seeded from `.env`:

- **Email:** `erkahwanga@gmail.com`
- **Username:** `admin`
- **Password:** `callas2026`

Change the password immediately after first login (via `PUT /api/auth/password`).

## Endpoints

### Auth
- `POST /api/auth/login`  `{ email, password }` — sets `callas_session` cookie
- `POST /api/auth/logout` — clears cookie
- `GET  /api/auth/me` — current user
- `PUT  /api/auth/password`  `{ current, new }`

### Resources (all require admin except `POST /api/messages`)
- `GET/POST /api/{resource}`
- `GET/PUT/DELETE /api/{resource}/{id}`

Resources: `posts`, `events`, `team`, `gallery`, `messages`.

## Production notes

- Set `COOKIE_SECURE=true` and serve over HTTPS.
- Rotate `JWT_SECRET`.
- Put behind a reverse proxy (nginx / Caddy) at the same origin as the frontend so cookies work with `SameSite=Lax`.
- Back up `callas.db`.

## Auto docs

FastAPI ships OpenAPI docs at `http://localhost:8000/docs`.