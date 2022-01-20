const serialize = require('../js/db/sequelize');

require('../js/db/models/user');

serialize.sync();