import { registerUseCase } from '@useCases/RegisterUseCase'
import { HttpService } from "@infrastructure/http/HttpService"
import { rabbitMqService } from '@infrastructure/rabbitmq/rabbitMqService'

interface IRegisterControllerDTO {
    firstName: string
    lastName: string
    email: string
    password: string
}

const httpService = new HttpService()

export class RegisterController {
    execute = async (registerData: IRegisterControllerDTO) => {
        const user = await registerUseCase.handle(registerData)
        // await httpService.post('http://localhost:3001/welcome', { email: registerData.email, name: `${registerData.firstName} ${registerData.lastName}` })
        rabbitMqService.publish({ queue: 'welcome', message: JSON.stringify({ email: registerData.email, name: `${registerData.firstName} ${registerData.lastName}` }) })
        return user
    }
}