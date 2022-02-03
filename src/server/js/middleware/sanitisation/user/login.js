const { body } = require('express-validator');

module.exports = [
    body("userName").trim().toLowerCase(),
    body("password").rtrim(),
]