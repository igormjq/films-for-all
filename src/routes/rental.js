import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import RentalController from '../controllers/RentalController'
import Validate from '../middlewares/ValidationMiddlware'

const router = Router();

/**
 * General routes
 */
router
  .route('/')
    .get(errorHandler(RentalController.list))

// router
//   .route('/:id')
//     .get(errorHandler(RentalController.findById))
//     .put(Validate(FilmValidator.update), errorHandler(RentalController.update))
//     .delete(errorHandler(RentalController.destroy))

export default router;