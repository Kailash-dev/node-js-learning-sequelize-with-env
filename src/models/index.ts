import { Sequelize } from 'sequelize';
import { config } from '../config/config';


const sequelize = new Sequelize(config.database as string, config.username as string, config.password, {
  host: config.host,
  dialect: 'postgres',
});

export default sequelize;
