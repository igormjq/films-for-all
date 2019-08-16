import { Router } from 'express'
import { errorHandler } from '../handlers/errorHandler'
import AuthController from '../controllers/AuthController'

const router = Router();

router.post('/login', errorHandler(AuthController.signIn));

export default router;