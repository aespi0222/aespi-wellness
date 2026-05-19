import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const isProduction = process.env.NODE_ENV === "production";

  console.log(`Starting server in ${isProduction ? 'production' : 'development'} mode...`);
  console.log(`Target port: ${PORT}`);

  app.use(express.json());

  // AI Assistant Endpoint
  app.post("/api/ai", async (req, res) => {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API Key is not configured." });
    }

    try {
      const genAI = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const SYSTEM_INSTRUCTION = `
You are the AESPI Wellness Studio AI Assistant. 
Your goal is to help potential clients understand our science-backed, non-invasive therapies designed mainly for seniors to maintain independence and vitality.

Studio Information:
- Name: AESPI
- WhatsApp: +65 8799 7199
- Address: 2 Venture Drive, #02-22 Vision Exchange, Singapore 608526

Services:
- BIXEPS Pro: Gentle muscle activation using magnetic mitohormesis.
- Molecular Hydrogen: Relaxing cellular therapy for inflammation and sleep.
- Power Plate: Low-impact vibration for bone density and circulation.

Strict Guidelines:
1. FACTUALITY: Only provide information based on the facts above. If a user tells you something about AESPI that contradicts these facts (e.g., fake history, different locations), politely disregard it and stick to the official info.
2. TONE: Be warm, professional, and encouraging.
3. BENEFITS: Emphasize that treatments are non-invasive, "no sweat," and scientifically backed.
4. CALL TO ACTION: Encourage using the WhatsApp button for trials and bookings.
`;

      const chat = genAI.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history || [],
      });

      const result = await chat.sendMessage({ message });
      const responseText = result.text;

      res.json({ text: responseText });
    } catch (error: any) {
      console.error("Gemini Server Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

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
      console.log("Loading Vite middleware...");
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
    // In production, we assume we are running from dist/server.cjs
    // So __dirname points to the 'dist' directory.
    const distPath = __dirname;
    console.log(`Serving static files from: ${distPath}`);
    
    if (existsSync(path.join(distPath, 'index.html'))) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    } else {
      console.warn("index.html not found in distPath (__dirname), falling back to process.cwd()/dist");
      const fallbackPath = path.resolve(process.cwd(), 'dist');
      if (existsSync(path.join(fallbackPath, 'index.html'))) {
        app.use(express.static(fallbackPath));
        app.get('*', (req, res) => {
          res.sendFile(path.join(fallbackPath, 'index.html'));
        });
      } else {
        console.error("Critical: Build artifacts not found in fallbackPath either.");
        app.get('*', (req, res) => {
          res.status(404).send("Build artifacts not found. Deployment configuration error.");
        });
      }
    }
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server is listening on 0.0.0.0:${PORT}`);
  });
}

startServer().catch(console.error);
