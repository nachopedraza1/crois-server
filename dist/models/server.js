"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("../routes/products"));
class Server {
    constructor() {
        this.apiPaths = {
            products: 'api/products'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.routes();
        this.middlewares();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en' + this.port);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use('public');
    }
    routes() {
        this.app.use(this.apiPaths.products, products_1.default);
    }
}
exports.default = Server;
