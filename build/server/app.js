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

/***/ "./src/server/bin/sync.js":
/*!********************************!*\
  !*** ./src/server/bin/sync.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const serialize = __webpack_require__(/*! ../js/db/sequelize */ \"./src/server/js/db/sequelize.js\");\n\n__webpack_require__(/*! ../js/db/models/user */ \"./src/server/js/db/models/user.js\");\n\nserialize.sync();\n\n//# sourceURL=webpack://piggy/./src/server/bin/sync.js?");

/***/ }),

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

eval("var createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\n\n// Setup serialize for developemnt only\n__webpack_require__(/*! ../bin/sync */ \"./src/server/bin/sync.js\");\n\nconst routes = __webpack_require__(/*! ./routes.js */ \"./src/server/js/routes.js\");\nvar app = express(); \n\n// view engine setup\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'twig');\n\n \napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\n\n//gives access to the public folder\napp.use('/assets', express.static(path.join(__dirname, '/../client')));\n\n//accesses routes\napp.use('/', routes);\n\n// catch 404 and forward to error handler\napp.use(function (req, res, next) {\n  next(createError(404));\n});\n\n// error handler\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n \n  // render the error page\n  res.status(err.status || 500);\n  res.render('error');\n});\n        \n\nmodule.exports = app;\n\n//# sourceURL=webpack://piggy/./src/server/js/app.js?");

/***/ }),

/***/ "./src/server/js/db/models/user.js":
/*!*****************************************!*\
  !*** ./src/server/js/db/models/user.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Sequelize } = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst sequelize = __webpack_require__(/*! ../sequelize */ \"./src/server/js/db/sequelize.js\");\n\n//starts the user database:\nclass User extends Sequelize.Model { }\nUser.init({\n    id: {\n        type: Sequelize.INTEGER,\n        primaryKey: true,\n        autoIncrement: true,\n    },\n    userName: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        unique: true,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Username\"',\n            },\n        },\n\n    },\n    password: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Password\"',\n            },\n        },\n    },\n    forename: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Forename\"',\n            },\n        },\n    },\n    surname: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Surname\"',\n            },\n        },\n    },\n    emailAddress: {\n        type: Sequelize.STRING,\n        allowNull: false,\n        unique: true,\n        validate: {\n            notEmpty: {\n                msg: 'Please provide a value for \"Email Address\"',\n            },\n        },\n    },\n    tosSigned: {\n        type: Sequelize.BOOLEAN,\n        defaultValue: false,\n        allowNull: false,\n        validate: {\n            notEmpty: {\n                msg: 'Please accept \"TOS\"',\n            },\n        },\n    },\n    tosVersionSigned: {\n        type: Sequelize.STRING,\n        allowNull: true,\n        validate: {\n            notEmpty: true,\n        },\n    },\n    tosDateSigned: {\n        type: Sequelize.DATE,\n        allowNull: true,\n        validate: {\n            notEmpty: true,\n        },\n    },\n    primaryDataOwned: {\n        type: Sequelize.JSON,\n        defaultValue: {},\n        allowNull: true,\n        validate: {\n            notEmpty: false,\n        },\n    },\n    secondaryDataOwned: {\n        type: Sequelize.JSON,\n        defaultValue: {},\n        allowNull: true,\n        validate: {\n            notEmpty: false,\n        },\n    },\n}, {\n    sequelize,\n    modelName: 'User'\n});\n\nmodule.exports = User;\n\n//# sourceURL=webpack://piggy/./src/server/js/db/models/user.js?");

/***/ }),

/***/ "./src/server/js/db/sequelize.js":
/*!***************************************!*\
  !*** ./src/server/js/db/sequelize.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nconst sequelize = new Sequelize('sqlite::memory:');\n\nmodule.exports = sequelize;\n\n//# sourceURL=webpack://piggy/./src/server/js/db/sequelize.js?");

/***/ }),

/***/ "./src/server/js/middleware/sanitisation/user/login.js":
/*!*************************************************************!*\
  !*** ./src/server/js/middleware/sanitisation/user/login.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body(\"userName\").trim(),\n    body(\"password\").rtrim(),\n]\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/sanitisation/user/login.js?");

/***/ }),

