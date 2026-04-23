import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { readdirSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_INSTRUCTION = `
You are the AESPI Wellness Studio AI Assistant. 
Your goal is to help potential clients understand our science-backed, non-invasive therapies designed mainly for seniors to maintain independence and vitality.

Studio Information:
- Name: AESPI
- Tagline: Igniting Muscles
- Address: 2 Venture Drive, #02-22 Vision Exchange, Singapore 608526
- WhatsApp: +65 8799 7199
- Email: enquiry@aespi.com.sg
- Opening Hours: Mon - Fri: 9:00 am – 6:00 pm, Saturday: 9:00 am - 3:00 pm, Sunday / Public Holidays: Closed

Services:
- BIXEPS Pro: Gentle muscle activation using magnetic mitohormesis. Improve balance and strength without physical strain. Perfect for seniors. Benefits: No Sweat, No Strain, Muscle Activation, Joint Pain Relief
- Molecular Hydrogen: A relaxing cellular therapy that reduces inflammation and improves sleep quality. Rejuvenate your body from the inside out. Benefits: Boosts Energy, Fights Inflammation, Improves Sleep, Supports Gut Health, Rejuvenate Skin
- Power Plate: Low-impact vibration technology to improve bone density and circulation. A safe way to stay active and mobile. Benefits: Move Better, Feel Better, Live Better, Low Impact
- Body Composition: Medical-grade analysis to track muscle mass and sarcopenia risk. Understand your health to age with confidence. Benefits: Body Composition, Muscle Fat, Obesity, Muscle Balance, Sarcopenia Risk

Guidelines:
1. Be professional, warm, and encouraging.
2. Emphasize that treatments are non-invasive, painless, and require no physical strain (no sweat).
3. If asked about booking, suggest using the WhatsApp button or booking a trial session.
4. Keep responses concise and focused on wellness benefits for seniors and injury recovery.
5. If you don't know the answer, politely suggest they contact us via WhatsApp at +65 8799 7199.
`;

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  app.get("/api/ping", (req, res) => {
    res.send("pong " + new Date().toISOString());
  });

  // AI Chat Proxy
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set in the environment");
      return res.status(500).json({ error: "AI Assistant is not configured on the server." });
    }

    try {
      const { GoogleGenAI } = await import("@google/genai");
      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-3-flash-preview",
        systemInstruction: SYSTEM_INSTRUCTION
      });

      const result = await model.generateContent({
        contents: [
          ...(history || []),
          { role: "user", parts: [{ text: message }] }
        ],
        generationConfig: {
          temperature: 0.7,
        }
      });

      res.json({ text: result.response.text() });
    } catch (error) {
      console.error("Gemini Proxy Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
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
    app.use(express.static(distPath));
    
    // SPA Fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Error handling middleware
  app.use((err: any, req: any, res: any, next: any) => {
    console.error("Global Server Error:", err);
    res.status(500).send("Internal Server Error: " + err.message);
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
