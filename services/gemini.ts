import { GoogleGenAI } from "@google/genai";

export const generateGameAdvice = async (history: { role: 'user' | 'model'; text: string }[]) => {
  try {
    // Safety check for API key in browser environment
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    if (!apiKey) {
      console.warn("API Key missing. Gemini service is offline.");
      return "The cosmic data streams are offline (API Key Missing). Contact command center.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({ 
        role: h.role === 'user' ? 'user' : 'model', 
        parts: [{ text: h.text }] 
      })),
      config: {
        systemInstruction: "You are Kekeyo, a futuristic and helpful gaming AI built into the Kekeyo Games portal. You know about all genres of games, lore, tips, and hardware. Speak with a slightly robotic but friendly cosmic-themed personality.",
        temperature: 0.8,
        topP: 0.95,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The cosmic data streams are experiencing interference. Try again shortly, Commander.";
  }
};