/***/ "./src/server/js/middleware/sanitisation/user/register.js":
/*!****************************************************************!*\
  !*** ./src/server/js/middleware/sanitisation/user/register.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body, validationResult } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body(\"forename\").trim(),\n    body(\"surname\").trim(),\n    body(\"userName\").trim(),\n    body(\"email\").normalizeEmail(),\n    body(\"password\").rtrim(),\n]\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/sanitisation/user/register.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/handleResult.js":
/*!*************************************************************!*\
  !*** ./src/server/js/middleware/validation/handleResult.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { validationResult } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = (req, res, next) => {\n        const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        return res.status(400).json({ errors: errors.array() });\n    } else {\n        next();\n    }\n};\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/handleResult.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/user/login.js":
/*!***********************************************************!*\
  !*** ./src/server/js/middleware/validation/user/login.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body(\"userName\").isLength({ min: 6, max: 25 }),\n    body(\"password\").isStrongPassword({\n        minLength: 8,\n        minLowercase: 1,\n        minUppercase: 1,\n        minNumbers: 1,\n        minSymbols: 1,\n        returnScore: false,\n        pointsPerUnique: 1,\n        pointsPerRepeat: 0.5,\n        pointsForContainingLower: 10,\n        pointsForContainingUpper: 10,\n        pointsForContainingNumber: 10,\n        pointsForContainingSymbol: 10,\n    })\n];\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/user/login.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/user/register.js":
/*!**************************************************************!*\
  !*** ./src/server/js/middleware/validation/user/register.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = [\n    body(\"forename\").isLength({ min: 1, max: 40 }).isAlpha(),\n    body(\"surname\").isLength({ min: 1, max: 80 }).isAlpha(),\n    body(\"email\").isEmail(),\n    body(\"userName\").isLength({ min: 6, max: 25 }),\n    body(\"password\").isStrongPassword({\n        minLength: 8,\n        minLowercase: 1,\n        minUppercase: 1,\n        minNumbers: 1,\n        minSymbols: 1,\n        returnScore: false,\n        pointsPerUnique: 1,\n        pointsPerRepeat: 0.5,\n        pointsForContainingLower: 10,\n        pointsForContainingUpper: 10,\n        pointsForContainingNumber: 10,\n        pointsForContainingSymbol: 10,\n    })\n];\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/user/register.js?");

/***/ }),

/***/ "./src/server/js/routes.js":
/*!*********************************!*\
  !*** ./src/server/js/routes.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\nrouter.use('/', __webpack_require__(/*! ./routes/html */ \"./src/server/js/routes/html.js\"));\nrouter.use('/api', __webpack_require__(/*! ./routes/api */ \"./src/server/js/routes/api.js\"));\n\nmodule.exports = router;\n\n//# sourceURL=webpack://piggy/./src/server/js/routes.js?");

/***/ }),

/***/ "./src/server/js/routes/api.js":
/*!*************************************!*\
  !*** ./src/server/js/routes/api.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n\n\nmodule.exports = router;\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api.js?");

/***/ }),

