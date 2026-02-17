
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using the API key strictly from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGameAdvice = async (history: { role: 'user' | 'model'; text: string }[]) => {
  try {
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
    // Use the .text property directly instead of as a method to get the content string.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The cosmic data streams are experiencing interference. Try again shortly, Commander.";
  }
};
