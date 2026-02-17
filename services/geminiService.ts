
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  try {
    // @ts-ignore
    const apiKey = process.env.API_KEY || import.meta.env.VITE_GEMINI_API_KEY || '';
    return new GoogleGenAI({ apiKey });
  } catch (error) {
    console.warn("AI Client Initialization Failed:", error);
    return null;
  }
};

const ai = getAIClient();

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export const generateAIResponse = async (history: ChatMessage[], userInput: string) => {
  if (!ai) return "AI service is currently unavailable.";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash', // Updated to a stable model name
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: `You are the Oral Health Specialist for "ProBiora Health".
        Your tone is: Scientific, Trusted, Professional, yet Empathetic.
        ProBiora is unique because it focuses on the Oral Microbiome using patented ProBiora3 strains.
        Key Benefits: Freshens breath, supports gums, whiteness teeth, crowds out bad bacteria.
        Products: Adult, Kids, Pro, and Pets.
        Answer user questions about dental probiotics with clinical confidence. 
        Keep responses professional and under 60 words.`,
        temperature: 0.6,
      }
    });

    return response.text || "I'm here to answer any questions about the science of ProBiora.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am briefly offline, but please refer to our FAQ for clinical details.";
  }
};
