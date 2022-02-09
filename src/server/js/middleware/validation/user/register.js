const { body } = require('express-validator');

module.exports = [
    body('forename').isLength({ min: 1, max: 40 }).isAlpha(),
    body('surname').isLength({ min: 1, max: 80 }).isAlpha(),
    body('email').isEmail(),
    body('userName').isLength({ min: 6, max: 25 }),
    body('password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
    }),
];
