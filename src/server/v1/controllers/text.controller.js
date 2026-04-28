import * as textService from '../../../services/text.service.js';

export const handleTransfrom = async (req, res, next) => {
    const { text } = req.body;

    if(!text) {
        return res.status(400).json({ success: false, message: "El campo 'text' es requerido." });
    }
    try {
        const resultado = await textService.generateText(text);
        res.json({ success: true, data: resultado });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}