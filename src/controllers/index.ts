import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from '../models/User'
import { checkPassword, hashPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    const error = new Error('El email ya está en uso')
    res.status(409).json({ error: error.message })
    return
  }

  const handle = slug(req.body.handle, '')
  const handleExists = await User.findOne({ handle })
  if (handleExists) {
    const error = new Error('El nombre de usuario no esta disponible')
    res.status(409).json({ error: error.message })
    return
  }

  const user = new User(req.body)
  user.password = await hashPassword(password)
  user.handle = handle
  await user.save()

  res.status(201).send('Registro creado correctamente')
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const userExists = await User.findOne({ email })
  if (!userExists) {
    const error = new Error('El usuario no existe')
    res.status(404).json({ error: error.message })
    return
  }
  const isPasswordCorrect = await checkPassword(password, userExists.password)

  if (!isPasswordCorrect) {
    const error = new Error('La contraseña es incorrecta')
    res.status(404).json({ error: error.message })
    return
  }
  res.send('Autenticado')
}
