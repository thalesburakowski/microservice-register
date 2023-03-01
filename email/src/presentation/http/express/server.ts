import env from '@main/config/env'
import express, { json } from 'express'
import { router } from './routers'

class ExpressServer {
    private app
    constructor() {
        this.app = express()
        this.app.use(json())
        this.app.use(router)
    }

    serve = () => {
        this.app.listen(env.app.httpPort, () => {
            console.log('Server running at port', env.app.httpPort);
        })
    }
}

export const expressServer = new ExpressServer()