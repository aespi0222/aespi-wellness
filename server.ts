import express from "express";
import path from "path";
import { fileURLToPath } from "url";

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
        res.status(response.status).json(responseData);
      }
    } catch (error) {
      console.error("Server-side Contact Error:", error);
      res.status(500).json({ error: "Internal server error" });
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
    // Serve static files from the 'dist' directory
    const distPath = path.resolve(__dirname, 'dist');
    console.log(`Starting production server. Serving assets from: ${distPath}`);
    
    app.use(express.static(distPath));
    
    // SPA Fallback for all other routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Global Error Handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error("Critical Server Error:", err);
    res.status(500).send("A server error occurred.");
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
