const bcrypt = require('bcrypt');
const User = require('../../db/models/user')

const getUser = (req) => {
    return User.findOne({ where: { userName: req.body.userName } })
        .then((user) => {
            if (!user) {
                throw new InvalidCredentials();
            }

            return bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (!result) {
                        throw new InvalidCredentials();
                    }
                })
                .then(() => user);
        })

}

function InvalidCredentials() { };

module.exports = (req, res, next) => {
    getUser(req)
        .then((user) => {
            res.send(`Welcome ${user.forename}!`);
        })
        .catch(e => {
            if (e instanceof InvalidCredentials) {
                res.send('Invalid credentials');
            } else {
                res.send('SOMETHING WENT WRONG');
                /// render internal server error
            }

        })
};