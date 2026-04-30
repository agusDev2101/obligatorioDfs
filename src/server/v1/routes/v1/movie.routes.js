import { Router } from 'express';
import { searchMoviesController } from '../../controllers/movie.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';

const iaRoutes = Router();


// GET /api/v1/movies/search?query=nombre
iaRoutes.get('/search', searchMoviesController);

export default iaRoutes;
