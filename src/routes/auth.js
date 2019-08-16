import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import AuthController from '../controllers/AuthController'

const router = Router();

router.post('/login', errorHandler(AuthController.signIn));
router.post('/register', errorHandler(AuthController.register));

export default router;