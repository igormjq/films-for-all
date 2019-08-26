import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import RentalController from '../controllers/RentalController'
import Validate from '../middlewares/ValidationMiddlware'

const router = Router();

/**
 * General routes
 */
router.get('/', errorHandler(RentalController.list));
router.post('/rent/:filmId', errorHandler(RentalController.rentFilm));
router.post('/:rentalId/return', errorHandler(RentalController.returnRentedFilm));

export default router;