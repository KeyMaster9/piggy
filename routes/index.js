var express = require('express');
const { removeAllListeners } = require('nodemon');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Piggy' });
});

//GET register page
router.get('/register', function(req, res) {
  res.render('register', { title: 'Register'});
});

//POST register page
router.post('/register', function(req, res) {
  if (registration === "Successful") {
    res.render('registerSuccess', { title: 'Registration Success'});
  } else if (registration === "Failed") {
    res.render('registerFail', { title: 'Registration Fail'});
  } else {
    res.render('reigsterError', { title: 'Error'});
  };
})

//GET login page
router.get('/login', function(req, res) {
  res.render('login', { title: 'Login'});
});



module.exports = router;
