import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === "production";

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: isProduction ? "production" : "development" });
  });

  // Config API for Runtime Variables
  app.get("/api/config", (req, res) => {
    res.json({
      bannerMessage: process.env.VITE_BANNER_MESSAGE || ""
    });
  });

  // Contact Form Proxy
  app.post("/api/contact", async (req, res) => {
    const { formId, ...data } = req.body;
    if (!formId) return res.status(400).json({ error: "Missing formId" });

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      res.status(response.status).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to send contact form" });
    }
  });

  // Serve Application
  if (!isProduction) {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.error("Vite failed to load:", err);
    }
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error("[AESPI Server] Fatal Startup Error:", err);
});
