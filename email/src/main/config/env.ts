export default {
    app: {
        httpPort: process.env.HTTP_PORT
    },
    email: {
        service: process.env.EMAIL_SERVICE,
        apiMail: process.env.API_EMAIL,
        apiMailPassword: process.env.API_EMAIL_PASSWORD
    }
}