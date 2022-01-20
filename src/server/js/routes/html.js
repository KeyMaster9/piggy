var express = require('express');
var router = express.Router();


const sanitiseRegisterMiddleware = require('../middleware/sanitisation/user/register');
const validationRegisterMiddleware = require('../middleware/validation/user/register');
const handleValidationResultMiddleware = require('../middleware/validation/handleResult');
const registerHandler = require('./html/register');

const sanitiseLoginMiddleware = require('../middleware/sanitisation/user/login');
const validationLoginMiddleware = require('../middleware/validation/user/login');
const loginHandler = require('./html/login');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Piggy' });
});

//GET login page
router.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
});
router.post(
    "/login",
    [
        sanitiseLoginMiddleware,
        validationLoginMiddleware,
        handleValidationResultMiddleware,
        loginHandler,
    ],
);


//GET register page
router.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});

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
