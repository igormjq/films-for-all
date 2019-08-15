import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const router = Router();

router.post('/login', AuthController.signIn);

export default router;