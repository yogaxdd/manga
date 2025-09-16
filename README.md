# Jikan Manga Finder (with MangaDex Reader)

## Deploy
1. Import project ini ke Vercel.
2. `vercel` → `vercel --prod`.

## Dev local
- Jalankan server statis: `python -m http.server 8000` lalu buka http://localhost:8000
  (MangaDex via proxy `/api/mangadex` jadi tetap aman dari CORS).

## Struktur
- `index.html` — HTML + CSS + JS single-file.
- `api/mangadex.js` — serverless proxy untuk MangaDex (`/api/mangadex?u=<encoded-url>`).
- `vercel.json` — routing & builds.
