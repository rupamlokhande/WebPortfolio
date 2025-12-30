
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Correctly initialize GoogleGenAI using process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithResume = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    // Correctly call generateContent with model, contents, and systemInstruction in config
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
      }
    });

    // Access response.text directly (property, not a method)
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};
