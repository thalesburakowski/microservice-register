import { expressServer } from '@presentation/http/express/expressServer'
import '@postgresql/index'
import { rabbitMqService } from '@infrastructure/rabbitmq/rabbitMqService'

(async () => {
    await rabbitMqService.start()
    expressServer.serve()
})()