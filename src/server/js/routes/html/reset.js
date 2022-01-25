const sequelize = require('../../db/sequelize');
const User = sequelize.models.User;
const randomStringGenerator = require('../../helpers/randomString');function InvalidCredentials() { };

const getUser = (req) => {
    return User.findOne({ where: { emailAddress: req.body.email } })
        .then((user) => {
            if (!user) {
                throw new InvalidCredentials();
            }

            return user.validatePassword(req.body.password)
                .then(result => {
                    if (!result) {
                        throw new InvalidCredentials();
                    }
                })
                .then(() => user);
        })
}


module.exports = (req, res, next) => {
    getUser(req)
        .then((user) => {
            
        })
        .catch(e => {
            if (e instanceof InvalidCredentials) {
                res.send('Invalid credentials');
            } else {
                res.send('SOMETHING WENT WRONG');
                /// render internal server error
            }
            console.log(e);

        })
};