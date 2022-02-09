const sequelize = require('../../db/sequelize');

const { User } = sequelize.models;

const encryptPassword = require('../../helpers/encryptPassword');
const randomStringGenerator = require('../../helpers/randomString');
// function getCurrentTOS() {
//     const currentTOS = "1.0.0";
//     return currentTOS;
// }

const InvalidUserError = (message) => {
    this.message = message;
};

module.exports = (req, res, next) => {
    const currentDate = new Date();
    const dateTime = currentDate.getDate();

    encryptPassword(req.body.password)
        .then((hash) => {
            const val = req.body;

            return User.findOne({ where: { emailAddress: req.body.email } })
                .then((user) => {
                    if (user) {
                        throw new InvalidUserError('User with email already exists');
                    }
                })
                .then(() => User.findOne({ where: { userName: req.body.userName } }))
                .then((user) => {
                    if (user) {
                        throw new InvalidUserError('Username already in use!');
                    }
                })
                .then(() => User.create({
                    userName: val.userName,
                    password: hash,
                    forename: val.forename,
                    surname: val.surname,
                    emailAddress: val.email,
                    tosSigned: true,
                    tosDateSigned: dateTime,
                }))
                .then((user) => user.createSession({ secret: randomStringGenerator(40) })
                    .then((session) => {
                        res.cookie('session', session.secret);
                        res.redirect('/dashboard');
                    }))
                .catch((e) => {
                    if (e instanceof InvalidUserError) {
                        // render error (e.message)
                        res.send(e.message);
                    } else {
                        res.send('SOMETHING WENT WRONG');
                        /// render internal server error
                    }
                });
        });
    next();
};
