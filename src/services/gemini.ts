import { GoogleGenAI } from "@google/genai";
import { BRAND, SERVICES } from "../constants";

const ai = new GoogleGenAI({ 
  apiKey: (typeof process !== 'undefined' && process.env.GEMINI_API_KEY) || (import.meta.env.VITE_GEMINI_API_KEY as string) || ""
});

const SYSTEM_INSTRUCTION = `
You are the AESPI Wellness Studio AI Assistant. 
Your goal is to help potential clients understand our science-backed, non-invasive therapies designed mainly for seniors to maintain independence and vitality.

Studio Information:
- Name: ${BRAND.name}
- Tagline: ${BRAND.tagline}
- Address: ${BRAND.address}
- WhatsApp: ${BRAND.whatsapp}
- Email: ${BRAND.email}
- Opening Hours: ${BRAND.openingHours.map(h => `${h.day}: ${h.time}`).join(", ")}

Services:
${SERVICES.map(s => `- ${s.title}: ${s.description} Benefits: ${s.benefits.join(", ")}`).join("\n")}

Guidelines:
1. Be professional, warm, and encouraging.
2. Emphasize that treatments are non-invasive, painless, and require no physical strain (no sweat).
3. If asked about booking, suggest using the WhatsApp button or booking a trial session.
4. Keep responses concise and focused on wellness benefits for seniors and injury recovery.
5. If you don't know the answer, politely suggest they contact us via WhatsApp at ${BRAND.whatsapp}.
`;

export async function getAIResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently unavailable. Please contact us via WhatsApp for immediate assistance.";
  }
}
