const connection = require('../mysql_connection/index');
const webDesignRouter = require('./web_design')(connection);

module.exports = webDesignRouter;

