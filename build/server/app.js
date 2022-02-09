/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/bin/www":
/*!****************************!*\
  !*** ./src/server/bin/www ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//#!/usr/bin/env node\n\n/**\n * Module dependencies.\n */\n\nvar app = __webpack_require__(/*! ../js/app */ \"./src/server/js/app.js\");\nvar debug = __webpack_require__(/*! debug */ \"debug\")('finance-management:server');\nvar http = __webpack_require__(/*! http */ \"http\");\n\n/**\n * Get port from environment and store in Express.\n */\n\nvar port = normalizePort(process.env.PORT || '3000');\napp.set('port', port);\n\n/**\n * Create HTTP server.\n */\n\nvar server = http.createServer(app);\n\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nserver.listen(port);\nserver.on('error', onError);\nserver.on('listening', onListening);\n\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string'\n    ? 'Pipe ' + port\n    : 'Port ' + port;\n\n  // handle specific listen errors with friendly messages\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n    default:\n      throw error;\n  }\n}\n\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\nfunction onListening() {\n  var addr = server.address();\n  var bind = typeof addr === 'string'\n    ? 'pipe ' + addr\n    : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n}\n\n\n//# sourceURL=webpack://piggy/./src/server/bin/www?");

/***/ }),

/***/ "./src/server/js/app.js":
/*!******************************!*\
  !*** ./src/server/js/app.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst logger = __webpack_require__(/*! morgan */ \"morgan\");\n\nconst routes = __webpack_require__(/*! ./routes */ \"./src/server/js/routes.js\");\n\nconst app = express();\n\n// view engine setup\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'twig');\n\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\n\n// gives access to the public folder\napp.use('/assets', express.static(path.join(__dirname, '/../client')));\n\n// accesses routes\napp.use('/', routes);\n\n// catch 404 and forward to error handler\napp.use((req, res, next) => {\n    next(createError(404));\n});\n\n// error handler\napp.use((err, req, res, next) => {\n    // set locals, only providing error in development\n    res.locals.message = err.message;\n    res.locals.error = req.app.get('env') === 'development' ? err : {};\n\n    // render the error page\n    res.status(err.status || 500);\n    res.render('error');\n    next();\n});\n\nmodule.exports = app;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/app.js?");

/***/ }),

/***/ "./src/server/js/db/sequelize.js":
/*!***************************************!*\
  !*** ./src/server/js/db/sequelize.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst randomStringGenerator = __webpack_require__(/*! ../helpers/randomString */ \"./src/server/js/helpers/randomString.js\");\n\nconst sequelize = new Sequelize({\n    dialect: 'sqlite',\n    storage: 'db/database.sqlite',\n});\n\nconst Session = sequelize.define('Session', {\n    id: {\n        type: Sequelize.INTEGER,\n        primaryKey: true,\n        autoIncrement: true,\n    },\n    secret: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        unique: true,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Sessionname\"',\n            },\n        },\n    },\n}, {\n    hooks: {\n        beforeCreate(session) {\n            session.secret = randomStringGenerator(40);\n        },\n    },\n});\n\nconst User = sequelize.define('User', {\n    id: {\n        type: Sequelize.INTEGER,\n        primaryKey: true,\n        autoIncrement: true,\n    },\n    userName: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        unique: true,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Username\"',\n            },\n        },\n\n    },\n    password: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Password\"',\n            },\n        },\n    },\n    forename: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Forename\"',\n            },\n        },\n    },\n    surname: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Surname\"',\n            },\n        },\n    },\n    emailAddress: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        unique: true,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Email Address\"',\n            },\n        },\n    },\n    tosSigned: {\n        type: Sequelize.BOOLEAN,\n        defaultValue: false,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please accept \"TOS\"',\n            },\n        },\n    },\n    tosVersionSigned: {\n        type: Sequelize.STRING,\n        allowNull: true,\n        validate: {\n            notEmpty: false,\n        },\n    },\n    tosDateSigned: {\n        type: Sequelize.DATE,\n        allowNull: true,\n        validate: {\n            notEmpty: false,\n        },\n    },\n    primaryDataOwned: {\n        type: Sequelize.JSON,\n        defaultValue: {},\n        allowNull: true,\n        validate: {\n            notEmpty: false,\n        },\n    },\n    secondaryDataOwned: {\n        type: Sequelize.JSON,\n        defaultValue: {},\n        allowNull: true,\n        validate: {\n            notEmpty: false,\n        },\n    },\n});\n\nUser.prototype.validatePassword = (vaidate) => bcrypt.compare(vaidate, this.password);\n\nSession.belongsTo(User);\nUser.hasMany(Session);\n\nmodule.exports = sequelize;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/db/sequelize.js?");

