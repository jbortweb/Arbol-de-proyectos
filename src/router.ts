import { Router } from 'express'
import { createAccount } from './controllers'

const router = Router()

router.post('/auth/register', createAccount)

export default router
