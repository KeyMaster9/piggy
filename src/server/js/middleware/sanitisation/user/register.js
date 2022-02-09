const { body } = require('express-validator');

const nameCaser = require('../../../helpers/nameCaser');

module.exports = [
    body('forename').trim().customSanitizer(nameCaser),
    body('surname').trim().customSanitizer(nameCaser),
    body('userName').trim(),
    body('email').normalizeEmail(),
    body('password').rtrim(),
];
