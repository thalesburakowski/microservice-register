import { MailService } from "@infrastructure/MailService/MailService";

interface IWelcomeMailDTO {
    name: string
    email: string
}

export class WelcomeMail {
    private mailService: MailService

    constructor() {
        this.mailService = new MailService()
    }

    execute = async (emailData: IWelcomeMailDTO) => {
        const message = `Welcome to our service ${emailData.name}`
        await this.mailService.sendMail({ email: emailData.email, subject: 'Welcome to Service', message })
        return
    }
}