/***/ "./src/server/js/routes/html.js":
/*!**************************************!*\
  !*** ./src/server/js/routes/html.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n\nconst sanitiseRegisterMiddleware = __webpack_require__(/*! ../middleware/sanitisation/user/register */ \"./src/server/js/middleware/sanitisation/user/register.js\");\nconst validationRegisterMiddleware = __webpack_require__(/*! ../middleware/validation/user/register */ \"./src/server/js/middleware/validation/user/register.js\");\nconst handleValidationResultMiddleware = __webpack_require__(/*! ../middleware/validation/handleResult */ \"./src/server/js/middleware/validation/handleResult.js\");\nconst registerHandler = __webpack_require__(/*! ./html/register */ \"./src/server/js/routes/html/register.js\");\n\nconst sanitiseLoginMiddleware = __webpack_require__(/*! ../middleware/sanitisation/user/login */ \"./src/server/js/middleware/sanitisation/user/login.js\");\nconst validationLoginMiddleware = __webpack_require__(/*! ../middleware/validation/user/login */ \"./src/server/js/middleware/validation/user/login.js\");\nconst loginHandler = __webpack_require__(/*! ./html/login */ \"./src/server/js/routes/html/login.js\");\n\n/* GET home page. */\nrouter.get('/', function (req, res, next) {\n    res.render('index', { title: 'Piggy' });\n});\n\n//GET login page\nrouter.get('/login', function (req, res) {\n    res.render('login', { title: 'Login' });\n});\nrouter.post(\n    \"/login\",\n    [\n        sanitiseLoginMiddleware,\n        validationLoginMiddleware,\n        handleValidationResultMiddleware,\n        loginHandler,\n    ],\n);\n\n\n//GET register page\nrouter.get('/register', function (req, res) {\n    res.render('register', { title: 'Register' });\n});\n\nrouter.post(\n    \"/register\",\n    [\n        sanitiseRegisterMiddleware,\n        validationRegisterMiddleware,\n        handleValidationResultMiddleware,\n        registerHandler,\n    ],\n);\n\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html.js?");

/***/ }),

/***/ "./src/server/js/routes/html/login.js":
/*!********************************************!*\
  !*** ./src/server/js/routes/html/login.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst User = __webpack_require__(/*! ../../db/models/user */ \"./src/server/js/db/models/user.js\")\n\nconst getUser = (req) => {\n    return User.findOne({ where: { userName: req.body.userName } })\n        .then((user) => {\n            if (!user) {\n                throw new InvalidCredentials();\n            }\n\n            return bcrypt.compare(req.body.password, user.password)\n                .then(result => {\n                    if (!result) {\n                        throw new InvalidCredentials();\n                    }\n                })\n                .then(() => user);\n        })\n}\n\nfunction InvalidCredentials() { };\n\nmodule.exports = (req, res, next) => {\n    getUser(req)\n        .then((user) => {\n            res.send(`Welcome ${user.forename}!`);\n        })\n        .catch(e => {\n            if (e instanceof InvalidCredentials) {\n                res.send('Invalid credentials');\n            } else {\n                res.send('SOMETHING WENT WRONG');\n                /// render internal server error\n            }\n\n        })\n};\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html/login.js?");

/***/ }),

/***/ "./src/server/js/routes/html/register.js":
/*!***********************************************!*\
  !*** ./src/server/js/routes/html/register.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst User = __webpack_require__(/*! ../../db/models/user */ \"./src/server/js/db/models/user.js\")\n\nconst encryptPassword = (password, saltRounds = 10) => bcrypt.hash(password, saltRounds);\n\nfunction getCurrentTOS() {\n    const currentTOS = \"1.0.0\";\n    return currentTOS;\n}\n\n\nconst InvalidUserError = function (message) {\n    this.message = message;\n}\n\nmodule.exports = (req, res, next) => {\n    var currentDate = new Date();\n    var dateTime = currentDate.getDate()\n\n    encryptPassword(req.body.password)\n        .then((hash) => {\n\n            const val = req.body;\n\n            return User.findOne({ where: { emailAddress: req.body.email } })\n                .then((user) => {\n                    if (user) {\n                        throw new InvalidUserError('User with email already exists');\n                    }\n                })\n                .then(() => User.findOne({ where: { userName: req.body.userName } }))\n                .then((user) => {\n                    if (user) {\n                        throw new InvalidUserError('User with username already exists');\n                    }\n                })\n                .then(() => User.create({ userName: val.userName, password: hash, forename: val.forename, surname: val.surname, emailAddress: val.email, tosSigned: true, tosDateSigned: dateTime }))\n                .then(user => {\n                    res.redirect('/login');\n                    // render done template\n                })\n                .catch(e => {\n                    if (e instanceof InvalidUserError) {\n                        // render error (e.message)\n                        res.send(e.message);\n                    } else {\n                        res.send('SOMETHING WENT WRONG');\n                        /// render internal server error\n                    }\n\n                })\n        });\n};\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html/register.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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