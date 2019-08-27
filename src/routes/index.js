import { Router } from 'express'
import AuthMiddleware from '../middlewares/AuthMiddleware'
import AuthController from '../controllers/AuthController'
import Validate from '../middlewares/ValidationMiddlware'
import { errorHandler } from '../handlers/errorHandler'
import { AuthValidator } from '../utils/validators'
/**
 * Routes
 */
import films from './film';
import rentals from './rental';

const router = Router();

router.post('/login', Validate(AuthValidator.login), errorHandler(AuthController.signIn));

router.post('/register', Validate(AuthValidator.register), errorHandler(AuthController.register));

/**
 * Protected routes
*/
router.use(AuthMiddleware);

router.post('/logout', errorHandler(AuthController.signOut));
router.use('/films', films);
router.use('/rentals', rentals);

export default router;