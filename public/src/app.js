const express  = require('express');

// criando class app
class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //permitindo app entender JSON
        this.express.use(express.json());

    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express