import express, { json } from 'express'
import { router } from '@presentation/http/express/routers'
import env from '@main/config/env'

class ExpressServer {
    private app
    constructor() {
        this.app = express()
        this.app.use(json())
        this.app.use(router)
    }

    serve = () => {
        this.app.listen(env.app.httpPort, () => {
            console.log('server running at port', env.app.httpPort);
        })
    }
}

export const expressServer = new ExpressServer()