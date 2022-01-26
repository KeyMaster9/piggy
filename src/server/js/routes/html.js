var express = require('express');
var router = express.Router();

const AuthenticationMiddleware = require('../middleware/authentication');

const sanitiseRegisterMiddleware = require('../middleware/sanitisation/user/register');
const validationRegisterMiddleware = require('../middleware/validation/user/register');
const handleValidationResultMiddleware = require('../middleware/validation/handleResult');
const registerHandler = require('./html/register');

const sanitiseLoginMiddleware = require('../middleware/sanitisation/user/login');
const validationLoginMiddleware = require('../middleware/validation/user/login');
const loginHandler = require('./html/login');

// const sanitiseResetMiddleware = require('../middleware/sanitisation/user/reset');
// const validationResetMiddleware = require('../middleware/validation/user/reset');
// const resetHandler = require('./html/reset');


/* GET home page. */
router.get('/', [
    AuthenticationMiddleware,
    function (req, res, next) {
        res.render('index', { title: 'Hello ' + res.locals.session.User.forename + '!' });
    }
]);


/* GET home page. */
router.get('/logout', [
    AuthenticationMiddleware,
    function (req, res, next) {
        res.cookie("session");
        res.redirect('/');
    }
]);

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


router.get('/reset_password', function (req, res) {
    res.render('reset_password', { title: 'Reset Password' });
});

// router.post('reset_password', [
//     sanitiseResetMiddleware,
//     validationResetMiddleware,
//     handleValidationResultMiddleware,
//     resetHandler,
// ])


router.get('/dashboard', function (req, res) {
    res.render('dashboard', { title: 'Dashboard!' });
});



module.exports = router;