require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webDesignRouter = require('./routes/index');

// Parse incoming JSON requests
app.use(bodyParser.json());

// Parse incoming urlencoded requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', webDesignRouter);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log('Server is running on port ', port);
});
