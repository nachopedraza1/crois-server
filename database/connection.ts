import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('postgres', 'postgres', 'tested2000', {
    host: 'crois.cfkqg3sbgr48.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default sequelize;

