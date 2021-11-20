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

/***/ "./node_modules/password-validator/src/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/password-validator/src/constants.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = {\n  error: {\n    length: 'Length should be a valid positive number',\n    password: 'Password should be a valid string'\n  },\n  regex: {\n    digits: '(\\\\d.*)',\n    letters: '([a-zA-Z].*)',\n    symbols: '([`~\\\\!@#\\\\$%\\\\^\\\\&\\\\*\\\\(\\\\)\\\\-_\\\\=\\\\+\\\\[\\\\\\{\\\\}\\\\]\\\\\\\\\\|;:\\\\\\'\",<.>\\\\/\\\\?€£¥₹§±].*)',\n    spaces: '([\\\\s].*)'\n  }\n};\n\n\n//# sourceURL=webpack://piggy/./node_modules/password-validator/src/constants.js?");

/***/ }),

/***/ "./node_modules/password-validator/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/password-validator/src/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var lib = __webpack_require__(/*! ./lib */ \"./node_modules/password-validator/src/lib.js\");\nvar error = (__webpack_require__(/*! ./constants */ \"./node_modules/password-validator/src/constants.js\").error);\nvar getValidationMessage = __webpack_require__(/*! ./validationMessages */ \"./node_modules/password-validator/src/validationMessages.js\");\n\n/**\n * Validates that a number is a valid length (positive number)\n *\n * @private\n * @param {number} num - Number to validate\n */\nfunction _validateLength(num) {\n  const len = Number(num);\n  if (isNaN(len) || !Number.isInteger(len) || len < 1) {\n    throw new Error(error.length);\n  }\n}\n\n/**\n * Tests a validation and return the result\n *\n * @private\n * @param {string} property - Property to validate\n * @return {boolean} Boolean value indicting the validity\n *           of the password against the property\n */\nfunction _isPasswordValidFor(property) {\n  return lib[property.method].apply(this, property.arguments);\n}\n\n/**\n * Registers the properties of a password-validation schema object\n *\n * @private\n * @param {string} method - Property name\n * @param {array} arguments - arguments for the func property\n */\nfunction _register(method, args, description) {\n  // Add property to the schema\n  this.properties.push({ method, arguments: args, description });\n  return this;\n}\n\nclass PasswordValidator {\n  /**\n   * Creates a password-validator schema\n   *\n   * @constructor\n   */\n  constructor() {\n    this.properties = [];\n  }\n\n  /**\n   * Method to validate the password against schema\n   *\n   * @param {string} pwd - password to validate\n   * @param {object} [options] - optional options to configure validation\n   * @param {boolean} [options.list] - asks for a list of validation\n   *           failures instead of just true/false\n   * @param {boolean} [options.details] - asks for more details about\n   *           failed validations including arguments, and error messages\n   * @return {boolean|array} Boolean value indicting the validity\n   *           of the password as per schema, if 'options.list' or\n   *           'options.details' is not set. Otherwise, it returns an\n   *           array of property names which failed validations\n   */\n  validate(pwd, options) {\n    this.list = Boolean(options && options.list);\n    this.details = Boolean(options && options.details);\n    this.password = String(pwd);\n\n    this.positive = true;\n\n    if (this.list || this.details) {\n      return this.properties.reduce((errorList, property) => {\n        // Applies all validations defined in lib one by one\n        if (!_isPasswordValidFor.call(this, property)) {\n          // If the validation for a property fails,\n          // add it to the error list\n          var detail = property.method;\n          // If the details option was provided,\n          // return a rich object including validation message\n          if (this.details) {\n            detail = { validation: property.method };\n            if (property.arguments && property.arguments[0]) {\n              detail.arguments = property.arguments[0];\n            }\n\n            if (!this.positive && property.method !== 'not') {\n              detail.inverted = true;\n            }\n            var description = property.arguments && property.arguments[1];\n            var validationMessage = description || getValidationMessage(property.method, detail.arguments, detail.inverted);\n            detail.message = validationMessage;\n          }\n\n          return errorList.concat(detail);\n        }\n        return errorList;\n      }, []);\n    }\n    return this.properties.every(_isPasswordValidFor.bind(this));\n  }\n\n  /**\n   * Rule to mandate the presence of letters in the password\n   *\n   * @param {number} [count] - minimum number of letters required\n   * @param {string} [description] - description of the validation\n   */\n  letters(count) {\n    count && _validateLength(count);\n    return _register.call(this, 'letters', arguments);\n  }\n\n  /**\n   * Rule to mandate the presence of digits in the password\n   *\n   * @param {number} [count] - minimum number of digits required\n   * @param {string} [description] - description of the validation\n   */\n  digits(count) {\n    count && _validateLength(count);\n    return _register.call(this, 'digits', arguments);\n  }\n\n  /**\n   * Rule to mandate the presence of symbols in the password\n   *\n   * @param {number} [count] - minimum number of symbols required\n   * @param {string} [description] - description of the validation\n   */\n  symbols(count) {\n    count && _validateLength(count);\n    return _register.call(this, 'symbols', arguments);\n  }\n\n  /**\n   * Rule to specify a minimum length of the password\n   *\n   * @param {number} num - minimum length\n   * @param {string} [description] - description of the validation\n   */\n  min(num) {\n    _validateLength(num);\n    return _register.call(this, 'min', arguments);\n  }\n\n  /**\n   * Rule to specify a maximum length of the password\n   *\n   * @param {number} num - maximum length\n   * @param {string} [description] - description of the validation\n   */\n  max(num) {\n    _validateLength(num);\n    return _register.call(this, 'max', arguments);\n  }\n\n  /**\n   * Rule to mandate the presence of lowercase letters in the password\n   *\n   * @param {number} [count] - minimum number of lowercase letters required\n   * @param {string} [description] - description of the validation\n   */\n  lowercase(count) {\n    count && _validateLength(count);\n    return _register.call(this, 'lowercase', arguments);\n  }\n\n  /**\n   * Rule to mandate the presence of uppercase letters in the password\n   *\n   * @param {number} [count] - minimum number of uppercase letters required\n   * @param {string} [description] - description of the validation\n\n   */\n  uppercase(count) {\n    count && _validateLength(count);\n    return _register.call(this, 'uppercase', arguments);\n  }\n\n  /**\n   * Rule to mandate the presence of space in the password\n   * It can be used along with 'not' to not allow spaces\n   * in the password\n   *\n   * @param {number} [count] - minimum number of spaces required\n   * @param {string} [description] - description of the validation\n   */\n  spaces(count) {\n    count && _validateLength(count);\n    return _register.call(this, 'spaces', arguments);\n  }\n\n  /**\n   * Rule to invert the effects of 'not'\n   * Apart from that, 'has' is also used\n   * to make the api readable and chainable\n   *\n   * @param {string|RegExp} [patten] - pattern to match\n   * @param {string} [description] - description of the validation\n   */\n  has() {\n    return _register.call(this, 'has', arguments);\n  }\n\n  /**\n   * Rule to invert the next applied rules.\n   * All the rules applied after 'not' will have opposite effect,\n   * until 'has' rule is applied\n   *\n   * @param {string|RegExp} [patten] - pattern to not match\n   * @param {string} [description] - description of the validation\n   */\n  not() {\n    return _register.call(this, 'not', arguments);\n  }\n\n  /**\n   * Rule to invert the effects of 'not'\n   * Apart from that, 'is' is also used\n   * to make the api readable and chainable\n   */\n  is() {\n    return _register.call(this, 'is', arguments);\n  }\n\n  /**\n   * Rule to whitelist words to be used as password\n   *\n   * @param {array} list - list of values allowed\n   * @param {string} [description] - description of the validation\n   */\n  oneOf() {\n    return _register.call(this, 'oneOf', arguments);\n  }\n}\n\nmodule.exports = PasswordValidator;\n\n\n//# sourceURL=webpack://piggy/./node_modules/password-validator/src/index.js?");

