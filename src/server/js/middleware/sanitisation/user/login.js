const { body } = require('express-validator');

module.exports = [
    body("userName").trim(),
    body("password").rtrim(),
]