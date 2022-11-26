const express = require("express");
const connection = require('./connection').db
const cors = require('cors');
const app = express();

const { menu,customers } = require("./routes");

app.listen(3000, () => {
    app.use(cors({
        origin: '*'
    }));
    app.use('/menu', menu.route)
    app.use('/customers',customers.route)
    console.log("server started 3000")


})
