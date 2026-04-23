import { GoogleGenAI } from "@google/genai";

export async function getAIResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === "ai studio free tier") {
      return "I'm ready to help, but it looks like the AI API Key is not configured yet. Please check your environment variables.";
    }

    const ai = new GoogleGenAI({ apiKey });

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

Guidelines:
1. Be warm and professional.
2. Emphasize that treatments are non-invasive and "no sweat."
3. Encourage using the WhatsApp button for bookings.
`;

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
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("API key not valid")) {
      return "The AI assistant's API key is invalid. Please ensure a valid Gemini API key is provided in the configuration.";
    }
    return "The AI assistant is currently unavailable. Please contact us via WhatsApp for immediate assistance.";
  }
}
