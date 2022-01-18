const validator = require('validator');

module.exports = (req, res, next) => {
    const surname = req.body.surname;
    if(validator.isLength(surname+'', 80)) {
        next();
    } else {
        next("Error!");
    }
}