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

eval("var createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\n// //sets up body parser\n// app.use(bodyParser.json());       // to support JSON-encoded bodies\n// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies\n//   extended: true\n// }));\n\n//defines routes\nconst routes = __webpack_require__(/*! ./routes.js */ \"./src/server/js/routes.js\");\n\nvar app = express();\n\n// view engine setup\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'twig');\n\n \napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\n\n//gives access to the public folder\napp.use('/assets', express.static(path.join(__dirname, '/../client')));\n\n//accesses routes\napp.use('/', routes);\n\n// catch 404 and forward to error handler\napp.use(function (req, res, next) {\n  next(createError(404));\n});\n\n// error handler\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n \n  // render the error page\n  res.status(err.status || 500);\n  res.render('error');\n});\n        \n\nmodule.exports = app;\n\n//# sourceURL=webpack://piggy/./src/server/js/app.js?");

/***/ }),

/***/ "./src/server/js/middleware/sanitisation/user/register.js":
/*!****************************************************************!*\
  !*** ./src/server/js/middleware/sanitisation/user/register.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body, validationResult } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = (req, res, next) => {\n    // forename surname email userName password\n    console.log(req.body.forename);\n    body('forename').trim();\n    body('surname').trim();\n    body('userName').trim();\n    body('email').normalizeEmail();\n    body('password').rtrim();\n    next();\n}\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/sanitisation/user/register.js?");

/***/ }),

/***/ "./src/server/js/middleware/validation/user/register.js":
/*!**************************************************************!*\
  !*** ./src/server/js/middleware/validation/user/register.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { body, validationResult } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nmodule.exports = (req, res, next) => {\n    // forename surname email userName password\n    console.log(req.body.forename);\n    body('forename').isLength({ min: 1, max: 40 }).isAlpha();;\n    body('surname').isLength({ min: 1, max: 80 }).isAlpha();\n    body('email').isEmail();\n    body('userName').isLength({ min: 6, max: 25 });\n    body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 });\n\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        return res.status(400).json({ errors: errors.array() });\n    } else {\n        next();\n    }\n    \n}\n\n//# sourceURL=webpack://piggy/./src/server/js/middleware/validation/user/register.js?");

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

eval("var express = __webpack_require__(/*! express */ \"express\");\nconst emailValidation = __webpack_require__(/*! ./api/register/emailValidationHandler */ \"./src/server/js/routes/api/register/emailValidationHandler.js\");\nvar router = express.Router();\n\n\n// const passwordValidationHandler = require('./api/register/passwordValidationHandler');\n// const emailValidationHandler = require('./api/register/emailValidationHandler');\n// const foreNameValidationHandler = require('./api/register/foreNameValidationHandler');\n// const surnameValidationHandler = require('./api/register/surnameValidationHandler');\n// const userNameValidationHandler = require('./api/register/userNameValidationHandler');\n// const uniqueUserValidationHandler = require('./api/register/uniqueUserValidationHandler');\n\nconst sanitiseRegisterMiddleware = __webpack_require__(/*! ../middleware/validation/user/register */ \"./src/server/js/middleware/validation/user/register.js\");\nconst validationRegisterMiddleware = __webpack_require__(/*! ../middleware/sanitisation/user/register */ \"./src/server/js/middleware/sanitisation/user/register.js\");\nconst registerHandler = __webpack_require__(/*! ./api/register */ \"./src/server/js/routes/api/register.js\");\n\n\nrouter.post('/register', [\n    sanitiseRegisterMiddleware,\n    validationRegisterMiddleware,\n    registerHandler,\n]);\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api.js?");

/***/ }),

/***/ "./src/server/js/routes/api/register.js":
/*!**********************************************!*\
  !*** ./src/server/js/routes/api/register.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (req, res, next) {\n    res.send('Hello')\n}\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api/register.js?");

/***/ }),

/***/ "./src/server/js/routes/api/register/emailValidationHandler.js":
/*!*********************************************************************!*\
  !*** ./src/server/js/routes/api/register/emailValidationHandler.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const validator = __webpack_require__(/*! validator */ \"validator\");\n\nmodule.exports = (req, res, next) => {\n    const email = req.body.email;\n    if(validator.isEmail(email+'')) {\n        next();\n    } else {\n        next('Error!');\n    }\n}\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api/register/emailValidationHandler.js?");

/***/ }),

/***/ "./src/server/js/routes/html.js":
/*!**************************************!*\
  !*** ./src/server/js/routes/html.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nconst { removeAllListeners } = __webpack_require__(/*! nodemon */ \"nodemon\");\nvar router = express.Router();\n\n/* GET home page. */\nrouter.get('/', function(req, res, next) {\n  res.render('index', { title: 'Piggy' });\n});\n\n//GET register page\nrouter.get('/register', function(req, res) {\n  res.render('register', { title: 'Register'});\n});\n\n//POST register page\nrouter.post('/register', function(req, res) {\n  // if (registration === \"Successful\") {\n  //   res.render('registerSuccess', { title: 'Registration Success'});\n  // } else if (registration === \"Failed\") {\n  //   res.render('registerFail', { title: 'Registration Fail'});\n  // } else {\n  //   res.render('reigsterError', { title: 'Error'});\n  // };\n});\n\n//GET login page\nrouter.get('/login', function(req, res) {\n  res.render('login', { title: 'Login'});\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

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

/***/ "nodemon":
/*!**************************!*\
  !*** external "nodemon" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemon");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("validator");

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