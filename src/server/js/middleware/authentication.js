const getSessionFromSessionSecret = require('../helpers/getSessionFromSessionSecret');

module.exports = (req, res, next) => {
    const { cookies } = req;

    getSessionFromSessionSecret(cookies.session)
        .then((session) => {
            res.locals.session = session;
            next();
        })
        .catch(() => {
            res.redirect('/login');
        });
};
