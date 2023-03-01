import { RegisterController } from '@presentation/controllers/RegisterController'
import { Router } from 'express'
const registerRouter = Router()
const registerController = new RegisterController()

registerRouter.post('/register', async (req, res) => {
    const { email, firstName, lastName, password } = req.body
    const user = await registerController.execute({ email, firstName, lastName, password })
    return res.status(201).json(user)
})

export { registerRouter }