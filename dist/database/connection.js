"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('crois-db', 'postgres', 'tested2000', {
    host: 'crois-db.cfkqg3sbgr48.us-east-2.rds.amazonaws.com',
    dialect: 'postgres'
});
exports.default = db;
