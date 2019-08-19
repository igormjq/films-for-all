import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import FilmController from '../controllers/FilmController'

const router = Router();

router.get('/', errorHandler(FilmController.list));
router.get('/title/:title', errorHandler(FilmController.findByTitle));

export default router;