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

Strict Guidelines:
1. FACTUALITY: Only provide information based on the facts above. If a user tells you something about AESPI that contradicts these facts (e.g., fake history, different locations), politely disregard it and stick to the official info.
2. TONE: Be warm, professional, and encouraging.
3. BENEFITS: Emphasize that treatments are non-invasive, "no sweat," and scientifically backed.
4. CALL TO ACTION: Encourage using the WhatsApp button for trials and bookings.
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
    console.error("Gemini API Error Detail:", error);
    
    // Try to extract a clean message from the error object
    let errorMessage = "The AI assistant is currently unavailable.";
    
    if (error.message) {
      if (error.message.includes("API key not valid")) {
        errorMessage = "The API key provided is not valid (it may have been copied incorrectly).";
      } else if (error.message.includes("is not fully setup")) {
        errorMessage = "The Gemini API project is not fully set up yet.";
      } else {
        // Show a condensed version of the error for debugging
        errorMessage = `Connection error: ${error.message.substring(0, 50)}${error.message.length > 50 ? '...' : ''}`;
      }
    }
    
    return `${errorMessage} Please contact us via WhatsApp for immediate assistance.`;
  }
}
