import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import { FilmValidator } from '../utils/validators'
import FilmController from '../controllers/FilmController'
import RentalController from '../controllers/RentalController'
import Validate from '../middlewares/ValidationMiddlware'

const router = Router();

router.get('/', errorHandler(FilmController.list))
router.post('/', Validate(FilmValidator.create), errorHandler(FilmController.create));

router.get('/available', errorHandler(FilmController.findAvailable));
router.get('/title/:title', errorHandler(FilmController.findByTitle));

router.get('/:id', errorHandler(FilmController.findById))
router.put('/:id', Validate(FilmValidator.update), errorHandler(FilmController.update))
router.delete('/:id', errorHandler(FilmController.destroy));
router.post('/:id/rent', errorHandler(RentalController.rentFilm));
router.post('/:id/inventory/add', 
  Validate(FilmValidator.updateInventory), 
  errorHandler(FilmController.addCopyToInventory)
);

export default router;