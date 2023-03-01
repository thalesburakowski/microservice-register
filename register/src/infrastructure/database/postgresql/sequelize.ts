import env from '@main/config/env';
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(env.database.databaseConnection)