/***/ }),

/***/ "./node_modules/password-validator/src/lib.js":
/*!****************************************************!*\
  !*** ./node_modules/password-validator/src/lib.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Generic method to test regex\n *\n * @private\n * @param {string} regex - regex to test\n *                           with password\n */\nvar regex = (__webpack_require__(/*! ./constants */ \"./node_modules/password-validator/src/constants.js\").regex);\n\nfunction _process(regexp, repeat) {\n  if (repeat && repeat > 1) {\n    const parsedRepeat = parseInt(repeat, 10);\n    return new RegExp(regexp + '{' + parsedRepeat + ',}').test(this.password) === this.positive;\n  }\n  return new RegExp(regexp).test(this.password) === this.positive;\n}\n\nmodule.exports = {\n\n  /**\n   * Method to invert the next validations\n   *\n   * @param {RegExp} [symbol] - custom Regex which should not be present\n   */\n  not: function not(symbol) {\n    this.positive = false;\n    if (symbol) {\n      return _process.call(this, symbol);\n    }\n    return true;\n  },\n\n  /**\n   * Method to invert the effects of not()\n   *\n   * @param {RegExp} [symbol] - custom Regex which should be present\n   */\n  has: function has(symbol) {\n    this.positive = true;\n    if (symbol) {\n      return _process.call(this, symbol);\n    }\n    return true;\n  },\n\n  /**\n   * Method to invert the effects of not() and\n   * to make the api readable and chainable\n   *\n   */\n  is: function is() {\n    this.positive = true;\n    return true;\n  },\n\n  /**\n   * Method to specify a minimum length\n   *\n   * @param {number} num - minimum length\n   */\n  min: function min(num) {\n    return this.password.length >= num;\n  },\n\n  /**\n   * Method to specify a maximum length\n   *\n   * @param {number} num - maximum length\n   */\n  max: function max(num) {\n    return this.password.length <= num;\n  },\n\n  /**\n   * Method to validate the presence of digits\n   *\n   * @param {number} repeat - count of required digits\n   */\n  digits: function digits(repeat) {\n    return _process.call(this, regex.digits, repeat);\n  },\n\n  /**\n   * Method to validate the presence of letters\n   *\n   * @param {number} repeat - count of required letters\n   */\n  letters: function letters(repeat) {\n    return _process.call(this, regex.letters, repeat);\n  },\n\n  /**\n   * Method to validate the presence of uppercase letters\n   *\n   * @param {number} repeat - count of required uppercase letters\n   */\n  uppercase: function uppercase(repeat) {\n    if (repeat && repeat > 1) {\n      let characterIndex = 0;\n      let upperCaseLetters = 0;\n\n      while ((upperCaseLetters < repeat) && (characterIndex < this.password.length)) {\n        const currentLetter = this.password.charAt(characterIndex);\n        if (currentLetter !== currentLetter.toLowerCase()) {\n          upperCaseLetters++;\n        }\n        characterIndex++;\n      }\n\n      return (upperCaseLetters === repeat) === this.positive;\n    }\n    return (this.password !== this.password.toLowerCase()) === this.positive;\n  },\n\n  /**\n   * Method to validate the presence of lowercase letters\n   *\n   * @param {number} repeat - count of required lowercase letters\n   */\n  lowercase: function lowercase(repeat) {\n    if (repeat && repeat > 1) {\n      let characterIndex = 0;\n      let lowerCaseLetters = 0;\n\n      while ((lowerCaseLetters < repeat) && (characterIndex < this.password.length)) {\n        const currentLetter = this.password.charAt(characterIndex);\n        if (currentLetter !== currentLetter.toUpperCase()) {\n          lowerCaseLetters++;\n        }\n        characterIndex++;\n      }\n\n      return (lowerCaseLetters === repeat) === this.positive;\n    }\n    return (this.password !== this.password.toUpperCase()) === this.positive;\n  },\n\n  /**\n   * Method to validate the presence of symbols\n   *\n   * @param {number} repeat - count of required symbols\n   */\n  symbols: function symbols(repeat) {\n    return _process.call(this, regex.symbols, repeat);\n  },\n\n  /**\n   * Method to validate the presence of space\n   *\n   * @param {number} repeat - count of required spaces\n   */\n  spaces: function spaces(repeat) {\n    return _process.call(this, regex.spaces, repeat);\n  },\n\n  /**\n   * Method to provide pre-defined values for password\n   *\n   * @param {array} list - list of values allowed\n   */\n  oneOf: function oneOf(list) {\n    return list.indexOf(this.password) >= 0 === this.positive;\n  }\n};\n\n\n//# sourceURL=webpack://piggy/./node_modules/password-validator/src/lib.js?");

/***/ }),

