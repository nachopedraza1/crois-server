import { Sequelize } from 'sequelize';


const db = new Sequelize('crois-db', 'postgres', 'tested2000', {
    host: 'crois-db.cfkqg3sbgr48.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432
});

export default db;

