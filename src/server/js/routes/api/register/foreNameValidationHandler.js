const validator = require('validator');

module.exports = (req, res, next) => {
    const foreName = req.body.foreName;
    if(validator.isLength(foreName+'', 40)) {
        next();
    } else {
        next("Error!");
    }
}