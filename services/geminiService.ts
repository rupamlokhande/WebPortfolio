
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Function to handle chat interaction with the Gemini API
export const chatWithResume = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    // Create a fresh instance of GoogleGenAI before each request
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent with the appropriate model and configuration
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

    // Access the text property directly from the response object
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};