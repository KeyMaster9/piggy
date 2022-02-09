const getUser = require('../../helpers/getUser');

const InvalidCredentials = require('../../helpers/errorThrowers/InvalidCredentials');

module.exports = (req, res, next) => {
    getUser(req)
    // .then((user) => {
    //   // console.log(user);
    // })
        .catch((e) => {
            if (e instanceof InvalidCredentials) {
                res.send('Invalid credentials');
            } else {
                res.send('SOMETHING WENT WRONG');
                /// render internal server error
            }
            next();
        });
};
