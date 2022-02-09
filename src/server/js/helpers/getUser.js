const serialize = require('../db/sequelize');
const InvalidCredentials = require('./errorThrowers/InvalidCredentials');

const { User } = serialize.models;

module.exports = function getUser(req) {
    return User.findOne({ where: { userName: req.body.userName } })
        .then((user) => {
            if (!user) {
                throw new InvalidCredentials();
            }

            return user.validatePassword(req.body.password)
                .then((result) => {
                    if (!result) {
                        throw new InvalidCredentials();
                    }
                })
                .then(() => user);
        });
};
