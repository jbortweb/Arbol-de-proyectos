import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount } from './controllers'

const router = Router()

router.post(
  '/auth/register',
  body('handle')
    .notEmpty()
    .withMessage('El nombre de usuario no puede ir vacío'),
  body('name').notEmpty().withMessage('El nombre no puede ir vacío'),
  body('email').isEmail().withMessage('El email no es correcto'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
  createAccount
)

export default router
