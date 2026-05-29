# Go Sushi

One-page Go Sushi website with a React frontend and Django backend.

## Project Structure

- `backend/` - Django API with brand, contact, legal and menu data.
- `frontend/` - React + Vite single-page site.

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver 8000
```

API endpoint:

```text
http://127.0.0.1:8000/api/site/
```

## Frontend

Install Node.js first, then:

```bash
cd frontend
npm install
npm run dev
```

Frontend dev URL:

```text
http://127.0.0.1:5173
```

The Vite dev server proxies `/api` requests to Django on port `8000`.

## Deployment Note

The brief requires the company website not to be hosted on Tilda and not to use a third-level domain. Use a direct domain such as `gosushi.kz` or `goshushi.kz`, or a standard `www` subdomain if your registrar maps it to the main domain.
