const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.PORT = process.env.PORT || 3000;
        this.app = express();

        this.middlewares();
        this.routes();
    }

    listen = () => {

        this.app.listen(this.PORT, () => {
            console.log(`Server listening in port ${this.PORT}`);
        });
    }

    middlewares = () => {
        this.app.use(cors("*"));
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes = () => {
        this.app.use('/api', require('../routes/router') );
    }


}
module.exports = {
    Server
}