/***/ "./node_modules/password-validator/src/validationMessages.js":
/*!*******************************************************************!*\
  !*** ./node_modules/password-validator/src/validationMessages.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = function (method, arg, inverted) {\n  const msgList = inverted ? negativeMessages : positiveMessages;\n  return msgList[method] && msgList[method](arg);\n};\n\nconst positiveMessages = {\n  min: (num) => `The string should have a minimum length of ${num} character${pluralify(num)}`,\n  max: (num) => `The string should have a maximum length of ${num} character${pluralify(num)}`,\n  letters: (num = 1) => `The string should have a minimum of ${num} letter${pluralify(num)}`,\n  digits: (num = 1) => `The string should have a minimum of ${num} digit${pluralify(num)}`,\n  uppercase: (num = 1) => `The string should have a minimum of ${num} uppercase letter${pluralify(num)}`,\n  lowercase: (num = 1) => `The string should have a minimum of ${num} lowercase letter${pluralify(num)}`,\n  symbols: (num = 1) => `The string should have a minimum of ${num} symbol${pluralify(num)}`,\n  spaces: (num = 1) => `The string should have a minimum of ${num} space${pluralify(num)}`,\n  oneOf: (list) => `The string should be ${list.length > 1 ? `one of ${list.slice(0, -1).join(', ')} and ` : ''}${list[list.length - 1]}`,\n  has: (pattern) => `The string should have pattern '${pattern}'`,\n  not: (pattern) => `The string should not have pattern '${pattern}'`\n};\n\nconst negativeMessages = {\n  min: (num) => `The string should have a maximum length of ${num} character${pluralify(num)}`,\n  max: (num) => `The string should have a minimum length of ${num} character${pluralify(num)}`,\n  letters: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} letter${pluralify(num)}`,\n  digits: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} digit${pluralify(num)}`,\n  uppercase: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} uppercase letter${pluralify(num)}`,\n  lowercase: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} lowercase letter${pluralify(num)}`,\n  symbols: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} symbol${pluralify(num)}`,\n  spaces: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} space${pluralify(num)}`,\n  oneOf: (list) => `The string should not be ${list.length > 1 ? `one of ${list.slice(0, -1).join(', ')} and ` : ''}${list[list.length - 1]}`,\n  has: (pattern) => `The string should not have pattern '${pattern}'`,\n  not: (pattern) => `The string should have pattern '${pattern}'`\n\n};\n\nfunction pluralify(num) {\n  return num === 1 ? '' : 's';\n}\n\n\n//# sourceURL=webpack://piggy/./node_modules/password-validator/src/validationMessages.js?");

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

eval("var createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\n// //sets up body parser\n// app.use(bodyParser.json());       // to support JSON-encoded bodies\n// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies\n//   extended: true\n// }));\n\n//defines routes\nconst routes = __webpack_require__(/*! ./routes.js */ \"./src/server/js/routes.js\");\n\nvar app = express();\n\n// view engine setup\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'twig');\n\n \napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\n\n//gives access to the public folder\napp.use('/assets', express.static(path.join(__dirname, '/../client')));\n\n//accesses routes\napp.use('/', routes);\n\n// catch 404 and forward to error handler\napp.use(function (req, res, next) {\n  next(createError(404));\n});\n\n// error handler\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n \n  // render the error page\n  res.status(err.status || 500);\n  res.render('error');\n});\n        \n\nmodule.exports = app;\n\n//# sourceURL=webpack://piggy/./src/server/js/app.js?");

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

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n\nconst passwordValidationHandler = __webpack_require__(/*! ./api/register/passwordValidationHandler */ \"./src/server/js/routes/api/register/passwordValidationHandler.js\");\nrouter.post('/register', (req, res [\n    passwordValidationHandler\n]));\n\n\nmodule.exports = router;\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api.js?");

