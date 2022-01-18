const { body, validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    // forename surname email userName password
    console.log(req.body.forename);
    body('forename').trim();
    body('surname').trim();
    body('userName').trim();
    body('email').normalizeEmail();
    body('password').rtrim();
    next();
}