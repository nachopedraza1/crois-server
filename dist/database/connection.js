"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('crois', 'postgres', 'tested2000', {
    host: 'crois.cfkqg3sbgr48.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432
});
/*
const db = new Sequelize({
    dialect: 'postgres',
    host: 'crois.cfkqg3sbgr48.us-east-2.rds.amazonaws.com',
    username: 'postgres',
    password: 'tested2000',
    database: 'crois',
    port: 5432,
}); */
exports.default = db;
