const serialize = require('../db/sequelize');

const { User, Session } = serialize.models;

module.exports = function getSessionFromSessionSecret(secret) {
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
};
