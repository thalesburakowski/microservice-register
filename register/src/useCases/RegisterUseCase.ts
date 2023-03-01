import { UserModel } from "@postgresql/models"

interface IRegisterUseCaseInput {
    firstName: string
    lastName: string
    email: string
    password: string
}

export class RegisterUseCase {
    handle = async (userData: IRegisterUseCaseInput) => {
        const user = await UserModel.create({ ...userData })
        return user
    }

}

export const registerUseCase = new RegisterUseCase()