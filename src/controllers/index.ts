import { Request, Response } from 'express'
import User from '../models/User'

export const createAccount = async (req: Request, res: Response) => {
  const { email } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    const error = new Error('El email ya está en uso')
    res.status(409).json({ error: error.message })
    return
  }

  const user = new User(req.body)
  await user.save()

  res.status(201).send('Registro creado correctamente')
}