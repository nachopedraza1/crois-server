import express, { Application } from "express";
import cors from 'cors';

import productsRoutes from "../routes/products";



class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        products: 'api/products'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto' + this.port);
        })
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.products, productsRoutes)
    }

}

export default Server;