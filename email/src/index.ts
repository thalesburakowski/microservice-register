import { rabbitMQService } from "@infrastructure/RabbitMQ/rabbitMqService";
import { expressServer } from "@presentation/http/express/server";

(async () => {
    // await rabbitMQService.start()
    await rabbitMQService.listen()
    expressServer.serve()
})()