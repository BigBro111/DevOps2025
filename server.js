const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ 
    message: "🚀 Docker + GitHub Actions + Self-Hosted Runner!",
    runner: "MY-PC",
    timestamp: new Date().toISOString(),
    status: "✅ Работает!"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Docker app запущен на http://localhost:${port}`);
});
