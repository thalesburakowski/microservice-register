import { WelcomeMail } from '@useCases/WelcomeMail'
import { Router } from 'express'

const sendEmailRouter = Router()

const welcomeMail = new WelcomeMail()

sendEmailRouter.post('/welcome', async (req, res) => {
    await welcomeMail.execute({ email: req.body.email, name: req.body.name })
    return res.status(200).send()
})

export { sendEmailRouter }