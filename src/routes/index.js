import { Router } from 'express'
import auth from './auth'

const router = Router()

router.use('/auth', auth);

router.get('/', (req, res) => res.json({ 
  app: 'Films 4All API',
  version: '1.0.0'
}))

export default router;