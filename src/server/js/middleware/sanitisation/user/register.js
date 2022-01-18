const { body, validationResult } = require('express-validator');

module.exports = [
    body("forename").trim(),
    body("surname").trim(),
    body("userName").trim(),
    body("email").normalizeEmail(),
    body("password").rtrim(),
]