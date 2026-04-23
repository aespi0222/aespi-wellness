import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { readdirSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  app.get("/api/ping", (req, res) => {
    res.send("pong " + new Date().toISOString());
  });

  // API Route for Contact Form Proxy
  app.post("/api/contact", async (req, res) => {
    const { formId, ...data } = req.body;

    if (!formId) {
      return res.status(400).json({ error: "Form ID is required" });
    }

    try {
      console.log(`Proxying contact form to Formspree ID: ${formId}`);
      
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      
      if (response.ok) {
        res.status(200).json(responseData);
      } else {
        console.error("Formspree Proxy Error:", responseData);
        res.status(response.status).json(responseData);
      }
    } catch (error) {
      console.error("Server-side Contact Error:", error);
      res.status(500).json({ error: "Internal server error while sending message" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    console.log(`Checking for build artifacts in: ${distPath}`);
    
    // Check if dist exists and log its content for debugging
    if (existsSync(distPath)) {
      console.log(`Found dist folder. Contents: ${readdirSync(distPath).join(', ')}`);
    } else {
      console.error(`CRITICAL ERROR: dist folder not found at ${distPath}`);
    }

    app.use(express.static(distPath));
    
    // SPA Fallback: Serve index.html for any request that doesn't match a static file
    app.get('*', (req, res) => {
      // Avoid sending index.html for missing assets (js, css, images)
      if (req.url.includes('.') && !req.url.startsWith('/#')) {
        return res.status(404).send('Not found');
      }
      
      const indexPath = path.join(distPath, 'index.html');
      console.log(`Serving SPA fallback from: ${indexPath}`);
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error(`ERROR: index.html not found at ${indexPath}`);
          res.status(500).send(`Server Error: index.html not found. (Path: ${indexPath})`);
        }
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
