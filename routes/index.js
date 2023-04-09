require('dotenv').config();
const express = require('express');
const router = express.Router();
const connection = require('../mysql_connection/index');

router.get('/services', (req, res) => {
  connection.query('SELECT * FROM services', (error, results, fields) => {
    if (error) {
      console.error('Error querying services: ' + error.stack);
      return res.status(500).send('Error querying services');
    }
    res.status(200).send(results);
  });
});

const app = express();
const port = process.env.SERVER_PORT;

app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = router;