import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import { FilmValidator } from '../utils/validators'
import FilmController from '../controllers/FilmController'
import Validate from '../middlewares/ValidationMiddlware'

const router = Router();

/**
 * General routes
 */
router
  .route('/')
    .get(errorHandler(FilmController.list))
    .post(Validate(FilmValidator.create), errorHandler(FilmController.create))

router
  .route('/:id')
    .put(Validate(FilmValidator.update), errorHandler(FilmController.update))
    .delete(errorHandler(FilmController.destroy))

/**
 * Specific routes
 */
router.post('/:id/inventory/add', Validate(FilmValidator.updateInventory), errorHandler(FilmController.addToInventory));

export default router;