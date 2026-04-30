import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY || 'TU_API_KEY_AQUI'; // Reemplaza por tu API key o usa variable de entorno
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Busca películas por título
export async function searchMovies(query) {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query,
        language: 'es-ES',
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Error al consultar la API de películas');
  }
}