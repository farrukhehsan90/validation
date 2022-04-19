const express = require("express");
const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb://user_786:pass786@cluster0-shard-00-00.qcei4.mongodb.net:27017,cluster0-shard-00-01.qcei4.mongodb.net:27017,cluster0-shard-00-02.qcei4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-li0i2t-shard-0&authSource=admin&retryWrites=true&w=majority'

module.exports = {
    router: express.Router(),
    app: () => {
        const app = express();
        const { jsonParser, urlEncodedParser } = require("../config/bodyParser");
        const port = process.env.PORT || 4000;

        //including body-parser to app ....
        app.use(jsonParser);
        app.use(urlEncodedParser);

        // middleware to avoid CORS ....
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            next();
        });

        //MONGO CONNECTION
        mongoose.connect(CONNECTION_STRING, (err, db) => {
            if (err) {
                console.log('Data Base Connection Error', err)
            }
            else {
                app.listen(port, (e) => {
                    e ? console.log("Server Cannot Start", e) : console.log("Server Started", port)
                })
            }
        })

        

        return app;
    }
}
