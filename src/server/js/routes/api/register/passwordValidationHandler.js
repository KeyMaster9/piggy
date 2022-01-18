const passwordValidator = require('password-validator');

module.exports = (req, res, next) => {
    const password = req.body.password;
    var schema = new passwordValidator();

    // Add properties to it
    schema
        .is().min(8)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits(2)
        .has().not().spaces()
        .is().not().oneOf(['Passw0rd', 'Password123']);

    if (schema.validate(password+'')) {
        next();
    } else {
        next('Error!');
    }

}
