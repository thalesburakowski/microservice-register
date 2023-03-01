import { connect, Connection, Channel } from 'amqplib'

interface IPublishDTO {
    queue: string
    message: string
}

class RabbitMQService {
    client!: Connection
    channel!: Channel

    public start = async () => {
        try {
            this.client = await connect('amqp://admin:pass@localhost:5672')
            this.channel = await this.client.createChannel()
            console.log('started');
            
        } catch (error) {
            console.log(error);
        }
    }

    publish = ({ queue, message }: IPublishDTO) => {
        this.channel.assertQueue(queue, { durable: true })
        return this.channel.sendToQueue(queue, Buffer.from(message), { persistent: true })
    }
}

export const rabbitMqService = new RabbitMQService()