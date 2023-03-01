export default {
    app: {
        httpPort: process.env.HTTP_PORT
    },
    database: {
        databaseConnection: String(process.env.DATABASE_CONNECTION)
    }
}