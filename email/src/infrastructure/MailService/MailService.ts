import env from '@main/config/env';
import nodemailer, { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface ISendMailDTO {
    email: string
    subject: string
    message: string
}

export class MailService {
    transporter: Transporter<SMTPTransport.SentMessageInfo>;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: env.email.service,
            auth: {
                user: env.email.apiMail,
                pass: env.email.apiMailPassword,
            },
        });
    }

    sendMail = async (mailData: ISendMailDTO) => {
        try {
            await this.transporter.sendMail({
                from: 'MailService@thales.com',
                to: mailData.email,
                subject: mailData.subject,
                text: mailData.message
            })
        } catch (error) {
            console.log('error to send e-mail');
        }
    }
}