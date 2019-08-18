import { Router } from 'express'
import AuthMiddleware from '../middlewares/AuthMiddleware'
import auth from './auth'

const router = Router()

router.use('/auth', auth);

router.get('/', (req, res) => res.send('eu funfo sem auth'));

/**
 * Protected routes
 */
router.use(AuthMiddleware);

router.get('/', (req, res) => res.json({ 
  app: 'Films 4All API',
  version: '1.0.0'
}));

export default router;