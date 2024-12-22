import { Router } from 'express'

const router = Router()

router.post('/auth/register', (req, res) => {
  res.send('Desde register')
})

export default router