/***/ }),

/***/ "./src/server/js/routes/api/register/passwordValidationHandler.js":
/*!************************************************************************!*\
  !*** ./src/server/js/routes/api/register/passwordValidationHandler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const passwordValdiator = __webpack_require__(/*! password-validator */ \"./node_modules/password-validator/src/index.js\");\n\nvar password = req.body.password;\nvar schema = new passwordValidator();\n\n// Add properties to it\nschema\n    .is().min(8)\n    .is().max(100)\n    .has().uppercase()\n    .has().lowercase()\n    .has().digits(2)\n    .has().not().spaces()\n    .is().not().oneOf(['Passw0rd', 'Password123']);\n\nconsole.log(schema.validate(password));\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/api/register/passwordValidationHandler.js?");

/***/ }),

/***/ "./src/server/js/routes/html.js":
/*!**************************************!*\
  !*** ./src/server/js/routes/html.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nconst { removeAllListeners } = __webpack_require__(/*! nodemon */ \"nodemon\");\nvar router = express.Router();\n\n/* GET home page. */\nrouter.get('/', function(req, res, next) {\n  res.render('index', { title: 'Piggy' });\n});\n\n//GET register page\nrouter.get('/register', function(req, res) {\n  res.render('register', { title: 'Register'});\n});\n\n//POST register page\nrouter.post('/register', function(req, res) {\n  // if (registration === \"Successful\") {\n  //   res.render('registerSuccess', { title: 'Registration Success'});\n  // } else if (registration === \"Failed\") {\n  //   res.render('registerFail', { title: 'Registration Fail'});\n  // } else {\n  //   res.render('reigsterError', { title: 'Error'});\n  // };\n})\n\n//GET login page\nrouter.get('/login', function(req, res) {\n  res.render('login', { title: 'Login'});\n});\n\n\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./src/server/js/routes/html.js?");

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