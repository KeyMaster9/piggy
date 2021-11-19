var express = require('express');
var router = express.Router();

router.use('/', require('./routes/html'));
router.use('/api', require('./routes/api'));

module.exports = router;