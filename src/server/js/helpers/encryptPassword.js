const bcrypt = require('bcrypt');

module.exports = (password, saltRounds = 10) => bcrypt.hash(password, saltRounds);
