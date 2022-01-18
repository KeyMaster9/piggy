const validator = require('validator');

module.exports = (req, res, next) => {
    const email = req.body.email;
    if(validator.isEmail(email+'')) {
        next();
    } else {
        next('Error!');
    }
}