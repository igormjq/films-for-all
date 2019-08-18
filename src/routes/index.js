import { Router } from 'express'
import AuthMiddleware from '../middlewares/AuthMiddleware'
import AuthController from '../controllers/AuthController'
import { errorHandler } from '../handlers/errorHandler'
/**
 * Routes
 */
import films from './film';


const router = Router();

router.post('/login', errorHandler(AuthController.signIn));
router.post('/register', errorHandler(AuthController.register));

/**
 * Protected routes
*/
router.use(AuthMiddleware);

router.post('/logout', errorHandler(AuthController.signOut));
router.use('/films', films);

router.get('/', (req, res) => res.json({ 
  app: 'Films 4All API',
  version: '1.0.0'
}));

export default router;