/***/ }),

/***/ "./src/server/js/helpers/encryptPassword.js":
/*!**************************************************!*\
  !*** ./src/server/js/helpers/encryptPassword.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nmodule.exports = (password, saltRounds = 10) => bcrypt.hash(password, saltRounds);\n\n\n//# sourceURL=webpack://piggy/./src/server/js/helpers/encryptPassword.js?");

/***/ }),

/***/ "./src/server/js/helpers/errorThrowers/InvalidCredentials.js":
/*!*******************************************************************!*\
  !*** ./src/server/js/helpers/errorThrowers/InvalidCredentials.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = function invalidCredentials() { };\n\n\n//# sourceURL=webpack://piggy/./src/server/js/helpers/errorThrowers/InvalidCredentials.js?");

/***/ }),

/***/ "./src/server/js/helpers/getSessionFromSessionSecret.js":
/*!**************************************************************!*\
  !*** ./src/server/js/helpers/getSessionFromSessionSecret.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const serialize = __webpack_require__(/*! ../db/sequelize */ \"./src/server/js/db/sequelize.js\");\n\nconst { User, Session } = serialize.models;\n\nmodule.exports = function getSessionFromSessionSecret(secret) {\n    if (!secret) {\n        return Promise.reject();\n    }\n\n    return Session.findOne({ where: { secret }, include: User })\n        .then((session) => {\n            if (!session) {\n                throw new Error('Session not found');\n            }\n            return session;\n        });\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/helpers/getSessionFromSessionSecret.js?");

/***/ }),

/***/ "./src/server/js/helpers/getUser.js":
/*!******************************************!*\
  !*** ./src/server/js/helpers/getUser.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const serialize = __webpack_require__(/*! ../db/sequelize */ \"./src/server/js/db/sequelize.js\");\nconst InvalidCredentials = __webpack_require__(/*! ./errorThrowers/InvalidCredentials */ \"./src/server/js/helpers/errorThrowers/InvalidCredentials.js\");\n\nconst { User } = serialize.models;\n\nmodule.exports = function getUser(req) {\n    return User.findOne({ where: { userName: req.body.userName } })\n        .then((user) => {\n            if (!user) {\n                throw new InvalidCredentials();\n            }\n\n            return user.validatePassword(req.body.password)\n                .then((result) => {\n                    if (!result) {\n                        throw new InvalidCredentials();\n                    }\n                })\n                .then(() => user);\n        });\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/helpers/getUser.js?");

/***/ }),

/***/ "./src/server/js/helpers/nameCaser.js":
/*!********************************************!*\
  !*** ./src/server/js/helpers/nameCaser.js ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = function nameCaser(v) {\n    const casedName = v.toLowerCase();\n    return casedName[0].toUpperCase();\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/helpers/nameCaser.js?");

/***/ }),

/***/ "./src/server/js/helpers/randomString.js":
/*!***********************************************!*\
  !*** ./src/server/js/helpers/randomString.js ***!
  \***********************************************/
/***/ ((module) => {

eval("module.exports = function randomString(length = 40) {\n    let result = '';\n    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n    const charactersLength = characters.length;\n    for (let i = 0; i < length; i++) {\n        result += characters.charAt(Math.floor(Math.random() * charactersLength));\n    }\n    return result;\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/helpers/randomString.js?");

/***/ }),

/***/ "./src/server/js/middleware/authentication.js":
/*!****************************************************!*\
  !*** ./src/server/js/middleware/authentication.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getSessionFromSessionSecret = __webpack_require__(/*! ../helpers/getSessionFromSessionSecret */ \"./src/server/js/helpers/getSessionFromSessionSecret.js\");\n\nmodule.exports = (req, res, next) => {\n    const { cookies } = req;\n\n    getSessionFromSessionSecret(cookies.session)\n        .then((session) => {\n            res.locals.session = session;\n            next();\n        })\n        .catch(() => {\n            res.redirect('/login');\n        });\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/authentication.js?");

/***/ }),

/***/ "./src/server/js/middleware/sanitisation/user/login.js":
/*!*************************************************************!*\
  !*** ./src/server/js/middleware/sanitisation/user/login.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body('userName').trim().toLowerCase(),\n    body('password').rtrim(),\n];\n\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/sanitisation/user/login.js?");

/***/ }),

