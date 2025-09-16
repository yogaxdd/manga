
export default async function handler(req, res) {
  const { path = "" } = req.query;
  try {
    const targetUrl = `https://api.mangadex.org/${path}`;
    const response = await fetch(targetUrl, { headers: { 'Content-Type': 'application/json' } });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
