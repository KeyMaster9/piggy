const randomStringGenerator = require('../../helpers/randomString');

function InvalidCredentials() { }

const getUser = require('../../helpers/getUser');

module.exports = (req, res, next) => {
    getUser(req)
        .then((user) => user.createSession({ secret: randomStringGenerator(40) })
            .then((session) => {
                res.cookie('session', session.secret);
                res.redirect('/dashboard');
            }))
        .catch((e) => {
            if (e instanceof InvalidCredentials) {
                res.send('Invalid credentials');
            } else {
                res.send('SOMETHING WENT WRONG');
                /// render internal server error
            }
        });
    next();
};
