export default async function handler(req, res) {
  // Simple allowlist proxy to avoid CORS issues on client
  try {
    const u = req.query.u;
    if (!u || Array.isArray(u)) {
      res.status(400).json({ error: "Missing ?u param" });
      return;
    }
    if (!u.startsWith("https://api.mangadex.org/")) {
      res.status(400).json({ error: "URL not allowed" });
      return;
    }
    const upstream = await fetch(u, {
      headers: { "Accept": "application/json" },
      // Forward method & body for safety (mostly GETs though)
      method: req.method,
    });
    const text = await upstream.text();
    // CORS headers (same origin on Vercel, but okay to include)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=300");
    res.status(upstream.status).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message || String(err) });
  }
}