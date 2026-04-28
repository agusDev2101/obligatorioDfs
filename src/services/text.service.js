import iaModel from '../config/ia.config.js';

export const generateText = async (text) => {
    try {
        const prompt = 'Crea una mini sinopsis de esta pelicula: ' + text;
        const result = await iaModel.generateContent(prompt);
        return result.response.text().trim();
    } catch (error) {
        console.error('error', error);
        
        if(error.message.includes("429")){ //si el error es por limite de peticiones{
            console.log("Limite de peticiones alcanzado. Reintendando en 2 segundos...");
            await new Promise(res => setTimeout(res, 2000)); //espera 2 seg
            return generateText(text); //reintenta la petición
        }
        throw new Error("Error al procesar el texto con la IA.")
    }
}