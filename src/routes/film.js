import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import { FilmValidator } from '../utils/validators'
import FilmController from '../controllers/FilmController'
import Validate from '../middlewares/ValidationMiddlware'

const router = Router();

router.get('/', errorHandler(FilmController.list));
router.get('/title/:title', errorHandler(FilmController.findByTitle));
router.put('/:id', Validate(FilmValidator.update), errorHandler(FilmController.update));

export default router;