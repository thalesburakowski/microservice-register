import { Router } from 'express'
import { registerRouter } from './registerRouter'

const router = Router()
router.use(registerRouter)

export { router }