const sequelize = require('../../db/sequelize');
const User = sequelize.models.User;
const randomStringGenerator = require('../../helpers/randomString');

function InvalidCredentials() { };

const getUser = (req) => {
    return User.findOne({ where: { userName: req.body.userName } })
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
            //const session = user.createSession();
            return user.createSession({ secret: randomStringGenerator(40) })
                .then(session => {
                    res.cookie('session', session.secret);
                    res.redirect('/dashboard');
                })
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