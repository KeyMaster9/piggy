const bcrypt = require('bcrypt');
const User = require('../../db/models/user')

const encryptPassword = (password, saltRounds = 10) => bcrypt.hash(password, saltRounds);

function getCurrentTOS() {
    const currentTOS = "1.0.0";
    return currentTOS;
}


const InvalidUserError = function (message) {
    this.message = message;
}

module.exports = (req, res, next) => {
    var currentDate = new Date();
    var dateTime = currentDate.getDate()

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
                        throw new InvalidUserError('User with username already exists');
                    }
                })
                .then(() => User.create({ userName: val.userName, password: hash, forename: val.forename, surname: val.surname, emailAddress: val.email, tosSigned: true, tosDateSigned: dateTime }))
                .then(user => {
                    res.redirect('/login');
                    // render done template
                })
                .catch(e => {
                    if (e instanceof InvalidUserError) {
                        // render error (e.message)
                        res.send(e.message);
                    } else {
                        res.send('SOMETHING WENT WRONG');
                        /// render internal server error
                    }

                })
        });
};