/***/ "./src/server/js/middleware/sanitisation/user/register.js":
/*!****************************************************************!*\
  !*** ./src/server/js/middleware/sanitisation/user/register.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nconst nameCaser = __webpack_require__(/*! ../../../helpers/nameCaser */ \"./src/server/js/helpers/nameCaser.js\");\n\nmodule.exports = [\n    body('forename').trim().customSanitizer(nameCaser),\n    body('surname').trim().customSanitizer(nameCaser),\n    body('userName').trim(),\n    body('email').normalizeEmail(),\n    body('password').rtrim(),\n];\n\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/sanitisation/user/register.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/handleResult.js":
/*!*************************************************************!*\
  !*** ./src/server/js/middleware/validation/handleResult.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { validationResult } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = function handleResult(req, res, next) {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        res.status(400).json({ errors: errors.array() });\n    } else {\n        next();\n    }\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/handleResult.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/user/login.js":
/*!***********************************************************!*\
  !*** ./src/server/js/middleware/validation/user/login.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body('userName').isLength({ min: 6, max: 25 }),\n    body('password').isStrongPassword({\n        minLength: 8,\n        minLowercase: 1,\n        minUppercase: 1,\n        minNumbers: 1,\n        minSymbols: 1,\n        returnScore: false,\n        pointsPerUnique: 1,\n        pointsPerRepeat: 0.5,\n        pointsForContainingLower: 10,\n        pointsForContainingUpper: 10,\n        pointsForContainingNumber: 10,\n        pointsForContainingSymbol: 10,\n    }),\n];\n\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/user/login.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/user/register.js":
/*!**************************************************************!*\
  !*** ./src/server/js/middleware/validation/user/register.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body('forename').isLength({ min: 1, max: 40 }).isAlpha(),\n    body('surname').isLength({ min: 1, max: 80 }).isAlpha(),\n    body('email').isEmail(),\n    body('userName').isLength({ min: 6, max: 25 }),\n    body('password').isStrongPassword({\n        minLength: 8,\n        minLowercase: 1,\n        minUppercase: 1,\n        minNumbers: 1,\n        minSymbols: 1,\n        returnScore: false,\n        pointsPerUnique: 1,\n        pointsPerRepeat: 0.5,\n        pointsForContainingLower: 10,\n        pointsForContainingUpper: 10,\n        pointsForContainingNumber: 10,\n        pointsForContainingSymbol: 10,\n    }),\n];\n\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/user/register.js?");

/***/ }),

/***/ "./src/server/js/routes.js":
/*!*********************************!*\
  !*** ./src/server/js/routes.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nrouter.use('/', __webpack_require__(/*! ./routes/html */ \"./src/server/js/routes/html.js\"));\nrouter.use('/api', __webpack_require__(/*! ./routes/api */ \"./src/server/js/routes/api.js\"));\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes.js?");

/***/ }),

/***/ "./src/server/js/routes/api.js":
/*!*************************************!*\
  !*** ./src/server/js/routes/api.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api.js?");

/***/ }),

/***/ "./src/server/js/routes/html.js":
/*!**************************************!*\
  !*** ./src/server/js/routes/html.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nconst AuthenticationMiddleware = __webpack_require__(/*! ../middleware/authentication */ \"./src/server/js/middleware/authentication.js\");\n\nconst sanitiseRegisterMiddleware = __webpack_require__(/*! ../middleware/sanitisation/user/register */ \"./src/server/js/middleware/sanitisation/user/register.js\");\nconst validationRegisterMiddleware = __webpack_require__(/*! ../middleware/validation/user/register */ \"./src/server/js/middleware/validation/user/register.js\");\nconst handleValidationResultMiddleware = __webpack_require__(/*! ../middleware/validation/handleResult */ \"./src/server/js/middleware/validation/handleResult.js\");\nconst registerHandler = __webpack_require__(/*! ./html/register */ \"./src/server/js/routes/html/register.js\");\n\nconst sanitiseLoginMiddleware = __webpack_require__(/*! ../middleware/sanitisation/user/login */ \"./src/server/js/middleware/sanitisation/user/login.js\");\nconst validationLoginMiddleware = __webpack_require__(/*! ../middleware/validation/user/login */ \"./src/server/js/middleware/validation/user/login.js\");\nconst loginHandler = __webpack_require__(/*! ./html/login */ \"./src/server/js/routes/html/login.js\");\n\n// const sanitiseResetMiddleware = require('../middleware/sanitisation/user/reset');\n// const validationResetMiddleware = require('../middleware/validation/user/reset');\n// const resetHandler = require('./html/reset');\n\n/* GET home page. */\nrouter.get('/', [\n    AuthenticationMiddleware,\n    function renderIndex(req, res, next) {\n        res.render('index', { title: `Hello ${res.locals.session.User.forename}!` });\n        next();\n    },\n]);\n\n/* GET home page. */\nrouter.get('/logout', [\n    AuthenticationMiddleware,\n    function setCookie(req, res, next) {\n        res.cookie('session');\n        res.redirect('/');\n        next();\n    },\n]);\n\n// GET login page\nrouter.get('/login', (req, res) => {\n    res.render('login', { title: 'Login' });\n});\n\nrouter.post(\n    '/login',\n    [\n        sanitiseLoginMiddleware,\n        validationLoginMiddleware,\n        handleValidationResultMiddleware,\n        loginHandler,\n    ],\n);\n\n// GET register page\nrouter.get('/register', (req, res) => {\n    res.render('register', { title: 'Register' });\n});\n\nrouter.post(\n    '/register',\n    [\n        sanitiseRegisterMiddleware,\n        validationRegisterMiddleware,\n        handleValidationResultMiddleware,\n        registerHandler,\n    ],\n);\n\nrouter.get('/reset_password', (req, res) => {\n    res.render('reset_password', { title: 'Reset Password' });\n});\n\n// router.post('reset_password', [\n//     sanitiseResetMiddleware,\n//     validationResetMiddleware,\n//     handleValidationResultMiddleware,\n//     resetHandler,\n// ])\n\nrouter.get('/dashboard', (req, res) => {\n    res.render('dashboard', { title: 'Dashboard!' });\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html.js?");

