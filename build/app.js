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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\nvar sassMiddleware = __webpack_require__(/*! node-sass-middleware */ \"node-sass-middleware\");\n\nvar indexRouter = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\nvar usersRouter = __webpack_require__(/*! ./routes/users */ \"./routes/users.js\");\n\nvar app = express();\n\n// view engine setup\napp.set('views', path.join(__dirname, '/../views'));\napp.set('view engine', 'twig');\n\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\napp.use(sassMiddleware({\n  src: path.join(__dirname, 'public'),\n  dest: path.join(__dirname, 'public'),\n  indentedSyntax: true, // true = .sass and false = .scss\n  sourceMap: true\n}));\napp.use(express.static(path.join(__dirname, 'public')));\n\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n\n// allows all twig files to access public directory\napp.use(express.static('/public'));\n\n// catch 404 and forward to error handler\napp.use(function(req, res, next) {\n  next(createError(404));\n});\n\n// error handler\napp.use(function(err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n\n  // render the error page\n  res.status(err.status || 500);\n  res.render('error');\n});\n\nmodule.exports = app;\n\n//# sourceURL=webpack://piggy/./app.js?");

/***/ }),

/***/ "./bin/www":
/*!*****************!*\
  !*** ./bin/www ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//#!/usr/bin/env node\n\n/**\n * Module dependencies.\n */\n\nvar app = __webpack_require__(/*! ../app */ \"./app.js\");\nvar debug = __webpack_require__(/*! debug */ \"debug\")('finance-management:server');\nvar http = __webpack_require__(/*! http */ \"http\");\n\n/**\n * Get port from environment and store in Express.\n */\n\nvar port = normalizePort(process.env.PORT || '3000');\napp.set('port', port);\n\n/**\n * Create HTTP server.\n */\n\nvar server = http.createServer(app);\n\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nserver.listen(port);\nserver.on('error', onError);\nserver.on('listening', onListening);\n\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string'\n    ? 'Pipe ' + port\n    : 'Port ' + port;\n\n  // handle specific listen errors with friendly messages\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n    default:\n      throw error;\n  }\n}\n\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\nfunction onListening() {\n  var addr = server.address();\n  var bind = typeof addr === 'string'\n    ? 'pipe ' + addr\n    : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n}\n\n\n//# sourceURL=webpack://piggy/./bin/www?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nconst { removeAllListeners } = __webpack_require__(/*! nodemon */ \"nodemon\");\nvar router = express.Router();\n\n/* GET home page. */\nrouter.get('/', function(req, res, next) {\n  res.render('index', { title: 'Piggy' });\n});\n\n//GET register page\nrouter.get('/register', function(req, res) {\n  res.render('register', { title: 'Register'});\n});\n\n//POST register page\nrouter.post('/register', function(req, res) {\n  // if (registration === \"Successful\") {\n  //   res.render('registerSuccess', { title: 'Registration Success'});\n  // } else if (registration === \"Failed\") {\n  //   res.render('registerFail', { title: 'Registration Fail'});\n  // } else {\n  //   res.render('reigsterError', { title: 'Error'});\n  // };\n})\n\n//GET login page\nrouter.get('/login', function(req, res) {\n  res.render('login', { title: 'Login'});\n});\n\n\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./routes/index.js?");

/***/ }),

/***/ "./routes/users.js":
/*!*************************!*\
  !*** ./routes/users.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n/* GET users listing. */\nrouter.get('/', function(req, res, next) {\n  res.send('respond with a resource');\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://piggy/./routes/users.js?");

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

/***/ "node-sass-middleware":
/*!***************************************!*\
  !*** external "node-sass-middleware" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-sass-middleware");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/www");
/******/ 	
/******/ })()
;