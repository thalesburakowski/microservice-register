import { WelcomeMail } from '@useCases/WelcomeMail'
import { connect, Connection, Channel, Message, ConsumeMessage } from 'amqplib'

const welcomeMail = new WelcomeMail()

interface IConsumeDTO {
    queue: string
    callback: (message: ConsumeMessage | null) => any | void
}

class RabbitMQService {
    client!: Connection
    channel!: Channel

    start = async () => {
        try {
            this.client = await connect('amqp://admin:pass@localhost:5672')
            this.channel = await this.client.createChannel()
        } catch (error) {
            console.log(error);
        }
    }

    private ackMessage = (callback: (message: ConsumeMessage | null) => any) => {
        return async (message: ConsumeMessage | null) => {
            await callback(message);
            if (message) {
                this.channel.ack(message)
            }
        }
    }

    private consume = async ({ queue, callback }: IConsumeDTO) => {
        const ackMessage = this.ackMessage(callback)
        await this.channel.assertQueue(queue, { durable: true })
        await this.channel.prefetch(1)
        await this.channel.consume(queue, ackMessage, { noAck: false })
    }

    public listen = async () => {
        await this.start()
        console.log('rabbitmq started');

        await this.consume({
            queue: 'welcome', callback: async (message: ConsumeMessage | null) => {
                if (!message) return

                const messageJson = JSON.parse(message.content.toString())
                await welcomeMail.execute({ email: messageJson.email, name: messageJson.name })
            }
        })
    }
}

export const rabbitMQService = new RabbitMQService()