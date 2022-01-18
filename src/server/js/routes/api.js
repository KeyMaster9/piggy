var express = require('express');
const emailValidation = require('./api/register/emailValidationHandler');
var router = express.Router();


// const passwordValidationHandler = require('./api/register/passwordValidationHandler');
// const emailValidationHandler = require('./api/register/emailValidationHandler');
// const foreNameValidationHandler = require('./api/register/foreNameValidationHandler');
// const surnameValidationHandler = require('./api/register/surnameValidationHandler');
// const userNameValidationHandler = require('./api/register/userNameValidationHandler');
// const uniqueUserValidationHandler = require('./api/register/uniqueUserValidationHandler');

const sanitiseRegisterMiddleware = require('../middleware/validation/user/register');
const validationRegisterMiddleware = require('../middleware/sanitisation/user/register');
const registerHandler = require('./api/register');


router.post('/register', [
    sanitiseRegisterMiddleware,
    validationRegisterMiddleware,
    registerHandler,
]);

module.exports = router;
