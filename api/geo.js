// País do visitante pelo IP, usando o cabeçalho que a Vercel já envia
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "private, no-store");
  res.status(200).json({ country: req.headers["x-vercel-ip-country"] || null });
};
