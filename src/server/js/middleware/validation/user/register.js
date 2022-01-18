const { body, validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    // forename surname email userName password
    console.log(req.body.forename);
    body('forename').isLength({ min: 1, max: 40 }).isAlpha();;
    body('surname').isLength({ min: 1, max: 80 }).isAlpha();
    body('email').isEmail();
    body('userName').isLength({ min: 6, max: 25 });
    body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        next();
    }
    
}