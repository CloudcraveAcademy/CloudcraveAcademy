import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_PROMPT = `
You are the Thames Support UK AI Assistant. Your goal is to help potential students and corporate clients find the right training courses.
Thames Support UK provides accredited training in:
1. Health and Social Care (Level 2, 3, 4, 5 Diplomas, Mandatory Training)
2. SIA Training (Door Supervisor, Security Guarding, CCTV, Top-up)
3. Functional Skills (English and Maths Level 1 & 2)

Key Brand Values: Professional, Enterprise-grade, Scalable, Secure, Trustworthy.
Brand Colors: Navy Blue (#003366) and Red (#E31E24).

Pricing Strategy:
- Standard Package: Full course access + Digital certificate.
- Platinum Package: Priority support + Hardcopy certificate + Career guidance + CV review + Free retake.
- Installment options available (Deposit + Balance).

Corporate Solutions:
- Bulk enrollment for teams.
- Centralized management dashboard.
- Performance analytics.

Guidelines:
- Be professional, helpful, and concise.
- If asked about specific course details, mention the Standard and Platinum options.
- Encourage users to view the "Courses" page for the full catalog.
- For corporate inquiries, suggest visiting the "Corporate" page or requesting a demo.
- Do not provide legal or medical advice.
- If you don't know something, suggest contacting human support at info@thamessupport.com.
`;

export const generateChatResponse = async (message: string, history: any[]) => {
  try {
    const model = "gemini-3-flash-preview";
    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
