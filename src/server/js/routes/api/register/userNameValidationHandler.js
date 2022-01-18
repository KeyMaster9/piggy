const validator = require('validator');

module.exports = (req, res, next) => {
    const userName = req.body.userName;

    if(validator.isString(userName+'').isLength(userName+'', 20).isAlphanumeric(userName+'')) {

    }
}