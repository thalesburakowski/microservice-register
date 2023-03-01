import { sequelize } from './sequelize'

sequelize.authenticate();

sequelize.sync()