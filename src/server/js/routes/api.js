var express = require('express');
var router = express.Router();

const sanitiseRegisterMiddleware = require('../middleware/validation/user/register');
const validationRegisterMiddleware = require('../middleware/sanitisation/user/register');
const handleValidationResultMiddleware = require('../middleware/validation/handleResult');
const registerHandler = require('./api/register');


router.post(
    "/register",
    [
        sanitiseRegisterMiddleware,
        validationRegisterMiddleware,
        handleValidationResultMiddleware,
        registerHandler,
    ],
);

module.exports = router;