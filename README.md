# JM Reader (Jikan + MangaDex via Vercel Proxy)

Deploy:
1) Import ke Vercel / `vercel deploy`.
2) Akses domain → semua request MangaDex lewat `/api/mangadex?u=<encoded-url>` (bypass blokir ISP).

Catatan:
- Reader ambil 100 chapter pertama (asc). Ubah batas atau tambahkan pagination kalau perlu.
- Fallback bahasa EN → ID kalau EN kosong.
