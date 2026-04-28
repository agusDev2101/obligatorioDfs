import { searchMovies } from '../../../services/movieApi.service.js';

// Controlador para buscar películas
export async function searchMoviesController(req, res) {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: 'Falta el parámetro de búsqueda (query)' });
  }
  try {
    const movies = await searchMovies(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
