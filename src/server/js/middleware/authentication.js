const serialize = require('../db/sequelize');
const Session = serialize.models.Session;
const User = serialize.models.User;

function getSessionFromSessionSecret(secret) {
    if (!secret) {
        return Promise.reject();
    }

    return Session.findOne({ where: { secret }, include: User })
        .then((session) => {
            if (!session) {
                throw new Error('Session not found');
            }
            return session;
        });
}

module.exports = (req, res, next) => {
    const { cookies } = req;

    getSessionFromSessionSecret(cookies.session)
        .then(session => {
            res.locals.session = session;
            next();
        })
        .catch(e => {
            res.redirect('/login')
        })
}