/***/ }),

/***/ "./src/server/js/routes/html/login.js":
/*!********************************************!*\
  !*** ./src/server/js/routes/html/login.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const randomStringGenerator = __webpack_require__(/*! ../../helpers/randomString */ \"./src/server/js/helpers/randomString.js\");\n\nfunction InvalidCredentials() { }\n\nconst getUser = __webpack_require__(/*! ../../helpers/getUser */ \"./src/server/js/helpers/getUser.js\");\n\nmodule.exports = (req, res, next) => {\n    getUser(req)\n        .then((user) => user.createSession({ secret: randomStringGenerator(40) })\n            .then((session) => {\n                res.cookie('session', session.secret);\n                res.redirect('/dashboard');\n            }))\n        .catch((e) => {\n            if (e instanceof InvalidCredentials) {\n                res.send('Invalid credentials');\n            } else {\n                res.send('SOMETHING WENT WRONG');\n                /// render internal server error\n            }\n        });\n    next();\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html/login.js?");

/***/ }),

/***/ "./src/server/js/routes/html/register.js":
/*!***********************************************!*\
  !*** ./src/server/js/routes/html/register.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const sequelize = __webpack_require__(/*! ../../db/sequelize */ \"./src/server/js/db/sequelize.js\");\n\nconst { User } = sequelize.models;\n\nconst encryptPassword = __webpack_require__(/*! ../../helpers/encryptPassword */ \"./src/server/js/helpers/encryptPassword.js\");\nconst randomStringGenerator = __webpack_require__(/*! ../../helpers/randomString */ \"./src/server/js/helpers/randomString.js\");\n// function getCurrentTOS() {\n//     const currentTOS = \"1.0.0\";\n//     return currentTOS;\n// }\n\nconst InvalidUserError = (message) => {\n    this.message = message;\n};\n\nmodule.exports = (req, res, next) => {\n    const currentDate = new Date();\n    const dateTime = currentDate.getDate();\n\n    encryptPassword(req.body.password)\n        .then((hash) => {\n            const val = req.body;\n\n            return User.findOne({ where: { emailAddress: req.body.email } })\n                .then((user) => {\n                    if (user) {\n                        throw new InvalidUserError('User with email already exists');\n                    }\n                })\n                .then(() => User.findOne({ where: { userName: req.body.userName } }))\n                .then((user) => {\n                    if (user) {\n                        throw new InvalidUserError('Username already in use!');\n                    }\n                })\n                .then(() => User.create({\n                    userName: val.userName,\n                    password: hash,\n                    forename: val.forename,\n                    surname: val.surname,\n                    emailAddress: val.email,\n                    tosSigned: true,\n                    tosDateSigned: dateTime,\n                }))\n                .then((user) => user.createSession({ secret: randomStringGenerator(40) })\n                    .then((session) => {\n                        res.cookie('session', session.secret);\n                        res.redirect('/dashboard');\n                    }))\n                .catch((e) => {\n                    if (e instanceof InvalidUserError) {\n                        // render error (e.message)\n                        res.send(e.message);\n                    } else {\n                        res.send('SOMETHING WENT WRONG');\n                        /// render internal server error\n                    }\n                });\n        });\n    next();\n};\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html/register.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-validator");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-errors");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/bin/www");
/******/ 	
/******/ })()
;