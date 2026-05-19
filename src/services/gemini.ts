export async function getAIResponse(userMessage: string, history: any[] = []) {
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage, history })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get AI response");
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Gemini Proxy Error:", error);
    
    let errorMessage = "The AI assistant is currently unavailable.";
    if (error.message) {
      errorMessage = `Connection error: ${error.message.substring(0, 50)}${error.message.length > 50 ? '...' : ''}`;
    }
    
    return `${errorMessage} Please contact us via WhatsApp for immediate assistance.`;
  }
}
