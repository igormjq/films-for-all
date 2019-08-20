import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import { FilmValidator } from '../utils/validators'
import FilmController from '../controllers/FilmController'
import Validate from '../middlewares/ValidationMiddlware'

const router = Router();

router.get('/', errorHandler(FilmController.list));
router.post('/', Validate(FilmValidator.createOrUpdate), errorHandler(FilmController.create));
router.get('/title/:title', errorHandler(FilmController.findByTitle));
router.put('/:id', Validate(FilmValidator.createOrUpdate), errorHandler(FilmController.update));
router.delete('/:id', errorHandler(FilmController.destroy));

export default router;