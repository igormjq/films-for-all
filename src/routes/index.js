import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.json({ 
  app: 'Films 4All API',
  version: '1.0.0'
}))

export default router;