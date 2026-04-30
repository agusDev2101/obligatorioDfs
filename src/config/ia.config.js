import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';
const genAI = new GoogleGenerativeAI(process.env.IA_API_KEY);

export const iaModel = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction: {
        role: "system",
        parts: [{text: "Eres un editor de reviews experto. Tu única función es generar mini sinopsis sobre la película que recibas. Devuelve solo la mini sinopsis, nada más."}]
    }
});

export default iaModel;
