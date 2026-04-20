import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

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
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
