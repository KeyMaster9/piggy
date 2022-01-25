const { body, validationResult } = require('express-validator');

module.exports = [
    body("email").normalizeEmail(),
    body("old-password").rtrim(),
    body("new-password").rtrim(),
]